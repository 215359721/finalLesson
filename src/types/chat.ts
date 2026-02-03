// ==================== 通用类型 ====================

// 消息类型
export type MessageRole = 'user' | 'assistant' | 'system'

// 单条消息
export interface Message {
  id: string
  role: MessageRole
  content: string
  timestamp: number
  isStreaming?: boolean
}

// 会话
export interface Conversation {
  id: string
  title: string
  messages: Message[]
  createdAt: number
  updatedAt: number
}

// ==================== Coze API 类型 ====================

// Coze 消息内容类型
export type CozeContentType = 'object_string' | 'text' | 'answer'

// Coze 消息内容
export interface CozeContent {
  type: CozeContentType
  text?: string
}

// Coze 消息
export interface CozeMessage {
  role: 'user' | 'assistant'
  content: string
  content_type: CozeContentType
}

// Coze 聊天请求
export interface CozeChatRequest {
  bot_id: string
  user_id: string
  stream: true
  auto_save_history: boolean
  additional_messages: CozeMessage[]
  conversation_id?: string
}

// Coze SSE 事件数据
export interface CozeStreamEventData {
  chat?: {
    id: string
    conversation_id: string
    status: 'in_progress' | 'completed' | 'failed'
  }
  message?: {
    id: string
    content: string
    role: 'assistant' | 'user'
  }
  error?: {
    code: string
    msg: string
  }
}

// Coze 流式响应回调
export interface CozeStreamCallbacks {
  onDelta?: (content: string) => void
  onMessage?: (messageId: string, content: string) => void
  onChatCompleted?: (chatId: string, conversationId: string) => void
  onChatFailed?: (error: string) => void
  onError?: (error: Error) => void
}
