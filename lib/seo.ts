/**
 * Search-result length discipline. Google shows roughly 60 characters of a
 * title and 155-160 of a description; anything longer is cut mid-word with
 * an ellipsis, often losing the part that matters. These helpers shorten
 * the way an editor would, never by chopping a word in half:
 *
 * Titles: drop trailing " | ..." segments (brand first), then shorten
 * "New Jersey" to "NJ", then keep the part before a ": " subtitle when
 * that part can stand alone. The on-page H1 keeps the full headline.
 *
 * Descriptions: shorten "New Jersey" to "NJ", then end at the last full
 * sentence that fits, else the last clause boundary (closed with a period),
 * else a word boundary with an ellipsis.
 */
export const TITLE_MAX = 60;
export const DESC_MAX = 160;

export function fitTitle(title: string, max = TITLE_MAX): string {
  let t = title.trim();
  if (t.length <= max) return t;
  const parts = t.split(' | ');
  while (parts.length > 1 && parts.join(' | ').length > max) parts.pop();
  t = parts.join(' | ');
  if (t.length > max) t = t.replace(/New Jersey/g, 'NJ').replace(/Nueva Jersey/g, 'NJ');
  if (t.length > max) {
    for (const sep of [': ', ' — ', ' – ', '. ', '? ']) {
      const i = t.indexOf(sep);
      if (i >= 25 && i <= max) {
        t = t.slice(0, sep === '? ' ? i + 1 : i);
        break;
      }
    }
  }
  return t;
}

export function fitDescription(desc: string, max = DESC_MAX): string {
  let d = desc.trim().replace(/\s+/g, ' ');
  if (d.length <= max) return d;
  d = d.replace(/New Jersey/g, 'NJ');
  if (d.length <= max) return d;
  const window = d.slice(0, max);
  // 1) the last complete sentence that fits
  const lastStop = Math.max(window.lastIndexOf('. '), window.lastIndexOf('? '), window.lastIndexOf('! '));
  if (lastStop >= 90) return window.slice(0, lastStop + 1);
  // 2) the last clause boundary, closed with a period
  const clause = Math.max(window.lastIndexOf(', '), window.lastIndexOf(' — '), window.lastIndexOf('; '), window.lastIndexOf(': '));
  if (clause >= 100) return window.slice(0, clause).replace(/[,;:\s—–-]+$/, '') + '.';
  // 3) a word boundary with an ellipsis
  const cut = d.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:\s—–-]+$/, '') + '…';
}
