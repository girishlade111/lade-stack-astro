// Audit the Products section (#products) on every locale home page.
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
// Real production locale matrix: default English (no prefix) + 5 localized prefixes.
const locales = ['', 'zh', 'ko', 'ja', 'tr', 'pt-BR'];
let fail = false;
const PRODUCT_TITLES = ['CodeEnhance AI', 'API Testing Platform', 'Website Builder AI', 'Secure File Hub'];
for (const l of locales) {
  const f = l === '' ? 'index.html' : `${l}/index.html`;
  const h = fs.readFileSync(path.join(dist, f), 'utf8');
  const anchor = h.includes('id="products"');
  // NOTE: home renders products via FeatureCard variants (feature-card-dark/brand),
  // not the legacy `group p-8` cards — presence is proven by all 4 product titles.
  const titles = PRODUCT_TITLES.filter((t) => h.includes(t)).length;
  const navRefs = (h.match(/#products/g) || []).length;
  // Home keeps the #products anchor section for compat; nav links to the /products page.
  const ok = anchor && titles === 4;
  if (!ok) fail = true;
  console.log(`${(l || 'en').padEnd(5)} | anchor:${anchor} titles:${titles}/4 #products-refs:${navRefs} ${ok ? 'OK' : 'BROKEN'}`);
}

// Dedicated /products pages (EN + 6 locales)
let fail2 = false;
for (const l of locales) {
  const f = l === '' ? 'products/index.html' : `${l}/products/index.html`;
  const p = path.join(dist, f);
  if (!fs.existsSync(p)) {
    console.log(`${l || 'en'} /products MISSING`);
    fail2 = true;
    continue;
  }
  const h = fs.readFileSync(p, 'utf8');
  // EN /products uses FeatureCard variants; localized /products use `group p-8`
  // cards — accept either, and require all 4 real product titles in both cases.
  const cards = (h.match(/class="group p-8 rounded-3xl/g) || []).length;
  const featureCards = (h.match(/feature-card-(dark|brand)/g) || []).length;
  const titles = PRODUCT_TITLES.filter((t) => h.includes(t)).length;
  const canon = h.includes(l === '' ? 'rel="canonical" href="https://ladestack.in/products"' : `rel="canonical" href="https://ladestack.in/${l}/products"`);
  const ok = (cards === 4 || featureCards >= 4) && titles === 4 && canon;
  if (!ok) fail2 = true;
  console.log(`${l || 'en'} /products group-cards:${cards} feature-cards:${featureCards} titles:${titles}/4 canon:${canon} ${ok ? 'OK' : 'BROKEN'}`);
}

// Nav must link to the page (not the anchor) on every locale home
for (const l of locales) {
  const f = l === '' ? 'index.html' : `${l}/index.html`;
  const h = fs.readFileSync(path.join(dist, f), 'utf8');
  const want = l === '' ? 'href="/products"' : `href="/${l}/products"`;
  const ok = h.includes(want);
  if (!ok) fail2 = true;
  console.log(`${l || 'en'} nav->${want}: ${ok ? 'OK' : 'BROKEN'}`);
}

// Sitemap must list /products + locales
const sm = fs.readFileSync(path.join(dist, 'sitemap-0.xml'), 'utf8');
const smOk = sm.includes('ladestack.in/products');
if (!smOk) fail2 = true;
console.log(`sitemap /products: ${smOk ? 'OK' : 'BROKEN'}`);

// apps.json registry count check (B13). NOTE: update EXPECTED_APPS + EXPECTED_TITLES
// whenever entries are added/removed in src/data/apps.json, or this gate will fail.
const appsData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'apps.json'), 'utf8'));
const EXPECTED_APPS = 12;
const EXPECTED_TITLES = ['CodeEnhance AI', 'LS PDF Tools', 'LS Image Studio', 'Swift Resume', 'Bharat Land Records', 'GameHub', 'Driving Vibes', 'GB Coder', 'API Testing Platform', 'Website Builder', 'File Management', 'Documentation AI'];
const appsCountOk = appsData.length === EXPECTED_APPS;
const appsTitlesOk = EXPECTED_TITLES.every((t) => appsData.some((a) => a.title === t));
if (!appsCountOk || !appsTitlesOk) fail2 = true;
console.log(`apps.json entries:${appsData.length}/${EXPECTED_APPS} titles:${appsTitlesOk ? 'OK' : 'MISMATCH'} ${appsCountOk && appsTitlesOk ? 'OK' : 'BROKEN'}`);

process.exit(fail || fail2 ? 1 : 0);
