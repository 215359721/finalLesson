<template>
  <div class="homepage">
    <!-- Background Effects -->
    <div class="bg-gradient"></div>
    <!-- 主光圈 - 暖色 -->
    <div class="bg-glow glow-primary"></div>
    <!-- 次光圈 - 冷色 -->
    <div class="bg-glow glow-secondary"></div>
    <!-- 装饰光点 -->
    <div class="bg-orb orb-1"></div>
    <div class="bg-orb orb-2"></div>
    <div class="bg-orb orb-3"></div>
    <div class="bg-orb orb-4"></div>
    <!-- 网格背景 -->
    <div class="bg-grid"></div>

    <!-- Navigation -->
    <nav class="navbar glass">
      <div class="nav-container">
        <div class="nav-menu">
          <a href="#home" class="nav-link">首页</a>
          <a href="#projects" class="nav-link">项目</a>
          <a href="#courses" class="nav-link">课程笔记</a>
          <a href="#avatar" class="nav-link">数字分身</a>
        </div>
        <a href="https://github.com/215359721" target="_blank" rel="noopener noreferrer" class="github-link">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-content">
        <!-- Left: Developer Info -->
        <div class="hero-left">
          <div class="developer-card">
            <div class="developer-avatar">
              <img :src="avatarUrl" alt="开发者头像" />
            </div>
            <div class="developer-info">
              <div class="hero-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span>欢迎来到我的主页</span>
              </div>
              <h1 class="hero-title">
                你好，我是 <span class="gradient-text">Ethan_Ma</span>
              </h1>
              <p class="hero-description">
                {{ developerBio }}
              </p>
              <div class="hero-actions">
                <a href="#projects" class="btn-primary">
                  <span>查看项目</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#courses" class="btn-secondary">
                  <span>课程总览</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </a>
                <a href="#avatar" class="btn-secondary">
                  <span>与我对话</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Project Carousel -->
        <div class="hero-right">
          <ProjectCarousel :projects="allProjects" />
        </div>
      </div>
    </section>

    <!-- Projects Grid Section -->
    <section id="projects" class="projects-section">
      <div class="section-header">
        <h2 class="section-title">项目实战</h2>
        <p class="section-description">点击卡片查看项目详情</p>
      </div>
      <div class="projects-layout">
        <!-- Left: FlashLog (Large) -->
        <a :href="flashLogProject.url" class="project-card-large glass" target="_blank" rel="noopener noreferrer">
          <div class="project-image">
            <img :src="flashLogProject.image" :alt="flashLogProject.title" />
            <div class="project-overlay">
              <a :href="flashLogProject.githubUrl" target="_blank" rel="noopener noreferrer" class="github-btn"
                @click.stop>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                源码
              </a>
            </div>
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ flashLogProject.title }}</h3>
            <p class="project-subtitle">{{ flashLogProject.titleEn }}</p>
            <p class="project-description">{{ flashLogProject.description }}</p>
          </div>
        </a>

        <!-- Right: 2x2 Small Projects Grid -->
        <div class="projects-grid-small">
          <a v-for="project in smallProjects" :key="project.id" :href="project.url" class="project-card-small glass"
            target="_blank" rel="noopener noreferrer">
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <a :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="github-btn" @click.stop>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  源码
                </a>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-subtitle">{{ project.titleEn }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Courses Section -->
    <section id="courses" class="courses-section">
      <div class="section-header">
        <h2 class="section-title">学习足迹</h2>
        <p class="section-description">8课学习历程记录</p>
      </div>
      <div class="courses-grid">
        <a v-for="course in courses" :key="course.id" :href="course.url" class="course-card glass"
          target="_blank" rel="noopener noreferrer" @mousemove="(e) => updateMousePos(e, $el.currentTarget)">
          <h3 class="course-title">{{ course.title }}</h3>
          <div class="course-footer">
            <span class="course-hint">点击查看笔记</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18l6-6-6-6" />
              <path d="M21 5v14" />
            </svg>
          </div>
        </a>
      </div>
    </section>

    <!-- Digital Avatar Section -->
    <section id="avatar" class="avatar-section">
      <div class="section-header">
        <h2 class="section-title">数字分身</h2>
        <p class="section-description">与AI助手对话，了解更多信息</p>
      </div>
      <DigitalAvatar />
    </section>

    <!-- Footer -->
    <footer class="footer glass">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo">Dev</div>
          <p class="footer-tagline">热爱 · 创造 · 分享</p>
        </div>
        <div class="footer-links">
          <a href="https://github.com/215359721" target="_blank" rel="noopener noreferrer" class="footer-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2025 个人主页. All rights reserved.</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCarousel from './ProjectCarousel.vue'
import DigitalAvatar from './DigitalAvatar.vue'

interface Course {
  id: number
  number: string
  title: string
  url: string
}

interface Project {
  id: number
  title: string
  titleEn: string
  url: string
  githubUrl: string
  image: string
  description: string
}

// 个人简介
const developerBio = ref('资深前端技术经理，拥有8年以上大型互联网项目实战经验，主导过多个亿级用户产品的前端架构设计与团队建设。擅长高性能前端体系搭建、工程化落地及跨端技术整合，兼具技术深度与管理视野。始终以用户体验为核心，用代码驱动产品进化，带领团队高效交付、持续创新，在复杂业务场景中不断突破技术边界。')

// 个人头像
const avatarUrl = ref('https://s1-imfile.feishucdn.com/static-resource/v1/v3_00iv_48fbdee8-2731-4c02-b392-349db38af10g~?image_size=noop&cut_type=&quality=&format=image')

// 鼠标跟踪效果
const mousePos = ref({ x: 0, y: 0 })

const updateMousePos = (event: MouseEvent, cardRef: HTMLElement) => {
  const rect = cardRef.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width) * 100
  const y = ((event.clientY - rect.top) / rect.height) * 100
  cardRef.style.setProperty('--mouse-x', `${x}%`)
  cardRef.style.setProperty('--mouse-y', `${y}%`)
}

const courses = ref<Course[]>([
  { id: 1, number: '01', title: '第1课', url: 'https://my.feishu.cn/wiki/K7OdwGHGQi28RYkjFigc8R1vn2e?from=from_copylink' },
  { id: 2, number: '02', title: '第2课', url: 'https://my.feishu.cn/wiki/HuS0wM4qTiMyZXkZSy2cZFtPnyh?from=from_copylink' },
  { id: 3, number: '03', title: '第3课', url: 'https://my.feishu.cn/wiki/YayuwxPVRi8wsykLOkJcb45Rnkb?from=from_copylink' },
  { id: 4, number: '04', title: '第4课', url: 'https://my.feishu.cn/wiki/OcFFwY65cihgjLkeDqxcHT2OnXX?from=from_copylink' },
  { id: 5, number: '05', title: '第5课', url: 'https://my.feishu.cn/wiki/X9ehwlnxRiExpPkXJnpcZ7xfnte?from=from_copylink' },
  { id: 6, number: '06', title: '第6课', url: 'https://my.feishu.cn/wiki/OCVDwZUncisV21k4voqcZLRrnyh?from=from_copylink' },
  { id: 7, number: '07', title: '第7课', url: 'https://my.feishu.cn/wiki/LB3IwbORQirZvHkz5Eocb7pnnif?from=from_copylink' },
  { id: 8, number: '08', title: '第8课', url: 'https://my.feishu.cn/wiki/QYAswAbf1iwLwXkBmUDcp3E8nne?from=from_copylink' }
])

const allProjects = ref<Project[]>([
  {
    id: 1,
    title: '成语卡片',
    titleEn: 'Idiom Card',
    url: 'https://cy-card.vercel.app',
    githubUrl: 'https://github.com/215359721/cyCard',
    image: new URL('../assets/UI/card.png', import.meta.url).href,
    description: '精美的成语学习卡片应用，帮助用户轻松学习中文成语'
  },
  {
    id: 2,
    title: '个人主页',
    titleEn: 'Personal Page',
    url: 'https://personal-page-tawny-three.vercel.app',
    githubUrl: 'https://github.com/215359721/personalPage',
    image: new URL('../assets/UI/page.png', import.meta.url).href,
    description: '极简风格的个人展示页面，展现个人信息与作品'
  },
  {
    id: 3,
    title: '红酒网站',
    titleEn: 'Wine Website',
    url: 'https://app-8bkqt0y8eb5t.appmiaoda.com/',
    githubUrl: 'https://app-8bkqt0y8eb5t.appmiaoda.com/',
    image: new URL('../assets/UI/wine.png', import.meta.url).href,
    description: '优雅的红酒展示网站，呈现品牌魅力与产品特色'
  },
  {
    id: 4,
    title: '知匣KnowBox',
    titleEn: 'Knowledge Box',
    url: 'https://know-box.vercel.app/',
    githubUrl: 'https://github.com/215359721/knowBox',
    image: new URL('../assets/UI/box.png', import.meta.url).href,
    description: '知识管理工具，帮助你整理和分享所学知识'
  },
  {
    id: 5,
    title: '闪记flashLog',
    titleEn: 'Flash Notes',
    url: 'https://flash-log.vercel.app/',
    githubUrl: 'https://github.com/215359721/flashLog',
    image: new URL('../assets/UI/shanji.png', import.meta.url).href,
    description: '快速记录笔记的工具，捕捉灵感瞬间'
  }
])

// 闪记项目（左侧大卡片）
const flashLogProject = computed(() => allProjects.value.find(p => p.id === 5)!)

// 其他4个项目（右侧小卡片）
const smallProjects = computed(() => allProjects.value.filter(p => p.id !== 5))
</script>

<style scoped>
.homepage {
  min-height: 100vh;
  background: var(--color-bg);
  position: relative;
  overflow-x: hidden;
  color: var(--color-text-primary);
}

/* ===== Background Effects ===== */
.bg-gradient {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0F172A;
  pointer-events: none;
  z-index: 0;
}

/* 主光圈 - 暖色（金色）- 右上 */
.bg-glow.glow-primary {
  position: fixed;
  width: 500px;
  height: 500px;
  top: 10%;
  right: 10%;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, rgba(245, 158, 11, 0.08) 40%, transparent 70%);
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
  animation: pulse-glow-primary 12s ease-in-out infinite;
}

/* 次光圈 - 冷色（紫色）- 左下 */
.bg-glow.glow-secondary {
  position: fixed;
  width: 450px;
  height: 450px;
  bottom: 10%;
  left: 10%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(99, 102, 241, 0.06) 40%, transparent 70%);
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
  animation: pulse-glow-secondary 14s ease-in-out infinite reverse;
}

@keyframes pulse-glow-primary {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

@keyframes pulse-glow-secondary {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}

.bg-orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.5;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: rgba(139, 92, 246, 0.3);
  top: 25%;
  left: 35%;
  animation: float 18s ease-in-out infinite;
}

.orb-2 {
  width: 350px;
  height: 350px;
  background: rgba(245, 158, 11, 0.25);
  top: 40%;
  right: 30%;
  animation: float 22s ease-in-out infinite reverse;
}

.orb-3 {
  width: 380px;
  height: 380px;
  background: rgba(99, 102, 241, 0.22);
  bottom: 25%;
  left: 30%;
  animation: float 20s ease-in-out infinite;
}

.orb-4 {
  width: 300px;
  height: 300px;
  background: rgba(236, 72, 153, 0.18);
  top: 50%;
  right: 35%;
  animation: float 25s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}

/* 网格背景 */
.bg-grid {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 70%);
}

/* ===== Glass Effect ===== */
.glass {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

/* ===== Navigation ===== */
.navbar {
  position: fixed;
  top: 16px;
  left: 16px;
  right: 16px;
  z-index: 100;
  border-radius: 100px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-link {
  padding: 8px 16px;
  border-radius: 100px;
  text-decoration: none;
  color: var(--color-text-secondary);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 100px;
}

.nav-link:hover {
  color: var(--color-text-primary);
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-1px);
}

.nav-link:hover::before {
  opacity: 1;
}

.github-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 100px;
  text-decoration: none;
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.github-link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.github-link:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px) scale(1.02);
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.github-link:hover::before {
  opacity: 1;
}

.github-link svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.github-link:hover svg {
  transform: rotate(5deg) scale(1.1);
}

/* ===== Hero Section ===== */
.hero {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 24px 80px;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1400px;
  width: 100%;
}

/* Developer Card */
.developer-card {
  display: flex;
  gap: 32px;
  padding: 0;
}

.developer-avatar {
  width: 140px;
  height: 140px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(135deg, #F59E0B 0%, #8B5CF6 100%);
  box-shadow: 0 8px 32px rgba(245, 158, 11, 0.3);
}

.developer-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.developer-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  width: fit-content;
  font-size: 13px;
  color: var(--color-text-secondary);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.hero-badge svg {
  width: 14px;
  height: 14px;
  color: #F59E0B;
}

.hero-title {
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 700;
  line-height: 1.2;
}

.gradient-text {
  background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #8B5CF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);
  color: #0F172A;
  box-shadow:
    0 4px 15px rgba(245, 158, 11, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow:
    0 8px 30px rgba(245, 158, 11, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.btn-primary:hover::before {
  opacity: 1;
}

.btn-primary:active {
  transform: translateY(-1px) scale(0.98);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.06);
  color: var(--color-text-primary);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow:
    0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.btn-secondary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px) scale(1.02);
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.btn-secondary:hover::before {
  opacity: 1;
}

.btn-secondary:active {
  transform: translateY(0) scale(0.98);
}

.btn-primary svg,
.btn-secondary svg {
  width: 16px;
  height: 16px;
}

.hero-right {
  display: flex;
  align-items: center;
}

/* ===== Section Headers ===== */
.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  margin-bottom: 12px;
}

.section-description {
  font-size: 16px;
  color: var(--color-text-secondary);
}

/* ===== Projects Section ===== */
.projects-section {
  position: relative;
  z-index: 1;
  padding: 60px 24px;
}

.projects-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Left Large Card */
.project-card-large {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--color-text-primary);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  overflow: hidden;
  aspect-ratio: 1;
  position: relative;
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.project-card-large::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
  pointer-events: none;
}

.project-card-large:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow:
    0 12px 40px rgba(245, 158, 11, 0.2),
    0 0 0 1px rgba(245, 158, 11, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  border-color: rgba(245, 158, 11, 0.4);
}

.project-card-large:hover::before {
  opacity: 1;
}

.project-image {
  position: relative;
  width: 100%;
  flex: 1;
  overflow: hidden;
}

.project-card-large .project-image {
  aspect-ratio: 1;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card-large:hover .project-image img,
.project-card-small:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card-large:hover .project-overlay,
.project-card-small:hover .project-overlay {
  opacity: 1;
}

.github-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 100px;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.github-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.github-btn svg {
  width: 18px;
  height: 18px;
}

.project-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: rgba(255, 255, 255, 0.02);
}

.project-title {
  font-size: 24px;
  font-weight: 700;
}

.project-subtitle {
  font-size: 13px;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-description {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

/* Right Small Grid */
.projects-grid-small {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.project-card-small {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--color-text-primary);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.project-card-small::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
  pointer-events: none;
}

.project-card-small:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow:
    0 10px 35px rgba(245, 158, 11, 0.2),
    0 0 0 1px rgba(245, 158, 11, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  border-color: rgba(245, 158, 11, 0.4);
}

.project-card-small:hover::before {
  opacity: 1;
}

.project-card-small .project-image {
  aspect-ratio: 16/10;
}

.project-card-small .project-content {
  padding: 16px;
  gap: 6px;
}

.project-card-small .project-title {
  font-size: 16px;
}

.project-card-small .project-subtitle {
  font-size: 11px;
}

/* ===== Courses Section ===== */
.courses-section {
  position: relative;
  z-index: 1;
  padding: 60px 24px;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 1000px;
  margin: 0 auto;
}

.course-card {
  position: relative;
  padding: 20px 24px;
  text-decoration: none;
  color: var(--color-text-primary);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  overflow: hidden;
  aspect-ratio: 8/3.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.course-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
}

.course-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--mouse-x, 50%) 0%, transparent 50%);
  background: radial-gradient(circle at var(--mouse-x, var(--mouse-y)) 0%, rgba(255, 255, 255, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 1;
}

.course-card:hover::before,
.course-card:hover::after {
  opacity: 1;
}

.course-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow:
    0 10px 35px rgba(245, 158, 11, 0.2),
    0 0 0 1px rgba(245, 158, 11, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  border-color: rgba(245, 158, 11, 0.5);
}

.course-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text-primary);
  position: relative;
  z-index: 1;
  transition: all 0.4s ease;
}

.course-card:hover .course-title {
  transform: translateX(4px);
}

.course-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  opacity: 0.8;
  transition: all 0.4s ease;
}

.course-card:hover .course-footer {
  opacity: 1;
}

.course-hint {
  font-size: 13px;
  color: #F59E0B;
  font-weight: 500;
}

.course-footer svg {
  width: 20px;
  height: 20px;
  color: var(--color-text-muted);
}

/* ===== Avatar Section ===== */
.avatar-section {
  position: relative;
  z-index: 1;
  padding: 60px 24px;
}

/* ===== Footer ===== */
.footer {
  position: relative;
  z-index: 1;
  padding: 40px 24px;
  margin: 40px 16px 16px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 24px;
}

.footer-logo {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #F59E0B 0%, #8B5CF6 100%);
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #0F172A;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-tagline {
  font-size: 14px;
  color: var(--color-text-secondary);
}

.footer-links {
  display: flex;
  gap: 16px;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  text-decoration: none;
  color: var(--color-text-secondary);
  border-radius: 100px;
  transition: all 0.2s;
}

.footer-link:hover {
  color: var(--color-text-primary);
  background: rgba(255, 255, 255, 0.05);
}

.footer-link svg {
  width: 18px;
  height: 18px;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 13px;
  color: var(--color-text-muted);
  text-align: center;
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .developer-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .hero-description {
    text-align: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .navbar {
    padding: 12px 16px;
  }

  .nav-container {
    padding: 0;
    justify-content: flex-end;
  }

  .projects-layout {
    grid-template-columns: 1fr;
  }

  .projects-grid-small {
    grid-template-columns: 1fr 1fr;
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    flex-direction: column;
    gap: 24px;
    text-align: center;
  }
}
</style>
