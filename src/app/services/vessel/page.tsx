import { Metadata } from 'next';
import { Layout } from '@/components/layout/layout';
import { 
  Ship, 
  Anchor, 
  Waves, 
  Clock, 
  Shield, 
  Users,
  Fuel,
  Wrench,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Perkhidmatan Kapal | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Perkhidmatan komprehensif untuk kapal termasuk pilotage, towage, berthing, dan perkhidmatan sokongan maritim',
};

interface VesselService {
  id: string;
  name: string;
  category: 'navigation' | 'berthing' | 'support' | 'maintenance';
  description: string;
  features: string[];
  specifications: string[];
  pricing?: string;
  availability: string;
  icon: React.ElementType;
}

const vesselServices: VesselService[] = [
  // Navigation Services
  {
    id: 'pilotage',
    name: 'Perkhidmatan Pandu (Pilotage)',
    category: 'navigation',
    description: 'Perkhidmatan pandu maritim oleh juruterbang laut bertauliah untuk panduan keselamatan kapal.',
    features: [
      'Juruterbang laut berlesen dan berpengalaman',
      'Pilot boat berkuasa tinggi untuk transfer',
      'VHF radio communication 24/7',
      'Weather monitoring dan route planning',
      'Coordination dengan Vessel Traffic Service'
    ],
    specifications: [
      'Kedalaman minimum: 8 meter',
      'Pilot boarding: 2 nautical miles dari pelabuhan',
      'Response time: 30 minit atau kurang',
      'Pilot availability: 24 jam sehari',
      'Maximum vessel size: Tiada had'
    ],
    pricing: 'RM800-2500 mengikut GRT',
    availability: '24/7',
    icon: Users
  },
  {
    id: 'towage',
    name: 'Perkhidmatan Tunda (Towage)',
    category: 'navigation',
    description: 'Tug boat services untuk membantu manuver kapal di kawasan pelabuhan dengan selamat.',
    features: [
      'Armada tug boat dengan 2000-4000 BHP',
      'Bollard pull hingga 60 tan',
      'Azimuth stern drive untuk manuverability',
      'Experienced tug masters dan crew',
      'Emergency towing capability'
    ],
    specifications: [
      'Jumlah tug boat: 8 unit',
      'Bollard pull range: 35-60 tan',
      'Engine power: 2000-4000 BHP',
      'Response time: 15 minit',
      'Working area: Dalam pelabuhan dan approaches'
    ],
    pricing: 'RM1200-3000 per operasi',
    availability: '24/7',
    icon: Ship
  },
  {
    id: 'vts',
    name: 'Vessel Traffic Service (VTS)',
    category: 'navigation',
    description: 'Sistem kawalan trafik kapal untuk memantau dan mengkoordinasi pergerakan kapal.',
    features: [
      'Radar surveillance 360°',
      'AIS (Automatic Identification System)',
      'VHF radio communication network',
      'Weather monitoring integration',
      'Traffic coordination dan scheduling'
    ],
    specifications: [
      'Coverage area: 25 nautical miles radius',
      'Radar range: 48 nautical miles',
      'VHF channels: 16, 12, 14',
      'AIS coverage: Class A dan B',
      'Operating hours: 24/7/365'
    ],
    pricing: 'Termasuk dalam port dues',
    availability: '24/7',
    icon: MapPin
  },
  // Berthing Services
  {
    id: 'berthing',
    name: 'Perkhidmatan Berlabuh',
    category: 'berthing',
    description: 'Kemudahan berlabuh untuk pelbagai jenis kapal dengan kedalaman dan kemudahan yang sesuai.',
    features: [
      'Multiple berth dengan pelbagai kedalaman',
      'Fender system untuk vessel protection',
      'Bollard dan cleat yang mencukupi',
      'Fresh water supply connection',
      'Shore power connection (cold ironing)'
    ],
    specifications: [
      'Jumlah berth: 12 berth positions',
      'Kedalaman: 8-15 meter',
      'Panjang berth: 150-450 meter',
      'Maximum vessel: 400m LOA',
      'Tidal range: 3.5 meter'
    ],
    pricing: 'RM0.50-2.00 per GRT per hari',
    availability: 'Subject to berth availability',
    icon: Anchor
  },
  {
    id: 'mooring',
    name: 'Perkhidmatan Tambat',
    category: 'berthing',
    description: 'Bantuan menambat kapal dengan selamat menggunakan peralatan dan tenaga kerja berpengalaman.',
    features: [
      'Professional mooring gang',
      'Complete mooring equipment',
      'Safety supervision',
      'Line handling services',
      'Emergency unmooring capability'
    ],
    specifications: [
      'Gang size: 4-8 pekerja per operasi',
      'Equipment: Ropes, winches, bollards',
      'Safety: PPE dan safety procedures',
      'Response: 24/7 availability',
      'Experience: 10+ tahun averaj'
    ],
    pricing: 'RM500-1500 per operasi',
    availability: '24/7',
    icon: Anchor
  },
  // Support Services
  {
    id: 'bunkering',
    name: 'Perkhidmatan Bahan Bakar',
    category: 'support',
    description: 'Supply bahan bakar marine untuk pelbagai jenis kapal dengan kualiti terjamin.',
    features: [
      'Marine Gas Oil (MGO) dan Heavy Fuel Oil (HFO)',
      'ISO 8217 compliant fuel quality',
      'Bunker barge dengan pumping capacity tinggi',
      'Fuel testing dan certification',
      'Delivery scheduling coordination'
    ],
    specifications: [
      'Delivery rate: 200-500 MT per jam',
      'Fuel types: MGO, HFO, LSMGO',
      'Quality: ISO 8217:2017 standard',
      'Testing: Independent surveyor',
      'Capacity: 2,000 MT bunker barge'
    ],
    pricing: 'Market rate + handling charges',
    availability: '24/7 dengan advance booking',
    icon: Fuel
  },
  {
    id: 'fresh-water',
    name: 'Bekalan Air Tawar',
    category: 'support',
    description: 'Supply air tawar berkualiti tinggi untuk keperluan kapal dan anak kapal.',
    features: [
      'Treated water mengikut WHO standards',
      'High pressure delivery system',
      'Flexible hose connections',
      'Water quality testing',
      'Multiple supply points'
    ],
    specifications: [
      'Supply rate: 100-300 m³ per jam',
      'Pressure: 3-6 bar',
      'Quality: Potable water standard',
      'Connection: Standard maritime fittings',
      'Availability: All berths'
    ],
    pricing: 'RM3-5 per m³',
    availability: '24/7',
    icon: Waves
  },
  {
    id: 'waste-management',
    name: 'Pengurusan Sisa',
    category: 'support',
    description: 'Perkhidmatan pengumpulan dan pelupusan sisa kapal mengikut peraturan MARPOL.',
    features: [
      'Oily water separation',
      'Garbage collection dan sorting',
      'Sewage pump-out services',
      'MARPOL Annex V compliance',
      'Waste disposal certificates'
    ],
    specifications: [
      'Oily water: 50 m³ capacity tank',
      'Garbage: Segregated collection',
      'Sewage: Pump-out facilities',
      'Compliance: MARPOL 73/78',
      'Documentation: Waste receipt certificates'
    ],
    pricing: 'RM200-800 per service',
    availability: 'Hari kerja 8AM-6PM',
    icon: Shield
  },
  // Maintenance Services
  {
    id: 'ship-repair',
    name: 'Pembaikan dan Penyelenggaraan',
    category: 'maintenance',
    description: 'Perkhidmatan pembaikan kapal dan penyelenggaraan oleh bengkel berlesen.',
    features: [
      'Dry dock facilities',
      'Certified welding dan fabrication',
      'Engine overhaul services',
      'Hull cleaning dan painting',
      'Emergency repair services'
    ],
    specifications: [
      'Dry dock: 200m x 35m',
      'Lifting capacity: 15,000 DWT',
      'Workshop: 5,000 m² covered area',
      'Certification: Lloyd\'s approved',
      'Equipment: Complete machine shop'
    ],
    pricing: 'Quote berdasarkan scope kerja',
    availability: 'Dengan tempahan advance',
    icon: Wrench
  },
  {
    id: 'diving-services',
    name: 'Perkhidmatan Penyelam',
    category: 'maintenance',
    description: 'Underwater inspection, cleaning, dan repair services oleh penyelam komersial berlesen.',
    features: [
      'Commercial diving team',
      'Underwater welding capability',
      'Hull cleaning services',
      'Propeller polishing',
      'Underwater inspection dan survey'
    ],
    specifications: [
      'Diving depth: Hingga 40 meter',
      'Equipment: Surface-supplied diving',
      'Certification: IMCA approved divers',
      'Services: Inspection, cleaning, repair',
      'Safety: Full safety protocols'
    ],
    pricing: 'RM300-800 per jam per diver',
    availability: 'Subject to weather conditions',
    icon: Waves
  }
];

const categoryColors = {
  navigation: 'bg-blue-500',
  berthing: 'bg-green-500',
  support: 'bg-orange-500',
  maintenance: 'bg-purple-500'
};

const categoryNames = {
  navigation: 'Navigasi',
  berthing: 'Berlabuh',
  support: 'Sokongan',
  maintenance: 'Penyelenggaraan'
};

export default function VesselServicesPage() {
  const categories = Object.keys(categoryNames) as (keyof typeof categoryNames)[];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Ship className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Perkhidmatan Kapal</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Perkhidmatan maritim komprehensif untuk memastikan keselamatan dan 
                kecekapan operasi kapal di Pelabuhan Pulau Pinang.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Key Statistics */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Ship className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">3,500+</div>
                <div className="text-gray-600 text-sm">Kapal per Tahun</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Clock className="h-10 w-10 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-gray-600 text-sm">Perkhidmatan</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Shield className="h-10 w-10 mx-auto mb-3 text-orange-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">99.8%</div>
                <div className="text-gray-600 text-sm">Safety Record</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Users className="h-10 w-10 mx-auto mb-3 text-purple-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">45</div>
                <div className="text-gray-600 text-sm">Juruterbang Laut</div>
              </div>
            </div>
          </section>

          {/* Services by Category */}
          {categories.map((category) => {
            const categoryServices = vesselServices.filter(s => s.category === category);
            
            return (
              <section key={category} className="mb-16">
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full ${categoryColors[category]} text-white mb-4`}>
                    <span className="font-semibold">{categoryNames[category]}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Perkhidmatan {categoryNames[category]}
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {categoryServices.map((service) => {
                    const IconComponent = service.icon;
                    
                    return (
                      <div 
                        key={service.id} 
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="p-8">
                          <div className="flex items-center mb-6">
                            <div className={`p-3 rounded-lg ${categoryColors[category]} bg-opacity-10 mr-4`}>
                              <IconComponent className={`h-8 w-8 ${categoryColors[category].replace('bg-', 'text-')}`} />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-1">
                                {service.name}
                              </h3>
                              <div className="flex items-center text-sm text-green-600">
                                <Clock className="h-4 w-4 mr-1" />
                                {service.availability}
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {service.description}
                          </p>

                          {service.pricing && (
                            <div className="mb-6 p-4 bg-green-50 rounded-lg">
                              <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                                <span className="font-semibold text-green-900">
                                  Harga: {service.pricing}
                                </span>
                              </div>
                            </div>
                          )}

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Ciri-ciri Utama:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, index) => (
                                <li key={index} className="flex items-start text-sm text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Spesifikasi:</h4>
                            <ul className="space-y-2">
                              {service.specifications.map((spec, index) => (
                                <li key={index} className="flex items-start text-sm text-gray-600">
                                  <ArrowRight className="h-4 w-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                  {spec}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-4 border-t border-gray-200">
                            <a 
                              href="/contact"
                              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                            >
                              Tempah Perkhidmatan
                              <ArrowRight className="h-4 w-4 ml-2" />
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

          {/* Emergency Contact */}
          <section className="mb-16 bg-red-50 border-l-4 border-red-500 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <Phone className="h-8 w-8 text-red-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                Perkhidmatan Kecemasan
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Untuk situasi kecemasan atau perkhidmatan segera, hubungi:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <div className="font-semibold text-gray-900">Marine Emergency</div>
                <div className="text-2xl font-bold text-red-600">999</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="font-semibold text-gray-900">Port Control</div>
                <div className="text-2xl font-bold text-red-600">04-2101 2345</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="font-semibold text-gray-900">VHF Channel</div>
                <div className="text-2xl font-bold text-red-600">16</div>
              </div>
            </div>
          </section>

          {/* Booking Process */}
          <section className="mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Proses Tempahan Perkhidmatan
              </h3>
              <p className="text-gray-600">
                Langkah mudah untuk menempah perkhidmatan kapal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Advance Notice</h4>
                <p className="text-sm text-gray-600">Notifikasi 24-48 jam sebelum ketibaan</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Documentation</h4>
                <p className="text-sm text-gray-600">Penyediaan dokumen kapal dan kargo</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Scheduling</h4>
                <p className="text-sm text-gray-600">Penjadualan berth dan perkhidmatan</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  4
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Service Delivery</h4>
                <p className="text-sm text-gray-600">Pelaksanaan perkhidmatan mengikut jadual</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Perlu Perkhidmatan Kapal?
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Hubungi Vessel Traffic Service atau pejabat port agent untuk menempah 
              perkhidmatan dan mendapatkan maklumat lanjut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Hubungi VTS
              </a>
              <a 
                href="/services/cargo"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Perkhidmatan Kargo
              </a>
              <a 
                href="/services/vessel-schedule"
                className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                Jadual Kapal
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}