<template>
  <div class="project-carousel">
    <div class="carousel-container" ref="containerRef">
      <div
        class="carousel-track"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="project in projects"
          :key="project.id"
          class="carousel-slide"
        >
          <a
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="project-card glass"
          >
            <div class="project-icon">{{ getIcon(project.icon) }}</div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-subtitle">{{ project.titleEn }}</p>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-link">
                <span>查看项目</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button
        class="carousel-nav prev"
        @click="prevSlide"
        :disabled="currentIndex === 0"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button
        class="carousel-nav next"
        @click="nextSlide"
        :disabled="currentIndex === projects.length - 1"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      <!-- Dots Indicator -->
      <div class="carousel-dots">
        <button
          v-for="(_, index) in projects"
          :key="index"
          :class="['dot', { active: index === currentIndex }]"
          @click="currentIndex = index"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Project {
  id: number
  title: string
  titleEn: string
  url: string
  icon: string
  description: string
}

const props = defineProps<{
  projects: Project[]
}>()

const currentIndex = ref(0)
const containerRef = ref<HTMLElement>()
let autoPlayInterval: number | null = null

const nextSlide = () => {
  if (currentIndex.value < props.projects.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0 // Loop back to start
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const getIcon = (iconName: string) => {
  const icons: Record<string, string> = {
    card: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
      <line x1="7" y1="15" x2="7.01" y2="15"/>
      <line x1="11" y1="15" x2="13" y2="15"/>
    </svg>`,
    user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="8" r="4"/>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    </svg>`,
    wine: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M8 22h8M12 22v-8M7 10h10M8 14a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a4 4 0 0 1-4 4"/>
    </svg>`,
    box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>`,
    zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>`
  }
  return icons[iconName] || icons.card
}

const startAutoPlay = () => {
  autoPlayInterval = window.setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.project-carousel {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.carousel-container {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.carousel-slide {
  flex: 0 0 100%;
  padding: 0 4px;
}

.project-card {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 48px;
  text-decoration: none;
  color: var(--color-text-primary);
  transition: all 0.3s ease;
  min-height: 320px;
  cursor: pointer;
}

.project-card:hover {
  background: rgba(255, 255, 255, 0.06);
  transform: scale(1.02);
}

.project-icon {
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 20px;
  color: #F59E0B;
}

.project-icon :deep(svg) {
  width: 56px;
  height: 56px;
}

.project-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-title {
  font-size: 32px;
  font-weight: 700;
  background: linear-gradient(135deg, #F59E0B 0%, #8B5CF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.project-subtitle {
  font-size: 14px;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.project-description {
  font-size: 16px;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #F59E0B;
  font-weight: 600;
  font-size: 14px;
}

.project-link svg {
  width: 18px;
  height: 18px;
  transition: transform 0.2s;
}

.project-card:hover .project-link svg {
  transform: translateX(4px);
}

/* Navigation */
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--color-text-primary);
}

.carousel-nav:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-50%) scale(1.1);
}

.carousel-nav:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-nav svg {
  width: 20px;
  height: 20px;
}

.carousel-nav.prev {
  left: 16px;
}

.carousel-nav.next {
  right: 16px;
}

/* Dots */
.carousel-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.2s;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.4);
}

.dot.active {
  width: 24px;
  border-radius: 100px;
  background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);
}

/* Responsive */
@media (max-width: 768px) {
  .project-card {
    flex-direction: column;
    text-align: center;
    padding: 32px 24px;
    gap: 20px;
  }

  .project-icon {
    width: 80px;
    height: 80px;
  }

  .project-icon :deep(svg) {
    width: 40px;
    height: 40px;
  }

  .project-title {
    font-size: 24px;
  }

  .project-description {
    font-size: 14px;
  }

  .carousel-nav {
    width: 36px;
    height: 36px;
  }

  .carousel-nav.prev {
    left: 8px;
  }

  .carousel-nav.next {
    right: 8px;
  }

  .carousel-nav svg {
    width: 16px;
    height: 16px;
  }
}
</style>
