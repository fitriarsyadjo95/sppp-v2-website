// Web scraping utilities for SPPP content extraction

import { ScrapedContent, BilingualText, ImageAsset, DocumentAsset } from '@/types/content'

export class ContentScraper {
  private baseUrl = 'https://www.penangport.gov.my'
  
  /**
   * Scrape content from a URL using WebFetch tool
   */
  async scrapeUrl(url: string, prompt: string): Promise<ScrapedContent> {
    try {
      const fullUrl = url.startsWith('http') ? url : `${this.baseUrl}${url}`
      
      // Note: In actual implementation, this would use the WebFetch tool
      // For now, we'll structure it to be compatible with the tool
      const content = await this.fetchContent(fullUrl, prompt)
      
      return {
        url: fullUrl,
        title: this.extractTitle(content),
        content,
        images: this.extractImageUrls(content),
        links: this.extractLinks(content),
        scrapedAt: new Date().toISOString()
      }
    } catch (error) {
      console.error(`Error scraping ${url}:`, error)
      throw new Error(`Failed to scrape content from ${url}`)
    }
  }

  /**
   * Extract and clean text content from HTML
   */
  extractText(html: string): string {
    // Remove HTML tags and clean up whitespace
    return html
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  }

  /**
   * Extract images from content
   */
  extractImages(content: string): ImageAsset[] {
    const images: ImageAsset[] = []
    const imgRegex = /<img[^>]+src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi
    let match

    while ((match = imgRegex.exec(content)) !== null) {
      images.push({
        src: this.resolveUrl(match[1]),
        alt: match[2] || '',
        caption: match[2] || undefined
      })
    }

    return images
  }

  /**
   * Extract links from content
   */
  extractLinks(content: string): Array<{ text: string; url: string }> {
    const links: Array<{ text: string; url: string }> = []
    const linkRegex = /<a[^>]+href="([^"]*)"[^>]*>([^<]*)<\/a>/gi
    let match

    while ((match = linkRegex.exec(content)) !== null) {
      if (match[1] && match[2]) {
        links.push({
          text: this.extractText(match[2]),
          url: this.resolveUrl(match[1])
        })
      }
    }

    return links
  }

  /**
   * Extract tables from content
   */
  extractTables(content: string): Array<Array<string>> {
    const tables: Array<Array<string>> = []
    const tableRegex = /<table[^>]*>(.*?)<\/table>/gis
    let tableMatch

    while ((tableMatch = tableRegex.exec(content)) !== null) {
      const rows: Array<string> = []
      const rowRegex = /<tr[^>]*>(.*?)<\/tr>/gis
      let rowMatch

      while ((rowMatch = rowRegex.exec(tableMatch[1])) !== null) {
        const cells: string[] = []
        const cellRegex = /<t[dh][^>]*>(.*?)<\/t[dh]>/gis
        let cellMatch

        while ((cellMatch = cellRegex.exec(rowMatch[1])) !== null) {
          cells.push(this.extractText(cellMatch[1]))
        }

        if (cells.length > 0) {
          rows.push(...cells)
        }
      }

      if (rows.length > 0) {
        tables.push(rows)
      }
    }

    return tables
  }

  /**
   * Format text as bilingual (Malay primary)
   */
  formatBilingualText(text: string, englishText?: string): BilingualText {
    return {
      bm: text,
      en: englishText
    }
  }

  /**
   * Extract title from content
   */
  private extractTitle(content: string): string {
    const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/i)
    return titleMatch ? this.extractText(titleMatch[1]) : 'Untitled'
  }

  /**
   * Extract image URLs from content
   */
  private extractImageUrls(content: string): string[] {
    const urls: string[] = []
    const imgRegex = /<img[^>]+src="([^"]*)"[^>]*>/gi
    let match

    while ((match = imgRegex.exec(content)) !== null) {
      urls.push(this.resolveUrl(match[1]))
    }

    return urls
  }

  /**
   * Resolve relative URLs to absolute URLs
   */
  private resolveUrl(url: string): string {
    if (url.startsWith('http')) {
      return url
    }
    
    if (url.startsWith('/')) {
      return `${this.baseUrl}${url}`
    }
    
    return `${this.baseUrl}/${url}`
  }

  /**
   * Mock fetch content (in actual implementation, this would call WebFetch tool)
   */
  private async fetchContent(url: string, prompt: string): Promise<string> {
    // This is a placeholder - in actual implementation, 
    // this would use the WebFetch tool available in the environment
    throw new Error('WebFetch tool integration required')
  }

  /**
   * Specific scrapers for different content types
   */

  async scrapeVisionMission(): Promise<any> {
    return await this.scrapeUrl('/ms/profil/visi-misi/', 
      'Extract the complete Vision & Mission content including vision statement, mission statement, motto, and objectives in Malay.')
  }

  async scrapeBackground(section: 'sppp' | 'teluk-ewa'): Promise<any> {
    const url = section === 'sppp' 
      ? '/ms/profil/latar-belakang/sppp/' 
      : '/ms/profil/latar-belakang/teluk-ewa/'
    
    return await this.scrapeUrl(url, 
      `Extract the complete background and history information for ${section.toUpperCase()}, including establishment details, historical milestones, and development timeline.`)
  }

  async scrapeFacility(facilitySlug: string): Promise<any> {
    return await this.scrapeUrl(`/ms/kemudahan/${facilitySlug}/`, 
      'Extract complete facility information including specifications, services, capabilities, operating hours, contact information, and any technical details.')
  }

  async scrapeOrganizationChart(): Promise<any> {
    return await this.scrapeUrl('/ms/profil/carta-organisasi/', 
      'Extract organizational chart information, department structure, leadership positions, and hierarchy details.')
  }

  async scrapeContactInfo(): Promise<any> {
    return await this.scrapeUrl('/ms/hubungi/', 
      'Extract all contact information including addresses, phone numbers, fax numbers, email addresses, office hours, and location details.')
  }
}

// Utility functions for content processing
export const contentUtils = {
  /**
   * Clean and format text content
   */
  cleanText(text: string): string {
    return text
      .replace(/\s+/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .trim()
  },

  /**
   * Extract contact information from text
   */
  extractContactInfo(text: string): any {
    const phoneRegex = /(?:Tel|Phone|Telefon)[:\s]*([+\d\s\-\(\)]+)/gi
    const faxRegex = /(?:Fax)[:\s]*([+\d\s\-\(\)]+)/gi
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi

    const phoneMatch = phoneRegex.exec(text)
    const faxMatch = faxRegex.exec(text)
    const emailMatch = emailRegex.exec(text)

    return {
      phone: phoneMatch ? phoneMatch[1].trim() : undefined,
      fax: faxMatch ? faxMatch[1].trim() : undefined,
      email: emailMatch ? emailMatch[1].trim() : undefined
    }
  },

  /**
   * Format specifications from text
   */
  extractSpecifications(text: string): Record<string, string> {
    const specs: Record<string, string> = {}
    const lines = text.split('\n')

    for (const line of lines) {
      const colonIndex = line.indexOf(':')
      if (colonIndex > 0 && colonIndex < line.length - 1) {
        const key = line.substring(0, colonIndex).trim()
        const value = line.substring(colonIndex + 1).trim()
        if (key && value) {
          specs[key] = value
        }
      }
    }

    return specs
  }
}

export default ContentScraper