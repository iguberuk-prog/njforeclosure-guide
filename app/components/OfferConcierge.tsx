'use client';

import { useState } from 'react';
import AddressInput from './AddressInput';
import { PARTNERS } from '../../lib/partners';
import { trackEvent } from '../../lib/analytics';
import { appendAttribution } from '../../lib/attribution';
import { sendIntake } from '../../lib/intake';

/**
 * The concierge: instead of filling three vendor forms, the homeowner fills
 * one and asks US to request the offers on their behalf. This converts far
 * better than outbound links because it is one form, one decision, and a
 * person doing the legwork.
 *
 * Privacy contract: the site promises information is shared only when the
 * visitor asks for an introduction. This form IS that ask, so the copy names
 * exactly which companies will receive their details, chosen by checkbox,
 * nothing pre-checked beyond the defaults they see, and the consent sentence
 * sits directly above the button.
 */

const OFFER_PARTNERS = PARTNERS.filter(
  (p) => p.quoteUrl && ['fire-home-buyers', 'nj-offer', 'clik-offer', 'urbni'].includes(p.id)
);

export default function OfferConcierge({ sourcePage }: { sourcePage: string }) {
  const [selected, setSelected] = useState<string[]>(['nj-offer', 'clik-offer']);
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', notes: '' });
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');
  const [error, setError] = useState('');

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const submit = async () => {
    if (!form.name.trim() || (!form.phone.trim() && !form.email.trim())) {
      setError('Please add your name and a phone number or email.');
      return;
    }
    if (!form.address.trim()) {
      setError('Please add the property address; offers are impossible without it.');
      return;
    }
    if (selected.length === 0) {
      setError('Pick at least one company to request an offer from.');
      return;
    }
    setError('');
    setState('sending');
    try {
      const f = new URLSearchParams();
      f.append('form-name', 'lead-quiz');
      f.append('leadType', 'offer-concierge');
      f.append('name', form.name);
      f.append('phone', form.phone);
      f.append('email', form.email);
      f.append('propertyAddress', form.address);
      f.append('notes', form.notes);
      f.append('requestOffers', selected.join(', '));
      f.append('leadScore', 'HOT');
      f.append('recommendation', 'offer-concierge');
      f.append('sourcePage', sourcePage);
      appendAttribution(f);
      await Promise.allSettled([
        fetch('/__forms.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: f.toString(),
        }),
        sendIntake(f),
        // Kicks off automatic fulfillment: vendor referrals + homeowner
        // confirmation, via GoHighLevel (see netlify/functions/concierge-dispatch).
        fetch('/api/concierge-dispatch', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            phone: form.phone,
            email: form.email,
            address: form.address,
            notes: form.notes,
            vendors: selected,
            sourcePage,
          }),
        }),
      ]);
      trackEvent('generate_lead', {
        lead_score: 'HOT',
        recommendation: 'offer-concierge',
        source_page: sourcePage,
        offers_requested: selected.length,
      });
    } catch {
      // Show the confirmation regardless; the transcript reaches us.
    }
    setState('done');
  };

  if (state === 'done') {
    return (
      <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 px-6 py-8 text-center">
        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">Done. We take it from here.</h3>
        <p className="text-slate-600 leading-relaxed max-w-md mx-auto">
          We will request your offers from {selected.length} {selected.length === 1 ? 'company' : 'companies'} and
          you should hear from them directly, most within one business day. We will check in to make
          sure it happened. Nothing is binding until you sign something, and comparing offers costs
          nothing.
        </p>
      </div>
    );
  }

  const field =
    'w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent';

  return (
    <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/40 px-6 py-7">
      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-800 mb-2">
        The easy way · One form instead of three
      </p>
      <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
        Want us to request your offers for you?
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-5">
        Fill this once and we send it to the companies you pick, so the offers come to you. Free,
        and the offers themselves are free and non-binding. The smart play is two or three at once:
        comparing is what keeps everyone honest.
      </p>

      <div className="grid sm:grid-cols-2 gap-2 mb-5">
        {OFFER_PARTNERS.map((p) => (
          <label
            key={p.id}
            className={`flex items-start gap-3 rounded-xl border px-4 py-3 cursor-pointer transition ${
              selected.includes(p.id) ? 'border-slate-900 bg-white' : 'border-slate-200 bg-white/60 hover:border-slate-400'
            }`}
          >
            <input
              type="checkbox"
              checked={selected.includes(p.id)}
              onChange={() => toggle(p.id)}
              className="mt-1 h-4 w-4 accent-slate-900 flex-shrink-0"
            />
            <span>
              <span className="block text-sm font-bold text-slate-900">{p.name}</span>
              <span className="block text-xs text-slate-500 mt-0.5">{p.headline}</span>
            </span>
          </label>
        ))}
      </div>

      <div className="space-y-3">
        <div className="grid sm:grid-cols-3 gap-3">
          <input className={field} placeholder="Your name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input className={field} type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <input className={field} type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <AddressInput value={form.address} onChange={(v) => setForm({ ...form, address: v })} placeholder="Property address *" />
        <input className={field} placeholder="Anything they should know? Condition, timeline, sale date (optional)" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
        {error && <p className="text-red-700 text-sm">{error}</p>}
        <p className="text-[11px] text-slate-600 leading-relaxed">
          By clicking, you are asking us to share the details above with the companies you checked,
          so they can contact you with an offer or donation information. That is the only place this
          goes. Consent is not a condition of using this site.
        </p>
        <button
          onClick={submit}
          disabled={state === 'sending'}
          className="w-full sm:w-auto bg-slate-900 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-slate-800 transition disabled:opacity-60"
        >
          {state === 'sending' ? 'Sending…' : `Request My ${selected.length > 1 ? `${selected.length} Offers` : 'Offer'} For Me`}
        </button>
      </div>
    </div>
  );
}
