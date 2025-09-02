'use client'

import React from 'react'
import Link from 'next/link'
import { 
  CalendarDaysIcon,
  ArrowRightIcon,
  TagIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'

// Mock news data - will be replaced with real API
const newsItems = [
  {
    id: 1,
    title: 'SPPP Lancar Sistem Port Community System Versi 3.0',
    excerpt: 'Sistem baru ini membolehkan integrasi yang lebih baik antara semua stakeholder pelabuhan dengan teknologi blockchain dan AI.',
    publishedAt: '2024-01-15',
    category: 'Teknologi',
    readTime: '5 min',
    image: '/images/news/pcs-v3-launch.jpg',
    featured: true,
    tags: ['Teknologi', 'Digital Transformation', 'Port Community System']
  },
  {
    id: 2,
    title: 'Kemudahan Terminal 6 Kini Beroperasi Sepenuhnya',
    excerpt: 'Terminal terbaru SPPP dengan kapasiti 500,000 TEU setahun mula beroperasi dengan teknologi automatik terkini.',
    publishedAt: '2024-01-12',
    category: 'Infrastruktur',
    readTime: '3 min',
    image: '/images/news/terminal-6-opening.jpg',
    featured: false,
    tags: ['Infrastruktur', 'Terminal', 'Expansion']
  },
  {
    id: 3,
    title: 'Program Latihan Maritim 2024 Buka Pendaftaran',
    excerpt: 'SPPP menawarkan 15 kursus profesional termasuk sijil STCW dan program kepimpinan pelabuhan untuk tahun 2024.',
    publishedAt: '2024-01-10',
    category: 'Latihan',
    readTime: '4 min',
    image: '/images/news/training-2024.jpg',
    featured: false,
    tags: ['Training', 'STCW', 'Professional Development']
  },
  {
    id: 4,
    title: 'SPPP Terima Anugerah Best Port Performance 2023',
    excerpt: 'Pengiktirafan daripada Malaysia Ports Authority untuk prestasi cemerlang dalam kecekapan operasi dan keselamatan.',
    publishedAt: '2024-01-08',
    category: 'Pengiktirafan',
    readTime: '2 min',
    image: '/images/news/award-2023.jpg',
    featured: false,
    tags: ['Award', 'Achievement', 'Performance']
  }
]

const announcements = [
  {
    id: 1,
    title: 'Notis: Penutupan Sementara Terminal 3 untuk Penyelenggaraan',
    date: '2024-01-20',
    urgent: true
  },
  {
    id: 2,
    title: 'Jadual Baru Perkhidmatan Ferry Berkuatkuasa 1 Februari 2024',
    date: '2024-01-18',
    urgent: false
  },
  {
    id: 3,
    title: 'Tender Terbuka: Sistem Keselamatan CCTV Terminal 1-5',
    date: '2024-01-15',
    urgent: false
  }
]

export const News: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ms-MY', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-sppp-dark-blue mb-4">
            Berita & Pengumuman Terkini
          </h2>
          <p className="text-lg text-sppp-gray max-w-3xl mx-auto">
            Kekal terkini dengan perkembangan terbaru, pengumuman penting dan pencapaian SPPP
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main News Section */}
          <div className="lg:col-span-2">
            {/* Featured News */}
            {newsItems.filter(item => item.featured).map((item) => (
              <article key={item.id} className="mb-8 bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-sppp-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  {/* Placeholder for image */}
                  <div className="w-full h-full bg-gradient-to-br from-sppp-blue to-sppp-light-blue flex items-center justify-center">
                    <span className="text-white text-lg font-medium">Featured News Image</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-sppp-accent text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-sppp-gray mb-4">
                    <div className="flex items-center">
                      <CalendarDaysIcon className="h-4 w-4 mr-1" />
                      {formatDate(item.publishedAt)}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {item.readTime}
                    </div>
                    <div className="flex items-center">
                      <TagIcon className="h-4 w-4 mr-1" />
                      {item.category}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-sppp-dark-blue mb-3 hover:text-sppp-blue transition-colors">
                    <Link href={`/news/${item.id}`}>
                      {item.title}
                    </Link>
                  </h3>
                  
                  <p className="text-sppp-gray mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 bg-sppp-light-gray text-sppp-blue text-xs font-medium rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/news/${item.id}`}
                      className="inline-flex items-center text-sppp-blue hover:text-sppp-dark-blue font-medium text-sm transition-colors"
                    >
                      Baca Selanjutnya
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {/* Regular News Items */}
            <div className="space-y-6">
              {newsItems.filter(item => !item.featured).map((item) => (
                <article key={item.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-sppp transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-sppp-blue to-sppp-light-blue rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-white text-xs font-medium text-center">News</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 text-xs text-sppp-gray mb-2">
                        <span>{formatDate(item.publishedAt)}</span>
                        <span>•</span>
                        <span>{item.readTime}</span>
                        <span>•</span>
                        <span>{item.category}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-sppp-dark-blue mb-2 hover:text-sppp-blue transition-colors">
                        <Link href={`/news/${item.id}`}>
                          {item.title}
                        </Link>
                      </h3>
                      
                      <p className="text-sppp-gray text-sm mb-3 line-clamp-2">
                        {item.excerpt}
                      </p>
                      
                      <Link
                        href={`/news/${item.id}`}
                        className="inline-flex items-center text-sppp-blue hover:text-sppp-dark-blue font-medium text-sm transition-colors"
                      >
                        Baca Selanjutnya
                        <ArrowRightIcon className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* View All News Button */}
            <div className="mt-8 text-center">
              <Button size="lg">
                <Link href="/news" className="flex items-center">
                  Lihat Semua Berita
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Important Announcements */}
            <div className="bg-sppp-light-gray rounded-xl p-6">
              <h3 className="text-xl font-bold text-sppp-dark-blue mb-6">
                Pengumuman Penting
              </h3>
              
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="pb-4 border-b border-gray-200 last:border-b-0">
                    <div className="flex items-start space-x-3">
                      {announcement.urgent && (
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-sppp-dark-blue mb-2 leading-snug">
                          {announcement.title}
                        </h4>
                        <div className="text-xs text-sppp-gray">
                          {formatDate(announcement.date)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Link
                  href="/announcements"
                  className="text-sppp-blue hover:text-sppp-dark-blue font-medium text-sm"
                >
                  Lihat Semua Pengumuman →
                </Link>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-sppp-blue to-sppp-light-blue rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">
                Langgan Newsletter
              </h3>
              <p className="text-blue-100 text-sm mb-6">
                Terima kemas kini berita dan pengumuman terus ke e-mel anda
              </p>
              
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Alamat e-mel anda"
                  className="w-full px-4 py-3 rounded-lg text-sppp-dark-blue placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                />
                <Button 
                  type="submit"
                  className="w-full bg-white text-sppp-blue hover:bg-gray-100 font-semibold"
                >
                  Langgan Sekarang
                </Button>
              </form>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-sppp-dark-blue mb-4">
                Pautan Berguna
              </h3>
              
              <div className="space-y-3">
                <Link href="/media-center" className="block text-sm text-sppp-gray hover:text-sppp-blue transition-colors">
                  Pusat Media
                </Link>
                <Link href="/press-releases" className="block text-sm text-sppp-gray hover:text-sppp-blue transition-colors">
                  Siaran Media
                </Link>
                <Link href="/publications" className="block text-sm text-sppp-gray hover:text-sppp-blue transition-colors">
                  Penerbitan
                </Link>
                <Link href="/events" className="block text-sm text-sppp-gray hover:text-sppp-blue transition-colors">
                  Acara & Aktiviti
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

News.displayName = 'News'