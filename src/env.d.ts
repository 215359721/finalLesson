/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COZE_API_BASE_URL?: string
  readonly VITE_COZE_BOT_ID?: string
  readonly VITE_COZE_PAT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
