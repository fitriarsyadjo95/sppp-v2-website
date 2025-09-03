'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { Navigation } from './navigation'
import { GlobalSearch } from '../search/global-search'
import { useLanguage } from '@/contexts/language-context'

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

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