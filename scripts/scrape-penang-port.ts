import { chromium } from '@playwright/test'
import fs from 'fs/promises'
import path from 'path'

interface MenuItem {
  name: string
  href: string
  description?: string
  subItems?: MenuItem[]
}

interface PageStructure {
  url: string
  title: string
  section: string
  subsection?: string
  language: 'ms' | 'en'
  content?: string
}

async function scrapePenangPort() {
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext()
  const page = await context.newPage()
  
  const baseUrl = 'https://www.penangport.gov.my'
  const pages: PageStructure[] = []
  const menuStructure: MenuItem[] = []

  try {
    console.log('🔍 Starting Penang Port website scraping...')
    
    // Navigate to the main page
    await page.goto(`${baseUrl}/ms/`, { waitUntil: 'networkidle' })
    console.log('✅ Loaded main page')

    // Extract main navigation menu
    const mainMenu = await page.evaluate(() => {
      const menuItems: any[] = []
      
      // Get all main menu items
      const mainNavItems = document.querySelectorAll('.navbar-nav > li')
      
      mainNavItems.forEach(item => {
        const mainLink = item.querySelector('a')
        if (mainLink) {
          const menuItem: any = {
            name: mainLink.textContent?.trim() || '',
            href: mainLink.getAttribute('href') || ''
          }
          
          // Check for dropdown items
          const dropdownMenu = item.querySelector('.dropdown-menu')
          if (dropdownMenu) {
            menuItem.subItems = []
            const subItems = dropdownMenu.querySelectorAll('a')
            subItems.forEach(subItem => {
              const href = subItem.getAttribute('href')
              if (href && !href.startsWith('#')) {
                menuItem.subItems.push({
                  name: subItem.textContent?.trim() || '',
                  href: href
                })
              }
            })
          }
          
          menuItems.push(menuItem)
        }
      })
      
      return menuItems
    })

    console.log('📋 Found menu structure:', JSON.stringify(mainMenu, null, 2))
    menuStructure.push(...mainMenu)

    // Visit each page to extract content structure
    const visitedUrls = new Set<string>()
    
    const visitPage = async (url: string, section: string, subsection?: string) => {
      if (visitedUrls.has(url)) return
      visitedUrls.add(url)
      
      try {
        const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`
        console.log(`📄 Visiting: ${fullUrl}`)
        
        await page.goto(fullUrl, { waitUntil: 'networkidle', timeout: 30000 })
        
        const pageData = await page.evaluate(() => {
          return {
            title: document.title || '',
            content: document.querySelector('.content-area')?.textContent?.trim() || 
                    document.querySelector('main')?.textContent?.trim() || ''
          }
        })
        
        pages.push({
          url: fullUrl,
          title: pageData.title,
          section: section,
          subsection: subsection,
          language: url.includes('/ms/') ? 'ms' : 'en',
          content: pageData.content.substring(0, 500) // First 500 chars for reference
        })
        
        console.log(`✅ Scraped: ${pageData.title}`)
      } catch (error) {
        console.log(`⚠️ Failed to visit ${url}: ${error}`)
      }
    }

    // Visit all menu pages
    for (const menuItem of menuStructure) {
      if (menuItem.href && !menuItem.href.startsWith('#')) {
        await visitPage(menuItem.href, menuItem.name)
        
        if (menuItem.subItems) {
          for (const subItem of menuItem.subItems) {
            if (subItem.href && !subItem.href.startsWith('#')) {
              await visitPage(subItem.href, menuItem.name, subItem.name)
            }
          }
        }
      }
    }

    // Save the results
    const results = {
      timestamp: new Date().toISOString(),
      baseUrl: baseUrl,
      menuStructure: menuStructure,
      pages: pages,
      totalPages: pages.length
    }

    const outputPath = path.join(process.cwd(), 'scripts', 'penang-port-structure.json')
    await fs.writeFile(outputPath, JSON.stringify(results, null, 2))
    
    console.log(`\n✅ Scraping complete! Found ${pages.length} pages`)
    console.log(`📁 Results saved to: ${outputPath}`)

    // Generate a summary report
    const summaryPath = path.join(process.cwd(), 'scripts', 'site-structure-summary.md')
    const summary = generateSummaryReport(results)
    await fs.writeFile(summaryPath, summary)
    console.log(`📄 Summary report saved to: ${summaryPath}`)

  } catch (error) {
    console.error('❌ Error during scraping:', error)
  } finally {
    await browser.close()
  }
}

function generateSummaryReport(results: any): string {
  let report = `# Penang Port Website Structure Summary\n\n`
  report += `Generated: ${results.timestamp}\n\n`
  report += `## Overview\n`
  report += `- Total Pages Found: ${results.totalPages}\n`
  report += `- Base URL: ${results.baseUrl}\n\n`
  
  report += `## Menu Structure\n\n`
  
  results.menuStructure.forEach((item: MenuItem) => {
    report += `### ${item.name}\n`
    report += `- URL: ${item.href}\n`
    
    if (item.subItems && item.subItems.length > 0) {
      report += `- Subitems:\n`
      item.subItems.forEach(subItem => {
        report += `  - ${subItem.name}: ${subItem.href}\n`
      })
    }
    report += `\n`
  })
  
  report += `## Pages by Section\n\n`
  
  const pagesBySection = new Map<string, any[]>()
  results.pages.forEach((page: PageStructure) => {
    if (!pagesBySection.has(page.section)) {
      pagesBySection.set(page.section, [])
    }
    pagesBySection.get(page.section)?.push(page)
  })
  
  pagesBySection.forEach((pages, section) => {
    report += `### ${section}\n`
    pages.forEach(page => {
      report += `- ${page.title}\n`
      report += `  - URL: ${page.url}\n`
      if (page.subsection) {
        report += `  - Subsection: ${page.subsection}\n`
      }
    })
    report += `\n`
  })
  
  return report
}

// Run the scraper
scrapePenangPort().catch(console.error)