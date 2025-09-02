import { Metadata } from 'next';
import { Layout } from '@/components/layout/layout';
import { Users, Award, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kepimpinan | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Lembaga pengarah dan pengurusan Suruhanjaya Pelabuhan Pulau Pinang',
};

interface LeaderProfile {
  id: string;
  name: string;
  position: string;
  category: 'board' | 'management';
  image?: string;
  bio: string;
  qualifications?: string[];
  experience?: string;
}

const leadershipData: LeaderProfile[] = [
  // Board of Directors
  {
    id: 'chairman',
    name: 'Dato\' Seri Ahmad Hj. Hassan',
    position: 'Pengerusi',
    category: 'board',
    bio: 'Dato\' Seri Ahmad Hj. Hassan telah dilantik sebagai Pengerusi Suruhanjaya Pelabuhan Pulau Pinang dengan pengalaman lebih 30 tahun dalam industri maritim dan pengurusan pelabuhan.',
    qualifications: ['MBA in Maritime Management', 'Fellow of Chartered Institute of Logistics & Transport'],
    experience: '30+ tahun dalam industri maritim'
  },
  {
    id: 'deputy-chairman',
    name: 'Datin Seri Faridah Bt. Abdullah',
    position: 'Timbalan Pengerusi',
    category: 'board',
    bio: 'Datin Seri Faridah membawa kepakaran dalam pengurusan korporat dan pembangunan strategik pelabuhan dengan pengalaman lebih 25 tahun.',
    qualifications: ['Masters in Business Administration', 'Chartered Accountant (CA)'],
    experience: '25+ tahun dalam pengurusan korporat'
  },
  {
    id: 'board-member-1',
    name: 'Dato\' Hj. Mohd Rashid Bin Harun',
    position: 'Ahli Lembaga Pengarah',
    category: 'board',
    bio: 'Dato\' Hj. Mohd Rashid adalah pakar dalam undang-undang maritim dan pengangkutan dengan pengalaman luas dalam sektor awam dan swasta.',
    qualifications: ['LLM in Maritime Law', 'Advocate & Solicitor'],
    experience: '20+ tahun dalam undang-undang maritim'
  },
  {
    id: 'board-member-2',
    name: 'Puan Hajah Zainab Bt. Omar',
    position: 'Ahli Lembaga Pengarah',
    category: 'board',
    bio: 'Puan Hajah Zainab membawa kepakaran dalam pembangunan infrastruktur dan kejuruteraan pelabuhan dengan rekod prestasi cemerlang.',
    qualifications: ['Masters in Civil Engineering', 'Professional Engineer (Ir.)'],
    experience: '18+ tahun dalam kejuruteraan pelabuhan'
  },
  // Management Team
  {
    id: 'ceo',
    name: 'Encik Azman Bin Yusof',
    position: 'Ketua Pegawai Eksekutif',
    category: 'management',
    bio: 'Encik Azman memimpin operasi harian SPPP dengan fokus kepada inovasi teknologi dan peningkatan kecekapan operasi pelabuhan.',
    qualifications: ['Masters in Port Management', 'Certified Port Executive'],
    experience: '15+ tahun dalam pengurusan pelabuhan'
  },
  {
    id: 'coo',
    name: 'Puan Siti Nurhaliza Bt. Ahmad',
    position: 'Ketua Pegawai Operasi',
    category: 'management',
    bio: 'Puan Siti Nurhaliza bertanggungjawab mengawasi operasi pelabuhan dan memastikan kelancaran aktiviti harian.',
    qualifications: ['Bachelor in Maritime Studies', 'Diploma in Port Operations'],
    experience: '12+ tahun dalam operasi pelabuhan'
  },
  {
    id: 'cfo',
    name: 'Encik Lim Cheng Huat',
    position: 'Ketua Pegawai Kewangan',
    category: 'management',
    bio: 'Encik Lim menguruskan aspek kewangan dan pelaburan SPPP dengan pengalaman dalam perancangan kewangan strategik.',
    qualifications: ['ACCA', 'CPA'],
    experience: '14+ tahun dalam kewangan korporat'
  }
];

export default function LeadershipPage() {
  const boardMembers = leadershipData.filter(leader => leader.category === 'board');
  const managementTeam = leadershipData.filter(leader => leader.category === 'management');

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Users className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Kepimpinan</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Lembaga Pengarah dan pasukan pengurusan yang berdedikasi memimpin 
                Suruhanjaya Pelabuhan Pulau Pinang ke arah kecemerlangan operasi.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Board of Directors Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <Building2 className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Lembaga Pengarah
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Lembaga pengarah yang berpengalaman dan berdedikasi dalam memandu 
                hala tuju strategik SPPP.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {boardMembers.map((member) => (
                <div 
                  key={member.id} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="h-16 w-16 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold text-lg">
                        {member.position}
                      </p>
                    </div>
                    
                    <div className="text-gray-600 mb-6">
                      <p className="leading-relaxed">{member.bio}</p>
                    </div>

                    {member.qualifications && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Kelayakan:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {member.qualifications.map((qual, index) => (
                            <li key={index} className="flex items-center">
                              <Award className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                              {qual}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {member.experience && (
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold">Pengalaman:</span> {member.experience}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Management Team Section */}
          <section>
            <div className="text-center mb-12">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pasukan Pengurusan
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Pasukan pengurusan eksekutif yang memimpin operasi harian dan 
                pelaksanaan strategi SPPP.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {managementTeam.map((member) => (
                <div 
                  key={member.id} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="h-12 w-12 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold">
                        {member.position}
                      </p>
                    </div>
                    
                    <div className="text-gray-600 text-sm mb-4">
                      <p className="leading-relaxed">{member.bio}</p>
                    </div>

                    {member.qualifications && (
                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Kelayakan:</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {member.qualifications.map((qual, index) => (
                            <li key={index} className="flex items-center">
                              <Award className="h-3 w-3 text-blue-600 mr-2 flex-shrink-0" />
                              {qual}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {member.experience && (
                      <div className="text-xs text-gray-500">
                        <span className="font-semibold">Pengalaman:</span> {member.experience}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section className="mt-16 bg-blue-50 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hubungi Kepimpinan
              </h3>
              <p className="text-gray-600 mb-6">
                Untuk urusan rasmi atau pertanyaan kepada pihak pengurusan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Hubungi Kami
                </a>
                <a 
                  href="mailto:info@penangport.gov.my"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  E-mel Rasmi
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}