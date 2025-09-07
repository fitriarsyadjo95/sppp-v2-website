'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const TypingIndicator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="flex justify-start mb-4"
    >
      <div className="flex max-w-[80%]">
        {/* Siti Avatar */}
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

        {/* Typing Bubble */}
        <div className="flex flex-col items-start">
          {/* Sender Name */}
          <div className="text-xs text-sppp-gray mb-1 font-medium">
            Siti sedang menaip...
          </div>

          {/* Typing Animation Container */}
          <div className="relative bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
            <div className="flex space-x-1 items-center">
              <motion.div
                className="w-2 h-2 bg-sppp-blue rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: 0
                }}
              />
              <motion.div
                className="w-2 h-2 bg-sppp-blue rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: 0.2
                }}
              />
              <motion.div
                className="w-2 h-2 bg-sppp-blue rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: 0.4
                }}
              />
            </div>

            {/* Speech bubble tail */}
            <div className="absolute top-4 -left-2 w-0 h-0 border-r-8 border-r-white border-y-4 border-y-transparent"></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}