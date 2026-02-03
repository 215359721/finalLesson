<template>
  <div class="homepage">
    <!-- Background Effects -->
    <div class="bg-gradient"></div>
    <div class="bg-orb orb-1"></div>
    <div class="bg-orb orb-2"></div>
    <div class="bg-orb orb-3"></div>

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
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-content">
        <div class="hero-badge glass">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
          <span>欢迎来到我的个人主页</span>
        </div>
        <h1 class="hero-title">
          你好，我是 <span class="gradient-text">开发者</span>
        </h1>
        <p class="hero-description">
          热爱编程，专注于前端开发与用户体验设计。在这里记录我的学习历程和项目实战。
        </p>
        <div class="hero-actions">
          <a href="#projects" class="btn-primary">
            <span>查看项目</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#avatar" class="btn-secondary">
            <span>与我对话</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Projects Banner -->
    <section id="projects" class="projects-section">
      <div class="section-header">
        <h2 class="section-title">项目实战</h2>
        <p class="section-description">滚动查看我的项目作品</p>
      </div>
      <ProjectCarousel :projects="projects" />
    </section>

    <!-- Courses Section -->
    <section id="courses" class="courses-section">
      <div class="section-header">
        <h2 class="section-title">学习足迹</h2>
        <p class="section-description">8课学习历程记录</p>
      </div>
      <div class="courses-grid">
        <a
          v-for="course in courses"
          :key="course.id"
          :href="course.url"
          class="course-card glass"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="course-number">{{ course.number }}</div>
          <h3 class="course-title">{{ course.title }}</h3>
          <div class="course-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
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
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
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
import { ref } from 'vue'
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
  icon: string
  description: string
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

const projects = ref<Project[]>([
  {
    id: 1,
    title: '成语卡片',
    titleEn: 'Idiom Card',
    url: 'https://cy-card.vercel.app',
    icon: 'card',
    description: '精美的成语学习卡片应用，帮助用户轻松学习中文成语'
  },
  {
    id: 2,
    title: '个人主页',
    titleEn: 'Personal Page',
    url: 'https://personal-page-tawny-three.vercel.app',
    icon: 'user',
    description: '极简风格的个人展示页面，展现个人信息与作品'
  },
  {
    id: 3,
    title: '红酒网站',
    titleEn: 'Wine Website',
    url: 'https://app-8bkqt0y8eb5t.appmiaoda.com/',
    icon: 'wine',
    description: '优雅的红酒展示网站，呈现品牌魅力与产品特色'
  },
  {
    id: 4,
    title: '知匣KnowBox',
    titleEn: 'Knowledge Box',
    url: 'https://know-box.vercel.app/',
    icon: 'box',
    description: '知识管理工具，帮助你整理和分享所学知识'
  },
  {
    id: 5,
    title: '闪记flashLog',
    titleEn: 'Flash Notes',
    url: 'https://flash-log.vercel.app/',
    icon: 'zap',
    description: '快速记录笔记的工具，捕捉灵感瞬间'
  }
])
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
  background:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.15), transparent),
    radial-gradient(ellipse 60% 40% at 80% 100%, rgba(245, 158, 11, 0.08), transparent);
  pointer-events: none;
  z-index: 0;
}

.bg-orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.5;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: rgba(139, 92, 246, 0.2);
  top: 10%;
  left: 10%;
  animation: float 20s ease-in-out infinite;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: rgba(245, 158, 11, 0.15);
  top: 50%;
  right: 15%;
  animation: float 25s ease-in-out infinite reverse;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: rgba(99, 102, 241, 0.15);
  bottom: 10%;
  left: 30%;
  animation: float 22s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}

/* ===== Glass Effect ===== */
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
}

/* ===== Navigation ===== */
.navbar {
  position: fixed;
  top: 16px;
  left: 16px;
  right: 16px;
  z-index: 100;
  border-radius: 100px;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  padding: 8px 16px;
  border-radius: 100px;
  text-decoration: none;
  color: var(--color-text-secondary);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: var(--color-text-primary);
  background: rgba(255, 255, 255, 0.05);
}

.github-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 100px;
  text-decoration: none;
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.github-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.github-link svg {
  width: 18px;
  height: 18px;
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
  text-align: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 700px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  width: fit-content;
  margin: 0 auto;
  font-size: 14px;
  color: var(--color-text-secondary);
}

.hero-badge svg {
  width: 16px;
  height: 16px;
  color: #F59E0B;
}

.hero-title {
  font-size: clamp(36px, 6vw, 56px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #8B5CF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 18px;
  color: var(--color-text-secondary);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 100px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);
  color: #0F172A;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(245, 158, 11, 0.35);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text-primary);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
}

.btn-primary svg,
.btn-secondary svg {
  width: 18px;
  height: 18px;
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
  padding: 80px 24px;
}

/* ===== Courses Section ===== */
.courses-section {
  position: relative;
  z-index: 1;
  padding: 80px 24px;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.course-card {
  position: relative;
  padding: 32px 24px;
  text-decoration: none;
  color: var(--color-text-primary);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
}

.course-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.course-card:hover {
  transform: translateY(-4px);
  border-color: rgba(245, 158, 11, 0.3);
}

.course-card:hover::before {
  opacity: 1;
}

.course-number {
  font-size: 48px;
  font-weight: 700;
  background: linear-gradient(135deg, #F59E0B 0%, #8B5CF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.3;
  margin-bottom: 8px;
  position: relative;
  z-index: 1;
}

.course-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  position: relative;
  z-index: 1;
}

.course-arrow {
  width: 24px;
  height: 24px;
  color: #F59E0B;
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.course-card:hover .course-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* ===== Avatar Section ===== */
.avatar-section {
  position: relative;
  z-index: 1;
  padding: 80px 24px;
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
  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
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
