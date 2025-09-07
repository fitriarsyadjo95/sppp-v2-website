import { PageTemplate } from '@/components/PageTemplate'

export default function PengkalanKargoPukalPraiPage() {
  return (
    <PageTemplate
      title="Pengkalan Kargo Pukal Prai"
      subtitle="Terminal kargo pukal strategik dengan kemudahan penyimpanan luas"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Kemudahan', href: '/kemudahan' }, { name: 'Kargo Prai' }]}
    >
      <div className="max-w-none">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-sppp-blue to-sppp-dark-blue rounded-lg p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Terminal Kargo Pukal Terbesar di Wilayah Utara
          </h2>
          <p className="text-xl leading-relaxed">
            Pengkalan Kargo Pukal Prai merupakan terminal kargo pukal strategik yang dilengkapi 
            dengan kemudahan penyimpanan yang luas dan peralatan moden untuk mengendalikan 
            pelbagai jenis kargo pukal dengan cekap dan selamat.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-sppp-blue">
            <div className="text-3xl font-bold text-sppp-dark-blue mb-2">500m</div>
            <div className="text-sm text-sppp-gray">Panjang Berth Utama</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-sppp-accent">
            <div className="text-3xl font-bold text-sppp-dark-blue mb-2">111,000</div>
            <div className="text-sm text-sppp-gray">m² Gudang Penyimpanan</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-sppp-blue">
            <div className="text-3xl font-bold text-sppp-dark-blue mb-2">4.6</div>
            <div className="text-sm text-sppp-gray">Hektar Kawasan Stockpile</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-sppp-accent">
            <div className="text-3xl font-bold text-sppp-dark-blue mb-2">11m</div>
            <div className="text-sm text-sppp-gray">Kedalaman Berth</div>
          </div>
        </div>

        {/* Berth Specifications */}
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4 flex items-center">
              ⚓ Spesifikasi Berth
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Berth Utama</span>
                <span className="font-semibold text-sppp-dark-blue">500m × 11m</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Berth Barang Berbahaya</span>
                <span className="font-semibold text-sppp-dark-blue">132m × 11m</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sppp-gray">Berth Dalam</span>
                <span className="font-semibold text-sppp-dark-blue">7.5m kedalaman</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4 flex items-center">
              📊 Kapasiti Penyimpanan
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Keluasan Gudang</span>
                <span className="font-semibold text-sppp-dark-blue">111,000 meter persegi</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Kawasan Stockpile</span>
                <span className="font-semibold text-sppp-dark-blue">4.6 hektar</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sppp-gray">Jenis Kargo</span>
                <span className="font-semibold text-sppp-dark-blue">Kargo Pukal & Berbahaya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment & Facilities */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            ⚙️ Peralatan & Kemudahan
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-sppp-light-gray rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Kren & Peralatan</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  1 Kren Gantri
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  2 Kren Mudah Alih
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Peralatan pemunggahan moden
                </li>
              </ul>
            </div>

            <div className="bg-sppp-light-gray rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Kemudahan Penyimpanan</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <span className="text-sppp-accent mr-2">•</span>
                  Gudang tertutup 111,000 m²
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-accent mr-2">•</span>
                  Kawasan stockpile terbuka 4.6 hektar
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-accent mr-2">•</span>
                  Sistem pengurusan inventori
                </li>
              </ul>
            </div>

            <div className="bg-sppp-light-gray rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Kemudahan Khusus</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Kawasan barang berbahaya
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Sistem keselamatan 24/7
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Akses jalan raya dan keretapi
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-sppp-blue">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
              🚢 Perkhidmatan Terminal
            </h3>
            <ul className="space-y-3 text-sppp-gray">
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Pemunggahan dan pemuatan kargo pukal
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Penyimpanan kargo jangka pendek dan panjang
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Pengendalian barang berbahaya mengikut IMDG Code
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Perkhidmatan stockpiling dan blending
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Akses multimodal (laut, darat, keretapi)
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-sppp-accent">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
              📋 Perkhidmatan Sokongan
            </h3>
            <ul className="space-y-3 text-sppp-gray">
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Sistem pengurusan inventori moden
              </li>
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Perkhidmatan dokumentasi dan kastam
              </li>
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Kemudahan penyelenggaraan peralatan
              </li>
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Perkhidmatan sampling dan ujian kualiti
              </li>
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Kemudahan perbankan dan asurans
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            📞 Maklumat Hubungan
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Alamat</h4>
              <div className="text-sppp-gray space-y-1">
                <p>Tingkat 2, Terminal Kapal Persiaran Swettenham Pier</p>
                <p>No. 1A, Pesara King Edward</p>
                <p>10300 George Town, Pulau Pinang</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Hubungan</h4>
              <div className="text-sppp-gray space-y-1">
                <p>📞 Tel: 604-263-3211 / 604-262-6211</p>
                <p>📧 Email: sppp@penangport.gov.my</p>
                <p>🕒 Operasi: 24 jam/7 hari</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-sppp-light-gray rounded-lg">
            <p className="text-sm text-sppp-gray">
              <strong>Nota:</strong> Untuk pertanyaan operasi harian dan perkhidmatan komersial 
              kargo pukal, sila hubungi Penang Port Sdn. Bhd. yang merupakan operator terminal.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
