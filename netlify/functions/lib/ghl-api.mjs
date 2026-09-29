// GOHIGHLEVEL API: create the contact directly
// ---------------------------------------------------------------------------
// Used by submission-created.mjs. When GHL_API_TOKEN (a GHL Private
// Integration token for the sub-account) is set in Netlify, every verified
// website lead is written straight into GHL through the official v2 API:
//
//   1. upsert the contact (dedupes on email/phone), source + tags
//   2. add the tags again via the tags endpoint (upsert can replace tags)
//   3. add a note with what the homeowner told us
//   4. upsert an opportunity in the "NJFG Website Leads" pipeline, first stage
//
// Website leads are kept separate from anything else in the account: they
// carry the tag `njfg-website` and live only in their own pipeline.
//
// The token and location id live in Netlify environment variables, never in
// this repository. Nothing here throws: a GHL problem must never cost a lead
// (Netlify has already stored and emailed it before this runs).
// ---------------------------------------------------------------------------

const BASE = 'https://services.leadconnectorhq.com';
const API_VERSION = '2021-07-28';
export const DEFAULT_LOCATION_ID = 'IBbNjriUGyx0T55oe0ak';
export const PIPELINE_NAME = 'NJFG Website Leads';
export const BASE_TAG = 'njfg-website';

let pipelineCache = null; // { pipelineId, stageId } per warm function instance

async function call(fetchImpl, token, method, path, body) {
  const res = await fetchImpl(`${BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Version: API_VERSION,
      Accept: 'application/json',
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(6000),
  });
  let json = null;
  try {
    json = await res.json();
  } catch {
    /* empty body */
  }
  if (!res.ok) {
    const msg = json && (json.message || json.error) ? String(json.message || json.error) : '';
    throw new Error(`${method} ${path} -> ${res.status} ${msg}`.trim());
  }
  return json ?? {};
}

/** Build the contact upsert body from the flat payload made by toGhlPayload(). */
export function contactBody(p, locationId) {
  const tags = [BASE_TAG, ...String(p.tags || '').split(',').map((t) => t.trim()).filter(Boolean)];
  const body = {
    locationId,
    firstName: p.firstName || undefined,
    lastName: p.lastName || undefined,
    name: p.name || undefined,
    email: p.email || undefined,
    phone: p.phone || undefined,
    address1: p.address || undefined,
    city: p.town || undefined,
    state: 'NJ',
    source: 'NJ Foreclosure Guide website',
    tags: [...new Set(tags)],
  };
  for (const k of Object.keys(body)) if (body[k] === undefined) delete body[k];
  return body;
}

/** Human-readable note: everything the visitor told us, minus contact basics. */
export function noteBody(p) {
  const skip = new Set([
    'source', 'tags', 'name', 'firstName', 'lastName', 'email', 'phone',
    'conversationSummary', 'text', 'notes', 'submissionId',
  ]);
  const lines = [`Website lead (${p.leadType || p.formName || 'form'}) from ${p.sourcePage || 'njforeclosureguide.org'}`];
  if (p.notes) lines.push('', p.notes);
  const extra = Object.entries(p)
    .filter(([k, v]) => !skip.has(k) && v !== '' && v !== undefined && v !== null)
    .map(([k, v]) => `${k}: ${v}`);
  if (extra.length) lines.push('', ...extra);
  return lines.join('\n').slice(0, 20000);
}

async function findPipeline(fetchImpl, token, locationId) {
  if (pipelineCache) return pipelineCache;
  const json = await call(fetchImpl, token, 'GET', `/opportunities/pipelines?locationId=${encodeURIComponent(locationId)}`);
  const pipelines = Array.isArray(json.pipelines) ? json.pipelines : [];
  const want = PIPELINE_NAME.toLowerCase();
  const pl = pipelines.find((x) => String(x.name || '').trim().toLowerCase() === want);
  if (!pl) return null;
  const stages = Array.isArray(pl.stages) ? [...pl.stages] : [];
  stages.sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
  const stage = stages.find((s) => /new/i.test(s.name || '')) || stages[0];
  if (!stage) return null;
  pipelineCache = { pipelineId: pl.id, stageId: stage.id };
  return pipelineCache;
}

/**
 * Write one lead into GHL. Returns a small result object for logging.
 * Never throws.
 */
export async function pushLeadToGhl(p, { token, locationId = DEFAULT_LOCATION_ID, fetchImpl = fetch } = {}) {
  const out = { contactId: null, tagged: false, noted: false, opportunity: null, errors: [] };
  if (!token) return { ...out, skipped: 'no token' };
  if (!p.email && !p.phone) return { ...out, skipped: 'no email or phone' };

  try {
    const body = contactBody(p, locationId);
    const up = await call(fetchImpl, token, 'POST', '/contacts/upsert', body);
    out.contactId = up?.contact?.id || up?.id || null;
    if (!out.contactId) throw new Error('upsert returned no contact id');

    try {
      await call(fetchImpl, token, 'POST', `/contacts/${out.contactId}/tags`, { tags: body.tags });
      out.tagged = true;
    } catch (e) {
      out.errors.push(String(e.message || e));
    }

    try {
      await call(fetchImpl, token, 'POST', `/contacts/${out.contactId}/notes`, { body: noteBody(p) });
      out.noted = true;
    } catch (e) {
      out.errors.push(String(e.message || e));
    }

    try {
      const pl = await findPipeline(fetchImpl, token, locationId);
      if (!pl) {
        out.errors.push(`pipeline "${PIPELINE_NAME}" not found`);
      } else {
        const opp = await call(fetchImpl, token, 'POST', '/opportunities/upsert', {
          locationId,
          pipelineId: pl.pipelineId,
          pipelineStageId: pl.stageId,
          contactId: out.contactId,
          name: `${p.name || p.email || p.phone} - NJFG website`,
          status: 'open',
          source: 'NJ Foreclosure Guide website',
        });
        out.opportunity = opp?.opportunity?.id || opp?.id || 'ok';
      }
    } catch (e) {
      out.errors.push(String(e.message || e));
    }
  } catch (e) {
    out.errors.push(String(e.message || e));
  }
  return out;
}

/** Test hook: reset the per-instance pipeline cache. */
export function _resetCache() {
  pipelineCache = null;
}
