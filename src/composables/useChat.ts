import { ref, watch } from 'vue'
import type { Message } from '@/types/chat'
import { chatService } from '@/services/chat'

const STORAGE_KEY = 'chat_messages'

export function useChat() {
  const messages = ref<Message[]>([])
  const isTyping = ref(false)
  const conversationId = ref<string | null>(null)
  const error = ref<string | null>(null)

  // 从 localStorage 加载聊天历史
  const loadFromStorage = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const data = JSON.parse(stored)
        messages.value = data.messages || []
        conversationId.value = data.conversationId || null
      }
    } catch {
      // 忽略解析错误
    }
  }

  // 保存到 localStorage
  const saveToStorage = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      messages: messages.value,
      conversationId: conversationId.value
    }))
  }

  // 监听消息变化自动保存
  watch([messages, conversationId], () => {
    saveToStorage()
  }, { deep: true })

  // 初始化时加载
  loadFromStorage()

  // 获取当前时间
  const getCurrentTime = () => {
    const now = new Date()
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
  }

  // 发送消息
  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping.value) return

    error.value = null

    // 添加用户消息
    const userMessage: Message = {
      id: `msg_${Date.now()}_user`,
      role: 'user',
      content: text.trim(),
      timestamp: Date.now()
    }
    messages.value.push(userMessage)

    // 创建助手消息占位符
    const assistantMessage: Message = {
      id: `msg_${Date.now()}_assistant`,
      role: 'assistant',
      content: '',
      timestamp: Date.now(),
      isStreaming: true
    }
    messages.value.push(assistantMessage)

    isTyping.value = true

    try {
      await chatService.sendMessageStream(
        text,
        {
          onDelta: (content: string) => {
            // 追加内容到当前消息
            const msg = messages.value[messages.value.length - 1]
            if (msg && msg.role === 'assistant') {
              msg.content += content
            }
          },
          onChatCompleted: (_chatId: string, convId: string) => {
            conversationId.value = convId
            const msg = messages.value[messages.value.length - 1]
            if (msg && msg.role === 'assistant') {
              msg.isStreaming = false
            }
            isTyping.value = false
          },
          onChatFailed: (err: string) => {
            error.value = err
            isTyping.value = false
          },
          onError: (err: Error) => {
            error.value = err.message
            isTyping.value = false
          }
        },
        conversationId.value
      )
    } catch (err) {
      error.value = err instanceof Error ? err.message : '发送消息失败'
      isTyping.value = false
    }
  }

  // 清空对话
  const clearChat = () => {
    messages.value = []
    conversationId.value = null
    error.value = null
    localStorage.removeItem(STORAGE_KEY)
  }

  return {
    messages,
    isTyping,
    error,
    sendMessage,
    clearChat
  }
}
