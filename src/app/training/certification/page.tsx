'use client';

import { useState } from 'react';
import { FileText, Award, CheckCircle, Clock, Users, Star, Download, ExternalLink } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  category: 'professional' | 'technical' | 'safety' | 'management';
  level: 'foundation' | 'intermediate' | 'advanced' | 'expert';
  duration: string;
  prerequisites: string[];
  modules: string[];
  assessment: string[];
  benefits: string[];
  validityPeriod: string;
  continuingEducation: string;
  fees: {
    local: string;
    international: string;
  };
  schedule: string[];
  accreditationBody?: string;
}

interface Accreditation {
  id: string;
  name: string;
  type: 'international' | 'national' | 'industry';
  description: string;
  validUntil: string;
  certifyingBody: string;
  scope: string[];
  benefits: string[];
  logo?: string;
}

const certifications: Certification[] = [
  {
    id: 'port-operations-cert',
    title: 'Sijil Profesional Operasi Pelabuhan',
    category: 'professional',
    level: 'intermediate',
    duration: '6 bulan',
    prerequisites: ['Pengalaman minimum 2 tahun dalam industri maritim', 'Sijil SPM atau setaraf'],
    modules: [
      'Pengurusan operasi pelabuhan',
      'Sistem keselamatan dan keamanan',
      'Pengendalian kargo dan kontena',
      'Perundangan maritim Malaysia',
      'Teknologi pelabuhan moden'
    ],
    assessment: [
      'Peperiksaan bertulis (60%)',
      'Penilaian praktikal (30%)',
      'Projek akhir (10%)'
    ],
    benefits: [
      'Sijil diiktiraf oleh Jabatan Laut Malaysia',
      'Kenaikan pangkat dalam industri pelabuhan',
      'Peningkatan gaji sehingga 30%',
      'Kelayakan untuk jawatan pengurusan'
    ],
    validityPeriod: '3 tahun',
    continuingEducation: '20 jam CPD setahun',
    fees: {
      local: 'RM 3,500',
      international: 'USD 1,200'
    },
    schedule: ['Mac 2024', 'Jun 2024', 'Sep 2024', 'Dis 2024'],
    accreditationBody: 'Maritime Institute of Malaysia (MIMA)'
  },
  {
    id: 'crane-operator-cert',
    title: 'Sijil Pengendali Kren Pelabuhan',
    category: 'technical',
    level: 'intermediate',
    duration: '3 bulan',
    prerequisites: ['Umur minimum 21 tahun', 'Kesihatan fizikal yang baik', 'Lesen memandu kelas D'],
    modules: [
      'Prinsip operasi kren pelabuhan',
      'Prosedur keselamatan kerja',
      'Penyelenggaraan rutin kren',
      'Pengendalian kargo khusus',
      'Komunikasi operasi pelabuhan'
    ],
    assessment: [
      'Ujian teori keselamatan (40%)',
      'Ujian praktikal pengendali (50%)',
      'Viva voce (10%)'
    ],
    benefits: [
      'Sijil diiktiraf DOSH Malaysia',
      'Peluang pekerjaan di semua pelabuhan Malaysia',
      'Gaji permulaan RM 4,000 - RM 6,000',
      'Bonus prestasi tahunan'
    ],
    validityPeriod: '2 tahun',
    continuingEducation: '16 jam refresher course',
    fees: {
      local: 'RM 2,800',
      international: 'USD 950'
    },
    schedule: ['Setiap bulan', 'Intake bulanan', 'Fleksibel mengikut permintaan']
  },
  {
    id: 'maritime-safety-cert',
    title: 'Sijil Keselamatan Maritim Antarabangsa',
    category: 'safety',
    level: 'advanced',
    duration: '4 bulan',
    prerequisites: ['Sijil asas keselamatan pelabuhan', 'Pengalaman 3 tahun dalam operasi maritim'],
    modules: [
      'ISPS Code implementation',
      'Port facility security assessment',
      'Emergency response procedures',
      'Risk management in ports',
      'International maritime regulations'
    ],
    assessment: [
      'IMO standard examination (70%)',
      'Practical security drill (20%)',
      'Case study presentation (10%)'
    ],
    benefits: [
      'Sijil diiktiraf IMO dan STCW',
      'Kelayakan Port Facility Security Officer',
      'Peluang kerja di pelabuhan antarabangsa',
      'Salary premium hingga 50%'
    ],
    validityPeriod: '5 tahun',
    continuingEducation: '25 jam CPD setiap 2 tahun',
    fees: {
      local: 'RM 5,500',
      international: 'USD 1,800'
    },
    schedule: ['Feb 2024', 'Mei 2024', 'Ogs 2024', 'Nov 2024'],
    accreditationBody: 'International Maritime Organization (IMO)'
  },
  {
    id: 'port-management-cert',
    title: 'Sijil Pengurusan Pelabuhan Eksekutif',
    category: 'management',
    level: 'expert',
    duration: '12 bulan',
    prerequisites: ['Ijazah dalam bidang berkaitan', 'Pengalaman pengurusan minimum 5 tahun'],
    modules: [
      'Strategic port planning',
      'Financial management for ports',
      'Stakeholder relationship management',
      'Digital transformation in ports',
      'Sustainable port development',
      'Leadership and change management'
    ],
    assessment: [
      'Comprehensive examination (40%)',
      'Strategic project proposal (35%)',
      'Leadership assessment (25%)'
    ],
    benefits: [
      'Postgraduate Diploma equivalent',
      'Kelayakan untuk jawatan CEO/GM',
      'Network dengan eksekutif pelabuhan global',
      'Continuing education pathway ke MBA'
    ],
    validityPeriod: 'Seumur hidup',
    continuingEducation: '40 jam executive seminars',
    fees: {
      local: 'RM 12,000',
      international: 'USD 4,500'
    },
    schedule: ['Jan 2024', 'Jul 2024'],
    accreditationBody: 'International Association of Ports and Harbors (IAPH)'
  }
];

const accreditations: Accreditation[] = [
  {
    id: 'imo-accreditation',
    name: 'International Maritime Organization (IMO)',
    type: 'international',
    description: 'Pengiktirafan antarabangsa untuk program latihan maritim yang mematuhi konvensi STCW dan standard IMO.',
    validUntil: '2026-12-31',
    certifyingBody: 'United Nations - International Maritime Organization',
    scope: [
      'Maritime safety training programs',
      'Port security certification',
      'Environmental protection courses',
      'Search and rescue training'
    ],
    benefits: [
      'Pengiktirafan global sijil SPPP',
      'Akses ke maritime career pathway antarabangsa',
      'Kredibiliti program latihan yang tinggi',
      'Pematuhan dengan standard maritim dunia'
    ]
  },
  {
    id: 'mima-accreditation',
    name: 'Maritime Institute of Malaysia (MIMA)',
    type: 'national',
    description: 'Badan pengiktirafan rasmi Malaysia untuk institusi latihan maritim dan program pembangunan profesional.',
    validUntil: '2025-08-15',
    certifyingBody: 'Kementerian Pengangkutan Malaysia',
    scope: [
      'Professional development programs',
      'Port operations certification',
      'Maritime logistics training',
      'Technical skills certification'
    ],
    benefits: [
      'Pengiktirafan rasmi kerajaan Malaysia',
      'Kelayakan untuk tender kerajaan',
      'Standard kualiti terjamin',
      'Pathway ke professional membership'
    ]
  },
  {
    id: 'iaph-accreditation',
    name: 'International Association of Ports and Harbors (IAPH)',
    type: 'industry',
    description: 'Persatuan pelabuhan antarabangsa yang mengiktiraf program latihan pengurusan pelabuhan berkualiti tinggi.',
    validUntil: '2027-03-20',
    certifyingBody: 'IAPH Training Committee',
    scope: [
      'Executive port management programs',
      'Strategic planning certification',
      'Port sustainability training',
      'Innovation and technology courses'
    ],
    benefits: [
      'Network dengan 170+ pelabuhan dunia',
      'Best practices sharing platform',
      'Career advancement opportunities',
      'Industry recognition dan credibility'
    ]
  },
  {
    id: 'dosh-accreditation',
    name: 'Department of Occupational Safety and Health (DOSH)',
    type: 'national',
    description: 'Pengiktirafan untuk program latihan keselamatan dan kesihatan pekerjaan di industri pelabuhan.',
    validUntil: '2025-11-30',
    certifyingBody: 'Kementerian Sumber Manusia Malaysia',
    scope: [
      'Occupational safety training',
      'Health and safety certification',
      'Risk assessment programs',
      'Emergency response training'
    ],
    benefits: [
      'Pematuhan undang-undang OSHA 1994',
      'Pengurangan premium insurans',
      'Peningkatan safety culture',
      'Legal compliance assurance'
    ]
  }
];

export default function CertificationAccreditationPage() {
  const [activeTab, setActiveTab] = useState<'certifications' | 'accreditations'>('certifications');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Semua Kategori' },
    { id: 'professional', name: 'Profesional' },
    { id: 'technical', name: 'Teknikal' },
    { id: 'safety', name: 'Keselamatan' },
    { id: 'management', name: 'Pengurusan' }
  ];

  const levels = [
    { id: 'all', name: 'Semua Tahap' },
    { id: 'foundation', name: 'Asas' },
    { id: 'intermediate', name: 'Pertengahan' },
    { id: 'advanced', name: 'Lanjutan' },
    { id: 'expert', name: 'Pakar' }
  ];

  const filteredCertifications = certifications.filter(cert => {
    const categoryMatch = selectedCategory === 'all' || cert.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || cert.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'professional': return 'bg-blue-100 text-blue-800';
      case 'technical': return 'bg-green-100 text-green-800';
      case 'safety': return 'bg-red-100 text-red-800';
      case 'management': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'foundation': return 'bg-gray-100 text-gray-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-orange-100 text-orange-800';
      case 'expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAccreditationTypeColor = (type: string) => {
    switch (type) {
      case 'international': return 'bg-blue-100 text-blue-800';
      case 'national': return 'bg-green-100 text-green-800';
      case 'industry': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <FileText className="h-16 w-16 mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-4">Sijil & Akreditasi</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Program sijil profesional dan pengiktirafan institusi yang diiktiraf di peringkat kebangsaan dan antarabangsa
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Navigation Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-white rounded-lg p-1 shadow-sm border">
              <button
                onClick={() => setActiveTab('certifications')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === 'certifications'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <FileText className="h-5 w-5 inline-block mr-2" />
                Program Sijil
              </button>
              <button
                onClick={() => setActiveTab('accreditations')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === 'accreditations'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Award className="h-5 w-5 inline-block mr-2" />
                Akreditasi Institusi
              </button>
            </div>
          </div>

          {activeTab === 'certifications' && (
            <>
              {/* Filters */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kategori Program
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tahap Kesukaran
                    </label>
                    <select
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {levels.map(level => (
                        <option key={level.id} value={level.id}>
                          {level.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Certifications Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredCertifications.map(cert => (
                  <div key={cert.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="p-6 border-b border-gray-200">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">
                          {cert.title}
                        </h3>
                        <div className="flex flex-col gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(cert.category)}`}>
                            {cert.category === 'professional' ? 'Profesional' :
                             cert.category === 'technical' ? 'Teknikal' :
                             cert.category === 'safety' ? 'Keselamatan' : 'Pengurusan'}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(cert.level)}`}>
                            {cert.level === 'foundation' ? 'Asas' :
                             cert.level === 'intermediate' ? 'Pertengahan' :
                             cert.level === 'advanced' ? 'Lanjutan' : 'Pakar'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {cert.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {cert.validityPeriod}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                      {/* Prerequisites */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Syarat Kemasukan</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {cert.prerequisites.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Benefits */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Faedah Utama</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {cert.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pricing */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold text-gray-900">Yuran Program</div>
                            <div className="text-sm text-gray-600">
                              Tempatan: <span className="font-medium text-blue-600">{cert.fees.local}</span> |
                              Antarabangsa: <span className="font-medium text-blue-600">{cert.fees.international}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-500">Intake seterusnya</div>
                            <div className="font-medium text-gray-900">{cert.schedule[0]}</div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                          Daftar Sekarang
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                          <Download className="h-4 w-4 inline-block mr-1" />
                          Brosur
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'accreditations' && (
            <>
              <div className="mb-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Pengiktirafan & Akreditasi Institusi
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    SPPP telah diiktiraf oleh badan-badan pengiktirafan terkemuka di peringkat kebangsaan dan antarabangsa, 
                    memastikan kualiti program latihan yang tinggi dan relevan dengan industri.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {accreditations.map(accred => (
                  <div key={accred.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {accred.name}
                          </h3>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getAccreditationTypeColor(accred.type)}`}>
                            {accred.type === 'international' ? 'Antarabangsa' :
                             accred.type === 'national' ? 'Kebangsaan' : 'Industri'}
                          </span>
                        </div>
                        <Award className="h-12 w-12 text-blue-600 flex-shrink-0" />
                      </div>

                      <p className="text-gray-600 mb-6">
                        {accred.description}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Badan Pengiktiraf</h4>
                          <p className="text-sm text-gray-600">{accred.certifyingBody}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Skop Pengiktirafan</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {accred.scope.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Manfaat Pengiktirafan</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {accred.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-semibold text-gray-900">Status Pengiktirafan</div>
                              <div className="text-sm text-green-600 font-medium">Aktif</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-gray-500">Sah hingga</div>
                              <div className="font-medium text-gray-900">
                                {new Date(accred.validUntil).toLocaleDateString('ms-MY')}
                              </div>
                            </div>
                          </div>
                        </div>

                        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Lihat Sijil Pengiktirafan
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 bg-blue-50 rounded-lg p-8">
                <div className="text-center">
                  <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Komitmen Kualiti & Kecemerlangan
                  </h3>
                  <p className="text-gray-600 max-w-3xl mx-auto mb-6">
                    SPPP berkomitmen untuk mengekalkan standard tertinggi dalam penyampaian program latihan. 
                    Pengiktirafan ini adalah bukti dedikasi kami terhadap kecemerlangan akademik dan profesional.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                      <div className="text-sm text-gray-600">Badan Pengiktiraf</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                      <div className="text-sm text-gray-600">Program Bersijil</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                      <div className="text-sm text-gray-600">Kadar Kejayaan</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
        </>
  );
}