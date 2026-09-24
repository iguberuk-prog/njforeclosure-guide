// Post-build: the Spanish section (/es/**) shares the root layout, which can
// only emit one static <html lang>. Rewrite the built Spanish pages to
// lang="es" so search engines, screen readers and browsers' translate
// prompts see the right language on first load. HtmlLang.tsx keeps it right
// after client-side navigation.
import fs from 'node:fs';
import path from 'node:path';

let n = 0;
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) {
      const s = fs.readFileSync(p, 'utf8');
      const t = s.replace('<html lang="en"', '<html lang="es"');
      if (t !== s) { fs.writeFileSync(p, t); n++; }
    }
  }
}
walk(path.join('out', 'es'));
console.log(`html lang="es" set on ${n} Spanish pages`);
