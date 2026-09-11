const fs = require('fs');
const path = require('path');

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

const dynamicCalls = [];
for (const file of astroFiles) {
  const rel = path.relative(path.join(__dirname, '..'), file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf-8');
  // Match t(...) where inside is not purely '...' or "..."
  const matches = content.matchAll(/\bt\(([^)]+)\)/g);
  for (const m of matches) {
    const arg = m[1].trim();
    if (!arg.startsWith("'") && !arg.startsWith('"')) {
      dynamicCalls.push({ file: rel, call: m[0], arg });
    }
  }
}

console.log('Dynamic t(...) calls:', dynamicCalls);
