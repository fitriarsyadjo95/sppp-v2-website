'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChatMessage } from '@/types/chatbot'
import { useChatBot } from './ChatBotProvider'

interface MessageBubbleProps {
  message: ChatMessage
  isLastMessage: boolean
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ 
  message 
}) => {
  const { navigate } = useChatBot()
  const isBot = message.sender === 'bot'
  const isUser = message.sender === 'user'

  const formatTime = (timestamp: Date) => {
    return new Intl.DateTimeFormat('ms-MY', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(timestamp))
  }

  const handleLinkClick = (url: string) => {
    navigate(url)
  }

  const handleSuggestionClick = (suggestion: string) => {
    // This would trigger sending the suggestion as a user message
    // For now, we'll just log it
    console.log('Suggestion clicked:', suggestion)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30
      }}
      className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`flex max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        
        {/* Avatar */}
        {isBot && (
          <div className="flex-shrink-0 mr-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sppp-blue to-sppp-dark-blue flex items-center justify-center">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white/40 rounded-full relative">
                  {/* Simple face representation */}
                  <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-white rounded-full"></div>
                  <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-white rounded-full"></div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-0.5 bg-white/60 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Message Content */}
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          
          {/* Sender Name */}
          {isBot && (
            <div className="text-xs text-sppp-gray mb-1 font-medium">
              Siti - Pembantu Maya SPPP
            </div>
          )}

          {/* Message Bubble */}
          <div
            className={`
              relative px-4 py-3 rounded-2xl shadow-sm
              ${isBot 
                ? 'bg-white border border-gray-200 text-sppp-dark-blue' 
                : 'bg-gradient-to-r from-sppp-blue to-sppp-dark-blue text-white'
              }
              ${isBot ? 'rounded-bl-md' : 'rounded-br-md'}
            `}
          >
            {/* Main Message Content */}
            <div className="text-sm leading-relaxed whitespace-pre-wrap">
              {message.content}
            </div>

            {/* Links */}
            {message.metadata?.links && message.metadata.links.length > 0 && (
              <div className="mt-3 space-y-2">
                {message.metadata.links.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleLinkClick(link.url)}
                    className={`
                      block w-full text-left px-3 py-2 rounded-lg text-sm font-medium
                      transition-colors duration-200
                      ${isBot 
                        ? 'bg-sppp-light-gray hover:bg-sppp-blue hover:text-white' 
                        : 'bg-white/20 hover:bg-white/30 text-white'
                      }
                    `}
                  >
                    🔗 {link.text}
                  </button>
                ))}
              </div>
            )}

            {/* Suggestion Chips */}
            {message.metadata?.suggestions && message.metadata.suggestions.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {message.metadata.suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      transition-colors duration-200
                      ${isBot 
                        ? 'bg-sppp-light-gray text-sppp-dark-blue hover:bg-sppp-blue hover:text-white' 
                        : 'bg-white/20 hover:bg-white/30 text-white'
                      }
                    `}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Message Tail */}
            <div 
              className={`
                absolute top-4 w-0 h-0
                ${isBot 
                  ? '-left-2 border-r-8 border-r-white border-y-4 border-y-transparent border-l-0' 
                  : '-right-2 border-l-8 border-l-sppp-blue border-y-4 border-y-transparent border-r-0'
                }
              `}
            />
          </div>

          {/* Timestamp */}
          <div className={`text-xs text-sppp-gray mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
            {formatTime(message.timestamp)}
          </div>
        </div>
      </div>
    </motion.div>
  )
}