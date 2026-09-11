const fs = require('fs');
const src = fs.readFileSync('src/i18n/seo.ts', 'utf8');
const marks = ['en:', 'ru:', 'ko:', "'pt-BR':", 'zh:', 'ja:', 'tr:'];
const pages = ['home:', 'about:', 'apps:', 'products:', 'aiCodeViewer:', 'docs:', 'support:', 'contact:', 'privacy:', 'terms:'];
// find block starts
const starts = marks.map(m => ({ m, i: src.indexOf('\n  ' + m + ' {') }));
starts.forEach(s => console.log(s.m, s.i));
starts.sort((a, b) => a.i - b.i);
for (let k = 0; k < starts.length; k++) {
  const blk = src.slice(starts[k].i, k + 1 < starts.length ? starts[k + 1].i : undefined);
  const res = pages.map(p => {
    const ps = blk.indexOf('\n    ' + p + ' {');
    if (ps < 0) return p + '=MISSING';
    const pe = blk.indexOf('\n    },', ps);
    const pb = blk.slice(ps, pe);
    const t = pb.includes('ogTitle'), d = pb.includes('ogDescription');
    return (t && d) ? null : `${p} ogTitle=${t} ogDesc=${d}`;
  }).filter(Boolean);
  console.log(starts[k].m, res.length ? 'PROBLEMS: ' + res.join(' | ') : 'all 10 pages have ogTitle+ogDescription OK');
}
