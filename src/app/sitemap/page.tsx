import { Metadata } from 'next';
import { 
  Map, 
  Home, 
  Building2, 
  Users,
  GraduationCap,
  Ship,
  FileText,
  Phone,
  ExternalLink,
  ChevronRight,
  Globe,
  Mail,
  Scale,
  Shield,
  Cookie,
  Eye,
  Briefcase,
  BarChart3,
  Settings,
  Search
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Peta Laman | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Peta navigasi lengkap laman web SPPP untuk membantu anda mencari maklumat yang diperlukan',
};

interface SiteSection {
  title: string;
  path: string;
  icon: React.ElementType;
  description: string;
  children?: SiteSection[];
}

const siteMap: SiteSection[] = [
  {
    title: 'Laman Utama',
    path: '/',
    icon: Home,
    description: 'Halaman utama dengan maklumat terkini dan akses pantas'
  },
  {
    title: 'Profil SPPP',
    path: '/profil',
    icon: Building2,
    description: 'Maklumat mengenai organisasi, visi, misi, dan sejarah SPPP',
    children: [
      { title: 'Pengenalan', path: '/profil/pengenalan', icon: Building2, description: 'Sejarah dan latar belakang SPPP' },
      { title: 'Visi & Misi', path: '/profil/visi-misi', icon: Users, description: 'Visi, misi, dan objektif organisasi' },
      { title: 'Struktur Organisasi', path: '/profil/struktur', icon: Users, description: 'Carta organisasi dan hierarki pengurusan' },
      { title: 'Lembaga Pengarah', path: '/profil/lembaga', icon: Users, description: 'Maklumat ahli lembaga pengarah' },
      { title: 'Pengurusan Kanan', path: '/profil/pengurusan', icon: Users, description: 'Profil pasukan pengurusan kanan' },
      { title: 'Pencapaian', path: '/profil/pencapaian', icon: Users, description: 'Anugerah dan pengiktirafan yang diterima' }
    ]
  },
  {
    title: 'Kemudahan Pelabuhan',
    path: '/kemudahan',
    icon: Ship,
    description: 'Maklumat mengenai kemudahan dan infrastruktur pelabuhan',
    children: [
      { title: 'Terminal Kontena', path: '/kemudahan/terminal-kontena', icon: Ship, description: 'Kemudahan terminal kontena dan spesifikasi' },
      { title: 'Terminal Kargo Umum', path: '/kemudahan/kargo-umum', icon: Ship, description: 'Kemudahan untuk kargo umum dan break bulk' },
      { title: 'Terminal Penumpang', path: '/kemudahan/terminal-penumpang', icon: Ship, description: 'Terminal untuk kapal penumpang dan pelancong' },
      { title: 'Dermaga', path: '/kemudahan/dermaga', icon: Ship, description: 'Maklumat dermaga dan spesifikasi teknikal' },
      { title: 'Peralatan', path: '/kemudahan/peralatan', icon: Ship, description: 'Peralatan pengendalian kargo dan crane' },
      { title: 'Gudang', path: '/kemudahan/gudang', icon: Ship, description: 'Kemudahan gudang dan penyimpanan' },
      { title: 'Logistik', path: '/kemudahan/logistik', icon: Ship, description: 'Perkhidmatan logistik dan supply chain' },
      { title: 'Keselamatan', path: '/kemudahan/keselamatan', icon: Shield, description: 'Sistem keselamatan dan ISPS compliance' }
    ]
  },
  {
    title: 'Perkhidmatan',
    path: '/services',
    icon: Settings,
    description: 'Pelbagai perkhidmatan yang ditawarkan oleh SPPP',
    children: [
      { title: 'Perkhidmatan Pelabuhan', path: '/services/port-services', icon: Ship, description: 'Perkhidmatan utama pelabuhan' },
      { title: 'Perkhidmatan Kargo', path: '/services/cargo-services', icon: Ship, description: 'Pengendalian dan penyimpanan kargo' },
      { title: 'Perkhidmatan Kapal', path: '/services/vessel-services', icon: Ship, description: 'Perkhidmatan untuk kapal dan operator' },
      { title: 'Perkhidmatan Logistik', path: '/services/logistics', icon: Ship, description: 'Perkhidmatan logistik terintegrasi' }
    ]
  },
  {
    title: 'Program Latihan',
    path: '/training',
    icon: GraduationCap,
    description: 'Program latihan dan pembangunan kemahiran maritim',
    children: [
      { title: 'Program Tersedia', path: '/training/programs', icon: GraduationCap, description: 'Senarai lengkap program latihan' },
      { title: 'Sijil & Akreditasi', path: '/training/certification', icon: GraduationCap, description: 'Maklumat sijil dan akreditasi' },
      { title: 'Jadual Kursus', path: '/training/schedule', icon: GraduationCap, description: 'Jadual dan kalendar kursus' },
      { title: 'Pendaftaran Online', path: '/training/registration', icon: GraduationCap, description: 'Daftar program latihan secara online' }
    ]
  },
  {
    title: 'Hubungi Kami',
    path: '/hubungi',
    icon: Phone,
    description: 'Maklumat hubungan dan cara untuk menghubungi SPPP',
    children: [
      { title: 'Maklumat Am', path: '/hubungi/am', icon: Phone, description: 'Maklumat hubungan umum' },
      { title: 'Perkhidmatan Pelanggan', path: '/hubungi/pelanggan', icon: Phone, description: 'Hubungi perkhidmatan pelanggan' },
      { title: 'Operasi 24 Jam', path: '/hubungi/operasi', icon: Phone, description: 'Pusat kawalan operasi 24 jam' },
      { title: 'Media & Akhbar', path: '/hubungi/media', icon: Phone, description: 'Hubungan media dan siaran akhbar' },
      { title: 'Kerjaya', path: '/hubungi/kerjaya', icon: Phone, description: 'Peluang kerjaya dan recruitment' },
      { title: 'Aduan', path: '/hubungi/aduan', icon: Phone, description: 'Borang aduan dan maklum balas' },
      { title: 'Lokasi', path: '/hubungi/lokasi', icon: Phone, description: 'Alamat dan petunjuk arah' }
    ]
  },
  {
    title: 'Maklumat & Media',
    path: '/news',
    icon: FileText,
    description: 'Berita, pengumuman, dan maklumat terkini',
    children: [
      { title: 'Berita & Pengumuman', path: '/news', icon: FileText, description: 'Berita terkini dan pengumuman penting' },
      { title: 'Tender & Kontrak', path: '/tenders', icon: Briefcase, description: 'Maklumat tender dan peluang kontrak' },
      { title: 'Laporan Tahunan', path: '/reports', icon: BarChart3, description: 'Laporan tahunan dan dokumentasi prestasi' },
      { title: 'Dasar & Prosedur', path: '/policies', icon: FileText, description: 'Dasar organisasi dan SOP' }
    ]
  },
  {
    title: 'Portal & Sistem',
    path: '/staff-portal',
    icon: Users,
    description: 'Portal dan sistem dalaman untuk kakitangan',
    children: [
      { title: 'Portal Kakitangan', path: '/staff-portal', icon: Users, description: 'Akses sistem dalaman kakitangan' }
    ]
  },
  {
    title: 'Maklumat Undang-undang',
    path: '/legal',
    icon: Scale,
    description: 'Maklumat undang-undang dan dasar privasi',
    children: [
      { title: 'Dasar Privasi', path: '/legal/privacy', icon: Shield, description: 'Dasar privasi dan perlindungan data' },
      { title: 'Terma Penggunaan', path: '/legal/terms', icon: Scale, description: 'Terma dan syarat penggunaan laman web' },
      { title: 'Kenyataan Kebolehcapaian', path: '/legal/accessibility', icon: Eye, description: 'Komitmen kebolehcapaian web' },
      { title: 'Dasar Cookie', path: '/legal/cookies', icon: Cookie, description: 'Penggunaan cookies dan teknologi serupa' }
    ]
  }
];

export default function SitemapPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Map className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Peta Laman</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Panduan navigasi lengkap untuk membantu anda mencari maklumat yang diperlukan di laman web SPPP
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Quick Search */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Carian Pantas</h2>
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input 
                  type="text" 
                  placeholder="Cari halaman atau maklumat..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* Site Statistics */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Map className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{siteMap.length}</div>
                <div className="text-gray-600 text-sm">Bahagian Utama</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <FileText className="h-10 w-10 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {siteMap.reduce((total, section) => total + (section.children?.length || 0), 0) + siteMap.length}
                </div>
                <div className="text-gray-600 text-sm">Jumlah Halaman</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Settings className="h-10 w-10 mx-auto mb-3 text-orange-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">10+</div>
                <div className="text-gray-600 text-sm">Perkhidmatan</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Globe className="h-10 w-10 mx-auto mb-3 text-purple-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">2</div>
                <div className="text-gray-600 text-sm">Bahasa</div>
              </div>
            </div>
          </section>

          {/* Main Sitemap */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Navigasi Laman Web</h2>
            <div className="space-y-8">
              {siteMap.map((section, index) => {
                const IconComponent = section.icon;
                
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                      {/* Main Section */}
                      <div className="flex items-start mb-6">
                        <div className="p-3 bg-blue-100 rounded-lg mr-4">
                          <IconComponent className="h-8 w-8 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <a 
                              href={section.path}
                              className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200"
                            >
                              {section.title}
                            </a>
                            <div className="flex items-center text-sm text-gray-500">
                              <span className="mr-1">{section.path}</span>
                              <ExternalLink className="h-3 w-3" />
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm">{section.description}</p>
                        </div>
                      </div>

                      {/* Sub-sections */}
                      {section.children && section.children.length > 0 && (
                        <div className="border-t border-gray-200 pt-6">
                          <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                            Sub-halaman:
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {section.children.map((child, childIndex) => {
                              const ChildIconComponent = child.icon;
                              
                              return (
                                <div key={childIndex} className="group">
                                  <a 
                                    href={child.path}
                                    className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 group-hover:shadow-md"
                                  >
                                    <div className="flex items-start">
                                      <div className="p-2 bg-white rounded mr-3 group-hover:bg-blue-100 transition-colors duration-200">
                                        <ChildIconComponent className="h-4 w-4 text-gray-600 group-hover:text-blue-600" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 truncate">
                                            {child.title}
                                          </h4>
                                          <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-blue-600 transition-colors duration-200 flex-shrink-0 ml-2" />
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">{child.description}</p>
                                        <div className="text-xs text-gray-400 mt-1">{child.path}</div>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Popular Pages */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Halaman Popular</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/training/registration" className="group p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center mb-3">
                  <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Pendaftaran Latihan</h3>
                </div>
                <p className="text-sm text-gray-600">Daftar program latihan secara online</p>
              </a>
              
              <a href="/tenders" className="group p-6 border border-gray-200 rounded-lg hover:border-green-500 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center mb-3">
                  <Briefcase className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600">Tender & Kontrak</h3>
                </div>
                <p className="text-sm text-gray-600">Peluang tender dan kontrak terbuka</p>
              </a>
              
              <a href="/hubungi/am" className="group p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center mb-3">
                  <Phone className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">Hubungi Kami</h3>
                </div>
                <p className="text-sm text-gray-600">Maklumat hubungan dan alamat</p>
              </a>
            </div>
          </section>

          {/* External Resources */}
          <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sumber Luaran</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-4 flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Laman Web Berkaitan
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">
                      Kementerian Pengangkutan Malaysia
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">
                      Lembaga Pelabuhan Malaysia
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">
                      Jabatan Laut Malaysia
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Dokumen & Borang
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-green-600 hover:underline">Borang Permohonan Perkhidmatan</a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:underline">Prosedur Import/Export</a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:underline">Panduan Keselamatan</a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:underline">Brosur Perkhidmatan</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Perlukan Bantuan Navigasi?</h2>
            <p className="mb-6 text-blue-100">
              Jika anda tidak dapat mencari maklumat yang diperlukan atau menghadapi kesukaran navigasi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:04-210-5555"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center justify-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                Hubungi: 04-210 5555
              </a>
              <a 
                href="mailto:info@pppp.gov.my"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300 inline-flex items-center justify-center"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email: info@pppp.gov.my
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}