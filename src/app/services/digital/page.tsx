import { Metadata } from 'next';
import { 
  Smartphone, 
  Globe, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  QrCode,
  CreditCard,
  FileText,
  Clock,
  Users,
  Download
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Perkhidmatan Digital | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Perkhidmatan digital dan online untuk kemudahan transaksi dan akses maklumat pelabuhan 24/7',
};

interface DigitalService {
  id: string;
  name: string;
  category: 'mobile' | 'web' | 'api' | 'blockchain';
  description: string;
  features: string[];
  benefits: string[];
  availability: string;
  platforms: string[];
  icon: React.ElementType;
}

const digitalServices: DigitalService[] = [
  // Mobile Services
  {
    id: 'sppp-mobile-app',
    name: 'SPPP Mobile App',
    category: 'mobile',
    description: 'Aplikasi mudah alih rasmi SPPP untuk akses perkhidmatan pelabuhan di mana-mana sahaja.',
    features: [
      'Real-time cargo tracking',
      'Vessel schedule dan berth information',
      'Digital payment untuk port charges',
      'Push notifications untuk updates',
      'Offline access untuk maklumat penting',
      'Multi-language support (BM/EN/CN)'
    ],
    benefits: [
      'Akses maklumat 24/7',
      'Pembayaran tanpa tunai',
      'Penjimatan masa dan kos',
      'Real-time updates'
    ],
    availability: '24/7',
    platforms: ['iOS App Store', 'Google Play Store', 'Huawei AppGallery'],
    icon: Smartphone
  },
  {
    id: 'qr-services',
    name: 'QR Code Services',
    category: 'mobile',
    description: 'Perkhidmatan berasaskan QR code untuk akses pantas dan transaksi tanpa sentuh.',
    features: [
      'QR payment untuk parking dan services',
      'Quick access ke vessel information',
      'Contactless check-in untuk visitors',
      'Digital receipts dan documentation',
      'Safety compliance checking'
    ],
    benefits: [
      'Transaksi tanpa sentuh',
      'Proses lebih cepat',
      'Pengurangan penggunaan kertas',
      'Hygiene dan keselamatan'
    ],
    availability: '24/7',
    platforms: ['Mobile App', 'Web Browser', 'Physical QR Codes'],
    icon: QrCode
  },
  // Web Services
  {
    id: 'web-portal',
    name: 'Portal Web SPPP',
    category: 'web',
    description: 'Portal web komprehensif untuk semua perkhidmatan digital dan maklumat pelabuhan.',
    features: [
      'Online booking untuk berth dan services',
      'Document management system',
      'Real-time dashboard untuk operations',
      'Digital forms dan applications',
      'Payment gateway integration',
      'Customer support chat'
    ],
    benefits: [
      'Self-service 24/7',
      'Pengurangan birokrasi',
      'Audit trail lengkap',
      'Multi-user access control'
    ],
    availability: '24/7',
    platforms: ['Web Browser (Desktop)', 'Mobile Web', 'Tablet'],
    icon: Globe
  },
  {
    id: 'e-permit',
    name: 'Sistem e-Permit',
    category: 'web',
    description: 'Platform digital untuk permohonan dan pengurusan permit pelabuhan secara online.',
    features: [
      'Online permit application',
      'Document upload dan verification',
      'Automated approval workflow',
      'Digital permit issuance',
      'Renewal reminders',
      'Compliance tracking'
    ],
    benefits: [
      'Proses approval yang cepat',
      'Transparency dalam status',
      'Pengurangan kos administrative',
      'Digital record keeping'
    ],
    availability: 'Hari bekerja + extended hours',
    platforms: ['Web Portal', 'Mobile App'],
    icon: FileText
  },
  // API Services
  {
    id: 'developer-api',
    name: 'SPPP Developer API',
    category: 'api',
    description: 'RESTful API untuk integrasi sistem pelabuhan dengan aplikasi third-party.',
    features: [
      'Real-time vessel tracking API',
      'Cargo status API',
      'Berth availability API',
      'Payment processing API',
      'Document exchange API',
      'Webhook notifications'
    ],
    benefits: [
      'Seamless system integration',
      'Real-time data access',
      'Automated workflows',
      'Reduced manual processes'
    ],
    availability: '99.9% uptime SLA',
    platforms: ['REST API', 'GraphQL', 'WebSocket', 'SDK Libraries'],
    icon: Zap
  },
  {
    id: 'data-analytics',
    name: 'Analytics & Business Intelligence',
    category: 'api',
    description: 'Platform analitik untuk insight operasi dan business intelligence.',
    features: [
      'Real-time operational dashboards',
      'Predictive analytics untuk capacity',
      'Performance benchmarking',
      'Custom report generation',
      'Data visualization tools',
      'Export capabilities'
    ],
    benefits: [
      'Data-driven decision making',
      'Operational efficiency insights',
      'Predictive maintenance',
      'Cost optimization'
    ],
    availability: '24/7',
    platforms: ['Web Dashboard', 'Mobile App', 'API Export'],
    icon: ArrowRight
  },
  // Blockchain Services
  {
    id: 'blockchain-docs',
    name: 'Blockchain Documentation',
    category: 'blockchain',
    description: 'Sistem blockchain untuk dokumentasi yang selamat dan tamper-proof.',
    features: [
      'Immutable document storage',
      'Smart contracts untuk automation',
      'Multi-party verification',
      'Chain of custody tracking',
      'Digital signatures',
      'Compliance audit trails'
    ],
    benefits: [
      'Document integrity assurance',
      'Reduced fraud risk',
      'Automated compliance',
      'Trust dan transparency'
    ],
    availability: '24/7',
    platforms: ['Web Interface', 'API Integration', 'Mobile Access'],
    icon: Shield
  },
  {
    id: 'digital-payments',
    name: 'Digital Payment Solutions',
    category: 'blockchain',
    description: 'Platform pembayaran digital yang selamat untuk semua port charges dan fees.',
    features: [
      'Multiple payment methods support',
      'Automated billing systems',
      'Real-time payment verification',
      'Digital invoicing',
      'Refund processing',
      'Financial reporting'
    ],
    benefits: [
      'Cashless transactions',
      'Faster settlement',
      'Reduced processing costs',
      'Enhanced security'
    ],
    availability: '24/7',
    platforms: ['Web Portal', 'Mobile App', 'API Integration', 'QR Payments'],
    icon: CreditCard
  }
];

const categoryColors = {
  mobile: 'bg-blue-500',
  web: 'bg-green-500',
  api: 'bg-orange-500',
  blockchain: 'bg-purple-500'
};

const categoryNames = {
  mobile: 'Perkhidmatan Mudah Alih',
  web: 'Perkhidmatan Web',
  api: 'API & Integrasi',
  blockchain: 'Teknologi Blockchain'
};

export default function DigitalServicesPage() {
  const categories = Object.keys(categoryNames) as (keyof typeof categoryNames)[];

  return (
    <>

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Smartphone className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Perkhidmatan Digital</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Transformasi digital untuk kemudahan akses dan transaksi pelabuhan 
                melalui teknologi terkini dan platform yang user-friendly.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Digital Transformation Stats */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Users className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">50K+</div>
                <div className="text-gray-600 text-sm">Active Users</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Zap className="h-10 w-10 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">99.9%</div>
                <div className="text-gray-600 text-sm">Uptime</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Clock className="h-10 w-10 mx-auto mb-3 text-orange-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-gray-600 text-sm">Availability</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Shield className="h-10 w-10 mx-auto mb-3 text-purple-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">256-bit</div>
                <div className="text-gray-600 text-sm">SSL Encryption</div>
              </div>
            </div>
          </section>

          {/* Digital Services by Category */}
          {categories.map((category) => {
            const categoryServices = digitalServices.filter(s => s.category === category);
            
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

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Ciri-ciri:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, index) => (
                                <li key={index} className="flex items-start text-sm text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-6 p-4 bg-green-50 rounded-lg">
                            <h4 className="font-semibold text-green-900 mb-3">Manfaat:</h4>
                            <ul className="space-y-1">
                              {service.benefits.map((benefit, index) => (
                                <li key={index} className="text-sm text-green-700 flex items-center">
                                  <ArrowRight className="h-3 w-3 mr-2 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Platform:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.platforms.map((platform, index) => (
                                <span 
                                  key={index}
                                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded ${categoryColors[category]} bg-opacity-10 ${categoryColors[category].replace('bg-', 'text-')}`}
                                >
                                  {platform}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <a 
                              href="#"
                              className={`flex-1 ${categoryColors[category]} text-white px-4 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 text-center`}
                            >
                              Mulakan
                            </a>
                            <a 
                              href="/contact"
                              className="px-4 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:border-gray-400 transition-colors duration-300 text-center"
                            >
                              Bantuan
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

          {/* Getting Started */}
          <section className="mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Cara Memulakan
              </h3>
              <p className="text-gray-600">
                Langkah mudah untuk menggunakan perkhidmatan digital SPPP
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Daftar Akaun</h4>
                <p className="text-sm text-gray-600">Buat akaun SPPP digital dengan email dan dokumen syarikat</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Verifikasi</h4>
                <p className="text-sm text-gray-600">Lengkapkan proses verifikasi untuk akses penuh</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Download App</h4>
                <p className="text-sm text-gray-600">Muat turun aplikasi mobile untuk akses mudah</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  4
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Mulakan</h4>
                <p className="text-sm text-gray-600">Nikmati semua perkhidmatan digital SPPP</p>
              </div>
            </div>
          </section>

          {/* Support and Download */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Muat Turun & Sokongan
              </h3>
              <p className="text-gray-600">
                Dapatkan aplikasi dan sokongan teknikal untuk perkhidmatan digital
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <Download className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h4 className="font-bold text-gray-900 mb-4">Muat Turun Aplikasi</h4>
                <div className="space-y-3">
                  <a 
                    href="#"
                    className="block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                  >
                    Download di App Store
                  </a>
                  <a 
                    href="#"
                    className="block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                  >
                    Download di Google Play
                  </a>
                </div>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h4 className="font-bold text-gray-900 mb-4">Bantuan & Sokongan</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>📱 WhatsApp Support: +60 12-345 6789</p>
                  <p>📧 Email: digital@penangport.gov.my</p>
                  <p>🕐 Masa operasi: 8AM - 8PM (7 hari)</p>
                  <p>💬 Live Chat: Available di app dan website</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
              >
                <Smartphone className="h-5 w-5 mr-2" />
                Hubungi Digital Support
              </a>
            </div>
          </section>
        </div>
      </div>
        </>
  );
}