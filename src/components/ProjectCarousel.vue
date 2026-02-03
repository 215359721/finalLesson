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
            class="project-slide"
          >
            <img :src="project.image" :alt="project.title" />
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
  githubUrl: string
  image: string
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
    currentIndex.value = 0
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
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
  max-width: 700px;
  margin: 0 auto;
}

.carousel-container {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  aspect-ratio: 16/9;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.carousel-slide {
  flex: 0 0 100%;
  height: 100%;
  padding: 0 2px;
}

.project-slide {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  border-radius: 18px;
}

.project-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-slide:hover img {
  transform: scale(1.05);
}

/* Navigation */
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
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
  z-index: 10;
}

.carousel-nav:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-50%) scale(1.1);
}

.carousel-nav:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-nav svg {
  width: 18px;
  height: 18px;
}

.carousel-nav.prev {
  left: 12px;
}

.carousel-nav.next {
  right: 12px;
}

/* Dots */
.carousel-dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.2s;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.5);
}

.dot.active {
  width: 20px;
  border-radius: 100px;
  background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);
}

/* Responsive */
@media (max-width: 768px) {
  .carousel-nav {
    width: 32px;
    height: 32px;
  }

  .carousel-nav.prev {
    left: 8px;
  }

  .carousel-nav.next {
    right: 8px;
  }

  .carousel-nav svg {
    width: 14px;
    height: 14px;
  }
}
</style>
