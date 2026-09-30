'use client';

import { useMemo, useState } from 'react';

/**
 * Interactive county view for the NJ Sheriff Sale Index: a tile map
 * (simplified geography, labeled as such, same layout as /nj-map/) plus a
 * ranked bar chart and a table, all driven by one metric toggle.
 *
 * Color: one sequential hue (blue, light -> dark = low -> high), five
 * equal-count bins per metric. Counties not counted get a neutral hatch and
 * the words "not counted", never a data color. Every value is also printed as
 * text, so nothing depends on color alone.
 */

export interface ExplorerRow {
  slug: string;
  name: string;
  population: number;
  openListings: number;
  per100k: number;
  salesNext30: number;
  adjournedPct: number | null;
  sampleSize: number | null;
  soldOrCancelledLast30: number | null;
  change: number | null;
}

type Metric = 'per100k' | 'openListings' | 'adjournedPct';

const METRICS: { key: Metric; label: string; unit: (v: number) => string; blurb: string }[] = [
  { key: 'per100k', label: 'Per 100,000 residents', unit: (v) => v.toFixed(1), blurb: 'Scheduled sheriff sales per 100,000 residents' },
  { key: 'openListings', label: 'Scheduled sales', unit: (v) => v.toLocaleString('en-US'), blurb: 'Scheduled sheriff sales on the county list' },
  { key: 'adjournedPct', label: 'Already adjourned', unit: (v) => `${v}%`, blurb: 'Share of sampled listings already adjourned at least once' },
];

const RAMP = ['#cde2fb', '#86b6ef', '#3987e5', '#1c5cab', '#0d366b'];
const INK_ON = ['#0f172a', '#0f172a', '#ffffff', '#ffffff', '#ffffff'];
const BAR = '#256abf';

const TILES: Record<string, [number, number]> = {
  Sussex: [1, 0], Passaic: [2, 0], Bergen: [3, 0],
  Warren: [0, 1], Morris: [1, 1], Essex: [2, 1], Hudson: [3, 1],
  Hunterdon: [0, 2], Somerset: [1, 2], Union: [2, 2],
  Mercer: [0, 3], Middlesex: [1, 3], Monmouth: [2, 3],
  Burlington: [1, 4], Ocean: [2, 4],
  Gloucester: [0, 5], Camden: [1, 5], Atlantic: [2, 5],
  Salem: [0, 6], Cumberland: [1, 6], 'Cape May': [1, 7],
};
const ABBR: Record<string, string> = {
  Sussex: 'SUS', Passaic: 'PAS', Bergen: 'BER', Warren: 'WAR', Morris: 'MOR', Essex: 'ESX', Hudson: 'HUD',
  Hunterdon: 'HUN', Somerset: 'SOM', Union: 'UNI', Mercer: 'MER', Middlesex: 'MID', Monmouth: 'MON',
  Burlington: 'BUR', Ocean: 'OCN', Gloucester: 'GLO', Camden: 'CAM', Atlantic: 'ATL', Salem: 'SAL',
  Cumberland: 'CUM', 'Cape May': 'CPM',
};

const value = (r: ExplorerRow, m: Metric): number | null => (m === 'adjournedPct' ? r.adjournedPct : r[m]);

export default function IndexExplorer({
  rows,
  notCounted,
  compact = false,
  linkBase = '',
}: {
  rows: ExplorerRow[];
  notCounted: string[];
  compact?: boolean;
  /** Prefix for county links (absolute in the embed so links leave the iframe correctly). */
  linkBase?: string;
}) {
  const [metric, setMetric] = useState<Metric>('per100k');
  const [sel, setSel] = useState<string>(rows[0]?.name ?? '');
  const [view, setView] = useState<'chart' | 'table'>('chart');
  const m = METRICS.find((x) => x.key === metric)!;

  const { bins, sorted, max } = useMemo(() => {
    const vals = rows.map((r) => value(r, metric)).filter((v): v is number => v !== null).sort((a, b) => a - b);
    const q = (p: number) => vals[Math.min(vals.length - 1, Math.floor(p * vals.length))];
    return {
      bins: [q(0.2), q(0.4), q(0.6), q(0.8)],
      sorted: [...rows].sort((a, b) => (value(b, metric) ?? -1) - (value(a, metric) ?? -1)),
      max: vals[vals.length - 1] ?? 1,
    };
  }, [rows, metric]);

  const binOf = (v: number) => bins.filter((b) => v >= b).length;
  const byName = Object.fromEntries(rows.map((r) => [r.name, r]));
  const selRow = byName[sel];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-5" role="group" aria-label="Choose a measure">
        {METRICS.map((x) => (
          <button
            key={x.key}
            type="button"
            onClick={() => setMetric(x.key)}
            aria-pressed={metric === x.key}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
              metric === x.key ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500'
            }`}
          >
            {x.label}
          </button>
        ))}
      </div>

      <div className={`grid ${compact ? 'sm:grid-cols-[260px_1fr]' : 'md:grid-cols-[300px_1fr]'} gap-6 [&>*]:min-w-0`}>
        {/* Tile map */}
        <div>
          <p className="text-sm font-semibold text-slate-900 mb-2">{m.blurb}</p>
          <div className="grid grid-cols-4 gap-1.5 max-w-[300px]">
            {Array.from({ length: 32 }).map((_, i) => {
              const col = i % 4;
              const row = Math.floor(i / 4);
              const name = Object.keys(TILES).find((k) => TILES[k][0] === col && TILES[k][1] === row);
              if (!name) return <div key={i} aria-hidden="true" />;
              const r = byName[name];
              const v = r ? value(r, metric) : null;
              const b = v !== null ? binOf(v) : -1;
              const active = sel === name;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSel(name)}
                  onMouseEnter={() => r && setSel(name)}
                  onFocus={() => r && setSel(name)}
                  aria-label={`${name} County: ${v !== null ? m.unit(v) : 'not counted'}`}
                  className={`aspect-square rounded-md flex flex-col items-center justify-center text-[11px] font-bold leading-tight transition outline-offset-2 ${
                    active ? 'ring-2 ring-slate-900 ring-offset-2' : ''
                  }`}
                  style={
                    b >= 0
                      ? { background: RAMP[b], color: INK_ON[b] }
                      : { background: 'repeating-linear-gradient(45deg,#f1f5f9,#f1f5f9 4px,#e2e8f0 4px,#e2e8f0 8px)', color: '#64748b' }
                  }
                >
                  <span>{ABBR[name]}</span>
                  <span className="font-semibold text-[10px] opacity-90">{v !== null ? m.unit(v) : 'n/c'}</span>
                </button>
              );
            })}
          </div>
          {/* Legend */}
          <div className="mt-3 max-w-[300px]">
            <div className="flex gap-0.5">
              {RAMP.map((c) => (
                <span key={c} className="h-2.5 flex-1 first:rounded-l last:rounded-r" style={{ background: c }} />
              ))}
            </div>
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>Lower</span>
              <span>Higher</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Simplified tile map, not to scale. n/c = not counted ({notCounted.join(', ')} publish outside CivilView).
            </p>
          </div>
        </div>

        {/* Detail + chart/table */}
        <div>
          {selRow && (
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 mb-5" aria-live="polite">
              <p className="font-bold text-slate-900">{selRow.name} County</p>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-slate-700 mt-2">
                <dt>Scheduled sales</dt><dd className="font-semibold text-slate-900 tabular-nums">{selRow.openListings.toLocaleString('en-US')}</dd>
                <dt>Per 100,000 residents</dt><dd className="font-semibold text-slate-900 tabular-nums">{selRow.per100k.toFixed(1)}</dd>
                <dt>Sale date in next 30 days</dt><dd className="font-semibold text-slate-900 tabular-nums">{selRow.salesNext30.toLocaleString('en-US')}</dd>
                {selRow.adjournedPct !== null && (<><dt>Already adjourned (sample)</dt><dd className="font-semibold text-slate-900 tabular-nums">{selRow.adjournedPct}% of {selRow.sampleSize}</dd></>)}
                {selRow.soldOrCancelledLast30 !== null && (<><dt>Sold or cancelled, last 30 days</dt><dd className="font-semibold text-slate-900 tabular-nums">{selRow.soldOrCancelledLast30.toLocaleString('en-US')}</dd></>)}
                {selRow.change !== null && (<><dt>Change vs last month</dt><dd className="font-semibold text-slate-900 tabular-nums">{selRow.change > 0 ? '+' : ''}{selRow.change.toLocaleString('en-US')}</dd></>)}
              </dl>
              <a href={`${linkBase}/sheriff-sales/${selRow.slug}/`} target={linkBase ? '_blank' : undefined} rel={linkBase ? 'noopener' : undefined} className="inline-block mt-3 text-sm font-semibold text-slate-900 underline underline-offset-4">
                {selRow.name} County sheriff sales →
              </a>
            </div>
          )}

          {!compact && (
            <div className="flex gap-2 mb-3 text-sm" role="group" aria-label="Chart or table">
              {(['chart', 'table'] as const).map((v) => (
                <button key={v} type="button" onClick={() => setView(v)} aria-pressed={view === v}
                  className={`px-3 py-1 rounded-md border ${view === v ? 'bg-slate-900 text-white border-slate-900' : 'border-slate-300 text-slate-700'}`}>
                  {v === 'chart' ? 'Chart' : 'Table'}
                </button>
              ))}
            </div>
          )}

          {(view === 'chart' || compact) && (
            <ol className="space-y-1" aria-label={`Counties ranked by ${m.label.toLowerCase()}`}>
              {sorted.map((r, i) => {
                const v = value(r, metric);
                const w = v !== null ? Math.max(2, (v / max) * 100) : 0;
                const active = sel === r.name;
                return (
                  <li key={r.slug}>
                    <button
                      type="button"
                      onClick={() => setSel(r.name)}
                      onMouseEnter={() => setSel(r.name)}
                      onFocus={() => setSel(r.name)}
                      className={`w-full grid grid-cols-[92px_1fr_56px] items-center gap-2 py-1 px-1 rounded text-left text-sm ${active ? 'bg-slate-100' : 'hover:bg-slate-50'}`}
                      title={`${r.name} County: ${v !== null ? m.unit(v) : 'not available'}`}
                    >
                      <span className="text-slate-700 truncate">{i + 1}. {r.name}</span>
                      <span className="h-3.5 bg-slate-100 rounded-r">
                        {v !== null && <span className="block h-3.5 rounded-r" style={{ width: `${w}%`, background: BAR, opacity: active ? 1 : 0.85 }} />}
                      </span>
                      <span className="text-right tabular-nums font-semibold text-slate-900">{v !== null ? m.unit(v) : '—'}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          )}

          {view === 'table' && !compact && (
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-sm">
                <caption className="sr-only">County figures for the NJ Sheriff Sale Index</caption>
                <thead className="bg-slate-50 text-left text-slate-600">
                  <tr>
                    <th scope="col" className="px-3 py-2 font-semibold">County</th>
                    <th scope="col" className="px-3 py-2 font-semibold text-right">Scheduled</th>
                    <th scope="col" className="px-3 py-2 font-semibold text-right">Per 100k</th>
                    <th scope="col" className="px-3 py-2 font-semibold text-right">Next 30 days</th>
                    <th scope="col" className="px-3 py-2 font-semibold text-right">Adjourned</th>
                    <th scope="col" className="px-3 py-2 font-semibold text-right">Population</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {sorted.map((r) => (
                    <tr key={r.slug}>
                      <td className="px-3 py-2 text-slate-900">{r.name}</td>
                      <td className="px-3 py-2 text-right tabular-nums">{r.openListings.toLocaleString('en-US')}</td>
                      <td className="px-3 py-2 text-right tabular-nums font-semibold text-slate-900">{r.per100k.toFixed(1)}</td>
                      <td className="px-3 py-2 text-right tabular-nums">{r.salesNext30.toLocaleString('en-US')}</td>
                      <td className="px-3 py-2 text-right tabular-nums">{r.adjournedPct !== null ? `${r.adjournedPct}%` : '—'}</td>
                      <td className="px-3 py-2 text-right tabular-nums">{r.population.toLocaleString('en-US')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
