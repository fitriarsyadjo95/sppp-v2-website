import { Metadata } from 'next';
import { 
  GraduationCap, 
  Award, 
  Users, 
  Clock, 
  BookOpen,
  Shield,
  Ship,
  Calendar,
  CheckCircle,
  ArrowRight,
  Star,
  Globe
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Latihan & Pembangunan | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Program latihan profesional, sijil kompetensi, dan pembangunan kemahiran dalam industri maritim dan pelabuhan',
};

interface TrainingProgram {
  id: string;
  title: string;
  category: 'maritime' | 'port-operations' | 'safety' | 'management';
  description: string;
  duration: string;
  level: 'basic' | 'intermediate' | 'advanced';
  certification: string;
  prerequisites?: string;
  modules: string[];
  price: string;
  nextIntake: string;
  icon: React.ElementType;
}

const trainingPrograms: TrainingProgram[] = [
  // Maritime Training
  {
    id: 'basic-seamanship',
    title: 'Pelayaran Asas (Basic Seamanship)',
    category: 'maritime',
    description: 'Program asas untuk individu yang ingin memulakan kerjaya dalam industri maritim.',
    duration: '4 minggu (160 jam)',
    level: 'basic',
    certification: 'Sijil Pelayaran Asas SPPP',
    modules: [
      'Pengenalan industri maritim',
      'Keselamatan di atas kapal',
      'Penggunaan peralatan asas',
      'Komunikasi maritim',
      'Pertolongan cemas di laut'
    ],
    price: 'RM1,200',
    nextIntake: '15 Oktober 2024',
    icon: Ship
  },
  {
    id: 'deck-officer-training',
    title: 'Latihan Pegawai Dek',
    category: 'maritime',
    description: 'Program komprehensif untuk bakal pegawai dek kapal komersial.',
    duration: '12 minggu (480 jam)',
    level: 'intermediate',
    certification: 'Diploma Pegawai Dek (STCW Compliant)',
    prerequisites: 'Sijil Pelayaran Asas atau pengalaman 2 tahun',
    modules: [
      'Navigation dan chart work',
      'Cargo handling procedures',
      'Bridge resource management',
      'Maritime law dan regulations',
      'Emergency response procedures',
      'Ship stability dan construction'
    ],
    price: 'RM4,500',
    nextIntake: '1 November 2024',
    icon: Users
  },
  // Port Operations Training
  {
    id: 'crane-operator',
    title: 'Kendalian Kren Pelabuhan',
    category: 'port-operations',
    description: 'Latihan khusus untuk operator kren kontena dan kren bergerak.',
    duration: '6 minggu (240 jam)',
    level: 'intermediate',
    certification: 'Sijil Operator Kren Berlesen',
    prerequisites: 'Lesen memandu kelas D dan kesihatan fizikal baik',
    modules: [
      'Teknologi kren moden',
      'Prosedur keselamatan kren',
      'Maintenance dan inspection',
      'Load calculation dan rigging',
      'Emergency procedures'
    ],
    price: 'RM2,800',
    nextIntake: '20 Oktober 2024',
    icon: Shield
  },
  {
    id: 'container-operations',
    title: 'Operasi Terminal Kontena',
    category: 'port-operations',
    description: 'Program menyeluruh untuk pengurusan operasi terminal kontena.',
    duration: '8 minggu (320 jam)',
    level: 'advanced',
    certification: 'Diploma Pengurusan Terminal Kontena',
    prerequisites: 'Pengalaman 3 tahun dalam operasi pelabuhan',
    modules: [
      'Terminal Operating System (TOS)',
      'Container yard management',
      'Equipment optimization',
      'Performance metrics dan KPI',
      'Customer service excellence',
      'Environmental compliance'
    ],
    price: 'RM3,800',
    nextIntake: '5 November 2024',
    icon: BookOpen
  },
  // Safety Training
  {
    id: 'port-safety',
    title: 'Keselamatan Pelabuhan',
    category: 'safety',
    description: 'Program keselamatan komprehensif untuk semua pekerja pelabuhan.',
    duration: '2 minggu (80 jam)',
    level: 'basic',
    certification: 'Sijil Keselamatan Pelabuhan',
    modules: [
      'OSHA standards dan compliance',
      'Personal Protective Equipment (PPE)',
      'Hazard identification',
      'Emergency evacuation procedures',
      'First aid dan CPR'
    ],
    price: 'RM800',
    nextIntake: '25 Oktober 2024',
    icon: Shield
  },
  {
    id: 'dangerous-goods',
    title: 'Pengendalian Barang Berbahaya',
    category: 'safety',
    description: 'Latihan khusus untuk pengendalian kargo berbahaya (HAZMAT).',
    duration: '3 minggu (120 jam)',
    level: 'advanced',
    certification: 'Sijil IMDG Code Dangerous Goods',
    prerequisites: 'Sijil Keselamatan Pelabuhan',
    modules: [
      'IMDG Code requirements',
      'Classification sistem barang berbahaya',
      'Packaging dan labeling',
      'Storage dan segregation',
      'Emergency response procedures'
    ],
    price: 'RM2,200',
    nextIntake: '10 November 2024',
    icon: Shield
  },
  // Management Training
  {
    id: 'port-management',
    title: 'Pengurusan Pelabuhan',
    category: 'management',
    description: 'Program eksekutif untuk pengurusan dan kepimpinan pelabuhan.',
    duration: '10 minggu (400 jam)',
    level: 'advanced',
    certification: 'Diploma Eksekutif Pengurusan Pelabuhan',
    prerequisites: 'Pengalaman pengurusan 5 tahun atau degree',
    modules: [
      'Strategic port planning',
      'Financial management',
      'Operations optimization',
      'Stakeholder management',
      'Digital transformation',
      'Sustainable port development'
    ],
    price: 'RM6,500',
    nextIntake: '1 Disember 2024',
    icon: GraduationCap
  },
  {
    id: 'quality-management',
    title: 'Pengurusan Kualiti ISO',
    category: 'management',
    description: 'Sistem pengurusan kualiti untuk operasi pelabuhan.',
    duration: '4 minggu (160 jam)',
    level: 'intermediate',
    certification: 'Sijil ISO 9001:2015 Internal Auditor',
    modules: [
      'ISO 9001:2015 standards',
      'Process documentation',
      'Internal audit techniques',
      'Continuous improvement',
      'Risk management'
    ],
    price: 'RM2,500',
    nextIntake: '15 November 2024',
    icon: Award
  }
];

const categoryColors = {
  maritime: 'bg-blue-500',
  'port-operations': 'bg-green-500',
  safety: 'bg-red-500',
  management: 'bg-purple-500'
};

const categoryNames = {
  maritime: 'Maritim',
  'port-operations': 'Operasi Pelabuhan',
  safety: 'Keselamatan',
  management: 'Pengurusan'
};

const levelColors = {
  basic: 'text-green-600 bg-green-100',
  intermediate: 'text-yellow-600 bg-yellow-100',
  advanced: 'text-red-600 bg-red-100'
};

const levelNames = {
  basic: 'Asas',
  intermediate: 'Pertengahan',
  advanced: 'Lanjutan'
};

export default function TrainingPage() {
  const categories = Object.keys(categoryNames) as (keyof typeof categoryNames)[];

  return (
    <>

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <GraduationCap className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Latihan & Pembangunan</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Membangunkan kemahiran dan kompetensi profesional dalam industri maritim 
                dan pengurusan pelabuhan dengan program latihan yang diiktiraf.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Training Statistics */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Users className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">2,500+</div>
                <div className="text-gray-600 text-sm">Peserta Dilatih</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Award className="h-10 w-10 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">25</div>
                <div className="text-gray-600 text-sm">Program Tersedia</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Star className="h-10 w-10 mx-auto mb-3 text-orange-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
                <div className="text-gray-600 text-sm">Kadar Lulus</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Globe className="h-10 w-10 mx-auto mb-3 text-purple-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-gray-600 text-sm">Negara Peserta</div>
              </div>
            </div>
          </section>

          {/* Training Programs by Category */}
          {categories.map((category) => {
            const categoryPrograms = trainingPrograms.filter(p => p.category === category);
            
            return (
              <section key={category} className="mb-16">
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full ${categoryColors[category]} text-white mb-4`}>
                    <span className="font-semibold">{categoryNames[category]}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Program {categoryNames[category]}
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {categoryPrograms.map((program) => {
                    const IconComponent = program.icon;
                    
                    return (
                      <div 
                        key={program.id} 
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="p-8">
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                              <div className={`p-3 rounded-lg ${categoryColors[category]} bg-opacity-10 mr-4`}>
                                <IconComponent className={`h-8 w-8 ${categoryColors[category].replace('bg-', 'text-')}`} />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                  {program.title}
                                </h3>
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${levelColors[program.level]}`}>
                                  {levelNames[program.level]}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {program.description}
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <Clock className="h-5 w-5 mx-auto mb-2 text-gray-600" />
                              <div className="text-sm font-semibold text-gray-900">{program.duration}</div>
                              <div className="text-xs text-gray-600">Tempoh</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <Calendar className="h-5 w-5 mx-auto mb-2 text-gray-600" />
                              <div className="text-sm font-semibold text-gray-900">{program.nextIntake}</div>
                              <div className="text-xs text-gray-600">Intake Seterusnya</div>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Modul Pembelajaran:</h4>
                            <ul className="space-y-2">
                              {program.modules.slice(0, 4).map((module, index) => (
                                <li key={index} className="flex items-start text-sm text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                  {module}
                                </li>
                              ))}
                              {program.modules.length > 4 && (
                                <li className="text-sm text-gray-500 italic">
                                  ...dan {program.modules.length - 4} modul lagi
                                </li>
                              )}
                            </ul>
                          </div>

                          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold text-gray-900">Sijil:</div>
                                <div className="text-sm text-gray-600">{program.certification}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-blue-600">{program.price}</div>
                                <div className="text-sm text-gray-600">per peserta</div>
                              </div>
                            </div>
                          </div>

                          {program.prerequisites && (
                            <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                              <div className="font-semibold text-gray-900 text-sm mb-1">Prasyarat:</div>
                              <div className="text-sm text-gray-600">{program.prerequisites}</div>
                            </div>
                          )}

                          <div className="flex gap-3">
                            <a 
                              href="/training/registration"
                              className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-center"
                            >
                              Daftar Sekarang
                            </a>
                            <a 
                              href={`/training/programs#${program.id}`}
                              className="px-4 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:border-gray-400 transition-colors duration-300 text-center"
                            >
                              Maklumat Lanjut
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}

          {/* Training Facilities */}
          <section className="mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Kemudahan Latihan
              </h3>
              <p className="text-gray-600">
                Kemudahan moden dan lengkap untuk pembelajaran yang berkesan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h4 className="font-bold text-gray-900 mb-2">Bilik Kuliah Moden</h4>
                <p className="text-gray-600 text-sm">
                  10 bilik kuliah dengan teknologi audio-visual terkini dan kapasiti 30-50 peserta
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <Ship className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h4 className="font-bold text-gray-900 mb-2">Simulator Maritim</h4>
                <p className="text-gray-600 text-sm">
                  Full mission bridge simulator dan engine room simulator untuk latihan realistik
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <Shield className="h-12 w-12 mx-auto mb-4 text-red-600" />
                <h4 className="font-bold text-gray-900 mb-2">Pusat Latihan Keselamatan</h4>
                <p className="text-gray-600 text-sm">
                  Kemudahan firefighting, confined space, dan emergency response training
                </p>
              </div>
            </div>
          </section>

          {/* Certification and Accreditation */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <Award className="h-12 w-12 mx-auto mb-4 text-yellow-600" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Sijil & Akreditasi
                </h3>
                <p className="text-gray-600">
                  Program latihan kami diiktiraf oleh badan professional antarabangsa
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">STCW Compliant</h4>
                  <p className="text-sm text-gray-600">
                    Standards of Training, Certification and Watchkeeping
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">ISO Certified</h4>
                  <p className="text-sm text-gray-600">
                    ISO 9001:2015 Quality Management System
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-8 w-8 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">HRDF Approved</h4>
                  <p className="text-sm text-gray-600">
                    Human Resources Development Fund Malaysia
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">MQA Approved</h4>
                  <p className="text-sm text-gray-600">
                    Malaysian Qualifications Agency
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Registration Call-to-Action */}
          <section className="text-center bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sertai Program Latihan Kami
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Tingkatkan kemahiran dan kualifikasi profesional anda dalam industri maritim. 
              Hubungi kami untuk maklumat pendaftaran dan jadual kursus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/training/registration"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center justify-center"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Daftar Program
              </a>
              <a 
                href="/training/schedule"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 inline-flex items-center justify-center"
              >
                <Clock className="h-5 w-5 mr-2" />
                Lihat Jadual
              </a>
              <a 
                href="/contact"
                className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 inline-flex items-center justify-center"
              >
                <ArrowRight className="h-5 w-5 mr-2" />
                Hubungi Kami
              </a>
            </div>
          </section>
        </div>
      </div>
        </>
  );
}