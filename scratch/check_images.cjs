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
const badAlts = [];
const allAlts = new Set();

files.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  const imgs = [...html.matchAll(/<img([^>]*)>/gi)];
  const rel = path.relative('dist', f).replace(/\\/g, '/');
  imgs.forEach(m => {
    const tag = m[1];
    const altMatch = tag.match(/alt=["'](.*?)["']/i);
    const srcMatch = tag.match(/src=["'](.*?)["']/i);
    const alt = altMatch ? altMatch[1] : null;
    const src = srcMatch ? srcMatch[1] : '';
    if (alt !== null) allAlts.add(alt);
    if (alt === null) {
      badAlts.push({ file: rel, issue: 'MISSING_ALT', src });
    } else if (alt === '' && !tag.includes('aria-hidden="true"') && !tag.includes('role="presentation"')) {
      badAlts.push({ file: rel, issue: 'EMPTY_ALT', src });
    } else if (/^(image|photo|picture|icon|img)$/i.test(alt.trim())) {
      badAlts.push({ file: rel, issue: 'GENERIC_ALT', alt, src });
    }
  });
});

console.log('Total bad alt tags found:', badAlts.length);
if (badAlts.length > 0) {
  console.log('Sample bad alts:');
  console.log(badAlts.slice(0, 10));
}
console.log('\nUnique alt texts across all pages:');
console.log([...allAlts]);
