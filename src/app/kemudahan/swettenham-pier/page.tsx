import { PageTemplate } from '@/components/PageTemplate'

export default function SwettenhamPierPage() {
  return (
    <PageTemplate
      title="Terminal Kapal Persiaran Swettenham Pier"
      subtitle="Terminal kapal persiaran moden dalam Tapak Warisan Dunia UNESCO"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Kemudahan', href: '/kemudahan' }, { name: 'Swettenham Pier' }]}
    >
      <div className="max-w-none">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-sppp-blue to-sppp-dark-blue rounded-lg p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Hub Pelayaran Mewah di Pulau Pinang
          </h2>
          <p className="text-xl leading-relaxed">
            Terminal Kapal Persiaran Swettenham Pier terletak dalam kawasan Tapak Warisan Dunia UNESCO 
            di George Town, Pulau Pinang. Terminal moden yang disiapkan pada November 2009 ini menjadi 
            pintu masuk utama pelancong maritim ke Pulau Pinang.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-sppp-blue">
            <div className="text-3xl font-bold text-sppp-dark-blue mb-2">2,000+</div>
            <div className="text-sm text-sppp-gray">Kapasiti Penumpang</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-sppp-accent">
            <div className="text-3xl font-bold text-sppp-dark-blue mb-2">400m</div>
            <div className="text-sm text-sppp-gray">Panjang Terminal</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-sppp-blue">
            <div className="text-3xl font-bold text-sppp-dark-blue mb-2">12m</div>
            <div className="text-sm text-sppp-gray">Kedalaman Berth</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-sppp-accent">
            <div className="text-3xl font-bold text-sppp-dark-blue mb-2">15,005</div>
            <div className="text-sm text-sppp-gray">Kaki Persegi Bangunan</div>
          </div>
        </div>

        {/* Terminal Specifications */}
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4 flex items-center">
              🏗️ Spesifikasi Terminal
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Bentuk Reka Bentuk</span>
                <span className="font-semibold text-sppp-dark-blue">T-shaped</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Panjang Terminal</span>
                <span className="font-semibold text-sppp-dark-blue">400 meter</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Kedalaman Berth</span>
                <span className="font-semibold text-sppp-dark-blue">12 meter</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Keluasan Bangunan</span>
                <span className="font-semibold text-sppp-dark-blue">15,005 kaki persegi</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sppp-gray">Tingkat Bangunan</span>
                <span className="font-semibold text-sppp-dark-blue">2 tingkat</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4 flex items-center">
              📊 Kapasiti Operasi
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Kapasiti Penumpang</span>
                <span className="font-semibold text-sppp-dark-blue">2,000+ penumpang</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Kapasiti Kargo Maksimum</span>
                <span className="font-semibold text-sppp-dark-blue">90,000 tan</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sppp-gray">Koordinat GPS</span>
                <span className="font-semibold text-sppp-dark-blue">5.41907 N, 100.34553 E</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sppp-gray">Tahun Disiapkan</span>
                <span className="font-semibold text-sppp-dark-blue">November 2009</span>
              </div>
            </div>
          </div>
        </div>

        {/* Berth Details */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            ⚓ Butiran Berth
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-sppp-light-gray rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Berth Utama</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Panjang: 400m
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Lebar: 25m
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Kedalaman: 12m
                </li>
              </ul>
            </div>

            <div className="bg-sppp-light-gray rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Berth Dalam Utara</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <span className="text-sppp-accent mr-2">•</span>
                  Panjang: 248m
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-accent mr-2">•</span>
                  Kedalaman: 6.5m
                </li>
              </ul>
            </div>

            <div className="bg-sppp-light-gray rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Berth Dalam Selatan</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Panjang: 219m
                </li>
                <li className="flex items-center">
                  <span className="text-sppp-blue mr-2">•</span>
                  Kedalaman: 5.5m
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-sppp-dark-blue mb-2">Jambatan Trestle</h4>
            <p className="text-sppp-gray">Dilengkapi dengan jambatan trestle sepanjang 96m dan 54m untuk akses yang mudah.</p>
          </div>
        </div>

        {/* Facilities */}
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-sppp-blue">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
              🏢 Kemudahan Bangunan
            </h3>
            <ul className="space-y-3 text-sppp-gray">
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Dewan Ketibaan (Arrival Hall)
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Dewan Berlepas (Departure Hall)
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Kemudahan CIQ (Kastam, Imigresen, Kuarantin)
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                8 Lot Kedai
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Pejabat Pentadbiran
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Sistem Pengangkutan
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-sppp-accent">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
              🌟 Kelebihan Lokasi
            </h3>
            <ul className="space-y-3 text-sppp-gray">
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Terletak dalam Tapak Warisan Dunia UNESCO
              </li>
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Berdekatan dengan Fort Cornwallis
              </li>
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Akses mudah ke George Town
              </li>
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Kemudahan letak kereta tersedia
              </li>
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Sokongan pelancongan tempatan dan antarabangsa
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
                <p>🚗 Letak Kereta: Jalan Tun Syed Sheh Barakbhah</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-sppp-light-gray rounded-lg">
            <p className="text-sm text-sppp-gray">
              <strong>Nota:</strong> Terminal Kapal Persiaran Swettenham Pier berfungsi sebagai 
              pintu masuk utama pelancong maritim ke Pulau Pinang dan menyokong pelancongan 
              tempatan serta antarabangsa.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
