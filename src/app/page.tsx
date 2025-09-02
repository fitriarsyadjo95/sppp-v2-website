import React from 'react'
import { Layout } from '@/components/layout/layout'
import { Hero } from '@/components/sections/hero'
import { Stats } from '@/components/sections/stats'
import { Services } from '@/components/sections/services'
import { News } from '@/components/sections/news'
import { QuickLinks } from '@/components/sections/quick-links'

export default function Home() {
  return (
    <Layout 
      title="Suruhanjaya Pelabuhan Pulau Pinang"
      description="Laman web rasmi Suruhanjaya Pelabuhan Pulau Pinang - perkhidmatan pelabuhan, latihan maritim, dan maklumat operasi pelabuhan"
    >
      <Hero />
      <Stats />
      <Services />
      <QuickLinks />
      <News />
    </Layout>
  )
}
