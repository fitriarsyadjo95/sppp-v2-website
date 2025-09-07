import { PageTemplate } from '@/components/PageTemplate'

export default function PerkhidmatanFeriPage() {
  return (
    <PageTemplate
      title="Perkhidmatan Feri Pulau Pinang"
      subtitle="Perkhidmatan feri yang menghubungkan Pulau Pinang dengan Tanah Besar"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Kemudahan', href: '/kemudahan' }, { name: 'Perkhidmatan Feri' }]}
    >
      <div className="max-w-none">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-sppp-blue to-sppp-dark-blue rounded-lg p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Penghubung Penting Selat Pulau Pinang
          </h2>
          <p className="text-xl leading-relaxed">
            Perkhidmatan Feri Pulau Pinang menghubungkan George Town dan Butterworth 
            melalui Selat Pulau Pinang dengan jarak 3.2 kilometer. Perkhidmatan ini 
            merupakan penghubung penting untuk penumpang dan kenderaan bermotor roda dua.
          </p>
        </div>

        {/* Key Information */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-sppp-blue">
            <div className="text-3xl font-bold text-sppp-dark-blue mb-2">3.2km</div>
            <div className="text-sm text-sppp-gray">Jarak Perjalanan</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-sppp-accent">
            <div className="text-3xl font-bold text-sppp-dark-blue mb-2">17</div>
            <div className="text-sm text-sppp-gray">Jam Operasi Harian</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-sppp-blue">
            <div className="text-3xl font-bold text-sppp-dark-blue mb-2">6:30</div>
            <div className="text-sm text-sppp-gray">Waktu Mula (AM)</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-sppp-accent">
            <div className="text-3xl font-bold text-sppp-dark-blue mb-2">11:30</div>
            <div className="text-sm text-sppp-gray">Waktu Akhir (PM)</div>
          </div>
        </div>

        {/* Route Information */}
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4 flex items-center">
              🚢 Laluan Perkhidmatan
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-sppp-light-gray rounded-lg">
                <h4 className="font-semibold text-sppp-dark-blue mb-2">Jeti Raja Tun Uda</h4>
                <p className="text-sppp-gray text-sm">George Town, Pulau Pinang</p>
              </div>
              <div className="text-center text-sppp-blue">
                <span className="text-2xl">⇅</span>
                <p className="text-sm">3.2 kilometer</p>
              </div>
              <div className="p-4 bg-sppp-light-gray rounded-lg">
                <h4 className="font-semibold text-sppp-dark-blue mb-2">Jeti Sultan Abdul Halim</h4>
                <p className="text-sppp-gray text-sm">Butterworth, Seberang Perai</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4 flex items-center">
              ⏰ Waktu Operasi
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Waktu Mula</span>
                <span className="font-semibold text-sppp-dark-blue">6:30 Pagi</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Waktu Akhir</span>
                <span className="font-semibold text-sppp-dark-blue">11:30 Malam</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Operasi Mingguan</span>
                <span className="font-semibold text-sppp-dark-blue">7 Hari Seminggu</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sppp-gray">Masa Perjalanan</span>
                <span className="font-semibold text-sppp-dark-blue">± 15 minit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            🎫 Perkhidmatan & Kemudahan
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-sppp-light-gray rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Kategori Penumpang</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Penumpang pejalan kaki
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Penumpang dengan motosikal
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Penumpang dengan basikal
                </li>
              </ul>
            </div>

            <div className="bg-sppp-light-gray rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Kemudahan Onboard</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <span className="text-sppp-accent mr-2">•</span>
                  Ruang duduk ber-aircond
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-accent mr-2">•</span>
                  Dek terbuka untuk pemandangan
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-accent mr-2">•</span>
                  Kemudahan keselamatan moden
                </li>
              </ul>
            </div>

            <div className="bg-sppp-light-gray rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Akses & Lokasi</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Kemudahan letak kereta tersedia
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Aksessibiliti untuk OKU
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Sambungan pengangkutan awam
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-sppp-blue">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
              ⚠️ Maklumat Penting
            </h3>
            <ul className="space-y-3 text-sppp-gray">
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Perkhidmatan mungkin terganggu semasa cuaca buruk
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Ikuti arahan kakitangan feri untuk keselamatan
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Kenderaan roda empat tidak dibenarkan
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Bayaran dibuat di terminal sebelum naik feri
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-sppp-accent">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
              📍 Lokasi Maps
            </h3>
            <div className="space-y-3 text-sppp-gray">
              <div>
                <h4 className="font-semibold text-sppp-dark-blue text-sm">Jeti Raja Tun Uda</h4>
                <p className="text-sm">George Town, Pulau Pinang</p>
              </div>
              <div>
                <h4 className="font-semibold text-sppp-dark-blue text-sm">Jeti Sultan Abdul Halim</h4>
                <p className="text-sm">Butterworth, Seberang Perai</p>
              </div>
              <div className="mt-4 p-2 bg-sppp-light-gray rounded text-xs">
                <strong>Tips:</strong> Gunakan Google Maps untuk navigasi ke terminal feri
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            📞 Maklumat Hubungan
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Pertanyaan Umum</h4>
              <div className="text-sppp-gray space-y-1">
                <p>📞 Tel: 04-2633211</p>
                <p>📧 Email: sppp@penangport.gov.my</p>
                <p>🕒 Waktu Pejabat: 8:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Alamat Pejabat</h4>
              <div className="text-sppp-gray space-y-1">
                <p>Tingkat 2, Terminal Kapal Persiaran Swettenham Pier</p>
                <p>No. 1A, Pesara King Edward</p>
                <p>10300 George Town, Pulau Pinang</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-sppp-light-gray rounded-lg">
            <p className="text-sm text-sppp-gray">
              <strong>Nota:</strong> Perkhidmatan Feri Pulau Pinang merupakan penghubung penting 
              antara Pulau Pinang dan Tanah Besar. Sila rujuk media sosial kami untuk kemaskini 
              terkini mengenai jadual dan sebarang gangguan perkhidmatan.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
