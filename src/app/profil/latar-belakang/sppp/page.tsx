import { PageTemplate } from '@/components/PageTemplate'

export default function LatarBelakangSPPPPage() {
  return (
    <PageTemplate
      title="Latar Belakang SPPP"
      subtitle="Sejarah penubuhan dan perkembangan Suruhanjaya Pelabuhan Pulau Pinang"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Profil', href: '/profil' }, { name: 'Latar Belakang', href: '/profil/latar-belakang' }, { name: 'SPPP' }]}
    >
      <div className="max-w-none">
        {/* Establishment Overview */}
        <div className="bg-gradient-to-r from-sppp-blue to-sppp-dark-blue rounded-lg p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Penubuhan SPPP
          </h2>
          <p className="text-xl leading-relaxed">
            Suruhanjaya Pelabuhan Pulau Pinang (SPPP) ditubuhkan pada 
            <strong className="text-sppp-accent"> 1 Januari 1956</strong> di bawah 
            Akta Suruhanjaya Pelabuhan Pulau Pinang 1955 sebagai Badan Berkanun 
            di bawah Kementerian Pengangkutan.
          </p>
        </div>

        {/* Key Roles */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-sppp-blue">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
              🏛️ Peranan Utama
            </h3>
            <ul className="space-y-3 text-sppp-gray">
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Pihak Berkuasa Pelabuhan
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Badan Kawal Selia
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Pusat Sumber Pelabuhan
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Pentadbir Zon Komersil Bebas
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Pemudah Cara Perdagangan
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-sppp-accent">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
              📍 Lokasi Pejabat
            </h3>
            <div className="space-y-2 text-sppp-gray">
              <p className="font-medium">Alamat:</p>
              <p>Tingkat 2, Terminal Kapal Persiaran Swettenham Pier</p>
              <p>No. 1A, Pesara King Edward</p>
              <p>10300 George Town, Pulau Pinang</p>
            </div>
          </div>
        </div>

        {/* Historical Milestones */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            📅 Pencapaian Bersejarah
          </h3>
          <div className="space-y-6">
            <div className="border-l-4 border-sppp-blue pl-6">
              <h4 className="text-lg font-semibold text-sppp-dark-blue">1 Januari 1956</h4>
              <p className="text-sppp-gray">
                SPPP ditubuhkan di bawah Akta Suruhanjaya Pelabuhan Pulau Pinang 1955 
                sebagai badan berkanun untuk menguruskan pelabuhan Pulau Pinang.
              </p>
            </div>

            <div className="border-l-4 border-sppp-accent pl-6">
              <h4 className="text-lg font-semibold text-sppp-dark-blue">1 Januari 1994</h4>
              <p className="text-sppp-gray">
                Perkhidmatan pelabuhan dan feri diswastakan kepada Penang Port Sdn. Bhd. (PPSB), 
                memungkinkan SPPP memfokuskan kepada peranan kawal selia dan pembangunan pelabuhan.
              </p>
            </div>

            <div className="border-l-4 border-sppp-blue pl-6">
              <h4 className="text-lg font-semibold text-sppp-dark-blue">1995</h4>
              <p className="text-sppp-gray">
                Pindaan Parlimen memperluaskan kuasa SPPP kepada pelabuhan-pelabuhan lain, 
                memperkukuh peranan sebagai pihak berkuasa pelabuhan wilayah utara.
              </p>
            </div>

            <div className="border-l-4 border-sppp-accent pl-6">
              <h4 className="text-lg font-semibold text-sppp-dark-blue">1 Januari 1999</h4>
              <p className="text-sppp-gray">
                SPPP dilantik sebagai Pihak Berkuasa Pelabuhan dan Badan Kawal Selia 
                untuk Jeti Teluk Ewa, memperluaskan bidang kuasa operasi.
              </p>
            </div>
          </div>
        </div>

        {/* Primary Responsibilities */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="bg-sppp-light-gray rounded-lg p-6">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
              🎯 Tanggungjawab Utama
            </h3>
            <ul className="space-y-3 text-sppp-gray">
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Menyediakan dan menyelenggara kemudahan pelabuhan dan feri
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Menggalakkan pembangunan dan penggunaan pelabuhan
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Memudahkan aktiviti perdagangan
              </li>
              <li className="flex items-start">
                <span className="text-sppp-blue mr-2">•</span>
                Menyokong koridor ekonomi wilayah seperti IMT-GT
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
              🌟 Fokus Strategik
            </h3>
            <ul className="space-y-3 text-sppp-gray">
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Memperkasa Pelabuhan Pulau Pinang sebagai hab logistik utama
              </li>
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Membangunkan infrastruktur untuk kontena, kargo pukal dan am
              </li>
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Menggalakkan perkhidmatan pelabuhan dalam Koridor Ekonomi Utara (NCER)
              </li>
              <li className="flex items-start">
                <span className="text-sppp-accent mr-2">•</span>
                Menyokong Segitiga Pertumbuhan Indonesia-Malaysia-Thailand (IMT-GT)
              </li>
            </ul>
          </div>
        </div>

        {/* Strategic Position */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-4">
            Kedudukan Strategik
          </h3>
          <div className="prose prose-lg text-sppp-gray">
            <p>
              SPPP memainkan peranan penting dalam pembangunan ekonomi wilayah utara Malaysia. 
              Sebagai badan berkanun yang bertanggungjawab menguruskan pelabuhan utama di pantai 
              barat semenanjung Malaysia, SPPP komited untuk memastikan pelabuhan beroperasi 
              dengan cekap dan berdaya saing.
            </p>
            <p>
              Dengan pengalaman lebih 65 tahun dalam industri pelabuhan, SPPP terus beradaptasi 
              dengan perkembangan teknologi dan keperluan perdagangan global. Organisasi ini 
              berperanan sebagai pemangkin pertumbuhan ekonomi melalui kemudahan pelabuhan yang 
              moden dan perkhidmatan yang berkualiti tinggi.
            </p>
            <p>
              Melalui kerjasama strategik dengan pelbagai pihak berkepentingan, SPPP komited 
              untuk merealisasikan visi menjadikan Pelabuhan Pulau Pinang sebagai pintu masuk 
              maritim, hab logistik dan terminal kapal persiaran untuk wilayah utara.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
