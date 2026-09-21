'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '../../lib/analytics';
import EmailPlan from '../components/EmailPlan';
import { STATIONS, ZONE_LABEL } from '../../lib/case-map-data';
import { SHERIFF_SOURCES } from '../../lib/sheriff-sales';
import { helpFor } from '../../lib/local-help';
import { NJ_COUNTIES } from '../../lib/nj-locations';

/**
 * The Command Center: three questions in, a personal dashboard out.
 * Everything is client-side — answers and dates never leave the browser.
 * Station intel comes from the shared Case Map data; county intel from the
 * verified sheriff and local-help registries.
 */

type Goal = 'keep' | 'sell' | 'time' | 'unsure';

const STAGE_TO_STATION: Record<string, string> = {
  behind: 'missed', noi: 'noi', served: 'served', answered: 'fork',
  judgment: 'judgment', sale: 'scheduled', sold: 'sale',
};

const STAGES: { v: string; label: string }[] = [
  { v: 'behind', label: 'Missed payments — nothing filed' },
  { v: 'noi', label: 'Got a Notice of Intention' },
  { v: 'served', label: 'Served a court complaint' },
  { v: 'answered', label: 'Case is underway (answered or defaulted)' },
  { v: 'judgment', label: 'Final judgment entered' },
  { v: 'sale', label: 'Sheriff sale date scheduled' },
  { v: 'sold', label: 'The sale already happened' },
];

const GOALS: { v: Goal; label: string }[] = [
  { v: 'keep', label: 'Keep my home' },
  { v: 'sell', label: 'Sell and protect my equity' },
  { v: 'time', label: 'I need more time' },
  { v: 'unsure', label: 'I honestly don’t know yet' },
];

const GOAL_PLAYS: Record<Goal, { t: string; d: string; h: string }[]> = {
  keep: [
    { t: 'Loss mitigation, complete and early', d: 'One free application opens modification, forbearance and repayment plans. Completeness is what moves files — a free HUD counselor (800-569-4287) builds it with you.', h: '/guides/loan-modification' },
    { t: 'The free mediation seat', d: 'Eligible owner-occupants get a mediator and a lender rep with real settlement authority at one table. Requested when you answer.', h: '/answers/what-is-the-mediation-program' },
    { t: 'Reinstatement / cure', d: 'Catching up the arrears generally ends the case — the right runs to final judgment. Get the exact written quote; family money used like a deal can fund it.', h: '/answers/how-much-to-reinstate-my-mortgage' },
  ],
  sell: [
    { t: 'Your equity number, first', d: 'Market value minus the true payoff. Free calculator — every decision after this is arithmetic.', h: '/tools/net-proceeds' },
    { t: 'A sale that beats the auction', d: 'A closing before the sale date pays the judgment and hands you the difference at market price, not auction mechanics.', h: '/sell-house-before-sheriff-sale' },
    { t: 'Speed vs. price, honestly', d: 'Cash closes in weeks below market; a listing brings more with runway. Compare offers against your own number — never against fear.', h: '/compare' },
  ],
  time: [
    { t: 'The answer (if inside 35 days)', d: 'Filing on time is the single biggest time lever in the case — contested cases move substantially slower.', h: '/answers/how-long-to-respond-to-complaint' },
    { t: 'Sale adjournments', d: 'Generally two postponements of up to 30 days each through your county sheriff, plus routine lender adjournments during active reviews.', h: '/answers/can-i-stop-a-sheriff-sale' },
    { t: 'A complete application under review', d: 'Dual-tracking rules restrict foreclosing past a complete application received early enough. Completeness, in writing, is the shield.', h: '/blog/dual-tracking-what-banks-can-and-cant-do' },
  ],
  unsure: [
    { t: 'The 2-minute quiz', d: 'Answer a few questions and get all 7 options ranked for your case, with honest math.', h: '/quiz' },
    { t: 'The Case Map', d: 'See the whole line — what’s true at your station, which doors are open, what closes next.', h: '/case-map' },
    { t: 'One free human', d: 'A HUD counselor (800-569-4287) turns panic into a sequence in a one-hour appointment. Free by federal design.', h: '/professionals' },
  ],
};

function addDays(iso: string, days: number): Date {
  const d = new Date(iso + 'T12:00:00');
  d.setDate(d.getDate() + days);
  return d;
}
const fmt = (d: Date) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });

export default function CommandClient() {
  const [stage, setStage] = useState('');
  const [county, setCounty] = useState('');
  const [goal, setGoal] = useState<Goal | ''>('');
  const [servedDate, setServedDate] = useState('');
  const [saleDate, setSaleDate] = useState('');

  // Accept ?stage= from the homepage hero chips.
  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search).get('stage');
      if (q && STAGES.some((s) => s.v === q)) setStage(q);
    } catch { /* no-op */ }
  }, []);

  const ready = stage && county && goal;
  const station = useMemo(() => STATIONS.find((s) => s.id === STAGE_TO_STATION[stage]) ?? null, [stage]);
  const sheriff = useMemo(() => SHERIFF_SOURCES.find((s) => s.county === county) ?? null, [county]);
  const orgs = useMemo(() => (county ? helpFor(county).slice(0, 5) : []), [county]);
  const countySlug = sheriff?.slug ?? '';

  const deadlines = useMemo(() => {
    const out: { label: string; date: string; note: string }[] = [];
    if (servedDate) out.push({
      label: 'Answer deadline (day 35)',
      date: fmt(addDays(servedDate, 35)),
      note: 'File anything responsive by this date — njcourts.gov forms, or LSNJ (1-888-576-5529) free if income-qualifying.',
    });
    if (saleDate) {
      out.push({
        label: 'Scheduled sheriff sale',
        date: fmt(new Date(saleDate + 'T12:00:00')),
        note: 'Verify weekly against the county’s own listings — dates move constantly.',
      });
      out.push({
        label: 'Redemption window closes (if the sale happens)',
        date: fmt(addDays(saleDate, 10)),
        note: 'NJ allows 10 days after the sale to redeem by paying the judgment in full.',
      });
    }
    return out;
  }, [servedDate, saleDate]);

  useEffect(() => {
    if (ready) trackEvent('command_center_ready', { stage, county, goal });
  }, [ready, stage, county, goal]);

  return (
    <div>
      {/* The three questions */}
      <div className="rounded-2xl border-2 border-slate-200 px-6 py-6 mb-8">
        <div className="grid sm:grid-cols-3 gap-4">
          <label className="block">
            <span className="text-xs font-semibold text-slate-600">1 · Where are you?</span>
            <select value={stage} onChange={(e) => setStage(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm bg-white">
              <option value="">Choose your stage…</option>
              {STAGES.map((s) => <option key={s.v} value={s.v}>{s.label}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-slate-600">2 · Which county?</span>
            <select value={county} onChange={(e) => setCounty(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm bg-white">
              <option value="">Choose your county…</option>
              {NJ_COUNTIES.map((c) => <option key={c.slug} value={c.name}>{c.name}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-slate-600">3 · What do you want?</span>
            <select value={goal} onChange={(e) => setGoal(e.target.value as Goal)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm bg-white">
              <option value="">Choose a goal…</option>
              {GOALS.map((g) => <option key={g.v} value={g.v}>{g.label}</option>)}
            </select>
          </label>
        </div>
        <p className="text-slate-400 text-xs mt-3">
          Private by design: your answers and dates stay in your browser — nothing is sent to us or anyone else.
        </p>
      </div>

      {!ready ? (
        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-8 py-14 text-center">
          <p className="font-serif text-2xl font-bold text-slate-900 mb-2">Three answers build your dashboard.</p>
          <p className="text-slate-500 text-sm">Stage · county · goal — then everything below assembles for your case.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Station intel */}
          {station && (
            <div className="rounded-2xl border-2 border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-b from-slate-950 to-slate-900 text-white px-6 py-4">
                <p className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase">{ZONE_LABEL[station.zone]} · your station</p>
                <p className="font-serif text-xl font-bold">{station.name} <span className="text-slate-400 text-sm font-sans font-normal">— {station.sub}</span></p>
              </div>
              <div className="grid md:grid-cols-3 gap-0 bg-white">
                <div className="px-5 py-4 border-b md:border-b-0 md:border-r border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">True right now</p>
                  <p className="text-slate-700 text-sm leading-relaxed">{station.trueNow[0]}</p>
                </div>
                <div className="px-5 py-4 border-b md:border-b-0 md:border-r border-slate-100 bg-emerald-50/50">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 mb-2">Biggest open door</p>
                  <p className="text-slate-700 text-sm leading-relaxed">{station.doorsOpen[0]}</p>
                </div>
                <div className="px-5 py-4 bg-amber-50/50">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-amber-800 mb-2">Closing next</p>
                  <p className="text-slate-700 text-sm leading-relaxed">{station.closingNext}</p>
                </div>
              </div>
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100">
                <Link href="/case-map" className="text-sm font-semibold text-slate-900 underline underline-offset-4">
                  See your full station briefing on the Case Map →
                </Link>
              </div>
            </div>
          )}

          {/* Deadlines */}
          <div className="rounded-2xl border-2 border-slate-200 px-6 py-5">
            <p className="font-bold text-slate-900 mb-1">Your clock</p>
            <p className="text-slate-500 text-xs mb-4">Add the dates you have — deadlines compute here, privately.</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">Date served (if you were)</span>
                <input type="date" value={servedDate} onChange={(e) => setServedDate(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">Sheriff sale date (if scheduled)</span>
                <input type="date" value={saleDate} onChange={(e) => setSaleDate(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
              </label>
            </div>
            {deadlines.length > 0 ? (
              <ul className="space-y-2">
                {deadlines.map((d) => (
                  <li key={d.label} className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
                    <p className="text-sm font-bold text-slate-900">{d.label}: <span className="text-amber-800">{d.date}</span></p>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{d.note}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-400 text-sm">No dates yet — the general clocks still apply: 35 days to answer after service; cure right to final judgment; two 30-day sale adjournments as a general matter.</p>
            )}
            <p className="mt-3">
              <Link href="/my-plan" className="text-sm font-semibold text-slate-900 underline underline-offset-4">
                Turn this into a printable one-page battle plan →
              </Link>
            </p>
          </div>

          {/* County intel */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-slate-200 px-6 py-5">
              <p className="font-bold text-slate-900 mb-3">{county} County: the machinery</p>
              {sheriff ? (
                <ul className="space-y-2 text-sm">
                  <li><a className="text-slate-900 font-semibold underline underline-offset-4" href={sheriff.salesUrl} target="_blank" rel="noopener noreferrer">Official sheriff sale listings →</a></li>
                  {sheriff.phone && <li className="text-slate-700">Sheriff&rsquo;s office: <span className="font-semibold">{sheriff.phone}</span> — ask for the foreclosure unit and the exact adjournment procedure.</li>}
                  {sheriff.address && <li className="text-slate-500 text-xs">{sheriff.address}</li>}
                  <li>
                    <Link href={`/sheriff-sales/${countySlug}`} className="text-slate-900 font-semibold underline underline-offset-4">
                      {county} County sale rules, decoded →
                    </Link>
                  </li>
                </ul>
              ) : (
                <p className="text-slate-500 text-sm">County details on the sheriff pages.</p>
              )}
            </div>
            <div className="rounded-2xl border-2 border-slate-200 px-6 py-5">
              <p className="font-bold text-slate-900 mb-3">Free help near you</p>
              <ul className="space-y-2">
                {orgs.map((o) => (
                  <li key={o.name} className="text-sm">
                    <a href={o.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-900 underline underline-offset-4">{o.name}</a>
                    <span className="block text-xs text-slate-500 leading-relaxed">{o.what}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                <Link href={`/foreclosure-help/${countySlug}`} className="text-sm font-semibold text-slate-900 underline underline-offset-4">
                  Everything free in {county} County →
                </Link>
              </p>
            </div>
          </div>

          {/* Goal plays */}
          {goal && (
            <div className="rounded-2xl border-2 border-slate-200 px-6 py-5">
              <p className="font-bold text-slate-900 mb-4">
                Your goal: <span className="text-amber-700">{GOALS.find((g) => g.v === goal)!.label.toLowerCase()}</span> — the three plays
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                {GOAL_PLAYS[goal].map((p, i) => (
                  <Link key={p.t} href={p.h} className="rounded-xl border border-slate-200 px-4 py-4 hover:border-slate-400 transition group">
                    <p className="text-[10px] font-bold text-amber-700 mb-1">PLAY {i + 1}</p>
                    <p className="font-bold text-slate-900 text-sm group-hover:underline underline-offset-4">{p.t}</p>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{p.d}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <EmailPlan
            sourcePage="/command-center"
            planText={
              'My NJ foreclosure command center summary\n\n' +
              'Stage: ' + (STAGES.find((s) => s.v === stage)?.label ?? '') + '\n' +
              'County: ' + county + ' County\n' +
              'Goal: ' + (GOALS.find((g) => g.v === goal)?.label ?? '') + '\n\n' +
              (deadlines.length ? 'MY DATES:\n' + deadlines.map((d) => '• ' + d.label + ': ' + d.date).join('\n') + '\n\n' : '') +
              (station ? 'WHERE I AM: ' + station.name + ' — ' + station.sub + '\nClosing next: ' + station.closingNext + '\n\n' : '') +
              (goal ? 'MY 3 PLAYS:\n' + GOAL_PLAYS[goal].map((p, i) => (i + 1) + '. ' + p.t + ' — ' + p.d).join('\n') + '\n\n' : '') +
              'Free counselors: 800-569-4287 · Free legal (income-qualifying): 1-888-576-5529\n' +
              'Educational only — my court documents control my actual dates.'
            }
          />

          {/* Action row */}
          <div className="rounded-2xl bg-slate-950 text-white px-6 py-6">
            <p className="font-serif text-xl font-bold mb-4 text-center">Do one thing before you close this tab.</p>
            <div className="grid sm:grid-cols-3 gap-2">
              <Link href="/quiz" className="text-center bg-amber-400 text-slate-950 px-4 py-3 rounded-lg font-bold hover:bg-amber-300 transition text-sm">
                Rank All 7 Options — Free
              </Link>
              <Link href="/free-checklist" className="text-center border border-slate-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-slate-800 transition text-sm">
                Download the Survival Kit
              </Link>
              <Link href="/companies" className="text-center border border-slate-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-slate-800 transition text-sm">
                Get Real Offers to Compare
              </Link>
            </div>
          </div>

          <p className="text-slate-400 text-xs leading-relaxed">
            General education assembled from your three answers — not legal advice, not a prediction,
            and not a substitute for your own court documents, which control your actual dates.
            Licensed NJ professionals (a HUD counselor: 800-569-4287; LSNJ: 1-888-576-5529) can
            confirm what applies to your case.
          </p>
        </div>
      )}
    </div>
  );
}
