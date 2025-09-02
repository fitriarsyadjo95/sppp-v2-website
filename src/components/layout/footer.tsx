import React from 'react'
import Link from 'next/link'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline'

const footerSections = {
  services: {
    title: 'Perkhidmatan',
    links: [
      { name: 'Perkhidmatan Kargo', href: '/services/cargo' },
      { name: 'Perkhidmatan Kapal', href: '/services/vessel' },
      { name: 'Perundingan Teknikal', href: '/services/consultation' },
      { name: 'Perkhidmatan Digital', href: '/services/digital' }
    ]
  },
  training: {
    title: 'Latihan & Pembangunan',
    links: [
      { name: 'Program Latihan', href: '/training/programs' },
      { name: 'Sijil & Akreditasi', href: '/training/certification' },
      { name: 'Jadual Kursus', href: '/training/schedule' },
      { name: 'Pendaftaran Online', href: '/training/registration' }
    ]
  },
  information: {
    title: 'Maklumat',
    links: [
      { name: 'Berita & Pengumuman', href: '/news' },
      { name: 'Tender & Kontrak', href: '/tenders' },
      { name: 'Laporan Tahunan', href: '/reports' },
      { name: 'Dasar & Prosedur', href: '/policies' }
    ]
  },
  legal: {
    title: 'Undang-undang',
    links: [
      { name: 'Dasar Privasi', href: '/legal/privacy' },
      { name: 'Terma Penggunaan', href: '/legal/terms' },
      { name: 'Kebolehcapaian', href: '/legal/accessibility' },
      { name: 'Dasar Cookie', href: '/legal/cookies' }
    ]
  }
}

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sppp-dark-blue text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-10 w-10 bg-sppp-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SPPP</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Suruhanjaya Pelabuhan</h3>
                  <p className="text-sm text-gray-300">Pulau Pinang</p>
                </div>
              </div>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-5 w-5 text-sppp-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Suruhanjaya Pelabuhan Pulau Pinang</p>
                    <p className="text-gray-300">George Town, Pulau Pinang</p>
                    <p className="text-gray-300">Malaysia</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-sppp-accent flex-shrink-0" />
                  <span>+60 4-210 2211</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-sppp-accent flex-shrink-0" />
                  <span>info@penangport.gov.my</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <ClockIcon className="h-5 w-5 text-sppp-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Waktu Operasi:</p>
                    <p className="text-gray-300">Isnin - Jumaat: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-300">Sabtu: 8:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-sm font-semibold text-sppp-accent uppercase tracking-wide mb-4">
                {footerSections.services.title}
              </h4>
              <ul className="space-y-2">
                {footerSections.services.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Training Links */}
            <div>
              <h4 className="text-sm font-semibold text-sppp-accent uppercase tracking-wide mb-4">
                {footerSections.training.title}
              </h4>
              <ul className="space-y-2">
                {footerSections.training.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information Links */}
            <div>
              <h4 className="text-sm font-semibold text-sppp-accent uppercase tracking-wide mb-4">
                {footerSections.information.title}
              </h4>
              <ul className="space-y-2">
                {footerSections.information.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-semibold text-sppp-accent uppercase tracking-wide mb-4">
                {footerSections.legal.title}
              </h4>
              <ul className="space-y-2">
                {footerSections.legal.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-600 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-gray-300">
              © {currentYear} Suruhanjaya Pelabuhan Pulau Pinang. Semua hak terpelihara.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-sm text-gray-300">
                SPLaSK Compliant
              </div>
              <div className="flex space-x-4">
                <Link
                  href="/legal/privacy"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Privasi
                </Link>
                <Link
                  href="/legal/accessibility"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Kebolehcapaian
                </Link>
                <Link
                  href="/sitemap"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Peta Laman
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer'