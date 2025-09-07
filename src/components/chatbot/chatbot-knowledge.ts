import { NavigationKnowledge, KnowledgeBaseItem } from '@/types/chatbot'

// Navigation data extracted from the website
const navigationKnowledge: NavigationKnowledge[] = [
  {
    name: 'Utama',
    href: '/',
    keywords: ['home', 'utama', 'main', 'homepage', 'laman utama'],
    category: 'navigation'
  },
  {
    name: 'Profil',
    href: '/profil',
    keywords: ['profile', 'profil', 'about', 'tentang', 'mengenai'],
    category: 'company',
    subItems: [
      {
        name: 'Latar Belakang',
        href: '/profil/latar-belakang',
        description: 'Sejarah dan latar belakang SPPP dan Teluk Ewa',
        keywords: ['background', 'latar belakang', 'sejarah', 'history'],
        category: 'company',
        subItems: [
          {
            name: 'SPPP',
            href: '/profil/latar-belakang/sppp',
            keywords: ['sppp history', 'sejarah sppp'],
            category: 'company'
          },
          {
            name: 'Teluk Ewa',
            href: '/profil/latar-belakang/teluk-ewa',
            keywords: ['teluk ewa', 'ewa bay'],
            category: 'company'
          }
        ]
      },
      {
        name: 'Visi & Misi',
        href: '/profil/visi-misi',
        keywords: ['vision', 'mission', 'visi', 'misi', 'objektif', 'tujuan'],
        category: 'company'
      },
      {
        name: 'Peranan Suruhanjaya',
        href: '/profil/peranan',
        keywords: ['role', 'peranan', 'tanggungjawab', 'responsibility'],
        category: 'company'
      },
      {
        name: 'Sijil & Penghargaan',
        href: '/profil/sijil-penghargaan',
        keywords: ['certificate', 'sijil', 'award', 'penghargaan', 'achievement'],
        category: 'company'
      },
      {
        name: 'Carta Organisasi',
        href: '/profil/carta-organisasi',
        keywords: ['organization chart', 'carta organisasi', 'struktur', 'hierarchy'],
        category: 'company'
      }
    ]
  },
  {
    name: 'Kemudahan & Perkhidmatan',
    href: '/kemudahan',
    keywords: ['facilities', 'services', 'kemudahan', 'perkhidmatan'],
    category: 'services',
    subItems: [
      {
        name: 'Zon Bebas Komersil',
        href: '/kemudahan/zon-bebas',
        keywords: ['free zone', 'zon bebas', 'commercial'],
        category: 'facilities'
      },
      {
        name: 'Kontena Butterworth Utara',
        href: '/kemudahan/kontena-butterworth',
        description: 'Terminal kontena moden dengan kapasiti 2 juta TEU setahun, 13 kren gantri, dan 7,104 slot kontena',
        keywords: ['container', 'kontena', 'butterworth', 'nbct', 'teu'],
        category: 'facilities'
      },
      {
        name: 'Swettenham Pier',
        href: '/kemudahan/swettenham-pier',
        description: 'Terminal kapal persiaran moden dalam Tapak Warisan Dunia UNESCO dengan kapasiti 2,000+ penumpang',
        keywords: ['swettenham', 'pier', 'cruise', 'terminal', 'unesco', 'kapal persiaran'],
        category: 'facilities'
      },
      {
        name: 'Kargo Pukal Prai',
        href: '/kemudahan/kargo-prai',
        description: 'Terminal kargo pukal strategik dengan gudang 111,000 m² dan kawasan stockpile 4.6 hektar',
        keywords: ['bulk cargo', 'kargo pukal', 'prai', 'gudang', 'stockpile'],
        category: 'facilities'
      },
      {
        name: 'Perkhidmatan Feri',
        href: '/kemudahan/perkhidmatan-feri',
        description: 'Perkhidmatan feri yang menghubungkan George Town dan Butterworth sepanjang 3.2km',
        keywords: ['ferry', 'feri', 'george town', 'butterworth', 'penumpang'],
        category: 'facilities'
      }
    ]
  },
  {
    name: 'Perkhidmatan',
    href: '/services',
    keywords: ['services', 'perkhidmatan'],
    category: 'services',
    subItems: [
      {
        name: 'Perkhidmatan Kargo',
        href: '/services/cargo',
        keywords: ['cargo', 'kargo', 'freight'],
        category: 'services'
      },
      {
        name: 'Perkhidmatan Kapal',
        href: '/services/vessel',
        keywords: ['vessel', 'kapal', 'ship'],
        category: 'services'
      },
      {
        name: 'Perundingan Teknikal',
        href: '/services/consultation',
        keywords: ['consultation', 'perundingan', 'technical'],
        category: 'services'
      },
      {
        name: 'Perkhidmatan Digital',
        href: '/services/digital',
        keywords: ['digital', 'online', 'sistem'],
        category: 'services'
      }
    ]
  },
  {
    name: 'Program Latihan',
    href: '/training',
    keywords: ['training', 'latihan', 'course', 'kursus'],
    category: 'training',
    subItems: [
      {
        name: 'Sijil & Akreditasi',
        href: '/training/certification',
        keywords: ['certification', 'sijil', 'akreditasi'],
        category: 'training'
      },
      {
        name: 'Jadual Kursus',
        href: '/training/schedule',
        keywords: ['schedule', 'jadual', 'timetable'],
        category: 'training'
      },
      {
        name: 'Pendaftaran Online',
        href: '/training/registration',
        keywords: ['registration', 'pendaftaran', 'daftar'],
        category: 'training'
      }
    ]
  },
  {
    name: 'Tender & Kontrak',
    href: '/sumber/tender',
    keywords: ['tender', 'contract', 'kontrak', 'sebut harga'],
    category: 'business'
  },
  {
    name: 'Berita & Pengumuman',
    href: '/news',
    keywords: ['news', 'berita', 'announcement', 'pengumuman'],
    category: 'information'
  },
  {
    name: 'Hubungi Kami',
    href: '/hubungi',
    keywords: ['contact', 'hubungi', 'telefon', 'email'],
    category: 'contact'
  }
]

// Knowledge base for common questions and responses
const knowledgeBase: KnowledgeBaseItem[] = [
  {
    id: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'halo', 'hai'],
    category: 'general',
    title: 'Greeting',
    description: 'General greeting response',
    responses: {
      bm: 'Selamat datang ke SPPP! Saya Siti, pembantu maya anda. Bagaimana saya boleh membantu?',
      en: 'Welcome to SPPP! I\'m Siti, your virtual assistant. How can I help you?'
    }
  },
  {
    id: 'services_info',
    keywords: ['services', 'perkhidmatan', 'what services', 'apa perkhidmatan'],
    category: 'services',
    title: 'SPPP Services',
    description: 'Information about SPPP services',
    url: '/services',
    responses: {
      bm: 'SPPP menyediakan pelbagai perkhidmatan termasuk perkhidmatan kargo, kapal, perundingan teknikal, dan perkhidmatan digital. Adakah anda ingin mengetahui lebih lanjut tentang perkhidmatan tertentu?',
      en: 'SPPP provides various services including cargo services, vessel services, technical consultation, and digital services. Would you like to know more about a specific service?'
    }
  },
  {
    id: 'training_info',
    keywords: ['training', 'latihan', 'course', 'kursus', 'program'],
    category: 'training',
    title: 'Training Programs',
    description: 'Information about training programs',
    url: '/training',
    responses: {
      bm: 'SPPP menawarkan program latihan profesional dalam bidang maritim dan pelabuhan. Kami menyediakan sijil dan akreditasi yang diiktiraf. Ingin melihat jadual kursus atau mendaftar?',
      en: 'SPPP offers professional training programs in maritime and port operations. We provide recognized certificates and accreditation. Would you like to see the course schedule or register?'
    }
  },
  {
    id: 'contact_info',
    keywords: ['contact', 'hubungi', 'phone', 'telefon', 'email'],
    category: 'contact',
    title: 'Contact Information',
    description: 'How to contact SPPP',
    url: '/hubungi',
    responses: {
      bm: 'Anda boleh menghubungi kami melalui telefon +60 4-210 2211 atau email info@penangport.gov.my. Waktu operasi: Isnin-Jumaat 8:00 AM - 5:00 PM, Sabtu 8:00 AM - 1:00 PM.',
      en: 'You can contact us at +60 4-210 2211 or email info@penangport.gov.my. Operating hours: Monday-Friday 8:00 AM - 5:00 PM, Saturday 8:00 AM - 1:00 PM.'
    }
  },
  {
    id: 'facilities_info',
    keywords: ['facilities', 'kemudahan', 'port', 'pelabuhan'],
    category: 'facilities',
    title: 'Port Facilities',
    description: 'Information about port facilities',
    url: '/kemudahan',
    responses: {
      bm: 'SPPP mengendalikan pelbagai kemudahan pelabuhan termasuk Zon Bebas Komersil, Terminal Kontena Butterworth Utara, Swettenham Pier, dan Kargo Pukal Prai. Kemudahan mana yang anda minati?',
      en: 'SPPP operates various port facilities including Commercial Free Zone, North Butterworth Container Terminal, Swettenham Pier, and Prai Bulk Cargo. Which facility interests you?'
    }
  },
  {
    id: 'container_terminal_info',
    keywords: ['container', 'kontena', 'butterworth', 'nbct', 'teu'],
    category: 'facilities',
    title: 'North Butterworth Container Terminal',
    description: 'Detailed information about NBCT',
    url: '/kemudahan/kontena-butterworth',
    responses: {
      bm: 'Terminal Kontena Butterworth Utara (NBCT) adalah terminal kontena terbesar di utara Malaysia dengan kapasiti 2 juta TEU setahun. Dilengkapi 13 kren gantri, 7,104 slot kontena, dan dermaga sepanjang 1,500m dengan kedalaman 11-12m.',
      en: 'North Butterworth Container Terminal (NBCT) is the largest container terminal in northern Malaysia with 2 million TEU annual capacity. Features 13 gantry cranes, 7,104 container slots, and 1,500m wharf with 11-12m depth.'
    }
  },
  {
    id: 'cruise_terminal_info',
    keywords: ['cruise', 'kapal persiaran', 'swettenham', 'pier', 'unesco'],
    category: 'facilities',
    title: 'Swettenham Pier Cruise Terminal',
    description: 'Information about cruise terminal',
    url: '/kemudahan/swettenham-pier',
    responses: {
      bm: 'Terminal Kapal Persiaran Swettenham Pier terletak dalam kawasan Tapak Warisan Dunia UNESCO di George Town. Terminal T-shaped sepanjang 400m ini boleh menampung 2,000+ penumpang dengan kedalaman berth 12m. Disiapkan November 2009.',
      en: 'Swettenham Pier Cruise Terminal is located within UNESCO World Heritage Site in George Town. This T-shaped 400m terminal can accommodate 2,000+ passengers with 12m berth depth. Completed November 2009.'
    }
  },
  {
    id: 'bulk_cargo_info',
    keywords: ['bulk cargo', 'kargo pukal', 'prai', 'gudang', 'stockpile'],
    category: 'facilities',
    title: 'Prai Bulk Cargo Terminal',
    description: 'Information about bulk cargo terminal',
    url: '/kemudahan/kargo-prai',
    responses: {
      bm: 'Terminal Kargo Pukal Prai adalah terminal kargo pukal strategik dengan berth utama 500m × 11m, gudang penyimpanan 111,000 m², dan kawasan stockpile 4.6 hektar. Dilengkapi 1 kren gantri dan 2 kren mudah alih.',
      en: 'Prai Bulk Cargo Terminal is a strategic bulk cargo terminal with main berth 500m × 11m, 111,000 m² warehouse storage, and 4.6 hectares stockpile area. Equipped with 1 gantry crane and 2 mobile cranes.'
    }
  },
  {
    id: 'ferry_service_info',
    keywords: ['ferry', 'feri', 'george town', 'butterworth', 'penumpang'],
    category: 'facilities',
    title: 'Ferry Service',
    description: 'Information about ferry service',
    url: '/kemudahan/perkhidmatan-feri',
    responses: {
      bm: 'Perkhidmatan Feri Pulau Pinang menghubungkan George Town (Jeti Raja Tun Uda) dan Butterworth (Jeti Sultan Abdul Halim) sepanjang 3.2km. Beroperasi 6:30 AM - 11:30 PM untuk penumpang dan motosikal.',
      en: 'Penang Ferry Service connects George Town (Raja Tun Uda Jetty) and Butterworth (Sultan Abdul Halim Jetty) across 3.2km. Operates 6:30 AM - 11:30 PM for passengers and motorcycles.'
    }
  },
  {
    id: 'vision_mission_info',
    keywords: ['vision', 'mission', 'visi', 'misi', 'objektif'],
    category: 'company',
    title: 'Vision & Mission',
    description: 'SPPP Vision and Mission',
    url: '/profil/visi-misi',
    responses: {
      bm: 'Visi SPPP: "Pelabuhan Pulau Pinang sebagai Pintu Masuk Maritim, Hab Logistik dan Kruis bagi Wilayah Utara". Misi: "Memacu dan Memperkasa Persekitaran Pelabuhan yang Pintar, Mampan dan Berdaya Saing".',
      en: 'SPPP Vision: "Penang Port as the Maritime Gateway, Logistics Hub and Cruise Hub for the Northern Region". Mission: "Drive and Empower a Smart, Sustainable and Competitive Port Environment".'
    }
  },
  {
    id: 'sppp_background_info',
    keywords: ['history', 'sejarah', 'background', 'latar belakang', 'sppp', '1956'],
    category: 'company',
    title: 'SPPP Background',
    description: 'SPPP establishment and history',
    url: '/profil/latar-belakang/sppp',
    responses: {
      bm: 'SPPP ditubuhkan pada 1 Januari 1956 di bawah Akta Suruhanjaya Pelabuhan Pulau Pinang 1955. Berperanan sebagai Pihak Berkuasa Pelabuhan, Badan Kawal Selia, dan Pemudah Cara Perdagangan untuk wilayah utara.',
      en: 'SPPP was established on January 1, 1956 under the Penang Port Commission Act 1955. Functions as Port Authority, Regulatory Body, and Trade Facilitator for the northern region.'
    }
  }
]

// Message processing logic
export const chatbotKnowledge = {
  processMessage(userMessage: string, language: 'BM' | 'EN') {
    const message = userMessage.toLowerCase()
    
    // Navigation requests
    const navigationMatch = this.findNavigationMatch(message)
    if (navigationMatch) {
      return {
        content: language === 'BM' 
          ? `Saya akan membawa anda ke halaman ${navigationMatch.name}. Klik pautan di bawah:`
          : `I'll take you to the ${navigationMatch.name} page. Click the link below:`,
        type: 'link' as const,
        metadata: {
          links: [{ text: navigationMatch.name, url: navigationMatch.href }]
        }
      }
    }
    
    // Knowledge base lookup
    const knowledgeMatch = this.findKnowledgeMatch(message)
    if (knowledgeMatch) {
      const response = {
        content: language === 'BM' ? knowledgeMatch.responses.bm : knowledgeMatch.responses.en,
        type: 'text' as const,
        metadata: {} as Record<string, unknown>
      }
      
      if (knowledgeMatch.url) {
        response.metadata.links = [{ 
          text: language === 'BM' ? 'Baca Selanjutnya' : 'Read More', 
          url: knowledgeMatch.url 
        }]
      }
      
      return response
    }
    
    // Default response
    return {
      content: language === 'BM'
        ? 'Maaf, saya tidak faham soalan anda. Boleh anda cuba bertanya tentang perkhidmatan, kemudahan, atau navigasi ke halaman tertentu?'
        : 'Sorry, I don\'t understand your question. Could you try asking about services, facilities, or navigation to a specific page?',
      type: 'text' as const,
      metadata: {
        suggestions: language === 'BM' 
          ? ['Cari perkhidmatan', 'Program latihan', 'Hubungi kami', 'Kemudahan pelabuhan']
          : ['Find services', 'Training programs', 'Contact us', 'Port facilities']
      }
    }
  },

  findNavigationMatch(message: string): NavigationKnowledge | null {
    const findInNav = (navItems: NavigationKnowledge[]): NavigationKnowledge | null => {
      for (const item of navItems) {
        // Check if any keywords match
        if (item.keywords.some(keyword => message.includes(keyword.toLowerCase()))) {
          return item
        }
        // Check sub-items recursively
        if (item.subItems) {
          const subMatch = findInNav(item.subItems)
          if (subMatch) return subMatch
        }
      }
      return null
    }
    
    return findInNav(navigationKnowledge)
  },

  findKnowledgeMatch(message: string): KnowledgeBaseItem | null {
    for (const item of knowledgeBase) {
      if (item.keywords.some(keyword => message.includes(keyword.toLowerCase()))) {
        return item
      }
    }
    return null
  }
}