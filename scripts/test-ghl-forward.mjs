// Tests for netlify/functions/submission-created.mjs (every lead -> GHL).
// Run: node scripts/test-ghl-forward.mjs
import assert from 'node:assert/strict';
import { toGhlPayload, handler } from '../netlify/functions/submission-created.mjs';

let n = 0;
const ok = (name, fn) => { fn(); n++; console.log('ok -', name); };

ok('quiz lead maps contact fields, tags and UTMs', () => {
  const p = toGhlPayload({
    form_name: 'lead-quiz', id: 'sub1', created_at: '2026-09-26T12:00:00Z',
    data: { 'form-name': 'lead-quiz', 'bot-field': '', name: 'Maria de la Cruz', phone: '201-555-0100',
      email: 'm@example.com', propertyAddress: '1 Main St, Newark, NJ', town: 'Newark', language: 'es',
      campaign: 'fall', campaignSource: 'facebook', ip: '1.2.3.4', user_agent: 'x', requestOffers: 'yes' },
  });
  assert.equal(p.firstName, 'Maria');
  assert.equal(p.lastName, 'de la Cruz');
  assert.equal(p.email, 'm@example.com');
  assert.equal(p.address, '1 Main St, Newark, NJ');
  assert.equal(p.leadType, 'quiz');
  assert.equal(p.utmSource, 'facebook');
  assert.equal(p.submissionId, 'sub1');
  assert.match(p.tags, /njfg-quiz/);
  assert.match(p.tags, /njfg-spanish/);
  assert.match(p.tags, /njfg-offer-request/);
  assert.equal(p.ip, undefined, 'ip must not be forwarded');
  assert.equal(p.user_agent, undefined);
  assert.equal(p['bot-field'], undefined);
});

ok('chat lead uses the transcript summary as notes', () => {
  const p = toGhlPayload({ form_name: 'ai-chat-lead', data: { name: 'Sam', phone: '555', conversationSummary: 'Sale on the 9th' } });
  assert.equal(p.leadType, 'chat');
  assert.equal(p.notes, 'Sale on the 9th');
  assert.equal(p.lastName, '');
});

ok('explicit leadType (commercial) wins over the form default', () => {
  const p = toGhlPayload({ form_name: 'lead-quiz', data: { name: 'A B', leadType: 'commercial' } });
  assert.equal(p.leadType, 'commercial');
});

ok('long values are capped', () => {
  const p = toGhlPayload({ form_name: 'ai-chat-lead', data: { conversationSummary: 'x'.repeat(9000) } });
  assert.equal(p.notes.length, 5000);
});

ok('empty payload does not throw', () => {
  const p = toGhlPayload(undefined);
  assert.equal(p.formName, '');
  assert.equal(p.firstName, '');
});

// Handler: without the env var it must do nothing and never call out.
delete process.env.GHL_LEADS_WEBHOOK_URL;
let called = false;
globalThis.fetch = async () => { called = true; return { status: 200 }; };
const r1 = await handler({ body: JSON.stringify({ payload: { form_name: 'lead-quiz', data: { name: 'X' } } }) });
assert.equal(r1.statusCode, 200);
assert.equal(called, false, 'must not call GHL when not configured');
n++; console.log('ok - inert until GHL_LEADS_WEBHOOK_URL is set');

// Handler: with the env var it posts once, and a network failure is swallowed.
process.env.GHL_LEADS_WEBHOOK_URL = 'https://example.invalid/hook';
let posted;
globalThis.fetch = async (url, opts) => { posted = { url, body: JSON.parse(opts.body) }; return { status: 200 }; };
await handler({ body: JSON.stringify({ payload: { form_name: 'guide-download', id: 's9', data: { name: 'Lee', email: 'l@x.com' } } }) });
assert.equal(posted.url, 'https://example.invalid/hook');
assert.equal(posted.body.email, 'l@x.com');
assert.equal(posted.body.leadType, 'guide-download');
globalThis.fetch = async () => { throw new Error('network down'); };
const r3 = await handler({ body: JSON.stringify({ payload: { form_name: 'lead-quiz', data: {} } }) });
assert.equal(r3.statusCode, 200);
n += 2; console.log('ok - posts once when configured'); console.log('ok - GHL failure never throws');

console.log(`${n} tests passed`);
