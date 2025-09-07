import React from 'react'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface BreadcrumbItem {
  name: string
  href?: string
}

interface PageTemplateProps {
  title: string
  subtitle?: string
  breadcrumbs?: BreadcrumbItem[]
  children: React.ReactNode
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  breadcrumbs,
  children
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sppp-dark-blue to-sppp-blue py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                {breadcrumbs.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <ChevronRightIcon className="h-4 w-4 text-white/60 mx-2" />
                    )}
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-sm text-white/80 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="text-sm text-white">{item.name}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          
          {/* Title */}
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="text-xl text-white/90">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </div>
    </div>
  )
}