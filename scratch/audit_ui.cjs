const fs = require('fs');
const path = require('path');

const uiContent = fs.readFileSync(path.join(__dirname, '../src/i18n/ui.ts'), 'utf-8');

const lines = uiContent.split(/\r?\n/);
lines.forEach((line, idx) => {
  if (line.match(/^const\s+[a-zA-Z]/) || line.match(/^export\s+const\s+[a-zA-Z]/)) {
    console.log(`Line ${idx + 1}: ${line.slice(0, 80)}`);
  }
});
