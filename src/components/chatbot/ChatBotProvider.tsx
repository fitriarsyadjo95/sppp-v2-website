'use client'

import React, { createContext, useContext, useReducer, useCallback, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
// import { useLanguage } from '@/contexts/language-context'
import { 
  ChatBotState, 
  ChatBotAction, 
  ChatBotContextType, 
  ChatMessage, 
  ChatSession 
} from '@/types/chatbot'
import { chatbotKnowledge } from './chatbot-knowledge'

// Initial state
const initialState: ChatBotState = {
  isOpen: false,
  currentSession: null,
  isTyping: false,
  language: 'BM'
}

// Reducer
function chatBotReducer(state: ChatBotState, action: ChatBotAction): ChatBotState {
  switch (action.type) {
    case 'OPEN_CHAT':
      return {
        ...state,
        isOpen: true,
        currentSession: state.currentSession || createNewSession()
      }
    
    case 'CLOSE_CHAT':
      return {
        ...state,
        isOpen: false
      }
    
    case 'SEND_MESSAGE':
      if (!state.currentSession) return state
      
      const userMessage: ChatMessage = {
        id: generateId(),
        timestamp: new Date(),
        ...action.message
      }
      
      return {
        ...state,
        currentSession: {
          ...state.currentSession,
          messages: [...state.currentSession.messages, userMessage],
          lastActivity: new Date()
        }
      }
    
    case 'RECEIVE_MESSAGE':
      if (!state.currentSession) return state
      
      const botMessage: ChatMessage = {
        id: generateId(),
        timestamp: new Date(),
        ...action.message
      }
      
      return {
        ...state,
        currentSession: {
          ...state.currentSession,
          messages: [...state.currentSession.messages, botMessage],
          lastActivity: new Date()
        },
        isTyping: false
      }
    
    case 'SET_TYPING':
      return {
        ...state,
        isTyping: action.isTyping
      }
    
    case 'CLEAR_CHAT':
      return {
        ...state,
        currentSession: createNewSession()
      }
    
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.language
      }
    
    default:
      return state
  }
}

// Helper functions
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

function createNewSession(): ChatSession {
  return {
    id: generateId(),
    messages: [],
    startedAt: new Date(),
    lastActivity: new Date(),
    isActive: true
  }
}

// Context
const ChatBotContext = createContext<ChatBotContextType | undefined>(undefined)

// Provider component
interface ChatBotProviderProps {
  children: ReactNode
}

export const ChatBotProvider: React.FC<ChatBotProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(chatBotReducer, initialState)
  const router = useRouter()
  
  // Use default language for now
  // TODO: Integrate with LanguageProvider later

  const processUserMessage = useCallback((content: string) => {
    // Set typing indicator
    dispatch({ type: 'SET_TYPING', isTyping: true })
    
    // Simulate processing delay
    setTimeout(() => {
      const response = chatbotKnowledge.processMessage(content, state.language)
      
      dispatch({
        type: 'RECEIVE_MESSAGE',
        message: {
          content: response.content,
          sender: 'bot',
          type: response.type,
          metadata: response.metadata
        }
      })
    }, 1000 + Math.random() * 1000) // 1-2 seconds delay
  }, [state.language])

  const sendMessage = useCallback((content: string) => {
    // Add user message
    dispatch({
      type: 'SEND_MESSAGE',
      message: {
        content,
        sender: 'user',
        type: 'text'
      }
    })
    
    // Process and respond
    processUserMessage(content)
  }, [processUserMessage])

  const navigate = useCallback((url: string) => {
    router.push(url)
    // Optionally close chat after navigation
    dispatch({ type: 'CLOSE_CHAT' })
  }, [router])

  // Send welcome message when chat opens
  React.useEffect(() => {
    if (state.isOpen && state.currentSession && state.currentSession.messages.length === 0) {
      const welcomeMessage = state.language === 'BM' 
        ? "Selamat datang! Saya Siti, pembantu maya SPPP. Bagaimana saya boleh membantu anda hari ini?"
        : "Welcome! I'm Siti, your SPPP virtual assistant. How can I help you today?"
      
      dispatch({
        type: 'RECEIVE_MESSAGE',
        message: {
          content: welcomeMessage,
          sender: 'bot',
          type: 'text',
          metadata: {
            suggestions: state.language === 'BM' 
              ? ['Cari perkhidmatan', 'Navigasi ke halaman', 'Hubungi kami', 'Program latihan']
              : ['Find services', 'Navigate to page', 'Contact us', 'Training programs']
          }
        }
      })
    }
  }, [state.isOpen, state.currentSession, state.language])

  const value: ChatBotContextType = {
    state,
    dispatch,
    sendMessage,
    navigate
  }

  return (
    <ChatBotContext.Provider value={value}>
      {children}
    </ChatBotContext.Provider>
  )
}

// Hook to use the context
export const useChatBot = (): ChatBotContextType => {
  const context = useContext(ChatBotContext)
  if (!context) {
    throw new Error('useChatBot must be used within a ChatBotProvider')
  }
  return context
}