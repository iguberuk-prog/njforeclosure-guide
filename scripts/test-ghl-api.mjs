// Tests for netlify/functions/lib/ghl-api.mjs (direct GHL contact creation).
// Run: node scripts/test-ghl-api.mjs
import assert from 'node:assert/strict';
import { pushLeadToGhl, contactBody, noteBody, _resetCache, BASE_TAG } from '../netlify/functions/lib/ghl-api.mjs';
import { toGhlPayload } from '../netlify/functions/submission-created.mjs';

let n = 0;
const ok = async (name, fn) => { await fn(); n++; console.log('ok -', name); };

const lead = toGhlPayload({
  form_name: 'lead-quiz', id: 's1', created_at: '2026-09-29T12:00:00Z',
  data: { name: 'Maria de la Cruz', email: 'm@example.com', phone: '201-555-0100', propertyAddress: '1 Main St', town: 'Newark', language: 'es', notes: 'Sale on Oct 7', leadScore: 'HOT', ip: '1.2.3.4' },
});

function mockFetch({ pipelines, failOn } = {}) {
  const calls = [];
  const f = async (url, opts) => {
    const path = url.replace('https://services.leadconnectorhq.com', '');
    calls.push({ method: opts.method, path, body: opts.body ? JSON.parse(opts.body) : null, headers: opts.headers });
    const json = (o, status = 200) => ({ ok: status < 400, status, json: async () => o });
    if (failOn && path.startsWith(failOn)) return json({ message: 'boom' }, 422);
    if (path === '/contacts/upsert') return json({ contact: { id: 'c1' }, new: true });
    if (path.startsWith('/opportunities/pipelines')) return json({ pipelines: pipelines ?? [
      { id: 'p-urbni', name: 'Scraped Lis Pendens', stages: [{ id: 's-x', name: 'Potential Leads', position: 0 }] },
      { id: 'p1', name: 'NJFG Website Leads', stages: [{ id: 's2', name: 'Contacted', position: 1 }, { id: 's1', name: 'New lead', position: 0 }] },
    ] });
    if (path === '/opportunities/upsert') return json({ opportunity: { id: 'o1' } });
    return json({});
  };
  f.calls = calls;
  return f;
}

await ok('contact body: tags include njfg-website + form tags, NJ, source; no ip', () => {
  const b = contactBody(lead, 'LOC');
  assert.equal(b.locationId, 'LOC');
  assert.equal(b.firstName, 'Maria');
  assert.equal(b.city, 'Newark');
  assert.equal(b.state, 'NJ');
  assert.ok(b.tags.includes(BASE_TAG));
  assert.ok(b.tags.includes('njfg-quiz'));
  assert.ok(b.tags.includes('njfg-spanish'));
  assert.equal(b.ip, undefined);
});

await ok('note includes the homeowner notes and extra fields but not email/phone', () => {
  const t = noteBody(lead);
  assert.match(t, /Sale on Oct 7/);
  assert.match(t, /leadScore: HOT/);
  assert.doesNotMatch(t, /m@example\.com/);
});

await ok('full push: upsert, tags, note, opportunity in NJFG pipeline first stage', async () => {
  _resetCache();
  const f = mockFetch();
  const r = await pushLeadToGhl(lead, { token: 'T', locationId: 'LOC', fetchImpl: f });
  assert.equal(r.contactId, 'c1');
  assert.equal(r.tagged, true);
  assert.equal(r.noted, true);
  assert.equal(r.opportunity, 'o1');
  assert.deepEqual(r.errors, []);
  const opp = f.calls.find((c) => c.path === '/opportunities/upsert');
  assert.equal(opp.body.pipelineId, 'p1', 'must never use the Urbni pipeline');
  assert.equal(opp.body.pipelineStageId, 's1');
  assert.equal(f.calls[0].headers.Authorization, 'Bearer T');
  assert.equal(f.calls[0].headers.Version, '2021-07-28');
});

await ok('missing pipeline: contact still created, error logged, no opportunity', async () => {
  _resetCache();
  const f = mockFetch({ pipelines: [{ id: 'p-urbni', name: 'Scraped Lis Pendens', stages: [{ id: 'x', name: 'A' }] }] });
  const r = await pushLeadToGhl(lead, { token: 'T', locationId: 'LOC', fetchImpl: f });
  assert.equal(r.contactId, 'c1');
  assert.equal(r.opportunity, null);
  assert.match(r.errors.join(' '), /not found/);
  assert.ok(!f.calls.some((c) => c.path === '/opportunities/upsert'));
});

await ok('upsert failure never throws and reports the error', async () => {
  _resetCache();
  const f = mockFetch({ failOn: '/contacts/upsert' });
  const r = await pushLeadToGhl(lead, { token: 'T', locationId: 'LOC', fetchImpl: f });
  assert.equal(r.contactId, null);
  assert.match(r.errors[0], /422/);
});

await ok('no token or no email/phone: skipped, no calls', async () => {
  const f = mockFetch();
  assert.equal((await pushLeadToGhl(lead, { token: '', fetchImpl: f })).skipped, 'no token');
  const bare = toGhlPayload({ form_name: 'client-review', data: { name: 'X' } });
  assert.equal((await pushLeadToGhl(bare, { token: 'T', fetchImpl: f })).skipped, 'no email, phone or contact id');
  const badCid = toGhlPayload({ form_name: 'lead-quiz', data: { ghlContactId: 'not a valid id!' } });
  assert.equal((await pushLeadToGhl(badCid, { token: 'T', fetchImpl: f })).skipped, 'no email, phone or contact id');
  assert.equal(f.calls.length, 0);
});

await ok('one-tap call request with only a GHL contact id: attaches to that contact, no upsert', async () => {
  _resetCache();
  const f = mockFetch();
  const p = toGhlPayload({ form_name: 'lead-quiz', data: { leadType: 'call-request', ghlContactId: '4ZQzKUp000Za0LYjfUqx', sourcePage: '/documents/summons-and-complaint/' } });
  assert.match(p.tags, /njfg-call-request/);
  const r = await pushLeadToGhl(p, { token: 'T', locationId: 'LOC', fetchImpl: f });
  assert.equal(r.contactId, '4ZQzKUp000Za0LYjfUqx');
  assert.equal(r.matchedById, true);
  assert.ok(!f.calls.some((c) => c.path === '/contacts/upsert'));
  assert.ok(f.calls.some((c) => c.path === '/contacts/4ZQzKUp000Za0LYjfUqx/notes'));
});

console.log(`${n} tests passed`);
