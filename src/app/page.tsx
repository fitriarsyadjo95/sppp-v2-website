import React from 'react'
import { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { Stats } from '@/components/sections/stats'
import { Services } from '@/components/sections/services'
import { News } from '@/components/sections/news'
import { QuickLinks } from '@/components/sections/quick-links'

export const metadata: Metadata = {
  title: 'Suruhanjaya Pelabuhan Pulau Pinang | SPPP',
  description: 'Laman web rasmi Suruhanjaya Pelabuhan Pulau Pinang - perkhidmatan pelabuhan, latihan maritim, dan maklumat operasi pelabuhan',
  keywords: 'SPPP, pelabuhan, Pulau Pinang, maritim, kargo, kapal, latihan',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <QuickLinks />
      <News />
    </>
  )
}