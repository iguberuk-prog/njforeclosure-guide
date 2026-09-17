'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '../../lib/analytics';

/**
 * The Case Map: a subway-style map of the NJ foreclosure journey. Tap a
 * station and the panel shows what is true right now, which doors are open,
 * which close next, and the free moves. Every legal number matches site
 * conventions (NOI 30 days, 35-day answer, cure to final judgment, two
 * 30-day adjournments, 10-day redemption). Educational, never predictive.
 */

interface Station {
  id: string;
  name: string;
  sub: string;
  zone: 'early' | 'case' | 'late' | 'after';
  trueNow: string[];
  doorsOpen: string[];
  closingNext: string;
  freeMoves: string[];
}

const STATIONS: Station[] = [
  {
    id: 'missed',
    name: 'Missed Payments',
    sub: 'Months 1–4 · no case exists',
    zone: 'early',
    trueNow: [
      'No lawsuit exists. Most lenders don’t file until a loan is around 120 days behind.',
      'Late fees are accruing, and the servicer’s letters are required outreach, not yet legal papers.',
    ],
    doorsOpen: [
      'Every option: repayment plan, forbearance, modification, refinance, or an unhurried sale.',
      'Reinstatement at its cheapest — no attorney fees on the arrears yet.',
    ],
    closingNext: 'The quiet window itself: around 120 days of delinquency, the lender can send the formal warning and then file.',
    freeMoves: [
      'Call the servicer and say "loss mitigation" — ask for the application.',
      'Book a free HUD counselor: 800-569-4287.',
      'Put your three numbers on one page: home value, balance, amount behind.',
    ],
  },
  {
    id: 'noi',
    name: 'Notice of Intention',
    sub: 'The 30-day warning',
    zone: 'early',
    trueNow: [
      'This is a required warning, not a lawsuit — NJ law demands it at least 30 days before any complaint.',
      'It must state the exact amount that catches you up.',
    ],
    doorsOpen: [
      'Curing during the window (paying the stated amount) generally ends the matter before a case exists.',
      'The full loss-mitigation menu, still without legal fees.',
    ],
    closingNext: 'After 30 days, the lender can file a complaint in Superior Court and legal fees start stacking onto the debt.',
    freeMoves: [
      'Keep the letter and envelope — its details have legal significance.',
      'Get the loss-mitigation application moving this week.',
      'Calendar day 30 so nothing that follows surprises you.',
    ],
  },
  {
    id: 'served',
    name: 'Complaint Served',
    sub: 'The 35-day clock starts',
    zone: 'case',
    trueNow: [
      'You are now a defendant in a Superior Court case — and you have the legal right to live in your home through the entire process.',
      'You generally have 35 days from service to file an answer.',
    ],
    doorsOpen: [
      'Answering — the single most consequential move in the case. It keeps you a participant and slows the calendar.',
      'Requesting NJ’s free foreclosure mediation (eligible owner-occupants).',
      'Loss mitigation continues in parallel; selling remains fully available.',
    ],
    closingNext: 'Day 35. Silence sends the case to default processing on the lender’s schedule.',
    freeMoves: [
      'File an answer — free self-help forms at njcourts.gov; LSNJ (1-888-576-5529) defends income-qualifying homeowners at no cost.',
      'Request the free mediation seat when you answer.',
      'Do not move out.',
    ],
  },
  {
    id: 'fork',
    name: 'The Fork',
    sub: 'Answered · or default entered',
    zone: 'case',
    trueNow: [
      'Answered: you get notice of every motion, standing to contest amounts, and a slower, contested calendar.',
      'Defaulted: the case moves administratively — faster, without your voice. Serious, not final.',
    ],
    doorsOpen: [
      'A default can sometimes be vacated for good cause — easier before final judgment than after.',
      'The Fair Foreclosure Act’s right to cure the arrears runs to final judgment either way.',
      'Complete loss-mitigation applications carry review protections.',
    ],
    closingNext: 'The motion for final judgment — served on you, with a window to object to the amounts.',
    freeMoves: [
      'If defaulted: call LSNJ now about a motion to vacate.',
      'Submit a COMPLETE application — completeness is what the protections attach to.',
      'Get your equity number: value minus payoff. It decides the playbook.',
    ],
  },
  {
    id: 'mediation',
    name: 'Mediation',
    sub: 'The free table · runs alongside',
    zone: 'case',
    trueNow: [
      'NJ’s Foreclosure Mediation Assistance Program is free for eligible owner-occupants.',
      'The lender must send a representative with settlement authority — a person whose yes counts.',
    ],
    doorsOpen: [
      'Modification reviews with live timelines, repayment plans, agreed sale time, structured exits with dates.',
      'Free housing-counselor support to build your package.',
    ],
    closingNext: 'Nothing closes here — but mediation works with whatever time and options remain, so later means less.',
    freeMoves: [
      'Arrive with a complete, current financial package and a specific ask.',
      'Capture every outcome as an agreement with dates.',
    ],
  },
  {
    id: 'judgment',
    name: 'Final Judgment',
    sub: 'The debt is fixed',
    zone: 'late',
    trueNow: [
      'The court has fixed the total owed and authorized a sheriff sale. You still own the home and have the right to live in it.',
      'The statutory right to cure the arrears ends at this entry — later fixes mean paying the judgment in full.',
    ],
    doorsOpen: [
      'Selling: a closing before the auction pays the judgment and hands you the remaining equity.',
      'Adjournments of the sale (generally two, up to 30 days each) once one is scheduled.',
      'Loss mitigation can continue, though flexibility shrinks this late.',
    ],
    closingNext: 'The writ of execution passes the case to the county sheriff for sale scheduling.',
    freeMoves: [
      'Read the judgment amount carefully — it’s the payoff figure every move is measured against.',
      'Get a real valuation. Judgment vs. market value is now the whole game.',
    ],
  },
  {
    id: 'scheduled',
    name: 'Sale Scheduled',
    sub: 'A date is on paper',
    zone: 'late',
    trueNow: [
      'The county sheriff has set an auction date — and dates move constantly; lender adjournments are routine.',
      'Your county’s procedure and fee for homeowner adjournments is a phone call away.',
    ],
    doorsOpen: [
      'Two homeowner adjournments of up to 30 days each, as a general matter — plus court-ordered time for cause.',
      'A cash sale can close inside a single adjournment; a listing under contract can finish on the runway.',
      'Bankruptcy’s automatic stay (attorney territory — deliberate, never midnight).',
    ],
    closingNext: 'The auction itself. Everything after it is narrower.',
    freeMoves: [
      'Call the sheriff’s foreclosure unit today: exact adjournment procedure, deadline, fee.',
      'Verify the date against the county’s own listings, weekly.',
      'Decide what each adjournment is buying before you spend it.',
    ],
  },
  {
    id: 'sale',
    name: 'Sheriff Sale',
    sub: 'The auction + 10-day redemption',
    zone: 'after',
    trueNow: [
      'The plaintiff bids its judgment without cash (a credit bid); third parties bid against that floor.',
      'New Jersey allows 10 days after the sale to redeem by paying the judgment in full.',
    ],
    doorsOpen: [
      'Redemption — narrow, but real.',
      'Surplus funds: every dollar a winning bid exceeds the judgment belongs to junior lienholders, then you.',
    ],
    closingNext: 'The deed is delivered after the redemption window; ownership changes, occupancy does not.',
    freeMoves: [
      'Check the sale result against the judgment amount — surplus is the most abandoned asset in the process.',
      'Do not surrender keys to anyone on a verbal promise.',
    ],
  },
  {
    id: 'after',
    name: 'After the Sale',
    sub: 'Possession, cash for keys, surplus',
    zone: 'after',
    trueNow: [
      'Removal runs through a court possession process with notice — never a same-day event.',
      'Tenants keep their own strong NJ protections; a sale does not void a tenancy.',
    ],
    doorsOpen: [
      'Cash-for-keys: negotiable on amount, date, and terms — in writing, keys last.',
      'Surplus-funds claims through the court.',
      'Housing on your own timeline — negotiate the move-out date against a lease you’ve lined up.',
    ],
    closingNext: 'Time itself: addresses go stale and claims get harder. Collect what’s yours promptly.',
    freeMoves: [
      'Read our surplus funds guide before signing with any percentage-fee "recovery" firm.',
      'If locks change on an occupied home, document everything and call LSNJ: 1-888-576-5529.',
    ],
  },
];

const ZONE_LABEL: Record<Station['zone'], string> = {
  early: 'BEFORE A CASE EXISTS',
  case: 'THE COURT CASE',
  late: 'AFTER JUDGMENT',
  after: 'THE SALE & AFTER',
};

const ZONE_COLOR: Record<Station['zone'], string> = {
  early: 'bg-emerald-600',
  case: 'bg-blue-700',
  late: 'bg-amber-600',
  after: 'bg-slate-700',
};

export default function CaseMapClient() {
  const [sel, setSel] = useState<string>('served');
  const st = STATIONS.find((s) => s.id === sel)!;
  const idx = STATIONS.findIndex((s) => s.id === sel);

  return (
    <div className="grid lg:grid-cols-[300px_1fr] gap-8">
      {/* The line */}
      <div>
        <ol className="relative">
          {STATIONS.map((s, i) => {
            const zoneFirst = i === 0 || STATIONS[i - 1].zone !== s.zone;
            const active = s.id === sel;
            return (
              <li key={s.id}>
                {zoneFirst && (
                  <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 mt-5 mb-2 first:mt-0">
                    {ZONE_LABEL[s.zone]}
                  </p>
                )}
                <button
                  onClick={() => { setSel(s.id); trackEvent('case_map_station', { station: s.id }); }}
                  className={`relative w-full text-left flex items-start gap-3 rounded-xl px-3 py-2.5 transition ${
                    active ? 'bg-slate-900 text-white shadow-lg' : 'hover:bg-slate-100'
                  }`}
                  aria-pressed={active}
                >
                  <span className="relative flex flex-col items-center pt-1">
                    <span
                      className={`w-4 h-4 rounded-full border-4 ${ZONE_COLOR[s.zone]} ${
                        active ? 'border-amber-400 scale-125' : 'border-white ring-1 ring-slate-300'
                      } transition-transform`}
                    />
                    {i < STATIONS.length - 1 && (
                      <span className="w-1 h-6 bg-slate-300 rounded-full mt-0.5" aria-hidden />
                    )}
                  </span>
                  <span className="min-w-0">
                    <span className={`block font-bold text-sm ${active ? 'text-white' : 'text-slate-900'}`}>{s.name}</span>
                    <span className={`block text-xs mt-0.5 ${active ? 'text-slate-300' : 'text-slate-500'}`}>{s.sub}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* The panel */}
      <div className="lg:sticky lg:top-6 self-start">
        <div className="rounded-2xl border-2 border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-b from-slate-950 to-slate-900 text-white px-6 py-5">
            <p className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
              Station {idx + 1} of {STATIONS.length} · {ZONE_LABEL[st.zone]}
            </p>
            <h2 className="font-serif text-2xl font-bold">{st.name}</h2>
            <p className="text-slate-300 text-sm mt-0.5">{st.sub}</p>
          </div>
          <div className="px-6 py-5 space-y-5 bg-white">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">What&rsquo;s true right now</p>
              {st.trueNow.map((t, i) => (
                <p key={i} className="text-slate-700 text-sm leading-relaxed mb-1.5">{t}</p>
              ))}
            </div>
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-2">Doors still open</p>
              {st.doorsOpen.map((t, i) => (
                <p key={i} className="text-slate-700 text-sm leading-relaxed mb-1.5">{t}</p>
              ))}
            </div>
            <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1">Closing next</p>
              <p className="text-slate-700 text-sm leading-relaxed">{st.closingNext}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Your free moves</p>
              <ul className="space-y-1.5">
                {st.freeMoves.map((t, i) => (
                  <li key={i} className="text-slate-700 text-sm leading-relaxed flex gap-2">
                    <span className="text-amber-600 font-bold flex-shrink-0">→</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <Link href="/quiz" className="flex-1 text-center bg-slate-900 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition text-sm">
                Rank My Options — Free, 2 Min
              </Link>
              <Link href="/my-plan" className="flex-1 text-center border border-slate-300 text-slate-800 px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-50 transition text-sm">
                Print My Battle Plan
              </Link>
            </div>
          </div>
        </div>
        <p className="text-slate-400 text-xs leading-relaxed mt-4">
          General education, not legal advice or a prediction about any case. Your own court
          documents control your dates; a licensed NJ attorney can confirm what applies to you.
        </p>
      </div>
    </div>
  );
}
