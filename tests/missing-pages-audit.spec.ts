import { test, expect } from '@playwright/test';

// SPPP v2 Missing Pages Audit
// Based on user-identified missing pages and navigation structure

const BASE_URL = 'http://localhost:3000';

// Pages identified by user as missing
const REQUIRED_PAGES = [
  // About section pages
  '/about/leadership',           // Kepimpinan
  '/about/organization-chart',   // Carta Organisasi
  
  // Infrastructure pages
  '/infrastructure/facilities',  // Kemudahan Pelabuhan
  '/infrastructure/connectivity', // Jalinan Perhubungan
  '/infrastructure/technology',  // Teknologi & Sistem
  
  // Services section
  '/services/cargo',            // Perkhidmatan Kargo
  '/services/vessel',           // Perkhidmatan Kapal  
  '/services/consultation',     // Perundingan Teknikal
  '/services/digital',          // Perkhidmatan Digital
  
  // Training & Development
  '/training',                  // Main training page
  '/training/programs',         // Program Latihan
  '/training/certification',    // Sijil & Akreditasi
  '/training/schedule',         // Jadual Kursus
  '/training/registration',     // Pendaftaran Online
  
  // News & Media
  '/news',                      // Berita & Media
  '/news/1',                    // Sample news article
  '/announcements',             // Pengumuman
  '/media-center',              // Pusat Media
  '/press-releases',            // Siaran Media
  '/publications',              // Penerbitan
  '/events',                    // Acara & Aktiviti
  
  // Contact
  '/contact',                   // Hubungi Kami
  
  // Staff Portal
  '/staff-portal',              // Portal Staf
  
  // Information section (Maklumat)
  '/resources',                 // Sumber
  '/resources/knowledge-base',  // Pangkalan Pengetahuan
  '/tenders',                   // Tender & Kontrak
  '/reports',                   // Laporan Tahunan
  '/policies',                  // Dasar & Prosedur
  '/careers',                   // Kerjaya
  '/partnerships',              // Perkongsian
  
  // Legal section (Undang-undang)
  '/legal/privacy',             // Dasar Privasi
  '/legal/terms',               // Terma Penggunaan
  '/legal/accessibility',       // Kebolehcapaian
  '/legal/cookies',             // Dasar Cookie
  '/undang-undang/spLaSK',      // SpLaSK
  
  // Additional functional pages
  '/permits',                   // e-Permit
  '/tracking',                  // Cargo Tracking
  '/bookings',                  // Tempahan Kemudahan
  '/sitemap',                   // Peta Laman
  '/search',                    // Search Results Page
  
  // Dashboard & Operations (for future)
  '/operations/dashboard',      // Dashboard Operasi
  '/services/vessel-schedule',  // Jadual Kapal
];

interface PageAudit {
  url: string;
  status: number;
  accessible: boolean;
  title: string;
  hasNavigation: boolean;
  hasContent: boolean;
  error?: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
}

const auditResults: PageAudit[] = [];

// Categorize pages by priority
function getPagePriority(url: string): 'critical' | 'high' | 'medium' | 'low' {
  // Critical: Main navigation pages
  if (['/about/leadership', '/infrastructure', '/services', '/training', '/news', '/contact', '/staff-portal'].some(path => url.includes(path.split('/')[1]))) {
    return 'critical';
  }
  
  // High: Service and feature pages
  if (url.includes('/services/') || url.includes('/training/') || url.includes('/infrastructure/')) {
    return 'high';
  }
  
  // Medium: Information and resource pages
  if (url.includes('/resources/') || url.includes('/legal/') || url.includes('/reports') || url.includes('/policies')) {
    return 'medium';
  }
  
  // Low: Additional functionality
  return 'low';
}

test.describe('SPPP v2 Missing Pages Comprehensive Audit', () => {
  
  test('should audit all required pages for accessibility', async ({ page }) => {
    console.log('🔍 Auditing all required SPPP v2 pages...');
    console.log(`📄 Total pages to check: ${REQUIRED_PAGES.length}`);
    
    for (const pageUrl of REQUIRED_PAGES) {
      const fullUrl = BASE_URL + pageUrl;
      
      try {
        console.log(`\nTesting: ${pageUrl}`);
        const response = await page.goto(fullUrl, { 
          waitUntil: 'networkidle',
          timeout: 10000 
        });
        
        const audit: PageAudit = {
          url: pageUrl,
          status: response?.status() || 0,
          accessible: response?.ok() || false,
          title: '',
          hasNavigation: false,
          hasContent: false,
          priority: getPagePriority(pageUrl)
        };
        
        if (response?.ok()) {
          // Get page details if accessible
          audit.title = await page.title();
          audit.hasNavigation = await page.locator('nav, .nav-primary').count() > 0;
          audit.hasContent = await page.locator('main, .main-content').count() > 0;
          
          console.log(`   ✅ ACCESSIBLE - Status: ${audit.status} - "${audit.title}"`);
        } else {
          audit.error = `HTTP ${audit.status} - Page not found`;
          console.log(`   ❌ MISSING - Status: ${audit.status} - ${audit.error}`);
        }
        
        auditResults.push(audit);
        
      } catch (error) {
        const audit: PageAudit = {
          url: pageUrl,
          status: 0,
          accessible: false,
          title: '',
          hasNavigation: false,
          hasContent: false,
          priority: getPagePriority(pageUrl),
          error: error instanceof Error ? error.message : 'Unknown error'
        };
        
        auditResults.push(audit);
        console.log(`   ❌ ERROR - ${pageUrl}: ${audit.error}`);
      }
    }
  });

  test('should generate missing pages development report', async ({ page }) => {
    console.log('📊 Generating missing pages development report...');
    
    // Categorize results
    const accessiblePages = auditResults.filter(r => r.accessible);
    const missingPages = auditResults.filter(r => !r.accessible);
    const criticalMissing = missingPages.filter(r => r.priority === 'critical');
    const highMissing = missingPages.filter(r => r.priority === 'high');
    const mediumMissing = missingPages.filter(r => r.priority === 'medium');
    const lowMissing = missingPages.filter(r => r.priority === 'low');
    
    const report = {
      summary: {
        totalPagesRequired: REQUIRED_PAGES.length,
        accessiblePages: accessiblePages.length,
        missingPages: missingPages.length,
        completionRate: ((accessiblePages.length / REQUIRED_PAGES.length) * 100).toFixed(1) + '%',
        criticalMissing: criticalMissing.length,
        highMissing: highMissing.length,
        mediumMissing: mediumMissing.length,
        lowMissing: lowMissing.length
      },
      developmentPlan: {
        phase1_critical: {
          description: "Critical navigation pages - must be developed first",
          pages: criticalMissing.map(p => ({ url: p.url, priority: p.priority, error: p.error }))
        },
        phase2_high: {
          description: "High priority service and feature pages",
          pages: highMissing.map(p => ({ url: p.url, priority: p.priority, error: p.error }))
        },
        phase3_medium: {
          description: "Medium priority information and resource pages", 
          pages: mediumMissing.map(p => ({ url: p.url, priority: p.priority, error: p.error }))
        },
        phase4_low: {
          description: "Low priority additional functionality",
          pages: lowMissing.map(p => ({ url: p.url, priority: p.priority, error: p.error }))
        }
      },
      accessiblePages: accessiblePages.map(p => ({
        url: p.url,
        title: p.title,
        hasNavigation: p.hasNavigation,
        hasContent: p.hasContent
      })),
      detailedResults: auditResults,
      timestamp: new Date().toISOString()
    };

    // Save comprehensive report
    const fs = require('fs');
    const reportDir = './audit-results';
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    
    const reportPath = `${reportDir}/missing-pages-audit-report.json`;
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Create CSV for easy tracking
    const csvContent = [
      'URL,Status,Priority,Title,Has Navigation,Has Content,Error',
      ...auditResults.map(r => 
        `${r.url},${r.accessible ? 'EXISTS' : 'MISSING'},${r.priority},"${r.title}",${r.hasNavigation},${r.hasContent},"${r.error || ''}"`
      )
    ].join('\n');
    
    fs.writeFileSync(`${reportDir}/missing-pages-audit.csv`, csvContent);

    // Console output
    console.log('\n📈 SPPP v2 Missing Pages Audit Results:');
    console.log('==========================================');
    console.log(`📄 Total Required Pages: ${report.summary.totalPagesRequired}`);
    console.log(`✅ Accessible Pages: ${report.summary.accessiblePages}`);
    console.log(`❌ Missing Pages: ${report.summary.missingPages}`);
    console.log(`📊 Completion Rate: ${report.summary.completionRate}`);
    console.log('');
    console.log('🎯 Missing Pages by Priority:');
    console.log(`   🔴 Critical: ${report.summary.criticalMissing} pages`);
    console.log(`   🟠 High: ${report.summary.highMissing} pages`);
    console.log(`   🟡 Medium: ${report.summary.mediumMissing} pages`);
    console.log(`   🟢 Low: ${report.summary.lowMissing} pages`);
    
    console.log('\n✅ Accessible Pages:');
    accessiblePages.forEach(page => {
      console.log(`   ✓ ${page.url} - "${page.title}"`);
    });
    
    console.log('\n❌ Critical Missing Pages (Develop First):');
    criticalMissing.forEach(page => {
      console.log(`   ⚠️  ${page.url} - ${page.priority.toUpperCase()}`);
    });
    
    console.log('\n❌ High Priority Missing Pages:');
    highMissing.forEach(page => {
      console.log(`   ⚡ ${page.url} - ${page.priority.toUpperCase()}`);
    });
    
    console.log(`\n📁 Detailed reports saved to:`);
    console.log(`   - JSON: ${reportPath}`);
    console.log(`   - CSV: ${reportDir}/missing-pages-audit.csv`);
    
    console.log('\n🎉 Missing pages audit completed!');
    console.log('\n🚀 Next Steps:');
    console.log('1. Develop critical missing pages first');
    console.log('2. Extract content from original SPPP website');  
    console.log('3. Create missing pages with proper structure');
    console.log('4. Test all pages for accessibility and functionality');
  });
});