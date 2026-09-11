const fs = require('fs');
const locales = ['en','ru','zh','ko','ja','tr','ptbr'];
const fname = l => `src/i18n/content-${l}.ts`;
function block(src, key) {
  const re = new RegExp('^\\s*' + key + ':\\s*\\{([^}]*)\\}', 'm');
  const m = src.match(re);
  return m ? m[1] : null;
}
function keysOf(b) {
  if (!b) return [];
  return [...b.matchAll(/'([^']+)'\s*:/g)].map(m => m[1]);
}
const base = {};
for (const l of locales) {
  const src = fs.readFileSync(fname(l), 'utf8');
  const appC = keysOf(block(src, 'appCategories'));
  const appT = keysOf(block(src, 'appTime'));
  const blogC = keysOf(block(src, 'blogCategories'));
  // docs groups: count 'articles:' arrays and article title/text pairs
  const grpStart = src.indexOf('docsGroups');
  const clStart = src.indexOf('docsChangelog');
  const grp = src.slice(grpStart, clStart);
  const nGroups = (grp.match(/articles:/g) || []).length;
  const nArtTitles = (grp.match(/\btitle: '/g) || []).length; // group titles + article titles
  const clEnd = src.indexOf('timeline');
  const cl = src.slice(clStart, clEnd);
  const nCl = (cl.match(/^\s*v: /gm) || []).length;
  const cfStart = src.indexOf('contactFaqs'), dgStart = src.indexOf('docsGroups');
  const cf = src.slice(cfStart, dgStart);
  const nCf = (cf.match(/^\s*q: /gm) || []).length;
  const sfStart = src.indexOf('supportFaqs');
  const sf = src.slice(sfStart, cfStart);
  const nSf = (sf.match(/^\s*q: /gm) || []).length;
  console.log(`${l}: contactFaqs=${nCf} supportFaqs=${nSf} docsGroups=${nGroups} titles-in-groups=${nArtTitles} changelog=${nCl} appTime=[${appT.length}] appCat=[${appC.length}] blogCat=[${blogC.length}]`);
  if (l === 'en') { base.appC = appC; base.appT = appT; base.blogC = blogC; }
  else {
    const miss = (b, k) => b.filter(x => !k.includes(x));
    if (JSON.stringify([...appC].sort()) !== JSON.stringify([...base.appC].sort())) console.log(`  !! appCategories KEY DRIFT vs en. missing: ${miss(base.appC, appC)} extra: ${miss(appC, base.appC)}`);
    if (JSON.stringify([...appT].sort()) !== JSON.stringify([...base.appT].sort())) console.log(`  !! appTime KEY DRIFT vs en. missing: ${miss(base.appT, appT)} extra: ${miss(appT, base.appT)}`);
    if (JSON.stringify([...blogC].sort()) !== JSON.stringify([...base.blogC].sort())) console.log(`  !! blogCategories KEY DRIFT vs en. missing: ${miss(base.blogC, blogC)} extra: ${miss(blogC, base.blogC)}`);
  }
}
// untranslated-value check for ru: values identical to en in keyed maps
const enSrc = fs.readFileSync(fname('en'), 'utf8');
const ruSrc = fs.readFileSync(fname('ru'), 'utf8');
for (const k of ['appTime', 'appCategories', 'blogCategories']) {
  const e = block(enSrc, k), r = block(ruSrc, k);
  const eVals = [...e.matchAll(/'[^']+'\s*:\s*'([^']+)'/g)].map(m => m[1]);
  const rVals = [...r.matchAll(/'[^']+'\s*:\s*'([^']+)'/g)].map(m => m[1]);
  const same = eVals.filter((v, i) => v === rVals[i]);
  console.log(`ru.${k}: ${same.length} values still identical to English: ${JSON.stringify(same)}`);
}
