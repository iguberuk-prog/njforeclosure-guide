// Unit tests for lib/scam-rules.ts. Run with:
//   node --experimental-strip-types scripts/test-scam-rules.mjs
import assert from 'node:assert/strict';
import { analyzeMessage, segments, EXAMPLES, CHECKLIST, RULES, normalize } from '../lib/scam-rules.ts';

let passed = 0;
const test = (name, fn) => {
  fn();
  passed++;
  console.log(`ok - ${name}`);
};
const ids = (r) => r.flags.map((f) => f.rule.id);
const has = (r, ...want) => {
  for (const w of want) assert.ok(ids(r).includes(w), `expected flag ${w}, got [${ids(r).join(', ')}]`);
};
const lacks = (r, ...no) => {
  for (const n of no) assert.ok(!ids(r).includes(n), `did not expect flag ${n}, got [${ids(r).join(', ')}]`);
};

// ---- Clearly scammy ------------------------------------------------------

test('classic rescue flyer: fee + guarantee + stop paying + fake program -> high', () => {
  const r = analyzeMessage(
    'FINAL NOTICE — Federal Homeowner Relief Program. You have been pre-approved! We guarantee to stop your foreclosure. Pay a one-time $1,495 processing fee to get started. Stop paying your lender and send your payments to us instead. Call today, offer expires in 24 hours.'
  );
  assert.equal(r.rating, 'high');
  has(r, 'upfront-fee', 'guarantee', 'stop-paying', 'gov-affiliation', 'gov-fee', 'pressure', 'too-good');
});

test('deed transfer and lease-back -> high', () => {
  const r = analyzeMessage(
    "We'll buy your home and you can rent it back. Just sign the deed over to us temporarily until your credit is fixed, then buy it back in two years."
  );
  assert.equal(r.rating, 'high');
  has(r, 'deed-transfer', 'leaseback');
});

test('text asking for banking login and SSN -> high', () => {
  const r = analyzeMessage('Mortgage Relief Dept: your hardship file needs verification. Reply with your online banking username and password and your SSN to avoid cancellation.');
  assert.equal(r.rating, 'high');
  has(r, 'account-login', 'sensitive-info');
});

test('gift cards / crypto -> high', () => {
  const r = analyzeMessage('To hold your spot in the modification program, send $500 in Google Play gift cards or Bitcoin by Friday.');
  assert.equal(r.rating, 'high');
  has(r, 'untraceable-payment', 'upfront-fee');
});

test('"don\'t talk to your lender" (curly apostrophe) -> high', () => {
  const r = analyzeMessage('Don’t talk to your lender or your lawyer. Let us do all the talking.');
  assert.equal(r.rating, 'high');
  has(r, 'no-contact');
});

test('government program + fee in text creates gov-fee', () => {
  const r = analyzeMessage('This is the Department of Homeowner Assistance, a government-sponsored program. There is a $299 enrollment fee.');
  has(r, 'gov-affiliation', 'upfront-fee', 'gov-fee');
  assert.equal(r.rating, 'high');
});

test('sovereign-citizen style paperwork -> high', () => {
  const r = analyzeMessage('Your mortgage was paid by the Treasury when you signed. Our A4V accepted for value process and UCC-1 filing will discharge the debt.');
  has(r, 'sovereign-scheme');
  assert.equal(r.rating, 'high');
});

test('forensic audit + mass joinder + retainer accumulate to high', () => {
  const r = analyzeMessage('Our forensic loan audit finds violations in most loans. Join our mass joinder lawsuit against the banks. A retainer secures your place.');
  lacks(r, 'upfront-fee');
  has(r, 'forensic-audit', 'mass-joinder', 'attorney-front');
  assert.equal(r.rating, 'high');
});

test('surplus finder asking a percentage -> warning with link to calculator', () => {
  const r = analyzeMessage('Our records show surplus funds from the sheriff sale of your property. Sign our assignment agreement and we recover it for a 40% fee.');
  has(r, 'surplus-recovery');
  assert.notEqual(r.rating, 'none');
  assert.equal(r.flags.find((f) => f.rule.id === 'surplus-recovery').rule.link.href, '/tools/surplus-funds');
});

// ---- Clearly legitimate ------------------------------------------------------

test('HUD counselor referral is not high risk (and has no flags)', () => {
  const r = analyzeMessage(
    'Thank you for contacting our agency. We are a HUD-approved housing counseling agency and foreclosure counseling is free of charge. Your counselor will help you prepare a loss mitigation application for your servicer and can go with you to court foreclosure mediation. Please bring your last two pay stubs and your most recent mortgage statement. Beware of anyone who asks for an upfront fee, and do not stop talking to your lender. No one can guarantee to stop a foreclosure. To find other agencies call 800-569-4287.'
  );
  assert.notEqual(r.rating, 'high');
  assert.equal(r.rating, 'none', `flags: ${ids(r).join(', ')}`);
  assert.ok(r.legit.some((l) => l.id === 'hud-counselor'));
});

test('court mediation notice is not high risk (and has no flags)', () => {
  const r = analyzeMessage(
    'SUPERIOR COURT OF NEW JERSEY, CHANCERY DIVISION. NOTICE OF FORECLOSURE MEDIATION. If you live in the home, you may be eligible for the Foreclosure Mediation Program. There is no fee to request mediation. You must also file an answer within 35 days after service. For more information visit njcourts.gov or call Legal Services of New Jersey at 1-888-576-5529. Do not ignore this notice.'
  );
  assert.notEqual(r.rating, 'high');
  assert.equal(r.rating, 'none', `flags: ${ids(r).join(', ')}`);
  assert.ok(r.legit.some((l) => l.id === 'court-mediation'));
  assert.ok(r.legit.some((l) => l.id === 'lsnj'));
});

test('servicer Notice of Intention to Foreclose is not flagged', () => {
  const r = analyzeMessage(EXAMPLES.find((e) => e.id === 'servicer-letter').text);
  assert.equal(r.rating, 'none', `flags: ${ids(r).join(', ')}`);
  assert.ok(r.legit.some((l) => l.id === 'servicer-letter'));
});

test('servicing-transfer notice ("send payments to us") is not flagged as stop-paying', () => {
  const r = analyzeMessage(
    'Notice of servicing transfer. Loan No. 0012345678. The servicing of your mortgage loan is being transferred to us effective November 1. Beginning November 1, send your payments to us at the address below. Your prior servicer will stop accepting payments on October 31.'
  );
  lacks(r, 'stop-paying');
  assert.notEqual(r.rating, 'high');
});

test('deed-in-lieu described by a servicer is not a deed-transfer flag', () => {
  const r = analyzeMessage('Loan Number: XXXX1234. Options may include a short sale or a deed-in-lieu of foreclosure, where you transfer ownership of the property to the lender in exchange for a release.');
  lacks(r, 'deed-transfer');
  assert.equal(r.rating, 'none', `flags: ${ids(r).join(', ')}`);
});

test('reinstatement letter with wire instructions is at most a warning', () => {
  const r = analyzeMessage('Reinstatement quote for loan number XXXXXX9981. Total reinstatement amount: $9,402.11 good through 12/15/2026. Funds may be sent by wire transfer. Call the number on your monthly statement to confirm wiring instructions before sending.');
  assert.notEqual(r.rating, 'high');
  lacks(r, 'upfront-fee', 'stop-paying');
});

// ---- Ambiguous ---------------------------------------------------------------

test('plain cash-buyer postcard has no known red flags', () => {
  const r = analyzeMessage('We buy houses for cash in any condition. Close in as little as 14 days. Call for a no-obligation offer.');
  assert.equal(r.rating, 'none');
  assert.equal(r.flags.length, 0);
});

test('"act now" loan-mod ad is a warning, not high', () => {
  const r = analyzeMessage('Behind on your mortgage? Act now! Our loan modification specialists are standing by.');
  has(r, 'pressure');
  assert.equal(r.rating, 'warning');
});

test('NJ attorney with trust-account retainer is a warning, not high', () => {
  const r = analyzeMessage('Our law firm is licensed in New Jersey. Any retainer is deposited in our attorney trust account, and we will review your foreclosure complaint and defenses.');
  has(r, 'attorney-front');
  assert.equal(r.rating, 'warning');
});

test('negated warnings are not flagged', () => {
  const r = analyzeMessage('Nobody can guarantee a loan modification. Never pay an upfront fee, never sign over your deed, and never share your online banking password.');
  assert.equal(r.flags.length, 0, `flags: ${ids(r).join(', ')}`);
});

test('HUD name does not cancel a fee request', () => {
  const r = analyzeMessage('We are HUD-approved. Pay a $999 upfront fee and we start today.');
  has(r, 'upfront-fee');
  assert.equal(r.rating, 'high');
  assert.ok(!r.legit.some((l) => l.id === 'hud-counselor'), 'HUD signal must not count when a fee is requested');
});

// ---- Checklist, highlighting, examples ---------------------------------------

test('checklist alone can produce high risk', () => {
  const r = analyzeMessage('', ['q-deed']);
  assert.equal(r.rating, 'high');
  has(r, 'deed-transfer');
  assert.deepEqual(r.flags[0].answers, ['They asked me to sign over my deed']);
});

test('checklist pressure only -> warning; gov-fee box -> high', () => {
  assert.equal(analyzeMessage('', ['q-pressure']).rating, 'warning');
  assert.equal(analyzeMessage('', ['q-govfee']).rating, 'high');
  assert.equal(analyzeMessage('', []).rating, 'none');
});

test('every checklist item points at a real rule', () => {
  for (const c of CHECKLIST) assert.ok(RULES.some((r) => r.id === c.ruleId), c.id);
  assert.equal(new Set(RULES.map((r) => r.id)).size, RULES.length);
  for (const r of RULES) {
    assert.ok(r.why.length > 40 && r.instead.length > 40, `${r.id} needs explanation text`);
    assert.ok(['high', 'medium', 'low'].includes(r.severity));
  }
});

test('highlight segments rebuild the original text and mark the phrase', () => {
  const text = 'Hello. Please sign the deed over to us today.';
  const r = analyzeMessage(text);
  const segs = segments(text, r.spans);
  assert.equal(segs.map((s) => s.text).join(''), text);
  const marked = segs.filter((s) => s.ruleId).map((s) => s.text);
  assert.ok(marked.some((m) => /sign the deed over/i.test(m)), marked.join(' | '));
  assert.equal(normalize('don’t').length, 'don’t'.length);
});

test('the three examples give high / high / none', () => {
  assert.deepEqual(
    EXAMPLES.map((e) => analyzeMessage(e.text).rating),
    ['high', 'high', 'none']
  );
});

console.log(`\n${passed} tests passed`);
