import { Metadata } from 'next';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Users,
  Building,
  Globe,
  Send,
  MessageCircle,
  Printer
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hubungi Kami | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Maklumat hubungan, alamat pejabat, dan borang hubungi kami untuk Suruhanjaya Pelabuhan Pulau Pinang',
};

interface ContactInfo {
  id: string;
  department: string;
  description: string;
  address: string;
  phone: string[];
  fax?: string;
  email: string[];
  hours: string;
  services: string[];
  icon: React.ElementType;
}

const contactInfo: ContactInfo[] = [
  {
    id: 'main-office',
    department: 'Pejabat Utama',
    description: 'Pentadbiran am, maklumat umum, dan pertanyaan awam',
    address: 'Tingkat 15-18, Komtar, 10000 Pulau Pinang, Malaysia',
    phone: ['+60 4-2101 2345', '+60 4-2101 2346'],
    fax: '+60 4-2101 2340',
    email: ['info@penangport.gov.my', 'enquiry@penangport.gov.my'],
    hours: 'Isnin - Jumaat: 8:00 AM - 5:00 PM',
    services: [
      'Maklumat am pelabuhan',
      'Pertanyaan awam',
      'Dokumentasi rasmi',
      'Aduan dan cadangan'
    ],
    icon: Building
  },
  {
    id: 'port-operations',
    department: 'Operasi Pelabuhan',
    description: 'Operasi harian, pergerakan kapal, dan koordinasi kargo',
    address: 'Port Operation Center, Pelabuhan Pulau Pinang, 12100 Butterworth, Pulau Pinang',
    phone: ['+60 4-3101 8888', '+60 4-3101 8889'],
    fax: '+60 4-3101 8880',
    email: ['operations@penangport.gov.my', 'portcontrol@penangport.gov.my'],
    hours: '24 Jam Sehari, 7 Hari Seminggu',
    services: [
      'Vessel Traffic Service (VTS)',
      'Tempahan berth dan perkhidmatan',
      'Koordinasi operasi kargo',
      'Perkhidmatan kecemasan maritim'
    ],
    icon: Users
  },
  {
    id: 'commercial',
    department: 'Bahagian Komersial',
    description: 'Perniagaan, pemasaran, dan kerjasama strategik',
    address: 'Tingkat 16, Komtar, 10000 Pulau Pinang, Malaysia',
    phone: ['+60 4-2101 2350', '+60 4-2101 2351'],
    fax: '+60 4-2101 2355',
    email: ['commercial@penangport.gov.my', 'marketing@penangport.gov.my'],
    hours: 'Isnin - Jumaat: 8:30 AM - 5:30 PM',
    services: [
      'Pembangunan perniagaan',
      'Kerjasama strategik',
      'Sebut harga perkhidmatan',
      'Kontrak dan perjanjian'
    ],
    icon: Globe
  },
  {
    id: 'training-academy',
    department: 'Akademi Latihan SPPP',
    description: 'Program latihan, sijil profesional, dan pembangunan kemahiran',
    address: 'SPPP Training Academy, Jalan Perusahaan, 13600 Perai, Pulau Pinang',
    phone: ['+60 4-3801 5555', '+60 4-3801 5556'],
    email: ['training@penangport.gov.my', 'academy@penangport.gov.my'],
    hours: 'Isnin - Jumaat: 8:00 AM - 6:00 PM',
    services: [
      'Program latihan maritim',
      'Sijil profesional',
      'Kursus keselamatan',
      'Pendaftaran peserta'
    ],
    icon: Users
  }
];

const emergencyContacts = [
  {
    service: 'Kecemasan Maritim',
    number: '999',
    description: 'Panggilan kecemasan umum Malaysia'
  },
  {
    service: 'Marine Emergency',
    number: '+60 4-2101 9999',
    description: 'Kecemasan khusus pelabuhan'
  },
  {
    service: 'VHF Channel',
    number: 'Channel 16',
    description: 'Komunikasi radio maritim kecemasan'
  }
];

export default function ContactPage() {
  return (
    <>

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Phone className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Kami sentiasa bersedia untuk membantu anda. Hubungi pejabat yang sesuai 
                untuk mendapatkan maklumat dan perkhidmatan yang diperlukan.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Contact Information Cards */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Maklumat Hubungan
              </h2>
              <p className="text-lg text-gray-600">
                Pilih pejabat yang sesuai dengan keperluan anda
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {contactInfo.map((contact) => {
                const IconComponent = contact.icon;
                
                return (
                  <div 
                    key={contact.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 rounded-lg bg-blue-100 mr-4">
                          <IconComponent className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {contact.department}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {contact.description}
                          </p>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="mb-4">
                        <div className="flex items-start mb-2">
                          <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-900">Alamat:</span>
                            <p className="text-gray-600 text-sm">{contact.address}</p>
                          </div>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="mb-4">
                        <div className="flex items-start mb-2">
                          <Phone className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-900">Telefon:</span>
                            {contact.phone.map((phone, index) => (
                              <p key={index} className="text-gray-600 text-sm">
                                <a href={`tel:${phone}`} className="hover:text-blue-600">
                                  {phone}
                                </a>
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Fax */}
                      {contact.fax && (
                        <div className="mb-4">
                          <div className="flex items-start mb-2">
                            <Printer className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold text-gray-900">Fax:</span>
                              <p className="text-gray-600 text-sm">{contact.fax}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Email */}
                      <div className="mb-4">
                        <div className="flex items-start mb-2">
                          <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-900">E-mel:</span>
                            {contact.email.map((email, index) => (
                              <p key={index} className="text-gray-600 text-sm">
                                <a href={`mailto:${email}`} className="hover:text-blue-600">
                                  {email}
                                </a>
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="mb-6">
                        <div className="flex items-start mb-2">
                          <Clock className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-900">Waktu Operasi:</span>
                            <p className="text-gray-600 text-sm">{contact.hours}</p>
                          </div>
                        </div>
                      </div>

                      {/* Services */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Perkhidmatan:</h4>
                        <ul className="space-y-1">
                          {contact.services.map((service, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                              {service}
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

          {/* Emergency Contacts */}
          <section className="mb-16 bg-red-50 border-l-4 border-red-500 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-red-600 mr-3" />
                Hubungan Kecemasan
              </h3>
              <p className="text-gray-600">
                Untuk situasi kecemasan maritim atau operasi pelabuhan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-2">{contact.service}</h4>
                  <div className="text-3xl font-bold text-red-600 mb-2">{contact.number}</div>
                  <p className="text-gray-600 text-sm">{contact.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <MessageCircle className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Hantar Mesej
                </h3>
                <p className="text-gray-600">
                  Isi borang di bawah dan kami akan menghubungi anda dalam masa 24 jam
                </p>
              </div>

              <form className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nama Penuh *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan nama penuh anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mel *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="nama@contoh.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombor Telefon
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+60 12-345 6789"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Jabatan Berkenaan
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Pilih jabatan</option>
                      <option value="general">Pertanyaan Am</option>
                      <option value="operations">Operasi Pelabuhan</option>
                      <option value="commercial">Bahagian Komersial</option>
                      <option value="training">Akademi Latihan</option>
                      <option value="complaint">Aduan</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tajuk mesej anda"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mesej *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tulis mesej anda di sini..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Hantar Mesej
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Map and Directions */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8 border-b border-gray-200">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Lokasi Pejabat
                  </h3>
                  <p className="text-gray-600">
                    Peta dan panduan arah ke pejabat utama SPPP
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-100 p-8 text-center">
                <div className="bg-gray-200 rounded-lg p-12">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600 mb-4">
                    Peta interaktif akan dipaparkan di sini
                  </p>
                  <p className="text-sm text-gray-500">
                    Tingkat 15-18, Komtar<br />
                    10000 Pulau Pinang, Malaysia
                  </p>
                </div>
              </div>

              <div className="p-6 bg-blue-50">
                <h4 className="font-semibold text-gray-900 mb-3">Panduan Arah:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <strong>Dengan Kereta:</strong>
                    <p>Dari Lapangan Terbang Pulau Pinang, ikuti Jalan Aziz Ibrahim ke Komtar (15-20 minit)</p>
                  </div>
                  <div>
                    <strong>Pengangkutan Awam:</strong>
                    <p>Bas Rapid Penang Route 101, 102, 103 - turun di Komtar</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Link */}
          <section className="text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Masih Ada Soalan?
            </h3>
            <p className="text-gray-600 mb-6">
              Lihat soalan lazim atau hubungi terus pejabat yang berkenaan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/resources"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Soalan Lazim
              </a>
              <a 
                href="/services"
                className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Senarai Perkhidmatan
              </a>
            </div>
          </section>
        </div>
      </div>
        </>
  );
}