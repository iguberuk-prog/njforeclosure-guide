'use client';

import { useState } from 'react';
import { appendAttribution } from '../../lib/attribution';
import { trackEvent } from '../../lib/analytics';

/**
 * The free download kit: both PDFs, never gated. The email field below is
 * optional and says so — the downloads work whether or not it is filled in.
 * Submissions land in Netlify Forms ("guide-download") with attribution, so
 * every address is a warm, self-identified NJ-foreclosure contact.
 */

const FILES = [
  {
    href: '/downloads/nj-foreclosure-week-one-checklist.pdf',
    name: 'The Week-One Checklist',
    desc: 'One printable page: the eight moves to make the week a notice arrives. Stick it on the fridge.',
    tag: '1 page · PDF',
  },
  {
    href: '/downloads/nj-foreclosure-45-day-playbook.pdf',
    name: 'The 45-Day Playbook (Survival Kit)',
    desc: 'Day-by-day plan from the day you are served, all seven exit options on one page, the free statewide help directory, and a fill-in worksheet.',
    tag: '5 pages · PDF',
  },
];

export default function DownloadKit() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setState('sending');
    try {
      const f = new URLSearchParams();
      f.append('form-name', 'guide-download');
      f.append('name', name);
      f.append('email', email);
      f.append('sourcePage', '/free-checklist');
      appendAttribution(f);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: f.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      trackEvent('email_capture', { source: 'free-checklist' });
      setState('done');
    } catch {
      setState('error');
    }
  }

  return (
    <div className="space-y-4">
      {FILES.map((file) => (
        <a
          key={file.href}
          href={file.href}
          download
          onClick={() => trackEvent('kit_download', { file: file.href })}
          className="flex items-start gap-4 rounded-2xl border-2 border-slate-200 bg-white px-5 py-5 hover:border-slate-400 transition group"
        >
          <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs group-hover:bg-amber-600 transition">
            PDF
          </span>
          <span className="min-w-0">
            <span className="block font-bold text-slate-900">{file.name}</span>
            <span className="block text-slate-600 text-sm mt-0.5 leading-relaxed">{file.desc}</span>
            <span className="inline-block mt-2 text-[11px] font-semibold uppercase tracking-wider text-amber-700">
              {file.tag} · Free — download now ↓
            </span>
          </span>
        </a>
      ))}

      <div className="rounded-2xl bg-slate-50 border border-slate-200 px-5 py-5">
        {state === 'done' ? (
          <p className="text-slate-800 text-sm font-semibold">
            You&apos;re on the list. We only write when something changes that affects NJ homeowners
            — and you can unsubscribe with one reply.
          </p>
        ) : (
          <form onSubmit={subscribe}>
            <p className="font-bold text-slate-900 text-sm mb-1">
              Optional: get updates when the rules change
            </p>
            <p className="text-slate-600 text-xs leading-relaxed mb-3">
              The downloads above work either way — no email required. Leave one only if you want a
              short note when NJ deadlines, programs, or free-help resources change. Nothing else,
              no selling your address, unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First name (optional)"
                className="sm:w-44 rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
              />
              <button
                type="submit"
                disabled={state === 'sending'}
                className="bg-slate-900 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-slate-800 transition disabled:opacity-60"
              >
                {state === 'sending' ? 'Saving…' : 'Keep Me Posted'}
              </button>
            </div>
            {state === 'error' && (
              <p className="text-red-700 text-xs mt-2">
                That didn&apos;t go through — try again, or just email help@njforeclosureguide.org.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
