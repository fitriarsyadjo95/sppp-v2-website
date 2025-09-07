import { Metadata } from 'next';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database,
  UserCheck,
  Mail,
  Phone,
  Globe,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  Building2,
  Scale,
  MessageSquare
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dasar Privasi | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Dasar privasi SPPP menjelaskan bagaimana kami mengumpul, menggunakan, dan melindungi maklumat peribadi anda',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Shield className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Dasar Privasi</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Komitmen kami dalam melindungi privasi dan maklumat peribadi anda
              </p>
              <div className="mt-6 text-blue-200 text-sm">
                Dikemaskini: 1 September 2024
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Quick Summary */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="h-6 w-6 mr-3 text-blue-600" />
              Ringkasan Ringkas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Lock className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold text-gray-900 mb-2">Data Dilindungi</h3>
                <p className="text-sm text-gray-600">Maklumat peribadi anda dilindungi dengan standard keselamatan tertinggi</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <UserCheck className="h-8 w-8 mx-auto mb-3 text-green-600" />
                <h3 className="font-semibold text-gray-900 mb-2">Kegunaan Terhad</h3>
                <p className="text-sm text-gray-600">Data hanya digunakan untuk tujuan yang anda bersetuju</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Scale className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                <h3 className="font-semibold text-gray-900 mb-2">Hak Anda</h3>
                <p className="text-sm text-gray-600">Anda mempunyai hak penuh ke atas maklumat peribadi anda</p>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pengenalan</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Suruhanjaya Pelabuhan Pulau Pinang (<strong>"SPPP", "kami", "kita"</strong>) komited dalam melindungi 
                privasi dan maklumat peribadi anda. Dasar Privasi ini menerangkan bagaimana kami mengumpul, 
                menggunakan, mendedahkan, dan melindungi maklumat peribadi yang kami terima daripada anda.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dengan menggunakan laman web ini atau perkhidmatan kami, anda bersetuju dengan amalan yang 
                diterangkan dalam Dasar Privasi ini. Jika anda tidak bersetuju dengan mana-mana bahagian 
                dasar ini, sila jangan gunakan laman web atau perkhidmatan kami.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Database className="h-6 w-6 mr-3 text-blue-600" />
              Maklumat Yang Kami Kumpul
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Maklumat Peribadi</h3>
                <p className="text-gray-700 mb-3">
                  Kami mungkin mengumpul maklumat peribadi berikut apabila anda:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Menggunakan perkhidmatan pelabuhan kami</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Mendaftar untuk program latihan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Memohon tender atau kontrak</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Menghubungi kami melalui laman web atau telefon</span>
                  </li>
                </ul>
                
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <strong className="text-gray-900">Jenis maklumat termasuk:</strong>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 text-sm text-gray-700">
                    <div>• Nama penuh</div>
                    <div>• Nombor kad pengenalan</div>
                    <div>• Alamat emel</div>
                    <div>• Nombor telefon</div>
                    <div>• Alamat surat-menyurat</div>
                    <div>• Maklumat syarikat</div>
                    <div>• Jawatan dan industri</div>
                    <div>• Maklumat kewangan (jika berkaitan)</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Maklumat Teknikal</h3>
                <p className="text-gray-700 mb-3">
                  Apabila anda melayari laman web kami, kami secara automatik mengumpul:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Alamat IP</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Jenis pelayar dan peranti</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Halaman yang dilayari</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Masa dan tarikh layaran</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <UserCheck className="h-6 w-6 mr-3 text-green-600" />
              Bagaimana Kami Menggunakan Maklumat
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Penyediaan Perkhidmatan</h3>
                <p className="text-gray-700 text-sm">
                  Memproses permohonan, menyediakan perkhidmatan pelabuhan, dan menguruskan akaun anda
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Komunikasi</h3>
                <p className="text-gray-700 text-sm">
                  Menghubungi anda mengenai perkhidmatan, kemaskini, atau maklum balas
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Penambahbaikan</h3>
                <p className="text-gray-700 text-sm">
                  Menganalisis penggunaan untuk menambah baik perkhidmatan dan pengalaman pengguna
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Kepatuhan Undang-undang</h3>
                <p className="text-gray-700 text-sm">
                  Mematuhi kewajipan undang-undang dan keperluan regulatori
                </p>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="h-6 w-6 mr-3 text-purple-600" />
              Perkongsian Maklumat
            </h2>
            
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <div>
                  <strong className="text-red-900">Penting:</strong>
                  <p className="text-red-800 text-sm mt-1">
                    Kami TIDAK menjual, menyewa, atau memperdagangkan maklumat peribadi anda kepada pihak ketiga untuk tujuan pemasaran.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Perkongsian yang Dibenarkan</h3>
                <p className="text-gray-700 mb-3">
                  Kami hanya akan berkongsi maklumat peribadi anda dalam keadaan berikut:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Dengan kebenaran eksplisit anda</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Kepada agensi kerajaan mengikut keperluan undang-undang</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Kepada penyedia perkhidmatan yang dipercayai untuk operasi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Dalam situasi kecemasan yang melibatkan keselamatan</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Lock className="h-6 w-6 mr-3 text-red-600" />
              Keselamatan Data
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Kami melaksanakan langkah keselamatan teknikal, fizikal, dan pentadbiran yang sesuai 
                untuk melindungi maklumat peribadi anda daripada akses tanpa kebenaran, kehilangan, 
                atau penyalahgunaan.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    Keselamatan Teknikal
                  </h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Enkripsi data SSL/TLS</li>
                    <li>• Firewall dan sistem keselamatan</li>
                    <li>• Monitoring keselamatan 24/7</li>
                    <li>• Regular security updates</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2 flex items-center">
                    <Building2 className="h-4 w-4 mr-2" />
                    Keselamatan Fizikal
                  </h3>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Akses terhad kepada server</li>
                    <li>• CCTV dan sistem keselamatan</li>
                    <li>• Backup data di lokasi selamat</li>
                    <li>• Disaster recovery plan</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Scale className="h-6 w-6 mr-3 text-indigo-600" />
              Hak-hak Anda
            </h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Hak Akses</h3>
                <p className="text-gray-700 text-sm">
                  Meminta salinan maklumat peribadi yang kami simpan tentang anda
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Hak Pembetulan</h3>
                <p className="text-gray-700 text-sm">
                  Meminta pembetulan maklumat yang tidak tepat atau tidak lengkap
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Hak Pemadaman</h3>
                <p className="text-gray-700 text-sm">
                  Meminta pemadaman maklumat peribadi dalam keadaan tertentu
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Hak Pemberhentian</h3>
                <p className="text-gray-700 text-sm">
                  Menghentikan pemprosesan maklumat untuk tujuan pemasaran langsung
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-900 text-sm">
                <strong>Cara menggunakan hak anda:</strong> Hubungi kami melalui maklumat yang disediakan di bahagian bawah 
                halaman ini. Kami akan membalas permintaan anda dalam tempoh 30 hari bekerja.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="h-6 w-6 mr-3 text-orange-600" />
              Tempoh Penyimpanan Data
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Kami akan menyimpan maklumat peribadi anda hanya selama tempoh yang diperlukan untuk:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Menyediakan perkhidmatan yang diminta</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Mematuhi keperluan undang-undang</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Menyelesaikan pertikaian</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Menguatkuasakan perjanjian</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Tujuan audit dan rekod</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Keperluan operasi yang sah</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-3 text-gray-600" />
              Perubahan kepada Dasar Ini
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Kami mungkin akan mengemas kini Dasar Privasi ini dari semasa ke semasa untuk menggambarkan 
              perubahan dalam amalan kami atau untuk sebab operasi, undang-undang, atau regulatori yang lain.
            </p>
            
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-yellow-800 text-sm">
                <strong>Pemberitahuan:</strong> Sebarang perubahan material akan dimaklumkan melalui 
                laman web kami atau melalui emel (jika berkaitan) sekurang-kurangnya 30 hari sebelum 
                perubahan berkuatkuasa.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <MessageSquare className="h-6 w-6 mr-3" />
              Hubungi Kami
            </h2>
            
            <p className="mb-6 text-blue-100">
              Jika anda mempunyai sebarang soalan mengenai Dasar Privasi ini atau ingin menggunakan hak-hak anda:
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
          </section>
        </div>
      </div>
    </>
  );
}