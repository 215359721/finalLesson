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
          <button class="icon-btn" title="清空对话">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Chat Messages -->
      <div class="avatar-messages" ref="messagesRef">
        <!-- Welcome Message -->
        <div class="message assistant">
          <div class="message-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="8" r="4"/>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            </svg>
          </div>
          <div class="message-content">
            <div class="message-text">
              你好！我是AI助手，可以帮你了解更多关于我的信息。你可以问我：
            </div>
            <div class="suggestions">
              <button
                v-for="suggestion in suggestions"
                :key="suggestion"
                class="suggestion-chip"
                @click="sendMessage(suggestion)"
              >
                {{ suggestion }}
              </button>
            </div>
          </div>
        </div>

        <!-- Chat Messages -->
        <div
          v-for="(msg, index) in messages"
          :key="index"
          :class="['message', msg.role]"
        >
          <div v-if="msg.role === 'assistant'" class="message-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="8" r="4"/>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            </svg>
          </div>
          <div class="message-content">
            <div class="message-text">{{ msg.content }}</div>
            <div class="message-time">{{ msg.time }}</div>
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
        <div class="input-wrapper">
          <input
            v-model="inputMessage"
            type="text"
            placeholder="输入你的问题..."
            @keypress.enter="handleSend"
            :disabled="isTyping"
          />
          <button
            class="send-btn"
            @click="handleSend"
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
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

interface Message {
  role: 'user' | 'assistant'
  content: string
  time: string
}

const messages = ref<Message[]>([])
const inputMessage = ref('')
const isTyping = ref(false)
const messagesRef = ref<HTMLElement>()

const suggestions = [
  '介绍一下自己',
  '你会做什么项目？',
  '你学习了哪些课程？',
  '如何联系你？'
]

// TODO: 后续接入真实AI逻辑
const sendMessage = async (text: string) => {
  const userMessage: Message = {
    role: 'user',
    content: text,
    time: getCurrentTime()
  }
  messages.value.push(userMessage)
  scrollToBottom()

  // Simulate AI response
  isTyping.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))

  const responses: Record<string, string> = {
    '介绍一下自己': '我是一名热爱编程的开发者，专注于前端开发与用户体验设计。喜欢学习新技术，记录学习历程，并分享项目实战经验。',
    '你会做什么项目？': '我开发过多个项目，包括成语卡片学习应用、个人主页、红酒展示网站、知识管理工具知匣KnowBox，以及快速笔记工具闪记flashLog等。',
    '你学习了哪些课程？': '我完成了8门前端开发课程，涵盖HTML、CSS、JavaScript、Vue框架等核心技术。你可以在"课程笔记"区域查看详细内容。',
    '如何联系你？': '你可以通过GitHub联系我：github.com/215359721，欢迎交流！'
  }

  const response = responses[text] || '感谢你的提问！这是一个很好的问题，我会尽快完善这个功能。'
  messages.value.push({
    role: 'assistant',
    content: response,
    time: getCurrentTime()
  })
  isTyping.value = false
  scrollToBottom()
}

const handleSend = () => {
  if (inputMessage.value.trim() && !isTyping.value) {
    const text = inputMessage.value.trim()
    inputMessage.value = ''
    sendMessage(text)
  }
}

const getCurrentTime = () => {
  const now = new Date()
  return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesRef.value) {
      messagesRef.value.scrollTop = messagesRef.value.scrollHeight
    }
  })
}
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
  max-width: 80%;
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
}

.message-text {
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--color-text-primary);
}

.message.assistant .message-text {
  border-top-left-radius: 4px;
}

.message.user .message-text {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
  border-top-right-radius: 4px;
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
  padding: 16px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.input-wrapper {
  display: flex;
  gap: 12px;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  padding: 8px 8px 8px 20px;
  transition: border-color 0.2s;
}

.input-wrapper:focus-within {
  border-color: rgba(245, 158, 11, 0.3);
}

.input-wrapper input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  font-size: 14px;
  color: var(--color-text-primary);
}

.input-wrapper input::placeholder {
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

/* Responsive */
@media (max-width: 768px) {
  .avatar-container {
    height: 450px;
  }

  .message {
    max-width: 90%;
  }
}
</style>
