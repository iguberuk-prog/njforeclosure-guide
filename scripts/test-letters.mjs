// Unit tests for lib/letters.ts. Run with:
//   node scripts/test-letters.mjs
// (Node 22.18+ strips TypeScript types by default; on older Node use
//   node --experimental-strip-types scripts/test-letters.mjs)
import assert from 'node:assert/strict';
import {
  buildLetter,
  timingNotes,
  formatLongDate,
  daysBetween,
  EMPTY_INPUT,
  LETTERS,
  HARDSHIP_REASONS,
  LOSS_MIT_REQUESTS,
  HARDSHIP_HELPERS,
  RFI_ITEMS,
  ERROR_TYPES,
  APPEAL_GROUNDS,
  REMINDERS,
  SENDING_CHECKLIST,
} from '../lib/letters.ts';

let passed = 0;
const test = (name, fn) => {
  fn();
  passed++;
  console.log(`ok - ${name}`);
};

const BRACKET = /\[[^\]]*\]/;
// Hard rules: no outcome promises, no brokerage mentions.
const FORBIDDEN = [/stop (the |a |my |your )?foreclosure/i, /guarantee/i, /\bwill (stop|prevent|cancel) the sale\b/i, /\bBRC\b/, /brokerage/i];

const FULL = {
  ...EMPTY_INPUT,
  letterDate: '2026-09-24',
  borrower1: 'Maria Lopez',
  borrower2: '',
  mailingAddress: '',
  propertyAddress: '12 Elm Street, Trenton, NJ 08608',
  phone: '609-555-0142',
  email: 'maria@example.com',
  loanNumber: '0012345678',
  servicerName: 'Example Mortgage Servicing',
  servicerAddress: 'PO Box 1000\nSpringfield, IL 62701',
  docketNumber: 'F-012345-25',
  saleDate: '2026-12-15',
  completeAppDate: '2026-09-01',
  hardshipReason: 'income',
  hardshipOther: 'My business closed',
  hardshipStart: 'March 2026',
  hardshipChanged: 'My hours were cut from 40 to 20 a week',
  incomeNow: 'I now earn $2,400 a month and my daughter contributes $600',
  hardshipDuration: 'temporary',
  lossMitRequest: 'modification',
  commitment: 'I want to keep my home and can afford a payment of about $1,500',
  hardshipHelpers: HARDSHIP_HELPERS.map((h) => h.id),
  quoteType: 'both',
  goodThrough: '2026-10-31',
  rfiMode: 'both',
  rfiItems: RFI_ITEMS.map((r) => r.id),
  rfiOther: 'A copy of the note and mortgage',
  errorType: 'payment',
  errorDescription: 'My payment of $1,812.44 sent on August 1, 2026 was not credited to my account',
  errorCorrection: 'Credit the payment as of August 1, 2026 and reverse the late fee',
  attorneyName: 'Smith & Jones, LLC',
  attorneyAddress: '100 Main Street\nMount Laurel, NJ 08054',
  denialDate: '2026-09-20',
  denialReason: 'Excessive forbearance',
  appealGrounds: APPEAL_GROUNDS.map((g) => g.id),
  appealExplanation: 'My monthly income is $4,200, not $2,400; my pay stubs are enclosed',
  requestNpv: true,
  enclosures: true,
};

const check = (label, kind, input) => {
  const { text, missing } = buildLetter(kind, input);
  assert.ok(!BRACKET.test(text), `${label}: unfilled placeholder remains: ${text.match(BRACKET)?.[0]}`);
  assert.deepEqual(missing, [], `${label}: missing should be empty`);
  for (const re of FORBIDDEN) assert.ok(!re.test(text), `${label}: forbidden phrase ${re}`);
  assert.ok(!/undefined|null|NaN|\[object/.test(text), `${label}: leaked a JS value`);
  assert.ok(text.includes('Maria Lopez'), `${label}: borrower name`);
  assert.ok(text.includes('0012345678'), `${label}: loan number`);
  assert.ok(text.includes('12 Elm Street, Trenton, NJ 08608'), `${label}: property`);
  assert.ok(text.includes('Example Mortgage Servicing'), `${label}: servicer`);
  assert.ok(text.includes('September 24, 2026'), `${label}: date`);
  assert.ok(text.includes('______________________________'), `${label}: signature line`);
  return text;
};

test('LETTERS lists all five kinds', () => {
  assert.deepEqual(LETTERS.map((l) => l.kind), ['hardship', 'quote', 'rfi', 'postpone', 'appeal']);
  for (const l of LETTERS) {
    assert.ok(REMINDERS[l.kind].length > 0);
  }
  assert.ok(SENDING_CHECKLIST.some((s) => s.includes('800-569-4287')));
  assert.ok(SENDING_CHECKLIST.some((s) => s.includes('1-888-576-5529')));
});

test('every template, fully filled, has no bracketed placeholders (single borrower)', () => {
  for (const { kind } of LETTERS) check(`single/${kind}`, kind, FULL);
});

test('every template, fully filled, has no bracketed placeholders (co-borrowers, "we" voice)', () => {
  const both = { ...FULL, borrower2: 'Luis Lopez' };
  for (const { kind } of LETTERS) {
    const t = check(`joint/${kind}`, kind, both);
    assert.ok(t.includes('Maria Lopez and Luis Lopez'), 'joint names in header');
    assert.equal(t.split('______________________________').length - 1, 2, 'two signature lines');
    // Generated sentences switch to "we"; nothing generated should say " I " outside user text.
    const generated = t.replace(FULL.incomeNow, '').replace(FULL.hardshipChanged, '').replace(FULL.commitment, '').replace(FULL.appealExplanation, '').replace(FULL.errorDescription, '').replace(FULL.errorCorrection, '');
    assert.ok(!/\bI (am|have|ask|request|believe|appeal|expect|respectfully|was)\b/.test(generated), `${kind}: stray singular voice`);
  }
});

test('hardship: every reason, request and duration renders cleanly', () => {
  for (const r of HARDSHIP_REASONS) {
    for (const q of LOSS_MIT_REQUESTS) {
      for (const d of ['', 'temporary', 'long']) {
        check(`hardship/${r.id}/${q.id}/${d}`, 'hardship', { ...FULL, hardshipReason: r.id, lossMitRequest: q.id, hardshipDuration: d, hardshipHelpers: [], enclosures: false });
      }
    }
  }
  const t = buildLetter('hardship', FULL).text;
  assert.ok(t.includes('review me for all loss mitigation options'));
  assert.ok(t.includes('Enclosures'));
  assert.ok(!buildLetter('hardship', { ...FULL, enclosures: false }).text.includes('Enclosures'), 'no enclosure line unless the user says so');
});

test('hardship: "other" reason requires its description', () => {
  const r = buildLetter('hardship', { ...FULL, hardshipReason: 'other', hardshipOther: '' });
  assert.ok(r.missing.includes('Describe your hardship'));
  const ok = buildLetter('hardship', { ...FULL, hardshipReason: 'other' });
  assert.ok(ok.text.includes('My business closed.'));
});

test('quote: all three request types', () => {
  for (const q of ['both', 'reinstatement', 'payoff']) {
    const t = check(`quote/${q}`, 'quote', { ...FULL, quoteType: q });
    assert.equal(t.includes('Reinstatement quote:'), q !== 'payoff');
    assert.equal(t.includes('Payoff statement:'), q !== 'reinstatement');
    // The payoff rule is cited only when a payoff is requested, with its "in most cases" qualifier.
    assert.equal(t.includes('12 CFR 1026.36(c)(3)'), q !== 'reinstatement');
    if (q !== 'reinstatement') assert.ok(t.includes('in most cases no more than seven business days'));
    assert.ok(t.includes('October 31, 2026'));
    // No invented reinstatement deadline.
    assert.ok(!/reinstatement[^.]*within \w+ (business )?days/i.test(t));
  }
  const noSale = buildLetter('quote', { ...FULL, saleDate: '' }).text;
  assert.ok(!noSale.includes('sheriff sale'), 'optional sale date omitted cleanly');
  assert.ok(!BRACKET.test(noSale));
});

test('rfi: every mode and error type', () => {
  for (const mode of ['rfi', 'noe', 'both']) {
    for (const e of ERROR_TYPES) {
      const t = check(`rfi/${mode}/${e.id}`, 'rfi', { ...FULL, rfiMode: mode, errorType: e.id });
      assert.equal(t.includes('12 CFR 1024.36'), mode !== 'noe');
      assert.equal(t.includes('Notice of error (12 CFR 1024.35)'), mode !== 'rfi');
      assert.ok(t.includes('within five business days'));
    }
  }
  const payoffErr = buildLetter('rfi', { ...FULL, rfiMode: 'noe', errorType: 'payoff' }).text;
  assert.ok(payoffErr.includes('within seven business days'));
  assert.ok(!payoffErr.includes('extended'), 'payoff errors cannot be extended');
  const fcErr = buildLetter('rfi', { ...FULL, rfiMode: 'noe', errorType: 'foreclosure' }).text;
  assert.ok(fcErr.includes('before the foreclosure sale or within 30 business days, whichever is earlier'));
  const owner = buildLetter('rfi', { ...FULL, rfiMode: 'rfi', rfiItems: ['owner'], rfiOther: '' }).text;
  assert.ok(owner.includes('within 10 business days'));
  assert.ok(!owner.includes('extended'), 'owner requests cannot be extended');
  const noItems = buildLetter('rfi', { ...FULL, rfiMode: 'rfi', rfiItems: [], rfiOther: '' });
  assert.ok(noItems.missing.includes('List the information you are requesting'));
});

test('postpone: conditional 37-day wording, cc to attorney', () => {
  const t = check('postpone/early', 'postpone', FULL);
  assert.ok(t.includes('12 CFR 1024.41(g)'));
  assert.ok(t.includes('If my complete application was received more than 37 days before the sale'));
  assert.ok(t.includes('cc: Smith & Jones, LLC'));
  assert.ok(t.includes('Mount Laurel, NJ 08054'));
  assert.ok(t.includes('F-012345-25'));
  const late = check('postpone/late', 'postpone', { ...FULL, completeAppDate: '2026-11-20' });
  assert.ok(late.includes('37 or fewer days'));
  assert.ok(!late.includes('may not move for a foreclosure judgment'), 'does not claim the protection when dates show it does not apply');
  const notes = timingNotes('postpone', FULL);
  assert.equal(notes.length, 1);
  assert.match(notes[0], /105 days before the sale/);
  assert.match(timingNotes('postpone', { ...FULL, completeAppDate: '2026-11-20' })[0], /25 days before/);
  // Required fields show as brackets when blank.
  const blank = buildLetter('postpone', { ...EMPTY_INPUT });
  for (const p of ['Sheriff sale date', 'Date the servicer received your complete application', 'Attorney’s address']) assert.ok(blank.missing.includes(p), p);
});

test('appeal: grounds, NPV inputs request, timing notes', () => {
  const t = check('appeal/all', 'appeal', FULL);
  assert.ok(t.includes('12 CFR 1024.41(h)'));
  assert.ok(t.includes('comment 41(d)-2'));
  assert.ok(t.includes('comment 41(d)-1'));
  assert.ok(t.includes('different personnel'));
  assert.ok(t.includes('within 30 days of the appeal'));
  const plain = check('appeal/minimal', 'appeal', { ...FULL, appealGrounds: [], requestNpv: false, enclosures: false });
  assert.ok(!plain.includes('net present value'));
  assert.ok(!plain.includes('Enclosures'));
  assert.deepEqual(timingNotes('appeal', FULL), [
    'Your letter date is 4 days after the denial notice date. The federal window is 14 days after the servicer provides its decision, so send it right away by a trackable method.',
  ]);
  const late = timingNotes('appeal', { ...FULL, denialDate: '2026-09-01', saleDate: '2026-10-15' });
  assert.equal(late.length, 2);
  assert.match(late[0], /23 days after/);
  assert.match(late[1], /44 days before/);
});

test('empty input: every template shows bracketed prompts and lists them', () => {
  for (const { kind } of LETTERS) {
    const { text, missing } = buildLetter(kind, { ...EMPTY_INPUT });
    assert.ok(BRACKET.test(text), `${kind}: should show brackets`);
    assert.ok(missing.length >= 6, `${kind}: missing list`);
    for (const m of missing) assert.ok(text.includes(`[${m}]`), `${kind}: ${m} shown`);
    assert.equal(new Set(missing).size, missing.length, 'no duplicate prompts');
    for (const re of FORBIDDEN) assert.ok(!re.test(text), `${kind}: forbidden phrase ${re}`);
  }
});

test('whitespace-only answers count as blank', () => {
  const r = buildLetter('hardship', { ...FULL, borrower1: '   ', loanNumber: '\n' });
  assert.ok(r.missing.includes('Your full name'));
  assert.ok(r.missing.includes('Loan number'));
});

test('mailing address overrides property address in the header', () => {
  const t = buildLetter('hardship', { ...FULL, mailingAddress: 'PO Box 55\nEwing, NJ 08618' }).text;
  assert.ok(t.startsWith('September 24, 2026\n\nMaria Lopez\nPO Box 55\nEwing, NJ 08618'));
});

test('date helpers', () => {
  assert.equal(formatLongDate('2026-09-24'), 'September 24, 2026');
  assert.equal(formatLongDate('2026-02-30'), '');
  assert.equal(formatLongDate(''), '');
  assert.equal(daysBetween('2026-09-01', '2026-12-15'), 105);
  assert.equal(daysBetween('2026-03-07', '2026-03-09'), 2); // across a DST change
  assert.equal(daysBetween('bad', '2026-01-01'), null);
});

console.log(`\n${passed} tests passed`);
