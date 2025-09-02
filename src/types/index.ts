// Common types for the SPPP application

export interface User {
  id: string
  email: string
  name?: string
  role: 'admin' | 'staff' | 'public'
  department?: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface Page {
  id: string
  slug: string
  title: string
  content: any
  excerpt?: string
  featuredImage?: string
  published: boolean
  language: 'en' | 'ms'
  seo: {
    title?: string
    description?: string
    keywords?: string[]
  }
  createdAt: Date
  updatedAt: Date
}

export interface NavigationItem {
  name: string
  href: string
  icon?: any
  description?: string
  subItems?: NavigationItem[]
  external?: boolean
}

export interface SearchResult {
  id: string
  title: string
  content: string
  url: string
  type: 'page' | 'document' | 'news' | 'service'
  relevance: number
  highlights?: string[]
}

export interface SearchSuggestion {
  text: string
  type: 'suggestion' | 'recent' | 'popular'
  url?: string
}

export interface PortStatistics {
  shipsInPort: number
  cargoHandled: number
  berthUtilization: number
  averageWaitTime: number
  dailyTraffic: number
  totalThroughput: number
}

export interface ChatMessage {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
  type?: 'text' | 'link' | 'image'
  metadata?: Record<string, any>
}

export interface Service {
  id: string
  name: string
  description: string
  category: string
  icon?: string
  features: string[]
  pricing?: string
  duration?: string
  requirements?: string[]
}

export interface NewsItem {
  id: string
  title: string
  content: string
  excerpt: string
  author: string
  publishedAt: Date
  featuredImage?: string
  tags: string[]
  category: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  workingHours: string
  emergencyContact?: string
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form types
export interface SearchFilters {
  category?: string
  dateRange?: {
    from: Date
    to: Date
  }
  language?: 'en' | 'ms'
  type?: string[]
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  department?: string
}

export interface FeedbackForm {
  rating: number
  comment?: string
  category: string
  anonymous?: boolean
}

// Component props
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
}

export interface CardProps extends BaseComponentProps {
  title?: string
  description?: string
  footer?: React.ReactNode
}