'use client';

import { useEffect, useState } from 'react';

const REPORT_ID = '9d1e2fc8-dc13-410d-a3fa-988c9746739e';
const EMBED_URL = `https://datastudio.google.com/embed/reporting/${REPORT_ID}/page/tEnnC`;
const REPORT_URL = `https://datastudio.google.com/reporting/${REPORT_ID}`;
const GA4 = 'https://analytics.google.com/analytics/web/#/a402514556p551898253';

const LINKS = [
  { label: 'Open full dashboard', href: REPORT_URL },
  { label: 'Live visitors now (GA4)', href: `${GA4}/realtime/overview` },
  { label: 'Clicks and quiz events (GA4)', href: `${GA4}/reports/explorer?r=events-v2` },
  { label: 'Search Console', href: 'https://search.google.com/search-console?resource_id=https%3A%2F%2Fnjforeclosureguide.org%2F' },
];

/**
 * "Don't count me" switch: sets a flag in this browser that the GA4 loader
 * (app/components/Analytics.tsx) checks before sending anything, so the
 * owner's own visits stop showing up as traffic. Per browser, per device.
 */
const FLAG = 'njfg_internal';

export default function AdminClient() {
  const [excluded, setExcluded] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      setExcluded(localStorage.getItem(FLAG) === '1');
    } catch {
      setExcluded(false);
    }
  }, []);

  const toggle = () => {
    try {
      if (excluded) localStorage.removeItem(FLAG);
      else localStorage.setItem(FLAG, '1');
      setExcluded(!excluded);
    } catch {
      // Storage blocked (private window): nothing to persist.
    }
  };

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="bg-slate-950 text-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <p className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase">Owner only</p>
            <h1 className="font-serif text-2xl font-bold">NJ Foreclosure Guide · Visitor dashboard</h1>
          </div>
          <nav className="flex flex-wrap gap-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-white/10 hover:bg-white/20 px-3 py-2 rounded-md"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 text-sm text-slate-600">
          <p>
            Sign in with your Google account if asked. Numbers update on their own; GA4 runs a few hours behind,
            use &ldquo;Live visitors now&rdquo; for this minute.
          </p>
          {excluded !== null && (
            <button
              type="button"
              onClick={toggle}
              className={`shrink-0 px-3 py-2 rounded-md border ${
                excluded ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : 'bg-white border-slate-300 text-slate-800'
              }`}
            >
              {excluded ? 'This browser is not counted in GA4 ✓' : "Don't count my visits from this browser"}
            </button>
          )}
        </div>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden" style={{ height: '82vh' }}>
          <iframe
            title="Visitor dashboard"
            src={EMBED_URL}
            className="w-full h-full border-0"
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
          />
        </div>
        <p className="text-xs text-slate-500 mt-3">
          If the frame says you need access, open the full dashboard with the button above; your browser may be
          blocking Google sign-in inside frames.
        </p>
      </div>
    </main>
  );
}
