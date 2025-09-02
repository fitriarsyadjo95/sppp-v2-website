import { test, expect } from '@playwright/test';

// SPPP v2 Website Comprehensive Audit
// Identifies all missing pages and broken links

const BASE_URL = 'http://localhost:3000';
const ORIGINAL_SPPP_URL = 'https://www.penangport.gov.my/ms/';

interface AuditResult {
  url: string;
  status: number;
  accessible: boolean;
  title: string;
  error?: string;
}

interface NavigationLink {
  text: string;
  href: string;
  type: 'main' | 'sub' | 'footer';
}

let auditResults: AuditResult[] = [];
let navigationLinks: NavigationLink[] = [];
let missingPages: string[] = [];
let workingPages: string[] = [];

test.describe('SPPP v2 Comprehensive Website Audit', () => {

  test('should extract all navigation links from the website', async ({ page }) => {
    console.log('🔍 Extracting all navigation links...');
    
    await page.goto(BASE_URL);
    
    // Extract main navigation links
    const mainNavLinks = await page.locator('nav a, .nav-primary a').all();
    for (const link of mainNavLinks) {
      const text = await link.textContent();
      const href = await link.getAttribute('href');
      if (text && href) {
        navigationLinks.push({
          text: text.trim(),
          href: href,
          type: 'main'
        });
      }
    }

    // Extract submenu links from mega menus
    const megaMenuLinks = await page.locator('[role="button"]').all();
    for (const button of megaMenuLinks) {
      try {
        await button.click();
        await page.waitForTimeout(500); // Wait for menu to open
        
        const subLinks = await page.locator('.absolute a').all();
        for (const link of subLinks) {
          const text = await link.textContent();
          const href = await link.getAttribute('href');
          if (text && href) {
            navigationLinks.push({
              text: text.trim(),
              href: href,
              type: 'sub'
            });
          }
        }
      } catch (error) {
        // Skip if not a menu button
      }
    }

    // Extract footer links
    const footerLinks = await page.locator('footer a').all();
    for (const link of footerLinks) {
      const text = await link.textContent();
      const href = await link.getAttribute('href');
      if (text && href && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        navigationLinks.push({
          text: text.trim(),
          href: href,
          type: 'footer'
        });
      }
    }

    // Extract quick links
    const quickLinks = await page.locator('[class*="quick"] a, [href*="staff-portal"], [href*="/tracking"], [href*="/permits"]').all();
    for (const link of quickLinks) {
      const text = await link.textContent();
      const href = await link.getAttribute('href');
      if (text && href) {
        navigationLinks.push({
          text: text.trim(),
          href: href,
          type: 'sub'
        });
      }
    }

    console.log(`✅ Extracted ${navigationLinks.length} navigation links`);
    
    // Log all found links
    navigationLinks.forEach(link => {
      console.log(`   ${link.type.toUpperCase()}: "${link.text}" -> ${link.href}`);
    });
  });

  test('should test accessibility of all discovered pages', async ({ page }) => {
    console.log('🧪 Testing accessibility of all discovered pages...');
    
    // Get unique URLs
    const uniqueUrls = [...new Set(navigationLinks.map(link => link.href))];
    
    for (const url of uniqueUrls) {
      if (url.startsWith('/')) {
        const fullUrl = BASE_URL + url;
        
        try {
          console.log(`Testing: ${url}`);
          const response = await page.goto(fullUrl, { 
            waitUntil: 'networkidle',
            timeout: 10000 
          });
          
          const result: AuditResult = {
            url: url,
            status: response?.status() || 0,
            accessible: response?.ok() || false,
            title: ''
          };
          
          if (response?.ok()) {
            result.title = await page.title();
            workingPages.push(url);
            console.log(`   ✅ ${url} - Status: ${result.status} - "${result.title}"`);
          } else {
            missingPages.push(url);
            result.error = `HTTP ${result.status}`;
            console.log(`   ❌ ${url} - Status: ${result.status} - MISSING`);
          }
          
          auditResults.push(result);
          
        } catch (error) {
          missingPages.push(url);
          auditResults.push({
            url: url,
            status: 0,
            accessible: false,
            title: '',
            error: error instanceof Error ? error.message : 'Unknown error'
          });
          console.log(`   ❌ ${url} - Error: ${error}`);
        }
      }
    }
  });

  test('should generate comprehensive audit report', async ({ page }) => {
    console.log('📊 Generating comprehensive audit report...');
    
    const totalPages = auditResults.length;
    const accessiblePages = workingPages.length;
    const inaccessiblePages = missingPages.length;
    
    const auditReport = {
      summary: {
        totalPagesFound: totalPages,
        accessiblePages: accessiblePages,
        missingPages: inaccessiblePages,
        accessibilityRate: totalPages > 0 ? ((accessiblePages / totalPages) * 100).toFixed(1) + '%' : '0%'
      },
      workingPages: workingPages.sort(),
      missingPages: missingPages.sort(),
      navigationLinks: navigationLinks,
      detailedResults: auditResults,
      timestamp: new Date().toISOString()
    };

    // Save audit report
    const fs = require('fs');
    const reportPath = './audit-results/sppp-v2-audit-report.json';
    
    if (!fs.existsSync('./audit-results')) {
      fs.mkdirSync('./audit-results', { recursive: true });
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(auditReport, null, 2));

    console.log('\n📈 SPPP v2 Website Audit Results:');
    console.log('=====================================');
    console.log(`📄 Total Pages Discovered: ${totalPages}`);
    console.log(`✅ Working Pages: ${accessiblePages}`);
    console.log(`❌ Missing Pages: ${inaccessiblePages}`);
    console.log(`📊 Accessibility Rate: ${auditReport.summary.accessibilityRate}`);
    
    console.log('\n✅ Working Pages:');
    workingPages.forEach(page => console.log(`   - ${page}`));
    
    console.log('\n❌ Missing Pages that need to be developed:');
    missingPages.forEach(page => console.log(`   - ${page}`));
    
    console.log(`\n📁 Detailed report saved to: ${reportPath}`);

    // Create development plan
    const developmentPlan = {
      phase1: {
        name: "Critical Navigation Pages",
        pages: missingPages.filter(page => 
          navigationLinks.some(link => link.href === page && link.type === 'main')
        )
      },
      phase2: {
        name: "Service & Feature Pages", 
        pages: missingPages.filter(page => 
          page.includes('/services/') || page.includes('/training/') || page.includes('/infrastructure/')
        )
      },
      phase3: {
        name: "Legal & Information Pages",
        pages: missingPages.filter(page => 
          page.includes('/legal/') || page.includes('/resources/') || page.includes('/undang-undang/')
        )
      },
      phase4: {
        name: "Portal & Interactive Pages",
        pages: missingPages.filter(page => 
          page.includes('/staff-portal') || page.includes('/permits') || page.includes('/tracking')
        )
      }
    };

    fs.writeFileSync('./audit-results/development-plan.json', JSON.stringify(developmentPlan, null, 2));
    
    console.log('\n🎯 Development Plan Created:');
    Object.entries(developmentPlan).forEach(([phase, data]) => {
      console.log(`\n${phase.toUpperCase()}: ${data.name}`);
      data.pages.forEach((page: string) => console.log(`   - ${page}`));
    });

    console.log('\n✅ Audit completed successfully!');
  });
});