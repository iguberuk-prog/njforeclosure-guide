// Unit tests for lib/scam-rules-es.ts (Spanish strings and Spanish patterns
// for /es/herramientas/verificador-de-estafas/). Run with:
//   node scripts/test-scam-rules-es.mjs
// (Node 22.18+ strips TypeScript types by default; on older Node add
//  --experimental-strip-types.)
import assert from 'node:assert/strict';
import { analyzeMessage, RULES, CHECKLIST, LEGIT_SIGNALS, RATING_LABEL, EXAMPLES } from '../lib/scam-rules.ts';
import {
  RULES_ES,
  CHECKLIST_ES,
  LEGIT_ES,
  RATING_LABEL_ES,
  SEVERITY_LABEL_ES,
  EXAMPLES_ES,
  SPANISH_OPTIONS,
} from '../lib/scam-rules-es.ts';

let passed = 0;
const test = (name, fn) => {
  fn();
  passed++;
  console.log(`ok - ${name}`);
};
const es = (t, answers = []) => analyzeMessage(t, answers, SPANISH_OPTIONS);
const ids = (r) => r.flags.map((f) => f.rule.id);
const has = (r, ...want) => {
  for (const w of want) assert.ok(ids(r).includes(w), `expected flag ${w}, got [${ids(r).join(', ')}]`);
};
const lacks = (r, ...no) => {
  for (const n of no) assert.ok(!ids(r).includes(n), `did not expect flag ${n}, got [${ids(r).join(', ')}]`);
};
// House rules for Spanish copy: never promise to stop a foreclosure or guarantee an outcome.
const PROMISE = [/podemos (detener|parar)/i, /le garantizamos/i, /detendremos/i, /garantizamos/i];

// ---- Every string has a Spanish version ------------------------------------

test('every rule has a Spanish title, why and instead', () => {
  for (const r of RULES) {
    const e = RULES_ES[r.id];
    assert.ok(e, `RULES_ES missing ${r.id}`);
    assert.ok(e.title?.trim().length > 3, `${r.id}.title`);
    assert.ok(e.why?.trim().length > 40, `${r.id}.why`);
    assert.ok(e.instead?.trim().length > 40, `${r.id}.instead`);
    if (r.link) assert.ok(e.link && e.link.href && e.link.label, `${r.id}: English rule has a link, Spanish should too`);
  }
  assert.deepEqual(Object.keys(RULES_ES).sort(), RULES.map((r) => r.id).sort(), 'no extra or stale Spanish rules');
});

test('every checklist item, legit signal, rating and severity has Spanish text', () => {
  for (const c of CHECKLIST) assert.ok(CHECKLIST_ES[c.id], `CHECKLIST_ES missing ${c.id}`);
  for (const l of LEGIT_SIGNALS) assert.ok(LEGIT_ES[l.id], `LEGIT_ES missing ${l.id}`);
  for (const k of Object.keys(RATING_LABEL)) assert.ok(RATING_LABEL_ES[k], `RATING_LABEL_ES missing ${k}`);
  for (const k of ['high', 'medium', 'low']) assert.ok(SEVERITY_LABEL_ES[k]);
  assert.equal(EXAMPLES_ES.length, EXAMPLES.length);
});

test('Spanish legal citations match the English ones exactly', () => {
  const cites = (s) => s.match(/\d+ CFR [\d.]+(?:\([a-z0-9]+\))*|N\.J\.S\.A\. [\dA-Z:.-]+\d/g) ?? [];
  for (const r of RULES) {
    assert.deepEqual(cites(`${RULES_ES[r.id].why} ${RULES_ES[r.id].instead}`), cites(`${r.why} ${r.instead}`), `${r.id}: citations differ`);
  }
});

test('Spanish copy keeps the free-help numbers and never promises an outcome', () => {
  const all = Object.values(RULES_ES).map((r) => `${r.title} ${r.why} ${r.instead}`).join(' ');
  assert.ok(all.includes('800-569-4287'));
  assert.ok(all.includes('1-888-576-5529'));
  for (const re of PROMISE) assert.ok(!re.test(all), `promise-like wording ${re}`);
  for (const c of Object.values(CHECKLIST_ES)) for (const re of PROMISE) assert.ok(!re.test(c));
});

// ---- Spanish patterns -------------------------------------------------------

test('Spanish examples: high / high / none', () => {
  assert.deepEqual(EXAMPLES_ES.map((e) => es(e.text).rating), ['high', 'high', 'none']);
  const flyer = es(EXAMPLES_ES[0].text);
  has(flyer, 'upfront-fee', 'guarantee', 'stop-paying', 'no-contact', 'gov-affiliation', 'gov-fee', 'too-good', 'attorney-front', 'pressure');
  const deed = es(EXAMPLES_ES[1].text);
  has(deed, 'deed-transfer', 'leaseback', 'pressure', 'account-login');
  const letter = es(EXAMPLES_ES[2].text);
  assert.equal(letter.flags.length, 0, `servicer letter flags: ${ids(letter)}`);
  assert.ok(letter.legit.length >= 2, 'recognizes HUD counselor / servicer-letter / free wording');
});

test('Spanish fee, payment-method and account wording', () => {
  has(es('Para reservar su lugar en el programa, envíe $500 en tarjetas de regalo o criptomonedas.'), 'upfront-fee', 'untraceable-payment');
  has(es('Mándenos su usuario y contraseña del banco y el código de verificación que le llegó.'), 'account-login');
  has(es('Confirme su número de Seguro Social por mensaje de texto.'), 'sensitive-info');
  has(es('Le enviamos las instrucciones de transferencia bancaria.'), 'wire-transfer');
  assert.equal(es('Hay un cargo de inscripción de $299 que se paga por adelantado.').rating, 'high');
});

test('Spanish negations and warnings do not flag', () => {
  const r = es(
    'Nunca le pague por adelantado a nadie que ofrezca salvar su casa. Desconfíe de quien le pida firmar la escritura a nombre de su compañía. Nadie le debe decir que deje de pagar su hipoteca. No le dé su contraseña del banco a nadie.'
  );
  lacks(r, 'upfront-fee', 'deed-transfer', 'stop-paying', 'account-login');
  assert.equal(r.rating, 'none');
});

test('common legitimate Spanish phrases do not trigger high flags', () => {
  for (const t of [
    'Gracias por adelantado por su ayuda.',
    'Su cuenta de depósito en garantía (escrow) pagó los impuestos; la subasta sigue programada.',
    'Después de una ejecución hipotecaria, podrá volver a comprar una casa en unos años.',
    'Si no puede pagar, llame a su servicer y pida una solicitud de mitigación de pérdidas.',
    'La consejería de vivienda aprobada por HUD es gratuita.',
  ]) {
    const r = es(t);
    assert.ok(!r.flags.some((f) => f.rule.severity === 'high'), `high flag on legit text: "${t}" -> [${ids(r)}]`);
  }
});

test('English text scores exactly the same with or without the Spanish options', () => {
  for (const e of EXAMPLES) {
    const a = analyzeMessage(e.text);
    const b = analyzeMessage(e.text, [], SPANISH_OPTIONS);
    assert.equal(b.rating, a.rating, e.id);
    assert.deepEqual(ids(b), ids(a), e.id);
  }
});

test('checklist answers work the same on the Spanish page', () => {
  const r = es('', ['q-deed', 'q-govfee']);
  has(r, 'deed-transfer', 'gov-fee');
  assert.equal(r.rating, 'high');
  // The engine reports the English label; the page maps it back to Spanish by id.
  for (const f of r.flags) for (const a of f.answers) assert.ok(CHECKLIST.some((c) => c.label === a && CHECKLIST_ES[c.id]));
});

console.log(`\n${passed} tests passed`);
