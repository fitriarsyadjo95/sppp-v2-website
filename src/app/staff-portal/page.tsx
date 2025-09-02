import { Metadata } from 'next';
import { Layout } from '@/components/layout/layout';
import { 
  Users, 
  Lock, 
  FileText, 
  Calendar, 
  Mail,
  Bell,
  Download,
  Settings,
  BookOpen,
  Clock,
  Shield,
  User,
  LogIn,
  Key,
  AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portal Staf | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Portal pekerja SPPP untuk akses kepada maklumat dalaman, dokumen, dan perkhidmatan pekerja',
};

interface PortalService {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  requiresLogin: boolean;
  category: 'hr' | 'documents' | 'training' | 'communication';
}

const portalServices: PortalService[] = [
  // HR Services
  {
    id: 'payslip',
    name: 'Slip Gaji',
    description: 'Muat turun slip gaji bulanan dan maklumat gaji',
    icon: Download,
    requiresLogin: true,
    category: 'hr'
  },
  {
    id: 'leave-application',
    name: 'Permohonan Cuti',
    description: 'Mohon dan semak status cuti tahunan, cuti sakit, dan cuti khas',
    icon: Calendar,
    requiresLogin: true,
    category: 'hr'
  },
  {
    id: 'employee-benefits',
    name: 'Faedah Pekerja',
    description: 'Maklumat insurans, pencen, dan faedah lain',
    icon: Shield,
    requiresLogin: true,
    category: 'hr'
  },
  {
    id: 'profile-update',
    name: 'Kemaskini Profil',
    description: 'Kemaskini maklumat peribadi dan hubungan',
    icon: User,
    requiresLogin: true,
    category: 'hr'
  },
  // Documents
  {
    id: 'policies',
    name: 'Dasar & Prosedur',
    description: 'Akses kepada dokumen dasar syarikat dan SOP',
    icon: FileText,
    requiresLogin: true,
    category: 'documents'
  },
  {
    id: 'forms',
    name: 'Borang Dalaman',
    description: 'Muat turun borang permohonan dan dokumen rasmi',
    icon: Download,
    requiresLogin: true,
    category: 'documents'
  },
  {
    id: 'directory',
    name: 'Direktori Staf',
    description: 'Senarai dan maklumat hubungan kakitangan SPPP',
    icon: Users,
    requiresLogin: true,
    category: 'documents'
  },
  // Training
  {
    id: 'training-records',
    name: 'Rekod Latihan',
    description: 'Sejarah latihan, sijil, dan CPD points',
    icon: BookOpen,
    requiresLogin: true,
    category: 'training'
  },
  {
    id: 'course-booking',
    name: 'Tempahan Kursus',
    description: 'Daftar untuk kursus dalaman dan luaran',
    icon: Calendar,
    requiresLogin: true,
    category: 'training'
  },
  // Communication
  {
    id: 'announcements',
    name: 'Pengumuman',
    description: 'Pengumuman terkini dari pengurusan dan HR',
    icon: Bell,
    requiresLogin: false,
    category: 'communication'
  },
  {
    id: 'internal-news',
    name: 'Berita Dalaman',
    description: 'Berita dan aktiviti dalaman SPPP',
    icon: Mail,
    requiresLogin: true,
    category: 'communication'
  }
];

const categoryColors = {
  hr: 'bg-blue-500',
  documents: 'bg-green-500',
  training: 'bg-orange-500',
  communication: 'bg-purple-500'
};

const categoryNames = {
  hr: 'Sumber Manusia',
  documents: 'Dokumen',
  training: 'Latihan',
  communication: 'Komunikasi'
};

export default function StaffPortalPage() {
  const categories = Object.keys(categoryNames) as (keyof typeof categoryNames)[];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Users className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Portal Staf</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Portal pekerja SPPP untuk akses kepada maklumat dalaman, perkhidmatan HR, 
                dan dokumen syarikat.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Login Section */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="max-w-md mx-auto">
                <div className="text-center mb-8">
                  <Lock className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Log Masuk</h2>
                  <p className="text-gray-600">
                    Gunakan ID pekerja dan kata laluan untuk mengakses perkhidmatan portal
                  </p>
                </div>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      ID Pekerja
                    </label>
                    <div className="relative">
                      <User className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Masukkan ID pekerja"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Kata Laluan
                    </label>
                    <div className="relative">
                      <Key className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="password"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Masukkan kata laluan"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Ingat saya
                      </label>
                    </div>
                    <div className="text-sm">
                      <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">
                        Lupa kata laluan?
                      </a>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    <LogIn className="h-5 w-5 mr-2" />
                    Log Masuk
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Perlukan bantuan? Hubungi{' '}
                    <a href="mailto:it-support@penangport.gov.my" className="text-blue-600 hover:text-blue-800 font-semibold">
                      IT Support
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Preview */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Perkhidmatan Portal
              </h2>
              <p className="text-lg text-gray-600">
                Perkhidmatan yang tersedia selepas log masuk
              </p>
            </div>

            {categories.map((category) => {
              const categoryServices = portalServices.filter(s => s.category === category);
              
              return (
                <div key={category} className="mb-12">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full ${categoryColors[category]} text-white mb-4`}>
                      <span className="font-semibold">{categoryNames[category]}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryServices.map((service) => {
                      const IconComponent = service.icon;
                      
                      return (
                        <div 
                          key={service.id}
                          className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${service.requiresLogin ? 'opacity-75' : ''}`}
                        >
                          <div className="text-center">
                            <div className={`inline-flex p-3 rounded-full ${categoryColors[category]} bg-opacity-10 mb-4`}>
                              <IconComponent className={`h-8 w-8 ${categoryColors[category].replace('bg-', 'text-')}`} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                              {service.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                              {service.description}
                            </p>
                            {service.requiresLogin && (
                              <div className="flex items-center justify-center text-xs text-gray-500 mb-3">
                                <Lock className="h-3 w-3 mr-1" />
                                Perlu log masuk
                              </div>
                            )}
                            <button
                              disabled={service.requiresLogin}
                              className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-300 ${
                                service.requiresLogin 
                                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                  : `${categoryColors[category]} text-white hover:opacity-90`
                              }`}
                            >
                              {service.requiresLogin ? 'Log Masuk Diperlukan' : 'Akses'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </section>

          {/* Quick Access */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
              <div className="text-center mb-8">
                <Clock className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Akses Pantas
                </h3>
                <p className="text-gray-600">
                  Pautan pantas untuk perkhidmatan yang kerap digunakan
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="#" className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Calendar className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                  <h4 className="font-bold text-gray-900 mb-2">Mohon Cuti</h4>
                  <p className="text-gray-600 text-sm">Permohonan cuti dalam talian</p>
                </a>
                <a href="#" className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Download className="h-10 w-10 mx-auto mb-3 text-green-600" />
                  <h4 className="font-bold text-gray-900 mb-2">Slip Gaji</h4>
                  <p className="text-gray-600 text-sm">Muat turun slip gaji</p>
                </a>
                <a href="#" className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <BookOpen className="h-10 w-10 mx-auto mb-3 text-orange-600" />
                  <h4 className="font-bold text-gray-900 mb-2">Rekod Latihan</h4>
                  <p className="text-gray-600 text-sm">Lihat rekod dan sijil</p>
                </a>
              </div>
            </div>
          </section>

          {/* System Notice */}
          <section className="mb-16">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
              <div className="flex items-center">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Notis Sistem</h3>
                  <p className="text-gray-700 mb-4">
                    Portal ini hanya untuk kegunaan pekerja SPPP yang sah. Sebarang penyalahgunaan akan diambil tindakan.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Gunakan ID pekerja dan kata laluan rasmi yang diberikan oleh HR</li>
                    <li>• Jangan berkongsi maklumat log masuk dengan orang lain</li>
                    <li>• Log keluar selepas selesai menggunakan portal</li>
                    <li>• Laporkan sebarang masalah kepada IT Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Support Information */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <Settings className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Sokongan Teknikal
              </h3>
              <p className="text-gray-600">
                Perlukan bantuan menggunakan portal? Hubungi pasukan IT kami
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Mail className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                <h4 className="font-bold text-gray-900 mb-2">E-mel</h4>
                <p className="text-gray-600 text-sm mb-2">it-support@penangport.gov.my</p>
                <p className="text-xs text-gray-500">Respons dalam 24 jam</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-3 text-green-600" />
                <h4 className="font-bold text-gray-900 mb-2">Telefon</h4>
                <p className="text-gray-600 text-sm mb-2">04-2101 2500 (ext. 250)</p>
                <p className="text-xs text-gray-500">Isnin - Jumaat, 8AM - 5PM</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-3 text-orange-600" />
                <h4 className="font-bold text-gray-900 mb-2">Waktu Operasi</h4>
                <p className="text-gray-600 text-sm mb-2">24/7 Online Access</p>
                <p className="text-xs text-gray-500">Support: Hari bekerja sahaja</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}