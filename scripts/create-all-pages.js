const fs = require('fs');
const path = require('path');

const allPages = [
  // Facilities & Services Section
  {
    path: 'src/app/kemudahan/page.tsx',
    title: 'Kemudahan & Perkhidmatan',
    subtitle: 'Kemudahan dan perkhidmatan pelabuhan',
    breadcrumbs: [{ name: 'Utama', href: '/' }, { name: 'Kemudahan & Perkhidmatan' }]
  },
  {
    path: 'src/app/kemudahan/zon-bebas/page.tsx',
    title: 'Zon Bebas Komersil',
    subtitle: 'Kemudahan zon bebas komersil untuk perdagangan',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Kemudahan', href: '/kemudahan' },
      { name: 'Zon Bebas Komersil' }
    ]
  },
  {
    path: 'src/app/kemudahan/kontena-butterworth/page.tsx',
    title: 'Pengkalan Kontena Butterworth Utara',
    subtitle: 'Terminal kontena moden di Butterworth',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Kemudahan', href: '/kemudahan' },
      { name: 'Kontena Butterworth' }
    ]
  },
  {
    path: 'src/app/kemudahan/dermaga-butterworth/page.tsx',
    title: 'Dermaga Air Dalam Butterworth',
    subtitle: 'Kemudahan dermaga air dalam untuk kapal besar',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Kemudahan', href: '/kemudahan' },
      { name: 'Dermaga Butterworth' }
    ]
  },
  {
    path: 'src/app/kemudahan/kargo-prai/page.tsx',
    title: 'Pengkalan Kargo Pukal Prai',
    subtitle: 'Terminal kargo pukal di Prai',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Kemudahan', href: '/kemudahan' },
      { name: 'Kargo Prai' }
    ]
  },
  {
    path: 'src/app/kemudahan/swettenham-pier/page.tsx',
    title: 'Swettenham Pier',
    subtitle: 'Terminal pelayaran antarabangsa',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Kemudahan', href: '/kemudahan' },
      { name: 'Swettenham Pier' }
    ]
  },
  {
    path: 'src/app/kemudahan/perkhidmatan-feri/page.tsx',
    title: 'Perkhidmatan Feri',
    subtitle: 'Perkhidmatan feri penumpang Pulau Pinang',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Kemudahan', href: '/kemudahan' },
      { name: 'Perkhidmatan Feri' }
    ]
  },
  {
    path: 'src/app/kemudahan/jeti-minyak/page.tsx',
    title: 'Jeti Minyak Sayur',
    subtitle: 'Kemudahan pengendalian minyak sayur',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Kemudahan', href: '/kemudahan' },
      { name: 'Jeti Minyak' }
    ]
  },
  {
    path: 'src/app/kemudahan/perkhidmatan-bantuan/page.tsx',
    title: 'Perkhidmatan Bantuan',
    subtitle: 'Perkhidmatan sokongan pelabuhan',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Kemudahan', href: '/kemudahan' },
      { name: 'Perkhidmatan Bantuan' }
    ]
  },
  {
    path: 'src/app/kemudahan/port-crafts/page.tsx',
    title: 'Port Crafts',
    subtitle: 'Perkhidmatan kapal bantuan pelabuhan',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Kemudahan', href: '/kemudahan' },
      { name: 'Port Crafts' }
    ]
  },
  {
    path: 'src/app/kemudahan/bunkering/page.tsx',
    title: 'Bunkering',
    subtitle: 'Perkhidmatan bekalan minyak kapal',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Kemudahan', href: '/kemudahan' },
      { name: 'Bunkering' }
    ]
  },
  {
    path: 'src/app/kemudahan/dermaga-prai/page.tsx',
    title: 'Dermaga Prai',
    subtitle: 'Kemudahan dermaga di Prai',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Kemudahan', href: '/kemudahan' },
      { name: 'Dermaga Prai' }
    ]
  },

  // Port Installations Section
  {
    path: 'src/app/pemasangan/page.tsx',
    title: 'Pemasangan Pelabuhan',
    subtitle: 'Kemudahan pemasangan pelabuhan',
    breadcrumbs: [{ name: 'Utama', href: '/' }, { name: 'Pemasangan Pelabuhan' }]
  },
  {
    path: 'src/app/pemasangan/pelabuhan-penang/page.tsx',
    title: 'Pelabuhan Penang',
    subtitle: 'Kemudahan dan operasi Pelabuhan Penang',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Pemasangan', href: '/pemasangan' },
      { name: 'Pelabuhan Penang' }
    ]
  },
  {
    path: 'src/app/pemasangan/jeti-teluk-ewa/page.tsx',
    title: 'Jeti Teluk Ewa',
    subtitle: 'Kemudahan dan operasi Jeti Teluk Ewa',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Pemasangan', href: '/pemasangan' },
      { name: 'Jeti Teluk Ewa' }
    ]
  },

  // Resources Section
  {
    path: 'src/app/sumber/page.tsx',
    title: 'Sumber',
    subtitle: 'Sumber maklumat dan dokumen',
    breadcrumbs: [{ name: 'Utama', href: '/' }, { name: 'Sumber' }]
  },
  {
    path: 'src/app/sumber/tender/page.tsx',
    title: 'Tender & Sebut Harga',
    subtitle: 'Tender dan sebut harga semasa',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Sumber', href: '/sumber' },
      { name: 'Tender & Sebut Harga' }
    ]
  },
  {
    path: 'src/app/sumber/galeri-media/page.tsx',
    title: 'Galeri Media',
    subtitle: 'Koleksi foto dan video',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Sumber', href: '/sumber' },
      { name: 'Galeri Media' }
    ]
  },
  {
    path: 'src/app/sumber/penerbitan/page.tsx',
    title: 'Penerbitan',
    subtitle: 'Penerbitan dan laporan tahunan',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Sumber', href: '/sumber' },
      { name: 'Penerbitan' }
    ]
  },
  {
    path: 'src/app/sumber/arkib/page.tsx',
    title: 'Arkib Elektronik',
    subtitle: 'Arkib dokumen elektronik',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Sumber', href: '/sumber' },
      { name: 'Arkib' }
    ]
  },
  {
    path: 'src/app/sumber/e-penyertaan/page.tsx',
    title: 'e-Penyertaan',
    subtitle: 'Portal penyertaan elektronik',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Sumber', href: '/sumber' },
      { name: 'e-Penyertaan' }
    ]
  },

  // Contact Section
  {
    path: 'src/app/hubungi/page.tsx',
    title: 'Hubungi Kami',
    subtitle: 'Hubungi Suruhanjaya Pelabuhan Pulau Pinang',
    breadcrumbs: [{ name: 'Utama', href: '/' }, { name: 'Hubungi Kami' }]
  },
  {
    path: 'src/app/hubungi/lokasi/page.tsx',
    title: 'Lokasi',
    subtitle: 'Lokasi pejabat dan kemudahan',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Hubungi', href: '/hubungi' },
      { name: 'Lokasi' }
    ]
  },
  {
    path: 'src/app/hubungi/maklum-balas/page.tsx',
    title: 'Maklum Balas',
    subtitle: 'Hantar maklum balas dan cadangan',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Hubungi', href: '/hubungi' },
      { name: 'Maklum Balas' }
    ]
  },
  {
    path: 'src/app/hubungi/kajian-kepuasan/page.tsx',
    title: 'Kajian Kepuasan Pelanggan',
    subtitle: 'Borang kajian kepuasan pelanggan',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Hubungi', href: '/hubungi' },
      { name: 'Kajian Kepuasan' }
    ]
  },
  {
    path: 'src/app/hubungi/kerjaya/page.tsx',
    title: 'Kerjaya',
    subtitle: 'Peluang kerjaya di SPPP',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Hubungi', href: '/hubungi' },
      { name: 'Kerjaya' }
    ]
  },
  {
    path: 'src/app/hubungi/faq/page.tsx',
    title: 'Soalan Lazim',
    subtitle: 'Soalan yang kerap ditanya',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Hubungi', href: '/hubungi' },
      { name: 'Soalan Lazim' }
    ]
  },
  {
    path: 'src/app/hubungi/pelancongan/page.tsx',
    title: 'Pelancongan Maritim',
    subtitle: 'Maklumat pelancongan maritim',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Hubungi', href: '/hubungi' },
      { name: 'Pelancongan' }
    ]
  },
  {
    path: 'src/app/hubungi/permohonan-maklumat/page.tsx',
    title: 'Permohonan Maklumat',
    subtitle: 'Permohonan maklumat rasmi',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Hubungi', href: '/hubungi' },
      { name: 'Permohonan Maklumat' }
    ]
  }
];

// Template function for generating page content
function generatePageContent(page) {
  const breadcrumbsStr = page.breadcrumbs ? 
    `[${page.breadcrumbs.map(b => `{ name: '${b.name}'${b.href ? `, href: '${b.href}'` : ''} }`).join(', ')}]` : 
    'undefined';

  return `import { PageTemplate } from '@/components/PageTemplate'

export default function ${page.title.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <PageTemplate
      title="${page.title}"
      subtitle="${page.subtitle}"
      breadcrumbs={${breadcrumbsStr}}
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-sppp-light-gray rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-sppp-dark-blue mb-4">
            ${page.title}
          </h2>
          <p className="text-sppp-gray">
            ${page.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Content sections will be added here */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-sppp-dark-blue mb-2">
              Maklumat
            </h3>
            <p className="text-sppp-gray">
              Kandungan akan dikemaskini.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
`;
}

// Create all pages
allPages.forEach(page => {
  const filePath = path.join(process.cwd(), page.path);
  const content = generatePageContent(page);
  
  // Ensure directory exists
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write file
  fs.writeFileSync(filePath, content);
  console.log(`✅ Created: ${page.path}`);
});

console.log(`\n✨ Created ${allPages.length} pages successfully!`);