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
    <nav class="navbar glass animate-fade-in-down">
      <div class="nav-stars">
        <span class="nav-star"></span>
        <span class="nav-star"></span>
        <span class="nav-star"></span>
        <span class="nav-star"></span>
        <span class="nav-star"></span>
      </div>
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
          <div class="developer-card animate-slide-in-left">
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
          <div class="carousel-wrapper animate-slide-in-right">
            <ProjectCarousel :projects="allProjects" />
          </div>

          <!-- Achievement Badges -->
          <div class="hero-achievements">
            <div class="achievement-header glass animate-on-scroll">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V2Z" />
              </svg>
              <span>学习成就</span>
            </div>
            <div class="achievements-grid">
              <div v-for="(achievement, index) in achievements" :key="achievement.id"
                class="achievement-card glass animate-on-scroll" :style="{ 'transition-delay': `${index * 0.08}s` }">
                <div class="achievement-icon" :style="{ background: achievement.gradient }">
                  <span class="achievement-emoji">{{ achievement.emoji }}</span>
                  <div class="achievement-shine"></div>
                </div>
                <div class="achievement-content">
                  <div class="achievement-title">{{ achievement.title }}</div>
                  <div class="achievement-desc">{{ achievement.description }}</div>
                  <div class="achievement-progress">
                    <div class="progress-bar">
                      <div class="progress-fill"
                        :style="{ width: achievement.progress + '%', background: achievement.gradient }"></div>
                    </div>
                    <span class="progress-text">{{ achievement.progress }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Data & Tech Cards Section -->
    <section class="data-tech-section">
      <div class="data-tech-row" ref="dataTechRowRef">
        <!-- Learning Data Cards - Left 4 cards -->
        <div class="data-cards-row">
          <div v-for="(dataCard, index) in learningDataCards" :key="dataCard.id" class="data-card-unified glass"
            :style="{ '--card-gradient': dataCard.gradient, 'transition-delay': `${index * 0.05}s` }">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path v-html="dataCard.icon" />
              </svg>
            </div>
            <div class="card-content">
              <div class="card-value">{{ dataCard.value }}</div>
              <div class="card-label">{{ dataCard.label }}</div>
              <div class="card-trend">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M23 6l-9.5 9.5-5-5L1 18" />
                  <path d="M17 6h6v6" />
                </svg>
                <span>{{ dataCard.trend }}</span>
              </div>
            </div>
            <div class="card-progress">
              <div class="progress-fill" :style="{ width: dataCard.progress + '%' }"></div>
            </div>
          </div>
        </div>

        <!-- Tech Stack Cards - Right 4 cards -->
        <div class="tech-cards-row">
          <div v-for="(tech, index) in techStackDisplay" :key="tech.name" class="tech-card-unified glass"
            :style="{ '--tech-color': tech.color, 'transition-delay': `${(index + 4) * 0.05}s` }">
            <div class="tech-card-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path v-html="tech.svgIcon" />
              </svg>
            </div>
            <div class="tech-card-content">
              <div class="tech-card-name">{{ tech.name }}</div>
              <div class="tech-card-level">{{ tech.level }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid Section -->
    <section id="projects" class="projects-section">
      <div class="section-header animate-on-scroll" ref="projectsHeaderRef">
        <h2 class="section-title">项目实战</h2>
        <p class="section-description">点击卡片查看项目详情</p>
      </div>
      <div class="projects-layout">
        <!-- Left: FlashLog (Large) -->
        <a :href="flashLogProject.url" class="project-card-large glass animate-on-scroll" target="_blank"
          rel="noopener noreferrer" ref="projectLargeRef">
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
          <a v-for="(project, index) in smallProjects" :key="project.id" :href="project.url"
            class="project-card-small glass animate-on-scroll" target="_blank" rel="noopener noreferrer"
            :ref="(el: any) => setSmallProjectRef(el, index)">
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
      <div class="section-header animate-on-scroll" ref="coursesHeaderRef">
        <h2 class="section-title">学习足迹</h2>
        <p class="section-description">8课学习历程记录</p>
      </div>
      <div class="courses-grid">
        <a v-for="(course, index) in courses" :key="course.id" :href="course.url"
          class="course-card glass animate-on-scroll" target="_blank" rel="noopener noreferrer"
          :ref="(el: any) => setCourseRef(el, index)" @mousemove="(e) => updateMousePos(e, $el.currentTarget)">
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
      <div class="section-header animate-on-scroll animate-scale-in" ref="avatarHeaderRef">
        <h2 class="section-title">数字分身</h2>
        <p class="section-description">与AI助手对话，了解更多信息</p>
      </div>
      <div class="avatar-content-wrapper animate-on-scroll" ref="avatarContentRef">
        <DigitalAvatar />
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer glass">
      <!-- Decorative background elements -->
      <div class="footer-bg-effects">
        <div class="footer-glow footer-glow-1"></div>
        <div class="footer-glow footer-glow-2"></div>
      </div>

      <div class="footer-container">
        <div class="footer-main">
          <!-- Brand Section -->
          <div class="footer-section footer-brand-section">
            <div class="footer-logo-wrapper">
              <div class="footer-logo">Dev</div>
              <div class="footer-logo-glow"></div>
            </div>
            <p class="footer-tagline">热爱 · 创造 · 分享</p>
            <p class="footer-description">专注于前端开发与用户体验设计，致力于创造优雅的数字产品。</p>
            <!-- Social Links -->
            <div class="footer-social">
              <a href="https://github.com/215359721" target="_blank" rel="noopener noreferrer" class="social-link"
                aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="mailto:mys215359721@gmail.com" class="social-link" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links Section -->
          <div class="footer-section footer-links-section">
            <h3 class="footer-section-title">快速导航</h3>
            <ul class="footer-links-list">
              <li><a href="#hero" class="footer-link-item">首页</a></li>
              <li><a href="#projects" class="footer-link-item">项目展示</a></li>
              <li><a href="#courses" class="footer-link-item">精品课程</a></li>
              <li><a href="#avatar" class="footer-link-item">AI 分身</a></li>
            </ul>
          </div>

          <!-- Tech Stack Section -->
          <div class="footer-section footer-tech-section">
            <h3 class="footer-section-title">技术栈</h3>
            <div class="tech-stack">
              <div class="tech-item" title="Vue 3">
                <div class="tech-icon tech-vue">Vue</div>
              </div>
              <div class="tech-item" title="TypeScript">
                <div class="tech-icon tech-ts">TS</div>
              </div>
              <div class="tech-item" title="Vite">
                <div class="tech-icon tech-vite">Vite</div>
              </div>
              <div class="tech-item" title="JavaScript">
                <div class="tech-icon tech-js">JS</div>
              </div>
              <div class="tech-item" title="CSS3">
                <div class="tech-icon tech-css">CSS</div>
              </div>
              <div class="tech-item" title="HTML5">
                <div class="tech-icon tech-html">HTML</div>
              </div>
            </div>
          </div>

          <!-- Contact Section -->
          <div class="footer-section footer-contact-section">
            <h3 class="footer-section-title">联系方式</h3>
            <ul class="footer-contact-list">
              <li class="contact-item">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>mys215359721@gmail.com</span>
              </li>
              <li class="contact-item">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>中国 · 北京</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div class="footer-bottom-left">
            <span>&copy; 2025 个人主页. All rights reserved.</span>
          </div>
          <div class="footer-bottom-right">
            <span>Made with</span>
            <svg class="heart-icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>by Dev</span>
          </div>
        </div>
      </div>

      <!-- Back to Top Button -->
      <button class="back-to-top" :class="{ 'is-visible': showBackToTop }" @click="scrollToTop" aria-label="返回顶部">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
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
const developerBio = ref('资深项目经理，8年+大型互联网产品全周期管理经验，主导过多个亿级用户项目的高效交付。具备前端技术背景，擅长跨团队协作、复杂需求落地与资源统筹。目前全力投入AI领域，聚焦AI驱动的产品创新与工程化落地。')

// 个人头像
const avatarUrl = ref('https://s1-imfile.feishucdn.com/static-resource/v1/v3_00iv_48fbdee8-2731-4c02-b392-349db38af10g~?image_size=noop&cut_type=&quality=&format=image')

// Learning Data Cards
const learningDataCards = ref([
  {
    id: 1,
    label: '学习时长',
    value: '128h',
    icon: 'M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    trend: '+12%',
    trendClass: 'trend-up',
    progress: 85,
    gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)'
  },
  {
    id: 2,
    label: '笔记数量',
    value: '256',
    icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20',
    trend: '+28',
    trendClass: 'trend-up',
    progress: 72,
    gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)'
  },
  {
    id: 3,
    label: '代码练习',
    value: '1.2k',
    icon: 'M16 4v12l5-5M4 4l5 5-5 5M12 4v12',
    trend: '+156',
    trendClass: 'trend-up',
    progress: 68,
    gradient: 'linear-gradient(135deg, #10B981, #34D399)'
  },
  {
    id: 4,
    label: '项目完成',
    value: '12',
    icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14',
    trend: '+3',
    trendClass: 'trend-up',
    progress: 90,
    gradient: 'linear-gradient(135deg, #EC4899, #F472B6)'
  }
])

// Tech Stack Display - Only 4 items with SVG icons
const techStackDisplay = ref([
  {
    name: 'Vue.js',
    level: '精通',
    color: '#42b883',
    svgIcon: 'M2 2l10 18L22 2H2z'
  },
  {
    name: 'Node.js',
    level: '掌握',
    color: '#68a063',
    svgIcon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  {
    name: 'Vite',
    level: '精通',
    color: '#646cff',
    svgIcon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z'
  },
  {
    name: 'Git',
    level: '精通',
    color: '#f05032',
    svgIcon: 'M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z'
  }
])

// Achievements data
const achievements = ref([
  {
    id: 1,
    title: '前端架构师',
    description: '掌握现代前端架构设计',
    emoji: '🏗️',
    progress: 95,
    gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)'
  },
  {
    id: 2,
    title: '全栈开发',
    description: '前后端一体化开发能力',
    emoji: '🚀',
    progress: 88,
    gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)'
  },
  {
    id: 3,
    title: 'AI 工程师',
    description: 'AI驱动的产品创新',
    emoji: '🤖',
    progress: 82,
    gradient: 'linear-gradient(135deg, #10B981, #34D399)'
  },
  {
    id: 4,
    title: '团队协作',
    description: '跨团队项目管理经验',
    emoji: '🤝',
    progress: 100,
    gradient: 'linear-gradient(135deg, #EC4899, #F472B6)'
  }
])

// 鼠标跟踪效果
const mousePos = ref({ x: 0, y: 0 })

const updateMousePos = (event: MouseEvent, cardRef: HTMLElement) => {
  const rect = cardRef.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width) * 100
  const y = ((event.clientY - rect.top) / rect.height) * 100
  cardRef.style.setProperty('--mouse-x', `${x}%`)
  cardRef.style.setProperty('--mouse-y', `${y}%`)
}

// 滚动动画 refs
const projectsHeaderRef = ref<HTMLElement>()
const projectLargeRef = ref<HTMLElement>()
const coursesHeaderRef = ref<HTMLElement>()
const avatarHeaderRef = ref<HTMLElement>()
const avatarContentRef = ref<HTMLElement>()
const dataTechRowRef = ref<HTMLElement>()

// 小项目卡片 refs
const smallProjectRefs = ref<HTMLElement[]>([])

// 课程卡片 refs
const courseRefs = ref<HTMLElement[]>([])

const setSmallProjectRef = (el: any, index: number) => {
  if (el) smallProjectRefs.value[index] = el
}

const setCourseRef = (el: any, index: number) => {
  if (el) courseRefs.value[index] = el
}

// Back to top functionality
const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Intersection Observer setup
onMounted(() => {
  // Setup scroll handler for back-to-top button
  window.addEventListener('scroll', handleScroll)

  const setupIntersectionObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, {
      threshold: 0.01,
      rootMargin: '0px 0px 0px 0px'
    })

    // Observe all scroll elements
    const scrollElements = [
      projectsHeaderRef.value,
      projectLargeRef.value,
      coursesHeaderRef.value,
      avatarHeaderRef.value,
      avatarContentRef.value,
      dataTechRowRef.value,
      ...smallProjectRefs.value,
      ...courseRefs.value
    ]

    scrollElements.forEach(el => {
      if (el) observer.observe(el)
    })

    return observer
  }

  setupIntersectionObserver()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

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

  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }

  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

@keyframes pulse-glow-secondary {

  0%,
  100% {
    opacity: 0.4;
    transform: scale(1);
  }

  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
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

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  33% {
    transform: translate(30px, -30px) scale(1.05);
  }

  66% {
    transform: translate(-20px, 20px) scale(0.95);
  }
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

/* 移动端菜单下拉（默认隐藏） */
.mobile-menu {
  display: none;
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

/* 移动端菜单按钮（桌面端隐藏） */
.mobile-menu-btn,
.mobile-menu {
  display: none;
}

/* ===== Hero Section ===== */
.hero {
  position: relative;
  z-index: 1;
  min-height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 100px 24px 20px;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  max-width: 1400px;
  width: 100%;
  height: 400px;
  margin-top: 100px;
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

.hero-left {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.hero-right {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.carousel-wrapper {
  display: flex;
  align-items: center;
}

/* ===== Hero Stats Section ===== */
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 24px;
}

/* ===== Data & Tech Section ===== */
.data-tech-section {
  position: relative;
  z-index: 1;
  padding: 20px 24px 30px;
}

.data-tech-row {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 14px;
  max-width: 1200px;
  margin: 0 auto;
}

.data-cards-row,
.tech-cards-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  flex: 1;
}

/* Unified Data Card */
.data-card-unified {
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  cursor: pointer;
  transition: all 0.3s var(--ease-out-expo);
  overflow: hidden;
  aspect-ratio: 1;
}

.data-card-unified::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.data-card-unified:hover {
  transform: translateY(-5px);
  box-shadow:
    0 10px 35px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.data-card-unified:hover::before {
  opacity: 1;
}

.card-icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: var(--card-gradient, linear-gradient(135deg, #F59E0B, #FBBF24));
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.card-icon svg {
  width: 26px;
  height: 26px;
  color: #0F172A;
  position: relative;
  z-index: 1;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card-value {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1;
}

.card-label {
  font-size: 13px;
  color: var(--color-text-secondary);
}

.card-trend {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #10B981;
}

.card-trend svg {
  width: 16px;
  height: 16px;
}

.card-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--card-gradient, linear-gradient(135deg, #F59E0B, #FBBF24));
  transition: width 1s var(--ease-out-expo);
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent);
  animation: progressShine 2s linear infinite;
}

/* Unified Tech Card */
.tech-card-unified {
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  transition: all 0.3s var(--ease-out-expo);
  overflow: hidden;
  aspect-ratio: 1;
}

.tech-card-unified::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--tech-color, #42b883);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tech-card-unified:hover {
  transform: translateY(-5px);
  box-shadow:
    0 10px 35px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.tech-card-unified:hover::before {
  opacity: 0.1;
}

.tech-card-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid var(--tech-color, #42b883);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.tech-card-icon svg {
  width: 32px;
  height: 32px;
  color: var(--tech-color, #42b883);
}

.tech-card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  position: relative;
  z-index: 1;
}

.tech-card-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
}

.tech-card-level {
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--tech-color, #42b883);
  font-weight: 500;
}

.stat-card {
  position: relative;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s var(--ease-out-expo);
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.stat-card:hover .stat-glow {
  opacity: 0.6;
}

.stat-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.stat-icon svg {
  width: 22px;
  height: 22px;
  color: #0F172A;
}

.stat-content {
  flex: 1;
  position: relative;
  z-index: 1;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1.2;
  margin-bottom: 2px;
}

.stat-label {
  font-size: 12px;
  color: var(--color-text-secondary);
}

.stat-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
  filter: blur(20px);
}

/* ===== Hero Achievements Section ===== */
.hero-achievements {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.achievement-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-primary);
}

.achievement-header svg {
  width: 18px;
  height: 18px;
  color: #F59E0B;
}

.achievements-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.achievement-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s var(--ease-out-expo);
  position: relative;
  overflow: hidden;
}

.achievement-card:hover {
  transform: translateY(-3px);
  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.achievement-icon {
  width: 50px;
  height: 50px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.achievement-emoji {
  font-size: 24px;
  position: relative;
  z-index: 1;
  animation: achievementBounce 2s ease-in-out infinite;
}

@keyframes achievementBounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-4px);
  }
}

.achievement-shine {
  position: absolute;
  inset: -50%;
  background: linear-gradient(45deg,
      transparent 40%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 60%);
  animation: shineMove 3s linear infinite;
}

@keyframes shineMove {
  0% {
    transform: translateX(-100%) rotate(45deg);
  }

  100% {
    transform: translateX(100%) rotate(45deg);
  }
}

.achievement-content {
  flex: 1;
  min-width: 0;
}

.achievement-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 4px;
}

.achievement-desc {
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-bottom: 10px;
  line-height: 1.4;
}

.achievement-progress {
  display: flex;
  align-items: center;
  gap: 8px;
}

.progress-bar {
  flex: 1;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 100px;
  transition: width 1s var(--ease-out-expo);
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent);
  animation: progressShine 2s linear infinite;
}

@keyframes progressShine {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

.progress-text {
  font-size: 11px;
  font-weight: 600;
  color: var(--color-text-muted);
  min-width: 35px;
  text-align: right;
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

.avatar-content-wrapper {
  display: flex;
  justify-content: center;
}

/* ===== Footer ===== */
.footer {
  position: relative;
  z-index: 1;
  padding: 60px 24px 40px;
  margin: 40px 16px 16px;
  overflow: hidden;
}

/* Footer background effects */
.footer-bg-effects {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}

.footer-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
  animation: footerGlowPulse 8s ease-in-out infinite;
}

.footer-glow-1 {
  bottom: -100px;
  left: -100px;
  background: linear-gradient(135deg, #F59E0B, #8B5CF6);
}

.footer-glow-2 {
  top: -100px;
  right: -100px;
  background: linear-gradient(135deg, #8B5CF6, #F59E0B);
  animation-delay: 4s;
}

@keyframes footerGlowPulse {

  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }

  50% {
    opacity: 0.2;
    transform: scale(1.1);
  }
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Footer main grid */
.footer-main {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 32px;
}

/* Footer sections */
.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-section-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Brand section */
.footer-brand-section {
  max-width: 280px;
}

.footer-logo-wrapper {
  position: relative;
  width: 50px;
  height: 50px;
  margin-bottom: 12px;
}

.footer-logo {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #F59E0B 0%, #8B5CF6 100%);
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  color: #0F172A;
  position: relative;
  z-index: 2;
}

.footer-logo-glow {
  position: absolute;
  inset: -4px;
  background: linear-gradient(135deg, #F59E0B 0%, #8B5CF6 100%);
  border-radius: 16px;
  opacity: 0.3;
  filter: blur(10px);
  z-index: 1;
  animation: logoGlow 3s ease-in-out infinite;
}

@keyframes logoGlow {

  0%,
  100% {
    opacity: 0.2;
    transform: scale(1);
  }

  50% {
    opacity: 0.4;
    transform: scale(1.05);
  }
}

.footer-tagline {
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-bottom: 8px;
  font-weight: 500;
}

.footer-description {
  font-size: 13px;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 20px;
}

/* Social links */
.footer-social {
  display: flex;
  gap: 10px;
}

.social-link {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--color-text-secondary);
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: linear-gradient(135deg, #F59E0B 0%, #8B5CF6 100%);
  border-color: transparent;
  color: #0F172A;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.3);
}

.social-link svg {
  width: 18px;
  height: 18px;
}

/* Quick links section */
.footer-links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-link-item {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
}

.footer-link-item::before {
  content: '';
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, #F59E0B, #8B5CF6);
  margin-right: 0;
  transition: all 0.3s;
}

.footer-link-item:hover {
  color: var(--color-text-primary);
  padding-left: 8px;
}

.footer-link-item:hover::before {
  width: 16px;
  margin-right: 8px;
}

/* Tech stack section */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-item {
  animation: techFloat 3s ease-in-out infinite;
}

.tech-item:nth-child(1) {
  animation-delay: 0s;
}

.tech-item:nth-child(2) {
  animation-delay: 0.2s;
}

.tech-item:nth-child(3) {
  animation-delay: 0.4s;
}

.tech-item:nth-child(4) {
  animation-delay: 0.6s;
}

.tech-item:nth-child(5) {
  animation-delay: 0.8s;
}

.tech-item:nth-child(6) {
  animation-delay: 1s;
}

@keyframes techFloat {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-4px);
  }
}

.tech-icon {
  padding: 6px 10px;
  font-size: 11px;
  font-weight: 600;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--color-text-secondary);
  transition: all 0.3s ease;
}

.tech-icon:hover {
  transform: scale(1.1);
  border-color: var(--tech-color, #F59E0B);
  color: var(--tech-color, #F59E0B);
}

.tech-vue {
  --tech-color: #42b883;
}

.tech-ts {
  --tech-color: #3178c6;
}

.tech-vite {
  --tech-color: #646cff;
}

.tech-js {
  --tech-color: #f7df1e;
}

.tech-css {
  --tech-color: #264de4;
}

.tech-html {
  --tech-color: #e34c26;
}

/* Contact section */
.footer-contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-text-secondary);
  font-size: 14px;
}

.contact-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: var(--color-primary);
}

/* Footer bottom */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 13px;
  color: var(--color-text-muted);
}

.footer-bottom-right {
  display: flex;
  align-items: center;
  gap: 6px;
}

.heart-icon {
  width: 14px;
  height: 14px;
  color: #ef4444;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {

  0%,
  100% {
    transform: scale(1);
  }

  15% {
    transform: scale(1.2);
  }

  30% {
    transform: scale(1);
  }

  45% {
    transform: scale(1.1);
  }
}

/* Back to top button */
.back-to-top {
  position: absolute;
  bottom: 40px;
  right: 40px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #F59E0B 0%, #8B5CF6 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s var(--ease-out-expo);
  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.3);
  z-index: 10;
}

.back-to-top.is-visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(245, 158, 11, 0.5);
}

.back-to-top:active {
  transform: translateY(-2px);
}

.back-to-top svg {
  width: 20px;
  height: 20px;
  color: #0F172A;
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

  .developer-info {
    align-items: center;
  }

  .hero-badge {
    width: 100%;
    justify-content: center;
  }

  .hero-description {
    text-align: center;
  }

  .hero-actions {
    justify-content: center;
    flex-wrap: wrap;
  }

  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  /* Hero responsive styles for tablet */
  .hero-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .stat-card {
    padding: 14px 12px;
  }

  .stat-icon {
    width: 38px;
    height: 38px;
  }

  .stat-icon svg {
    width: 18px;
    height: 18px;
  }

  .stat-value {
    font-size: 20px;
  }

  .stat-label {
    font-size: 11px;
  }

  .data-tech-row {
    flex-wrap: wrap;
    gap: 12px;
    padding: 0;
  }

  .data-cards-row,
  .tech-cards-row {
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  .data-card-unified,
  .tech-card-unified {
    padding: 16px;
  }

  .card-icon,
  .tech-card-icon {
    width: 44px;
    height: 44px;
  }

  .card-icon svg,
  .tech-card-icon svg {
    width: 22px;
    height: 22px;
  }

  .card-value {
    font-size: 24px;
  }

  .card-label,
  .tech-card-name {
    font-size: 12px;
  }

  .tech-card-level {
    font-size: 11px;
    padding: 3px 10px;
  }

  .achievements-grid {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .achievement-card {
    padding: 14px;
  }

  .achievement-icon {
    width: 44px;
    height: 44px;
  }

  .achievement-emoji {
    font-size: 20px;
  }

  /* 平板端也隐藏移动端菜单按钮 */
  .mobile-menu-btn {
    display: none;
  }

  .mobile-menu {
    display: none !important;
  }

  /* Footer tablet styles */
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .footer-brand-section {
    grid-column: 1 / -1;
    max-width: 100%;
    text-align: center;
  }

  .footer-logo-wrapper {
    margin: 0 auto 12px;
  }

  .footer-social {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 10px 12px;
    border-radius: 16px;
  }

  .nav-container {
    padding: 6px 8px;
    gap: 8px;
    flex-wrap: wrap;
  }

  .nav-menu {
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 4px;
  }

  .nav-link {
    padding: 6px 10px;
    font-size: 12px;
  }

  .github-link {
    display: flex;
    padding: 6px 12px;
    font-size: 12px;
  }

  .github-link span {
    display: none;
  }

  .github-link svg {
    width: 16px;
    height: 16px;
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

  /* Hero mobile responsive styles */
  .hero {
    padding: 80px 16px 16px;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .stat-card {
    padding: 12px 14px;
  }

  .stat-icon {
    width: 36px;
    height: 36px;
  }

  .stat-icon svg {
    width: 16px;
    height: 16px;
  }

  .stat-value {
    font-size: 18px;
  }

  .stat-label {
    font-size: 11px;
  }

  .data-tech-row {
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
  }

  .data-cards-row,
  .tech-cards-row {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  .data-card-unified,
  .tech-card-unified {
    padding: 14px;
  }

  .card-icon,
  .tech-card-icon {
    width: 40px;
    height: 40px;
  }

  .card-icon svg,
  .tech-card-icon svg {
    width: 20px;
    height: 20px;
  }

  .card-value {
    font-size: 20px;
  }

  .card-label,
  .tech-card-name {
    font-size: 11px;
  }

  .tech-card-level {
    font-size: 10px;
    padding: 2px 8px;
  }

  .card-trend {
    font-size: 11px;
  }

  .achievements-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .achievement-card {
    padding: 12px;
  }

  .achievement-icon {
    width: 42px;
    height: 42px;
  }

  .achievement-emoji {
    font-size: 18px;
  }

  .achievement-title {
    font-size: 13px;
  }

  .achievement-desc {
    font-size: 11px;
  }

  /* Footer responsive styles */
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .footer-brand-section {
    max-width: 100%;
    grid-column: 1 / -1;
    text-align: center;
  }

  .footer-logo-wrapper {
    margin: 0 auto 12px;
  }

  .footer-social {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }

  .back-to-top {
    bottom: 20px;
    right: 20px;
  }

  /* 移动端按钮保持一行 */
  .hero-actions {
    flex-wrap: nowrap;
    gap: 8px;
  }

  .btn-primary,
  .btn-secondary {
    padding: 10px 16px;
    font-size: 13px;
    flex: 1;
    justify-content: center;
  }

  .btn-primary svg,
  .btn-secondary svg {
    width: 14px;
    height: 14px;
  }

  /* Footer mobile styles */
  .footer-main {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .footer-brand-section {
    grid-column: 1;
  }

  .footer-description {
    font-size: 12px;
  }

  .tech-stack {
    justify-content: center;
  }

  .back-to-top {
    bottom: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
  }

  .back-to-top svg {
    width: 18px;
    height: 18px;
  }
}
</style>
