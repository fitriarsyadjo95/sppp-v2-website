import { Metadata } from 'next';
import { Layout } from '@/components/layout/layout';
import { 
  Newspaper, 
  Calendar, 
  User, 
  Eye, 
  ArrowRight,
  Search,
  Tag,
  Clock,
  TrendingUp,
  Globe,
  Image
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Berita & Media | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Berita terkini, siaran media, pengumuman, dan laporan aktiviti Suruhanjaya Pelabuhan Pulau Pinang',
};

interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: 'news' | 'announcement' | 'event' | 'achievement';
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  views: number;
  featured: boolean;
  image?: string;
  tags: string[];
}

const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'SPPP Mencatatkan Rekod Tertinggi Pengendalian Kontena 2024',
    slug: 'sppp-rekod-tertinggi-kontena-2024',
    category: 'achievement',
    excerpt: 'Pelabuhan Pulau Pinang berjaya mengendalikan 1.5 juta TEU dalam tempoh 9 bulan pertama 2024, meningkat 15% berbanding tahun sebelumnya.',
    content: `Suruhanjaya Pelabuhan Pulau Pinang (SPPP) dengan bangga mengumumkan pencapaian rekod tertinggi dalam pengendalian kontena untuk tahun 2024. Dalam tempoh 9 bulan pertama tahun ini, pelabuhan telah berjaya mengendalikan sebanyak 1.5 juta Twenty-foot Equivalent Unit (TEU), mencatatkan peningkatan sebanyak 15% berbanding tempoh yang sama tahun sebelumnya.

Pencapaian cemerlang ini adalah hasil daripada beberapa inisiatif strategik yang telah dilaksanakan, termasuk:

**Peningkatan Infrastruktur:**
- Penambahan 2 unit Ship-to-Shore Gantry Crane baharu
- Naik taraf sistem Terminal Operating System (TOS)
- Pembesaran kawasan storage yard sebanyak 10 hektar

**Peningkatan Kecekapan Operasi:**
- Pelaksanaan sistem digital tracking real-time
- Pengoptimuman jadual kapal dan berth allocation
- Latihan berterusan untuk operator dan pekerja

Dato' Seri Ahmad Hj. Hassan, Pengerusi SPPP berkata, "Pencapaian ini membuktikan komitmen kami untuk menjadi hub logistik utama di rantau Asia Tenggara. Kami akan terus melabur dalam teknologi dan infrastruktur untuk mengekalkan momentum pertumbuhan ini."

Peningkatan ini turut disumbangkan oleh pertumbuhan perdagangan antara Malaysia dengan negara-negara Asia Timur, terutamanya China dan Jepun. SPPP juga telah menjalinkan kerjasama strategik dengan beberapa shipping line utama untuk menarik lebih banyak transhipment cargo.`,
    author: 'Unit Komunikasi Korporat SPPP',
    publishDate: '2024-09-01',
    views: 2450,
    featured: true,
    tags: ['kontena', 'rekod', 'prestasi', 'infrastruktur']
  },
  {
    id: '2',
    title: 'Pelancaran Program Latihan Maritim Digital 2024',
    slug: 'program-latihan-maritim-digital-2024',
    category: 'announcement',
    excerpt: 'SPPP memperkenalkan program latihan maritim berasaskan digital dengan teknologi simulasi terkini untuk meningkatkan kemahiran tenaga kerja.',
    content: `Suruhanjaya Pelabuhan Pulau Pinang (SPPP) dengan bangga memperkenalkan Program Latihan Maritim Digital 2024, satu inisiatif revolusioner yang menggunakan teknologi simulasi terkini untuk meningkatkan kemahiran dan kompetensi tenaga kerja maritim.

Program ini melibatkan beberapa komponen utama:

**Simulator Maritim Terkini:**
- Full Mission Bridge Simulator untuk latihan navigasi
- Engine Room Simulator untuk latihan kejuruteraan
- Cargo Handling Simulator untuk operasi terminal
- Emergency Response Training menggunakan VR technology

**Kurikulum Digital:**
- Modul pembelajaran online interaktif
- Assessment digital dengan real-time feedback
- Certification tracking system
- Mobile learning application

Encik Azman Bin Yusof, Ketua Pegawai Eksekutif SPPP menyatakan, "Program ini adalah langkah proaktif kami dalam menyediakan tenaga kerja yang mahir dan bersedia untuk industri maritim masa depan. Teknologi digital membolehkan latihan yang lebih realistik dan berkesan."

Program ini dijangka melatih 500 peserta pada tahun pertama, dengan sasaran mengembangkan kepada 1,000 peserta menjelang 2025. Kerjasama dengan institusi pendidikan tempatan dan antarabangsa turut akan dijalinkan untuk memastikan standard yang tinggi.`,
    author: 'Akademi Latihan SPPP',
    publishDate: '2024-08-28',
    views: 1820,
    featured: true,
    tags: ['latihan', 'digital', 'teknologi', 'kemahiran']
  },
  {
    id: '3',
    title: 'Kunjungan Delegasi Pelabuhan Singapura ke SPPP',
    slug: 'kunjungan-delegasi-singapura-sppp',
    category: 'event',
    excerpt: 'Delegasi Maritime and Port Authority of Singapore (MPA) melawat SPPP untuk membincangkan kerjasama dalam pembangunan port connectivity.',
    content: `Suruhanjaya Pelabuhan Pulau Pinang (SPPP) menerima kunjungan delegasi daripada Maritime and Port Authority of Singapore (MPA) pada 25 Ogos 2024. Kunjungan ini adalah sebahagian daripada inisiatif bersama untuk mengukuhkan kerjasama dalam pembangunan konektiviti pelabuhan di rantau ASEAN.

**Agenda Kunjungan:**
- Lawatan ke Terminal Container dan kemudahan pelabuhan
- Pembentangan sistem digitalisasi port operations
- Perbincangan mengenai green port initiatives
- Perkongsian best practices dalam port management

**Kerjasama yang Dibincangkan:**
- Port Connectivity Platform untuk pertukaran data digital
- Joint training programs untuk maritime professionals
- Research collaboration dalam sustainable port development
- Shipping line partnerships untuk meningkatkan cargo volume

Puan Rashidah Bt. Yusof, Ketua Bahagian Komersial SPPP berkata, "Kerjasama dengan MPA Singapore akan membuka peluang baharu untuk SPPP dalam menarik transhipment cargo dan meningkatkan konektiviti dengan pelabuhan-pelabuhan utama di rantau ini."

Delegasi MPA yang diketuai oleh Mr. Adrian Goh, Director of Port Operations, memberikan pujian terhadap kemudahan dan sistem operasi SPPP. Mereka bersetuju untuk meneruskan perbincangan melalui working committee yang akan dibentuk tidak lama lagi.`,
    author: 'Bahagian Komersial SPPP',
    publishDate: '2024-08-25',
    views: 1345,
    featured: false,
    tags: ['kerjasama', 'singapura', 'delegasi', 'konektiviti']
  },
  {
    id: '4',
    title: 'SPPP Raih Anugerah Port Excellence Award 2024',
    slug: 'sppp-anugerah-port-excellence-2024',
    category: 'achievement',
    excerpt: 'SPPP dinobatkan sebagai pemenang Port Excellence Award 2024 dalam kategori "Best Digital Transformation Initiative" oleh Asian Port Awards.',
    content: `Suruhanjaya Pelabuhan Pulau Pinang (SPPP) sekali lagi membuktikan kecemerlangan dalam industri pelabuhan dengan meraih anugerah Port Excellence Award 2024 dalam kategori "Best Digital Transformation Initiative" yang dianjurkan oleh Asian Port Awards.

**Inisiatif Digital yang Diiktiraf:**
- Pelaksanaan AI-powered container tracking system
- Automated gate system dengan OCR technology
- Blockchain-based documentation system
- IoT integration untuk equipment monitoring

**Kriteria Penilaian:**
- Innovation dan creativity dalam digital solutions
- Measurable impact pada operational efficiency
- Sustainability dan environmental benefits
- User experience improvement

Dato' Seri Ahmad Hj. Hassan, Pengerusi SPPP menyatakan, "Anugerah ini adalah pengiktirafan terhadap dedikasi pasukan kami dalam mentransformasi operasi pelabuhan menggunakan teknologi terkini. Ini bukan sahaja meningkatkan kecekapan, malah menjadikan SPPP sebagai smart port yang berdaya saing."

**Impact Digital Transformation:**
- Pengurangan masa dwel kontena sebanyak 30%
- Peningkatan productivity sebanyak 25%
- Pengurangan carbon footprint sebanyak 15%
- Peningkatan customer satisfaction score kepada 95%

Majlis anugerah telah berlangsung di Shangri-La Hotel, Singapore pada 20 Ogos 2024, dihadiri oleh lebih 300 industry leaders dari seluruh Asia Pacific. SPPP bersaing dengan 45 pelabuhan lain dari 15 negara untuk merebut anugerah ini.`,
    author: 'Unit Komunikasi Korporat SPPP',
    publishDate: '2024-08-21',
    views: 2890,
    featured: true,
    tags: ['anugerah', 'digital', 'transformasi', 'kecemerlangan']
  },
  {
    id: '5',
    title: 'Pembukaan Rasmi Warehouse Automation Facility',
    slug: 'pembukaan-warehouse-automation-facility',
    category: 'event',
    excerpt: 'Yang Berhormat Menteri Pengangkutan merasmikan pembukaan Warehouse Automation Facility yang baharu dengan teknologi robotics dan AI.',
    content: `Yang Berhormat Dato' Seri Dr. Wee Ka Siong, Menteri Pengangkutan Malaysia telah merasmikan pembukaan Warehouse Automation Facility yang baharu di Pelabuhan Pulau Pinang pada 15 Ogos 2024. Kemudahan ini merupakan yang pertama seumpamanya di Malaysia yang menggunakan teknologi robotics dan artificial intelligence sepenuhnya.

**Kemudahan Automation:**
- Automated Storage and Retrieval System (ASRS)
- Robotic sorting dan packaging system
- AI-powered inventory management
- Autonomous mobile robots untuk material handling

**Spesifikasi Teknikal:**
- Kawasan: 50,000 meter persegi
- Kapasiti storage: 100,000 pallets
- Processing capacity: 10,000 packages per jam
- Energy efficiency: 40% pengurangan penggunaan elektrik

Dalam ucapan beliau, YB Menteri menyatakan, "Kemudahan ini membuktikan Malaysia berada di barisan hadapan dalam revolusi industri 4.0. SPPP telah menjadi contoh terbaik bagaimana teknologi boleh mentransformasi operasi pelabuhan."

**Manfaat Ekonomi:**
- Penciptaan 200 pekerjaan baru dalam bidang teknologi
- Peningkatan kapasiti handling sebanyak 50%
- Pengurangan masa processing daripada 48 jam kepada 12 jam
- ROI dijangka dalam tempoh 5 tahun

Projek bernilai RM120 juta ini telah dibangunkan dalam kerjasama dengan syarikat teknologi terkemuka dari Jerman dan Jepun. Fasa kedua pembangunan dijangka bermula pada 2025 dengan penambahan kemudahan cold storage automation.`,
    author: 'Unit Komunikasi Korporat SPPP',
    publishDate: '2024-08-15',
    views: 1950,
    featured: false,
    tags: ['automation', 'warehouse', 'robotics', 'teknologi', 'rasmi']
  },
  {
    id: '6',
    title: 'Program Corporate Social Responsibility: Bantuan Pendidikan Maritim',
    slug: 'csr-bantuan-pendidikan-maritim',
    category: 'announcement',
    excerpt: 'SPPP melancarkan program CSR untuk memberikan biasiswa dan bantuan pendidikan kepada 100 pelajar dari keluarga kurang mampu yang berminat dalam bidang maritim.',
    content: `Suruhanjaya Pelabuhan Pulau Pinang (SPPP) dengan komitmen tinggi terhadap tanggungjawab sosial korporat, melancarkan Program Bantuan Pendidikan Maritim untuk membantu 100 pelajar dari keluarga kurang mampu yang berminat menceburi bidang maritim.

**Program CSR Pendidikan:**
- Biasiswa penuh untuk diploma dan degree programs
- Bantuan sara hidup bulanan
- Internship opportunities di SPPP
- Guaranteed employment selepas graduation (subject to performance)

**Kriteria Kelayakan:**
- Pendapatan keluarga kurang daripada RM3,000 sebulan
- Keputusan akademik yang baik (minimum 5 kredit SPM)
- Minat dalam bidang maritime dan port operations
- Warganegara Malaysia

Encik Hafiz Bin Abdullah, Ketua Bahagian Sumber Manusia SPPP berkata, "Program ini adalah komitmen jangka panjang kami untuk membangunkan modal insan tempatan dalam industri maritim. Kami percaya bahawa pendidikan adalah kunci kepada pembangunan negara."

**Institusi Kerjasama:**
- Universiti Malaysia Terengganu (Maritime Technology)
- ALAM Maritime Academy
- Politeknik Seberang Perai (Logistics Management)
- Institut Kemahiran MARA (Port Operations)

**Peruntukan Program:**
- RM5 juta untuk 5 tahun
- Covering 100 students per year
- Additional RM2 juta untuk skills training programs
- Scholarship untuk overseas maritime courses

Permohonan dibuka mulai 1 September 2024 dan akan ditutup pada 31 Oktober 2024. Maklumat lanjut boleh didapati di laman web SPPP atau dengan menghubungi Unit Sumber Manusia.`,
    author: 'Bahagian Sumber Manusia SPPP',
    publishDate: '2024-08-10',
    views: 1120,
    featured: false,
    tags: ['csr', 'pendidikan', 'biasiswa', 'bantuan', 'maritim']
  }
];

const categories = [
  { key: 'all', name: 'Semua', count: newsArticles.length },
  { key: 'news', name: 'Berita', count: newsArticles.filter(a => a.category === 'news').length },
  { key: 'announcement', name: 'Pengumuman', count: newsArticles.filter(a => a.category === 'announcement').length },
  { key: 'event', name: 'Acara', count: newsArticles.filter(a => a.category === 'event').length },
  { key: 'achievement', name: 'Pencapaian', count: newsArticles.filter(a => a.category === 'achievement').length }
];

const categoryColors = {
  news: 'text-blue-600 bg-blue-100',
  announcement: 'text-green-600 bg-green-100',
  event: 'text-purple-600 bg-purple-100',
  achievement: 'text-yellow-600 bg-yellow-100'
};

export default function NewsPage() {
  const featuredArticles = newsArticles.filter(article => article.featured).slice(0, 2);
  const recentArticles = newsArticles.filter(article => !article.featured);
  const trending = newsArticles.sort((a, b) => b.views - a.views).slice(0, 5);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Newspaper className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Berita & Media</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Ikuti berita terkini, pengumuman, dan perkembangan terbaharu 
                Suruhanjaya Pelabuhan Pulau Pinang.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search and Filter */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex-1 relative">
                  <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari berita, pengumuman, atau acara..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.key}
                      className="px-4 py-2 text-sm font-semibold rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Articles */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Berita Utama</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <article 
                  key={article.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <Image className="h-16 w-16 text-blue-400" />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${categoryColors[article.category]}`}>
                        {article.category === 'achievement' ? 'Pencapaian' :
                         article.category === 'announcement' ? 'Pengumuman' :
                         article.category === 'event' ? 'Acara' : 'Berita'}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(article.publishDate).toLocaleDateString('ms-MY', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Eye className="h-4 w-4 mr-1" />
                        {article.views} views
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <a 
                        href={`/news/${article.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Baca Selengkapnya
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Articles */}
            <section className="lg:col-span-2">
              <div className="flex items-center mb-8">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Berita Terkini</h2>
              </div>

              <div className="space-y-6">
                {recentArticles.map((article) => (
                  <article 
                    key={article.id}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-64 aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Image className="h-10 w-10 text-gray-400" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${categoryColors[article.category]}`}>
                            {article.category === 'achievement' ? 'Pencapaian' :
                             article.category === 'announcement' ? 'Pengumuman' :
                             article.category === 'event' ? 'Acara' : 'Berita'}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(article.publishDate).toLocaleDateString('ms-MY', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          <a href={`/news/${article.slug}`} className="hover:text-blue-600 transition-colors duration-300">
                            {article.title}
                          </a>
                        </h3>
                        
                        <p className="text-gray-600 mb-3 line-clamp-2">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="h-4 w-4 mr-1" />
                            {article.author}
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center text-sm text-gray-500">
                              <Eye className="h-4 w-4 mr-1" />
                              {article.views}
                            </div>
                            <a 
                              href={`/news/${article.slug}`}
                              className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                            >
                              Baca →
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-8">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Muat Lebih Banyak Berita
                </button>
              </div>
            </section>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Trending Articles */}
              <section className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <TrendingUp className="h-5 w-5 text-red-600 mr-2" />
                  <h3 className="text-lg font-bold text-gray-900">Trending</h3>
                </div>
                
                <div className="space-y-4">
                  {trending.map((article, index) => (
                    <div key={article.id} className="flex gap-3">
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 text-sm font-bold rounded">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
                          <a href={`/news/${article.slug}`} className="hover:text-blue-600 transition-colors duration-300">
                            {article.title}
                          </a>
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Eye className="h-3 w-3" />
                          {article.views} views
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Newsletter Signup */}
              <section className="bg-blue-50 rounded-lg p-6">
                <div className="text-center">
                  <Globe className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Newsletter SPPP
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Dapatkan berita terkini terus ke e-mel anda
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="E-mel anda"
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition-colors duration-300">
                      Langgan
                    </button>
                  </div>
                </div>
              </section>

              {/* Social Media Links */}
              <section className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Ikuti Kami</h3>
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <Globe className="h-4 w-4 text-blue-600" />
                    </div>
                    Facebook
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <Globe className="h-4 w-4 text-blue-600" />
                    </div>
                    LinkedIn
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <Globe className="h-4 w-4 text-blue-600" />
                    </div>
                    YouTube
                  </a>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
}