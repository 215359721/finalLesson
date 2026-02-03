import type {
  CozeChatRequest,
  CozeStreamCallbacks
} from '@/types/chat'

// Coze API 配置
const COZE_CONFIG = {
  baseURL: import.meta.env.VITE_COZE_API_BASE_URL || 'https://api.coze.cn/v3',
  botId: import.meta.env.VITE_COZE_BOT_ID || '',
  pat: import.meta.env.VITE_COZE_PAT || ''
}

const generateUserId = () => {
  let userId = localStorage.getItem('coze_user_id')
  if (!userId) {
    userId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
    localStorage.setItem('coze_user_id', userId)
  }
  return userId
}

export const chatService = {
  /**
   * 发送流式聊天消息
   */
  async sendMessageStream(
    userMessage: string,
    callbacks: CozeStreamCallbacks,
    conversationId: string | null = null
  ): Promise<{ chatId: string; conversationId: string }> {
    const { baseURL, botId, pat } = COZE_CONFIG

    if (!botId || !pat) {
      throw new Error('Coze Bot ID 或 PAT 未配置，请检查 .env 文件')
    }

    const url = `${baseURL}/chat`
    const userId = generateUserId()

    const requestBody: CozeChatRequest = {
      bot_id: botId,
      user_id: userId,
      stream: true,
      auto_save_history: true,
      additional_messages: [
        {
          role: 'user',
          content: userMessage,
          content_type: 'text'
        }
      ]
    }

    if (conversationId) {
      requestBody.conversation_id = conversationId
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${pat}`,
          'Content-Type': 'application/json',
          'Accept': 'text/event-stream'
        },
        body: JSON.stringify(requestBody)
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`API 请求失败 (${response.status}): ${errorText}`)
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) {
        throw new Error('响应流为空')
      }

      let buffer = ''
      let resultChatId = ''
      let resultConversationId = conversationId || ''
      let currentMessageContent = ''
      let currentEvent = ''

      while (true) {
        const { done, value } = await reader.read()

        if (done) break

        buffer += decoder.decode(value, { stream: true })

        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          if (!line.trim()) continue

          if (line.startsWith('event:')) {
            currentEvent = line.slice(6).trim()
            continue
          }

          if (line.startsWith('data:')) {
            const data = line.slice(5).trim()

            if (data === '[DONE]') {
              callbacks.onChatCompleted?.(resultChatId, resultConversationId)
              return { chatId: resultChatId, conversationId: resultConversationId }
            }

            try {
              const eventData = JSON.parse(data)

              if (eventData.chat) {
                resultChatId = eventData.chat.id
                resultConversationId = eventData.chat.conversation_id

                if (eventData.chat.status === 'completed') {
                  callbacks.onChatCompleted?.(resultChatId, resultConversationId)
                } else if (eventData.chat.status === 'failed') {
                  callbacks.onChatFailed?.('对话失败')
                }
              }

              // 处理流式增量内容
              if (currentEvent === 'conversation.message.delta' &&
                  eventData.type === 'answer' &&
                  eventData.content) {
                const content = eventData.content
                currentMessageContent += content
                callbacks.onDelta?.(content)

                const messageId = eventData.id || resultChatId
                callbacks.onMessage?.(messageId, currentMessageContent)
              }

              if (eventData.error) {
                callbacks.onError?.(new Error(`${eventData.error.code}: ${eventData.error.msg}`))
              }
            } catch {
              // JSON 解析失败，忽略
            }
          }
        }
      }

      callbacks.onChatCompleted?.(resultChatId, resultConversationId || '')
      return { chatId: resultChatId, conversationId: resultConversationId }

    } catch (error) {
      callbacks.onError?.(error as Error)
      throw error
    }
  },

  /**
   * 清除用户 ID
   */
  clearUserId() {
    localStorage.removeItem('coze_user_id')
  }
}
