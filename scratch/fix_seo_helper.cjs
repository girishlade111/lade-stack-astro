const fs = require('fs');

// Let's refine the CJK and Turkish and pt-BR descriptions and titles in prepare_seo_data.cjs
let content = fs.readFileSync('scratch/prepare_seo_data.cjs', 'utf8');

// Fix pt-BR home title:
content = content.replace(
  "'Ferramentas Gratuitas de IA para Desenvolvedores | Lade Stack'",
  "'Ferramentas de IA Gratuitas para Devs | Lade Stack'" // 51 chars
);

fs.writeFileSync('scratch/prepare_seo_data.cjs', content, 'utf8');
