import { Metadata } from 'next';
import { 
  Scale, 
  FileText, 
  AlertTriangle, 
  CheckCircle,
  Globe,
  Shield,
  Eye,
  Users,
  Ban,
  Copyright,
  ExternalLink,
  MessageSquare,
  Mail,
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terma Penggunaan | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Terma dan syarat penggunaan laman web dan perkhidmatan Suruhanjaya Pelabuhan Pulau Pinang',
};

export default function TermsOfUsePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Scale className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Terma Penggunaan</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Terma dan syarat yang mengatur penggunaan laman web dan perkhidmatan SPPP
              </p>
              <div className="mt-6 text-blue-200 text-sm">
                Berkuatkuasa: 1 September 2024
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Important Notice */}
          <section className="mb-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-0.5" />
              <div>
                <h2 className="text-lg font-semibold text-yellow-900 mb-2">Perhatian Penting</h2>
                <p className="text-yellow-800 text-sm">
                  Dengan mengakses atau menggunakan laman web ini, anda bersetuju untuk terikat dengan 
                  terma dan syarat berikut. Jika anda tidak bersetuju, sila jangan menggunakan laman web ini.
                </p>
              </div>
            </div>
          </section>

          {/* Acceptance of Terms */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 mr-3 text-green-600" />
              1. Penerimaan Terma
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Terma Penggunaan ini (<strong>"Terma"</strong>) merupakan perjanjian yang mengikat secara undang-undang 
                antara anda (<strong>"Pengguna"</strong> atau <strong>"anda"</strong>) dan Suruhanjaya Pelabuhan Pulau Pinang 
                (<strong>"SPPP", "kami", "kita"</strong>) berkenaan dengan penggunaan laman web ini dan semua perkhidmatan yang berkaitan.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan mengakses, melayari, atau menggunakan laman web ini, anda mengakui bahawa anda telah membaca, 
                memahami, dan bersetuju untuk terikat dengan Terma ini dan sebarang polisi lain yang dirujuk di sini.
              </p>
            </div>
          </section>

          {/* Website Usage */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="h-6 w-6 mr-3 text-blue-600" />
              2. Penggunaan Laman Web
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2.1 Penggunaan yang Dibenarkan</h3>
                <p className="text-gray-700 mb-3">Anda dibenarkan menggunakan laman web ini untuk:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Mengakses maklumat mengenai perkhidmatan SPPP</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Memohon perkhidmatan dan program latihan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Memuat turun dokumen yang disediakan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Menghubungi kami melalui borang yang disediakan</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2.2 Larangan Penggunaan</h3>
                <p className="text-gray-700 mb-3">Anda DILARANG daripada:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Ban className="h-4 w-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Menggunakan laman web untuk sebarang tujuan yang menyalahi undang-undang</span>
                  </li>
                  <li className="flex items-start">
                    <Ban className="h-4 w-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Mencuba mengakses kawasan yang tidak dibenarkan</span>
                  </li>
                  <li className="flex items-start">
                    <Ban className="h-4 w-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Mengganggu atau merosakkan operasi laman web</span>
                  </li>
                  <li className="flex items-start">
                    <Ban className="h-4 w-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Menyebarkan virus, malware, atau kod yang memudaratkan</span>
                  </li>
                  <li className="flex items-start">
                    <Ban className="h-4 w-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Menggunakan automated systems untuk akses berlebihan</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 mr-3 text-purple-600" />
              3. Tanggungjawab Pengguna
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Maklumat yang Tepat</h3>
                <p className="text-gray-700 text-sm">
                  Anda bertanggungjawab memastikan semua maklumat yang diberikan adalah tepat, lengkap, dan terkini.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Keselamatan Akaun</h3>
                <p className="text-gray-700 text-sm">
                  Jaga kerahsiaan maklumat log masuk anda dan bertanggungjawab ke atas semua aktiviti akaun.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Kepatuhan Undang-undang</h3>
                <p className="text-gray-700 text-sm">
                  Patuhi semua undang-undang dan peraturan yang berkaitan dengan penggunaan laman web ini.
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Penggunaan yang Bertanggungjawab</h3>
                <p className="text-gray-700 text-sm">
                  Tidak menyalahgunakan perkhidmatan atau mengganggu pengguna lain.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Copyright className="h-6 w-6 mr-3 text-indigo-600" />
              4. Harta Intelek
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">4.1 Kandungan SPPP</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Semua kandungan di laman web ini, termasuk tetapi tidak terhad kepada teks, gambar, logo, 
                  video, audio, perisian, dan reka bentuk adalah hak milik SPPP atau pemberi lesen kami dan 
                  dilindungi oleh undang-undang hak cipta, tanda dagangan, dan harta intelek yang lain.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">4.2 Penggunaan Terhad</h3>
                <p className="text-gray-700 mb-3">
                  Anda boleh memuat turun, mencetak, atau menggunakan kandungan untuk:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Kegunaan peribadi yang tidak komersial</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Tujuan pendidikan atau penyelidikan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Kegunaan dalaman organisasi (dengan sumber yang dinyatakan)</span>
                  </li>
                </ul>

                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
                  <p className="text-red-800 text-sm">
                    <strong>Larangan:</strong> Tiada bahagian kandungan boleh diubah suai, diedarkan, atau 
                    digunakan untuk tujuan komersial tanpa kebenaran bertulis daripada SPPP.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Availability */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="h-6 w-6 mr-3 text-green-600" />
              5. Ketersediaan Perkhidmatan
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                SPPP berusaha menyediakan laman web yang boleh diakses 24/7, tetapi kami tidak menjamin 
                bahawa perkhidmatan akan sentiasa tersedia atau bebas daripada gangguan.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Penyelenggaraan Berjadual</h3>
                  <p className="text-blue-800 text-sm">
                    Laman web mungkin tidak tersedia semasa kerja penyelenggaraan yang dijadualkan. 
                    Notis akan diberikan apabila mungkin.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Gangguan Tidak Dijangka</h3>
                  <p className="text-orange-800 text-sm">
                    Kami tidak bertanggungjawab terhadap gangguan yang disebabkan oleh faktor luar kawalan kami.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="h-6 w-6 mr-3 text-yellow-600" />
              6. Penafian
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-3">Maklumat "Sebagaimana Adanya"</h3>
                <p className="text-yellow-800 text-sm leading-relaxed">
                  Maklumat di laman web ini disediakan "sebagaimana adanya" tanpa sebarang jaminan, sama ada 
                  tersurat atau tersirat. SPPP tidak menjamin ketepatan, kelengkapan, atau kemas kini maklumat.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Batasan Liabiliti</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  SPPP tidak akan bertanggungjawab terhadap sebarang kerosakan langsung, tidak langsung, 
                  sampingan, atau kerosakan lain yang timbul daripada:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Penggunaan atau ketidakupayaan untuk menggunakan laman web</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Ketidaktepatan atau kesilapan dalam kandungan</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Gangguan atau kegagalan teknikal</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Akses tidak sah kepada data anda</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* External Links */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ExternalLink className="h-6 w-6 mr-3 text-gray-600" />
              7. Pautan Luar
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Laman web ini mungkin mengandungi pautan ke laman web pihak ketiga untuk kemudahan anda. 
                SPPP tidak mengawal kandungan laman web ini dan tidak bertanggungjawab ke atas kandungan, 
                dasar privasi, atau amalan mereka.
              </p>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-gray-800 text-sm">
                  <strong>Nasihat:</strong> Kami menggalakkan anda membaca terma penggunaan dan dasar privasi 
                  mana-mana laman web pihak ketiga yang anda lawati.
                </p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Ban className="h-6 w-6 mr-3 text-red-600" />
              8. Penamatan
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                SPPP berhak untuk menamatkan atau menggantung akses anda kepada laman web ini pada bila-bila masa, 
                dengan atau tanpa notis, jika kami percaya anda telah melanggar Terma ini.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-2">Penamatan Serta-merta</h3>
                  <p className="text-red-800 text-sm">
                    Dalam kes pelanggaran serius, akses mungkin ditamatkan dengan serta-merta.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Kesan Penamatan</h3>
                  <p className="text-blue-800 text-sm">
                    Selepas penamatan, anda mesti berhenti menggunakan laman web dan semua hak akses akan ditarik balik.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Scale className="h-6 w-6 mr-3 text-purple-600" />
              9. Undang-undang Yang Terpakai
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Terma ini akan ditafsir dan dikuatkuasakan mengikut undang-undang Malaysia. Sebarang pertikaian 
                yang timbul akan tertakluk kepada bidang kuasa eksklusif mahkamah-mahkamah di Malaysia.
              </p>

              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Penyelesaian Pertikaian</h3>
                <p className="text-purple-800 text-sm">
                  Kami menggalakkan penyelesaian pertikaian secara amicable melalui perundingan sebelum 
                  mengambil tindakan undang-undang.
                </p>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-3 text-orange-600" />
              10. Perubahan kepada Terma
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                SPPP berhak untuk mengubah atau mengemas kini Terma ini pada bila-bila masa. Perubahan akan 
                berkuatkuasa apabila disiarkan di laman web ini.
              </p>

              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-orange-800 text-sm">
                  <strong>Tanggungjawab Pengguna:</strong> Adalah menjadi tanggungjawab anda untuk menyemak 
                  Terma ini secara berkala. Penggunaan berterusan laman web selepas perubahan dibuat menandakan 
                  penerimaan anda terhadap terma yang dikemas kini.
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
              Jika anda mempunyai sebarang soalan mengenai Terma Penggunaan ini:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Bahagian Undang-undang</h3>
                <div className="space-y-2 text-blue-100">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3" />
                    <span>legal@pppp.gov.my</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3" />
                    <span>04-210 5555 (ext. 201)</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Alamat Surat-menyurat</h3>
                <div className="text-blue-100 text-sm">
                  <p>Bahagian Undang-undang</p>
                  <p>Suruhanjaya Pelabuhan Pulau Pinang</p>
                  <p>Jalan Sultan Ahmad Shah</p>
                  <p>10050 Pulau Pinang</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-500">
              <p className="text-blue-200 text-sm text-center">
                Dokumen ini telah dikemas kini pada 1 September 2024
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}