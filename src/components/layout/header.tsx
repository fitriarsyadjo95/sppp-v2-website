'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, Bars3Icon, XMarkIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { Navigation } from './navigation'
import { GlobalSearch } from '../search/global-search'
import { useLanguage } from '@/contexts/language-context'
import { useAccessibility } from '@/contexts/accessibility-context'

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { dispatch } = useAccessibility()

  return (
    <header className="relative bg-white">
      {/* Top Header Bar */}
      <div className="bg-sppp-dark-blue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                <span>+60 4-210 2211</span>
              </div>
              <div className="hidden sm:flex items-center">
                <EnvelopeIcon className="h-4 w-4 mr-2" />
                <span>info@penangport.gov.my</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/staff-portal" 
                className="text-xs bg-sppp-blue hover:bg-sppp-light-blue px-3 py-1 rounded transition-colors"
              >
                {t('staff-portal', 'Portal Staf', 'Staff Portal')}
              </Link>
              
              {/* Accessibility Button */}
              <button
                onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
                className="text-xs hover:text-sppp-accent transition-colors p-1 rounded hover:bg-white/10"
                title={t('accessibility-menu', 'Menu Aksesibiliti', 'Accessibility Menu')}
                aria-label="Open accessibility menu"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="4" r="2"/>
                  <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-.46 2.48-.3 3.67.14 1.05.4 2.06.8 3H15v-2h-2.17z"/>
                  <circle cx="17.5" cy="19.5" r="1.5"/>
                  <circle cx="5.5" cy="19.5" r="1.5"/>
                  <path d="M5.5 16c-.83 0-1.5.67-1.5 1.5v0c0 .83.67 1.5 1.5 1.5h12c.83 0 1.5-.67 1.5-1.5v0c0-.83-.67-1.5-1.5-1.5H5.5z"/>
                </svg>
              </button>
              
              <div className="flex space-x-2">
                <button 
                  onClick={() => setLanguage('BM')}
                  className={`text-xs transition-colors ${
                    language === 'BM' 
                      ? 'text-sppp-accent font-semibold' 
                      : 'hover:text-sppp-accent'
                  }`}
                >
                  BM
                </button>
                <span className="text-xs">|</span>
                <button 
                  onClick={() => setLanguage('EN')}
                  className={`text-xs transition-colors ${
                    language === 'EN' 
                      ? 'text-sppp-accent font-semibold' 
                      : 'hover:text-sppp-accent'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-sppp-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SPPP</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-sppp-dark-blue">
                    {t('header-title', 'Suruhanjaya Pelabuhan', 'Port Commission')}
                  </h1>
                  <p className="text-sm text-sppp-gray">
                    {t('header-subtitle', 'Pulau Pinang', 'Penang')}
                  </p>
                </div>
              </Link>
            </div>

            {/* Search - Hidden on mobile, will be in mobile menu */}
            <div className="hidden lg:flex flex-1 max-w-lg mx-8">
              <GlobalSearch />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link href="/contact">
                <Button variant="outline" size="sm">
                  {t('contact-us', 'Hubungi Kami', 'Contact Us')}
                </Button>
              </Link>
              <Link href="/services">
                <Button size="sm">
                  {t('online-services', 'Perkhidmatan Online', 'Online Services')}
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </header>
  )
}

Header.displayName = 'Header'