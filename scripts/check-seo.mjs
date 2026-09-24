// Post-build SEO guard (runs automatically after `npm run build`).
// Fails the build when an indexable page would tell search engines the
// wrong thing — the class of bug that once had 14 guide/tool pages
// declaring the homepage as their canonical, and 418 pages sharing with no
// image. Cheap to run, catches regressions from any future edit or
// automated blog run before they reach production.
import fs from 'node:fs';
import path from 'node:path';

const OUT = 'out';
const BASE = 'https://njforeclosureguide.org';
const sitemap = fs.readFileSync(path.join(OUT, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const problems = [];

function fileFor(u) {
  const p = u.replace(BASE, '').replace(/^\/|\/$/g, '');
  for (const c of [path.join(OUT, p, 'index.html'), path.join(OUT, `${p}.html`), path.join(OUT, p || 'index.html')]) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
  }
  return null;
}

for (const u of urls) {
  const f = fileFor(u);
  if (!f) { problems.push(`${u}: in sitemap but no built file`); continue; }
  const h = fs.readFileSync(f, 'utf8');
  if (/<meta name="robots" content="noindex/.test(h)) problems.push(`${u}: in sitemap but noindex`);
  const canon = h.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canon !== u) problems.push(`${u}: canonical is ${canon ?? 'missing'}`);
  const og = h.match(/<meta property="og:url" content="([^"]+)"/)?.[1];
  if (og && og !== canon) problems.push(`${u}: og:url ${og} != canonical`);
  if (!/<meta property="og:image"/.test(h)) problems.push(`${u}: no og:image`);
  if (!/<title>[^<]{5,}<\/title>/.test(h)) problems.push(`${u}: missing <title>`);
}

if (problems.length) {
  console.error(`\nSEO check FAILED (${problems.length}):\n  ` + problems.slice(0, 60).join('\n  '));
  process.exit(1);
}
console.log(`SEO check passed: ${urls.length} sitemap URLs, canonical/og/noindex consistent.`);
