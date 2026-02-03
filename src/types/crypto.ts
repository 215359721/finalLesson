/**
 * 加密钱包落地页类型定义
 */

export interface Blockchain {
  id: string
  name: string
  icon: string
  color: string
  supported: boolean
}

export interface SecurityFeature {
  id: string
  title: string
  description: string
  icon: string
}

export interface Transaction {
  id: string
  type: 'send' | 'receive' | 'swap'
  token: string
  amount: string
  value: string
  from?: string
  to?: string
  timestamp: string
  status: 'pending' | 'confirmed' | 'failed'
}

export interface DownloadOption {
  platform: string
  version: string
  size: string
  url: string
  icon: string
}
