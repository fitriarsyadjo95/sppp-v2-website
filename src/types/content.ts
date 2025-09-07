// Content types for SPPP website content management

export interface BilingualText {
  bm: string
  en?: string
}

export interface ContactInfo {
  phone?: string
  fax?: string
  email?: string
  address?: string
  website?: string
}

export interface ImageAsset {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

export interface DocumentAsset {
  title: string
  url: string
  type: 'pdf' | 'doc' | 'excel' | 'other'
  size?: string
  description?: string
}

// Profile Content Types
export interface VisionMissionContent {
  vision: BilingualText
  mission: BilingualText
  motto?: BilingualText
  objectives?: BilingualText[]
}

export interface BackgroundContent {
  title: BilingualText
  history: BilingualText
  establishment?: BilingualText
  milestones?: Array<{
    year: string
    description: BilingualText
  }>
  images?: ImageAsset[]
}

export interface LeadershipProfile {
  name: string
  position: BilingualText
  bio?: BilingualText
  image?: ImageAsset
  contact?: ContactInfo
}

export interface OrganizationChart {
  title: BilingualText
  description?: BilingualText
  chartImage?: ImageAsset
  departments?: Array<{
    name: BilingualText
    head?: string
    contact?: ContactInfo
  }>
}

// Facilities Content Types
export interface FacilitySpecification {
  area?: string
  capacity?: string
  equipment?: BilingualText[]
  services?: BilingualText[]
  operatingHours?: string
  contact?: ContactInfo
}

export interface FacilityContent {
  title: BilingualText
  description: BilingualText
  specifications: FacilitySpecification
  features?: BilingualText[]
  images?: ImageAsset[]
  location?: {
    address: string
    coordinates?: {
      lat: number
      lng: number
    }
  }
}

// Services Content Types
export interface ServiceContent {
  title: BilingualText
  description: BilingualText
  features?: BilingualText[]
  procedures?: BilingualText[]
  requirements?: BilingualText[]
  fees?: Array<{
    service: BilingualText
    rate: string
    unit?: string
  }>
  contact?: ContactInfo
  documents?: DocumentAsset[]
}

// Resources Content Types
export interface TenderContent {
  title: BilingualText
  description?: BilingualText
  openDate: string
  closeDate: string
  status: 'open' | 'closed' | 'awarded'
  documents?: DocumentAsset[]
  contact?: ContactInfo
}

export interface PublicationContent {
  title: BilingualText
  description?: BilingualText
  categories?: BilingualText[]
  documents: DocumentAsset[]
  lastUpdated?: string
}

export interface NewsContent {
  id: string
  title: BilingualText
  summary: BilingualText
  content: BilingualText
  publishDate: string
  category?: string
  images?: ImageAsset[]
  documents?: DocumentAsset[]
}

// Statistics and Performance
export interface PerformanceData {
  year: number
  cargoTraffic?: number
  containerTraffic?: number
  ferryPassengers?: number
  cruisePassengers?: number
  metrics?: Array<{
    label: BilingualText
    value: string | number
    unit?: string
  }>
}

// Page Content Structure
export interface PageContent {
  title: BilingualText
  subtitle?: BilingualText
  description?: BilingualText
  lastUpdated?: string
  sections?: Array<{
    id: string
    title: BilingualText
    content: BilingualText
    type: 'text' | 'list' | 'table' | 'image' | 'document'
    data?: unknown
  }>
  seo?: {
    metaDescription?: BilingualText
    keywords?: string[]
    ogImage?: string
  }
}

// Scraped Content Response
export interface ScrapedContent {
  url: string
  title: string
  content: string
  images?: string[]
  links?: Array<{
    text: string
    url: string
  }>
  metadata?: Record<string, unknown>
  scrapedAt: string
}

// Content Processing
export interface ContentProcessor {
  extractText: (html: string) => string
  extractImages: (html: string) => ImageAsset[]
  extractLinks: (html: string) => Array<{ text: string; url: string }>
  extractTables: (html: string) => Array<Array<string>>
  formatBilingualText: (text: string) => BilingualText
}