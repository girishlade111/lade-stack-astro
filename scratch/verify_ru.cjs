const fs = require('fs');

const ruContact = fs.readFileSync('dist/ru/contact/index.html', 'utf-8');
const enContact = fs.readFileSync('dist/contact/index.html', 'utf-8');

const ruDocs = fs.readFileSync('dist/ru/docs/index.html', 'utf-8');
const enDocs = fs.readFileSync('dist/docs/index.html', 'utf-8');

console.log('=== CONTACT PAGE COMPARISON ===');
const ruFaqs = (ruContact.match(/<details/g) || []).length;
const enFaqs = (enContact.match(/<details/g) || []).length;
console.log(`RU FAQs: ${ruFaqs} | EN FAQs: ${enFaqs}`);

console.log('\n=== DOCS PAGE COMPARISON ===');
const ruSections = (ruDocs.match(/data-docs-section/g) || []).length;
const enSections = (enDocs.match(/data-docs-section/g) || []).length;
console.log(`RU Groups (sections): ${ruSections} | EN Groups: ${enSections}`);

const ruArticles = (ruDocs.match(/data-docs-article/g) || []).length;
const enArticles = (enDocs.match(/data-docs-article/g) || []).length;
console.log(`RU Articles: ${ruArticles} | EN Articles: ${enArticles}`);

const ruChangelog = (ruDocs.match(/class=\"font-mono font-semibold text-primary\"/g) || []).length;
const enChangelog = (enDocs.match(/class=\"font-mono font-semibold text-primary\"/g) || []).length;
console.log(`RU Changelog entries: ${ruChangelog} | EN Changelog entries: ${enChangelog}`);

// Check specific group IDs in RU docs
const groupIds = [
  'getting-started',
  'api-reference',
  'integrations',
  'tutorials',
  'security',
  'teams',
  'data',
  'deployment'
];

console.log('\nChecking Group IDs in /ru/docs:');
for (const id of groupIds) {
  const hasId = ruDocs.includes(`id="${id}"`);
  console.log(`- ${id}: ${hasId ? 'FOUND' : 'MISSING'}`);
}
