'use client';

import { useEffect, useState } from 'react';
import { trackEvent } from '../../lib/analytics';
import { appendAttribution, captureAttribution, getAttribution } from '../../lib/attribution';
import { sendIntake } from '../../lib/intake';

/**
 * "Have Samantha call me" (2026-10-09).
 *
 * GA4 showed texted homeowners reading the summons page and opening the quiz,
 * then leaving without typing anything. This gives them a one-tap way to ask
 * for a call. Texted visitors arrive with ?cid=<GHL contact id>, which
 * captureAttribution() keeps for the session, so for them no typing is needed:
 * the request is attached to the contact the text went to
 * (netlify/functions/lib/ghl-api.mjs). Everyone else types a first name and
 * phone number.
 *
 * Posts to the existing lead-quiz Netlify form with leadType=call-request, so
 * it reaches email, the Bidnology CRM and GHL (tag njfg-call-request) the same
 * way every other lead does.
 */

// The GHL number Samantha's texts come from, e.g. '+19085551234'. While null
// the "Text Samantha" button is hidden.
export const SAMANTHA_TEXT_NUMBER: string | null = null;

const TIMES = ['Morning', 'Afternoon', 'Evening'] as const;

export default function CallMeBox({
  sourcePage,
  headline = 'Rather talk it through? Samantha can call you.',
  sub = 'Free, no obligation. She will walk you through your options and your deadlines, and you decide what happens next.',
}: {
  sourcePage: string;
  headline?: string;
  sub?: string;
}) {
  const [cid, setCid] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    // Capture first: the layout's Analytics effect runs after this one on the
    // landing page, so the cid from the text link may not be stored yet.
    captureAttribution();
    setCid(getAttribution().ghlContactId);
  }, []);

  const send = async () => {
    trackEvent('cta_click', { cta: 'call_me', page: sourcePage, known_contact: cid ? 'yes' : 'no' });
    if (!cid && (!name.trim() || phone.replace(/\D/g, '').length < 10)) {
      setError('Please add your first name and a 10-digit phone number.');
      return;
    }
    setError('');
    setState('sending');
    try {
      const f = new URLSearchParams();
      f.append('form-name', 'lead-quiz');
      f.append('leadType', 'call-request');
      f.append('name', name.trim());
      f.append('phone', phone.trim());
      f.append('notes', `Asked for a call from ${sourcePage}.${time ? ` Best time: ${time.toLowerCase()}.` : ''}`);
      f.append('sourcePage', sourcePage);
      appendAttribution(f);
      await Promise.all([
        fetch('/__forms.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: f.toString(),
        }),
        sendIntake(f),
      ]);
      trackEvent('generate_lead', { lead_type: 'call-request', source_page: sourcePage });
      setState('done');
    } catch {
      setState('idle');
      setError('That did not go through. Please try again, or email help@njforeclosureguide.org.');
    }
  };

  if (state === 'done') {
    return (
      <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 px-6 py-6 mb-10">
        <p className="font-serif text-xl font-bold text-emerald-900 mb-1">Got it. Samantha will call you{time ? ` in the ${time.toLowerCase()}` : ''}.</p>
        <p className="text-emerald-800 text-sm leading-relaxed">
          Usually the same business day. {cid ? 'You can also just reply to her text.' : 'Keep your phone handy.'}
        </p>
      </div>
    );
  }

  const smsHref = SAMANTHA_TEXT_NUMBER
    ? `sms:${SAMANTHA_TEXT_NUMBER}?&body=${encodeURIComponent('Hi Samantha, I would like to talk about my options.')}`
    : null;

  return (
    <div className="rounded-2xl border-2 border-amber-400 bg-amber-50 px-6 py-6 mb-10">
      <p className="font-serif text-2xl font-bold text-slate-900 mb-2">{headline}</p>
      <p className="text-slate-700 leading-relaxed mb-4">{sub}</p>

      {!cid && (
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <input
            type="text"
            autoComplete="given-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First name"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
          <input
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-sm text-slate-600">Best time (optional):</span>
        {TIMES.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTime(time === t ? '' : t)}
            className={`text-sm px-3 py-1.5 rounded-full border transition ${
              time === t ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={send}
          disabled={state === 'sending'}
          className="bg-amber-400 text-slate-950 px-6 py-3.5 rounded-lg font-bold text-center hover:bg-amber-300 transition disabled:opacity-60"
        >
          {state === 'sending' ? 'Sending...' : 'Yes, have Samantha call me'}
        </button>
        {smsHref && (
          <a
            href={smsHref}
            onClick={() => trackEvent('cta_click', { cta: 'text_samantha', page: sourcePage })}
            className="border border-slate-300 bg-white text-slate-900 px-6 py-3.5 rounded-lg font-semibold text-center hover:bg-slate-50 transition"
          >
            Or text Samantha
          </a>
        )}
      </div>

      {error && <p className="text-red-600 text-sm mt-3">{error}</p>}

      <p className="text-[11px] text-slate-500 leading-relaxed mt-4">
        By tapping, you agree NJ Foreclosure Guide may call or text you about your situation, including by automated
        means. Consent is not required to use this site. Reply STOP to opt out. Message and data rates may apply.
      </p>
    </div>
  );
}
