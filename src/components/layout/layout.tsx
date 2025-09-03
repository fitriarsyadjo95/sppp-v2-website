'use client'

import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { BaseComponentProps } from '@/types'
import { LanguageProvider } from '@/contexts/language-context'

interface LayoutProps extends BaseComponentProps {
  showHeader?: boolean
  showFooter?: boolean
}

export const Layout: React.FC<LayoutProps> = ({
  showHeader = true,
  showFooter = true,
  className,
  children
}) => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">

        {/* Header */}
        {showHeader && <Header />}

        {/* Main Content */}
        <main className={`flex-1 ${className || ''}`}>
          {children}
        </main>

        {/* Footer */}
        {showFooter && <Footer />}
      </div>
    </LanguageProvider>
  )
}

Layout.displayName = 'Layout'