import { Metadata } from 'next';
import { 
  Accessibility, 
  Eye, 
  Keyboard, 
  Volume2,
  Monitor,
  Smartphone,
  CheckCircle,
  AlertTriangle,
  Settings,
  Download,
  Mail,
  Phone,
  MessageSquare,
  ExternalLink,
  Users,
  Globe,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kenyataan Kebolehcapaian | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Komitmen SPPP dalam menyediakan laman web yang boleh diakses oleh semua pengguna termasuk mereka yang mempunyai keperluan khas',
};

export default function AccessibilityPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Accessibility className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Kenyataan Kebolehcapaian</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Komitmen kami dalam menyediakan laman web yang boleh diakses oleh semua pengguna
              </p>
              <div className="mt-6 text-blue-200 text-sm">
                Dikemaskini: 1 September 2024
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Our Commitment */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 mr-3 text-blue-600" />
              Komitmen Kami
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Suruhanjaya Pelabuhan Pulau Pinang (SPPP) komited dalam memastikan laman web kami 
                boleh diakses oleh semua pengguna, termasuk mereka yang mempunyai keperluan khas. 
                Kami percaya bahawa akses kepada maklumat adalah hak asasi dan berusaha untuk 
                menyediakan pengalaman digital yang inklusif.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Laman web ini direka bentuk dan dibangunkan mengikut garis panduan kebolehcapaian 
                web yang diiktiraf antarabangsa untuk memastikan ia boleh digunakan oleh orang 
                yang mempunyai pelbagai jenis keperluan dan menggunakan teknologi bantuan.
              </p>
            </div>
          </section>

          {/* Accessibility Standards */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 mr-3 text-green-600" />
              Standard Kebolehcapaian
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Laman web SPPP dibangunkan mengikut Web Content Accessibility Guidelines (WCAG) 2.1 
                pada tahap AA. Standard ini memastikan kandungan web boleh diakses oleh orang yang 
                mempunyai pelbagai jenis kecacatan.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    Kebolehcapaian Visual
                  </h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Kontras warna yang mencukupi</li>
                    <li>• Teks boleh diperbesar hingga 200%</li>
                    <li>• Sokongan untuk screen reader</li>
                    <li>• Alt text untuk semua imej</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3 flex items-center">
                    <Keyboard className="h-5 w-5 mr-2" />
                    Kebolehcapaian Motor
                  </h3>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Navigasi menggunakan keyboard</li>
                    <li>• Target klik yang mencukupi saiz</li>
                    <li>• Tiada masa had yang ketat</li>
                    <li>• Sokongan untuk teknologi bantuan</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3 flex items-center">
                    <Volume2 className="h-5 w-5 mr-2" />
                    Kebolehcapaian Audio
                  </h3>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Subtitel untuk video</li>
                    <li>• Transkrip untuk audio</li>
                    <li>• Kawalan volum</li>
                    <li>• Auto-play dikawal</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-3 flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    Kebolehcapaian Kognitif
                  </h3>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Bahasa yang jelas dan mudah</li>
                    <li>• Struktur yang konsisten</li>
                    <li>• Navigasi yang mudah difahami</li>
                    <li>• Mesej ralat yang jelas</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Features for Accessibility */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Monitor className="h-6 w-6 mr-3 text-purple-600" />
              Ciri-ciri Kebolehcapaian
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Navigasi Keyboard</h3>
                <p className="text-gray-700 text-sm">
                  Semua fungsi laman web boleh diakses menggunakan keyboard sahaja. 
                  Gunakan Tab untuk bergerak ke hadapan dan Shift+Tab untuk ke belakang.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Sokongan Screen Reader</h3>
                <p className="text-gray-700 text-sm">
                  Laman web ini telah diuji dengan screen reader popular seperti NVDA, JAWS, dan VoiceOver 
                  untuk memastikan kompatibiliti yang baik.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Saiz Teks Boleh Dilaraskan</h3>
                <p className="text-gray-700 text-sm">
                  Anda boleh membesarkan teks hingga 200% menggunakan fungsi zoom pelayar 
                  tanpa kehilangan fungsi atau kandungan.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Kontras Warna Tinggi</h3>
                <p className="text-gray-700 text-sm">
                  Semua teks mempunyai kontras yang mencukupi dengan latar belakang untuk 
                  memastikan keterbacaan yang baik.
                </p>
              </div>
            </div>
          </section>

          {/* Compatible Technologies */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Smartphone className="h-6 w-6 mr-3 text-green-600" />
              Teknologi yang Disokong
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Laman web ini telah diuji dan disahkan berfungsi dengan baik menggunakan teknologi berikut:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Monitor className="h-8 w-8 mx-auto mb-3 text-gray-600" />
                  <h3 className="font-semibold text-gray-900 mb-2">Pelayar Web</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Chrome 90+</li>
                    <li>Firefox 88+</li>
                    <li>Safari 14+</li>
                    <li>Edge 90+</li>
                  </ul>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Volume2 className="h-8 w-8 mx-auto mb-3 text-gray-600" />
                  <h3 className="font-semibold text-gray-900 mb-2">Screen Readers</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>NVDA</li>
                    <li>JAWS</li>
                    <li>VoiceOver</li>
                    <li>TalkBack</li>
                  </ul>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Smartphone className="h-8 w-8 mx-auto mb-3 text-gray-600" />
                  <h3 className="font-semibold text-gray-900 mb-2">Peranti Mudah Alih</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>iOS Safari</li>
                    <li>Android Chrome</li>
                    <li>Samsung Internet</li>
                    <li>Voice Assistant</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Known Issues */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="h-6 w-6 mr-3 text-yellow-600" />
              Isu Yang Diketahui dan Penambahbaikan
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Kami komited untuk penambahbaikan berterusan dalam kebolehcapaian laman web. 
                Berikut adalah isu yang sedang kami atasi:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <h3 className="font-semibold text-yellow-900 mb-2">Dalam Proses Penambahbaikan</h3>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>• Menambah lebih banyak landmark untuk navigasi</li>
                    <li>• Meningkatkan deskripsi untuk grafik kompleks</li>
                    <li>• Menambah shortcut keyboard untuk fungsi utama</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <h3 className="font-semibold text-blue-900 mb-2">Rancangan Masa Depan</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Sokongan untuk high contrast mode</li>
                    <li>• Pilihan untuk mengurangkan animasi</li>
                    <li>• Ciri terjemahan bahasa isyarat</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How to Use */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-3 text-indigo-600" />
              Panduan Penggunaan
            </h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigasi Keyboard</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Tab</span>
                      <span>Ke elemen seterusnya</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Shift + Tab</span>
                      <span>Ke elemen sebelumnya</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Enter/Space</span>
                      <span>Aktifkan pautan/butang</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Arrow Keys</span>
                      <span>Navigasi dalam menu</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Shortcut Pelayar</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Ctrl + Plus</span>
                      <span>Besarkan teks</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Ctrl + Minus</span>
                      <span>Kecilkan teks</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Ctrl + 0</span>
                      <span>Reset saiz teks</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Alt + D</span>
                      <span>Fokus ke address bar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Third Party Content */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ExternalLink className="h-6 w-6 mr-3 text-gray-600" />
              Kandungan Pihak Ketiga
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Beberapa kandungan di laman web ini mungkin disediakan oleh pihak ketiga 
                (seperti widget media sosial, peta interaktif, atau video). Kami tidak 
                mengawal sepenuhnya kebolehcapaian kandungan ini.
              </p>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-800 text-sm">
                  <strong>Nota:</strong> Jika anda menghadapi kesukaran dengan mana-mana kandungan 
                  pihak ketiga, sila hubungi kami dan kami akan berusaha menyediakan alternatif yang boleh diakses.
                </p>
              </div>
            </div>
          </section>

          {/* Testing and Feedback */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Download className="h-6 w-6 mr-3 text-green-600" />
              Pengujian dan Maklum Balas
            </h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Kaedah Pengujian</h3>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Automated accessibility testing tools</li>
                    <li>• Manual testing dengan screen readers</li>
                    <li>• Keyboard-only navigation testing</li>
                    <li>• User testing dengan pengguna berkeperluan khas</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Proses Semakan</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Semakan berkala setiap 6 bulan</li>
                    <li>• Ujian selepas sebarang kemaskini besar</li>
                    <li>• Monitoring berterusan isu kebolehcapaian</li>
                    <li>• Tindakan pantas untuk masalah yang dilaporkan</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Bantuan Maklum Balas Anda</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Maklum balas anda adalah penting untuk membantu kami menambah baik kebolehcapaian 
                  laman web. Jika anda menghadapi sebarang kesukaran atau mempunyai cadangan, 
                  sila hubungi kami menggunakan maklumat di bahagian bawah.
                </p>
              </div>
            </div>
          </section>

          {/* Alternative Access */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="h-6 w-6 mr-3 text-orange-600" />
              Akses Alternatif
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Jika anda menghadapi kesukaran mengakses mana-mana kandungan atau perkhidmatan 
                di laman web ini, kami sedia menyediakan alternatif:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Format Alternatif</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Dokumen dalam format audio</li>
                    <li>• Teks dalam format yang mudah dibaca</li>
                    <li>• Maklumat dalam format Braille (atas permintaan)</li>
                    <li>• Bantuan melalui telefon atau emel</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibent text-green-900 mb-3">Bantuan Peribadi</h3>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Konsultasi telefon dengan kakitangan</li>
                    <li>• Bantuan mengisi borang online</li>
                    <li>• Penjelasan maklumat secara verbal</li>
                    <li>• Rujukan kepada pakar yang sesuai</li>
                  </ul>
                </div>
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
              Untuk sebarang isu kebolehcapaian, permintaan bantuan, atau maklum balas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Pegawai Kebolehcapaian Web</h3>
                <div className="space-y-2 text-blue-100">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3" />
                    <span>accessibility@pppp.gov.my</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3" />
                    <span>04-210 5555 (ext. 301)</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Alamat Surat-menyurat</h3>
                <div className="text-blue-100 text-sm">
                  <p>Pegawai Kebolehcapaian Web</p>
                  <p>Suruhanjaya Pelabuhan Pulau Pinang</p>
                  <p>Jalan Sultan Ahmad Shah</p>
                  <p>10050 Pulau Pinang</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-500">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:accessibility@pppp.gov.my"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center justify-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Hantar Email
                </a>
                <a 
                  href="tel:04-210-5555"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Hubungi: 04-210 5555
                </a>
              </div>
              <p className="text-blue-200 text-sm text-center mt-4">
                Kami akan membalas sebarang pertanyaan kebolehcapaian dalam tempoh 2 hari bekerja
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}