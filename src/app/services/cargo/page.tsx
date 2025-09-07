import { Metadata } from 'next';
import { 
  Container, 
  Ship, 
  Truck, 
  Package, 
  Clock, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Anchor,
  Scale
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Perkhidmatan Kargo | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Perkhidmatan pengendalian kargo komprehensif termasuk kontena, kargo am, dan kargo khusus di Pelabuhan Pulau Pinang',
};

interface CargoService {
  id: string;
  name: string;
  category: 'container' | 'general' | 'bulk' | 'specialized';
  description: string;
  features: string[];
  specifications: string[];
  pricing?: string;
  icon: React.ElementType;
}

const cargoServices: CargoService[] = [
  // Container Services
  {
    id: 'container-handling',
    name: 'Pengendalian Kontena',
    category: 'container',
    description: 'Perkhidmatan pengendalian kontena lengkap dengan teknologi automatik dan kecekapan tinggi.',
    features: [
      'Sistem Terminal Operating System (TOS) terkini',
      'Ship-to-Shore Gantry Crane berkapasiti tinggi',
      'Rubber Tyred Gantry (RTG) untuk yard operations',
      'Real-time container tracking dan monitoring',
      'Electronic Data Interchange (EDI) integration'
    ],
    specifications: [
      'Kapasiti: 2.7 juta TEU per tahun',
      'Masa dwel kontena: 3-5 hari percuma',
      'Operasi: 24 jam sehari, 7 hari seminggu',
      'Kedalaman dermaga: 14.5-15 meter',
      'Panjang kapal maksimum: 400 meter'
    ],
    pricing: 'Mulai dari RM150 per TEU',
    icon: Container
  },
  {
    id: 'reefer-services',
    name: 'Perkhidmatan Kontena Refrigerated',
    category: 'container',
    description: 'Kemudahan khusus untuk kontena berpendingin dengan sistem kawalan suhu dan kelembapan.',
    features: [
      'Monitoring suhu 24/7 dengan alarm system',
      'Power supply untuk 1,000 kontena reefer',
      'Pre-trip inspection dan testing',
      'Temperature log recording dan reporting',
      'Emergency backup power system'
    ],
    specifications: [
      'Julat suhu: -25°C hingga +25°C',
      'Kapasiti power: 2,000 reefer plugs',
      'Monitoring: Real-time temperature tracking',
      'Backup power: 100% coverage',
      'Compliance: HACCP dan food safety standards'
    ],
    pricing: 'RM25 per hari per kontena',
    icon: Package
  },
  // General Cargo Services
  {
    id: 'general-cargo',
    name: 'Kargo Konvensional',
    category: 'general',
    description: 'Pengendalian kargo am termasuk barang pecah belah, mesin berat, dan kargo project.',
    features: [
      'Mobile crane dengan kapasiti sehingga 100 tan',
      'Forklift dan reach stacker untuk heavy cargo',
      'Covered warehouse untuk barang sensitif',
      'Open storage untuk kargo besar',
      'Cargo survey dan inspection services'
    ],
    specifications: [
      'Kapasiti angkat maksimum: 100 tan per lift',
      'Kawasan storage: 25 hektar',
      'Gudang bertutup: 50,000 meter persegi',
      'Dermaga: 800 meter panjang',
      'Kedalaman air: 10-12 meter'
    ],
    pricing: 'Mengikut saiz dan berat kargo',
    icon: Package
  },
  {
    id: 'roro-services',
    name: 'Perkhidmatan RoRo',
    category: 'general',
    description: 'Terminal kenderaan untuk import/export kereta, lori, dan kenderaan komersial.',
    features: [
      'Dedicated RoRo ramp dan terminal',
      'Vehicle inspection dan documentation',
      'Secure parking dengan CCTV monitoring',
      'Pre-delivery inspection (PDI) services',
      'Vehicle transportation arrangement'
    ],
    specifications: [
      'Kapasiti: 50,000 unit kenderaan per tahun',
      'Parking space: 500 kenderaan',
      'Ramp gradient: 1:10 maksimum',
      'Security: 24/7 guarded compound',
      'Processing time: 2-4 jam per shipment'
    ],
    pricing: 'RM50-200 per unit mengikut saiz',
    icon: Truck
  },
  // Bulk Cargo Services
  {
    id: 'dry-bulk',
    name: 'Kargo Pukal Kering',
    category: 'bulk',
    description: 'Pengendalian kargo pukal seperti beras, gandum, jagung, dan bahan binaan.',
    features: [
      'Pneumatic conveyor system',
      'Silo storage berkapasiti besar',
      'Ship loader/unloader automatik',
      'Dust suppression system',
      'Quality sampling dan testing'
    ],
    specifications: [
      'Kapasiti discharge: 1,000 tan per jam',
      'Storage capacity: 100,000 tan',
      'Conveyor speed: 500 tan per jam',
      'Sampling: Setiap 1,000 tan',
      'Dust control: 95% efficiency'
    ],
    pricing: 'RM15-25 per tan metrik',
    icon: Scale
  },
  {
    id: 'liquid-bulk',
    name: 'Kargo Pukal Cecair',
    category: 'bulk',
    description: 'Kemudahan untuk minyak sawit, bahan kimia, dan cecair perindustrian lain.',
    features: [
      'Pipeline system dengan heating capability',
      'Tank storage dengan nitrogen blanketing',
      'Pump system berkapasiti tinggi',
      'Spill containment system',
      'Quality control laboratory'
    ],
    specifications: [
      'Kapasiti pompa: 500 m³ per jam',
      'Tank capacity: 50,000 m³ total',
      'Pipeline: Stainless steel food grade',
      'Temperature control: Hingga 80°C',
      'Safety: Full vapor recovery system'
    ],
    pricing: 'RM8-15 per tan metrik',
    icon: Anchor
  },
  // Specialized Services
  {
    id: 'project-cargo',
    name: 'Kargo Projek',
    category: 'specialized',
    description: 'Pengendalian kargo berat dan besar untuk projek perindustrian dan pembinaan.',
    features: [
      'Heavy lift crane sehingga 200 tan',
      'Multi-axle trailer untuk transport',
      'Route survey dan planning',
      'Special handling equipment',
      'Project management services'
    ],
    specifications: [
      'Berat maksimum: 200 tan per piece',
      'Dimensi maksimum: 50m x 8m x 6m',
      'Mobile crane: 2 unit heavy lift',
      'Trailer: SPMT dengan 100+ axles',
      'Planning: 30 hari advance notice'
    ],
    pricing: 'Quote berdasarkan kompleksiti',
    icon: Ship
  },
  {
    id: 'hazmat-cargo',
    name: 'Kargo Berbahaya (HAZMAT)',
    category: 'specialized',
    description: 'Pengendalian kargo berbahaya mengikut peraturan IMDG dan MSDS.',
    features: [
      'IMDG certified handling procedures',
      'Segregated storage areas',
      'Emergency response team',
      'Specialized equipment dan PPE',
      'Documentation dan compliance'
    ],
    specifications: [
      'Certification: IMDG Code compliance',
      'Storage: Class-based segregation',
      'Emergency: 24/7 response team',
      'Training: Certified dangerous goods handlers',
      'Monitoring: Continuous safety surveillance'
    ],
    pricing: 'Premium 50-100% dari standard rate',
    icon: Shield
  }
];

const categoryColors = {
  container: 'bg-blue-500',
  general: 'bg-green-500',
  bulk: 'bg-orange-500',
  specialized: 'bg-red-500'
};

const categoryNames = {
  container: 'Kontena',
  general: 'Kargo Am',
  bulk: 'Kargo Pukal',
  specialized: 'Kargo Khusus'
};

export default function CargoServicesPage() {
  const categories = Object.keys(categoryNames) as (keyof typeof categoryNames)[];

  return (
    <>

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Container className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Perkhidmatan Kargo</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Perkhidmatan pengendalian kargo komprehensif dengan teknologi moden 
                dan kecekapan operasi untuk memenuhi keperluan perdagangan antarabangsa.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Key Performance Indicators */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Container className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">2.7M</div>
                <div className="text-gray-600 text-sm">TEU per Tahun</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Clock className="h-10 w-10 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-gray-600 text-sm">Operasi</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Shield className="h-10 w-10 mx-auto mb-3 text-orange-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">99.5%</div>
                <div className="text-gray-600 text-sm">Safety Record</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <CheckCircle className="h-10 w-10 mx-auto mb-3 text-purple-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">48H</div>
                <div className="text-gray-600 text-sm">Turnaround Time</div>
              </div>
            </div>
          </section>

          {/* Services by Category */}
          {categories.map((category) => {
            const categoryServices = cargoServices.filter(s => s.category === category);
            
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
                              {service.pricing && (
                                <p className="text-green-600 font-semibold">
                                  {service.pricing}
                                </p>
                              )}
                            </div>
                          </div>

                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {service.description}
                          </p>

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
                            <h4 className="font-semibold text-gray-900 mb-3">Spesifikasi Teknikal:</h4>
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
                              Dapatkan Sebut Harga
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

          {/* Process Flow */}
          <section className="mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Proses Pengendalian Kargo
              </h3>
              <p className="text-gray-600">
                Aliran kerja yang sistematik untuk memastikan kecekapan dan keselamatan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Booking & Documentation</h4>
                <p className="text-sm text-gray-600">Tempahan ruang dan penyediaan dokumen</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Arrival & Inspection</h4>
                <p className="text-sm text-gray-600">Ketibaan kapal dan pemeriksaan kargo</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Discharge & Handling</h4>
                <p className="text-sm text-gray-600">Pemunggahan dan pengendalian kargo</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  4
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Storage & Delivery</h4>
                <p className="text-sm text-gray-600">Penyimpanan dan penghantaran</p>
              </div>
            </div>
          </section>

          {/* Contact and Quote */}
          <section className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Perlu Perkhidmatan Kargo?
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Hubungi pasukan kami untuk mendapatkan sebut harga dan maklumat lanjut 
              tentang perkhidmatan pengendalian kargo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Hubungi Kami
              </a>
              <a 
                href="/services/vessel"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Perkhidmatan Kapal
              </a>
              <a 
                href="/infrastructure/facilities"
                className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                Lihat Kemudahan
              </a>
            </div>
          </section>
        </div>
      </div>
        </>
  );
}