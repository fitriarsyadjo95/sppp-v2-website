'use client'

import React from 'react'
import Link from 'next/link'
import { 
  DocumentTextIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  PhoneIcon,
  NewspaperIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

const quickLinks = [
  {
    id: 1,
    name: 'Portal Staf',
    description: 'Akses sistem dalaman untuk staf SPPP',
    icon: UserGroupIcon,
    href: '/staff-portal',
    external: false,
    color: 'bg-sppp-blue'
  },
  {
    id: 2,
    name: 'Jadual Kapal',
    description: 'Lihat jadual ketibaan dan berlepas kapal',
    icon: CalendarDaysIcon,
    href: '/services/vessel-schedule',
    external: false,
    color: 'bg-sppp-accent'
  },
  {
    id: 3,
    name: 'Borang & Dokumen',
    description: 'Muat turun borang dan dokumen rasmi',
    icon: DocumentTextIcon,
    href: '/documents',
    external: false,
    color: 'bg-green-500'
  },
  {
    id: 4,
    name: 'Tender Terkini',
    description: 'Peluang perniagaan dan kontrak tender',
    icon: BriefcaseIcon,
    href: '/tenders',
    external: false,
    color: 'bg-orange-500'
  },
  {
    id: 5,
    name: 'Berita & Media',
    description: 'Pengumuman dan siaran media terkini',
    icon: NewspaperIcon,
    href: '/news',
    external: false,
    color: 'bg-purple-500'
  },
  {
    id: 6,
    name: 'Hubungi Kami',
    description: 'Maklumat hubungan dan lokasi pejabat',
    icon: PhoneIcon,
    href: '/contact',
    external: false,
    color: 'bg-red-500'
  },
  {
    id: 7,
    name: 'Port Community System',
    description: 'Akses sistem komuniti pelabuhan',
    icon: GlobeAltIcon,
    href: 'https://pcs.penangport.gov.my',
    external: true,
    color: 'bg-blue-600'
  },
  {
    id: 8,
    name: 'Sistem e-Permit',
    description: 'Permohonan permit dan kelulusan online',
    icon: DocumentTextIcon,
    href: 'https://permit.penangport.gov.my',
    external: true,
    color: 'bg-indigo-500'
  }
]

export const QuickLinks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-sppp-dark-blue mb-4">
            Akses Pantas
          </h2>
          <p className="text-lg text-sppp-gray max-w-2xl mx-auto">
            Capaian segera kepada perkhidmatan, sistem dan maklumat yang paling kerap diperlukan
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:shadow-sppp-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${link.color} text-white group-hover:scale-110 transition-transform`}>
                  <link.icon className="h-6 w-6" />
                </div>
                {link.external && (
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 text-sppp-gray group-hover:text-sppp-blue transition-colors" />
                )}
              </div>

              <h3 className="text-lg font-semibold text-sppp-dark-blue mb-2 group-hover:text-sppp-blue transition-colors">
                {link.name}
              </h3>
              
              <p className="text-sm text-sppp-gray leading-relaxed">
                {link.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Popular Services Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-sppp-dark-blue text-center mb-8">
            Perkhidmatan Popular
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sppp-blue/10 rounded-full mb-4">
                <DocumentTextIcon className="h-8 w-8 text-sppp-blue" />
              </div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">
                Permit & Kelulusan
              </h4>
              <p className="text-sm text-sppp-gray mb-4">
                Permohonan permit operasi dan kelulusan dalam talian
              </p>
              <Link 
                href="/permits" 
                className="text-sppp-blue hover:text-sppp-dark-blue font-medium text-sm"
              >
                Mohon Sekarang →
              </Link>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sppp-blue/10 rounded-full mb-4">
                <CalendarDaysIcon className="h-8 w-8 text-sppp-blue" />
              </div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">
                Tempahan Kemudahan
              </h4>
              <p className="text-sm text-sppp-gray mb-4">
                Tempah ruang stor, dermaga dan kemudahan pelabuhan
              </p>
              <Link 
                href="/bookings" 
                className="text-sppp-blue hover:text-sppp-dark-blue font-medium text-sm"
              >
                Buat Tempahan →
              </Link>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sppp-blue/10 rounded-full mb-4">
                <GlobeAltIcon className="h-8 w-8 text-sppp-blue" />
              </div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">
                Tracking Kargo
              </h4>
              <p className="text-sm text-sppp-gray mb-4">
                Jejak status kargo dan kontena dalam masa nyata
              </p>
              <Link 
                href="/tracking" 
                className="text-sppp-blue hover:text-sppp-dark-blue font-medium text-sm"
              >
                Jejak Kargo →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

QuickLinks.displayName = 'QuickLinks'