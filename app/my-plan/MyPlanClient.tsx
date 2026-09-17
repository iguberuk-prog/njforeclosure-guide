'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '../../lib/analytics';

/**
 * My Plan: a personalized, printable one-page battle plan. Everything runs
 * client-side — the dates never leave the visitor's browser. Deadline math
 * mirrors site conventions (35-day answer, two 30-day adjournments, 10-day
 * redemption) and every date carries the "your documents control" caveat.
 */

type Stage = 'behind' | 'noi' | 'served' | 'judgment' | 'sale';

const STAGE_OPTS: { v: Stage; label: string }[] = [
  { v: 'behind', label: 'I’ve missed payments — nothing filed yet' },
  { v: 'noi', label: 'I got a Notice of Intention (NOI)' },
  { v: 'served', label: 'I was served a court complaint' },
  { v: 'judgment', label: 'Final judgment was entered' },
  { v: 'sale', label: 'A sheriff sale date is scheduled' },
];

function addDays(iso: string, days: number): Date {
  const d = new Date(iso + 'T12:00:00');
  d.setDate(d.getDate() + days);
  return d;
}
function fmt(d: Date): string {
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });
}

interface PlanItem { when: string; what: string; how: string; urgent?: boolean }

export default function MyPlanClient() {
  const [stage, setStage] = useState<Stage>('served');
  const [servedDate, setServedDate] = useState('');
  const [noiDate, setNoiDate] = useState('');
  const [saleDate, setSaleDate] = useState('');
  const [name, setName] = useState('');
  const today = new Date();

  const plan = useMemo<PlanItem[]>(() => {
    const items: PlanItem[] = [];
    const week1 = 'This week';

    items.push({
      when: week1,
      what: 'Call the servicer: "loss mitigation" — request the application',
      how: 'One free call opens modification, forbearance and repayment plans. Note the date, name, and reference number.',
    });
    items.push({
      when: week1,
      what: 'Book a free HUD-approved counselor',
      how: '800-569-4287 or hud.gov. Free by federal design; they assemble the whole package with you.',
    });
    items.push({
      when: week1,
      what: 'Three numbers on one page: home value · total owed · amount behind',
      how: 'These decide which of the 7 options fit. Free math: njforeclosureguide.org/tools/net-proceeds',
    });

    if (stage === 'noi' && noiDate) {
      items.push({
        when: `By ${fmt(addDays(noiDate, 30))}`,
        what: 'NOI window: the cheapest cure the process will ever offer',
        how: 'The notice must state the exact catch-up amount. Paying it in this window generally ends the matter — no legal fees stacked yet.',
        urgent: true,
      });
    }
    if (stage === 'served' || stage === 'noi' || stage === 'behind') {
      if (servedDate) {
        items.push({
          when: `By ${fmt(addDays(servedDate, 35))} (day 35)`,
          what: 'FILE YOUR ANSWER — the most important deadline in the case',
          how: 'Free self-help forms: njcourts.gov. Free lawyers for income-qualifying homeowners: LSNJ 1-888-576-5529. Filing on time keeps every option open.',
          urgent: true,
        });
        items.push({
          when: 'With your answer',
          what: 'Request NJ’s FREE foreclosure mediation',
          how: 'Eligible owner-occupants get a mediator and a lender rep with real settlement authority at one table. Costs nothing.',
        });
      } else if (stage === 'served') {
        items.push({
          when: '35 days from the day you were served',
          what: 'FILE YOUR ANSWER — enter your served date above for the exact day',
          how: 'njcourts.gov forms · LSNJ 1-888-576-5529 (free if income-qualifying).',
          urgent: true,
        });
      }
    }
    if (stage === 'judgment' || stage === 'sale') {
      items.push({
        when: 'Now',
        what: 'Call the county sheriff’s foreclosure unit',
        how: 'Ask two questions: is a sale scheduled, and what is the exact homeowner-adjournment procedure, deadline, and fee. County rules: njforeclosureguide.org/sheriff-sales',
        urgent: true,
      });
      items.push({
        when: 'Now',
        what: 'Get a real valuation — judgment vs. market value is the whole game',
        how: 'If equity exists, a sale you control before the auction pays the judgment and hands you the difference.',
      });
    }
    if (stage === 'sale' && saleDate) {
      items.push({
        when: `Well before ${fmt(new Date(saleDate + 'T12:00:00'))}`,
        what: 'Use your adjournments deliberately',
        how: 'NJ practice generally allows two homeowner adjournments of up to 30 days each — request through the sheriff under your county’s procedure, and decide what each one is buying (a closing, a workout) the day you request it.',
        urgent: true,
      });
      items.push({
        when: `Through ${fmt(addDays(saleDate, 10))} (if the sale happens)`,
        what: '10-day redemption window',
        how: 'Paying the judgment in full within 10 days after the sale undoes it. And if bidding exceeded the judgment, the surplus belongs to you: njforeclosureguide.org/guides/surplus-funds',
      });
    }
    items.push({
      when: 'Always',
      what: 'Pay no one upfront. Sign no deed. Stay in your home.',
      how: 'Upfront fees for foreclosure relief are generally illegal. You have the right to live in your home through the entire court process.',
    });
    return items;
  }, [stage, servedDate, noiDate, saleDate]);

  return (
    <div>
      {/* Controls — hidden in print */}
      <div className="print:hidden rounded-2xl border-2 border-slate-200 px-6 py-6 mb-8">
        <p className="font-bold text-slate-900 mb-1">Build your plan</p>
        <p className="text-slate-500 text-xs mb-4">
          Everything happens in your browser — these dates are never sent anywhere, to us or anyone else.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-xs font-semibold text-slate-600">Where are you in the process?</span>
            <select
              value={stage}
              onChange={(e) => setStage(e.target.value as Stage)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm bg-white"
            >
              {STAGE_OPTS.map((o) => (
                <option key={o.v} value={o.v}>{o.label}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-slate-600">First name for the poster (optional)</span>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Maria"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
          </label>
          {stage === 'noi' && (
            <label className="block">
              <span className="text-xs font-semibold text-slate-600">Date on the Notice of Intention</span>
              <input type="date" value={noiDate} onChange={(e) => setNoiDate(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
            </label>
          )}
          {(stage === 'served' || stage === 'noi' || stage === 'behind') && (
            <label className="block">
              <span className="text-xs font-semibold text-slate-600">Date you were served (if you were)</span>
              <input type="date" value={servedDate} onChange={(e) => setServedDate(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
            </label>
          )}
          {stage === 'sale' && (
            <label className="block">
              <span className="text-xs font-semibold text-slate-600">Scheduled sheriff sale date</span>
              <input type="date" value={saleDate} onChange={(e) => setSaleDate(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
            </label>
          )}
        </div>
        <button
          onClick={() => { trackEvent('my_plan_print', { stage }); window.print(); }}
          className="mt-5 bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition"
        >
          Print My Plan (or Save as PDF)
        </button>
      </div>

      {/* The poster */}
      <div className="rounded-2xl border-2 border-slate-900 overflow-hidden print:border print:rounded-none" id="poster">
        <div className="bg-slate-950 text-white px-6 py-5 flex items-baseline justify-between gap-4 flex-wrap">
          <div>
            <p className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase">
              {name ? `${name}’s` : 'My'} Battle Plan
            </p>
            <p className="font-serif text-2xl font-bold">One page. In order. On the fridge.</p>
          </div>
          <p className="text-slate-400 text-xs">
            Made {today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · njforeclosureguide.org
          </p>
        </div>
        <div className="bg-white px-6 py-5">
          <table className="w-full">
            <tbody>
              {plan.map((p, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 align-top">
                  <td className="py-3 pr-4 whitespace-nowrap">
                    <span className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-md ${
                      p.urgent ? 'bg-amber-100 text-amber-900' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {p.when}
                    </span>
                  </td>
                  <td className="py-3">
                    <p className={`text-sm font-bold ${p.urgent ? 'text-slate-900' : 'text-slate-800'}`}>{p.what}</p>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">{p.how}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 grid sm:grid-cols-3 gap-2 text-center">
            {[
              ['Free counselors', '800-569-4287'],
              ['Free legal (income-qual.)', '1-888-576-5529'],
              ['Everything free', 'njforeclosureguide.org'],
            ].map(([a, b]) => (
              <div key={a} className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{a}</p>
                <p className="text-sm font-bold text-slate-900">{b}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-[10px] leading-relaxed mt-4">
            General education, not legal advice. Deadlines computed from the dates you entered using
            standard NJ rules (35-day answer, adjournment practice, 10-day redemption) — your own
            court documents control your actual dates. Confirm with a licensed NJ attorney or a
            HUD-approved counselor. No promises about the outcome of any case.
          </p>
        </div>
      </div>

      <div className="print:hidden mt-8 text-center">
        <Link href="/case-map" className="text-slate-600 underline underline-offset-4 text-sm hover:text-slate-900">
          Not sure where you are in the process? Open the Case Map →
        </Link>
      </div>

      {/* Print isolation */}
      <style>{`
        @media print {
          header, footer, nav { display: none !important; }
          body * { visibility: hidden; }
          #poster, #poster * { visibility: visible; }
          #poster { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}</style>
    </div>
  );
}
