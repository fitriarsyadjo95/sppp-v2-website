import { Metadata } from 'next';
import { 
  Cookie, 
  Settings, 
  Shield, 
  BarChart3,
  Users,
  Globe,
  Smartphone,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Download,
  MessageSquare,
  Mail,
  Phone,
  Eye,
  Lock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dasar Cookie | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Maklumat mengenai penggunaan cookies di laman web SPPP dan cara untuk mengurus tetapan cookie anda',
};

export default function CookiePolicyPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Cookie className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Dasar Cookie</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Bagaimana kami menggunakan cookies dan teknologi serupa di laman web SPPP
              </p>
              <div className="mt-6 text-blue-200 text-sm">
                Dikemaskini: 1 September 2024
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* What are Cookies */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Cookie className="h-6 w-6 mr-3 text-orange-600" />
              Apakah Cookies?
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies adalah fail teks kecil yang disimpan di komputer, tablet, atau telefon pintar anda 
                apabila anda melayari laman web. Ia membantu laman web mengingati maklumat tentang lawatan 
                anda, seperti tetapan pilihan anda dan maklumat lain.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Laman web SPPP menggunakan cookies untuk meningkatkan pengalaman pengguna, menganalisis 
                penggunaan laman web, dan memastikan fungsi yang sesuai.
              </p>
            </div>
          </section>

          {/* Cookie Settings */}
          <section className="mb-8 bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <Settings className="h-5 w-5 mr-2 text-blue-600" />
                Tetapan Cookie
              </h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Urus Tetapan
              </button>
            </div>
            <p className="text-gray-600 text-sm">
              Anda boleh mengurus pilihan cookie anda pada bila-bila masa. Klik butang di atas untuk mengubah tetapan anda.
            </p>
          </section>

          {/* Types of Cookies */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BarChart3 className="h-6 w-6 mr-3 text-green-600" />
              Jenis-jenis Cookie Yang Kami Gunakan
            </h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Cookie Diperlukan</h3>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Sentiasa Aktif</span>
                </div>
                <p className="text-gray-700 mb-3">
                  Cookie ini diperlukan untuk fungsi asas laman web dan tidak boleh dimatikan. 
                  Ia biasanya hanya ditetapkan sebagai tindak balas kepada tindakan anda.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Contoh:</strong> Sesi log masuk, tetapan keselamatan, pilihan bahasa
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Settings className="h-5 w-5 text-blue-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Cookie Fungsi</h3>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-xs text-gray-600">Opsional</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  Cookie ini membolehkan laman web mengingati pilihan yang anda buat dan 
                  menyediakan ciri yang dipertingkatkan dan lebih peribadi.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Contoh:</strong> Tetapan tema, saiz font yang dipilih, pilihan wilayah
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <BarChart3 className="h-5 w-5 text-purple-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Cookie Analitik</h3>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-xs text-gray-600">Opsional</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  Cookie ini membantu kami memahami cara pengunjung berinteraksi dengan 
                  laman web dengan mengumpul dan melaporkan maklumat secara tanpa nama.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Contoh:</strong> Google Analytics, statistik halaman, masa yang dihabiskan
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-orange-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Cookie Pemasaran</h3>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-xs text-gray-600">Dimatikan</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  Pada masa ini, kami TIDAK menggunakan cookie pemasaran di laman web SPPP. 
                  Kami tidak menjejak pengguna untuk tujuan pengiklanan.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Status:</strong> Tidak digunakan pada laman web ini
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Cookie List */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="h-6 w-6 mr-3 text-indigo-600" />
              Senarai Cookie Terperinci
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nama Cookie
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tujuan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tempoh
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jenis
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      SPPP_session
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Mengekalkan sesi pengguna semasa melayari
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Sesi
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Diperlukan
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      lang_pref
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Menyimpan pilihan bahasa pengguna
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      30 hari
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Fungsi
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      _ga
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Google Analytics - mengenal pasti pengguna unik
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2 tahun
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                        Analitik
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      _ga_XXXXXXXXXX
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Google Analytics - menyimpan state sesi
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2 tahun
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                        Analitik
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      cookie_consent
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Menyimpan pilihan persetujuan cookie pengguna
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      1 tahun
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Diperlukan
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Third Party Cookies */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="h-6 w-6 mr-3 text-blue-600" />
              Cookie Pihak Ketiga
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Kami menggunakan perkhidmatan pihak ketiga terpilih yang mungkin menetapkan 
                cookie mereka sendiri untuk menyediakan fungsi tertentu:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Google Analytics</h3>
                  <p className="text-sm text-blue-800 mb-2">
                    Membantu kami memahami cara pengunjung menggunakan laman web kami.
                  </p>
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline flex items-center"
                  >
                    Dasar Privasi Google
                    <Globe className="h-3 w-3 ml-1" />
                  </a>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">reCAPTCHA</h3>
                  <p className="text-sm text-green-800 mb-2">
                    Melindungi borang kami daripada spam dan penyalahgunaan automated.
                  </p>
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-green-600 hover:underline flex items-center"
                  >
                    Dasar Privasi Google
                    <Globe className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-yellow-800 text-sm">
                  <strong>Nota:</strong> Kami tidak mengawal cookie pihak ketiga. Sila rujuk 
                  dasar privasi mereka untuk maklumat lanjut.
                </p>
              </div>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Settings className="h-6 w-6 mr-3 text-purple-600" />
              Mengurus Cookie Anda
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tetapan Pelayar</h3>
                <p className="text-gray-700 mb-4">
                  Kebanyakan pelayar web membenarkan anda mengawal cookie melalui tetapan mereka:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 rounded">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Google Chrome</h4>
                    <p className="text-xs text-gray-600">Settings &gt; Privacy and Security &gt; Cookies</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Mozilla Firefox</h4>
                    <p className="text-xs text-gray-600">Options &gt; Privacy &amp; Security &gt; Cookies</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Safari</h4>
                    <p className="text-xs text-gray-600">Preferences &gt; Privacy &gt; Manage Website Data</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Microsoft Edge</h4>
                    <p className="text-xs text-gray-600">Settings &gt; Site Permissions &gt; Cookies</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Peranti Mudah Alih</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <Smartphone className="h-6 w-6 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-blue-900 mb-2">iOS (iPhone/iPad)</h4>
                    <p className="text-sm text-blue-800">
                      Settings > Safari > Block All Cookies
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <Smartphone className="h-6 w-6 text-green-600 mb-2" />
                    <h4 className="font-semibold text-green-900 mb-2">Android</h4>
                    <p className="text-sm text-green-800">
                      Chrome App > Settings > Site Settings > Cookies
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                  <div>
                    <strong className="text-red-900">Peringatan:</strong>
                    <p className="text-red-800 text-sm mt-1">
                      Mematikan cookie mungkin menjejaskan fungsi laman web. Sesetengah 
                      ciri mungkin tidak berfungsi dengan betul atau tidak boleh diakses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cookie Lifespan */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="h-6 w-6 mr-3 text-orange-600" />
              Tempoh Hayat Cookie
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Cookie yang kami gunakan mempunyai tempoh hayat yang berbeza bergantung 
                kepada tujuan mereka:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Clock className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                  <h3 className="font-semibold text-blue-900 mb-2">Cookie Sesi</h3>
                  <p className="text-sm text-blue-800">Dipadam apabila anda tutup pelayar</p>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Clock className="h-8 w-8 mx-auto mb-3 text-green-600" />
                  <h3 className="font-semibold text-green-900 mb-2">Cookie Jangka Pendek</h3>
                  <p className="text-sm text-green-800">30 hari atau kurang</p>
                </div>
                
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Clock className="h-8 w-8 mx-auto mb-3 text-orange-600" />
                  <h3 className="font-semibold text-orange-900 mb-2">Cookie Jangka Panjang</h3>
                  <p className="text-sm text-orange-800">Sehingga 2 tahun (analitik sahaja)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="h-6 w-6 mr-3 text-green-600" />
              Perlindungan Data
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami komited dalam melindungi privasi anda dan memastikan data yang 
                dikumpul melalui cookie diuruskan dengan selamat:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-lg">
                  <Lock className="h-6 w-6 text-green-600 mb-3" />
                  <h3 className="font-semibold text-green-900 mb-2">Keselamatan</h3>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Enkripsi data sensitif</li>
                    <li>• Akses terhad kepada data cookie</li>
                    <li>• Monitoring keselamatan berkala</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Eye className="h-6 w-6 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-blue-900 mb-2">Ketelusan</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Pemberitahuan jelas tentang cookie</li>
                    <li>• Kawalan penuh untuk pengguna</li>
                    <li>• Maklumat terperinci tentang penggunaan</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Download className="h-6 w-6 mr-3 text-indigo-600" />
              Perubahan kepada Dasar Cookie
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami mungkin akan mengemas kini Dasar Cookie ini dari semasa ke semasa 
                untuk menggambarkan perubahan dalam amalan kami atau keperluan undang-undang.
              </p>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Pemberitahuan:</strong> Sebarang perubahan akan dimaklumkan melalui 
                  banner cookie atau notis di laman web sekurang-kurangnya 30 hari sebelum 
                  perubahan berkuatkuasa.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <MessageSquare className="h-6 w-6 mr-3" />
              Hubungi Kami
            </h2>
            
            <p className="mb-6 text-blue-100">
              Jika anda mempunyai sebarang soalan mengenai penggunaan cookie kami:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Data Protection Officer</h3>
                <div className="space-y-2 text-blue-100">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3" />
                    <span>privacy@pppp.gov.my</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3" />
                    <span>04-210 5555 (ext. 101)</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Alamat Surat-menyurat</h3>
                <div className="text-blue-100 text-sm">
                  <p>Data Protection Officer</p>
                  <p>Suruhanjaya Pelabuhan Pulau Pinang</p>
                  <p>Jalan Sultan Ahmad Shah</p>
                  <p>10050 Pulau Pinang</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-500 text-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center mr-4">
                <Settings className="h-4 w-4 mr-2" />
                Urus Tetapan Cookie
              </button>
              <a 
                href="/legal/privacy"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300 inline-flex items-center"
              >
                <Shield className="h-4 w-4 mr-2" />
                Lihat Dasar Privasi
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}