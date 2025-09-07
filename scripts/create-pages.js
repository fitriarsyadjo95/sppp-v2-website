const fs = require('fs');
const path = require('path');

const pages = [
  // Profile Section
  {
    path: 'src/app/profil/page.tsx',
    title: 'Profil',
    subtitle: 'Maklumat mengenai Suruhanjaya Pelabuhan Pulau Pinang',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil' }
    ]
  },
  {
    path: 'src/app/profil/latar-belakang/page.tsx',
    title: 'Latar Belakang',
    subtitle: 'Sejarah dan latar belakang SPPP',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil', href: '/profil' },
      { name: 'Latar Belakang' }
    ]
  },
  {
    path: 'src/app/profil/latar-belakang/sppp/page.tsx',
    title: 'Latar Belakang SPPP',
    subtitle: 'Sejarah penubuhan dan perkembangan SPPP',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil', href: '/profil' },
      { name: 'Latar Belakang', href: '/profil/latar-belakang' },
      { name: 'SPPP' }
    ]
  },
  {
    path: 'src/app/profil/latar-belakang/teluk-ewa/page.tsx',
    title: 'Latar Belakang Teluk Ewa',
    subtitle: 'Sejarah dan pembangunan Jeti Teluk Ewa',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil', href: '/profil' },
      { name: 'Latar Belakang', href: '/profil/latar-belakang' },
      { name: 'Teluk Ewa' }
    ]
  },
  {
    path: 'src/app/profil/visi-misi/page.tsx',
    title: 'Visi & Misi',
    subtitle: 'Visi, misi dan objektif organisasi',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil', href: '/profil' },
      { name: 'Visi & Misi' }
    ]
  },
  {
    path: 'src/app/profil/peranan/page.tsx',
    title: 'Peranan Suruhanjaya',
    subtitle: 'Peranan dan tanggungjawab Suruhanjaya Pelabuhan',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil', href: '/profil' },
      { name: 'Peranan' }
    ]
  },
  {
    path: 'src/app/profil/infrastruktur/page.tsx',
    title: 'Infrastruktur & Jalinan Perhubungan',
    subtitle: 'Kemudahan infrastruktur dan sistem perhubungan',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil', href: '/profil' },
      { name: 'Infrastruktur' }
    ]
  },
  {
    path: 'src/app/profil/infrastruktur/sppp/page.tsx',
    title: 'Infrastruktur SPPP',
    subtitle: 'Kemudahan infrastruktur di SPPP',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil', href: '/profil' },
      { name: 'Infrastruktur', href: '/profil/infrastruktur' },
      { name: 'SPPP' }
    ]
  },
  {
    path: 'src/app/profil/infrastruktur/teluk-ewa/page.tsx',
    title: 'Infrastruktur Teluk Ewa',
    subtitle: 'Kemudahan infrastruktur di Teluk Ewa',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil', href: '/profil' },
      { name: 'Infrastruktur', href: '/profil/infrastruktur' },
      { name: 'Teluk Ewa' }
    ]
  },
  {
    path: 'src/app/profil/sijil-penghargaan/page.tsx',
    title: 'Sijil & Penghargaan',
    subtitle: 'Sijil dan penghargaan yang diterima',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil', href: '/profil' },
      { name: 'Sijil & Penghargaan' }
    ]
  },
  {
    path: 'src/app/profil/carta-organisasi/page.tsx',
    title: 'Carta Organisasi',
    subtitle: 'Struktur organisasi SPPP',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil', href: '/profil' },
      { name: 'Carta Organisasi' }
    ]
  },
  {
    path: 'src/app/profil/organisasi/page.tsx',
    title: 'Organisasi',
    subtitle: 'Struktur kepimpinan dan pengurusan',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil', href: '/profil' },
      { name: 'Organisasi' }
    ]
  },
  {
    path: 'src/app/profil/organisasi/lembaga-pengarah/page.tsx',
    title: 'Lembaga Pengarah',
    subtitle: 'Ahli-ahli Lembaga Pengarah',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil', href: '/profil' },
      { name: 'Organisasi', href: '/profil/organisasi' },
      { name: 'Lembaga Pengarah' }
    ]
  },
  {
    path: 'src/app/profil/organisasi/lembaga-pengarah/sppp/page.tsx',
    title: 'Lembaga Pengarah SPPP',
    subtitle: 'Ahli-ahli Lembaga Pengarah SPPP',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil', href: '/profil' },
      { name: 'Organisasi', href: '/profil/organisasi' },
      { name: 'Lembaga Pengarah', href: '/profil/organisasi/lembaga-pengarah' },
      { name: 'SPPP' }
    ]
  },
  {
    path: 'src/app/profil/organisasi/lembaga-pengarah/teluk-ewa/page.tsx',
    title: 'Lembaga Pengarah Teluk Ewa',
    subtitle: 'Ahli-ahli Lembaga Pengarah Teluk Ewa',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil', href: '/profil' },
      { name: 'Organisasi', href: '/profil/organisasi' },
      { name: 'Lembaga Pengarah', href: '/profil/organisasi/lembaga-pengarah' },
      { name: 'Teluk Ewa' }
    ]
  },
  {
    path: 'src/app/profil/organisasi/cio/page.tsx',
    title: 'Ketua Pegawai Maklumat',
    subtitle: 'Profil Ketua Pegawai Maklumat',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil', href: '/profil' },
      { name: 'Organisasi', href: '/profil/organisasi' },
      { name: 'Ketua Pegawai Maklumat' }
    ]
  },
  {
    path: 'src/app/profil/organisasi/ketua-jabatan/page.tsx',
    title: 'Ketua-Ketua Jabatan',
    subtitle: 'Senarai ketua jabatan di SPPP',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil', href: '/profil' },
      { name: 'Organisasi', href: '/profil/organisasi' },
      { name: 'Ketua-Ketua Jabatan' }
    ]
  },
  {
    path: 'src/app/profil/organisasi/direktori/page.tsx',
    title: 'Direktori',
    subtitle: 'Direktori pegawai dan kakitangan',
    breadcrumbs: [
      { name: 'Utama', href: '/' },
      { name: 'Profil', href: '/profil' },
      { name: 'Organisasi', href: '/profil/organisasi' },
      { name: 'Direktori' }
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
pages.forEach(page => {
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

console.log(`\n✨ Created ${pages.length} pages successfully!`);