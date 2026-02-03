/**
 * SVG 图标组件 - 加密钱包专用图标
 * 使用 Lucide/Heroicons 风格
 */

export const icons = {
  // Logo
  logo: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#logo-gradient)"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <defs>
      <linearGradient id="logo-gradient" x1="2" y1="7" x2="22" y2="7">
        <stop offset="0%" stop-color="#F59E0B"/>
        <stop offset="100%" stop-color="#8B5CF6"/>
      </linearGradient>
    </defs>
  </svg>`,

  // Blockchain icons
  ethereum: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L6 7L12 14L18 7L12 2Z" fill="#627EEA"/>
    <path d="M12 14V22" stroke="#627EEA" stroke-width="2"/>
    <path d="M6 7L12 14L18 7" stroke="#627EEA" stroke-width="2"/>
  </svg>`,

  bitcoin: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#F7931A"/>
    <path d="M14 8H10V16H14" stroke="white" stroke-width="1.5"/>
    <path d="M8 8H16M8 12H16M10 16V18M14 16V18" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  polygon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#8247E5"/>
    <path d="M12 6L8 15H16L12 6Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>`,

  solana: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21M3 8H17M7 16H21" stroke="#14F195" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  avalanche: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L20 8L12 22L4 8L12 2Z" fill="#E84142"/>
  </svg>`,

  arbitrum: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#28A0F0"/>
    <path d="M8 12L12 8L16 12M8 16L12 12L16 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  optimism: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#FF0420"/>
    <path d="M8 12L12 16L16 12M12 8V16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  base: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#0052FF"/>
    <circle cx="12" cy="12" r="4" stroke="white" stroke-width="1.5"/>
  </svg>`,

  // Security icons
  shield: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6V12C4 17 7.5 21 12 22C16.5 21 20 17 20 12V6L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  fingerprint: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4C8 4 4.5 6 2 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M22 9C19.5 6 16 4 12 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M6 12C6 9 9 6 12 6C15 6 18 9 18 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M9 12C9 10 10.5 8.5 12 8.5C13.5 8.5 15 10 15 12V15C15 17 13.5 19 12 19C10.5 19 9 17 9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  lock: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" stroke-width="2"/>
    <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <circle cx="12" cy="16" r="1" fill="currentColor"/>
  </svg>`,

  key: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="5" stroke="currentColor" stroke-width="2"/>
    <path d="M12 12L20 20M17 17H20V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  eye: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
    <path d="M3 12C5 7 8 4 12 4C16 4 19 7 21 12C19 17 16 20 12 20C8 20 5 17 3 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  // Action icons
  send: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  receive: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4V20M12 20L5 13M12 20L19 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  swap: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 16L3 20L7 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="translate(0, -4)"/>
    <path d="M3 16H13C15 16 17 14 17 12V8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M17 8L21 4L17 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="translate(0, 4)"/>
    <path d="M21 8H11C9 8 7 10 7 12V16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  // Platform icons
  chrome: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#4285F4"/>
    <path d="M12 12L6 6M12 12L18 6M12 12L12 22" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <circle cx="12" cy="12" r="4" fill="white"/>
  </svg>`,

  apple: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 7C16 5 18 5 18 5C18 5 19 7 18 9C17 11 15 11 15 11C15 11 14 9 15 7Z" fill="currentColor"/>
    <path d="M12 11C12 11 10 12 10 15C10 19 13 22 15 22C16 22 16.5 21 17 21C17.5 21 18 22 19 22C21 22 22 20 22 19C22 18 21.5 17.5 21 17C20.5 16.5 20 16 20 15C20 13 22 12 22 12C22 12 19 10 17 11C16 11.5 15.5 12 15 12C14.5 12 14 11.5 13 11.5C12 11.5 12 11 12 11Z" fill="currentColor"/>
  </svg>`,

  android: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="8" width="14" height="12" rx="3" stroke="currentColor" stroke-width="2"/>
    <path d="M8 8V6C8 4.5 9 3.5 10.5 3.5H13.5C15 3.5 16 4.5 16 6V8" stroke="currentColor" stroke-width="2"/>
    <circle cx="9" cy="14" r="1" fill="currentColor"/>
    <circle cx="15" cy="14" r="1" fill="currentColor"/>
    <path d="M6 10L4 8M18 10L20 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  // UI icons
  menu: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  close: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  check: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  arrowRight: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  download: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  clock: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
    <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  externalLink: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 3H21V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  zap: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  star: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
}
