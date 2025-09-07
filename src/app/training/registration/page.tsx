import { Metadata } from 'next';
import { 
  UserPlus, 
  FileText, 
  Calendar, 
  CreditCard, 
  CheckCircle,
  Clock,
  Phone,
  Mail,
  MapPin,
  User,
  Building2,
  GraduationCap,
  AlertCircle,
  Shield,
  Download,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pendaftaran Online | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Daftar program latihan SPPP secara online. Proses pendaftaran yang mudah dan pantas untuk semua program latihan.',
};

interface RegistrationStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  status: 'completed' | 'active' | 'pending';
}

const registrationSteps: RegistrationStep[] = [
  {
    id: 1,
    title: 'Pilih Program',
    description: 'Pilih program latihan yang sesuai dengan keperluan anda',
    icon: GraduationCap,
    status: 'completed'
  },
  {
    id: 2,
    title: 'Isi Maklumat',
    description: 'Lengkapkan borang pendaftaran dengan maklumat peribadi',
    icon: FileText,
    status: 'active'
  },
  {
    id: 3,
    title: 'Bayaran',
    description: 'Lakukan pembayaran melalui kaedah yang tersedia',
    icon: CreditCard,
    status: 'pending'
  },
  {
    id: 4,
    title: 'Pengesahan',
    description: 'Terima pengesahan pendaftaran dan maklumat program',
    icon: CheckCircle,
    status: 'pending'
  }
];

const popularPrograms = [
  {
    title: 'Asas Maritim dan Pelabuhan',
    duration: '2 minggu',
    price: 'RM800',
    nextIntake: '15 Oktober 2024',
    seats: 8
  },
  {
    title: 'Keselamatan Pelabuhan Asas',
    duration: '1 minggu',
    price: 'RM500',
    nextIntake: '1 Oktober 2024',
    seats: 12
  },
  {
    title: 'Operasi Terminal Kontena',
    duration: '4 minggu',
    price: 'RM2,500',
    nextIntake: '5 November 2024',
    seats: 5
  }
];

export default function TrainingRegistrationPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <UserPlus className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Pendaftaran Online</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Daftar program latihan SPPP dengan mudah dan pantas. 
                Dapatkan akses kepada program latihan berkualiti tinggi.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Registration Steps */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Proses Pendaftaran
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {registrationSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.id} className="relative">
                    <div className={`
                      bg-white rounded-lg p-6 text-center shadow-lg transition-all duration-300
                      ${step.status === 'active' ? 'ring-2 ring-blue-500 shadow-xl' : ''}
                      ${step.status === 'completed' ? 'bg-green-50' : ''}
                    `}>
                      <div className={`
                        w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center
                        ${step.status === 'completed' ? 'bg-green-500 text-white' : 
                          step.status === 'active' ? 'bg-blue-500 text-white' : 
                          'bg-gray-200 text-gray-400'}
                      `}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                    {index < registrationSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                        <ArrowRight className="h-6 w-6 text-gray-300" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Borang Pendaftaran
                </h2>

                <form className="space-y-6">
                  {/* Program Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Program Latihan
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Pilih Program Latihan</option>
                      <option value="maritime-fundamentals">Asas Maritim dan Pelabuhan (RM800)</option>
                      <option value="port-safety-basic">Keselamatan Pelabuhan Asas (RM500)</option>
                      <option value="container-operations">Operasi Terminal Kontena (RM2,500)</option>
                      <option value="cargo-handling">Pengendalian Kargo Khusus (RM1,800)</option>
                      <option value="port-management">Pengurusan Pelabuhan Lanjutan (RM5,500)</option>
                      <option value="digital-port-systems">Sistem Digital Pelabuhan (RM4,200)</option>
                      <option value="maritime-leadership">Kepimpinan Maritim (RM8,000)</option>
                    </select>
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Nama Penuh
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nama penuh anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Nombor Kad Pengenalan
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="XXXXXX-XX-XXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Emel
                      </label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="nama@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Nombor Telefon
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="01X-XXX XXXX"
                      />
                    </div>
                  </div>

                  {/* Employment Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Nama Syarikat/Organisasi
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nama syarikat"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Jawatan
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Jawatan semasa"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Alamat
                    </label>
                    <textarea 
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Alamat penuh"
                    ></textarea>
                  </div>

                  {/* Educational Background */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Latar Belakang Pendidikan
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Pilih tahap pendidikan tertinggi</option>
                      <option value="spm">SPM / Setaraf</option>
                      <option value="stpm">STPM / Setaraf</option>
                      <option value="diploma">Diploma</option>
                      <option value="degree">Sarjana Muda</option>
                      <option value="master">Sarjana</option>
                      <option value="phd">PhD</option>
                    </select>
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Pengalaman Berkaitan (tahun)
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Pilih pengalaman</option>
                      <option value="none">Tiada pengalaman</option>
                      <option value="1">Kurang dari 1 tahun</option>
                      <option value="1-2">1-2 tahun</option>
                      <option value="3-5">3-5 tahun</option>
                      <option value="6-10">6-10 tahun</option>
                      <option value="10+">Lebih dari 10 tahun</option>
                    </select>
                  </div>

                  {/* Special Requirements */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Keperluan Khas (opsional)
                    </label>
                    <textarea 
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Sebarang keperluan khas seperti dietary restrictions, accessibility needs, etc."
                    ></textarea>
                  </div>

                  {/* Agreement */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="terms"
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                        Saya bersetuju dengan{' '}
                        <a href="/legal/terms" className="text-blue-600 hover:text-blue-700 underline">
                          Terma dan Syarat
                        </a>{' '}
                        serta{' '}
                        <a href="/legal/privacy" className="text-blue-600 hover:text-blue-700 underline">
                          Dasar Privasi
                        </a>{' '}
                        SPPP. Saya faham bahawa maklumat yang diberikan adalah tepat dan lengkap.
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button 
                      type="submit"
                      className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                    >
                      <CreditCard className="h-5 w-5 mr-2" />
                      Teruskan ke Pembayaran
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Popular Programs */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Program Popular
                </h3>
                <div className="space-y-4">
                  {popularPrograms.map((program, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{program.title}</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {program.duration}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {program.nextIntake}
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <span className="font-semibold text-blue-600">{program.price}</span>
                          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                            {program.seats} tempat tersisa
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Perlukan Bantuan?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-3 text-blue-600" />
                    <div>
                      <div className="font-semibold">Hotline Latihan</div>
                      <div>04-210 5555</div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-3 text-blue-600" />
                    <div>
                      <div className="font-semibold">Emel</div>
                      <div>training@pppp.gov.my</div>
                    </div>
                  </div>
                  <div className="flex items-start text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-3 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-semibold">Pejabat Latihan</div>
                      <div>Tingkat 8, Bangunan SPPP</div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-3 text-blue-600" />
                    <div>
                      <div className="font-semibold">Waktu Operasi</div>
                      <div>Isnin - Jumaat: 8:30 AM - 5:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-semibold text-yellow-900 mb-1">Penting!</div>
                    <div className="text-yellow-700">
                      Pendaftaran akan ditutup 1 minggu sebelum tarikh mula program. 
                      Bayaran penuh diperlukan untuk mengesahkan tempat.
                    </div>
                  </div>
                </div>
              </div>

              {/* Downloads */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Muat Turun
                </h3>
                <div className="space-y-2">
                  <a href="#" className="flex items-center text-sm text-blue-600 hover:text-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Brosur Program Latihan 2024
                  </a>
                  <a href="#" className="flex items-center text-sm text-blue-600 hover:text-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Syarat dan Terma Pendaftaran
                  </a>
                  <a href="#" className="flex items-center text-sm text-blue-600 hover:text-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Panduan Pembayaran
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Kaedah Pembayaran
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <CreditCard className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold text-gray-900 mb-2">Kad Kredit/Debit</h4>
                <p className="text-sm text-gray-600">Visa, Mastercard, American Express</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <Building2 className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h4 className="font-semibold text-gray-900 mb-2">Pemindahan Bank</h4>
                <p className="text-sm text-gray-600">FPX, Maybank2u, CIMB Clicks</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <Shield className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h4 className="font-semibold text-gray-900 mb-2">E-Wallet</h4>
                <p className="text-sm text-gray-600">GrabPay, Touch 'n Go eWallet</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}