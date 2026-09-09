// Scans built localized pages for leftover English UI strings.
// Article bodies + brand names + URLs + code stay English by design and are excluded.
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
const locales = ['ko', 'ja', 'zh', 'tr', 'ru', 'pt-BR'];
// English UI copy that must never appear on localized CHROME (not bodies)
const probes = [
  'Frequently Asked Questions',
  'Still stuck?',
  'Getting started',
  'Quickstart',
  'No accounts required',
  'Privacy by Design',
  'Support Center',
  'Terms of Service',
  'Privacy Policy',
  'AI Code Viewer',
  'Information we collect',
  'Acceptable use',
  'The toolkit begins',
  'Core Stack',
  'Loved by developers',
  'Flagship AI Developer Tools',
  'Coming soon',
  'Launch App',
  'In progress',
  'Featured',
  'Related articles',
  'Back to blog',
  'Copy link',
  'Engineering Insights',
  ' min read',
  'On this page',
  'Share this article',
  'Select Language',
  'Toggle Dark Mode',
  'Send a Message',
  'Your Name',
  'Email Address',
  'Thanks for subscribing',
  'Search articles by title',
  'No articles match',
  'No documentation matches',
  'No apps match',
  'Return Home',
  'Page Not Found',
  'All Categories',
  '0 KB React Overhead',
  'Founder &amp; Lead Software Architect',
  'Founder & Lead Developer',
  'Last updated',
  ' applications',
];

const leaks = [];
for (const l of locales) {
  const files = [
    'index.html',
    'about/index.html',
    'contact/index.html',
    'docs/index.html',
    'ai-code-viewer-ai/index.html',
    'privacy/index.html',
    'terms/index.html',
    'support/index.html',
    'apps/index.html',
    'apps/admin/index.html',
    'blog/index.html',
  ];
  let blob = '';
  for (const f of files) {
    const p = path.join(dist, l, f);
    if (fs.existsSync(p)) blob += fs.readFileSync(p, 'utf8');
  }
  // Strip article bodies? Listing pages have no bodies; readers excluded from this scan.
  for (const probe of probes) {
    if (blob.includes(probe)) leaks.push(`${l} :: ${probe}`);
  }
}
if (leaks.length === 0) {
  console.log('LOCALE LEAK SCAN: clean (0 English UI strings on localized pages)');
} else {
  console.log(`LOCALE LEAK SCAN: ${leaks.length} hits`);
  leaks.slice(0, 40).forEach((x) => console.log('  LEAK', x));
  process.exit(1);
}
