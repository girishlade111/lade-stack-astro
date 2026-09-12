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
const allRealImages = [];

files.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  // strip scripts and attributes safely or match <img with src
  const imgMatches = [...html.matchAll(/<img\s+([^>]*?)>/gi)];
  const rel = path.relative('dist', f).replace(/\\/g, '/');
  imgMatches.forEach(m => {
    const attrs = m[1];
    // verify it's a real tag by checking if it has src=
    const srcMatch = attrs.match(/src=["'](.*?)["']/i);
    if (!srcMatch) {
      // not a real img element (e.g. inside an attribute string)
      return;
    }
    const src = srcMatch[1];
    const altMatch = attrs.match(/alt=["'](.*?)["']/i);
    const alt = altMatch ? altMatch[1] : null;
    
    allRealImages.push({ file: rel, src, alt });

    if (alt === null) {
      badAlts.push({ file: rel, issue: 'MISSING_ALT', src });
    } else if (alt === '' && !attrs.includes('aria-hidden="true"') && !attrs.includes('role="presentation"')) {
      badAlts.push({ file: rel, issue: 'EMPTY_ALT', src });
    } else if (/^(image|photo|picture|icon|img)$/i.test(alt.trim())) {
      badAlts.push({ file: rel, issue: 'GENERIC_ALT', alt, src });
    }
  });
});

console.log('Total real images audited:', allRealImages.length);
console.log('Bad alt images:', badAlts.length);
if (badAlts.length > 0) {
  console.log(badAlts);
}
