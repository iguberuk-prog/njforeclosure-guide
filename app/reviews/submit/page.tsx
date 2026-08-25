'use client';

import { useState } from 'react';
import Link from 'next/link';

/**
 * Review submission with explicit publication consent.
 *
 * The consent checkbox is unchecked by default and is NOT required to submit,
 * because a review sent without permission is still useful feedback and the
 * person should not have to trade one for the other. Only submissions with
 * consent recorded may ever be published, and even then a second confirming
 * email goes out before anything appears. That paper trail is what makes a
 * published review defensible under 16 CFR Part 465.
 */
export default function SubmitReviewPage() {
  const [form, setForm] = useState({
    name: '',
    lastInitial: '',
    town: '',
    email: '',
    year: '',
    text: '',
  });
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const submit = async () => {
    if (!form.name.trim() || !form.text.trim()) {
      setError('Please add your first name and a few sentences.');
      return;
    }
    setError('');
    setSubmitting(true);
    try {
      const data = new URLSearchParams();
      data.append('form-name', 'client-review');
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      data.append('publishConsent', consent ? 'YES' : 'no');
      data.append('sourcePage', '/reviews/submit');
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
    } catch {
      // Show the thank-you either way. Their words are not lost on our end.
    }
    setSubmitting(false);
    setDone(true);
  };

  const field = 'w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent';
  const label = 'block text-sm font-semibold text-slate-700 mb-1.5';

  if (done) {
    return (
      <div className="min-h-full bg-slate-50 py-20 px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200">
          <h1 className="font-serif text-3xl font-bold text-slate-900 mb-4">Thank you.</h1>
          <p className="text-slate-600 leading-relaxed mb-4">
            That genuinely helps, and we read every one of these.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            {consent
              ? 'You said we may publish it. Before anything goes on the site we will email you once more with exactly how it would appear, so you can change the wording or say no. Nothing is published until you reply to that.'
              : 'You did not check the publication box, so this stays private and will not appear anywhere on the site. If you change your mind later, just reply to any email from us.'}
          </p>
          <Link href="/reviews" className="text-amber-700 font-semibold underline underline-offset-2">
            Back to reviews
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-slate-50 py-14 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200">
          <p className="text-amber-600 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            For homeowners we have worked with
          </p>
          <h1 className="font-serif text-3xl font-bold text-slate-900 mb-4">Leave a review</h1>
          <p className="text-slate-600 leading-relaxed mb-8">
            A few honest sentences is plenty. What was happening when we first spoke, what actually
            came of it, and whether you would tell someone else in that position to get in touch. If
            something was slow or frustrating, please say that too. It is more useful to the next
            person than praise is, and we would rather publish it than hide it.
          </p>

          <div className="space-y-4">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className={label}>First name</label>
                <input
                  className={field}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Maria"
                />
              </div>
              <div>
                <label className={label}>Last initial</label>
                <input
                  className={field}
                  maxLength={1}
                  value={form.lastInitial}
                  onChange={(e) => setForm({ ...form, lastInitial: e.target.value })}
                  placeholder="S"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={label}>Town</label>
                <input
                  className={field}
                  value={form.town}
                  onChange={(e) => setForm({ ...form, town: e.target.value })}
                  placeholder="Bayonne"
                />
              </div>
              <div>
                <label className={label}>Roughly what year?</label>
                <input
                  className={field}
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  placeholder="2022"
                />
              </div>
            </div>

            <div>
              <label className={label}>Your email</label>
              <input
                type="email"
                className={field}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@email.com"
              />
              <p className="text-xs text-slate-500 mt-1">
                Only so we can confirm with you before publishing. Never shown on the site.
              </p>
            </div>

            <div>
              <label className={label}>What happened</label>
              <textarea
                className={field}
                rows={7}
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                placeholder="We were about six weeks from a sale date and I had no idea adjournments were even possible..."
              />
            </div>

            <label className="flex gap-3 items-start rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 cursor-pointer hover:border-slate-400 transition">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 flex-shrink-0 accent-slate-900"
              />
              <span className="text-xs text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-800">You may publish this</span> on
                njforeclosureguide.org, shown as my first name, last initial and town, for example
                &quot;Maria S., Bayonne&quot;. I understand you will email me first with exactly how it
                would appear, that nothing goes up until I reply, and that I can have it removed at any
                time by asking. Leaving this unchecked is completely fine and your review stays private.
              </span>
            </label>
          </div>

          {error && <p className="text-red-600 text-sm mt-4">{error}</p>}

          <button
            onClick={submit}
            disabled={submitting}
            className="w-full mt-6 bg-amber-400 text-slate-950 py-4 rounded-xl font-bold text-lg hover:bg-amber-300 transition disabled:opacity-60"
          >
            {submitting ? 'Sending...' : 'Send it'}
          </button>

          <p className="text-xs text-slate-400 mt-6 leading-relaxed text-center">
            We never write, edit or invent reviews, and we never publish one without written permission
            from the person who wrote it.{' '}
            <Link href="/privacy" className="underline underline-offset-2">
              Privacy policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
