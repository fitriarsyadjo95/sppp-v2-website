'use client'

import React from 'react'
import { 
  TruckIcon, 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  GlobeAltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const stats = [
  {
    id: 1,
    name: 'Throughput Tahunan',
    value: '1.2M',
    unit: 'TEU',
    change: '+12.5%',
    changeType: 'increase',
    icon: TruckIcon,
    description: 'Container dan kargo am'
  },
  {
    id: 2,
    name: 'Terminal Aktif',
    value: '15',
    unit: 'Unit',
    change: '+2',
    changeType: 'increase',
    icon: BuildingOfficeIcon,
    description: 'Kemudahan pelabuhan'
  },
  {
    id: 3,
    name: 'Staf Terlatih',
    value: '2,500+',
    unit: 'Kakitangan',
    change: '+8.2%',
    changeType: 'increase',
    icon: UserGroupIcon,
    description: 'Profesional maritim'
  },
  {
    id: 4,
    name: 'Prestasi Operasi',
    value: '96.8%',
    unit: 'Kecekapan',
    change: '+3.1%',
    changeType: 'increase',
    icon: ChartBarIcon,
    description: 'Sasaran KPI tercapai'
  },
  {
    id: 5,
    name: 'Rangkaian Global',
    value: '200+',
    unit: 'Destinasi',
    change: '+15',
    changeType: 'increase',
    icon: GlobeAltIcon,
    description: 'Laluan shipping'
  },
  {
    id: 6,
    name: 'Piawaian Keselamatan',
    value: '100%',
    unit: 'Pematuhan',
    change: '0%',
    changeType: 'stable',
    icon: ShieldCheckIcon,
    description: 'Standard antarabangsa'
  }
]

export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-sppp-light-gray">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-sppp-dark-blue mb-4">
            Prestasi & Pencapaian SPPP
          </h2>
          <p className="text-lg text-sppp-gray max-w-3xl mx-auto">
            Komitmen kami dalam memberikan perkhidmatan pelabuhan terbaik tercermin 
            melalui pencapaian dan prestasi yang berterusan.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-xl p-6 shadow-sppp hover:shadow-sppp-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-sppp-blue/10 rounded-lg group-hover:bg-sppp-blue group-hover:text-white transition-colors">
                  <stat.icon className="h-6 w-6 text-sppp-blue group-hover:text-white" />
                </div>
                
                {stat.changeType !== 'stable' && (
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    stat.changeType === 'increase' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {stat.changeType === 'increase' ? '↗' : '↘'} {stat.change}
                  </div>
                )}
              </div>

              <div className="mb-2">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-sppp-dark-blue">
                    {stat.value}
                  </span>
                  <span className="ml-2 text-sm text-sppp-gray">
                    {stat.unit}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-sppp-dark-blue mb-1">
                {stat.name}
              </h3>
              
              <p className="text-sm text-sppp-gray">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sppp">
            <h3 className="text-2xl font-bold text-sppp-dark-blue mb-4">
              Laporan Prestasi Terperinci
            </h3>
            <p className="text-sppp-gray mb-6">
              Akses laporan lengkap prestasi operasi, kewangan dan pembangunan SPPP
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-sppp-blue hover:bg-sppp-dark-blue text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Muat Turun Laporan Tahunan
              </button>
              <button className="border border-sppp-blue text-sppp-blue hover:bg-sppp-blue hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Lihat Dashboard KPI
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Stats.displayName = 'Stats'