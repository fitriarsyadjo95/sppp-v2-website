import { Metadata } from 'next';
import { 
  FileText, 
  Shield, 
  Users, 
  Building2, 
  AlertTriangle,
  CheckCircle,
  Eye,
  Download,
  Search,
  Clock,
  Scale,
  Lock,
  Heart,
  Zap,
  Globe,
  Award,
  BookOpen,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dasar & Prosedur | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Dasar, prosedur, garis panduan dan standard operating procedures (SOP) Suruhanjaya Pelabuhan Pulau Pinang',
};

interface Policy {
  id: string;
  title: string;
  category: 'operational' | 'safety' | 'hr' | 'governance' | 'compliance' | 'quality' | 'environment' | 'security';
  description: string;
  version: string;
  effectiveDate: string;
  lastUpdated: string;
  department: string;
  fileSize: string;
  status: 'active' | 'draft' | 'archived';
  isPublic: boolean;
  summary: string[];
}

const policies: Policy[] = [
  {
    id: 'OP001',
    title: 'Prosedur Operasi Terminal Kontena',
    category: 'operational',
    description: 'Standard Operating Procedure (SOP) untuk semua operasi terminal kontena termasuk penerimaan kapal, pengendalian kargo, dan proses dokumentasi.',
    version: '3.2',
    effectiveDate: '1 Januari 2024',
    lastUpdated: '15 Mac 2024',
    department: 'Jabatan Operasi Terminal',
    fileSize: '12.5 MB',
    status: 'active',
    isPublic: true,
    summary: [
      'Prosedur penerimaan dan pemprosesan kapal',
      'Standard pengendalian kontena dan kargo',
      'Sistem dokumentasi dan clearance',
      'Koordinasi dengan agensi kerajaan'
    ]
  },
  {
    id: 'SF001', 
    title: 'Dasar Keselamatan dan Kesihatan Pekerjaan',
    category: 'safety',
    description: 'Dasar komprehensif mengenai keselamatan dan kesihatan di tempat kerja untuk semua pekerja dan pengunjung kawasan pelabuhan.',
    version: '2.8',
    effectiveDate: '1 Juli 2023',
    lastUpdated: '20 Februari 2024',
    department: 'Jabatan Keselamatan',
    fileSize: '8.7 MB',
    status: 'active',
    isPublic: true,
    summary: [
      'Standard keselamatan untuk semua operasi',
      'Penggunaan Personal Protective Equipment (PPE)',
      'Prosedur kecemasan dan emergency response',
      'Program latihan keselamatan'
    ]
  },
  {
    id: 'HR001',
    title: 'Polisi Sumber Manusia',
    category: 'hr',
    description: 'Garis panduan menyeluruh mengenai pengurusan sumber manusia termasuk pengambilan, penilaian prestasi, dan pembangunan kerjaya.',
    version: '4.1',
    effectiveDate: '1 April 2024',
    lastUpdated: '10 Mei 2024',
    department: 'Jabatan Sumber Manusia',
    fileSize: '15.3 MB',
    status: 'active',
    isPublic: false,
    summary: [
      'Proses pengambilan dan seleksi pekerja',
      'Sistem penilaian prestasi tahunan',
      'Program pembangunan kerjaya',
      'Faedah dan kebajikan pekerja'
    ]
  },
  {
    id: 'GV001',
    title: 'Kod Tatakelakuan Korporat',
    category: 'governance',
    description: 'Kod etika dan tatakelakuan untuk semua ahli lembaga pengarah, pengurusan kanan, dan pekerja SPPP.',
    version: '1.5',
    effectiveDate: '1 Januari 2023',
    lastUpdated: '5 September 2024',
    department: 'Pejabat Setiausaha Syarikat',
    fileSize: '6.2 MB',
    status: 'active',
    isPublic: true,
    summary: [
      'Standard etika dan integriti',
      'Prosedur pelaporan salah laku',
      'Pengurusan konflik kepentingan',
      'Tanggungjawab korporat'
    ]
  },
  {
    id: 'CP001',
    title: 'Prosedur Kepatuhan Regulatori',
    category: 'compliance',
    description: 'Garis panduan kepatuhan terhadap semua undang-undang, peraturan, dan standard industri yang berkaitan.',
    version: '2.3',
    effectiveDate: '15 Jun 2024',
    lastUpdated: '30 Ogos 2024',
    department: 'Jabatan Undang-undang & Kepatuhan',
    fileSize: '18.9 MB',
    status: 'active',
    isPublic: false,
    summary: [
      'Kepatuhan undang-undang maritim',
      'Standard ISPS dan keselamatan pelabuhan',
      'Peraturan alam sekitar',
      'Compliance audit dan monitoring'
    ]
  },
  {
    id: 'QL001',
    title: 'Sistem Pengurusan Kualiti ISO 9001:2015',
    category: 'quality',
    description: 'Dokumentasi lengkap sistem pengurusan kualiti berdasarkan standard ISO 9001:2015.',
    version: '3.0',
    effectiveDate: '1 Oktober 2023',
    lastUpdated: '12 Januari 2024',
    department: 'Jabatan Kualiti & Excellence',
    fileSize: '22.1 MB',
    status: 'active',
    isPublic: false,
    summary: [
      'Quality Management System framework',
      'Proses improvement berterusan',
      'Customer satisfaction metrics',
      'Internal audit procedures'
    ]
  },
  {
    id: 'EN001',
    title: 'Dasar Pengurusan Alam Sekitar',
    category: 'environment',
    description: 'Komitmen SPPP terhadap kelestarian alam sekitar dan prosedur pengurusan impak persekitaran.',
    version: '1.8',
    effectiveDate: '22 April 2024',
    lastUpdated: '15 Julai 2024',
    department: 'Jabatan Alam Sekitar & Kelestarian',
    fileSize: '11.4 MB',
    status: 'active',
    isPublic: true,
    summary: [
      'Komitmen kepada sustainability',
      'Program pengurangan carbon footprint',
      'Pengurusan sisa dan kitar semula',
      'Monitoring kualiti air dan udara'
    ]
  },
  {
    id: 'SC001',
    title: 'Polisi Keselamatan Siber',
    category: 'security',
    description: 'Garis panduan komprehensif untuk keselamatan maklumat dan sistem teknologi SPPP.',
    version: '2.1',
    effectiveDate: '1 Mac 2024',
    lastUpdated: '25 Jun 2024',
    department: 'Jabatan Teknologi Maklumat',
    fileSize: '9.8 MB',
    status: 'active',
    isPublic: false,
    summary: [
      'Standard keselamatan data dan sistem',
      'Protokol akses dan autentikasi',
      'Prosedur backup dan disaster recovery',
      'Incident response procedures'
    ]
  }
];

const categoryNames = {
  operational: 'Operasi',
  safety: 'Keselamatan',
  hr: 'Sumber Manusia',
  governance: 'Tadbir Urus',
  compliance: 'Kepatuhan',
  quality: 'Kualiti',
  environment: 'Alam Sekitar',
  security: 'Keselamatan Siber'
};

const categoryColors = {
  operational: 'bg-blue-500',
  safety: 'bg-red-500',
  hr: 'bg-purple-500',
  governance: 'bg-indigo-500',
  compliance: 'bg-orange-500',
  quality: 'bg-green-500',
  environment: 'bg-emerald-500',
  security: 'bg-gray-600'
};

const categoryIcons = {
  operational: Building2,
  safety: Shield,
  hr: Users,
  governance: Scale,
  compliance: CheckCircle,
  quality: Award,
  environment: Heart,
  security: Lock
};

export default function PoliciesPage() {
  const publicPolicies = policies.filter(p => p.isPublic);
  const internalPolicies = policies.filter(p => !p.isPublic);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <FileText className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Dasar & Prosedur</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Koleksi komprehensif dasar, prosedur operasi standard (SOP), 
                dan garis panduan yang mengatur operasi dan pengurusan SPPP.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Key Statistics */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <FileText className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{policies.length}</div>
                <div className="text-gray-600 text-sm">Dokumen Dasar</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Eye className="h-10 w-10 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{publicPolicies.length}</div>
                <div className="text-gray-600 text-sm">Akses Awam</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Clock className="h-10 w-10 mx-auto mb-3 text-orange-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">2024</div>
                <div className="text-gray-600 text-sm">Kemaskini Terkini</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <CheckCircle className="h-10 w-10 mx-auto mb-3 text-purple-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-gray-600 text-sm">Kepatuhan Standard</div>
              </div>
            </div>
          </section>

          {/* Search */}
          <section className="mb-8 bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input 
                    type="text" 
                    placeholder="Cari dasar atau prosedur..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <select className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Semua Kategori</option>
                {Object.entries(categoryNames).map(([key, name]) => (
                  <option key={key} value={key}>{name}</option>
                ))}
              </select>
            </div>
          </section>

          {/* Policy Categories */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kategori Dasar</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {Object.entries(categoryNames).map(([key, name]) => {
                const categoryKey = key as keyof typeof categoryIcons;
                const IconComponent = categoryIcons[categoryKey];
                const count = policies.filter(p => p.category === key).length;
                
                return (
                  <div key={key} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${categoryColors[categoryKey]} flex items-center justify-center`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{count}</div>
                    <div className="text-sm text-gray-600">Dokumen</div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Public Policies */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Dasar Akses Awam</h2>
            <div className="space-y-6">
              {publicPolicies.map((policy) => {
                const categoryKey = policy.category as keyof typeof categoryIcons;
                const IconComponent = categoryIcons[categoryKey];
                
                return (
                  <div key={policy.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`p-2 rounded-lg ${categoryColors[categoryKey]} bg-opacity-10`}>
                                <IconComponent className={`h-6 w-6 text-${categoryColors[categoryKey].split('-')[1]}-600`} />
                              </div>
                              <span className={`
                                px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[categoryKey]} text-white
                              `}>
                                {categoryNames[categoryKey]}
                              </span>
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                {policy.status === 'active' ? 'Aktif' : policy.status}
                              </span>
                            </div>
                            <div className="text-sm text-gray-500">
                              Kod: {policy.id}
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-3">{policy.title}</h3>
                          <p className="text-gray-700 mb-6">{policy.description}</p>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Kandungan Utama:</h4>
                            <ul className="space-y-2">
                              {policy.summary.map((item, index) => (
                                <li key={index} className="flex items-start text-sm text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2" />
                              <div>
                                <div className="font-semibold">Berkuatkuasa</div>
                                <div>{policy.effectiveDate}</div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Building2 className="h-4 w-4 mr-2" />
                              <div>
                                <div className="font-semibold">Jabatan</div>
                                <div>{policy.department}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="lg:w-80">
                          <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
                            <div className="mb-4">
                              <div className="text-sm font-semibold text-gray-900 mb-2">Maklumat Dokumen</div>
                              <div className="space-y-2 text-sm text-gray-600">
                                <div>Versi: <span className="font-semibold">{policy.version}</span></div>
                                <div>Saiz Fail: <span className="font-semibold">{policy.fileSize}</span></div>
                                <div>Kemaskini: <span className="font-semibold">{policy.lastUpdated}</span></div>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                                <Download className="h-4 w-4 mr-2" />
                                Muat Turun PDF
                              </button>
                              <button className="w-full bg-white text-blue-600 border-2 border-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 flex items-center justify-center">
                                <Eye className="h-4 w-4 mr-2" />
                                Baca Online
                              </button>
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                              <div className="flex items-start">
                                <Globe className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                                <div className="text-xs text-blue-700">
                                  <div className="font-semibold mb-1">Akses Awam</div>
                                  <div>Dokumen ini boleh diakses oleh orang ramai</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Internal Policies - Summary Only */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Lock className="h-6 w-6 text-gray-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Dasar Internal</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                Dasar dan prosedur berikut adalah untuk kegunaan dalaman organisasi. 
                Pekerja SPPP boleh mengaksesnya melalui portal dalaman.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {internalPolicies.map((policy) => {
                  const categoryKey = policy.category as keyof typeof categoryIcons;
                  const IconComponent = categoryIcons[categoryKey];
                  
                  return (
                    <div key={policy.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded ${categoryColors[categoryKey]} bg-opacity-10`}>
                            <IconComponent className={`h-4 w-4 text-${categoryColors[categoryKey].split('-')[1]}-600`} />
                          </div>
                          <span className={`
                            px-2 py-1 rounded text-xs font-semibold ${categoryColors[categoryKey]} text-white
                          `}>
                            {categoryNames[categoryKey]}
                          </span>
                        </div>
                        <Lock className="h-4 w-4 text-gray-400" />
                      </div>

                      <h3 className="font-semibold text-gray-900 mb-2">{policy.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{policy.description.slice(0, 120)}...</p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>Versi {policy.version}</span>
                        <span>{policy.department}</span>
                      </div>
                      
                      <div className="text-center">
                        <span className="text-sm text-gray-500">Akses dalaman sahaja</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 text-center p-6 bg-gray-50 rounded-lg">
                <Users className="h-8 w-8 mx-auto mb-3 text-gray-400" />
                <h3 className="font-semibold text-gray-900 mb-2">Pekerja SPPP</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Akses portal dalaman untuk mendapatkan dokumen dasar penuh
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Log Masuk Portal
                </button>
              </div>
            </div>
          </section>

          {/* Implementation Guidelines */}
          <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Garis Panduan Pelaksanaan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Untuk Pekerja</h3>
                <ol className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">1</span>
                    Baca dan fahami dasar yang berkaitan dengan tugas anda
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">2</span>
                    Sertai sesi briefing dan latihan yang diperlukan
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">3</span>
                    Laporkan sebarang ketidakpatuhan yang ditemui
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">4</span>
                    Kemaskini pengetahuan apabila dasar dipinda
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Untuk Kontraktor & Vendor</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Patuh kepada dasar keselamatan SPPP
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Ikuti prosedur operasi yang ditetapkan
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Dapatkan permit dan kelulusan diperlukan
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Sertakan dasar dalam kontrak
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Lapor incident mengikut prosedur
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                <div>
                  <div className="font-semibold text-yellow-900 mb-2">Penting!</div>
                  <div className="text-yellow-800 text-sm">
                    Semua pihak yang beroperasi di kawasan pelabuhan MESTI mematuhi dasar dan prosedur yang ditetapkan. 
                    Ketidakpatuhan boleh mengakibatkan tindakan tatatertib atau pembatalan permit.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Perlukan Bantuan atau Penjelasan?</h2>
            <p className="mb-6 text-blue-100">
              Hubungi jabatan berkaitan untuk penjelasan lanjut mengenai mana-mana dasar atau prosedur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:policy@pppp.gov.my"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center justify-center"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Email: policy@pppp.gov.my
              </a>
              <a 
                href="/contact"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300 inline-flex items-center justify-center"
              >
                <ArrowRight className="h-4 w-4 mr-2" />
                Hubungi Kami
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}