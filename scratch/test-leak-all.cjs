const fs = require('fs');
const path = require('path');
const dist = path.join(__dirname, '..', 'dist');
const locales = ['zh', 'ko', 'ja', 'tr', 'pt-BR', 'ru'];
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

const hits = [];
for (const l of locales) {
  const walk = (d) => {
    fs.readdirSync(d).forEach(f => {
      const p = path.join(d, f);
      if (fs.statSync(p).isDirectory()) walk(p);
      else if (f.endsWith('.html')) {
        let html = fs.readFileSync(p, 'utf8');
        html = html.replace(/<!--[\s\S]*?-->/g, '');
        // If it's a blog detail page, strip article body:
        if (p.includes(path.sep + 'blog' + path.sep)) {
          // Replace content between data-article-body and the end of that container
          html = html.replace(/data-article-body[\s\S]*?<\/div>\s*<\/div>/i, '');
        }
        for (const probe of probes) {
          if (html.includes(probe)) {
            hits.push({ locale: l, file: path.relative(dist, p), probe });
          }
        }
      }
    });
  };
  const locDir = path.join(dist, l);
  if (fs.existsSync(locDir)) walk(locDir);
}
console.log('Total hits:', hits.length);
const grouped = {};
for (const h of hits) {
  grouped[h.probe] = (grouped[h.probe] || 0) + 1;
}
console.log('Hits by probe:', grouped);
hits.slice(0, 30).forEach(h => console.log(h.locale, h.file, '-->', h.probe));
