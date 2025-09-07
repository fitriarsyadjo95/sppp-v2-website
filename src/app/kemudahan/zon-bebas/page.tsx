import { PageTemplate } from '@/components/PageTemplate'
import { HeroSection, StatisticsGrid, SpecificationCard, FeatureGrid, ContactSection } from '@/components/content'

export default function ZonBebasKomersilPage() {
  const statistics = [
    { value: '500', label: 'Hektar Keluasan', accent: false },
    { value: '24/7', label: 'Operasi Harian', accent: true },
    { value: '0%', label: 'Cukai Import', accent: false },
    { value: '100+', label: 'Syarikat Beroperasi', accent: true }
  ]

  const specifications = [
    { label: 'Keluasan Total', value: '500 hektar' },
    { label: 'Status Cukai', value: 'Bebas Cukai Import' },
    { label: 'Waktu Operasi', value: '24 jam/7 hari' },
    { label: 'Akses Pelabuhan', value: 'Terus ke terminal' }
  ]

  const features = [
    {
      title: 'Kemudahan Penyimpanan',
      items: ['Gudang moden ber-aircond', 'Kawasan stockyard terbuka', 'Sistem keselamatan 24/7'],
      accent: false
    },
    {
      title: 'Perkhidmatan Nilai Tambah',
      items: ['Assembly dan packaging', 'Quality control', 'Distribution services'],
      accent: true
    },
    {
      title: 'Infrastruktur',
      items: ['Akses jalan raya utama', 'Bekalan utiliti lengkap', 'Kemudahan ICT canggih'],
      accent: false
    }
  ]

  const contactInfo = [
    {
      title: 'Alamat',
      details: [
        'Tingkat 2, Terminal Kapal Persiaran Swettenham Pier',
        'No. 1A, Pesara King Edward',
        '10300 George Town, Pulau Pinang'
      ]
    },
    {
      title: 'Hubungan',
      details: [
        '📞 Tel: 604-263-3211 / 604-262-6211',
        '📧 Email: sppp@penangport.gov.my',
        '🕒 Waktu Operasi: 24 jam/7 hari'
      ]
    }
  ]

  return (
    <PageTemplate
      title="Zon Bebas Komersil"
      subtitle="Kemudahan zon bebas komersil untuk perdagangan antarabangsa"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Kemudahan', href: '/kemudahan' }, { name: 'Zon Bebas Komersil' }]}
    >
      <div className="max-w-none">
        <HeroSection
          title="Hub Perdagangan Bebas Cukai"
          description="Zon Bebas Komersil SPPP menawarkan kemudahan perdagangan bebas cukai seluas 500 hektar dengan akses terus ke pelabuhan. Lokasi strategik untuk aktiviti assembly, packaging, dan distribution dengan faedah cukai yang menarik."
          gradient="blue"
        />

        <StatisticsGrid statistics={statistics} />

        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <SpecificationCard
            title="Spesifikasi Zon"
            icon="🏭"
            specifications={specifications}
          />
          <SpecificationCard
            title="Faedah Cukai"
            icon="💰"
            specifications={[
              { label: 'Import Duty', value: '0% (Barang asing)' },
              { label: 'Sales Tax', value: 'Dikecualikan' },
              { label: 'Service Tax', value: 'Dikecualikan' },
              { label: 'Manufacturing License', value: 'Tidak diperlukan' }
            ]}
          />
        </div>

        <FeatureGrid
          title="Kemudahan & Perkhidmatan"
          icon="⚙️"
          features={features}
        />

        <ContactSection
          contactInfo={contactInfo}
          note="Untuk maklumat lanjut mengenai pelaburan dan sewa lot di Zon Bebas Komersil, sila hubungi bahagian pemasaran kami."
        />
      </div>
    </PageTemplate>
  )
}
