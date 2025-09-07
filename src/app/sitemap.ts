import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.penangport.gov.my'
  
  const routes = [
    // Main pages
    '',
    '/profil',
    '/kemudahan',
    '/services',
    '/training',
    '/news',
    '/hubungi',
    
    // Profile pages
    '/profil/latar-belakang',
    '/profil/latar-belakang/sppp',
    '/profil/latar-belakang/teluk-ewa',
    '/profil/visi-misi',
    '/profil/peranan',
    '/profil/sijil-penghargaan',
    '/profil/carta-organisasi',
    
    // Facility pages
    '/kemudahan/zon-bebas',
    '/kemudahan/kontena-butterworth',
    '/kemudahan/swettenham-pier',
    '/kemudahan/kargo-prai',
    '/kemudahan/dermaga-butterworth',
    '/kemudahan/perkhidmatan-feri',
    '/kemudahan/jeti-minyak',
    '/kemudahan/perkhidmatan-bantuan',
    '/kemudahan/port-crafts',
    '/kemudahan/bunkering',
    '/kemudahan/dermaga-prai',
    
    // Service pages
    '/services/cargo',
    '/services/vessel',
    '/services/consultation',
    '/services/digital',
    
    // Training pages
    '/training/certification',
    '/training/schedule',
    '/training/registration',
    
    // Resource pages
    '/sumber/tender',
    '/sumber/penerbitan',
    '/sumber/media',
    '/sumber/arkib',
    
    // Legal pages
    '/legal/privacy',
    '/legal/terms',
    '/legal/cookies'
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 
                    route.startsWith('/news') ? 'daily' :
                    route.startsWith('/training') ? 'weekly' :
                    route.startsWith('/sumber') ? 'weekly' :
                    'monthly',
    priority: route === '' ? 1 :
              route.startsWith('/profil') ? 0.9 :
              route.startsWith('/kemudahan') ? 0.9 :
              route.startsWith('/training') ? 0.8 :
              route.startsWith('/services') ? 0.8 :
              0.6
  }))
}