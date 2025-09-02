import { Metadata } from 'next';
import { Layout } from '@/components/layout/layout';
import { 
  Ship, 
  Container, 
  Truck, 
  Anchor, 
  Building, 
 
  Settings,
  MapPin,
  Clock,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kemudahan Pelabuhan | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Kemudahan infrastruktur pelabuhan termasuk terminal, dermaga, gudang dan kemudahan sokongan di Pelabuhan Pulau Pinang',
};

interface Facility {
  id: string;
  name: string;
  category: 'terminal' | 'wharf' | 'storage' | 'support' | 'transport';
  description: string;
  specifications: string[];
  capacity?: string;
  area?: string;
  icon: React.ElementType;
  image?: string;
  features: string[];
}

const facilities: Facility[] = [
  // Terminal Facilities
  {
    id: 'container-terminal-1',
    name: 'Terminal Kontena 1 (PCT1)',
    category: 'terminal',
    description: 'Terminal kontena utama dengan kemudahan moden untuk pengendalian kontena berkapasiti tinggi.',
    specifications: [
      'Panjang dermaga: 450 meter',
      'Kedalaman: 14.5 meter',
      'Bilangan kren: 6 unit Ship-to-Shore Gantry Crane',
      'Bilangan RTG: 18 unit Rubber Tyred Gantry Crane'
    ],
    capacity: '1.5 juta TEU per tahun',
    area: '45 hektar',
    icon: Container,
    features: [
      'Sistem pengurusan terminal automatik (TOS)',
      'Kemudahan pemeriksaan kastam dan imigresen',
      'Sistem keselamatan CCTV 24/7',
      'Kemudahan cold storage untuk kontena refrigerated'
    ]
  },
  {
    id: 'container-terminal-2',
    name: 'Terminal Kontena 2 (PCT2)',
    category: 'terminal',
    description: 'Terminal kontena kedua dengan teknologi terkini dan keupayaan mengendalikan kapal besar.',
    specifications: [
      'Panjang dermaga: 350 meter',
      'Kedalaman: 15 meter',
      'Bilangan kren: 4 unit Ship-to-Shore Gantry Crane',
      'Bilangan RTG: 12 unit Rubber Tyred Gantry Crane'
    ],
    capacity: '1.2 juta TEU per tahun',
    area: '38 hektar',
    icon: Container,
    features: [
      'Kemudahan untuk kapal kontena ultra besar (ULCS)',
      'Sistem tracking kontena real-time',
      'Kemudahan maintenance dan repair kontena',
      'Terminal integrated dengan sistem IT terkini'
    ]
  },
  // Wharf Facilities
  {
    id: 'conventional-wharf',
    name: 'Dermaga Konvensional',
    category: 'wharf',
    description: 'Dermaga untuk pengendalian kargo am, kargo curah dan kenderaan.',
    specifications: [
      'Panjang total: 800 meter',
      'Kedalaman: 10-12 meter',
      'Bilangan berth: 6 unit',
      'Mobile crane: 8 unit'
    ],
    capacity: '2.5 juta tan metrik per tahun',
    area: '25 hektar',
    icon: Ship,
    features: [
      'Kemudahan untuk kargo konvensional',
      'Terminal kenderaan (RoRo)',
      'Kemudahan pengendalian kargo berat',
      'Storage yard untuk pelbagai jenis kargo'
    ]
  },
  {
    id: 'bulk-terminal',
    name: 'Terminal Kargo Pukal',
    category: 'wharf',
    description: 'Kemudahan khusus untuk pengendalian kargo pukal seperti biji besi, arang batu dan beras.',
    specifications: [
      'Panjang dermaga: 200 meter',
      'Kedalaman: 12 meter',
      'Ship loader/unloader: 2 unit',
      'Conveyor system: 1.5 km'
    ],
    capacity: '3 juta tan metrik per tahun',
    area: '15 hektar',
    icon: Anchor,
    features: [
      'Sistem pneumatic untuk bulk handling',
      'Silo storage berkapasiti besar',
      'Dust suppression system',
      'Kemudahan sampling dan testing'
    ]
  },
  // Storage Facilities
  {
    id: 'warehouse-complex',
    name: 'Kompleks Gudang',
    category: 'storage',
    description: 'Gudang moden untuk penyimpanan pelbagai jenis barang dengan kemudahan keselamatan tinggi.',
    specifications: [
      'Jumlah gudang: 12 unit',
      'Total ruang: 150,000 meter persegi',
      'Ketinggian: 12 meter',
      'Loading dock: 48 unit'
    ],
    capacity: '200,000 tan metrik',
    area: '20 hektar',
    icon: Building,
    features: [
      'Sistem kawalan suhu dan kelembapan',
      'Kemudahan cold storage',
      'Sistem keselamatan dan CCTV',
      'Forklift dan material handling equipment'
    ]
  },
  {
    id: 'open-storage',
    name: 'Kawasan Simpanan Terbuka',
    category: 'storage',
    description: 'Ruang penyimpanan terbuka untuk kargo yang tidak memerlukan perlindungan cuaca.',
    specifications: [
      'Total kawasan: 200 hektar',
      'Kapasiti muatan tanah: 5 tan/m²',
      'Jalan dalaman: 15 km',
      'Sistem saliran: Lengkap'
    ],
    capacity: 'Unlimited (berdasarkan ruang)',
    area: '200 hektar',
    icon: MapPin,
    features: [
      'Surface treatment untuk heavy cargo',
      'Sistem lampu untuk operasi malam',
      'Security perimeter fencing',
      'Mobile crane accessibility'
    ]
  },
  // Support Facilities
  {
    id: 'admin-complex',
    name: 'Kompleks Pentadbiran',
    category: 'support',
    description: 'Bangunan pentadbiran utama dan pejabat operasi pelabuhan.',
    specifications: [
      'Tingkat: 8 tingkat',
      'Total ruang: 15,000 meter persegi',
      'Bilik mesyuarat: 12 unit',
      'Parking: 200 kereta'
    ],
    area: '2 hektar',
    icon: Building,
    features: [
      'Pusat kawalan operasi pelabuhan',
      'Pejabat kastam dan imigresen',
      'Kemudahan persidangan dan latihan',
      'Kafeteria dan kemudahan pekerja'
    ]
  },
  {
    id: 'maintenance-facility',
    name: 'Kemudahan Penyelenggaraan',
    category: 'support',
    description: 'Workshop dan kemudahan penyelenggaraan untuk peralatan pelabuhan.',
    specifications: [
      'Workshop area: 5,000 meter persegi',
      'Heavy lifting capacity: 50 tan',
      'Spare parts warehouse: 2,000 meter persegi',
      'Testing facility: Lengkap'
    ],
    area: '3 hektar',
    icon: Settings,
    features: [
      'Workshop untuk crane maintenance',
      'Electrical and mechanical repair',
      'Spare parts inventory management',
      '24/7 emergency repair service'
    ]
  },
  // Transport Facilities
  {
    id: 'truck-terminal',
    name: 'Terminal Trak',
    category: 'transport',
    description: 'Kemudahan untuk trak kontena dan kenderaan komersial.',
    specifications: [
      'Parking capacity: 500 trak',
      'Weighbridge: 4 unit',
      'Inspection bay: 8 unit',
      'Driver facilities: Lengkap'
    ],
    area: '10 hektar',
    icon: Truck,
    features: [
      'Electronic gate system',
      'Truck appointment system',
      'Driver rest area dan facilities',
      'Fuel station dan vehicle services'
    ]
  },
  {
    id: 'rail-connection',
    name: 'Sambungan Keretapi',
    category: 'transport',
    description: 'Kemudahan keretapi untuk pengangkutan kargo ke seluruh Semenanjung Malaysia.',
    specifications: [
      'Panjang rail siding: 2 km',
      'Loading platform: 4 unit',
      'Crane untuk rail loading: 2 unit',
      'Kapasiti per trip: 1,000 tan'
    ],
    capacity: '500,000 tan per tahun',
    area: '5 hektar',
    icon: Users,
    features: [
      'Sambungan terus ke KTM mainline',
      'Container handling untuk rail transport',
      'Intermodal transport facility',
      'Rail-truck transfer capability'
    ]
  }
];

const categoryColors = {
  terminal: 'bg-blue-500',
  wharf: 'bg-green-500', 
  storage: 'bg-orange-500',
  support: 'bg-purple-500',
  transport: 'bg-red-500'
};

const categoryNames = {
  terminal: 'Terminal',
  wharf: 'Dermaga',
  storage: 'Penyimpanan',
  support: 'Sokongan',
  transport: 'Pengangkutan'
};

export default function FacilitiesPage() {
  const categories = Object.keys(categoryNames) as (keyof typeof categoryNames)[];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Building className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Kemudahan Pelabuhan</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Infrastruktur pelabuhan yang komprehensif dan moden untuk mengendalikan 
                pelbagai jenis kargo dengan kecekapan dan keselamatan tinggi.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Overview Statistics */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Container className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">2.7M</div>
                <div className="text-gray-600 text-sm">TEU Capacity</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Ship className="h-10 w-10 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
                <div className="text-gray-600 text-sm">Berth Positions</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Building className="h-10 w-10 mx-auto mb-3 text-orange-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">150K</div>
                <div className="text-gray-600 text-sm">m² Warehouse</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <MapPin className="h-10 w-10 mx-auto mb-3 text-purple-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">200</div>
                <div className="text-gray-600 text-sm">Hectares Land</div>
              </div>
            </div>
          </section>

          {/* Facilities by Category */}
          {categories.map((category) => {
            const categoryFacilities = facilities.filter(f => f.category === category);
            
            return (
              <section key={category} className="mb-16">
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full ${categoryColors[category]} text-white mb-4`}>
                    <span className="font-semibold">{categoryNames[category]}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Kemudahan {categoryNames[category]}
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {categoryFacilities.map((facility) => {
                    const IconComponent = facility.icon;
                    
                    return (
                      <div 
                        key={facility.id} 
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="p-8">
                          <div className="flex items-center mb-6">
                            <div className={`p-3 rounded-lg ${categoryColors[category]} bg-opacity-10 mr-4`}>
                              <IconComponent className={`h-8 w-8 ${categoryColors[category].replace('bg-', 'text-')}`} />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-1">
                                {facility.name}
                              </h3>
                              {facility.area && (
                                <p className="text-blue-600 font-semibold">
                                  Kawasan: {facility.area}
                                </p>
                              )}
                            </div>
                          </div>

                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {facility.description}
                          </p>

                          {facility.capacity && (
                            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                              <div className="flex items-center">
                                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                                <span className="font-semibold text-blue-900">
                                  Kapasiti: {facility.capacity}
                                </span>
                              </div>
                            </div>
                          )}

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Spesifikasi:</h4>
                            <ul className="space-y-2">
                              {facility.specifications.map((spec, index) => (
                                <li key={index} className="flex items-start text-sm text-gray-600">
                                  <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  {spec}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Ciri-ciri Utama:</h4>
                            <ul className="space-y-2">
                              {facility.features.map((feature, index) => (
                                <li key={index} className="flex items-start text-sm text-gray-600">
                                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  {feature}
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

          {/* Contact and More Information */}
          <section className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Maklumat Lanjut Kemudahan
              </h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                Untuk maklumat terperinci tentang kemudahan, tarif penggunaan, atau 
                untuk membuat tempahan kemudahan pelabuhan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/services"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Lihat Perkhidmatan
                </a>
                <a 
                  href="/contact"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  Hubungi Kami
                </a>
                <a 
                  href="/infrastructure/connectivity"
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
                >
                  Jalinan Perhubungan
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}