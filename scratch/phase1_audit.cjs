const fs = require('fs');
const path = require('path');

const locales = ['en', 'ru', 'zh', 'ko', 'ja', 'tr', 'pt-BR'];

// Read seo.ts to inspect definitions
const seoTsContent = fs.readFileSync('src/i18n/seo.ts', 'utf8');

// Also check dist/
const distDir = path.resolve('dist');

// Read all blog post slugs
const blogDir = path.resolve('src/content/blog/en');
const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
const blogSlugs = blogFiles.map(f => f.replace(/\.md$/, ''));

console.log(`Found ${blogSlugs.length} blog posts in en/`);

// Unique page types to audit
const pageTypes = [
  { type: 'Home', fileEn: 'dist/index.html', key: 'home' },
  { type: 'Products', fileEn: 'dist/products/index.html', key: 'products' },
  { type: 'Apps Gallery', fileEn: 'dist/apps/index.html', key: 'apps' },
  { type: 'AI Code Viewer', fileEn: 'dist/ai-code-viewer-ai/index.html', key: 'aiCodeViewer' },
  { type: 'About', fileEn: 'dist/about/index.html', key: 'about' },
  { type: 'Docs', fileEn: 'dist/docs/index.html', key: 'docs' },
  { type: 'Contact', fileEn: 'dist/contact/index.html', key: 'contact' },
  { type: 'Support', fileEn: 'dist/support/index.html', key: 'support' },
  { type: 'Blog Listing', fileEn: 'dist/blog/index.html', key: 'blogListing' },
  { type: 'Blog Post (Sample)', fileEn: `dist/blog/${blogSlugs[0]}/index.html`, key: 'blogPost' },
  { type: 'Privacy Policy', fileEn: 'dist/privacy/index.html', key: 'privacy' },
  { type: 'Terms of Service', fileEn: 'dist/terms/index.html', key: 'terms' }
];

function extractMeta(html) {
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  const metaTitleMatch = html.match(/<meta\s+name=["']title["']\s+content=["'](.*?)["']/i);
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  const keywordsMatch = html.match(/<meta\s+name=["']keywords["']\s+content=["'](.*?)["']/i);
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
  
  const ogTitle = html.match(/<meta\s+property=["']og:title["']\s+content=["'](.*?)["']/i);
  const ogDesc = html.match(/<meta\s+property=["']og:description["']\s+content=["'](.*?)["']/i);
  const ogImage = html.match(/<meta\s+property=["']og:image["']\s+content=["'](.*?)["']/i);
  const ogUrl = html.match(/<meta\s+property=["']og:url["']\s+content=["'](.*?)["']/i);
  const ogType = html.match(/<meta\s+property=["']og:type["']\s+content=["'](.*?)["']/i);
  const ogSiteName = html.match(/<meta\s+property=["']og:site_name["']\s+content=["'](.*?)["']/i);

  const twCard = html.match(/<meta\s+name=["']twitter:card["']\s+content=["'](.*?)["']/i);
  const twTitle = html.match(/<meta\s+name=["']twitter:title["']\s+content=["'](.*?)["']/i);
  const twDesc = html.match(/<meta\s+name=["']twitter:description["']\s+content=["'](.*?)["']/i);
  const twImage = html.match(/<meta\s+name=["']twitter:image["']\s+content=["'](.*?)["']/i);
  const twSite = html.match(/<meta\s+name=["']twitter:site["']\s+content=["'](.*?)["']/i);
  const twCreator = html.match(/<meta\s+name=["']twitter:creator["']\s+content=["'](.*?)["']/i);

  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h2Matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const pMatches = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(p => p.length > 20);

  // JSON-LD blocks
  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map(m => {
    try {
      return JSON.parse(m[1]);
    } catch (e) {
      return { error: e.message };
    }
  });

  return {
    title: titleMatch ? titleMatch[1] : '',
    titleLength: titleMatch ? titleMatch[1].length : 0,
    desc: descMatch ? descMatch[1] : '',
    descLength: descMatch ? descMatch[1].length : 0,
    keywords: keywordsMatch ? keywordsMatch[1] : '',
    canonical: canonicalMatch ? canonicalMatch[1] : '',
    og: {
      title: !!ogTitle,
      desc: !!ogDesc,
      image: !!ogImage,
      url: !!ogUrl,
      type: !!ogType,
      siteName: !!ogSiteName,
      complete: !!(ogTitle && ogDesc && ogImage && ogUrl && ogType && ogSiteName)
    },
    twitter: {
      card: !!twCard,
      title: !!twTitle,
      desc: !!twDesc,
      image: !!twImage,
      site: !!twSite,
      creator: !!twCreator,
      complete: !!(twCard && twTitle && twDesc && twImage && twSite && twCreator)
    },
    h1: h1Matches,
    h2Count: h2Matches.length,
    h2Sample: h2Matches.slice(0, 3),
    firstP: pMatches[0] || '',
    jsonLdBlocks
  };
}

console.log('\n================== AUDIT BY UNIQUE PAGE TYPE (EN) ==================');
for (const pt of pageTypes) {
  if (fs.existsSync(pt.fileEn)) {
    const html = fs.readFileSync(pt.fileEn, 'utf8');
    const meta = extractMeta(html);
    console.log(`\n--- [${pt.type}] (${pt.fileEn}) ---`);
    console.log(`Title (${meta.titleLength} chars): "${meta.title}"`);
    console.log(`Meta Desc (${meta.descLength} chars): "${meta.desc}"`);
    console.log(`Keywords: "${meta.keywords}"`);
    console.log(`Canonical: "${meta.canonical}"`);
    console.log(`OG Complete: ${meta.og.complete} | Twitter Complete: ${meta.twitter.complete}`);
    console.log(`H1 count: ${meta.h1.length} -> [${meta.h1.join(' | ')}]`);
    console.log(`H2 count: ${meta.h2Count}, First H2s: ${JSON.stringify(meta.h2Sample)}`);
    console.log(`First paragraph: "${meta.firstP.slice(0, 100)}..."`);
    
    // Check schemas
    const schemasFound = [];
    for (const b of meta.jsonLdBlocks) {
      if (b['@graph']) {
        schemasFound.push(...b['@graph'].map(g => g['@type']));
      } else if (Array.isArray(b)) {
        schemasFound.push(...b.map(g => g['@type']));
      } else if (b['@type']) {
        schemasFound.push(b['@type']);
      }
    }
    console.log(`Structured Data Types: [${schemasFound.join(', ')}]`);
  } else {
    console.log(`\n--- [${pt.type}] MISSING FILE: ${pt.fileEn} ---`);
  }
}
