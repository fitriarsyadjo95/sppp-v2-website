import { Metadata } from 'next';
import { Building2, Users, Network, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Carta Organisasi | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Struktur organisasi dan hierarki pengurusan Suruhanjaya Pelabuhan Pulau Pinang',
};

interface OrganizationUnit {
  id: string;
  title: string;
  head: string;
  level: number;
  parent?: string;
  departments?: string[];
  responsibilities: string[];
}

const organizationData: OrganizationUnit[] = [
  {
    id: 'board',
    title: 'Lembaga Pengarah',
    head: 'Dato\' Seri Ahmad Hj. Hassan (Pengerusi)',
    level: 1,
    responsibilities: [
      'Penentuan dasar dan strategi syarikat',
      'Pengawasan prestasi dan pengurusan',
      'Kelulusan pelaburan major dan projek pembangunan',
      'Memastikan kepatuhan kepada perundangan'
    ]
  },
  {
    id: 'ceo',
    title: 'Pejabat Ketua Pegawai Eksekutif',
    head: 'Encik Azman Bin Yusof',
    level: 2,
    parent: 'board',
    responsibilities: [
      'Pelaksanaan strategi dan dasar syarikat',
      'Pengurusan operasi harian',
      'Koordinasi antara jabatan',
      'Laporan kepada Lembaga Pengarah'
    ]
  },
  {
    id: 'operations',
    title: 'Jabatan Operasi Pelabuhan',
    head: 'Puan Siti Nurhaliza Bt. Ahmad',
    level: 3,
    parent: 'ceo',
    departments: [
      'Unit Operasi Terminal',
      'Unit Keselamatan Pelabuhan',
      'Unit Pengurusan Trafik',
      'Unit Kawalan Mutu'
    ],
    responsibilities: [
      'Pengurusan operasi terminal container dan kargo',
      'Koordinasi pergerakan kapal dan kargo',
      'Pemantauan keselamatan operasi',
      'Pengurusan kemudahan pelabuhan'
    ]
  },
  {
    id: 'finance',
    title: 'Jabatan Kewangan dan Perakaunan',
    head: 'Encik Lim Cheng Huat',
    level: 3,
    parent: 'ceo',
    departments: [
      'Unit Perakaunan',
      'Unit Belanjawan',
      'Unit Audit Dalaman',
      'Unit Kewangan Korporat'
    ],
    responsibilities: [
      'Pengurusan kewangan dan perakaunan',
      'Penyediaan belanjawan dan ramalan kewangan',
      'Kawalan kos dan audit dalaman',
      'Pelaporan kewangan kepada pihak berkuasa'
    ]
  },
  {
    id: 'engineering',
    title: 'Jabatan Kejuruteraan dan Pembangunan',
    head: 'Ir. Ahmad Faizal Bin Mohd Said',
    level: 3,
    parent: 'ceo',
    departments: [
      'Unit Kejuruteraan Awam',
      'Unit Kejuruteraan Mekanikal',
      'Unit Perancangan Projek',
      'Unit Penyelenggaraan'
    ],
    responsibilities: [
      'Pembangunan dan naik taraf infrastruktur',
      'Penyelenggaraan kemudahan pelabuhan',
      'Perancangan projek pembangunan',
      'Pengurusan kontrak pembinaan'
    ]
  },
  {
    id: 'commercial',
    title: 'Jabatan Komersial dan Pemasaran',
    head: 'Puan Rashidah Bt. Yusof',
    level: 3,
    parent: 'ceo',
    departments: [
      'Unit Pembangunan Perniagaan',
      'Unit Pemasaran',
      'Unit Perhubungan Pelanggan',
      'Unit Analisis Pasaran'
    ],
    responsibilities: [
      'Pembangunan perniagaan dan pemasaran',
      'Pengurusan perhubungan dengan pelanggan',
      'Analisis pasaran dan persaingan',
      'Penetapan strategi komersial'
    ]
  },
  {
    id: 'hr',
    title: 'Jabatan Sumber Manusia dan Pentadbiran',
    head: 'Encik Hafiz Bin Abdullah',
    level: 3,
    parent: 'ceo',
    departments: [
      'Unit Pembangunan Sumber Manusia',
      'Unit Pentadbiran Am',
      'Unit Latihan dan Pembangunan',
      'Unit Kebajikan Pekerja'
    ],
    responsibilities: [
      'Pengurusan dan pembangunan sumber manusia',
      'Pentadbiran am dan sokongan korporat',
      'Program latihan dan pembangunan keupayaan',
      'Kebajikan dan faedah pekerja'
    ]
  },
  {
    id: 'ict',
    title: 'Jabatan Teknologi Maklumat dan Komunikasi',
    head: 'Encik Rajesh Kumar',
    level: 3,
    parent: 'ceo',
    departments: [
      'Unit Pembangunan Sistem',
      'Unit Sokongan Teknikal',
      'Unit Keselamatan Siber',
      'Unit Data dan Analitik'
    ],
    responsibilities: [
      'Pembangunan dan penyelenggaraan sistem IT',
      'Sokongan teknikal dan infrastruktur ICT',
      'Keselamatan maklumat dan siber',
      'Pengurusan data dan analitik perniagaan'
    ]
  }
];

export default function OrganizationChartPage() {
  const getLevelUnits = (level: number) => {
    return organizationData.filter(unit => unit.level === level);
  };

  const renderUnit = (unit: OrganizationUnit) => (
    <div 
      key={unit.id} 
      className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
        unit.level === 1 ? 'border-4 border-blue-500' : 
        unit.level === 2 ? 'border-2 border-blue-400' : 
        'border border-gray-200'
      }`}
    >
      <div className="text-center mb-4">
        <div className={`inline-flex p-3 rounded-full mb-3 ${
          unit.level === 1 ? 'bg-blue-100' : 
          unit.level === 2 ? 'bg-green-100' : 
          'bg-gray-100'
        }`}>
          {unit.level === 1 ? (
            <Building2 className="h-8 w-8 text-blue-600" />
          ) : unit.level === 2 ? (
            <Network className="h-8 w-8 text-green-600" />
          ) : (
            <Users className="h-6 w-6 text-gray-600" />
          )}
        </div>
        <h3 className={`font-bold text-gray-900 mb-2 ${
          unit.level === 1 ? 'text-xl' : 
          unit.level === 2 ? 'text-lg' : 
          'text-base'
        }`}>
          {unit.title}
        </h3>
        <p className="text-blue-600 font-semibold text-sm">{unit.head}</p>
      </div>

      {unit.departments && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 text-sm mb-2">Unit-unit:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {unit.departments.map((dept, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight className="h-3 w-3 text-blue-500 mr-2 flex-shrink-0" />
                {dept}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h4 className="font-semibold text-gray-900 text-sm mb-2">Tanggungjawab Utama:</h4>
        <ul className="text-xs text-gray-600 space-y-1">
          {unit.responsibilities.map((resp, index) => (
            <li key={index} className="flex items-start">
              <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Network className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Carta Organisasi</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Struktur organisasi dan hierarki pengurusan Suruhanjaya Pelabuhan Pulau Pinang 
                yang direka untuk kecekapan operasi dan pencapaian objektif strategik.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Level 1 - Board */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Tahap 1: Tadbir Urus
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                {renderUnit(getLevelUnits(1)[0])}
              </div>
            </div>
          </section>

          {/* Connection Line */}
          <div className="flex justify-center mb-8">
            <div className="w-1 h-8 bg-blue-300"></div>
          </div>

          {/* Level 2 - CEO */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Tahap 2: Pengurusan Eksekutif
              </h2>
              <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                {renderUnit(getLevelUnits(2)[0])}
              </div>
            </div>
          </section>

          {/* Connection Lines */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center">
              <div className="w-1 h-8 bg-green-300"></div>
              <div className="w-96 h-1 bg-green-300"></div>
              <div className="flex w-96 justify-between">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="w-1 h-8 bg-green-300"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Level 3 - Departments */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Tahap 3: Jabatan Operasi
              </h2>
              <div className="w-24 h-1 bg-gray-500 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getLevelUnits(3).map((unit) => renderUnit(unit))}
            </div>
          </section>

          {/* Organizational Statistics */}
          <section className="mt-16 bg-blue-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Statistik Organisasi
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                <div className="text-gray-600">Jabatan Utama</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
                <div className="text-gray-600">Unit Operasi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">450+</div>
                <div className="text-gray-600">Jumlah Kakitangan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-gray-600">Tahap Hierarki</div>
              </div>
            </div>
          </section>

          {/* Contact and Download */}
          <section className="mt-12 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Maklumat Lanjut
              </h3>
              <p className="text-gray-600 mb-6">
                Untuk maklumat lanjut tentang struktur organisasi atau hubungi jabatan tertentu
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/about/leadership"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Lihat Kepimpinan
                </a>
                <a 
                  href="/contact"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
        </>
  );
}