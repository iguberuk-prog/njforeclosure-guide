'use client';

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import BrcCard from '../../components/BrcCard';
import { trackEvent } from '../../../lib/analytics';

/**
 * Net proceeds estimator. Everything runs in the visitor's browser; no number
 * they type is sent anywhere. The three columns deliberately include the
 * honest downsides of each path (market costs and time, the cash discount,
 * reinstatement not producing cash) so the tool reads as a comparison, not a
 * sales pitch for any one option.
 *
 * Assumption constants are visible on the page itself. Keep them defensible:
 *  - Market selling costs ~8% (commission ~5-6% plus closing/attorney/transfer)
 *  - Cash buyers in NJ typically offer roughly 70-85% of market value
 *  - Payoff = balance + arrears; real payoffs add per-diem interest and fees,
 *    which the disclaimer says plainly.
 */

const fmt = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

function NumberField({
  label, value, onChange, hint,
}: { label: string; value: string; onChange: (v: string) => void; hint?: string }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</span>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">$</span>
        <input
          type="text"
          inputMode="numeric"
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, ''))}
          className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-lg font-semibold text-slate-900"
          placeholder="0"
        />
      </div>
      {hint && <span className="block text-xs text-slate-400 mt-1">{hint}</span>}
    </label>
  );
}

export default function NetProceedsPage() {
  const [homeValue, setHomeValue] = useState('450000');
  const [balance, setBalance] = useState('280000');
  const [arrears, setArrears] = useState('25000');
  const tracked = useRef(false);

  const onAnyChange = (setter: (v: string) => void) => (v: string) => {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent('calculator_use', { tool: 'net-proceeds' });
    }
    setter(v);
  };

  const r = useMemo(() => {
    const value = parseInt(homeValue || '0', 10);
    const payoff = parseInt(balance || '0', 10) + parseInt(arrears || '0', 10);
    const marketCosts = Math.round(value * 0.08);
    const market = Math.round(value - marketCosts - payoff);
    const cashLow = Math.round(value * 0.7 - payoff);
    const cashHigh = Math.round(value * 0.85 - payoff);
    const equityKept = value - parseInt(balance || '0', 10);
    return { value, payoff, marketCosts, market, cashLow, cashHigh, equityKept };
  }, [homeValue, balance, arrears]);

  const hasInput = r.value > 0;

  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Free tool · Nothing you type leaves this page
          </p>
          <h1 className="font-serif text-4xl font-bold mb-4 tracking-tight">
            What Would You Actually Walk Away With?
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Three numbers give you a first honest look at your three main paths: selling on the
            market, selling fast for cash, or catching up and keeping the home.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          <NumberField
            label="Estimated home value"
            value={homeValue}
            onChange={onAnyChange(setHomeValue)}
            hint="What similar homes near you sell for"
          />
          <NumberField
            label="Mortgage balance"
            value={balance}
            onChange={onAnyChange(setBalance)}
            hint="Remaining principal on all home loans"
          />
          <NumberField
            label="Amount behind (arrears)"
            value={arrears}
            onChange={onAnyChange(setArrears)}
            hint="Missed payments plus late fees, roughly"
          />
        </div>

        {hasInput && (
          <div className="grid md:grid-cols-3 gap-5">
            <div className="border border-slate-200 rounded-2xl p-6 flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Sell on the market
              </p>
              <p className={`font-serif text-3xl font-bold ${r.market >= 0 ? 'text-slate-900' : 'text-red-700'}`}>
                {fmt(r.market)}
              </p>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed flex-1">
                After ~8% selling costs ({fmt(r.marketCosts)}) and paying off {fmt(r.payoff)}.
                Usually the most money, and the slowest: typically 60-90+ days, which works when the
                auction is not close or gets adjourned.
              </p>
              <Link href="/guides" className="text-sm text-slate-900 underline underline-offset-4 font-semibold mt-4">
                How listing works in foreclosure
              </Link>
            </div>

            <div className="border border-slate-200 rounded-2xl p-6 flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Sell fast for cash
              </p>
              <p className={`font-serif text-3xl font-bold ${r.cashHigh >= 0 ? 'text-slate-900' : 'text-red-700'}`}>
                {fmt(r.cashLow)} – {fmt(r.cashHigh)}
              </p>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed flex-1">
                Cash buyers in New Jersey typically pay roughly 70-85% of market value, closing in
                7-30 days. You are trading price for speed and certainty; that trade only makes
                sense when time is genuinely short.
              </p>
              <Link href="/companies" className="text-sm text-slate-900 underline underline-offset-4 font-semibold mt-4">
                Compare cash buyers
              </Link>
            </div>

            <div className="border-2 border-emerald-600/30 bg-emerald-50/40 rounded-2xl p-6 flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-1">
                Catch up and keep it
              </p>
              <p className="font-serif text-3xl font-bold text-slate-900">{fmt(r.equityKept)}</p>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed flex-1">
                That is the equity you keep by reinstating: paying the {fmt(parseInt(arrears || '0', 10))} in
                arrears (plus fees) to bring the loan current. If the arrears can be raised, from
                income, family, or a modification that folds them into the loan, keeping the home
                usually protects the most value.
              </p>
              <Link href="/guides/loan-modification" className="text-sm text-slate-900 underline underline-offset-4 font-semibold mt-4">
                Ways to catch up
              </Link>
            </div>
          </div>
        )}

        {hasInput && (
          <div className="mt-8">
            <BrcCard compact />
          </div>
        )}

        <div className="bg-slate-50 rounded-2xl p-6 mt-10">
          <p className="text-slate-700 leading-relaxed mb-4">
            These are first-look estimates. The free assessment turns them into an actual plan by
            factoring in your timeline, the stage of your case, and what you want.
          </p>
          <Link href="/quiz" className="inline-block bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
            See My Options, Free
          </Link>
        </div>

        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Estimates only, based on the assumptions shown; not an appraisal, an offer, or financial
          advice. Real mortgage payoffs include per-diem interest, legal fees and costs that grow as
          a case advances, so request an exact payoff statement from your servicer before deciding
          anything. Selling costs and cash-offer percentages vary by property and buyer.
        </p>
      </section>
    </div>
  );
}
