'use client'

import React from 'react'
import Link from 'next/link'
import { 
  TruckIcon, 
  GlobeAltIcon, 
  AcademicCapIcon, 
  CogIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'

const services = [
  {
    id: 1,
    name: 'Perkhidmatan Kargo',
    description: 'Pengendalian kontena dan kargo am dengan teknologi terkini dan prosedur keselamatan yang ketat.',
    icon: TruckIcon,
    href: '/services/cargo',
    features: [
      'Pengendalian kontena 24/7',
      'Kargo refrigerated',
      'Kargo berbahaya',
      'Sistem tracking real-time'
    ],
    stats: { label: 'TEU/tahun', value: '1.2M' }
  },
  {
    id: 2,
    name: 'Perkhidmatan Kapal',
    description: 'Kemudahan berlabuh, navigasi dan sokongan operasi kapal dengan standard antarabangsa.',
    icon: GlobeAltIcon,
    href: '/services/vessel',
    features: [
      'Perkhidmatan pilot',
      'Pembekalan bahan api',
      'Repair & maintenance',
      'Waste management'
    ],
    stats: { label: 'Kapal/bulan', value: '450+' }
  },
  {
    id: 3,
    name: 'Latihan & Pembangunan',
    description: 'Program latihan profesional dan sijil antarabangsa untuk industri maritim dan pelabuhan.',
    icon: AcademicCapIcon,
    href: '/training',
    features: [
      'Sijil STCW',
      'Latihan operasi pelabuhan',
      'Kursus keselamatan',
      'Program kepimpinan'
    ],
    stats: { label: 'Pelajar/tahun', value: '2,000+' }
  },
  {
    id: 4,
    name: 'Teknologi & Automatik',
    description: 'Sistem automatik dan teknologi canggih untuk operasi pelabuhan yang cekap.',
    icon: CogIcon,
    href: '/services/technology',
    features: [
      'Port Management System',
      'RFID tracking',
      'Automated cranes',
      'AI monitoring'
    ],
    stats: { label: 'Sistem', value: '15+' }
  },
  {
    id: 5,
    name: 'Perundingan Teknikal',
    description: 'Khidmat nasihat dan konsultansi teknikal untuk projek infrastruktur maritim.',
    icon: DocumentTextIcon,
    href: '/services/consultation',
    features: [
      'Port planning',
      'Feasibility studies',
      'Technical audits',
      'Project management'
    ],
    stats: { label: 'Projek', value: '50+' }
  },
  {
    id: 6,
    name: 'Keselamatan & Pematuhan',
    description: 'Perkhidmatan keselamatan dan pematuhan standard antarabangsa ISPS dan IMO.',
    icon: ShieldCheckIcon,
    href: '/services/security',
    features: [
      'ISPS compliance',
      'Security screening',
      'Emergency response',
      'Risk assessment'
    ],
    stats: { label: 'Pematuhan', value: '100%' }
  }
]

export const Services: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-sppp-dark-blue mb-4">
            Perkhidmatan Pelabuhan Terdepan
          </h2>
          <p className="text-lg text-sppp-gray max-w-3xl mx-auto">
            SPPP menyediakan rangkaian lengkap perkhidmatan pelabuhan dengan standard 
            antarabangsa untuk memenuhi keperluan industri maritim moden.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-sppp-lg transition-all duration-300 group"
            >
              {/* Service Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-sppp-blue/10 rounded-lg group-hover:bg-sppp-blue group-hover:text-white transition-colors">
                  <service.icon className="h-8 w-8 text-sppp-blue group-hover:text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-sppp-blue">
                    {service.stats.value}
                  </div>
                  <div className="text-xs text-sppp-gray">
                    {service.stats.label}
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-semibold text-sppp-dark-blue mb-3">
                {service.name}
              </h3>
              
              <p className="text-sppp-gray mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-sppp-gray">
                    <div className="w-1.5 h-1.5 bg-sppp-accent rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Link */}
              <Link
                href={service.href}
                className="inline-flex items-center text-sppp-blue hover:text-sppp-dark-blue font-medium text-sm transition-colors group-hover:translate-x-1"
              >
                Ketahui Lebih Lanjut
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-sppp-blue to-sppp-light-blue rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Perlu Perkhidmatan Khas?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Tim pakar kami sedia membantu mereka bentuk penyelesaian khusus untuk 
            keperluan spesifik organisasi anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-sppp-blue hover:bg-gray-100 font-semibold"
            >
              Hubungi Pakar Kami
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-sppp-blue font-semibold"
            >
              Dapatkan Sebut Harga
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

Services.displayName = 'Services'