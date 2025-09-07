import { Metadata } from 'next';
import { 
  FileText, 
  Download, 
  Calendar, 
  BarChart3,
  TrendingUp,
  PieChart,
  FileBarChart,
  Eye,
  ExternalLink,
  Search,
  Filter,
  Archive,
  Clock,
  Users,
  Ship,
  DollarSign,
  Target,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Laporan Tahunan | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Laporan tahunan, laporan kewangan, dan statistik prestasi Suruhanjaya Pelabuhan Pulau Pinang',
};

interface Report {
  id: string;
  title: string;
  category: 'annual' | 'financial' | 'operational' | 'sustainability' | 'governance';
  year: number;
  description: string;
  fileSize: string;
  language: 'bm' | 'en' | 'both';
  publishDate: string;
  downloadCount: number;
  featured: boolean;
  highlights?: string[];
}

const reports: Report[] = [
  {
    id: 'ar2023',
    title: 'Laporan Tahunan 2023',
    category: 'annual',
    year: 2023,
    description: 'Laporan tahunan komprehensif yang merangkumi prestasi operasi, kewangan, dan pencapaian strategik SPPP untuk tahun 2023.',
    fileSize: '25.5 MB',
    language: 'both',
    publishDate: '31 Mac 2024',
    downloadCount: 2341,
    featured: true,
    highlights: [
      'Pengendalian kontena meningkat 12% kepada 1.45 juta TEU',
      'Pendapatan RM 185 juta, peningkatan 8% dari 2022',
      'Pelaburan infrastruktur RM 95 juta',
      'Pelaksanaan inisiatif kelestarian hijau'
    ]
  },
  {
    id: 'fs2023',
    title: 'Penyata Kewangan 2023',
    category: 'financial',
    year: 2023,
    description: 'Penyata kewangan yang telah diaudit untuk tahun berakhir 31 Disember 2023, termasuk laporan juruaudit bebas.',
    fileSize: '8.2 MB',
    language: 'both',
    publishDate: '30 April 2024',
    downloadCount: 892,
    featured: false
  },
  {
    id: 'ops2023',
    title: 'Laporan Prestasi Operasi 2023',
    category: 'operational',
    year: 2023,
    description: 'Analisis mendalam prestasi operasi terminal, keselamatan, dan kecekapan perkhidmatan pelabuhan.',
    fileSize: '15.3 MB',
    language: 'both',
    publishDate: '15 Mac 2024',
    downloadCount: 567,
    featured: false,
    highlights: [
      'Berth occupancy rate 68%',
      'Average vessel waiting time 4.2 jam',
      'Zero kemalangan fatality',
      '98.5% on-time performance'
    ]
  },
  {
    id: 'ar2022',
    title: 'Laporan Tahunan 2022',
    category: 'annual',
    year: 2022,
    description: 'Laporan tahunan 2022 yang merangkumi recovery post-pandemik dan strategi pertumbuhan jangka panjang.',
    fileSize: '22.1 MB',
    language: 'both',
    publishDate: '31 Mac 2023',
    downloadCount: 4567,
    featured: false,
    highlights: [
      'Pengendalian kontena 1.29 juta TEU',
      'Pendapatan RM 171 juta',
      'Digital transformation initiatives',
      'ESG framework implementation'
    ]
  },
  {
    id: 'sust2023',
    title: 'Laporan Kelestarian 2023',
    category: 'sustainability',
    year: 2023,
    description: 'Laporan ESG (Environmental, Social, Governance) dan inisiatif kelestarian yang dilaksanakan oleh SPPP.',
    fileSize: '12.7 MB',
    language: 'both',
    publishDate: '15 Jun 2024',
    downloadCount: 234,
    featured: true,
    highlights: [
      '25% pengurangan carbon footprint',
      'Green port certification achieved',
      'Community investment RM 2.8 juta',
      '40% renewable energy adoption'
    ]
  },
  {
    id: 'gov2023',
    title: 'Laporan Tadbir Urus Korporat 2023',
    category: 'governance',
    year: 2023,
    description: 'Laporan mengenai amalan tadbir urus korporat, kepatuhan regulatori, dan pengurusan risiko.',
    fileSize: '6.4 MB',
    language: 'both',
    publishDate: '20 April 2024',
    downloadCount: 156,
    featured: false
  },
  {
    id: 'fs2022',
    title: 'Penyata Kewangan 2022',
    category: 'financial',
    year: 2022,
    description: 'Penyata kewangan yang telah diaudit untuk tahun berakhir 31 Disember 2022.',
    fileSize: '7.8 MB',
    language: 'both',
    publishDate: '28 April 2023',
    downloadCount: 1234,
    featured: false
  },
  {
    id: 'ar2021',
    title: 'Laporan Tahunan 2021',
    category: 'annual',
    year: 2021,
    description: 'Laporan tahunan 2021 yang menyoroti ketahanan operasi semasa pandemik COVID-19.',
    fileSize: '19.8 MB',
    language: 'both',
    publishDate: '31 Mac 2022',
    downloadCount: 3421,
    featured: false,
    highlights: [
      'Operasi berterusan semasa pandemik',
      'Pengendalian kontena 1.15 juta TEU',
      'Digital services enhancement',
      'Health & safety protocols'
    ]
  }
];

const categoryNames = {
  annual: 'Laporan Tahunan',
  financial: 'Kewangan',
  operational: 'Operasi',
  sustainability: 'Kelestarian',
  governance: 'Tadbir Urus'
};

const categoryColors = {
  annual: 'bg-blue-500',
  financial: 'bg-green-500',
  operational: 'bg-orange-500',
  sustainability: 'bg-emerald-500',
  governance: 'bg-purple-500'
};

const languageNames = {
  bm: 'Bahasa Malaysia',
  en: 'English',
  both: 'Dua Bahasa'
};

export default function ReportsPage() {
  const featuredReports = reports.filter(r => r.featured);
  const recentReports = reports.filter(r => r.year >= 2022);
  const archivedReports = reports.filter(r => r.year < 2022);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <FileBarChart className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Laporan & Publikasi</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Laporan tahunan, penyata kewangan, dan data prestasi yang memberikan 
                gambaran komprehensif mengenai pencapaian dan prestasi SPPP.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Key Statistics */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Prestasi Utama 2023
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Ship className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">1.45M</div>
                <div className="text-gray-600 text-sm">TEU Dikendalikan</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <DollarSign className="h-10 w-10 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">RM 185M</div>
                <div className="text-gray-600 text-sm">Jumlah Pendapatan</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Target className="h-10 w-10 mx-auto mb-3 text-orange-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">98.5%</div>
                <div className="text-gray-600 text-sm">On-Time Performance</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Award className="h-10 w-10 mx-auto mb-3 text-purple-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">Zero</div>
                <div className="text-gray-600 text-sm">Kemalangan Fatality</div>
              </div>
            </div>
          </section>

          {/* Search and Filter */}
          <section className="mb-8 bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input 
                    type="text" 
                    placeholder="Cari laporan mengikut tajuk atau tahun..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Semua Kategori</option>
                  <option value="annual">Laporan Tahunan</option>
                  <option value="financial">Kewangan</option>
                  <option value="operational">Operasi</option>
                  <option value="sustainability">Kelestarian</option>
                  <option value="governance">Tadbir Urus</option>
                </select>
                <select className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Semua Tahun</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>
              </div>
            </div>
          </section>

          {/* Featured Reports */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Laporan Terkini</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredReports.map((report) => (
                <div key={report.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`
                          px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[report.category]} text-white
                        `}>
                          {categoryNames[report.category]}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                          {report.year}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{languageNames[report.language]}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{report.title}</h3>
                    <p className="text-gray-700 mb-6">{report.description}</p>

                    {report.highlights && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Pencapaian Utama:</h4>
                        <ul className="space-y-2">
                          {report.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <TrendingUp className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {report.publishDate}
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        {report.fileSize}
                      </div>
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-2" />
                        {report.downloadCount} muat turun
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                        <Download className="h-4 w-4 mr-2" />
                        Muat Turun PDF
                      </button>
                      <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
                        <Eye className="h-4 w-4 mr-2" />
                        Pratonton
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* All Reports */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Semua Laporan</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Laporan
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Kategori
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tahun
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tarikh Terbit
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Saiz Fail
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tindakan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentReports.map((report) => (
                      <tr key={report.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 text-gray-400 mr-3" />
                            <div>
                              <div className="text-sm font-medium text-gray-900">{report.title}</div>
                              <div className="text-sm text-gray-500">{languageNames[report.language]}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`
                            px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${categoryColors[report.category]} text-white
                          `}>
                            {categoryNames[report.category]}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {report.year}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {report.publishDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {report.fileSize}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex gap-2">
                            <button className="text-blue-600 hover:text-blue-900 flex items-center">
                              <Download className="h-4 w-4 mr-1" />
                              Muat Turun
                            </button>
                            <button className="text-gray-600 hover:text-gray-900 flex items-center">
                              <Eye className="h-4 w-4 mr-1" />
                              Lihat
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Archived Reports */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Archive className="h-6 w-6 text-gray-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Arkib Laporan</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Akses laporan tahun-tahun sebelumnya untuk rujukan dan analisis trend jangka panjang.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {archivedReports.map((report) => (
                  <div key={report.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`
                        px-2 py-1 rounded text-xs font-semibold ${categoryColors[report.category]} text-white
                      `}>
                        {categoryNames[report.category]}
                      </span>
                      <span className="text-sm text-gray-500">{report.year}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{report.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{report.description.slice(0, 120)}...</p>
                    
                    {report.highlights && (
                      <div className="mb-4">
                        <div className="text-xs font-semibold text-gray-900 mb-2">Highlights:</div>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {report.highlights.slice(0, 2).map((highlight, index) => (
                            <li key={index}>• {highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>{report.publishDate}</span>
                      <span>{report.fileSize}</span>
                    </div>
                    
                    <button className="w-full bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
                      <Download className="h-3 w-3 mr-2" />
                      Muat Turun
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center">
                  <Archive className="h-4 w-4 mr-2" />
                  Lihat Semua Arkib
                </button>
              </div>
            </div>
          </section>

          {/* Report Categories */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kategori Laporan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {Object.entries(categoryNames).map(([key, name]) => {
                const count = reports.filter(r => r.category === key).length;
                return (
                  <div key={key} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full ${categoryColors[key as keyof typeof categoryColors]} flex items-center justify-center`}>
                      {key === 'annual' && <FileBarChart className="h-6 w-6 text-white" />}
                      {key === 'financial' && <DollarSign className="h-6 w-6 text-white" />}
                      {key === 'operational' && <BarChart3 className="h-6 w-6 text-white" />}
                      {key === 'sustainability' && <TrendingUp className="h-6 w-6 text-white" />}
                      {key === 'governance' && <Users className="h-6 w-6 text-white" />}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{count}</div>
                    <div className="text-sm text-gray-600">Laporan</div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Subscription Section */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Langganan Laporan Terkini</h2>
            <p className="mb-6 text-blue-100">
              Dapatkan notifikasi terus apabila laporan baharu diterbitkan. 
              Kekal dikemaskini dengan prestasi dan pencapaian terkini SPPP.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input 
                type="email" 
                placeholder="Masukkan alamat emel anda"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                Langgan
              </button>
            </div>
            <div className="mt-4 text-sm text-blue-200">
              Kami akan menghantar maksimum 4 emel setahun untuk laporan utama.
            </div>
          </section>
        </div>
      </div>
    </>
  );
}