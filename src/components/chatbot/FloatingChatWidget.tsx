'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useChatBot } from './ChatBotProvider'

export const FloatingChatWidget: React.FC = () => {
  const { state, dispatch } = useChatBot()

  const handleToggleChat = () => {
    console.log('Chatbot button clicked!', { isOpen: state.isOpen })
    if (state.isOpen) {
      dispatch({ type: 'CLOSE_CHAT' })
    } else {
      dispatch({ type: 'OPEN_CHAT' })
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Avatar Button */}
      <motion.button
        onClick={handleToggleChat}
        type="button"
        className={`
          relative w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer
          ${state.isOpen 
            ? 'bg-sppp-dark-blue' 
            : 'bg-gradient-to-br from-sppp-blue to-sppp-dark-blue'
          }
          focus:outline-none focus:ring-4 focus:ring-sppp-blue/30
        `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        style={{ pointerEvents: 'all' }}
      >
        {/* Siti Avatar */}
        <div className="relative w-full h-full rounded-full overflow-hidden">
          {state.isOpen ? (
            <XMarkIcon className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          ) : (
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/images/siti-avatar.png"
                alt="Siti - SPPP Virtual Assistant"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent rounded-b-full">
                <span className="text-xs font-medium text-white block text-center pb-1">Siti</span>
              </div>
            </div>
          )}
        </div>

        {/* Notification Badge */}
        <AnimatePresence>
          {!state.isOpen && state.currentSession && state.currentSession.messages.length > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-sppp-accent rounded-full flex items-center justify-center"
            >
              <span className="text-xs font-bold text-white">
                {state.currentSession.messages.filter(m => m.sender === 'bot').length}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Typing Indicator */}
        <AnimatePresence>
          {state.isTyping && (
            <motion.div
              initial={{ scale: 0, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: 10 }}
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-3 py-1 shadow-md pointer-events-none"
              style={{ pointerEvents: 'none' }}
            >
              <div className="flex space-x-1">
                <motion.div
                  className="w-2 h-2 bg-sppp-blue rounded-full"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="w-2 h-2 bg-sppp-blue rounded-full"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="w-2 h-2 bg-sppp-blue rounded-full"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Welcome Tooltip */}
      <AnimatePresence>
        {!state.isOpen && !state.currentSession && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ delay: 2 }}
            className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg p-3 max-w-xs pointer-events-none"
            style={{ pointerEvents: 'none' }}
          >
            <div className="text-sm text-sppp-dark-blue font-medium mb-1">
              Hai! Saya Siti 👋
            </div>
            <div className="text-xs text-sppp-gray">
              Pembantu maya SPPP. Klik untuk memulakan perbualan!
            </div>
            {/* Speech bubble tail */}
            <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">
              <div className="w-0 h-0 border-l-8 border-l-white border-y-4 border-y-transparent"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse Ring Animation */}
      <AnimatePresence>
        {!state.isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-sppp-blue pointer-events-none"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ 
              scale: [1, 1.5, 2], 
              opacity: [0.5, 0.2, 0] 
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
            style={{ pointerEvents: 'none' }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}