import { PageTemplate } from '@/components/PageTemplate'

export default function PengkalanKontenaButterworthUtaraPage() {
  return (
    <PageTemplate
      title="Pengkalan Kontena Butterworth Utara (NBCT)"
      subtitle="Terminal kontena moden dengan kapasiti 2 juta TEU setahun"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Kemudahan', href: '/kemudahan' }, { name: 'Kontena Butterworth' }]}
    >
      <div className="max-w-none">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-sppp-blue to-sppp-dark-blue rounded-lg p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Terminal Kontena Terbesar di Utara Malaysia
          </h2>
          <p className="text-xl leading-relaxed">
            Pengkalan Kontena Butterworth Utara (NBCT) adalah terminal kontena strategik 
            dengan teknologi moden yang berfungsi sebagai hab logistik utama untuk wilayah utara Malaysia.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-sppp-blue">
            <div className="text-3xl font-bold text-sppp-dark-blue mb-2">2.0M</div>
            <div className="text-sm text-sppp-gray">TEU Kapasiti Tahunan</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-sppp-accent">
            <div className="text-3xl font-bold text-sppp-dark-blue mb-2">1,500m</div>
            <div className="text-sm text-sppp-gray">Panjang dermaga</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-sppp-blue">
            <div className="text-3xl font-bold text-sppp-dark-blue mb-2">13</div>
            <div className="text-sm text-sppp-gray">Kren Gantri</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-sppp-accent">
            <div className="text-3xl font-bold text-sppp-dark-blue mb-2">7,104</div>
            <div className="text-sm text-sppp-gray">Slot Kontena</div>
          </div>
        </div>

        {/* Specifications */}
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4 flex items-center">
              🏗️ Spesifikasi Terminal
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Panjang Dermaga</span>
                <span className="font-semibold text-sppp-dark-blue">1,500 meter</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Kedalaman Tepi</span>
                <span className="font-semibold text-sppp-dark-blue">11 - 12 meter</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Kedalaman Berth Dalam</span>
                <span className="font-semibold text-sppp-dark-blue">7.5 meter</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Luas CFS</span>
                <span className="font-semibold text-sppp-dark-blue">8,400 meter persegi</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sppp-gray">Reefer Plug Points</span>
                <span className="font-semibold text-sppp-dark-blue">1,000 unit</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4 flex items-center">
              📊 Kapasiti Operasi
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Kapasiti Tahunan</span>
                <span className="font-semibold text-sppp-dark-blue">2,000,000 TEU</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Kapasiti Berth</span>
                <span className="font-semibold text-sppp-dark-blue">660,000 TEU/tahun</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Container Yard</span>
                <span className="font-semibold text-sppp-dark-blue">7,104 slot kontena</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sppp-gray">Container Freight Station</span>
                <span className="font-semibold text-sppp-dark-blue">8,400 m²</span>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment */}
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
                  13 Kren Gantri (35, 40 & 65 tan)
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  8 Rail Mounted Cranes (35-65 tan)
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Teknologi automasi canggih
                </li>
              </ul>
            </div>

            <div className="bg-sppp-light-gray rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Kenderaan & Trailer</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <span className="text-sppp-accent mr-2">•</span>
                  60 Prime Movers
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-accent mr-2">•</span>
                  124 Trailer
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-accent mr-2">•</span>
                  Sistem pengurusan flot moden
                </li>
              </ul>
            </div>

            <div className="bg-sppp-light-gray rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Kemudahan Khusus</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  1,000 Reefer Plug Points
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Container Freight Station
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Sistem keselamatan 24/7
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
                Pemunggahan dan pemuatan kontena
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Penyimpanan kontena jangka pendek dan panjang
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Perkhidmatan reefer container
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Container Freight Station (CFS)
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Perkhidmatan kastam dan imigresen
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
                Sistem pengurusan terminal moden (TOS)
              </li>
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Perkhidmatan dokumentasi
              </li>
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Kemudahan pembaikan dan penyelenggaraan
              </li>
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Perkhidmatan angkutan darat
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
                <p>🕒 Waktu Operasi: 24 jam/7 hari</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-sppp-light-gray rounded-lg">
            <p className="text-sm text-sppp-gray">
              <strong>Nota:</strong> Untuk pertanyaan operasi harian dan perkhidmatan komersial, 
              sila hubungi Penang Port Sdn. Bhd. yang merupakan operator terminal.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
