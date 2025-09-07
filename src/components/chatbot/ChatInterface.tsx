'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  XMarkIcon, 
  PaperAirplaneIcon, 
  TrashIcon,
  MinusIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useChatBot } from './ChatBotProvider'
import { MessageBubble } from './MessageBubble'
import { TypingIndicator } from './TypingIndicator'

export const ChatInterface: React.FC = () => {
  const { state, dispatch, sendMessage } = useChatBot()
  const [inputValue, setInputValue] = useState('')
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [state.currentSession?.messages, state.isTyping])

  // Focus input when chat opens
  useEffect(() => {
    if (state.isOpen && !isMinimized && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [state.isOpen, isMinimized])

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue.trim())
      setInputValue('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleClearChat = () => {
    dispatch({ type: 'CLEAR_CHAT' })
  }

  const handleClose = () => {
    dispatch({ type: 'CLOSE_CHAT' })
    setIsMinimized(false)
  }

  const handleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const quickSuggestions = state.language === 'BM' 
    ? [
        'Cari perkhidmatan pelabuhan',
        'Program latihan tersedia',
        'Hubungi customer service',
        'Lokasi dan arah tuju'
      ]
    : [
        'Find port services',
        'Available training programs',
        'Contact customer service',
        'Location and directions'
      ]

  if (!state.isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] z-50"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-sppp-blue to-sppp-dark-blue text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Siti Avatar */}
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
                  <Image
                    src="/images/siti-avatar.png"
                    alt="Siti - SPPP Virtual Assistant"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <div className="font-semibold text-sm">Siti</div>
                  <div className="text-xs text-white/80">Pembantu Maya SPPP</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {/* Minimize Button */}
                <button
                  onClick={handleMinimize}
                  className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                  title={isMinimized ? 'Restore' : 'Minimize'}
                >
                  <MinusIcon className="w-4 h-4" />
                </button>

                {/* Clear Chat Button */}
                <button
                  onClick={handleClearChat}
                  className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                  title="Clear conversation"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                  title="Close chat"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Chat Body */}
          <AnimatePresence>
            {!isMinimized && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {/* Messages Container */}
                <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {state.currentSession?.messages.map((message, index) => (
                    <MessageBubble
                      key={message.id}
                      message={message}
                      isLastMessage={index === state.currentSession!.messages.length - 1}
                    />
                  ))}

                  {/* Typing Indicator */}
                  <AnimatePresence>
                    {state.isTyping && <TypingIndicator />}
                  </AnimatePresence>

                  {/* Quick Suggestions */}
                  {state.currentSession?.messages.length === 1 && !state.isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="px-4 pb-2"
                    >
                      <div className="text-xs text-sppp-gray mb-2 font-medium">
                        Cadangan pertanyaan:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {quickSuggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setInputValue(suggestion)
                              setTimeout(() => inputRef.current?.focus(), 100)
                            }}
                            className="px-3 py-1.5 text-xs bg-white border border-gray-200 rounded-full text-sppp-dark-blue hover:bg-sppp-blue hover:text-white hover:border-sppp-blue transition-colors"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t border-gray-200 p-4 bg-white">
                  <div className="flex space-x-2">
                    <textarea
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={state.language === 'BM' 
                        ? "Taip mesej anda..." 
                        : "Type your message..."
                      }
                      rows={1}
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-sppp-blue focus:border-sppp-blue"
                      style={{
                        minHeight: '38px',
                        maxHeight: '100px'
                      }}
                    />
                    
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || state.isTyping}
                      className={`
                        px-3 py-2 rounded-lg transition-all duration-200 flex-shrink-0
                        ${inputValue.trim() && !state.isTyping
                          ? 'bg-sppp-blue text-white hover:bg-sppp-dark-blue shadow-md hover:shadow-lg' 
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }
                      `}
                    >
                      <PaperAirplaneIcon className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Footer Info */}
                  <div className="text-xs text-sppp-gray mt-2 text-center">
                    Tekan Enter untuk hantar • Shift+Enter untuk baris baru
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}