import React from 'react'
import { Metadata } from 'next'
import { Services } from '@/components/sections/services'

export const metadata: Metadata = {
  title: 'Perkhidmatan | SPPP',
  description: 'Rangkaian lengkap perkhidmatan pelabuhan dengan standard antarabangsa - kargo, kapal, latihan, teknologi dan konsultansi',
}

export default function ServicesPage() {
  return (
    <>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sppp-dark-blue to-sppp-blue py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Perkhidmatan SPPP
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Solusi menyeluruh untuk keperluan industri maritim dan pelabuhan dengan 
              standard kualiti antarabangsa
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />
        </>
  )
}