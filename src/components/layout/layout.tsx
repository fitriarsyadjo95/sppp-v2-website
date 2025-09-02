'use client'

import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { BaseComponentProps } from '@/types'

interface LayoutProps extends BaseComponentProps {
  title?: string
  description?: string
  showHeader?: boolean
  showFooter?: boolean
}

export const Layout: React.FC<LayoutProps> = ({
  title,
  description,
  showHeader = true,
  showFooter = true,
  className,
  children
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Page Title and Description for SEO */}
      {title && (
        <head>
          <title>{title} | SPPP</title>
          {description && <meta name="description" content={description} />}
        </head>
      )}

      {/* Header */}
      {showHeader && <Header />}

      {/* Main Content */}
      <main className={`flex-1 ${className || ''}`}>
        {children}
      </main>

      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  )
}

Layout.displayName = 'Layout'