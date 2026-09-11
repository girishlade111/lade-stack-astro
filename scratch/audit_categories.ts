import fs from 'fs';
import path from 'path';

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

const allFiles = getFiles(path.join(process.cwd(), 'src'));

console.log('Searching for app category usage in src...');

const matches = [];

for (const file of allFiles) {
  const rel = path.relative(process.cwd(), file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (
      line.includes('appCategories') ||
      line.includes('displayCategory') ||
      line.includes('category') && (line.includes('app') || line.includes('apps') || line.includes('product') || line.includes('filter')) ||
      line.includes('AI Tools') ||
      line.includes('Productivity') ||
      line.includes('Cloud & DevOps') ||
      line.includes('Developer Utilities') ||
      line.includes('Utilities')
    ) {
      // ignore pure content translation dictionary files
      if (!rel.startsWith('src/i18n/content-')) {
        matches.push({ file: rel, line: idx + 1, text: line.trim() });
      }
    }
  });
}

console.log(`Found ${matches.length} matching lines:`);
matches.forEach(m => console.log(`${m.file}:${m.line} -> ${m.text}`));
