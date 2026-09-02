'use client';

import { useEffect, useState } from 'react';
import { hasOptedOut, setOptedOut, hasGpcSignal } from '../../lib/pixels';

/**
 * "Your privacy choices" — the NJ Data Privacy Act opt-out control, rendered
 * inside the privacy policy. Honest about the current state: no advertising
 * pixels run today, and the toggle is a standing instruction that stays
 * honored if that ever changes. Also tells GPC users their browser has
 * already opted them out, because respecting the signal silently reads as
 * not respecting it at all.
 */
export default function PrivacyChoices() {
  const [optedOut, setOut] = useState(false);
  const [gpc, setGpc] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setOut(hasOptedOut());
    setGpc(hasGpcSignal());
    setReady(true);
  }, []);

  const toggle = () => {
    const next = !optedOut;
    setOptedOut(next);
    setOut(next);
  };

  return (
    <div id="privacy-choices" className="rounded-xl border border-slate-200 bg-slate-50 p-5 not-prose">
      <p className="text-sm text-slate-700 leading-relaxed mb-4">
        As of today, this site runs <span className="font-semibold text-slate-900">no advertising or
        retargeting pixels</span> — nothing here follows you around the internet. This switch is a
        standing instruction: if we ever add advertising tools, your choice below is honored
        automatically, before anything loads.
      </p>
      {ready && gpc ? (
        <p className="text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3">
          Your browser is sending the Global Privacy Control signal, so you are already opted out of
          targeted advertising on this site. Nothing more to do.
        </p>
      ) : (
        <label className="flex items-center gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={ready && optedOut}
            onChange={toggle}
            className="h-5 w-5 accent-slate-900"
          />
          <span className="text-sm font-semibold text-slate-900">
            Opt out of targeted advertising on this site
          </span>
        </label>
      )}
      <p className="text-xs text-slate-500 mt-3 leading-relaxed">
        This choice is stored in your browser on this device. It does not affect the free tools, the
        assessment, or anything else on the site.
      </p>
    </div>
  );
}
