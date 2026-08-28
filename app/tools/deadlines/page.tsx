'use client';

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import { trackEvent } from '../../../lib/analytics';

/**
 * Deadline estimator. The user picks the newest document they received and
 * the date printed on it; the tool projects the dates that flow from it
 * under New Jersey law.
 *
 * Accuracy rules for this file:
 *  - Only project intervals that are actually in NJ law: 30 days after NOI
 *    before a complaint may be filed; 35 days to answer after service; at
 *    least 14 days' notice before final judgment is sought after default;
 *    two adjournments of up to 30 days each; 10-day redemption window after
 *    the sale.
 *  - Everything else ("typically weeks/months") is a range in words, never a
 *    fake-precise date.
 *  - Every projected date is labeled "earliest" or "estimated", and the page
 *    says to read the real deadline off the document itself. This is a map,
 *    not a docket.
 */

type DocKey = 'noi' | 'complaint' | 'default' | 'judgment' | 'sale';

const DOCS: { key: DocKey; label: string; dateLabel: string }[] = [
  { key: 'noi', label: 'Notice of Intention to Foreclose (NOI)', dateLabel: 'Date on the notice' },
  { key: 'complaint', label: 'Summons and Complaint', dateLabel: 'Date you were served' },
  { key: 'default', label: 'Entry of Default', dateLabel: 'Date on the default notice' },
  { key: 'judgment', label: 'Final Judgment of Foreclosure', dateLabel: 'Date judgment was entered' },
  { key: 'sale', label: 'Notice of Sheriff Sale', dateLabel: 'Scheduled sale date' },
];

function addDays(d: Date, days: number): Date {
  const r = new Date(d);
  r.setDate(r.getDate() + days);
  return r;
}

const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

interface Projection {
  label: string;
  date: Date | null;
  note: string;
  urgent?: boolean;
}

export default function DeadlinesPage() {
  const [doc, setDoc] = useState<DocKey | ''>('');
  const [dateStr, setDateStr] = useState('');
  const tracked = useRef(false);

  const onChange = (fn: () => void) => {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent('calculator_use', { tool: 'deadlines' });
    }
    fn();
  };

  const projections: Projection[] | null = useMemo(() => {
    if (!doc || !dateStr) return null;
    const d = new Date(`${dateStr}T00:00:00`);
    if (isNaN(d.getTime())) return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    switch (doc) {
      case 'noi':
        return [
          {
            label: 'Earliest date a foreclosure complaint can be filed',
            date: addDays(d, 30),
            note: 'The Fair Foreclosure Act requires at least 30 days between the NOI and any court filing. Many lenders wait longer, but plan around this date.',
          },
          {
            label: 'Your best window to apply for loss mitigation',
            date: null,
            note: 'Right now, before any case exists. Applications made in this window have the best approval odds, and every option is still on the table.',
            urgent: true,
          },
        ];
      case 'complaint':
        return [
          {
            label: 'Your answer is due',
            date: addDays(d, 35),
            note: '35 days from service to file an answer with the court. Filing one, especially with defenses, keeps the case contested. After this date the lender can ask the court to enter default.',
            urgent: true,
          },
          {
            label: 'Mediation eligibility',
            date: null,
            note: 'With a case filed, you can request the free New Jersey Foreclosure Mediation Program now. It runs alongside the lawsuit.',
          },
          {
            label: 'Realistic horizon',
            date: null,
            note: 'Even uncontested New Jersey foreclosures typically take many months from filing to any sale. A contested case takes longer. This is working time, not a verdict.',
          },
        ];
      case 'default':
        return [
          {
            label: 'Notice before final judgment',
            date: null,
            note: 'After default, the lender must send notice at least 14 days before applying for final judgment, and you generally retain the right to cure (pay the arrears) up until final judgment is entered.',
            urgent: true,
          },
          {
            label: 'Window to move to vacate the default',
            date: null,
            note: 'Courts can set aside a default for good cause, and sooner is dramatically better than later. This is a this-week conversation with an attorney, not a someday one.',
          },
        ];
      case 'judgment':
        return [
          {
            label: 'Sheriff sale scheduling',
            date: null,
            note: 'After judgment, the sheriff schedules and advertises the sale, which typically takes a number of weeks. Check your county on our sheriff sale directory for the actual date.',
          },
          {
            label: 'Adjournment runway if a sale is scheduled',
            date: null,
            note: 'You are generally entitled to two adjournments of up to 30 days each, requested through the sheriff, and courts can grant more. Combined with scheduling time, plans that close before auction remain possible.',
            urgent: true,
          },
        ];
      case 'sale': {
        const passed = d < today;
        return [
          {
            label: passed ? 'The listed sale date has passed' : 'Scheduled sale date',
            date: d,
            note: passed
              ? 'If the sale went forward, the redemption window below may still be open. If you are not sure the sale actually happened (they adjourn constantly), check your county listings today.'
              : 'Confirm this date on your county’s official listings; sales adjourn frequently and the printed date is often stale.',
            urgent: !passed,
          },
          {
            label: 'Latest the sale could run with your two adjournments',
            date: addDays(d, 60),
            note: 'New Jersey homeowners are generally entitled to two adjournments of up to 30 days each. Requested and granted, they move the auction roughly this far, which is time enough to close a sale or file Chapter 13.',
          },
          {
            label: 'Estimated end of the redemption window',
            date: addDays(d, 10),
            note: 'After a sale actually occurs, New Jersey law gives 10 days in which the homeowner may still redeem by paying the judgment in full, and objections to the sale can be raised.',
          },
        ];
      }
      default:
        return null;
    }
  }, [doc, dateStr]);

  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Free tool · Nothing you enter leaves this page
          </p>
          <h1 className="font-serif text-4xl font-bold mb-4 tracking-tight">
            Your Deadlines, From the Letter in Your Hand
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Pick the newest document you received and the date printed on it. New Jersey&apos;s
            deadlines flow from there.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          <label className="block">
            <span className="block text-sm font-semibold text-slate-700 mb-1.5">
              Newest document you received
            </span>
            <select
              value={doc}
              onChange={(e) => onChange(() => setDoc(e.target.value as DocKey))}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="">Choose a document…</option>
              {DOCS.map((d) => (
                <option key={d.key} value={d.key}>{d.label}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="block text-sm font-semibold text-slate-700 mb-1.5">
              {DOCS.find((d) => d.key === doc)?.dateLabel ?? 'Date on the document'}
            </span>
            <input
              type="date"
              value={dateStr}
              onChange={(e) => onChange(() => setDateStr(e.target.value))}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-900 bg-white"
            />
          </label>
        </div>

        {projections && (
          <div className="space-y-4 mb-10">
            {projections.map((p, i) => (
              <div
                key={i}
                className={`rounded-2xl border px-6 py-5 ${p.urgent ? 'border-amber-400 bg-amber-50/60' : 'border-slate-200'}`}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  {p.label}
                </p>
                {p.date && (
                  <p className="font-serif text-2xl font-bold text-slate-900 mb-2">{fmtDate(p.date)}</p>
                )}
                <p className="text-slate-600 text-sm leading-relaxed">{p.note}</p>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/quiz" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold text-center hover:bg-amber-300 transition">
                See My Options, Free
              </Link>
              <Link href={doc ? `/documents/${doc === 'noi' ? 'notice-of-intention' : doc === 'complaint' ? 'summons-and-complaint' : doc === 'default' ? 'entry-of-default' : doc === 'judgment' ? 'final-judgment' : 'notice-of-sheriff-sale'}/` : '/documents'} className="border border-slate-300 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-slate-50 transition">
                What this document means
              </Link>
            </div>
          </div>
        )}

        <p className="text-slate-400 text-xs leading-relaxed">
          Estimates from New Jersey&apos;s general statutory intervals, not legal advice and not a
          substitute for the deadlines printed on your own court papers, which control. Courts and
          sheriffs set actual dates; always confirm with your county and, ideally, a licensed New
          Jersey attorney.
        </p>
      </section>
    </div>
  );
}
