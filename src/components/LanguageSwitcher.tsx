'use client'

import React from 'react'
import { useLanguage } from '@/contexts/language-context'

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('BM')}
        className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
          language === 'BM'
            ? 'bg-sppp-accent text-white'
            : 'text-white hover:text-sppp-accent'
        }`}
      >
        BM
      </button>
      <span className="text-white/50">|</span>
      <button
        onClick={() => setLanguage('EN')}
        className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
          language === 'EN'
            ? 'bg-sppp-accent text-white'
            : 'text-white hover:text-sppp-accent'
        }`}
      >
        EN
      </button>
    </div>
  )
}