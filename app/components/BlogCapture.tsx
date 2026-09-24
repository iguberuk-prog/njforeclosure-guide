'use client';

import { useState } from 'react';
import { appendAttribution } from '../../lib/attribution';
import { trackEvent } from '../../lib/analytics';

/**
 * End-of-article capture on every blog post — the moment a reader has just
 * learned something and wants the next step. The offer is the free Survival
 * Kit, and the rule from /free-checklist holds here too: NEVER gated. The
 * download link works without an email; the email is an honest opt-in for
 * rule-change updates, labeled as optional.
 *
 * Posts to the existing Netlify "guide-download" form with sourcePage set to
 * the post URL, so leads are attributable to the article that earned them.
 */

export default function BlogCapture({ slug }: { slug: string }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setState('sending');
    try {
      const f = new URLSearchParams();
      f.append('form-name', 'guide-download');
      f.append('name', name);
      f.append('email', email);
      f.append('sourcePage', `/blog/${slug}/`);
      appendAttribution(f);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: f.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      trackEvent('email_capture', { source: 'blog', slug });
      setState('done');
    } catch {
      setState('error');
    }
  }

  return (
    <div className="rounded-2xl bg-slate-950 text-white px-6 py-6 my-12 not-prose">
      <p className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Free · No email required</p>
      <p className="font-serif text-2xl font-bold leading-snug mb-2">The NJ Foreclosure Survival Kit</p>
      <p className="text-slate-300 text-sm leading-relaxed mb-4">
        The Week-One Checklist and the 45-Day Playbook: exactly what to do, in order, from the day a
        notice arrives — all seven options on one page and the free-help directory.
      </p>
      <a
        href="/downloads/nj-foreclosure-45-day-playbook.pdf"
        download
        onClick={() => trackEvent('kit_download', { source: 'blog', slug })}
        className="inline-block bg-amber-400 text-slate-950 px-6 py-3 rounded-lg font-bold hover:bg-amber-300 transition mb-5"
      >
        Download the free kit ↓
      </a>

      {state === 'done' ? (
        <p className="text-sm text-slate-200 font-semibold">
          You&apos;re on the list — we only write when NJ rules or free programs change. Unsubscribe with one reply.
        </p>
      ) : (
        <form onSubmit={submit} className="border-t border-white/10 pt-4">
          <p className="text-xs text-slate-400 mb-2">
            Optional: a short note when NJ deadlines, programs, or free help change. Nothing else, never sold.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name (optional)"
              className="sm:w-40 rounded-lg px-3 py-2.5 text-sm text-slate-900"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-lg px-3 py-2.5 text-sm text-slate-900"
            />
            <button
              type="submit"
              disabled={state === 'sending'}
              className="border border-white/30 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition disabled:opacity-60"
            >
              {state === 'sending' ? 'Saving…' : 'Keep Me Posted'}
            </button>
          </div>
          {state === 'error' && (
            <p className="text-red-300 text-xs mt-2">That didn&apos;t go through — try again, or email help@njforeclosureguide.org.</p>
          )}
        </form>
      )}
    </div>
  );
}
