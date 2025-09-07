// SEO configuration and utilities
import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  noindex?: boolean
}

const defaultSEO = {
  title: 'Suruhanjaya Pelabuhan Pulau Pinang (SPPP)',
  description: 'Pihak Berkuasa Pelabuhan dan Badan Kawal Selia pelabuhan utama di wilayah utara Malaysia. Hub maritim, logistik dan kapal persiaran.',
  keywords: [
    'SPPP', 'Suruhanjaya Pelabuhan Pulau Pinang', 'Penang Port Commission',
    'pelabuhan pulau pinang', 'penang port', 'terminal kontena',
    'swettenham pier', 'butterworth container terminal',
    'maritim malaysia', 'pelabuhan utara malaysia',
    'kapal persiaran', 'cruise terminal', 'free zone',
    'zon bebas komersil', 'prai bulk cargo',
    'perkhidmatan feri', 'ferry service'
  ],
  siteUrl: 'https://www.penangport.gov.my'
}

export function generateSEO({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage,
  noindex = false
}: SEOProps = {}): Metadata {
  const seoTitle = title 
    ? `${title} | ${defaultSEO.title}`
    : defaultSEO.title
    
  const seoDescription = description || defaultSEO.description
  const seoKeywords = [...defaultSEO.keywords, ...keywords].join(', ')
  const seoCanonicalUrl = canonicalUrl || defaultSEO.siteUrl
  const seoOgImage = ogImage || `${defaultSEO.siteUrl}/images/og-image.jpg`

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    authors: [{ name: 'Suruhanjaya Pelabuhan Pulau Pinang' }],
    creator: 'SPPP',
    publisher: 'Suruhanjaya Pelabuhan Pulau Pinang',
    alternates: {
      canonical: seoCanonicalUrl,
      languages: {
        'ms-MY': seoCanonicalUrl,
        'en-MY': seoCanonicalUrl.replace('/ms/', '/en/')
      }
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: seoCanonicalUrl,
      siteName: defaultSEO.title,
      images: [
        {
          url: seoOgImage,
          width: 1200,
          height: 630,
          alt: seoTitle
        }
      ],
      locale: 'ms_MY',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [seoOgImage],
      creator: '@penangport'
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    verification: {
      google: 'your-google-site-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code'
    }
  }
}

// Structured data schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'GovernmentOrganization',
  name: 'Suruhanjaya Pelabuhan Pulau Pinang',
  alternateName: 'Penang Port Commission',
  url: 'https://www.penangport.gov.my',
  logo: 'https://www.penangport.gov.my/images/sppp-logo.png',
  description: 'Pihak Berkuasa Pelabuhan dan Badan Kawal Selia pelabuhan utama di wilayah utara Malaysia',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tingkat 2, Terminal Kapal Persiaran Swettenham Pier, No. 1A, Pesara King Edward',
    addressLocality: 'George Town',
    addressRegion: 'Pulau Pinang',
    postalCode: '10300',
    addressCountry: 'MY'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+604-263-3211',
    contactType: 'customer service',
    availableLanguage: ['Bahasa Malaysia', 'English']
  },
  sameAs: [
    'https://www.facebook.com/penangport',
    'https://www.twitter.com/penangport',
    'https://www.linkedin.com/company/penang-port-commission'
  ]
}

export const portFacilitySchema = (facility: {
  name: string
  description: string
  address?: string
  capacity?: string
  services?: string[]
}) => ({
  '@context': 'https://schema.org',
  '@type': 'TransportationCompany',
  name: facility.name,
  description: facility.description,
  parentOrganization: {
    '@type': 'GovernmentOrganization',
    name: 'Suruhanjaya Pelabuhan Pulau Pinang'
  },
  address: facility.address ? {
    '@type': 'PostalAddress',
    addressLocality: 'Pulau Pinang',
    addressCountry: 'MY'
  } : undefined,
  serviceType: facility.services || ['Port Operations', 'Maritime Services'],
  additionalProperty: facility.capacity ? [
    {
      '@type': 'PropertyValue',
      name: 'Capacity',
      value: facility.capacity
    }
  ] : undefined
})

// Breadcrumb schema generator
export const breadcrumbSchema = (items: Array<{ name: string; href: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://www.penangport.gov.my${item.href}`
  }))
})