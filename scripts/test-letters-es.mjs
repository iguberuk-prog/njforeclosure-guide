// Unit tests for lib/letters-es.ts (Spanish screen text for
// /es/herramientas/constructor-de-cartas/). The letters themselves stay in
// English and are tested by scripts/test-letters.mjs. Run with:
//   node scripts/test-letters-es.mjs
import assert from 'node:assert/strict';
import {
  buildLetter,
  timingNoteCodes,
  timingNotes,
  timingNoteText,
  EMPTY_INPUT,
  LETTERS,
  HARDSHIP_REASONS,
  LOSS_MIT_REQUESTS,
  HARDSHIP_HELPERS,
  COMMITMENT_STARTERS,
  RFI_ITEMS,
  ERROR_TYPES,
  APPEAL_GROUNDS,
  REMINDERS,
  SENDING_CHECKLIST,
} from '../lib/letters.ts';
import {
  LETTERS_ES,
  HARDSHIP_REASONS_ES,
  LOSS_MIT_REQUESTS_ES,
  HARDSHIP_HELPERS_ES,
  COMMITMENT_STARTERS_ES,
  RFI_ITEMS_ES,
  ERROR_TYPES_ES,
  APPEAL_GROUNDS_ES,
  REMINDERS_ES,
  SENDING_CHECKLIST_ES,
  BLANKS_ES,
  timingNoteTextEs,
} from '../lib/letters-es.ts';

let passed = 0;
const test = (name, fn) => {
  fn();
  passed++;
  console.log(`ok - ${name}`);
};

// House rules for the Spanish copy.
const FORBIDDEN_ES = [/detener/i, /deten(go|emos|dremos|drá)/i, /garantiz/i, /asegura(mos|remos) (que|el resultado)/i, /\bBRC\b/, /Corcoran/i];
const allText = (v) => (typeof v === 'string' ? [v] : Array.isArray(v) ? v.flatMap(allText) : v && typeof v === 'object' ? Object.values(v).flatMap(allText) : []);

test('every letter and option id has a Spanish label', () => {
  for (const l of LETTERS) {
    const e = LETTERS_ES[l.kind];
    assert.ok(e && e.name && e.blurb, l.kind);
    assert.ok(e.summary.length >= 3, `${l.kind}: summary`);
  }
  const pairs = [
    [HARDSHIP_REASONS, HARDSHIP_REASONS_ES, 'HARDSHIP_REASONS'],
    [LOSS_MIT_REQUESTS, LOSS_MIT_REQUESTS_ES, 'LOSS_MIT_REQUESTS'],
    [HARDSHIP_HELPERS, HARDSHIP_HELPERS_ES, 'HARDSHIP_HELPERS'],
    [RFI_ITEMS, RFI_ITEMS_ES, 'RFI_ITEMS'],
    [ERROR_TYPES, ERROR_TYPES_ES, 'ERROR_TYPES'],
    [APPEAL_GROUNDS, APPEAL_GROUNDS_ES, 'APPEAL_GROUNDS'],
  ];
  for (const [en, es, name] of pairs) {
    for (const o of en) assert.ok(es[o.id], `${name}: missing Spanish for ${o.id}`);
    assert.deepEqual(Object.keys(es).sort(), en.map((o) => o.id).sort(), `${name}: no extra ids`);
  }
  assert.equal(COMMITMENT_STARTERS_ES.length, COMMITMENT_STARTERS.length);
  assert.equal(SENDING_CHECKLIST_ES.length, SENDING_CHECKLIST.length);
  for (const l of LETTERS) assert.equal(REMINDERS_ES[l.kind].length, REMINDERS[l.kind].length, `${l.kind}: reminders`);
});

test('every [bracketed blank] the English letter can show has a Spanish gloss', () => {
  const seen = new Set();
  const variants = [
    {},
    { hardshipReason: 'other' },
    { rfiMode: 'noe' },
    { rfiMode: 'both' },
    { quoteType: 'reinstatement' },
    { quoteType: 'payoff' },
  ];
  for (const { kind } of LETTERS) for (const v of variants) for (const m of buildLetter(kind, { ...EMPTY_INPUT, ...v }).missing) seen.add(m);
  assert.ok(seen.size >= 25, `found ${seen.size} blanks`);
  for (const m of seen) assert.ok(BLANKS_ES[m], `BLANKS_ES missing "${m}"`);
});

test('Spanish summaries and reminders keep the English legal citations exactly', () => {
  const cites = (s) => new Set(s.match(/\d+ (?:CFR|U\.S\.C\.) [\d.]+(?:\([a-z0-9]+\))*|N\.J\.S\.A\. [\dA-Z:.-]+\d|comment(?:ario)? \d+\([a-z]\)(?:\(\d\))?-\d/g) ?? []);
  const es = new Set([...allText(LETTERS_ES), ...allText(REMINDERS_ES)].flatMap((s) => [...cites(s)]));
  for (const c of ['12 CFR 1026.36(c)(3)', '12 CFR 1024.35', '12 CFR 1024.36', '12 CFR 1024.41(g)', '12 CFR 1024.41(h)', '12 CFR 1024.35(i)', '12 U.S.C. 2605(e)', 'N.J.S.A. 2A:17-36']) {
    assert.ok(es.has(c), `Spanish copy should cite ${c}`);
  }
  // Every citation in the English reminders appears in the Spanish reminders.
  for (const l of LETTERS) {
    const en = new Set(REMINDERS[l.kind].flatMap((s) => [...cites(s)]));
    const sp = new Set(REMINDERS_ES[l.kind].flatMap((s) => [...cites(s)]));
    for (const c of en) assert.ok(sp.has(c), `${l.kind}: reminder citation ${c}`);
  }
});

test('Spanish copy never promises an outcome and keeps free help first', () => {
  const text = [
    ...allText(LETTERS_ES),
    ...allText(REMINDERS_ES),
    ...SENDING_CHECKLIST_ES,
    ...COMMITMENT_STARTERS_ES,
    ...allText(BLANKS_ES),
    ...allText(HARDSHIP_HELPERS_ES),
  ].join('\n');
  for (const re of FORBIDDEN_ES) assert.ok(!re.test(text), `forbidden ${re}`);
  const help = SENDING_CHECKLIST_ES.join(' ');
  assert.ok(help.includes('800-569-4287') && help.includes('1-888-576-5529'));
  assert.ok(/español/.test(help), 'mentions help in Spanish');
});

test('timing notes: same codes as English, Spanish wording for each', () => {
  const base = { ...EMPTY_INPUT, letterDate: '2026-09-24', saleDate: '2026-12-15', completeAppDate: '2026-09-01', denialDate: '2026-09-20' };
  const cases = [
    ['postpone', base, 'postpone-protected', /105 días antes de la subasta/],
    ['postpone', { ...base, completeAppDate: '2026-11-20' }, 'postpone-unprotected', /25 días antes de la subasta/],
    ['postpone', { ...base, completeAppDate: '2026-12-20' }, 'postpone-unprotected', /posterior a la subasta/],
    ['appeal', base, 'appeal-window-open', /4 días después/],
    ['appeal', { ...base, denialDate: '2026-09-23' }, 'appeal-window-open', /1 día después/],
    ['appeal', { ...base, denialDate: '2026-09-01' }, 'appeal-window-passed', /23 días después/],
  ];
  for (const [kind, input, code, re] of cases) {
    const codes = timingNoteCodes(kind, input);
    assert.equal(codes[0].code, code);
    assert.match(timingNoteTextEs(codes[0]), re);
    // English rendering is unchanged by the refactor.
    assert.deepEqual(timingNotes(kind, input), codes.map(timingNoteText));
  }
  const under90 = timingNoteCodes('appeal', { ...base, saleDate: '2026-10-15' });
  assert.equal(under90[1].code, 'appeal-under-90');
  assert.match(timingNoteTextEs(under90[1]), /44 días antes de la subasta/);
  for (const n of [...timingNoteCodes('postpone', base), ...under90]) {
    const t = timingNoteTextEs(n);
    assert.ok(t.includes('12 CFR 1024.41(g)') || t.includes('14 días') || t.includes('90 días'));
    for (const re of FORBIDDEN_ES) assert.ok(!re.test(t));
  }
});

console.log(`\n${passed} tests passed`);
