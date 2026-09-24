'use client';

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '../../../lib/analytics';
import {
  analyzeMessage,
  segments,
  CHECKLIST,
  EXAMPLES,
  RULES,
  RATING_LABEL,
  type Severity,
} from '../../../lib/scam-rules';

/**
 * Foreclosure scam checker. Runs entirely in the browser: the pasted text
 * and checklist answers are never stored or sent anywhere (one analytics
 * event on first use, with no inputs). Rules and tests live in
 * lib/scam-rules.ts and scripts/test-scam-rules.mjs. It flags patterns only;
 * it never judges a named company and cannot verify who sent a message.
 */

const SEV_LABEL: Record<Severity, string> = { high: 'High', medium: 'Medium', low: 'Low' };
const SEV_BADGE: Record<Severity, string> = {
  high: 'bg-red-100 text-red-800 border-red-200',
  medium: 'bg-amber-100 text-amber-900 border-amber-200',
  low: 'bg-slate-100 text-slate-700 border-slate-200',
};
const SEV_MARK: Record<Severity, string> = {
  high: 'bg-red-200 text-red-950',
  medium: 'bg-amber-200 text-amber-950',
  low: 'bg-slate-200 text-slate-900',
};
const sevOf = (ruleId?: string): Severity => RULES.find((r) => r.id === ruleId)?.severity ?? 'low';

export default function ScamChecker() {
  const [text, setText] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [shown, setShown] = useState(false);
  const tracked = useRef(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const touch = () => {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent('calculator_use', { tool: 'scam-checker' });
    }
  };

  const result = useMemo(() => analyzeMessage(text, answers), [text, answers]);
  const segs = useMemo(() => segments(text, result.spans), [text, result.spans]);
  const hasInput = text.trim().length > 0 || answers.length > 0;

  const toggle = (id: string) => {
    touch();
    setAnswers((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));
  };
  const check = () => {
    touch();
    setShown(true);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };
  const loadExample = (t: string) => {
    touch();
    setText(t);
    setAnswers([]);
    setShown(true);
  };
  const clear = () => {
    setText('');
    setAnswers([]);
    setShown(false);
  };

  const tone =
    result.rating === 'high'
      ? 'bg-red-50 border-red-300'
      : result.rating === 'warning'
        ? 'bg-amber-50 border-amber-300'
        : 'bg-slate-50 border-slate-300';

  return (
    <div>
      <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50 px-5 py-4 mb-6 flex gap-3 items-start">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="w-6 h-6 shrink-0 text-emerald-700 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="10" width="16" height="11" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
        <p className="text-emerald-950 text-[15px] leading-relaxed">
          <strong>Private: nothing you type leaves your browser.</strong> The check runs on your own device. We do not
          store, send, or see the text or your answers. You can remove names and account numbers first if you prefer.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 p-5">
        <label htmlFor="scam-text" className="block text-sm font-semibold text-slate-800 mb-1.5">
          Paste the letter, email, text message, flyer, or voicemail transcript
        </label>
        <textarea
          id="scam-text"
          value={text}
          onChange={(e) => {
            touch();
            setText(e.target.value);
          }}
          rows={8}
          placeholder="Paste or type what they sent or said…"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg text-base text-slate-900 leading-relaxed focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <span className="text-sm text-slate-500 mr-1">Try an example:</span>
          {EXAMPLES.map((e) => (
            <button
              key={e.id}
              type="button"
              onClick={() => loadExample(e.text)}
              className="text-sm border border-slate-300 rounded-full px-3 py-1.5 text-slate-800 hover:bg-slate-50 transition"
            >
              {e.label}
            </button>
          ))}
        </div>

        <fieldset className="mt-6">
          <legend className="text-sm font-semibold text-slate-800 mb-2">Was anything said on the phone or in person? Tick all that apply.</legend>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {CHECKLIST.map((c) => (
              <label key={c.id} className="flex gap-2.5 items-start text-[15px] text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={answers.includes(c.id)}
                  onChange={() => toggle(c.id)}
                  className="mt-1 w-4 h-4 accent-slate-900 shrink-0"
                />
                <span>{c.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            type="button"
            onClick={check}
            disabled={!hasInput}
            className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Check for red flags
          </button>
          {hasInput && (
            <button type="button" onClick={clear} className="border border-slate-300 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition">
              Clear
            </button>
          )}
        </div>
      </div>

      {shown && hasInput && (
        <div ref={resultsRef} className="mt-8 scroll-mt-6" aria-live="polite">
          <div className={`rounded-2xl border-2 px-6 py-5 mb-6 ${tone}`}>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Result</p>
            <p className="font-serif text-3xl font-bold text-slate-900">{RATING_LABEL[result.rating]}</p>
            <p className="text-slate-700 mt-2 leading-relaxed">
              {result.rating === 'high' &&
                'This matches one or more patterns that federal and New Jersey consumer-protection rules single out in foreclosure scams. Do not pay, sign, or share anything until you have checked it independently.'}
              {result.rating === 'warning' &&
                'Some wording here is common in scams. It may have an innocent explanation, so check it independently before you pay, sign, or share anything.'}
              {result.rating === 'none' &&
                'We did not find any of the patterns this tool looks for. That does not mean the message is safe or real: scammers change their wording, and this tool cannot tell who sent it.'}
            </p>
            {result.rating === 'high' && result.legit.length > 0 && (
              <p className="text-slate-700 mt-2 text-sm leading-relaxed">
                The message also mentions things real letters often include (like HUD, the courts, or a loan number).
                Scammers borrow those names too, so they do not cancel the warning signs.
              </p>
            )}
          </div>

          {result.flags.length > 0 && (
            <>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                {result.flags.length} warning sign{result.flags.length === 1 ? '' : 's'} found
              </h2>
              <ul className="space-y-4 mb-8">
                {result.flags.map((f) => (
                  <li key={f.rule.id} className="rounded-2xl border border-slate-200 px-5 py-5">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wider border rounded-full px-2.5 py-0.5 ${SEV_BADGE[f.rule.severity]}`}>
                        {SEV_LABEL[f.rule.severity]}
                      </span>
                      <p className="font-bold text-slate-900">{f.rule.title}</p>
                    </div>
                    {f.phrases.length > 0 && (
                      <p className="text-sm text-slate-600 mb-2">
                        Found:{' '}
                        {f.phrases.slice(0, 4).map((p, i) => (
                          <span key={p}>
                            {i > 0 && ', '}
                            <mark className={`rounded px-1 ${SEV_MARK[f.rule.severity]}`}>“{p}”</mark>
                          </span>
                        ))}
                      </p>
                    )}
                    {f.answers.length > 0 && (
                      <p className="text-sm text-slate-600 mb-2">You said: {f.answers.map((a) => `“${a}”`).join(', ')}</p>
                    )}
                    <p className="text-slate-700 leading-relaxed text-[15px]">
                      <strong className="text-slate-900">Why it is a red flag: </strong>
                      {f.rule.why}
                    </p>
                    <p className="text-slate-700 leading-relaxed text-[15px] mt-2">
                      <strong className="text-slate-900">What to do instead: </strong>
                      {f.rule.instead}
                      {f.rule.link && (
                        <>
                          {' '}
                          <Link href={f.rule.link.href} className="underline underline-offset-4 font-semibold text-slate-900">
                            {f.rule.link.label}
                          </Link>
                          .
                        </>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}

          {text.trim() && result.spans.length > 0 && (
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-2">Your text, with the flagged wording highlighted</h3>
              <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-800 leading-relaxed whitespace-pre-wrap break-words max-h-96 overflow-y-auto">
                {segs.map((s, i) =>
                  s.ruleId ? (
                    <mark key={i} className={`rounded px-0.5 ${SEV_MARK[sevOf(s.ruleId)]}`}>
                      {s.text}
                    </mark>
                  ) : (
                    <span key={i}>{s.text}</span>
                  )
                )}
              </div>
            </div>
          )}

          {result.legit.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 mb-8">
              <p className="font-bold text-slate-900 mb-2">Things legitimate letters often include</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-700 text-[15px]">
                {result.legit.map((l) => (
                  <li key={l.id}>{l.label}</li>
                ))}
              </ul>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                These lowered the score for minor warning signs only. The tool cannot confirm who actually sent the message;
                anyone can copy a loan number, a court name, or HUD&apos;s phone number.
              </p>
            </div>
          )}

          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">What to do next</h2>
          <ol className="space-y-4 mb-6">
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">1</span>
              <div className="text-slate-700 leading-relaxed text-[15px]">
                <p className="font-bold text-slate-900">Verify it yourself, using a number you look up</p>
                Call your servicer at the number on your monthly statement, or the agency or court at the number on its
                official website. Do not use the phone number, link, or QR code in the message.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">2</span>
              <div className="text-slate-700 leading-relaxed text-[15px]">
                <p className="font-bold text-slate-900">Get a free second opinion before you sign or pay</p>
                HUD-approved housing counselor: <a href="tel:+18005694287" className="font-semibold text-slate-900 underline underline-offset-4">800-569-4287</a>{' '}
                (foreclosure counseling is always free). Legal Services of New Jersey:{' '}
                <a href="tel:+18885765529" className="font-semibold text-slate-900 underline underline-offset-4">1-888-576-5529</a>{' '}
                (free for income-eligible homeowners).
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">3</span>
              <div className="text-slate-700 leading-relaxed text-[15px]">
                <p className="font-bold text-slate-900">Report it, even if you did not lose money</p>
                <ul className="mt-1 space-y-1">
                  <li>
                    NJ Division of Consumer Affairs:{' '}
                    <a href="https://njconsumeraffairs.nj.gov/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-slate-900 font-semibold">
                      online complaint
                    </a>{' '}
                    or 800-242-5846
                  </li>
                  <li>
                    CFPB:{' '}
                    <a href="https://www.consumerfinance.gov/complaint/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-slate-900 font-semibold">
                      consumerfinance.gov/complaint
                    </a>
                  </li>
                  <li>
                    FTC:{' '}
                    <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-slate-900 font-semibold">
                      reportfraud.ftc.gov
                    </a>
                  </li>
                </ul>
                <p className="mt-1">If you already paid, signed, or shared a password, also call your bank and a lawyer today.</p>
              </div>
            </li>
          </ol>
          <p className="text-slate-500 text-sm leading-relaxed">
            This checker looks for common scam patterns in wording. It does not judge any company, and it cannot confirm
            who sent a message or whether an offer is real. <Link href="/scams" className="underline underline-offset-4">See the full list of foreclosure scam red flags</Link>.
          </p>
        </div>
      )}
    </div>
  );
}
