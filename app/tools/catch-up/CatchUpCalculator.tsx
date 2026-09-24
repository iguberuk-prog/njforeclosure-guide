'use client';

import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import { estimateCatchUp } from '../../../lib/catchup';
import { trackEvent } from '../../../lib/analytics';

/**
 * The interactive estimator. Runs entirely in the browser: nothing typed is
 * stored or sent (the one analytics event carries no amounts). Starts empty
 * on purpose — example numbers in a money tool get mistaken for someone's
 * real result.
 */

const fmt = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const fmtCents = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
const num = (s: string) => {
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : 0;
};

/** Keep digits and one decimal point (max 2 decimals): statements show cents. */
const cleanMoney = (s: string) => {
  const d = s.replace(/[^0-9.]/g, '');
  const [whole, ...rest] = d.split('.');
  const w = whole.slice(0, 9);
  return rest.length ? `${w}.${rest.join('').slice(0, 2)}` : w;
};
const showMoney = (v: string) => {
  if (!v) return '';
  const [whole, dec] = v.split('.');
  const w = whole ? Number(whole).toLocaleString('en-US') : '0';
  return dec !== undefined ? `${w}.${dec}` : w;
};

function Money({
  label, value, onChange, hint, id,
}: { label: string; value: string; onChange: (v: string) => void; hint?: string; id: string }) {
  const hintId = hint ? `${id}-hint` : undefined;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-800 mb-1.5">{label}</label>
      <div className="relative">
        <span aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">$</span>
        <input
          id={id}
          type="text"
          inputMode="decimal"
          autoComplete="off"
          aria-describedby={hintId}
          value={showMoney(value)}
          onChange={(e) => onChange(cleanMoney(e.target.value))}
          className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-lg font-semibold text-slate-900"
          placeholder="0"
        />
      </div>
      {hint && <p id={hintId} className="text-xs text-slate-500 mt-1 leading-relaxed">{hint}</p>}
    </div>
  );
}

export default function CatchUpCalculator() {
  const [payment, setPayment] = useState('');
  const [missed, setMissed] = useState('');
  const [lateFee, setLateFee] = useState('');
  const [attorney, setAttorney] = useState('');
  const [other, setOther] = useState('');
  const [saved, setSaved] = useState('');
  const tracked = useRef(false);

  const touch = () => {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent('calculator_use', { tool: 'catch-up' });
    }
  };
  const on = (setter: (v: string) => void) => (v: string) => {
    touch();
    setter(v);
  };

  const r = useMemo(
    () =>
      estimateCatchUp({
        monthlyPayment: num(payment),
        paymentsMissed: num(missed),
        lateFeePerPayment: num(lateFee),
        attorneyFees: num(attorney),
        otherFees: num(other),
        setAside: num(saved),
      }),
    [payment, missed, lateFee, attorney, other, saved]
  );

  const ready = num(payment) > 0 && num(missed) > 0;
  const months = Math.floor(num(missed));

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 space-y-6 min-w-0">
        <fieldset className="rounded-2xl border border-slate-200 p-5 space-y-5 min-w-0">
          <legend className="px-2 text-xs font-bold uppercase tracking-wider text-slate-500">1 · What you missed</legend>
          <Money id="payment" label="Monthly mortgage payment" value={payment} onChange={on(setPayment)}
            hint="The full amount on your statement: principal, interest and escrow (taxes and insurance) together." />
          <div>
            <label htmlFor="missed" className="block text-sm font-semibold text-slate-800 mb-1.5">Number of payments missed</label>
            <input
              id="missed"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              aria-describedby="missed-hint"
              value={missed}
              onChange={(e) => on(setMissed)(e.target.value.replace(/[^0-9]/g, '').slice(0, 3))}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-lg font-semibold text-slate-900"
              placeholder="0"
            />
            <p id="missed-hint" className="text-xs text-slate-500 mt-1 leading-relaxed">
              Whole monthly payments not made. Your statement usually shows the number of payments past due.
            </p>
          </div>
          <Money id="late-fee" label="Late fee per missed payment" value={lateFee} onChange={on(setLateFee)}
            hint="Shown on your statement. Your note sets the late charge; leave blank if none was charged." />
        </fieldset>

        <fieldset className="rounded-2xl border border-slate-200 p-5 space-y-5 min-w-0">
          <legend className="px-2 text-xs font-bold uppercase tracking-wider text-slate-500">2 · Fees and costs (optional)</legend>
          <Money id="attorney" label="Foreclosure attorney fees and costs (only if a complaint was filed)" value={attorney} onChange={on(setAttorney)}
            hint="Leave blank if no case has been filed. Only the lender's written reinstatement quote has the real number." />
          <Money id="other-fees" label="Other fees on your statement" value={other} onChange={on(setOther)}
            hint="Property inspections, preservation and similar charges. Leave blank if none." />
        </fieldset>

        <fieldset className="rounded-2xl border border-slate-200 p-5 space-y-5 min-w-0">
          <legend className="px-2 text-xs font-bold uppercase tracking-wider text-slate-500">3 · What you have (optional)</legend>
          <Money id="saved" label="Money already set aside toward catching up" value={saved} onChange={on(setSaved)}
            hint="Savings, a family loan, or anything else you can put toward it. Subtracted from the total." />
        </fieldset>
      </div>

      <div className="lg:col-span-2 min-w-0">
        <div className="lg:sticky lg:top-24 rounded-2xl bg-slate-950 text-white p-6" aria-live="polite">
          <p className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Your estimate</p>
          {!ready ? (
            <p className="text-slate-300 text-sm leading-relaxed">
              Enter your monthly payment and the number of payments missed to see roughly what it
              would take to bring the loan current, and what a repayment plan could look like.
            </p>
          ) : (
            <>
              {r.amountNeeded === 0 ? (
                <>
                  <p className="font-serif text-2xl font-bold mb-2">What you set aside may cover it</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    On these numbers, the {fmt(r.arrears)} estimate is covered, with about{' '}
                    {fmt(r.setAsideLeftOver)} to spare. Quotes grow daily and often include charges a
                    statement does not show, so get the servicer&apos;s written reinstatement quote
                    before you send anything.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-slate-400 text-xs">Estimated amount to get current</p>
                  <p className="font-serif text-4xl font-bold text-amber-400 mb-1 break-words">{fmt(r.amountNeeded)}</p>
                  <p className="text-slate-400 text-xs mb-1">
                    {r.setAsideApplied > 0 ? `After the ${fmt(r.setAsideApplied)} you have set aside` : 'Before anything you have set aside'}
                  </p>
                </>
              )}

              <dl className="mt-5 pt-4 border-t border-white/10 text-xs text-slate-400 space-y-1.5">
                <div className="flex justify-between gap-3"><dt>{months} missed payment{months === 1 ? '' : 's'}</dt><dd>{fmt(r.missedPayments)}</dd></div>
                <div className="flex justify-between gap-3"><dt>Late fees</dt><dd>+ {fmt(r.lateFees)}</dd></div>
                <div className="flex justify-between gap-3"><dt>Attorney fees, costs &amp; other fees</dt><dd>+ {fmt(r.feesAndCosts)}</dd></div>
                <div className="flex justify-between gap-3 text-slate-200 font-semibold"><dt>Estimated arrears</dt><dd>{fmt(r.arrears)}</dd></div>
                <div className="flex justify-between gap-3"><dt>Set aside</dt><dd>− {fmt(r.setAsideApplied)}</dd></div>
              </dl>

              {r.amountNeeded > 0 && (
                <div className="mt-5 rounded-lg bg-white/[0.07] border border-white/10 px-4 py-4 text-sm text-slate-200 leading-relaxed">
                  <p className="font-bold text-white mb-1">If you can&apos;t pay it at once</p>
                  <p className="text-xs text-slate-400 mb-3">
                    An illustration only. Lenders are not required to offer a repayment plan, and real
                    terms vary.
                  </p>
                  <ul className="space-y-2">
                    {r.plans.map((p) => (
                      <li key={p.months} className="flex justify-between gap-3">
                        <span>Over {p.months} months</span>
                        <span className="text-right">
                          <strong className="text-white">{fmtCents(p.totalPerMonth)}</strong>/mo
                          <span className="block text-xs text-slate-400">your payment + {fmtCents(p.extraPerMonth)}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-400 mt-3">
                    If that is out of reach, ask about{' '}
                    <Link href="/guides/forbearance" className="underline underline-offset-2 text-slate-200">forbearance</Link> or a{' '}
                    <Link href="/guides/loan-modification" className="underline underline-offset-2 text-slate-200">loan modification</Link>.
                  </p>
                </div>
              )}
            </>
          )}
          <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
            An educational estimate, not a quote or a promise of any amount. Only your servicer&apos;s
            written reinstatement quote is exact. Nothing you type leaves this page.
          </p>
        </div>
      </div>
    </div>
  );
}
