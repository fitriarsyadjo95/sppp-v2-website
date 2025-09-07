import { Metadata } from 'next';
import { 
  Users, 
  FileText, 
  BarChart3, 
  CheckCircle, 
  Clock,
  Award,
  Building2,
  TrendingUp,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Target
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Perundingan Teknikal | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Perkhidmatan perundingan teknikal profesional untuk pembangunan pelabuhan, logistik dan industri maritim',
};

interface ConsultationService {
  id: string;
  title: string;
  category: 'port-development' | 'operations' | 'engineering' | 'management';
  description: string;
  services: string[];
  deliverables: string[];
  duration: string;
  expertise: string[];
  icon: React.ElementType;
}

const consultationServices: ConsultationService[] = [
  // Port Development
  {
    id: 'port-planning',
    title: 'Perancangan & Pembangunan Pelabuhan',
    category: 'port-development',
    description: 'Perkhidmatan perundingan komprehensif untuk pembangunan dan pengembangan kemudahan pelabuhan.',
    services: [
      'Master planning untuk pembangunan pelabuhan',
      'Feasibility studies dan business case development',
      'Environmental impact assessment (EIA)',
      'Traffic demand forecasting dan capacity planning',
      'Port layout design dan optimization'
    ],
    deliverables: [
      'Comprehensive master plan report',
      'Financial feasibility analysis',
      'Environmental compliance documentation',
      'Technical drawings dan specifications',
      'Implementation roadmap'
    ],
    duration: '6-18 bulan',
    expertise: ['Port Planning', 'Marine Engineering', 'Environmental Studies', 'Economic Analysis'],
    icon: Building2
  },
  {
    id: 'infrastructure-design',
    title: 'Reka Bentuk Infrastruktur Maritim',
    category: 'engineering',
    description: 'Perkhidmatan kejuruteraan untuk reka bentuk dan pembangunan infrastruktur pelabuhan.',
    services: [
      'Marine structure design (berths, jetties, breakwaters)',
      'Dredging dan reclamation planning',
      'Utility infrastructure design',
      'Equipment specification dan procurement',
      'Construction supervision dan quality control'
    ],
    deliverables: [
      'Detailed engineering drawings',
      'Technical specifications',
      'Bill of quantities (BOQ)',
      'Construction methodology',
      'Quality assurance plans'
    ],
    duration: '4-12 bulan',
    expertise: ['Marine Engineering', 'Civil Engineering', 'Geotechnical', 'Construction Management'],
    icon: FileText
  },
  // Operations Consulting
  {
    id: 'operations-optimization',
    title: 'Optimisasi Operasi Pelabuhan',
    category: 'operations',
    description: 'Analisis dan peningkatan kecekapan operasi pelabuhan untuk produktiviti maksimum.',
    services: [
      'Terminal operations analysis',
      'Equipment utilization studies',
      'Process re-engineering',
      'Performance benchmarking',
      'Technology implementation support'
    ],
    deliverables: [
      'Operations assessment report',
      'Improvement recommendations',
      'Implementation plan',
      'KPI monitoring framework',
      'Staff training programs'
    ],
    duration: '3-9 bulan',
    expertise: ['Operations Management', 'Process Engineering', 'Data Analytics', 'Change Management'],
    icon: TrendingUp
  },
  {
    id: 'digital-transformation',
    title: 'Transformasi Digital Pelabuhan',
    category: 'operations',
    description: 'Panduan untuk implementasi teknologi digital dalam operasi pelabuhan.',
    services: [
      'Digital strategy development',
      'Technology needs assessment',
      'System integration planning',
      'Data analytics implementation',
      'Smart port technology consulting'
    ],
    deliverables: [
      'Digital transformation roadmap',
      'Technology architecture design',
      'Implementation timeline',
      'ROI analysis dan business case',
      'Change management strategy'
    ],
    duration: '6-15 bulan',
    expertise: ['Digital Strategy', 'IT Architecture', 'Data Science', 'IoT Solutions'],
    icon: BarChart3
  },
  // Management Consulting
  {
    id: 'strategic-planning',
    title: 'Perancangan Strategik',
    category: 'management',
    description: 'Pembangunan strategi jangka panjang untuk pertumbuhan dan daya saing pelabuhan.',
    services: [
      'Strategic planning workshops',
      'Market analysis dan competitor benchmarking',
      'Business model development',
      'Stakeholder engagement strategies',
      'Performance measurement systems'
    ],
    deliverables: [
      '5-year strategic plan',
      'Market positioning strategy',
      'Financial projections',
      'Risk assessment matrix',
      'Governance framework'
    ],
    duration: '4-8 bulan',
    expertise: ['Strategic Planning', 'Market Research', 'Financial Analysis', 'Risk Management'],
    icon: Target
  },
  {
    id: 'organizational-development',
    title: 'Pembangunan Organisasi',
    category: 'management',
    description: 'Penguatan kapasiti organisasi dan pembangunan sumber manusia.',
    services: [
      'Organizational structure review',
      'Job analysis dan role definition',
      'Competency framework development',
      'Training needs assessment',
      'Performance management systems'
    ],
    deliverables: [
      'Organizational restructuring plan',
      'Job descriptions dan specifications',
      'Training curriculum',
      'Performance evaluation framework',
      'Succession planning strategy'
    ],
    duration: '3-6 bulan',
    expertise: ['HR Management', 'Organizational Psychology', 'Training Development', 'Change Management'],
    icon: Users
  },
  // Specialized Services
  {
    id: 'sustainability-consulting',
    title: 'Kelestarian & Alam Sekitar',
    category: 'engineering',
    description: 'Perkhidmatan perundingan untuk pembangunan pelabuhan yang mampan dan mesra alam.',
    services: [
      'Environmental management systems',
      'Carbon footprint assessment',
      'Green port certification support',
      'Waste management strategies',
      'Renewable energy integration'
    ],
    deliverables: [
      'Sustainability assessment report',
      'Environmental management plan',
      'Carbon reduction roadmap',
      'Green certification documentation',
      'Monitoring protocols'
    ],
    duration: '4-10 bulan',
    expertise: ['Environmental Engineering', 'Sustainability', 'Renewable Energy', 'ISO 14001'],
    icon: Award
  }
];

const categoryColors = {
  'port-development': 'bg-blue-500',
  'operations': 'bg-green-500',
  'engineering': 'bg-orange-500',
  'management': 'bg-purple-500'
};

const categoryNames = {
  'port-development': 'Pembangunan Pelabuhan',
  'operations': 'Operasi',
  'engineering': 'Kejuruteraan',
  'management': 'Pengurusan'
};

export default function ConsultationPage() {
  const categories = Object.keys(categoryNames) as (keyof typeof categoryNames)[];

  return (
    <>

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Users className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Perundingan Teknikal</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Perkhidmatan perundingan profesional yang komprehensif untuk pembangunan, 
                operasi dan pengurusan pelabuhan yang cekap dan mampan.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Key Statistics */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Award className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">25+</div>
                <div className="text-gray-600 text-sm">Tahun Pengalaman</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Building2 className="h-10 w-10 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">100+</div>
                <div className="text-gray-600 text-sm">Projek Selesai</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Users className="h-10 w-10 mx-auto mb-3 text-orange-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-gray-600 text-sm">Pakar Teknikal</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <TrendingUp className="h-10 w-10 mx-auto mb-3 text-purple-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">15</div>
                <div className="text-gray-600 text-sm">Negara Dilayani</div>
              </div>
            </div>
          </section>

          {/* Consultation Services by Category */}
          {categories.map((category) => {
            const categoryServices = consultationServices.filter(s => s.category === category);
            
            return (
              <section key={category} className="mb-16">
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full ${categoryColors[category]} text-white mb-4`}>
                    <span className="font-semibold">{categoryNames[category]}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Perundingan {categoryNames[category]}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {categoryServices.map((service) => {
                    const IconComponent = service.icon;
                    
                    return (
                      <div 
                        key={service.id} 
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
                                    {service.title}
                                  </h3>
                                  <div className="flex items-center text-sm text-blue-600">
                                    <Clock className="h-4 w-4 mr-1" />
                                    Tempoh: {service.duration}
                                  </div>
                                </div>
                              </div>

                              <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                              </p>

                              <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Perkhidmatan yang Ditawarkan:</h4>
                                <ul className="space-y-2">
                                  {service.services.map((serviceItem, index) => (
                                    <li key={index} className="flex items-start text-sm text-gray-600">
                                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                      {serviceItem}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="lg:w-1/3">
                              <div className="bg-gray-50 rounded-lg p-6">
                                <h4 className="font-semibold text-gray-900 mb-4">Deliverables:</h4>
                                <ul className="space-y-2 mb-6">
                                  {service.deliverables.map((deliverable, index) => (
                                    <li key={index} className="flex items-start text-sm text-gray-600">
                                      <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                      {deliverable}
                                    </li>
                                  ))}
                                </ul>

                                <h4 className="font-semibold text-gray-900 mb-3">Kepakaran:</h4>
                                <div className="flex flex-wrap gap-2 mb-6">
                                  {service.expertise.map((skill, index) => (
                                    <span 
                                      key={index}
                                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded ${categoryColors[category]} bg-opacity-10 ${categoryColors[category].replace('bg-', 'text-')}`}
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>

                                <a 
                                  href="/contact"
                                  className={`w-full ${categoryColors[category]} text-white px-4 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 text-center inline-block`}
                                >
                                  Dapatkan Sebut Harga
                                </a>
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

          {/* Consultation Process */}
          <section className="mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Proses Perundingan
              </h3>
              <p className="text-gray-600">
                Pendekatan sistematik untuk memastikan kejayaan projek perundingan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Konsultasi Awal</h4>
                <p className="text-sm text-gray-600">Perbincangan keperluan dan objektif projek</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Kajian Awal</h4>
                <p className="text-sm text-gray-600">Analisis mendalam dan penilaian situasi semasa</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cadangan Penyelesaian</h4>
                <p className="text-sm text-gray-600">Pembangunan strategi dan rancangan tindakan</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  4
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Pelaksanaan</h4>
                <p className="text-sm text-gray-600">Sokongan implementasi dan monitoring progres</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  5
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Evaluasi</h4>
                <p className="text-sm text-gray-600">Penilaian hasil dan sokongan berterusan</p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mengapa Memilih Kami?
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h4 className="font-bold text-gray-900 mb-2">Kepakaran Terbukti</h4>
                  <p className="text-gray-600 text-sm">
                    25+ tahun pengalaman dalam industri pelabuhan dan maritim
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-green-600" />
                  <h4 className="font-bold text-gray-900 mb-2">Pasukan Pakar</h4>
                  <p className="text-gray-600 text-sm">
                    Jurutera dan konsultan bersijil dengan pengalaman antarabangsa
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                  <h4 className="font-bold text-gray-900 mb-2">Rekod Terbukti</h4>
                  <p className="text-gray-600 text-sm">
                    100+ projek berjaya di 15 negara dengan klien yang berpuas hati
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mulakan Projek Anda
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Hubungi pasukan perundingan kami untuk perbincangan awal mengenai 
                keperluan projek anda. Konsultasi awal adalah percuma.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                <h4 className="font-bold text-gray-900 mb-2">Telefon</h4>
                <p className="text-gray-600">+60 4-2101 2350</p>
                <p className="text-sm text-gray-500">Isnin - Jumaat, 8AM - 5PM</p>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 mx-auto mb-3 text-green-600" />
                <h4 className="font-bold text-gray-900 mb-2">E-mel</h4>
                <p className="text-gray-600">consultation@penangport.gov.my</p>
                <p className="text-sm text-gray-500">Respons dalam 24 jam</p>
              </div>
              <div className="text-center">
                <Calendar className="h-8 w-8 mx-auto mb-3 text-orange-600" />
                <h4 className="font-bold text-gray-900 mb-2">Temujanji</h4>
                <p className="text-gray-600">Tempah sesi konsultasi</p>
                <p className="text-sm text-gray-500">Online atau di pejabat</p>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                Hubungi Kami Sekarang
              </a>
            </div>
          </section>
        </div>
      </div>
        </>
  );
}