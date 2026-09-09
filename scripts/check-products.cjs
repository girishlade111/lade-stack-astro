// Audit the Products section (#products) on every locale home page.
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
const locales = ['', 'ko', 'ja', 'zh', 'tr', 'ru', 'pt-BR'];
let fail = false;
for (const l of locales) {
  const f = l === '' ? 'index.html' : `${l}/index.html`;
  const h = fs.readFileSync(path.join(dist, f), 'utf8');
  const anchor = h.includes('id="products"');
  const cards = (h.match(/class="group p-8 rounded-3xl/g) || []).length;
  const navRefs = (h.match(/#products/g) || []).length;
  const titles = ['CodeEnhance AI', 'API Testing Platform', 'Website Builder AI', 'Secure File Hub']
    .filter((t) => h.includes(t)).length;
  // Home keeps the #products anchor section for compat; nav links to the /products page.
  const ok = anchor && cards === 4 && titles === 4;
  if (!ok) fail = true;
  console.log(`${l || 'en'.padEnd(5)} | anchor:${anchor} cards:${cards}/4 titles:${titles}/4 #products-refs:${navRefs} ${ok ? 'OK' : 'BROKEN'}`);
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
  const cards = (h.match(/class="group p-8 rounded-3xl/g) || []).length;
  const canon = h.includes(l === '' ? 'rel="canonical" href="https://ladestack.in/products"' : `rel="canonical" href="https://ladestack.in/${l}/products"`);
  const ok = cards === 4 && canon;
  if (!ok) fail2 = true;
  console.log(`${l || 'en'} /products cards:${cards}/4 canon:${canon} ${ok ? 'OK' : 'BROKEN'}`);
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

// ru page fully translated
const ruOk = fs.readFileSync(path.join(dist, 'ru/products/index.html'), 'utf8').includes('Флагманские');
if (!ruOk) fail2 = true;
console.log(`ru translated: ${ruOk ? 'OK' : 'BROKEN'}`);

process.exit(fail || fail2 ? 1 : 0);
