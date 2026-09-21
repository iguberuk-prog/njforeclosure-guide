'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '../../lib/analytics';
import { SHERIFF_SOURCES } from '../../lib/sheriff-sales';
import { NJ_COUNTIES } from '../../lib/nj-locations';
import { helpFor } from '../../lib/local-help';
import { BLOG_COUNTIES } from '../../lib/county-blog';

/**
 * The NJ Foreclosure Map: a tile-grid map of all 21 counties (deliberately
 * simplified geography, and labeled as such — honest cartography over fake
 * precision). Tap a county for its verified machinery: sheriff contacts and
 * sale listings, the free local orgs, and the county's own pages. Every
 * fact comes from the site's verified registries; nothing is invented here.
 */

// Tile positions [col, row] on a 4x7 grid, approximating NJ's real layout.
const TILES: Record<string, [number, number]> = {
  Sussex: [1, 0], Passaic: [2, 0], Bergen: [3, 0],
  Warren: [0, 1], Morris: [1, 1], Essex: [2, 1], Hudson: [3, 1],
  Hunterdon: [0, 2], Somerset: [1, 2], Union: [2, 2],
  Mercer: [0, 3], Middlesex: [1, 3], Monmouth: [2, 3],
  Burlington: [1, 4], Ocean: [2, 4],
  Gloucester: [0, 5], Camden: [1, 5], Atlantic: [2, 5],
  Salem: [0, 6], Cumberland: [1, 6], 'Cape May': [1, 7] as [number, number],
};

const ABBR: Record<string, string> = {
  Sussex: 'SUS', Passaic: 'PAS', Bergen: 'BER', Warren: 'WAR', Morris: 'MOR',
  Essex: 'ESX', Hudson: 'HUD', Hunterdon: 'HUN', Somerset: 'SOM', Union: 'UNI',
  Mercer: 'MER', Middlesex: 'MID', Monmouth: 'MON', Burlington: 'BUR',
  Ocean: 'OCN', Gloucester: 'GLO', Camden: 'CAM', Atlantic: 'ATL',
  Salem: 'SAL', Cumberland: 'CUM', 'Cape May': 'CPM',
};

export default function NjMapClient() {
  const [sel, setSel] = useState<string>('Essex');
  const sheriff = SHERIFF_SOURCES.find((s) => s.county === sel)!;
  const county = NJ_COUNTIES.find((c) => c.name === sel)!;
  const orgs = helpFor(sel).slice(0, 4);
  const hasBlogSeries = BLOG_COUNTIES.some((c) => c.name === sel);

  return (
    <div className="grid lg:grid-cols-[380px_1fr] gap-8">
      {/* The tile map */}
      <div>
        <div className="grid grid-cols-4 gap-1.5 max-w-[380px]">
          {Array.from({ length: 32 }).map((_, i) => {
            const col = i % 4, row = Math.floor(i / 4);
            const name = Object.keys(TILES).find((k) => TILES[k][0] === col && TILES[k][1] === row);
            if (!name) return <div key={i} aria-hidden />;
            const active = name === sel;
            return (
              <button
                key={i}
                onClick={() => { setSel(name); trackEvent('nj_map_county', { county: name }); }}
                aria-pressed={active}
                aria-label={`${name} County`}
                className={`aspect-square rounded-lg flex flex-col items-center justify-center transition font-bold ${
                  active
                    ? 'bg-amber-400 text-slate-950 shadow-lg scale-105'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="text-sm sm:text-base leading-none">{ABBR[name]}</span>
                <span className={`text-[8px] sm:text-[9px] font-semibold mt-1 leading-none ${active ? 'text-slate-800' : 'text-slate-500'}`}>
                  {name.length > 8 ? name.slice(0, 8) + '.' : name}
                </span>
              </button>
            );
          })}
        </div>
        <p className="text-slate-400 text-xs mt-3 max-w-[380px] leading-relaxed">
          Simplified tile layout — positions approximate real geography. Every county&rsquo;s data
          below is verified against official sources.
        </p>
      </div>

      {/* County panel */}
      <div className="lg:sticky lg:top-6 self-start">
        <div className="rounded-2xl border-2 border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-b from-slate-950 to-slate-900 text-white px-6 py-5">
            <p className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
              County seat: {county.seat}
            </p>
            <h2 className="font-serif text-2xl font-bold">{sel} County</h2>
            <p className="text-slate-400 text-xs mt-1">
              {county.towns.slice(0, 5).join(' · ')}{county.towns.length > 5 ? ' · …' : ''}
            </p>
          </div>
          <div className="bg-white px-6 py-5 space-y-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">The sheriff sale machinery</p>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <a href={sheriff.salesUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-900 underline underline-offset-4">
                    Official {sel} County sale listings →
                  </a>
                  {sheriff.usesCivilView && <span className="text-slate-400 text-xs"> (CivilView)</span>}
                </li>
                {sheriff.phone && (
                  <li className="text-slate-700">
                    Sheriff&rsquo;s office: <span className="font-semibold">{sheriff.phone}</span>
                    <span className="block text-xs text-slate-500">Ask for the foreclosure unit — and the exact homeowner-adjournment procedure, deadline, and fee.</span>
                  </li>
                )}
                {sheriff.address && <li className="text-slate-500 text-xs">{sheriff.address}</li>}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Free help serving {sel} County</p>
              <ul className="space-y-2">
                {orgs.map((o) => (
                  <li key={o.name} className="text-sm">
                    <a href={o.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-900 underline underline-offset-4">{o.name}</a>
                    <span className="block text-xs text-slate-500 leading-relaxed">{o.what}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">{sel} County on this site</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
                <Link href={`/foreclosure-help/${sheriff.slug}`} className="font-semibold text-slate-900 underline underline-offset-4">Free local help page</Link>
                <Link href={`/sheriff-sales/${sheriff.slug}`} className="font-semibold text-slate-900 underline underline-offset-4">Sale rules, decoded</Link>
                {hasBlogSeries && (
                  <Link href={`/blog/foreclosure-${sheriff.slug.replace('-county', '')}-county-playbook`} className="font-semibold text-slate-900 underline underline-offset-4">
                    The {sel} County playbook (5-part series)
                  </Link>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="/command-center" className="flex-1 text-center bg-slate-900 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition text-sm">
                Build My {sel} County Dashboard
              </Link>
              <Link href="/quiz" className="flex-1 text-center border border-slate-300 text-slate-800 px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-50 transition text-sm">
                Rank My 7 Options — Free
              </Link>
            </div>
          </div>
        </div>
        <p className="text-slate-400 text-xs leading-relaxed mt-4">
          Contacts and links verified against each organization&rsquo;s own site (dates on our county
          pages). Sale calendars move constantly — always confirm against the official listing.
          General education, not legal advice.
        </p>
      </div>
    </div>
  );
}
