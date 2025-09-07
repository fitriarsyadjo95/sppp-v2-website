export interface ChatMessage {
  id: string
  content: string
  timestamp: Date
  sender: 'user' | 'bot' | 'system'
  type?: 'text' | 'link' | 'suggestion' | 'action'
  metadata?: {
    links?: Array<{ text: string; url: string }>
    suggestions?: string[]
    actions?: Array<{ text: string; action: string; data?: Record<string, unknown> }>
  }
}

export interface ChatSession {
  id: string
  messages: ChatMessage[]
  startedAt: Date
  lastActivity: Date
  isActive: boolean
}

export interface KnowledgeBaseItem {
  id: string
  keywords: string[]
  category: 'navigation' | 'services' | 'contact' | 'general' | 'training' | 'facilities'
  title: string
  description: string
  url?: string
  responses: {
    bm: string
    en: string
  }
  relatedItems?: string[]
}

export interface ChatBotState {
  isOpen: boolean
  currentSession: ChatSession | null
  isTyping: boolean
  language: 'BM' | 'EN'
}

export interface NavigationKnowledge {
  name: string
  href: string
  description?: string
  keywords: string[]
  category: string
  subItems?: NavigationKnowledge[]
}

export interface SuggestionChip {
  id: string
  text: {
    bm: string
    en: string
  }
  action: 'navigate' | 'search' | 'contact' | 'info'
  data?: Record<string, unknown>
}

export type ChatBotAction = 
  | { type: 'OPEN_CHAT' }
  | { type: 'CLOSE_CHAT' }
  | { type: 'SEND_MESSAGE'; message: Omit<ChatMessage, 'id' | 'timestamp'> }
  | { type: 'RECEIVE_MESSAGE'; message: Omit<ChatMessage, 'id' | 'timestamp'> }
  | { type: 'SET_TYPING'; isTyping: boolean }
  | { type: 'CLEAR_CHAT' }
  | { type: 'SET_LANGUAGE'; language: 'BM' | 'EN' }

export interface ChatBotContextType {
  state: ChatBotState
  dispatch: (action: ChatBotAction) => void
  sendMessage: (content: string) => void
  navigate: (url: string) => void
}