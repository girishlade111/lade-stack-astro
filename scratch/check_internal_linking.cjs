const fs = require('fs');
const path = require('path');

function walk(dir) {
  let res = [];
  fs.readdirSync(dir, { withFileTypes: true }).forEach(e => {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) res = res.concat(walk(f));
    else if (e.name.endsWith('.html')) res.push(f);
  });
  return res;
}

const files = walk('dist');
const inboundLinks = new Map(); // targetRoute -> Set of sourceRoutes

// Initialize all routes
files.forEach(f => {
  const route = '/' + path.relative('dist', f).replace(/\\/g, '/').replace(/\/index\.html$/, '').replace(/\.html$/, '');
  const cleanRoute = route === '/index' ? '/' : route;
  inboundLinks.set(cleanRoute, new Set());
});

files.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  const sourceRoute = '/' + path.relative('dist', f).replace(/\\/g, '/').replace(/\/index\.html$/, '').replace(/\.html$/, '');
  const cleanSource = sourceRoute === '/index' ? '/' : sourceRoute;

  const links = [...html.matchAll(/<a\s+[^>]*?href=["']([^"']+)["']/gi)].map(m => m[1]);
  links.forEach(href => {
    // normalise
    let target = href;
    if (target.startsWith('https://ladestack.in')) {
      target = target.replace('https://ladestack.in', '');
    }
    if (target.startsWith('/') && !target.startsWith('//') && !target.startsWith('/_astro') && !target.startsWith('/favicon') && !target.endsWith('.png') && !target.endsWith('.xml')) {
      target = target.split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
      if (inboundLinks.has(target)) {
        inboundLinks.get(target).add(cleanSource);
      }
    }
  });
});

console.log('=== INTERNAL LINKING AUDIT ===');
const orphaned = [];
for (const [route, sources] of inboundLinks.entries()) {
  if (sources.size === 0) {
    orphaned.push(route);
  }
}

console.log(`Total routes audited: ${inboundLinks.size}`);
console.log(`Orphaned routes (0 internal inbound links): ${orphaned.length}`);
if (orphaned.length > 0) {
  console.log('Orphaned routes:', orphaned);
} else {
  console.log('No orphaned pages found!');
}

// Check blog post linking to relatedApps
const blogDir = path.resolve('src/content/blog/en');
const blogPosts = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
let postsWithRelatedApps = 0;
blogPosts.forEach(f => {
  const content = fs.readFileSync(path.join(blogDir, f), 'utf8');
  if (content.includes('relatedApps:') && !content.includes('relatedApps: []')) {
    postsWithRelatedApps++;
  }
});
console.log(`\nBlog posts with relatedApps defined: ${postsWithRelatedApps} / ${blogPosts.length}`);
