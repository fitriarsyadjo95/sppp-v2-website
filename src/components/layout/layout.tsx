'use client'

import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { BaseComponentProps } from '@/types'
import { LanguageProvider } from '@/contexts/language-context'
import { AccessibilityProvider } from '@/contexts/accessibility-context'
import { ChatBotProvider } from '@/components/chatbot/ChatBotProvider'
import { FloatingChatWidget } from '@/components/chatbot/FloatingChatWidget'
import { ChatInterface } from '@/components/chatbot/ChatInterface'
import { AccessibilityMenu } from '@/components/accessibility/AccessibilityMenu'

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
      <AccessibilityProvider>
        <ChatBotProvider>
          <div className="min-h-screen flex flex-col">

            {/* Header */}
            {showHeader && <Header />}

            {/* Main Content */}
            <main className={`flex-1 ${className || ''}`}>
              {children}
            </main>

            {/* Footer */}
            {showFooter && <Footer />}

            {/* Chatbot Components */}
            <FloatingChatWidget />
            <ChatInterface />
            
            {/* Accessibility Menu */}
            <AccessibilityMenu />
          </div>
        </ChatBotProvider>
      </AccessibilityProvider>
    </LanguageProvider>
  )
}

Layout.displayName = 'Layout'