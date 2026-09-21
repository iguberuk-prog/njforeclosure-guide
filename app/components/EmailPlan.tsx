'use client';

import { useState } from 'react';
import { appendAttribution } from '../../lib/attribution';
import { trackEvent } from '../../lib/analytics';

/**
 * "Email me my plan": two honest mechanisms, zero false promises.
 *  1. Self-send: a mailto the visitor sends from their own mail app — the
 *     plan text never touches our servers.
 *  2. Optional list join through the existing guide-download pipeline, so
 *     tool users can opt into updates like checklist downloaders do.
 */

export default function EmailPlan({ planText, sourcePage }: { planText: string; sourcePage: string }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const mailto = `mailto:?subject=${encodeURIComponent('My NJ foreclosure plan — njforeclosureguide.org')}&body=${encodeURIComponent(planText.slice(0, 1600) + '\n\nFull tools: https://njforeclosureguide.org' + sourcePage)}`;

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setState('sending');
    try {
      const f = new URLSearchParams();
      f.append('form-name', 'guide-download');
      f.append('email', email);
      f.append('sourcePage', sourcePage);
      appendAttribution(f);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: f.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      trackEvent('email_capture', { source: sourcePage });
      setState('done');
    } catch {
      setState('error');
    }
  }

  return (
    <div className="rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 print:hidden">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <a
          href={mailto}
          onClick={() => trackEvent('plan_self_email', { source: sourcePage })}
          className="text-center bg-slate-900 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition text-sm whitespace-nowrap"
        >
          Email This Plan to Myself
        </a>
        <p className="text-slate-500 text-xs leading-relaxed">
          Opens your own mail app with the plan filled in — it never passes through our servers.
        </p>
      </div>
      {state === 'done' ? (
        <p className="text-slate-800 text-sm font-semibold mt-3">
          You&rsquo;re on the list — short notes only when NJ deadlines or programs change.
        </p>
      ) : (
        <form onSubmit={subscribe} className="mt-3 flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Optional: email for updates when NJ rules change"
            className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          <button
            type="submit"
            disabled={state === 'sending'}
            className="border border-slate-300 text-slate-800 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white transition disabled:opacity-60"
          >
            {state === 'sending' ? 'Saving…' : 'Keep Me Posted'}
          </button>
        </form>
      )}
      {state === 'error' && (
        <p className="text-red-700 text-xs mt-2">That didn&rsquo;t go through — try again, or email help@njforeclosureguide.org.</p>
      )}
    </div>
  );
}
