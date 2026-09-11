/**
 * Spot-check translated posts to confirm code blocks are byte-identical
 * to the canonical English source.
 */
const fs = require('fs');
const path = require('path');

function extractCodeBlocks(content) {
  // Normalize Windows CRLF to LF so line endings match reliably
  const normalized = content.replace(/\r\n/g, '\n');
  const re = /```[\s\S]*?```/g;
  return normalized.match(re) || [];
}

const testCases = [
  { locale: 'zh', slug: 'building-rag-applications-vector-databases.md' },
  { locale: 'ja', slug: 'api-rate-limiting-throttling-strategies.md' },
  { locale: 'ko', slug: 'multi-cloud-architecture-aws-azure-gcp.md' },
  { locale: 'pt-BR', slug: 'future-of-ai-in-software-development.md' },
  { locale: 'ru', slug: 'building-zero-downtime-deployment-pipelines.md' },
  { locale: 'tr', slug: 'fine-tuning-llms-domain-specific-tasks.md' },
];

console.log('--- SPOT-CHECK CODE BLOCKS BYTE IDENTITY ---');
let hasError = false;

for (const tc of testCases) {
  const enPath = path.join(__dirname, '..', 'src', 'content', 'blog', 'en', tc.slug);
  const locPath = path.join(__dirname, '..', 'src', 'content', 'blog', tc.locale, tc.slug);

  if (!fs.existsSync(enPath) || !fs.existsSync(locPath)) {
    console.error(`File missing: ${enPath} or ${locPath}`);
    hasError = true;
    continue;
  }

  const enContent = fs.readFileSync(enPath, 'utf8');
  const locContent = fs.readFileSync(locPath, 'utf8');
  const enBlocks = extractCodeBlocks(enContent);
  const locBlocks = extractCodeBlocks(locContent);

  if (enBlocks.length !== locBlocks.length) {
    console.error(`FAIL: Block count mismatch in ${tc.locale}/${tc.slug} (EN: ${enBlocks.length}, LOC: ${locBlocks.length})`);
    hasError = true;
    continue;
  }

  let filePass = true;
  for (let i = 0; i < enBlocks.length; i++) {
    const bEn = Buffer.from(enBlocks[i], 'utf8');
    const bLoc = Buffer.from(locBlocks[i], 'utf8');
    if (Buffer.compare(bEn, bLoc) !== 0) {
      filePass = false;
      hasError = true;
      console.error(`FAIL: Block ${i + 1} differs byte-wise in ${tc.locale}/${tc.slug}`);
      console.error('--- EN BLOCK ---');
      console.error(enBlocks[i]);
      console.error('--- LOC BLOCK ---');
      console.error(locBlocks[i]);
    }
  }

  if (filePass) {
    console.log(`PASS: ${tc.locale}/${tc.slug} -> ${enBlocks.length} code block(s) byte-identical`);
  }
}

if (hasError) {
  console.error('\nResult: FAILED');
  process.exit(1);
} else {
  console.log('\nResult: ALL SPOT-CHECKED CODE BLOCKS ARE BYTE-IDENTICAL (PASS)');
}
