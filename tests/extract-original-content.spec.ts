import { test, expect } from '@playwright/test';

// SPPP Content Extraction from Original Website
// Extract content from https://www.penangport.gov.my/ms/ to populate new pages

const ORIGINAL_SPPP_URL = 'https://www.penangport.gov.my/';

interface ExtractedContent {
  url: string;
  title: string;
  headings: string[];
  content: string[];
  images: string[];
  links: string[];
  metadata: any;
}

const extractedContent: { [key: string]: ExtractedContent } = {};

test.describe('SPPP Original Website Content Extraction', () => {

  test('should extract homepage content', async ({ page }) => {
    console.log('🔍 Extracting content from SPPP homepage...');
    
    try {
      await page.goto(ORIGINAL_SPPP_URL, { waitUntil: 'networkidle', timeout: 30000 });
      
      const content: ExtractedContent = {
        url: ORIGINAL_SPPP_URL,
        title: await page.title(),
        headings: [],
        content: [],
        images: [],
        links: [],
        metadata: {}
      };

      // Extract headings
      const headings = await page.locator('h1, h2, h3, h4, h5, h6').allTextContents();
      content.headings = headings.filter(h => h.trim().length > 0);

      // Extract main content
      const contentElements = await page.locator('main p, .content p, article p, .main p, div.entry-content p').allTextContents();
      content.content = contentElements.filter(c => c.trim().length > 0);

      // Extract images
      const images = await page.locator('img').all();
      for (const img of images) {
        const src = await img.getAttribute('src');
        const alt = await img.getAttribute('alt');
        if (src) {
          content.images.push(`${src}|${alt || ''}`);
        }
      }

      // Extract internal links
      const links = await page.locator('a[href]').all();
      for (const link of links) {
        const href = await link.getAttribute('href');
        const text = await link.textContent();
        if (href && text && (href.includes('penangport.gov.my') || href.startsWith('/'))) {
          content.links.push(`${text.trim()}|${href}`);
        }
      }

      extractedContent['homepage'] = content;
      console.log(`✅ Homepage extracted: ${content.headings.length} headings, ${content.content.length} paragraphs`);
      
    } catch (error) {
      console.log(`❌ Error extracting homepage: ${error}`);
    }
  });

  test('should extract about/leadership content', async ({ page }) => {
    console.log('🔍 Extracting leadership content...');
    
    const possibleUrls = [
      'https://www.penangport.gov.my/about-us/board-of-directors/',
      'https://www.penangport.gov.my/about-us/management/',
      'https://www.penangport.gov.my/about-us/leadership/',
      'https://www.penangport.gov.my/about/',
      'https://www.penangport.gov.my/about-us/'
    ];

    for (const url of possibleUrls) {
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
        
        const content: ExtractedContent = {
          url: url,
          title: await page.title(),
          headings: [],
          content: [],
          images: [],
          links: [],
          metadata: {}
        };

        content.headings = await page.locator('h1, h2, h3, h4').allTextContents();
        content.content = await page.locator('p, .bio, .profile').allTextContents();
        
        // Look for leadership profiles
        const profiles = await page.locator('.profile, .team-member, .director, .management').all();
        for (const profile of profiles) {
          const name = await profile.locator('h3, h4, .name').textContent();
          const position = await profile.locator('.position, .title, .designation').textContent();
          const bio = await profile.locator('p, .bio, .description').textContent();
          
          if (name) {
            content.metadata.profiles = content.metadata.profiles || [];
            content.metadata.profiles.push({
              name: name.trim(),
              position: position?.trim() || '',
              bio: bio?.trim() || ''
            });
          }
        }

        if (content.headings.length > 0 || content.content.length > 0) {
          extractedContent['leadership'] = content;
          console.log(`✅ Leadership content extracted from: ${url}`);
          break;
        }
        
      } catch (error) {
        console.log(`⚠️  Could not access: ${url}`);
      }
    }
  });

  test('should extract services content', async ({ page }) => {
    console.log('🔍 Extracting services content...');
    
    const serviceUrls = [
      'https://www.penangport.gov.my/services/',
      'https://www.penangport.gov.my/port-services/',
      'https://www.penangport.gov.my/cargo-services/'
    ];

    for (const url of serviceUrls) {
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
        
        const content: ExtractedContent = {
          url: url,
          title: await page.title(),
          headings: [],
          content: [],
          images: [],
          links: [],
          metadata: {}
        };

        content.headings = await page.locator('h1, h2, h3, h4').allTextContents();
        content.content = await page.locator('p, .service-description, .content').allTextContents();
        
        // Look for service categories
        const services = await page.locator('.service, .service-item, .service-card').all();
        for (const service of services) {
          const name = await service.locator('h3, h4, .service-name').textContent();
          const description = await service.locator('p, .description').textContent();
          
          if (name) {
            content.metadata.services = content.metadata.services || [];
            content.metadata.services.push({
              name: name.trim(),
              description: description?.trim() || ''
            });
          }
        }

        if (content.headings.length > 0 || content.content.length > 0) {
          extractedContent['services'] = content;
          console.log(`✅ Services content extracted from: ${url}`);
          break;
        }
        
      } catch (error) {
        console.log(`⚠️  Could not access: ${url}`);
      }
    }
  });

  test('should extract training content', async ({ page }) => {
    console.log('🔍 Extracting training content...');
    
    const trainingUrls = [
      'https://www.penangport.gov.my/training/',
      'https://www.penangport.gov.my/courses/',
      'https://www.penangport.gov.my/education/',
      'https://www.penangport.gov.my/academy/'
    ];

    for (const url of trainingUrls) {
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
        
        const content: ExtractedContent = {
          url: url,
          title: await page.title(),
          headings: [],
          content: [],
          images: [],
          links: [],
          metadata: {}
        };

        content.headings = await page.locator('h1, h2, h3, h4').allTextContents();
        content.content = await page.locator('p, .course-description, .training-info').allTextContents();
        
        if (content.headings.length > 0 || content.content.length > 0) {
          extractedContent['training'] = content;
          console.log(`✅ Training content extracted from: ${url}`);
          break;
        }
        
      } catch (error) {
        console.log(`⚠️  Could not access: ${url}`);
      }
    }
  });

  test('should extract contact information', async ({ page }) => {
    console.log('🔍 Extracting contact information...');
    
    const contactUrls = [
      'https://www.penangport.gov.my/contact/',
      'https://www.penangport.gov.my/contact-us/'
    ];

    for (const url of contactUrls) {
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
        
        const content: ExtractedContent = {
          url: url,
          title: await page.title(),
          headings: [],
          content: [],
          images: [],
          links: [],
          metadata: {}
        };

        content.headings = await page.locator('h1, h2, h3, h4').allTextContents();
        content.content = await page.locator('p, .contact-info, .address').allTextContents();
        
        // Extract contact details
        const phones = await page.locator('text=/\\+?\\d+[\\d\\s\\-()]+/').allTextContents();
        const emails = await page.locator('text=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/').allTextContents();
        const addresses = await page.locator('.address, .location').allTextContents();
        
        content.metadata = {
          phones: phones.filter(p => p.trim().length > 0),
          emails: emails.filter(e => e.trim().length > 0),
          addresses: addresses.filter(a => a.trim().length > 0)
        };

        if (content.headings.length > 0 || content.content.length > 0) {
          extractedContent['contact'] = content;
          console.log(`✅ Contact content extracted from: ${url}`);
          break;
        }
        
      } catch (error) {
        console.log(`⚠️  Could not access: ${url}`);
      }
    }
  });

  test('should generate extracted content report', async ({ page }) => {
    console.log('📊 Generating extracted content report...');
    
    const report = {
      extractedPages: Object.keys(extractedContent).length,
      timestamp: new Date().toISOString(),
      content: extractedContent,
      summary: {}
    };

    // Generate summary
    Object.entries(extractedContent).forEach(([key, content]) => {
      report.summary[key] = {
        title: content.title,
        headings: content.headings.length,
        paragraphs: content.content.length,
        images: content.images.length,
        links: content.links.length,
        hasMetadata: Object.keys(content.metadata).length > 0
      };
    });

    // Save extracted content
    const fs = require('fs');
    const reportDir = './extracted-content';
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    
    const reportPath = `${reportDir}/sppp-original-content.json`;
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    console.log('\n📈 Content Extraction Results:');
    console.log('=====================================');
    console.log(`📄 Pages Extracted: ${report.extractedPages}`);
    
    Object.entries(report.summary).forEach(([key, summary]: [string, any]) => {
      console.log(`\n✅ ${key.toUpperCase()}:`);
      console.log(`   Title: "${summary.title}"`);
      console.log(`   Headings: ${summary.headings}`);
      console.log(`   Paragraphs: ${summary.paragraphs}`);
      console.log(`   Images: ${summary.images}`);
      console.log(`   Links: ${summary.links}`);
      console.log(`   Metadata: ${summary.hasMetadata ? 'Yes' : 'No'}`);
    });
    
    console.log(`\n📁 Extracted content saved to: ${reportPath}`);
    console.log('\n🎉 Content extraction completed!');
    console.log('\n🚀 Ready to develop missing pages with extracted content');
  });
});