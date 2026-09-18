'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '../../lib/analytics';
import { STATIONS, ZONE_LABEL, type Station } from '../../lib/case-map-data';

/**
 * The Case Map: a subway-style map of the NJ foreclosure journey. Tap a
 * station and the panel shows what is true right now, which doors are open,
 * which close next, and the free moves. Every legal number matches site
 * conventions (NOI 30 days, 35-day answer, cure to final judgment, two
 * 30-day adjournments, 10-day redemption). Educational, never predictive.
 */


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
