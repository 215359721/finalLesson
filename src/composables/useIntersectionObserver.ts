import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const targetRef = ref<HTMLElement>()
  const isVisible = ref(false)

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      isVisible.value = entry.isIntersecting
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    })

    if (targetRef.value) {
      observer.observe(targetRef.value)
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    targetRef,
    isVisible
  }
}
