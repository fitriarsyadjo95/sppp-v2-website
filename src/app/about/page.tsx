import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profil Organisasi | SPPP',
  description: 'Ketahui lebih lanjut tentang sejarah, visi, misi dan struktur organisasi Suruhanjaya Pelabuhan Pulau Pinang',
}
import { 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  GlobeAltIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sppp-dark-blue to-sppp-blue py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Profil Organisasi SPPP
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Suruhanjaya Pelabuhan Pulau Pinang - Membangun Kecemerlangan Maritim Malaysia
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sppp-blue/10 rounded-full mb-4">
                    <GlobeAltIcon className="h-8 w-8 text-sppp-blue" />
                  </div>
                  <CardTitle className="text-2xl">Visi Kami</CardTitle>
                </div>
                <p className="text-sppp-gray text-center leading-relaxed">
                  Menjadi pelabuhan terdepan di Asia Tenggara yang menyediakan perkhidmatan 
                  berkualiti tinggi dengan teknologi canggih untuk kemakmuran ekonomi negara.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sppp-blue/10 rounded-full mb-4">
                    <ChartBarIcon className="h-8 w-8 text-sppp-blue" />
                  </div>
                  <CardTitle className="text-2xl">Misi Kami</CardTitle>
                </div>
                <ul className="text-sppp-gray space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sppp-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    Menyediakan perkhidmatan pelabuhan yang cekap dan berkualiti
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sppp-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    Membangun infrastruktur maritim yang moden dan lestari
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sppp-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    Mengembangkan sumber manusia yang profesional dan berkemahiran tinggi
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-sppp-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sppp-dark-blue mb-4">
              SPPP dalam Angka
            </h2>
            <p className="text-lg text-sppp-gray">
              Pencapaian dan prestasi yang mencerminkan komitmen kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white rounded-xl p-6 shadow-sppp">
              <div className="text-4xl font-bold text-sppp-blue mb-2">60+</div>
              <div className="text-sppp-gray">Tahun Beroperasi</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-sppp">
              <div className="text-4xl font-bold text-sppp-blue mb-2">15</div>
              <div className="text-sppp-gray">Terminal Aktif</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-sppp">
              <div className="text-4xl font-bold text-sppp-blue mb-2">2,500+</div>
              <div className="text-sppp-gray">Kakitangan</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-sppp">
              <div className="text-4xl font-bold text-sppp-blue mb-2">200+</div>
              <div className="text-sppp-gray">Destinasi Global</div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Values */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sppp-dark-blue mb-4">
              Nilai-nilai Organisasi
            </h2>
            <p className="text-lg text-sppp-gray">
              Prinsip yang menjadi asas kepada semua aktiviti dan perkhidmatan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-sppp-blue rounded-full mb-6">
                <BuildingOfficeIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
                Integriti
              </h3>
              <p className="text-sppp-gray">
                Menjalankan tugas dengan jujur, telus dan bertanggungjawab dalam 
                semua aspek perkhidmatan.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-sppp-blue rounded-full mb-6">
                <UserGroupIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
                Kecemerlangan
              </h3>
              <p className="text-sppp-gray">
                Berusaha untuk memberikan perkhidmatan terbaik dengan standard 
                kualiti yang tinggi secara berterusan.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-sppp-blue rounded-full mb-6">
                <ChartBarIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
                Inovasi
              </h3>
              <p className="text-sppp-gray">
                Menggunakan teknologi terkini dan kaedah inovatif untuk 
                meningkatkan kecekapan operasi.
              </p>
            </div>
          </div>
        </div>
      </section>
        </>
  )
}