import { Metadata } from 'next';
import { 
  Server, 
  Wifi, 
  Shield, 
  Monitor, 
  Database,
  Cloud,
  Smartphone,
  Settings,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  Lock,
  BarChart3
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Teknologi & Sistem | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Sistem teknologi maklumat dan infrastruktur digital untuk operasi pelabuhan yang cekap dan selamat',
};

interface TechSystem {
  id: string;
  name: string;
  category: 'operations' | 'security' | 'communication' | 'infrastructure';
  description: string;
  features: string[];
  specifications: string[];
  benefits: string[];
  status: 'operational' | 'upgrading' | 'planned';
  icon: React.ElementType;
}

const techSystems: TechSystem[] = [
  // Operations Systems
  {
    id: 'tos',
    name: 'Terminal Operating System (TOS)',
    category: 'operations',
    description: 'Sistem pengurusan operasi terminal yang mengintegrasikan semua aktiviti pelabuhan dalam satu platform.',
    features: [
      'Real-time berth planning dan vessel scheduling',
      'Container yard management dengan GPS tracking',
      'Equipment dispatch dan monitoring',
      'Automated gate processing',
      'Integration dengan kastam dan agensi kerajaan'
    ],
    specifications: [
      'Platform: Web-based dengan mobile apps',
      'Database: Oracle Enterprise dengan clustering',
      'Uptime: 99.9% availability',
      'Capacity: 50,000 container moves per day',
      'Integration: 15+ external systems'
    ],
    benefits: [
      'Pengurangan masa dwel kontena sebanyak 30%',
      'Peningkatan produktiviti crane sebanyak 25%',
      'Automated billing dan invoicing',
      'Real-time visibility untuk semua stakeholders'
    ],
    status: 'operational',
    icon: Monitor
  },
  {
    id: 'port-community-system',
    name: 'Port Community System (PCS)',
    category: 'operations',
    description: 'Platform digital yang menghubungkan semua stakeholder pelabuhan untuk pertukaran maklumat dan dokumen.',
    features: [
      'Electronic Data Interchange (EDI)',
      'Digital documentation processing',
      'Real-time cargo tracking',
      'Customs clearance integration',
      'Multi-party collaboration tools'
    ],
    specifications: [
      'Standards: UN/EDIFACT, XML, API REST',
      'Security: End-to-end encryption',
      'Users: 500+ registered companies',
      'Transactions: 10,000+ daily',
      'Response time: <2 seconds average'
    ],
    benefits: [
      'Pengurangan paperwork sebanyak 80%',
      'Faster customs clearance process',
      'Improved data accuracy',
      'Cost savings untuk shipping lines'
    ],
    status: 'operational',
    icon: Globe
  },
  // Security Systems
  {
    id: 'cctv-surveillance',
    name: 'Sistem Pengawasan CCTV',
    category: 'security',
    description: 'Sistem pengawasan video komprehensif dengan teknologi AI untuk keselamatan pelabuhan 24/7.',
    features: [
      'HD cameras dengan night vision',
      'AI-powered threat detection',
      'Facial recognition system',
      'License plate recognition',
      'Mobile monitoring applications'
    ],
    specifications: [
      'Cameras: 200+ HD/4K units',
      'Coverage: 100% kawasan kritikal',
      'Storage: 30 hari recording',
      'AI Analytics: Real-time processing',
      'Control room: 24/7 monitoring'
    ],
    benefits: [
      '50% pengurangan dalam insiden keselamatan',
      'Faster emergency response time',
      'Evidence untuk siasatan',
      'Compliance dengan ISPS Code'
    ],
    status: 'operational',
    icon: Shield
  },
  {
    id: 'access-control',
    name: 'Sistem Kawalan Akses',
    category: 'security',
    description: 'Sistem kawalan masuk yang menggunakan biometrik dan kad pintar untuk keselamatan berlapis.',
    features: [
      'Biometric fingerprint scanners',
      'Smart card authentication',
      'Visitor management system',
      'Vehicle access control',
      'Real-time access logging'
    ],
    specifications: [
      'Gates: 12 automated entry points',
      'Biometric: Fingerprint + facial',
      'Cards: RFID smart cards',
      'Database: Centralized user management',
      'Backup: Battery backup systems'
    ],
    benefits: [
      'Enhanced security compliance',
      'Automated visitor tracking',
      'Reduced security manpower',
      'Audit trail untuk compliance'
    ],
    status: 'operational',
    icon: Lock
  },
  // Communication Systems
  {
    id: 'vts-system',
    name: 'Vessel Traffic Service (VTS)',
    category: 'communication',
    description: 'Sistem kawalan trafik kapal dengan radar dan komunikasi radio untuk navigasi selamat.',
    features: [
      'Radar surveillance coverage',
      'VHF radio communication',
      'AIS vessel tracking',
      'Weather monitoring integration',
      'Emergency coordination center'
    ],
    specifications: [
      'Radar range: 25 nautical miles',
      'VHF channels: 16, 12, 14',
      'AIS coverage: Class A & B vessels',
      'Weather stations: 5 locations',
      'Operation: 24/7/365'
    ],
    benefits: [
      'Zero major navigation accidents',
      'Efficient berth allocation',
      'Reduced waiting time',
      'Enhanced maritime safety'
    ],
    status: 'operational',
    icon: Wifi
  },
  {
    id: 'fiber-network',
    name: 'Rangkaian Fiber Optik',
    category: 'infrastructure',
    description: 'Infrastruktur rangkaian fiber optik berkelajuan tinggi untuk konektiviti seluruh pelabuhan.',
    features: [
      'High-speed fiber optic backbone',
      'Redundant network paths',
      'Managed switches dan routers',
      'Wi-Fi hotspots untuk visitors',
      'Direct internet connectivity'
    ],
    specifications: [
      'Bandwidth: 10 Gbps backbone',
      'Fiber cable: 50+ km installed',
      'Network points: 500+ locations',
      'Wi-Fi zones: 20 public areas',
      'Uptime: 99.95% availability'
    ],
    benefits: [
      'High-speed data transmission',
      'Reliable communication',
      'Support untuk IoT devices',
      'Future-ready infrastructure'
    ],
    status: 'operational',
    icon: Zap
  },
  // Planned/Upgrading Systems
  {
    id: 'iot-sensors',
    name: 'IoT Sensor Network',
    category: 'infrastructure',
    description: 'Rangkaian sensor IoT untuk monitoring persekitaran dan peralatan secara real-time.',
    features: [
      'Environmental monitoring sensors',
      'Equipment health monitoring',
      'Energy consumption tracking',
      'Predictive maintenance alerts',
      'Data analytics dashboard'
    ],
    specifications: [
      'Sensors: 1,000+ deployment planned',
      'Connectivity: LoRaWAN network',
      'Data: Real-time streaming',
      'Analytics: Machine learning',
      'Dashboard: Web dan mobile'
    ],
    benefits: [
      'Predictive maintenance savings',
      'Environmental compliance',
      'Energy optimization',
      'Operational insights'
    ],
    status: 'planned',
    icon: Database
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Computing Platform',
    category: 'infrastructure',
    description: 'Migrasi ke platform cloud hybrid untuk skalabiliti dan disaster recovery.',
    features: [
      'Hybrid cloud architecture',
      'Auto-scaling capabilities',
      'Disaster recovery site',
      'Data backup automation',
      'Cloud-native applications'
    ],
    specifications: [
      'Provider: Multi-cloud strategy',
      'Compute: Auto-scaling instances',
      'Storage: Petabyte-scale',
      'Backup: Geographic replication',
      'Security: Zero-trust model'
    ],
    benefits: [
      '40% reduction in IT costs',
      'Improved system reliability',
      'Faster application deployment',
      'Enhanced disaster recovery'
    ],
    status: 'upgrading',
    icon: Cloud
  }
];

const categoryColors = {
  operations: 'bg-blue-500',
  security: 'bg-red-500',
  communication: 'bg-green-500',
  infrastructure: 'bg-purple-500'
};

const categoryNames = {
  operations: 'Sistem Operasi',
  security: 'Sistem Keselamatan',
  communication: 'Sistem Komunikasi',
  infrastructure: 'Infrastruktur IT'
};

const statusColors = {
  operational: 'text-green-600 bg-green-100',
  upgrading: 'text-yellow-600 bg-yellow-100',
  planned: 'text-blue-600 bg-blue-100'
};

const statusNames = {
  operational: 'Operasi',
  upgrading: 'Naik Taraf',
  planned: 'Perancangan'
};

export default function TechnologyPage() {
  const categories = Object.keys(categoryNames) as (keyof typeof categoryNames)[];

  return (
    <>

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Server className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Teknologi & Sistem</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Infrastruktur teknologi maklumat yang canggih untuk menyokong 
                operasi pelabuhan yang cekap, selamat dan berdaya saing.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Technology Overview */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Monitor className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-gray-600 text-sm">Sistem Utama</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Zap className="h-10 w-10 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">99.9%</div>
                <div className="text-gray-600 text-sm">Uptime</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Database className="h-10 w-10 mx-auto mb-3 text-orange-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">50TB</div>
                <div className="text-gray-600 text-sm">Data Storage</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Shield className="h-10 w-10 mx-auto mb-3 text-purple-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-gray-600 text-sm">Monitoring</div>
              </div>
            </div>
          </section>

          {/* Technology Systems by Category */}
          {categories.map((category) => {
            const categorySystems = techSystems.filter(s => s.category === category);
            
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {categorySystems.map((system) => {
                    const IconComponent = system.icon;
                    
                    return (
                      <div 
                        key={system.id} 
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
                                  {system.name}
                                </h3>
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[system.status]}`}>
                                  {statusNames[system.status]}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {system.description}
                          </p>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Ciri-ciri Utama:</h4>
                            <ul className="space-y-2">
                              {system.features.map((feature, index) => (
                                <li key={index} className="flex items-start text-sm text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Spesifikasi Teknikal:</h4>
                            <ul className="space-y-2">
                              {system.specifications.map((spec, index) => (
                                <li key={index} className="flex items-start text-sm text-gray-600">
                                  <ArrowRight className="h-4 w-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                  {spec}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-6 p-4 bg-green-50 rounded-lg">
                            <h4 className="font-semibold text-green-900 mb-3">Manfaat:</h4>
                            <ul className="space-y-1">
                              {system.benefits.map((benefit, index) => (
                                <li key={index} className="text-sm text-green-700">
                                  • {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}

          {/* Future Roadmap */}
          <section className="mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
            <div className="text-center mb-8">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Roadmap Teknologi 2024-2026
              </h3>
              <p className="text-gray-600">
                Rancangan pembangunan teknologi untuk masa hadapan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  2024
                </div>
                <h4 className="font-bold text-gray-900 mb-2">IoT Implementation</h4>
                <p className="text-gray-600 text-sm">Deployment sensor network untuk monitoring real-time</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  2025
                </div>
                <h4 className="font-bold text-gray-900 mb-2">AI & Machine Learning</h4>
                <p className="text-gray-600 text-sm">Predictive analytics dan automated decision making</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  2026
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Autonomous Operations</h4>
                <p className="text-gray-600 text-sm">Semi-autonomous equipment dan smart port integration</p>
              </div>
            </div>
          </section>

          {/* Contact and Support */}
          <section className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sokongan Teknikal
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Untuk maklumat lanjut tentang sistem teknologi atau sokongan teknikal, 
              hubungi Jabatan Teknologi Maklumat kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center justify-center"
              >
                <Smartphone className="h-5 w-5 mr-2" />
                Hubungi IT Support
              </a>
              <a 
                href="/infrastructure/facilities"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 inline-flex items-center justify-center"
              >
                <Settings className="h-5 w-5 mr-2" />
                Lihat Kemudahan
              </a>
            </div>
          </section>
        </div>
      </div>
        </>
  );
}