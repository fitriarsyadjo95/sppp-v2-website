'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'

export const Hero: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sppp-dark-blue via-sppp-blue to-sppp-light-blue">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                {t('hero-badge', 'Portal Terkini • Sistem Online 24/7', 'Latest Portal • 24/7 Online System')}
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                {t('hero-title', 'Suruhanjaya Pelabuhan', 'Port Commission')}{' '}
                <span className="text-sppp-accent">{t('hero-location', 'Pulau Pinang', 'Penang')}</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed">
                {t('hero-description', 
                  'Pintu masuk maritim utama Malaysia dengan perkhidmatan pelabuhan terdepan, latihan profesional dan teknologi canggih untuk kecemerlangan industri maritim.',
                  'Malaysia\'s premier maritime gateway with leading port services, professional training and advanced technology for maritime industry excellence.'
                )}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-white text-sppp-blue hover:bg-gray-100 font-semibold"
                >
                  {t('online-services-btn', 'Perkhidmatan Online', 'Online Services')}
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
                
                <Link href="/about">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-sppp-blue font-semibold"
                  >
                    {t('learn-more-btn', 'Ketahui Lebih Lanjut', 'Learn More')}
                    <ChevronRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sppp-accent">15</div>
                  <div className="text-sm text-gray-200">Terminal</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sppp-accent">2.5km</div>
                  <div className="text-sm text-gray-200">Dermaga</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sppp-accent">500ha</div>
                  <div className="text-sm text-gray-200">Kawasan</div>
                </div>
              </div>
            </div>

            {/* Right Content - Port Visualization */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                {/* Real-time Port Status */}
                <div className="mb-6">
                  <h3 className="text-white text-lg font-semibold mb-4">Status Pelabuhan Masa Nyata</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-sppp-accent text-2xl font-bold">12</div>
                      <div className="text-white text-sm">Kapal di Pelabuhan</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-sppp-accent text-2xl font-bold">89%</div>
                      <div className="text-white text-sm">Penggunaan Dermaga</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-sppp-accent text-2xl font-bold">2,450</div>
                      <div className="text-white text-sm">TEU Hari Ini</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-sppp-accent text-2xl font-bold">1.2h</div>
                      <div className="text-white text-sm">Purata Menunggu</div>
                    </div>
                  </div>
                </div>

                {/* Live Activity Feed */}
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
                    <span className="text-white">MV Ocean Pride - Arrived at Terminal 5</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    <span className="text-white">Container loading at Berth 12 - 95% complete</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                    <span className="text-white">MV Star Carrier - Departure scheduled 14:30</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/20">
                  <Link 
                    href="/operations/dashboard" 
                    className="text-sppp-accent hover:text-white text-sm font-medium inline-flex items-center"
                  >
                    Lihat Dashboard Penuh
                    <ChevronRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12"
        >
          <path 
            d="M0,120 L0,60 Q300,0 600,60 T1200,60 L1200,120 Z" 
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </section>
  )
}

Hero.displayName = 'Hero'