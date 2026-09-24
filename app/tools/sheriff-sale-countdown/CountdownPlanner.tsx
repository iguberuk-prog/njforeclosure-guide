'use client';

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { SHERIFF_SOURCES, SHERIFF_DATA_VERIFIED } from '../../../lib/sheriff-sales';
import { countdown, parseDay, ADJOURNMENT_DAYS } from '../../../lib/countdown';
import { trackEvent } from '../../../lib/analytics';

/**
 * Sheriff sale countdown planner. Runs entirely in the browser: nothing is
 * stored or sent (one analytics event, no inputs). Built after a real chat
 * visitor had five days until her sale and was told to wait for a callback;
 * this gives the steps a homeowner can take TODAY, with the county's own
 * sheriff contact, without waiting on anyone.
 */

type Goal = 'keep' | 'sell' | 'unsure';

const fmt = (d: Date) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });
const todayLocal = () => {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
};

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm print:border print:border-slate-900 print:bg-white print:text-slate-900">{n}</span>
      <div>
        <p className="font-bold text-slate-900">{title}</p>
        <div className="text-slate-600 leading-relaxed mt-1 text-[15px]">{children}</div>
      </div>
    </li>
  );
}

export default function CountdownPlanner() {
  const [date, setDate] = useState('');
  const [county, setCounty] = useState('');
  const [used, setUsed] = useState('0');
  const [goal, setGoal] = useState<Goal>('unsure');
  const tracked = useRef(false);
  const touch = () => {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent('calculator_use', { tool: 'sheriff-sale-countdown' });
    }
  };

  const src = SHERIFF_SOURCES.find((s) => s.slug === county);
  const sale = parseDay(date);
  const c = useMemo(() => (sale ? countdown(sale, todayLocal(), Number(used)) : null), [date, used]); // eslint-disable-line react-hooks/exhaustive-deps

  const tone =
    !c ? '' : c.phase === 'passed' ? 'bg-slate-100 border-slate-300' : c.phase === 'final' || c.phase === 'urgent' ? 'bg-red-50 border-red-300' : 'bg-amber-50 border-amber-300';

  let n = 0;
  const next = () => ++n;

  return (
    <div>
      <div className="rounded-2xl border border-slate-200 p-5 grid sm:grid-cols-2 gap-5 print:hidden">
        <div>
          <label htmlFor="saledate" className="block text-sm font-semibold text-slate-800 mb-1.5">Sale date on your notice or the county list</label>
          <input id="saledate" type="date" value={date} onChange={(e) => { touch(); setDate(e.target.value); }}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg text-lg font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900" />
        </div>
        <div>
          <label htmlFor="county" className="block text-sm font-semibold text-slate-800 mb-1.5">County</label>
          <select id="county" value={county} onChange={(e) => { touch(); setCounty(e.target.value); }}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg text-lg text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900">
            <option value="">Choose your county…</option>
            {SHERIFF_SOURCES.map((s) => <option key={s.slug} value={s.slug}>{s.county} County</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="used" className="block text-sm font-semibold text-slate-800 mb-1.5">Adjournments you have already used</label>
          <select id="used" value={used} onChange={(e) => { touch(); setUsed(e.target.value); }}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg text-lg text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900">
            <option value="0">None</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
          <p className="text-xs text-slate-500 mt-1">Not sure? The county&apos;s sale listing usually shows the adjournment history.</p>
        </div>
        <div>
          <label htmlFor="goal" className="block text-sm font-semibold text-slate-800 mb-1.5">What you want</label>
          <select id="goal" value={goal} onChange={(e) => { touch(); setGoal(e.target.value as Goal); }}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg text-lg text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900">
            <option value="unsure">Not sure yet</option>
            <option value="keep">Keep the home</option>
            <option value="sell">Sell and keep my equity</option>
          </select>
        </div>
      </div>

      {!c ? (
        <p className="text-slate-500 text-sm mt-5">Enter your sale date to see how many days you have and a step-by-step plan for today. Nothing you enter leaves this page.</p>
      ) : (
        <div className="mt-8" aria-live="polite">
          <div className={`rounded-2xl border-2 px-6 py-5 mb-8 ${tone}`}>
            {c.phase === 'passed' ? (
              <>
                <p className="font-serif text-2xl font-bold text-slate-900">That date has passed</p>
                <p className="text-slate-700 mt-1 leading-relaxed">
                  Sales are adjourned constantly, so first check the county listing to see whether it actually went forward.
                  If it did, the next {Math.max(0, 10 + c.daysLeft)} day(s) may still matter: there is generally a 10-day
                  window after a sale before the sheriff&apos;s deed is delivered (estimated to end {fmt(c.postSaleWindowEnds)}).
                </p>
              </>
            ) : (
              <>
                <p className="font-serif text-4xl font-bold text-slate-900">{c.daysLeft === 0 ? 'The sale is today' : `${c.daysLeft} day${c.daysLeft === 1 ? '' : 's'} until the sale`}</p>
                <p className="text-slate-700 mt-1">{sale && fmt(sale)}{src ? ` · ${src.county} County` : ''}</p>
                {c.adjournmentsLeft > 0 ? (
                  <p className="text-slate-800 mt-3 leading-relaxed">
                    You can generally still request <strong>{c.adjournmentsLeft} adjournment{c.adjournmentsLeft === 1 ? '' : 's'}</strong> of
                    up to {ADJOURNMENT_DAYS} days each. If requested and granted, the sale could move to roughly{' '}
                    <strong>{fmt(c.latestWithAdjournments)}</strong>. The sheriff sets the actual new date.
                  </p>
                ) : (
                  <p className="text-slate-800 mt-3 leading-relaxed">
                    With both statutory adjournments used, further postponement generally requires a court order. Call
                    Legal Services of New Jersey (1-888-576-5529) or an attorney today; do not wait.
                  </p>
                )}
              </>
            )}
          </div>

          {src && (
            <div className="rounded-2xl border border-slate-200 px-6 py-5 mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">{src.county} County Sheriff</p>
              {src.phone ? <p className="text-slate-900 font-bold text-lg">{src.phone}</p> : <p className="text-slate-600 text-sm">Phone not verified; use the sheriff&apos;s website below.</p>}
              {src.address && <p className="text-slate-600 text-sm mt-1">{src.address}</p>}
              <p className="mt-2 text-sm">
                <a href={src.salesUrl} target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4 font-semibold">Official sale listings</a>
                {' · '}
                <a href={src.sheriffUrl} target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4">Sheriff&apos;s website</a>
                {' · '}
                <Link href={`/sheriff-sales/${src.slug}/`} className="text-slate-900 underline underline-offset-4">County guide</Link>
              </p>
              <p className="text-slate-400 text-xs mt-2">Contacts verified against official county sources on {SHERIFF_DATA_VERIFIED}.</p>
            </div>
          )}

          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">
            {c.phase === 'passed' ? 'What to do now' : 'Your plan, starting today'}
          </h2>
          <ol className="space-y-5 mb-8">
            {c.phase === 'passed' ? (
              <>
                <Step n={next()} title="Confirm what happened">Check the official listing{src?.phone ? ` or call the sheriff at ${src.phone}` : ''}. Ask whether the sale went forward, was adjourned, or was cancelled.</Step>
                <Step n={next()} title="If it sold, call for free legal help now">Legal Services of New Jersey: 1-888-576-5529. Ask about the 10-day window before the deed is delivered.</Step>
                <Step n={next()} title="Check for surplus money">If the sale brought more than you owed, the difference is generally yours after liens. <Link href="/tools/surplus-funds" className="underline underline-offset-4 font-semibold text-slate-900">Surplus calculator</Link>.</Step>
                <Step n={next()} title="Know your rights while you are still there">No one can lock you out without a court writ carried out by the sheriff. <Link href="/guides/after-sheriff-sale" className="underline underline-offset-4 font-semibold text-slate-900">After-the-sale guide</Link>.</Step>
              </>
            ) : (
              <>
                {c.adjournmentsLeft > 0 && (
                  <Step n={next()} title={c.phase === 'final' ? 'Call the sheriff’s office right now' : 'Request an adjournment early, not the morning of'}>
                    Call the {src ? `${src.county} County ` : ''}sheriff&apos;s office{src?.phone ? ` (${src.phone})` : ''}, ask how they take
                    adjournment requests and the fee, and confirm the new date on the official list afterward. You generally do not
                    need a lawyer for this, and you should never pay a third party to do it.
                  </Step>
                )}
                {goal !== 'sell' && (
                  <Step n={next()} title="Get your lender’s position in writing">
                    Ask your servicer for a written reinstatement quote and the status of any modification review. If a review is
                    under way, ask them in writing to postpone the sale while they decide. Estimate the number first with the{' '}
                    <Link href="/tools/catch-up" className="underline underline-offset-4 font-semibold text-slate-900">catch-up calculator</Link>.
                  </Step>
                )}
                {goal !== 'keep' && (
                  <Step n={next()} title="Price a sale before the auction">
                    Selling before the auction generally protects more of your equity than the auction does. A cash sale commonly closes in
                    14–30 days; a listing takes longer. Compare both with the{' '}
                    <Link href="/tools/net-proceeds" className="underline underline-offset-4 font-semibold text-slate-900">net proceeds calculator</Link>.
                  </Step>
                )}
                <Step n={next()} title="Call free help today">
                  A HUD-approved housing counselor (800-569-4287) can help with the lender, and Legal Services of New Jersey
                  (1-888-576-5529) helps income-qualifying homeowners. If you are considering Chapter 13, talk to a bankruptcy
                  attorney before the sale date, not after.
                </Step>
                <Step n={next()} title="Mark these dates">
                  Sale: {sale && fmt(sale)}.{c.adjournmentsLeft > 0 && <> With remaining adjournments, roughly as late as {fmt(c.latestWithAdjournments)}.</>}{' '}
                  If a sale does happen, the post-sale window is generally about 10 days (estimated {fmt(c.postSaleWindowEnds)} for this date).
                </Step>
              </>
            )}
          </ol>

          <div className="flex flex-col sm:flex-row gap-3 print:hidden">
            <button type="button" onClick={() => window.print()} className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition">
              Print this plan
            </button>
            <Link href="/command-center?stage=scheduled" className="border border-slate-300 text-slate-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-slate-50 transition">
              Build my full free plan
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
