'use client';

import { useState } from 'react';
import { Layout } from '@/components/layout/layout';
import { Calendar, Clock, MapPin, Users, Search, Download, Bell } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  category: 'professional' | 'technical' | 'safety' | 'management';
  level: 'foundation' | 'intermediate' | 'advanced' | 'expert';
  duration: number; // in days
  instructor: string;
  capacity: number;
  enrolled: number;
  price: {
    local: number;
    international: number;
  };
  startDate: string;
  endDate: string;
  time: string;
  location: string;
  description: string;
  prerequisites: string[];
  status: 'open' | 'limited' | 'full' | 'cancelled';
  language: 'BM' | 'EN' | 'Both';
}

const courses: Course[] = [
  {
    id: 'port-ops-mar24',
    title: 'Operasi Pelabuhan Asas',
    category: 'professional',
    level: 'foundation',
    duration: 5,
    instructor: 'Kapten Mohd Ali Rahman',
    capacity: 25,
    enrolled: 18,
    price: { local: 1500, international: 500 },
    startDate: '2024-03-15',
    endDate: '2024-03-19',
    time: '09:00 - 17:00',
    location: 'Dewan Latihan SPPP, Pulau Pinang',
    description: 'Program asas untuk memahami operasi harian pelabuhan dan proses pengendalian kargo.',
    prerequisites: ['SPM atau setaraf', 'Pengalaman kerja minimum 1 tahun'],
    status: 'open',
    language: 'BM'
  },
  {
    id: 'crane-cert-mar24',
    title: 'Sijil Pengendali Kren Pelabuhan',
    category: 'technical',
    level: 'intermediate',
    duration: 15,
    instructor: 'Juruteknik Ahmad Zaki',
    capacity: 12,
    enrolled: 10,
    price: { local: 2800, international: 950 },
    startDate: '2024-03-20',
    endDate: '2024-04-05',
    time: '08:00 - 16:00',
    location: 'Pusat Latihan Teknikal, Terminal Kontena',
    description: 'Program intensif untuk pengendali kren pelabuhan dengan sijil DOSH.',
    prerequisites: ['Umur minimum 21 tahun', 'Lesen memandu kelas D', 'Medical checkup'],
    status: 'limited',
    language: 'BM'
  },
  {
    id: 'maritime-safety-apr24',
    title: 'International Maritime Safety',
    category: 'safety',
    level: 'advanced',
    duration: 10,
    instructor: 'Captain Sarah Johnson',
    capacity: 20,
    enrolled: 15,
    price: { local: 4500, international: 1500 },
    startDate: '2024-04-08',
    endDate: '2024-04-19',
    time: '09:00 - 17:00',
    location: 'SPPP Academy, George Town',
    description: 'Advanced maritime safety course covering ISPS Code and international regulations.',
    prerequisites: ['Basic maritime safety certificate', '3 years experience'],
    status: 'open',
    language: 'EN'
  },
  {
    id: 'port-mgmt-may24',
    title: 'Strategic Port Management',
    category: 'management',
    level: 'expert',
    duration: 20,
    instructor: 'Prof. Dr. Lim Wei Ming',
    capacity: 15,
    enrolled: 15,
    price: { local: 8500, international: 3000 },
    startDate: '2024-05-06',
    endDate: '2024-05-31',
    time: '09:00 - 17:00',
    location: 'Executive Training Center',
    description: 'Comprehensive executive program for senior port management professionals.',
    prerequisites: ['Degree in relevant field', '5 years management experience'],
    status: 'full',
    language: 'Both'
  },
  {
    id: 'digital-port-apr24',
    title: 'Digital Port Technologies',
    category: 'technical',
    level: 'advanced',
    duration: 7,
    instructor: 'Dr. Raj Kumar',
    capacity: 18,
    enrolled: 12,
    price: { local: 3200, international: 1100 },
    startDate: '2024-04-22',
    endDate: '2024-04-30',
    time: '09:00 - 17:00',
    location: 'IT Training Lab, SPPP HQ',
    description: 'Hands-on training on modern port technologies including IoT, AI, and automation.',
    prerequisites: ['Basic IT knowledge', 'Port operations experience'],
    status: 'open',
    language: 'EN'
  },
  {
    id: 'cargo-handling-jun24',
    title: 'Pengendalian Kargo Khusus',
    category: 'professional',
    level: 'intermediate',
    duration: 8,
    instructor: 'Encik Roslan Abdullah',
    capacity: 20,
    enrolled: 8,
    price: { local: 2200, international: 750 },
    startDate: '2024-06-10',
    endDate: '2024-06-19',
    time: '08:30 - 16:30',
    location: 'Terminal Kargo Konvensional',
    description: 'Specialized training for handling dangerous goods, oversized cargo, and perishables.',
    prerequisites: ['Basic cargo handling certificate', '2 years experience'],
    status: 'open',
    language: 'BM'
  },
  {
    id: 'leadership-jul24',
    title: 'Maritime Leadership Excellence',
    category: 'management',
    level: 'advanced',
    duration: 12,
    instructor: 'Captain Marina Hassan',
    capacity: 16,
    enrolled: 11,
    price: { local: 5500, international: 1900 },
    startDate: '2024-07-15',
    endDate: '2024-07-30',
    time: '09:00 - 17:00',
    location: 'Leadership Development Center',
    description: 'Develop leadership skills for maritime industry professionals.',
    prerequisites: ['Supervisory experience', 'Maritime industry background'],
    status: 'open',
    language: 'Both'
  },
  {
    id: 'env-compliance-aug24',
    title: 'Environmental Compliance for Ports',
    category: 'safety',
    level: 'intermediate',
    duration: 6,
    instructor: 'Dr. Siti Aminah',
    capacity: 22,
    enrolled: 16,
    price: { local: 2800, international: 950 },
    startDate: '2024-08-05',
    endDate: '2024-08-12',
    time: '09:00 - 17:00',
    location: 'Environmental Training Center',
    description: 'Understanding environmental regulations and sustainable port operations.',
    prerequisites: ['Basic environmental awareness', 'Port operations knowledge'],
    status: 'open',
    language: 'BM'
  }
];

export default function CourseSchedulePage() {
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const months = [
    { id: 'all', name: 'Semua Bulan' },
    { id: '03', name: 'Mac 2024' },
    { id: '04', name: 'April 2024' },
    { id: '05', name: 'Mei 2024' },
    { id: '06', name: 'Jun 2024' },
    { id: '07', name: 'Julai 2024' },
    { id: '08', name: 'Ogos 2024' }
  ];

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

  const filteredCourses = courses.filter(course => {
    const monthMatch = selectedMonth === 'all' || course.startDate.slice(5, 7) === selectedMonth;
    const categoryMatch = selectedCategory === 'all' || course.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || course.level === selectedLevel;
    const searchMatch = searchQuery === '' || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return monthMatch && categoryMatch && levelMatch && searchMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800';
      case 'limited': return 'bg-yellow-100 text-yellow-800';
      case 'full': return 'bg-red-100 text-red-800';
      case 'cancelled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open': return 'Terbuka';
      case 'limited': return 'Terhad';
      case 'full': return 'Penuh';
      case 'cancelled': return 'Dibatal';
      default: return status;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'professional': return 'bg-blue-100 text-blue-800';
      case 'technical': return 'bg-green-100 text-green-800';
      case 'safety': return 'bg-red-100 text-red-800';
      case 'management': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ms-MY', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getAvailabilityPercentage = (enrolled: number, capacity: number) => {
    return Math.round((enrolled / capacity) * 100);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Calendar className="h-16 w-16 mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-4">Jadual Kursus</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Jadual lengkap program latihan dan kursus yang tersedia. Pilih kursus yang sesuai dengan keperluan profesional anda.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cari Kursus
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Nama kursus, pengajar..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Month Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bulan
                </label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {months.map(month => (
                    <option key={month.id} value={month.id}>
                      {month.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori
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

              {/* Level Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tahap
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

            {/* View Toggle and Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-4 sm:mb-0">
                <span className="text-sm text-gray-600">
                  Menunjukkan {filteredCourses.length} daripada {courses.length} kursus
                </span>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  <Download className="h-4 w-4" />
                  Export Jadual
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Bell className="h-4 w-4" />
                  Set Reminder
                </button>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 pr-4">
                      {course.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(course.status)}`}>
                      {getStatusText(course.status)}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(course.category)}`}>
                      {course.category === 'professional' ? 'Profesional' :
                       course.category === 'technical' ? 'Teknikal' :
                       course.category === 'safety' ? 'Keselamatan' : 'Pengurusan'}
                    </span>
                    <span className="text-xs text-gray-500">
                      {course.level === 'foundation' ? 'Asas' :
                       course.level === 'intermediate' ? 'Pertengahan' :
                       course.level === 'advanced' ? 'Lanjutan' : 'Pakar'}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    {course.description}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Date and Duration */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <div>
                        <div className="font-medium">{formatDate(course.startDate)}</div>
                        <div className="text-xs">hingga {formatDate(course.endDate)}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <div>
                        <div className="font-medium">{course.duration} hari</div>
                        <div className="text-xs">{course.time}</div>
                      </div>
                    </div>
                  </div>

                  {/* Location and Instructor */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-gray-600">
                      <MapPin className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{course.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span>Pengajar: {course.instructor}</span>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Kekosongan</span>
                      <span className="text-sm text-gray-600">
                        {course.enrolled}/{course.capacity} peserta
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all ${
                          getAvailabilityPercentage(course.enrolled, course.capacity) < 70 
                            ? 'bg-green-500' 
                            : getAvailabilityPercentage(course.enrolled, course.capacity) < 90 
                            ? 'bg-yellow-500' 
                            : 'bg-red-500'
                        }`}
                        style={{ width: `${getAvailabilityPercentage(course.enrolled, course.capacity)}%` }}
                      />
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-sm text-gray-700 mb-1">Yuran Kursus</div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-bold text-blue-600">RM {course.price.local.toLocaleString()}</span>
                        <span className="text-xs text-gray-500 ml-1">(Tempatan)</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-blue-600">USD {course.price.international}</span>
                        <span className="text-xs text-gray-500 ml-1">(Antarabangsa)</span>
                      </div>
                    </div>
                  </div>

                  {/* Language and Action Button */}
                  <div className="flex justify-between items-center pt-4">
                    <div className="text-xs text-gray-500">
                      Bahasa: <span className="font-medium">{course.language}</span>
                    </div>
                    <button 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        course.status === 'full' || course.status === 'cancelled'
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                      disabled={course.status === 'full' || course.status === 'cancelled'}
                    >
                      {course.status === 'full' ? 'Penuh' : 
                       course.status === 'cancelled' ? 'Dibatal' : 'Daftar'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Tiada kursus dijumpai
              </h3>
              <p className="text-gray-600 mb-6">
                Cuba ubah kriteria pencarian atau filter untuk melihat kursus lain.
              </p>
              <button 
                onClick={() => {
                  setSelectedMonth('all');
                  setSelectedCategory('all');
                  setSelectedLevel('all');
                  setSearchQuery('');
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Papar Semua Kursus
              </button>
            </div>
          )}

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {courses.length}
              </div>
              <div className="text-sm text-gray-600">Total Kursus</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {courses.filter(c => c.status === 'open').length}
              </div>
              <div className="text-sm text-gray-600">Kursus Terbuka</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {courses.reduce((sum, c) => sum + c.enrolled, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Peserta</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {Math.round(courses.reduce((sum, c) => sum + (c.enrolled / c.capacity), 0) / courses.length * 100)}%
              </div>
              <div className="text-sm text-gray-600">Kadar Pengisian</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}