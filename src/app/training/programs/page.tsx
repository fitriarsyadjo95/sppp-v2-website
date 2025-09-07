import { Metadata } from 'next';
import { 
  GraduationCap, 
  Award, 
  Users, 
  Clock, 
  BookOpen,
  Shield,
  Ship,
  CheckCircle,
  ArrowRight,
  Star,
  Calendar,
  Target
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Program Latihan | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Program latihan komprehensif untuk pembangunan kemahiran dalam industri maritim dan pengurusan pelabuhan',
};

interface TrainingProgram {
  id: string;
  title: string;
  category: 'foundation' | 'intermediate' | 'advanced' | 'leadership';
  description: string;
  duration: string;
  modules: string[];
  prerequisites: string[];
  outcomes: string[];
  certification: string;
  price: string;
  nextIntake: string;
  maxParticipants: number;
  icon: React.ElementType;
}

const trainingPrograms: TrainingProgram[] = [
  // Foundation Programs
  {
    id: 'maritime-fundamentals',
    title: 'Asas Maritim dan Pelabuhan',
    category: 'foundation',
    description: 'Program asas untuk memahami industri maritim dan operasi pelabuhan bagi individu baharu.',
    duration: '2 minggu (80 jam)',
    modules: [
      'Pengenalan industri maritim Malaysia',
      'Struktur dan organisasi pelabuhan',
      'Jenis-jenis kapal dan kargo',
      'Proses import dan export',
      'Keselamatan asas di pelabuhan',
      'Perundangan dan compliance'
    ],
    prerequisites: ['SPM atau setaraf', 'Kemahiran komunikasi asas'],
    outcomes: [
      'Memahami operasi pelabuhan',
      'Mengenali jenis kapal dan kargo',
      'Kefahaman perundangan asas',
      'Awareness keselamatan'
    ],
    certification: 'Sijil Asas Maritim SPPP',
    price: 'RM800',
    nextIntake: '15 Oktober 2024',
    maxParticipants: 30,
    icon: BookOpen
  },
  {
    id: 'port-safety-basic',
    title: 'Keselamatan Pelabuhan Asas',
    category: 'foundation',
    description: 'Program keselamatan wajib untuk semua pekerja baharu di kawasan pelabuhan.',
    duration: '1 minggu (40 jam)',
    modules: [
      'OSHA standards dan requirements',
      'Personal Protective Equipment (PPE)',
      'Hazard identification dan risk assessment',
      'Emergency procedures',
      'First Aid dan CPR',
      'Safety communication'
    ],
    prerequisites: ['Kesihatan fizikal yang baik'],
    outcomes: [
      'Sijil CPR dan First Aid',
      'Compliance dengan OSHA',
      'Safety awareness tinggi',
      'Emergency response skills'
    ],
    certification: 'Sijil Keselamatan Pelabuhan (Asas)',
    price: 'RM500',
    nextIntake: '1 Oktober 2024',
    maxParticipants: 25,
    icon: Shield
  },
  // Intermediate Programs  
  {
    id: 'container-operations',
    title: 'Operasi Terminal Kontena',
    category: 'intermediate',
    description: 'Program komprehensif untuk operator terminal kontena dan yard management.',
    duration: '4 minggu (160 jam)',
    modules: [
      'Container handling procedures',
      'Terminal Operating System (TOS)',
      'Crane operations dan safety',
      'Yard planning dan optimization',
      'Equipment maintenance',
      'Performance metrics dan KPI'
    ],
    prerequisites: ['Sijil Asas Maritim', 'Pengalaman 1 tahun'],
    outcomes: [
      'Mahir dalam TOS operation',
      'Container handling expertise',
      'Yard management skills',
      'Equipment operation certified'
    ],
    certification: 'Diploma Operasi Terminal Kontena',
    price: 'RM2,500',
    nextIntake: '5 November 2024',
    maxParticipants: 20,
    icon: Users
  },
  {
    id: 'cargo-handling',
    title: 'Pengendalian Kargo Khusus',
    category: 'intermediate',
    description: 'Latihan untuk pengendalian kargo berbahaya, project cargo dan kargo sensitif.',
    duration: '3 minggu (120 jam)',
    modules: [
      'IMDG Code dan dangerous goods',
      'Heavy lift dan project cargo',
      'Refrigerated cargo handling',
      'Cargo securing dan lashing',
      'Documentation dan compliance',
      'Emergency response procedures'
    ],
    prerequisites: ['Sijil Keselamatan Pelabuhan', 'Pengalaman 2 tahun'],
    outcomes: [
      'IMDG Code certification',
      'Specialized cargo handling',
      'Risk management skills',
      'Compliance expertise'
    ],
    certification: 'Sijil Pengendalian Kargo Khusus',
    price: 'RM1,800',
    nextIntake: '20 Oktober 2024',
    maxParticipants: 15,
    icon: Ship
  },
  // Advanced Programs
  {
    id: 'port-management',
    title: 'Pengurusan Pelabuhan Lanjutan',
    category: 'advanced',
    description: 'Program eksekutif untuk pengurusan operasi pelabuhan dan strategic planning.',
    duration: '6 minggu (240 jam)',
    modules: [
      'Strategic port planning',
      'Financial management dan budgeting',
      'Stakeholder management',
      'Digital transformation',
      'Sustainability dan environmental',
      'International best practices'
    ],
    prerequisites: ['Degree qualification', 'Pengalaman pengurusan 3 tahun'],
    outcomes: [
      'Strategic planning skills',
      'Financial management expertise',
      'Leadership capabilities',
      'Industry networking'
    ],
    certification: 'Diploma Eksekutif Pengurusan Pelabuhan',
    price: 'RM5,500',
    nextIntake: '1 Disember 2024',
    maxParticipants: 12,
    icon: Target
  },
  {
    id: 'digital-port-systems',
    title: 'Sistem Digital Pelabuhan',
    category: 'advanced',
    description: 'Program untuk implementasi dan pengurusan sistem teknologi pelabuhan.',
    duration: '5 minggu (200 jam)',
    modules: [
      'Port Community Systems (PCS)',
      'IoT dan sensor networks',
      'Data analytics dan AI',
      'Cybersecurity untuk ports',
      'System integration',
      'Digital transformation strategy'
    ],
    prerequisites: ['IT background', 'Port operations knowledge'],
    outcomes: [
      'Digital system expertise',
      'IT project management',
      'Data analytics skills',
      'Cybersecurity awareness'
    ],
    certification: 'Sijil Sistem Digital Pelabuhan',
    price: 'RM4,200',
    nextIntake: '15 November 2024',
    maxParticipants: 10,
    icon: GraduationCap
  },
  // Leadership Programs
  {
    id: 'maritime-leadership',
    title: 'Kepimpinan Maritim',
    category: 'leadership',
    description: 'Program pembangunan kepimpinan untuk eksekutif industri maritim.',
    duration: '8 minggu (320 jam)',
    modules: [
      'Leadership theory dan practice',
      'Strategic thinking dan vision',
      'Change management',
      'Team building dan motivation',
      'Crisis management',
      'Global maritime trends'
    ],
    prerequisites: ['Senior management position', 'Pengalaman 5+ tahun'],
    outcomes: [
      'Advanced leadership skills',
      'Strategic thinking ability',
      'Crisis management expertise',
      'Industry leadership network'
    ],
    certification: 'Certificate in Maritime Leadership Excellence',
    price: 'RM8,000',
    nextIntake: '10 Januari 2025',
    maxParticipants: 8,
    icon: Award
  }
];

const categoryColors = {
  foundation: 'bg-green-500',
  intermediate: 'bg-blue-500', 
  advanced: 'bg-orange-500',
  leadership: 'bg-purple-500'
};

const categoryNames = {
  foundation: 'Program Asas',
  intermediate: 'Program Pertengahan',
  advanced: 'Program Lanjutan', 
  leadership: 'Program Kepimpinan'
};

export default function TrainingProgramsPage() {
  const categories = Object.keys(categoryNames) as (keyof typeof categoryNames)[];

  return (
    <>

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <GraduationCap className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Program Latihan</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Program latihan yang komprehensif dan berstruktur untuk pembangunan 
                kemahiran dan kompetensi dalam industri maritim dan pelabuhan.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Program Statistics */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <BookOpen className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">25+</div>
                <div className="text-gray-600 text-sm">Program Tersedia</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Users className="h-10 w-10 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">2,500+</div>
                <div className="text-gray-600 text-sm">Peserta Dilatih</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Award className="h-10 w-10 mx-auto mb-3 text-orange-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
                <div className="text-gray-600 text-sm">Kadar Lulus</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Star className="h-10 w-10 mx-auto mb-3 text-purple-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">4.8/5</div>
                <div className="text-gray-600 text-sm">Rating Peserta</div>
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
                    {categoryNames[category]}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {categoryPrograms.map((program) => {
                    const IconComponent = program.icon;
                    
                    return (
                      <div 
                        key={program.id} 
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="p-8">
                          <div className="flex flex-col lg:flex-row gap-8">
                            <div className="lg:w-2/3">
                              <div className="flex items-center mb-6">
                                <div className={`p-3 rounded-lg ${categoryColors[category]} bg-opacity-10 mr-4`}>
                                  <IconComponent className={`h-8 w-8 ${categoryColors[category].replace('bg-', 'text-')}`} />
                                </div>
                                <div>
                                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                                    {program.title}
                                  </h3>
                                  <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center">
                                      <Clock className="h-4 w-4 mr-1" />
                                      {program.duration}
                                    </div>
                                    <div className="flex items-center">
                                      <Users className="h-4 w-4 mr-1" />
                                      Max {program.maxParticipants} peserta
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <p className="text-gray-600 mb-6 leading-relaxed">
                                {program.description}
                              </p>

                              <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Modul Pembelajaran:</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {program.modules.map((module, index) => (
                                    <div key={index} className="flex items-start text-sm text-gray-600">
                                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                      {module}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Hasil Pembelajaran:</h4>
                                <ul className="space-y-2">
                                  {program.outcomes.map((outcome, index) => (
                                    <li key={index} className="flex items-start text-sm text-gray-600">
                                      <Target className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                      {outcome}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="lg:w-1/3">
                              <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
                                <div className="text-center mb-6">
                                  <div className="text-3xl font-bold text-gray-900 mb-2">
                                    {program.price}
                                  </div>
                                  <div className="text-sm text-gray-500">per peserta</div>
                                </div>

                                <div className="space-y-4 mb-6">
                                  <div>
                                    <div className="font-semibold text-gray-900 text-sm">Intake Seterusnya:</div>
                                    <div className="text-blue-600 font-semibold">{program.nextIntake}</div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-gray-900 text-sm">Sijil:</div>
                                    <div className="text-gray-600 text-sm">{program.certification}</div>
                                  </div>
                                </div>

                                {program.prerequisites.length > 0 && (
                                  <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                                    <div className="font-semibold text-yellow-900 text-sm mb-2">Prasyarat:</div>
                                    <ul className="text-xs text-yellow-700 space-y-1">
                                      {program.prerequisites.map((prereq, index) => (
                                        <li key={index}>• {prereq}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                <div className="space-y-3">
                                  <a 
                                    href="/training/registration"
                                    className={`w-full ${categoryColors[category]} text-white px-4 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 text-center inline-block`}
                                  >
                                    Daftar Sekarang
                                  </a>
                                  <a 
                                    href="/training/schedule"
                                    className="w-full bg-white text-gray-700 border-2 border-gray-300 px-4 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors duration-300 text-center inline-block"
                                  >
                                    Lihat Jadual
                                  </a>
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
            );
          })}

          {/* Learning Pathways */}
          <section className="mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
            <div className="text-center mb-8">
              <ArrowRight className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Laluan Pembelajaran
              </h3>
              <p className="text-gray-600">
                Cadangan laluan pembelajaran mengikut kerjaya dan objektif
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <Ship className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h4 className="font-bold text-gray-900 mb-2">Operasi Pelabuhan</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>1. Asas Maritim</p>
                  <p>2. Keselamatan Pelabuhan</p>
                  <p>3. Operasi Terminal Kontena</p>
                  <p>4. Pengendalian Kargo Khusus</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <GraduationCap className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h4 className="font-bold text-gray-900 mb-2">Teknologi & Sistem</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>1. Asas Maritim</p>
                  <p>2. Operasi Terminal</p>
                  <p>3. Sistem Digital Pelabuhan</p>
                  <p>4. Pengurusan Lanjutan</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <Award className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                <h4 className="font-bold text-gray-900 mb-2">Kepimpinan Eksekutif</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>1. Operasi Terminal</p>
                  <p>2. Pengurusan Pelabuhan</p>
                  <p>3. Sistem Digital</p>
                  <p>4. Kepimpinan Maritim</p>
                </div>
              </div>
            </div>
          </section>

          {/* Registration Call-to-Action */}
          <section className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Mulakan Perjalanan Pembelajaran Anda
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Sertai program latihan yang sesuai dengan kerjaya dan objektif anda. 
              Dapatkan sijil yang diiktiraf industri dan tingkatkan peluang kerjaya.
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