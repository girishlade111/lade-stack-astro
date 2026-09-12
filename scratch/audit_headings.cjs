const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllHtmlFiles(fullPath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(distDir);

let h1Issues = [];
let skippedLevels = [];

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(distDir, file).replace(/\\/g, '/');
  
  // Check noindex
  const isNoIndex = html.includes('content="noindex');
  if (isNoIndex) continue; // skip non-indexable routes like 404, admin

  // Find all headings H1-H6
  const headingRegex = /<h([1-6])(?:\s+[^>]*)?>([\s\S]*?)<\/h\1>/gi;
  const headings = [];
  let match;
  while ((match = headingRegex.exec(html)) !== null) {
    headings.push({
      level: parseInt(match[1], 10),
      text: match[2].replace(/<[^>]*>/g, '').trim()
    });
  }

  const h1Count = headings.filter(h => h.level === 1).length;
  if (h1Count !== 1) {
    h1Issues.push({ file: rel, count: h1Count });
  }

  // Check skipped levels
  let prevLevel = 1;
  for (let i = 0; i < headings.length; i++) {
    const current = headings[i].level;
    if (i === 0 && current !== 1) {
      skippedLevels.push({ file: rel, issue: `First heading is H${current}, not H1` });
    } else if (i > 0 && current > prevLevel + 1) {
      skippedLevels.push({ file: rel, issue: `Skipped level: H${prevLevel} -> H${current} ("${headings[i].text.slice(0, 30)}")` });
    }
    prevLevel = current;
  }
}

console.log(`Total indexable files checked: ${htmlFiles.length - 21}`);
console.log(`H1 Issues (count != 1): ${h1Issues.length}`);
if (h1Issues.length > 0) {
  console.log(h1Issues);
}
console.log(`Skipped Level Issues: ${skippedLevels.length}`);
if (skippedLevels.length > 0) {
  console.log(skippedLevels.slice(0, 10));
}
