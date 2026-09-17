'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '../../../lib/analytics';

/**
 * The $ of Waiting meter. Drag the months slider; watch an ILLUSTRATIVE
 * fee stack grow, doors close, and equity leak. All math is clearly labeled
 * as an adjustable estimate — the servicer's written quote is the real
 * number, and the page says so twice.
 *
 * Dataviz conventions applied: single stacked bar, thin marks, 2px white
 * gaps between segments, direct labels (identity never color-alone),
 * validated 4-color categorical palette (#1d4ed8 #d97706 #7c3aed #059669),
 * text in ink colors, one scale, no dual axes.
 */

const COLORS = {
  missed: '#1d4ed8',
  interest: '#d97706',
  escrow: '#7c3aed',
  legal: '#059669',
} as const;

const fmtUsd = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

interface Door { at: number; label: string; detail: string }
const DOORS: Door[] = [
  { at: 1, label: 'Cheapest fixes', detail: 'Repayment plans & reinstatement are smallest right now — no legal fees yet.' },
  { at: 4, label: 'The quiet window', detail: 'Around 120 days, the lender can send the NOI and file. Legal fees start stacking after referral.' },
  { at: 6, label: 'The 35-day answer', detail: 'Once served, the answer window opens — and closes. With it goes the free mediation seat.' },
  { at: 12, label: 'Cure at its cheapest', detail: 'The right to cure runs to final judgment, but the toll grows every month it waits.' },
  { at: 18, label: 'The runway a sale needs', detail: 'A listed sale needs months of runway. Late starts leave only the discount options.' },
];

export default function CostClient() {
  const [months, setMonths] = useState(6);
  const [payment, setPayment] = useState(2800);
  const [value, setValue] = useState(450000);
  const [balance, setBalance] = useState(320000);
  const [touched, setTouched] = useState(false);

  const est = useMemo(() => {
    // Illustrative model, deliberately simple and labeled as such on-page:
    const missed = months * payment;
    const interest = Math.round(missed * 0.06 + months * 60); // late charges + default-rate drift
    const escrow = Math.round(months * payment * 0.22); // advanced taxes/insurance share
    const filed = months > 4;
    const legal = filed ? Math.round(1500 + (months - 4) * 400) : 0;
    const total = missed + interest + escrow + legal;
    const equity = Math.max(0, value - balance - total);
    const startEquity = Math.max(1, value - balance);
    return { missed, interest, escrow, legal, total, equity, startEquity, filed };
  }, [months, payment, value, balance]);

  const segs = [
    { k: 'Missed payments', v: est.missed, c: COLORS.missed },
    { k: 'Interest & late charges', v: est.interest, c: COLORS.interest },
    { k: 'Escrow advances', v: est.escrow, c: COLORS.escrow },
    { k: 'Legal fees & costs', v: est.legal, c: COLORS.legal },
  ].filter((s) => s.v > 0);

  return (
    <div>
      {/* Inputs */}
      <div className="rounded-2xl border-2 border-slate-200 px-6 py-6 mb-8">
        <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
          <p className="font-bold text-slate-900">Months of doing nothing</p>
          <p className="font-serif text-3xl font-bold text-slate-900">{months} <span className="text-base text-slate-400 font-sans">months</span></p>
        </div>
        <input
          type="range" min={1} max={24} value={months}
          onChange={(e) => { setMonths(Number(e.target.value)); if (!touched) { setTouched(true); trackEvent('cost_meter_used'); } }}
          className="w-full accent-amber-500 h-2"
          aria-label="Months of waiting"
        />
        <div className="flex justify-between text-[10px] text-slate-400 font-semibold mt-1">
          <span>1 mo</span><span>a year</span><span>2 years</span>
        </div>
        <div className="grid sm:grid-cols-3 gap-3 mt-5">
          {[
            ['Monthly payment', payment, setPayment, 500, 100],
            ['Home value', value, setValue, 50000, 5000],
            ['Mortgage balance', balance, setBalance, 0, 5000],
          ].map(([label, val, set, min, step]) => (
            <label key={label as string} className="block">
              <span className="text-xs font-semibold text-slate-600">{label as string}</span>
              <input
                type="number" value={val as number} min={min as number} step={step as number}
                onChange={(e) => (set as (n: number) => void)(Math.max(0, Number(e.target.value)))}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Hero numbers */}
      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        <div className="rounded-2xl bg-slate-950 text-white px-6 py-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Estimated cost of waiting {months} {months === 1 ? 'month' : 'months'}</p>
          <p className="font-serif text-4xl font-bold mt-1 text-amber-400">{fmtUsd(est.total)}</p>
          <p className="text-slate-400 text-xs mt-1">added to what it takes to fix or exit</p>
        </div>
        <div className="rounded-2xl border-2 border-slate-200 px-6 py-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Equity still protectable</p>
          <p className={`font-serif text-4xl font-bold mt-1 ${est.equity === 0 ? 'text-red-700' : 'text-slate-900'}`}>{fmtUsd(est.equity)}</p>
          <p className="text-slate-400 text-xs mt-1">
            {est.equity === 0
              ? 'the estimate has consumed the cushion — different playbook, still real options'
              : `of your ${fmtUsd(est.startEquity)} starting cushion`}
          </p>
        </div>
      </div>

      {/* The stack */}
      <div className="rounded-2xl border-2 border-slate-200 px-6 py-6 mb-6">
        <p className="font-bold text-slate-900 mb-4">Where the {fmtUsd(est.total)} goes</p>
        <div className="flex w-full h-9 rounded-lg overflow-hidden bg-slate-100" role="img"
          aria-label={segs.map((s) => `${s.k}: ${fmtUsd(s.v)}`).join(', ')}>
          {segs.map((s) => (
            <div key={s.k} title={`${s.k}: ${fmtUsd(s.v)}`}
              style={{ width: `${(s.v / est.total) * 100}%`, background: s.c }}
              className="border-r-2 border-white last:border-r-0 transition-all duration-300" />
          ))}
        </div>
        <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
          {segs.map((s) => (
            <li key={s.k} className="flex items-center justify-between gap-3 text-sm">
              <span className="flex items-center gap-2 text-slate-700">
                <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: s.c }} aria-hidden />
                {s.k}
              </span>
              <span className="font-bold text-slate-900 tabular-nums">{fmtUsd(s.v)}</span>
            </li>
          ))}
        </ul>
        {est.filed && (
          <p className="text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5 text-xs mt-4">
            Past ~4 months, this estimate assumes a case was filed — attorney fees and court costs
            now stack onto the payoff with each milestone.
          </p>
        )}
      </div>

      {/* Doors */}
      <div className="rounded-2xl border-2 border-slate-200 px-6 py-6 mb-6">
        <p className="font-bold text-slate-900 mb-4">Doors, in the order waiting closes them</p>
        <ul className="space-y-3">
          {DOORS.map((d) => {
            const closed = months >= d.at && d.at > 1;
            const current = !closed && (DOORS.find((x) => months < x.at || x.at === 1) === d || (d.at === 1 && months < 4));
            return (
              <li key={d.label} className={`flex gap-3 items-start rounded-xl px-4 py-3 border ${
                closed ? 'border-slate-200 bg-slate-50 opacity-60' : current ? 'border-amber-300 bg-amber-50' : 'border-slate-200'
              }`}>
                <span className={`mt-0.5 text-lg leading-none ${closed ? '' : 'text-emerald-600'}`} aria-hidden>
                  {closed ? '🔒' : '🚪'}
                </span>
                <span>
                  <span className={`block text-sm font-bold ${closed ? 'text-slate-500 line-through' : 'text-slate-900'}`}>{d.label}</span>
                  <span className="block text-xs text-slate-500 mt-0.5 leading-relaxed">{d.detail}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rounded-2xl bg-slate-950 text-white px-6 py-6 text-center">
        <p className="font-serif text-xl font-bold mb-2">The counter-move is free, today.</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          One call to loss mitigation, one free counselor (800-569-4287), one page with your real
          numbers. Every month earlier is cheaper than this estimate — and the estimate only rises.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
          <Link href="/quiz" className="flex-1 bg-amber-400 text-slate-950 px-6 py-3 rounded-lg font-bold hover:bg-amber-300 transition">
            Rank My Options Free
          </Link>
          <Link href="/my-plan" className="flex-1 border border-slate-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition">
            Print My Battle Plan
          </Link>
        </div>
      </div>

      <p className="text-slate-400 text-xs leading-relaxed mt-6">
        Illustrative estimate only, from the assumptions you set above — not a quote, a prediction,
        or advice. Real arrears grow according to your note, your escrow, and your case&rsquo;s
        milestones; the only real numbers are your servicer&rsquo;s written, itemized reinstatement
        and payoff quotes, which you are entitled to request. General education, not legal or
        financial advice.
      </p>
    </div>
  );
}
