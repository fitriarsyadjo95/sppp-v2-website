const fs = require('fs');
const path = require('path');

// List of pages that have duplicate Layout components
const pagesWithLayouts = [
  'src/app/contact/page.tsx',
  'src/app/training/schedule/page.tsx',
  'src/app/training/programs/page.tsx',
  'src/app/training/page.tsx',
  'src/app/training/certification/page.tsx',
  'src/app/about/organization-chart/page.tsx',
  'src/app/about/leadership/page.tsx',
  'src/app/about/page.tsx',
  'src/app/staff-portal/page.tsx',
  'src/app/news/page.tsx',
  'src/app/infrastructure/technology/page.tsx',
  'src/app/infrastructure/facilities/page.tsx',
  'src/app/services/cargo/page.tsx',
  'src/app/services/consultation/page.tsx',
  'src/app/services/vessel/page.tsx',
  'src/app/services/digital/page.tsx',
  'src/app/services/page.tsx'
];

console.log('🔧 Fixing duplicate Layout components...\n');

pagesWithLayouts.forEach(pagePath => {
  const fullPath = path.join(process.cwd(), pagePath);
  
  if (fs.existsSync(fullPath)) {
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove Layout import
      content = content.replace(/import\s+\{\s*Layout\s*\}\s+from\s+['"][^'"]*layout['"][^\n]*\n?/g, '');
      
      // Remove Layout wrapper and keep only the content inside
      // This regex looks for <Layout> and </Layout> tags and extracts the content
      content = content.replace(
        /return\s*\(\s*<Layout[^>]*>([\s\S]*?)<\/Layout>\s*\)/g,
        'return (\n    <>\n$1    </>\n  )'
      );
      
      // Alternative pattern for return statements without parentheses
      content = content.replace(
        /return\s+<Layout[^>]*>([\s\S]*?)<\/Layout>/g,
        'return (\n    <>\n$1    </>\n  )'
      );
      
      // Clean up any double newlines
      content = content.replace(/\n\n+/g, '\n\n');
      
      fs.writeFileSync(fullPath, content);
      console.log(`✅ Fixed: ${pagePath}`);
      
    } catch (error) {
      console.log(`❌ Error fixing ${pagePath}: ${error.message}`);
    }
  } else {
    console.log(`⚠️ File not found: ${pagePath}`);
  }
});

console.log('\n✨ Layout cleanup completed!');