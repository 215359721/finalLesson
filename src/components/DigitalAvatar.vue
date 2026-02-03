<template>
  <div class="digital-avatar">
    <div class="avatar-container glass">
      <!-- Chat Header -->
      <div class="avatar-header">
        <div class="avatar-info">
          <div class="avatar-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="8" r="4"/>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            </svg>
          </div>
          <div class="avatar-details">
            <span class="avatar-name">AI 助手</span>
            <span class="avatar-status">在线</span>
          </div>
        </div>
        <div class="avatar-actions">
          <button class="icon-btn" title="新对话" @click="showClearConfirm = true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
          <button class="icon-btn" title="全屏对话" @click="isDrawerOpen = true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Error Alert -->
      <div v-if="error" class="error-alert">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <span>{{ error }}</span>
      </div>

      <!-- Chat Messages -->
      <div class="avatar-messages" ref="messagesRef">
        <!-- Welcome Message (only show when no messages) -->
        <div v-if="messages.length === 0" class="message assistant">
          <div class="message-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="8" r="4"/>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            </svg>
          </div>
          <div class="message-content">
            <div class="message-text">
              你好！我是AI助手，可以帮你了解更多关于我的信息。
            </div>
          </div>
        </div>

        <!-- Chat Messages -->
        <div
          v-for="msg in messages"
          :key="msg.id"
          :class="['message', msg.role]"
        >
          <div v-if="msg.role === 'assistant'" class="message-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="8" r="4"/>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            </svg>
          </div>
          <div class="message-content">
            <div class="message-text" v-html="formatMessage(msg.content)"></div>
            <div class="message-time">{{ formatTime(msg.timestamp) }}</div>
          </div>
          <div v-if="msg.role === 'user'" class="message-avatar user">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="8" r="4"/>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            </svg>
          </div>
        </div>

        <!-- Typing Indicator -->
        <div v-if="isTyping" class="message assistant">
          <div class="message-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="8" r="4"/>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            </svg>
          </div>
          <div class="message-content">
            <div class="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Input Area -->
      <div class="avatar-input">
        <!-- Quick Suggestions -->
        <div class="input-suggestions">
          <button
            v-for="suggestion in suggestions"
            :key="suggestion"
            class="suggestion-chip-small"
            @click="handleSend(suggestion)"
            :disabled="isTyping"
          >
            {{ suggestion }}
          </button>
        </div>
        <div class="input-wrapper">
          <textarea
            v-model="inputMessage"
            placeholder="输入你的问题..."
            rows="1"
            @keydown.enter.prevent="handleEnterKey"
            :disabled="isTyping"
            ref="textareaRef"
          ></textarea>
          <button
            class="send-btn"
            @click="handleSend()"
            :disabled="!inputMessage.trim() || isTyping"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Drawer -->
    <Teleport to="body">
      <Transition name="drawer">
        <div v-if="isDrawerOpen" class="drawer-overlay" @click.self="isDrawerOpen = false">
          <div class="drawer-container glass">
            <!-- Chat Header -->
            <div class="avatar-header">
              <div class="avatar-info">
                <div class="avatar-avatar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  </svg>
                </div>
                <div class="avatar-details">
                  <span class="avatar-name">AI 助手</span>
                  <span class="avatar-status">在线</span>
                </div>
              </div>
              <div class="avatar-actions">
                <button class="icon-btn" title="新对话" @click="showClearConfirm = true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </button>
                <button class="icon-btn" title="关闭" @click="isDrawerOpen = false">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Error Alert -->
            <div v-if="error" class="error-alert">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <span>{{ error }}</span>
            </div>

            <!-- Chat Messages -->
            <div class="avatar-messages" ref="drawerMessagesRef">
              <!-- Welcome Message (only show when no messages) -->
              <div v-if="messages.length === 0" class="message assistant">
                <div class="message-avatar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  </svg>
                </div>
                <div class="message-content">
                  <div class="message-text">
                    你好！我是AI助手，可以帮你了解更多关于我的信息。
                  </div>
                </div>
              </div>

              <!-- Chat Messages -->
              <div
                v-for="msg in messages"
                :key="msg.id"
                :class="['message', msg.role]"
              >
                <div v-if="msg.role === 'assistant'" class="message-avatar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  </svg>
                </div>
                <div class="message-content">
                  <div class="message-text" v-html="formatMessage(msg.content)"></div>
                  <div class="message-time">{{ formatTime(msg.timestamp) }}</div>
                </div>
                <div v-if="msg.role === 'user'" class="message-avatar user">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  </svg>
                </div>
              </div>

              <!-- Typing Indicator -->
              <div v-if="isTyping" class="message assistant">
                <div class="message-avatar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  </svg>
                </div>
                <div class="message-content">
                  <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Input Area -->
            <div class="avatar-input">
              <!-- Quick Suggestions -->
              <div class="input-suggestions">
                <button
                  v-for="suggestion in suggestions"
                  :key="suggestion"
                  class="suggestion-chip-small"
                  @click="handleSend(suggestion)"
                  :disabled="isTyping"
                >
                  {{ suggestion }}
                </button>
              </div>
              <div class="input-wrapper">
                <textarea
                  v-model="inputMessage"
                  placeholder="输入你的问题..."
                  rows="1"
                  @keydown.enter.prevent="handleEnterKey"
                  :disabled="isTyping"
                  ref="drawerTextareaRef"
                ></textarea>
                <button
                  class="send-btn"
                  @click="handleSend()"
                  :disabled="!inputMessage.trim() || isTyping"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Clear Confirm Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showClearConfirm" class="modal-overlay" @click.self="showClearConfirm = false">
          <div class="modal-container glass">
            <div class="modal-header">
              <h3>新对话</h3>
            </div>
            <div class="modal-body">
              <p>确定要清空当前对话并开始新会话吗？</p>
              <p class="modal-hint">此操作将删除所有聊天记录，无法恢复。</p>
            </div>
            <div class="modal-footer">
              <button class="modal-btn modal-btn-cancel" @click="showClearConfirm = false">取消</button>
              <button class="modal-btn modal-btn-confirm" @click="handleClearConfirm">确定</button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import { useChat } from '@/composables/useChat'

const { messages, isTyping, error, sendMessage, clearChat } = useChat()

const inputMessage = ref('')
const messagesRef = ref<HTMLElement>()
const drawerMessagesRef = ref<HTMLElement>()
const textareaRef = ref<HTMLTextAreaElement>()
const drawerTextareaRef = ref<HTMLTextAreaElement>()
const isDrawerOpen = ref(false)
const showClearConfirm = ref(false)

// 禁用/启用底层页面滚动
watch(isDrawerOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

const suggestions = [
  '介绍一下自己',
  '你会做什么项目？',
  '你学习了哪些课程？',
  '如何联系你？'
]

// 格式化消息内容（处理换行、链接、格式）
const formatMessage = (content: string) => {
  if (!content) return ''
  return content
    // 转义 HTML 特殊字符（先转义避免 XSS）
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // 识别 URL 并转换为链接
    .replace(/(https?:\/\/[^\s<>"']+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="message-link">$1</a>')
    // 处理换行
    .replace(/\n/g, '<br>')
    // 处理粗体
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // 处理斜体
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
}

// 格式化时间戳
const formatTime = (timestamp: number) => {
  const date = new Date(timestamp)
  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
}

// 处理回车键（Shift+Enter 换行，Enter 发送）
const handleEnterKey = (e: KeyboardEvent) => {
  if (!e.shiftKey) {
    handleSend()
  }
}

// 自动调整 textarea 高度
const adjustTextareaHeight = (textarea: HTMLTextAreaElement | undefined) => {
  if (!textarea) return
  textarea.style.height = 'auto'
  const newHeight = Math.min(textarea.scrollHeight, 120)
  textarea.style.height = newHeight + 'px'
}

// 监听输入框内容变化，自动调整高度
watch(inputMessage, () => {
  adjustTextareaHeight(textareaRef.value)
  adjustTextareaHeight(drawerTextareaRef.value)
})

const handleSend = async (text?: string) => {
  const messageText = String(text !== undefined ? text : inputMessage.value)
  if (messageText.trim() && !isTyping.value) {
    inputMessage.value = ''
    // 重置 textarea 高度
    nextTick(() => {
      adjustTextareaHeight(textareaRef.value)
      adjustTextareaHeight(drawerTextareaRef.value)
    })
    await sendMessage(messageText.trim())
    scrollToBottom()
  }
}

const handleClearConfirm = () => {
  clearChat()
  showClearConfirm.value = false
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesRef.value) {
      messagesRef.value.scrollTop = messagesRef.value.scrollHeight
    }
    if (drawerMessagesRef.value) {
      drawerMessagesRef.value.scrollTop = drawerMessagesRef.value.scrollHeight
    }
  })
}

// 监听消息变化自动滚动到底部
watch(() => messages.value.length, () => {
  scrollToBottom()
})

// 监听流式消息更新
watch(() => messages.value, (newMessages) => {
  const lastMessage = newMessages[newMessages.length - 1]
  if (lastMessage?.isStreaming) {
    scrollToBottom()
  }
}, { deep: true })
</script>

<style scoped>
.digital-avatar {
  max-width: 700px;
  margin: 0 auto;
}

.avatar-container {
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow: hidden;
}

/* Error Alert */
.error-alert {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  margin: 0 20px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  color: #F87171;
  font-size: 13px;
}

.error-alert svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* Header */
.avatar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.avatar-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar-avatar {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #F59E0B 0%, #8B5CF6 100%);
  border-radius: 10px;
  color: #0F172A;
}

.avatar-avatar svg {
  width: 20px;
  height: 20px;
}

.avatar-details {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.avatar-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-primary);
}

.avatar-status {
  font-size: 12px;
  color: #10B981;
  display: flex;
  align-items: center;
  gap: 4px;
}

.avatar-status::before {
  content: '';
  width: 6px;
  height: 6px;
  background: #10B981;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.avatar-actions {
  display: flex;
  gap: 8px;
}

.icon-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--color-text-secondary);
}

.icon-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text-primary);
}

.icon-btn svg {
  width: 16px;
  height: 16px;
}

/* Messages */
.avatar-messages {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.avatar-messages::-webkit-scrollbar {
  width: 4px;
}

.avatar-messages::-webkit-scrollbar-track {
  background: transparent;
}

.avatar-messages::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 100px;
}

.message {
  display: flex;
  gap: 12px;
  max-width: 85%;
}

.message.user {
  flex-direction: row-reverse;
  margin-left: auto;
}

.message-avatar {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #F59E0B 0%, #8B5CF6 100%);
  border-radius: 8px;
  color: #0F172A;
}

.message-avatar.user {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text-primary);
}

.message-avatar svg {
  width: 16px;
  height: 16px;
}

.message-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.message-text {
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text-primary);
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
}

.message.assistant .message-text {
  border-top-left-radius: 4px;
}

.message.user .message-text {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
  border-top-right-radius: 4px;
}

.message-text :deep(strong) {
  font-weight: 600;
  color: #F59E0B;
}

.message-text :deep(em) {
  font-style: italic;
}

.message-text :deep(.message-link) {
  color: #F59E0B;
  text-decoration: none;
  border-bottom: 1px dashed rgba(245, 158, 11, 0.5);
  transition: all 0.2s;
}

.message-text :deep(.message-link:hover) {
  color: #FBBF24;
  border-bottom-style: solid;
}

.message-time {
  font-size: 11px;
  color: var(--color-text-muted);
  padding: 0 4px;
}

/* Suggestions */
.suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.suggestion-chip {
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  font-size: 12px;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.2s;
}

.suggestion-chip:hover {
  background: rgba(245, 158, 11, 0.1);
  border-color: rgba(245, 158, 11, 0.3);
  color: #F59E0B;
}

/* Typing Indicator */
.typing-indicator {
  display: flex;
  gap: 4px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  width: fit-content;
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  background: var(--color-text-muted);
  border-radius: 50%;
  animation: typing 1.4s infinite ease-in-out;
}

.typing-indicator span:nth-child(1) { animation-delay: 0s; }
.typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
.typing-indicator span:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
  30% { transform: translateY(-4px); opacity: 1; }
}

/* Input */
.avatar-input {
  padding: 12px 20px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.input-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.suggestion-chip-small {
  padding: 5px 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 100px;
  font-size: 11px;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.2s;
}

.suggestion-chip-small:hover:not(:disabled) {
  background: rgba(245, 158, 11, 0.1);
  border-color: rgba(245, 158, 11, 0.25);
  color: #F59E0B;
}

.suggestion-chip-small:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.input-wrapper {
  display: flex;
  gap: 12px;
  align-items: flex-end;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 10px 10px 10px 16px;
  transition: border-color 0.2s;
}

.input-wrapper:focus-within {
  border-color: rgba(245, 158, 11, 0.3);
}

.input-wrapper textarea {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  font-size: 14px;
  color: var(--color-text-primary);
  resize: none;
  line-height: 1.5;
  min-height: 24px;
  max-height: 120px;
  font-family: inherit;
}

.input-wrapper textarea::placeholder {
  color: var(--color-text-muted);
}

.send-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  color: #0F172A;
  flex-shrink: 0;
}

.send-btn:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
}

.send-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.send-btn svg {
  width: 16px;
  height: 16px;
}

/* Drawer */
.drawer-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
}

.drawer-container {
  width: 100%;
  max-width: 650px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Drawer transitions */
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.3s ease;
}

.drawer-enter-active .drawer-container,
.drawer-leave-active .drawer-container {
  transition: transform 0.3s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from .drawer-container,
.drawer-leave-to .drawer-container {
  transform: translateX(100%);
}

.drawer-enter-to,
.drawer-leave-from {
  opacity: 1;
}

.drawer-enter-to .drawer-container,
.drawer-leave-from .drawer-container {
  transform: translateX(0);
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-container {
  width: 100%;
  max-width: 400px;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
}

.modal-header {
  padding: 20px 24px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.modal-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-primary);
}

.modal-body {
  padding: 20px 24px;
}

.modal-body p {
  margin: 0 0 12px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text-primary);
}

.modal-hint {
  font-size: 13px !important;
  color: var(--color-text-muted) !important;
}

.modal-footer {
  display: flex;
  gap: 12px;
  padding: 16px 24px 20px;
  justify-content: flex-end;
}

.modal-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.modal-btn-cancel {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text-secondary);
}

.modal-btn-cancel:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text-primary);
}

.modal-btn-confirm {
  background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);
  color: #0F172A;
}

.modal-btn-confirm:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.95);
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
}

.modal-enter-to .modal-container,
.modal-leave-from .modal-container {
  transform: scale(1);
}

/* Responsive */
@media (max-width: 768px) {
  .avatar-container {
    height: 450px;
  }

  .message {
    max-width: 90%;
  }

  .drawer-container {
    max-width: 100%;
  }

  .modal-container {
    max-width: 90%;
  }
}
</style>
