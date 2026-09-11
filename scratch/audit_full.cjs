const fs = require('fs');
const path = require('path');

// 1. SCAN ALL .astro files in src/pages/ and src/components/
function getFiles(dir, exts = ['.astro', '.ts']) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getFiles(full, exts));
    } else if (exts.some(ext => item.name.endsWith(ext))) {
      files.push(full);
    }
  }
  return files;
}

const astroFiles = [
  ...getFiles(path.join(__dirname, '../src/pages'), ['.astro']),
  ...getFiles(path.join(__dirname, '../src/components'), ['.astro'])
];

console.log(`Found ${astroFiles.length} .astro files.`);

// Extract all t('...') calls
// Patterns: t('...'), t("..."), t(`...`)
const tKeyUsage = new Map(); // key -> Set of files

const tRegex = /\bt\(\s*['"`]([^'"`]+)['"`]\s*\)/g;

for (const file of astroFiles) {
  const relPath = path.relative(path.join(__dirname, '..'), file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = tRegex.exec(content)) !== null) {
    const key = match[1];
    if (!tKeyUsage.has(key)) {
      tKeyUsage.set(key, new Set());
    }
    tKeyUsage.get(key).add(relPath);
  }
}

console.log(`Found ${tKeyUsage.size} unique keys called via t('...') in .astro files.`);

// Parse ui.ts to see what keys each locale dictionary explicitly defines
const uiContent = fs.readFileSync(path.join(__dirname, '../src/i18n/ui.ts'), 'utf-8');

// We can split ui.ts into sections by locale
// Locales: en, ru, zh, ko, ja, tr, ptBR
const localeMarkers = [
  { loc: 'en', regex: /const en = \{/ },
  { loc: 'ru', regex: /const ru: Record<UIKeys, string> = \{/ },
  { loc: 'zh', regex: /const zh: Record<UIKeys, string> = \{/ },
  { loc: 'ko', regex: /const ko: Record<UIKeys, string> = \{/ },
  { loc: 'ja', regex: /const ja: Record<UIKeys, string> = \{/ },
  { loc: 'tr', regex: /const tr: Record<UIKeys, string> = \{/ },
  { loc: 'pt-BR', regex: /const ptBR: Record<UIKeys, string> = \{/ },
];

const localeBlocks = {};
const lines = uiContent.split(/\r?\n/);
let currentLoc = null;
let currentBlock = [];

for (const line of lines) {
  for (const marker of localeMarkers) {
    if (marker.regex.test(line)) {
      if (currentLoc) {
        localeBlocks[currentLoc] = currentBlock.join('\n');
      }
      currentLoc = marker.loc;
      currentBlock = [];
      break;
    }
  }
  if (currentLoc) {
    currentBlock.push(line);
  }
}
if (currentLoc) {
  localeBlocks[currentLoc] = currentBlock.join('\n');
}

// Extract keys explicitly defined in each block
// Key pattern: 'key.name': or "key.name":
const keyRegex = /^\s*['"]([^'"]+)['"]\s*:/gm;
const localeKeys = {};
for (const loc of Object.keys(localeBlocks)) {
  const block = localeBlocks[loc];
  const keys = new Set();
  let m;
  while ((m = keyRegex.exec(block)) !== null) {
    keys.add(m[1]);
  }
  localeKeys[loc] = keys;
  console.log(`Locale ${loc}: ${keys.size} explicitly defined keys`);
}

// Check 1: Any key in tKeyUsage NOT in en?
console.log('\n--- CHECK: Keys used in code but MISSING from en ---');
let missingFromEn = [];
for (const key of tKeyUsage.keys()) {
  if (!localeKeys['en'].has(key)) {
    missingFromEn.push({ key, files: Array.from(tKeyUsage.get(key)) });
  }
}
console.log(`Found ${missingFromEn.length} keys missing from en:`, missingFromEn);

// Check 2: Any key used in code that is MISSING (not explicitly translated) in other locales?
console.log('\n--- CHECK: Keys used in code but MISSING from non-English locales (falling back to en) ---');
const missingPerLocale = {};
const localesToCheck = ['ru', 'zh', 'ko', 'ja', 'tr', 'pt-BR'];
for (const loc of localesToCheck) {
  missingPerLocale[loc] = [];
  for (const key of tKeyUsage.keys()) {
    if (!localeKeys[loc] || !localeKeys[loc].has(key)) {
      missingPerLocale[loc].push(key);
    }
  }
  console.log(`Locale ${loc} is missing ${missingPerLocale[loc].length} keys used in code:`, missingPerLocale[loc]);
}

// Check 3: Are there keys in 'en' dictionary that are missing in other locales (even if not currently used in .astro)?
console.log('\n--- CHECK: Keys defined in en dictionary but MISSING from other locale dictionaries ---');
for (const loc of localesToCheck) {
  const missingFromDict = [];
  for (const key of localeKeys['en']) {
    if (!localeKeys[loc] || !localeKeys[loc].has(key)) {
      missingFromDict.push(key);
    }
  }
  console.log(`Locale ${loc} dictionary is missing ${missingFromDict.length} keys defined in en:`, missingFromDict);
}
