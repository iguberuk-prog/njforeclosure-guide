'use client';

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { SHERIFF_SOURCES } from '../../../lib/sheriff-sales';
import { countdown, parseDay } from '../../../lib/countdown';
import { trackEvent } from '../../../lib/analytics';

/**
 * "When is my sheriff sale?" Runs entirely in the browser: nothing typed here
 * is stored or sent (one analytics event with the tool name only). County
 * facts come from lib/sheriff-sales.ts (verified official sources); monthly
 * numbers are passed in from the server page (aggregates only).
 */

export interface CountyMonth {
  slug: string;
  openListings: number;
  nextSale: string | null;
  adjournedShare: string | null; // e.g. "11 of 15" or "73%"
}

const fmtLong = (d: Date) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });
const fmtIso = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric', year: 'numeric' });
const todayLocal = () => {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
};

export default function SaleDateFinder({ months, asOf }: { months: CountyMonth[]; asOf: string }) {
  const [county, setCounty] = useState('');
  const [date, setDate] = useState('');
  const [used, setUsed] = useState('0');
  const tracked = useRef(false);
  const touch = () => {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent('calculator_use', { tool: 'sheriff-sale-date' });
    }
  };

  const src = SHERIFF_SOURCES.find((s) => s.slug === county);
  const month = months.find((m) => m.slug === county);
  const sale = parseDay(date);
  const c = useMemo(() => (sale ? countdown(sale, todayLocal(), Number(used)) : null), [date, used]); // eslint-disable-line react-hooks/exhaustive-deps
  const link = 'text-slate-900 underline underline-offset-4 font-semibold';

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 p-5">
        <label htmlFor="finder-county" className="block text-sm font-semibold text-slate-800 mb-1.5">
          1. Which county is the home in?
        </label>
        <select
          id="finder-county"
          value={county}
          onChange={(e) => { touch(); setCounty(e.target.value); }}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg text-lg text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
        >
          <option value="">Choose your county…</option>
          {SHERIFF_SOURCES.map((s) => <option key={s.slug} value={s.slug}>{s.county} County</option>)}
        </select>
      </div>

      {src && (
        <div className="rounded-2xl border-2 border-slate-900 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">2. Look it up</p>
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Where {src.county} County lists its sales</h2>
          <a
            href={src.salesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-400 text-slate-950 px-6 py-3 rounded-lg font-bold hover:bg-amber-300 transition mb-5"
          >
            Open the official {src.county} County list →
          </a>
          {src.usesCivilView ? (
            <ol className="list-decimal pl-5 space-y-1.5 text-slate-700 leading-relaxed mb-4">
              <li>Keep the view on upcoming (open) sales, not sold or cancelled ones.</li>
              <li>Search by the property&apos;s street address, or by the defendant&apos;s name as it appears on your court papers. You can also filter by city.</li>
              <li>Open the listing&apos;s details. The sale date shown is the current one, and the status history shows any adjournments.</li>
            </ol>
          ) : (
            <p className="text-slate-700 leading-relaxed mb-4">
              {src.county}{' '}County publishes its own list on the sheriff&apos;s website rather than CivilView. Look for the property
              address or the defendant&apos;s name and note the scheduled date.
            </p>
          )}
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong className="text-slate-900">Prefer to call?</strong>{' '}
            {src.phone ? (
              <>The {src.county}{' '}County Sheriff&apos;s office is at <a href={`tel:+1${src.phone.replace(/\D/g, '').slice(-10)}`} className={link}>{src.phone}</a>.</>
            ) : (
              <>Use the contact details on the <a href={src.sheriffUrl} target="_blank" rel="noopener noreferrer" className={link}>sheriff&apos;s website</a>.</>
            )}{' '}
            Have your docket number (it starts with &ldquo;F-&rdquo;) or the sheriff&apos;s number from your notice ready.
          </p>
          {month && (
            <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900">This month in {src.county} County</strong> (as of {asOf}):{' '}
              {month.openListings.toLocaleString('en-US')} sales scheduled
              {month.nextSale ? `, next sale date on the list ${fmtIso(month.nextSale)}` : ''}.
              {month.adjournedShare ? ` In our sample, ${month.adjournedShare} listings had already been adjourned at least once, so dates move often.` : ''}
            </div>
          )}
          <p className="text-sm mt-4">
            <Link href={`/sheriff-sales/${src.slug}/`} className={link}>Everything about {src.county} County sheriff sales</Link>
          </p>
        </div>
      )}

      {src && (
        <div className="rounded-2xl border border-slate-200 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">3. Found your date?</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="finder-date" className="block text-sm font-semibold text-slate-800 mb-1.5">Sale date on the list</label>
              <input
                id="finder-date"
                type="date"
                value={date}
                onChange={(e) => { touch(); setDate(e.target.value); }}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-lg font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
            <div>
              <label htmlFor="finder-used" className="block text-sm font-semibold text-slate-800 mb-1.5">Adjournments you have already requested</label>
              <select
                id="finder-used"
                value={used}
                onChange={(e) => { touch(); setUsed(e.target.value); }}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-lg text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                <option value="0">None</option>
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
            </div>
          </div>
          {c && sale && (
            <div className={`rounded-xl border px-5 py-4 ${c.phase === 'passed' ? 'bg-slate-100 border-slate-300' : c.daysLeft <= 14 ? 'bg-red-50 border-red-300' : 'bg-amber-50 border-amber-300'}`}>
              {c.phase === 'passed' ? (
                <p className="text-slate-800 leading-relaxed">
                  That date has passed. If the sale went ahead, there is generally a 10-day window for objections and
                  redemption, and surplus money may be yours.{' '}
                  <Link href="/guides/after-sheriff-sale" className={link}>What to do after a sale</Link>.
                </p>
              ) : (
                <>
                  <p className="font-serif text-3xl font-bold text-slate-900">
                    {c.daysLeft === 0 ? 'Today' : `${c.daysLeft} day${c.daysLeft === 1 ? '' : 's'} left`}
                  </p>
                  <p className="text-slate-700 mt-1">Sale date: {fmtLong(sale)}</p>
                  <p className="text-slate-700 mt-2 leading-relaxed">
                    {c.adjournmentsLeft > 0
                      ? `You generally have ${c.adjournmentsLeft} statutory adjournment${c.adjournmentsLeft === 1 ? '' : 's'} left, which could move the sale to about ${fmtLong(c.latestWithAdjournments)}. The sheriff sets the actual new date.`
                      : 'Your two statutory adjournments appear to be used. Further postponements generally need a court order, so talk to an attorney or Legal Services of New Jersey (1-888-576-5529) now.'}
                  </p>
                </>
              )}
              <Link
                href={`/tools/sheriff-sale-countdown/?date=${date}&county=${src.slug}&used=${used}`}
                className="inline-block mt-4 bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition"
              >
                Build my plan in the countdown →
              </Link>
            </div>
          )}
        </div>
      )}

      {src && (
        <div className="rounded-2xl border border-slate-200 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Not on the list?</p>
          <h2 className="font-bold text-slate-900 text-lg mb-3">Common reasons you can&apos;t find a sale</h2>
          <ul className="space-y-3 text-slate-700 leading-relaxed">
            <li>
              <strong className="text-slate-900">No final judgment yet.</strong> A sale can only be scheduled after the court enters
              final judgment. If you are earlier in the case, see{' '}
              <Link href="/tools/timeline" className={link}>where you are in the timeline</Link>.
            </li>
            <li>
              <strong className="text-slate-900">Judgment, but not scheduled yet.</strong> After judgment the court issues a writ of
              execution to the sheriff, and scheduling can take a while. You should receive notice before the sale.
            </li>
            <li>
              <strong className="text-slate-900">Listed under another name.</strong>{' '}Properties are listed under the defendant&apos;s
              name, which may be a prior owner, a deceased owner or an estate. Search by street address instead.
            </li>
            <li>
              <strong className="text-slate-900">The date moved.</strong>{' '}Adjourned sales get a new date. Check the listing&apos;s status
              history, or call the sheriff&apos;s office.
            </li>
          </ul>
        </div>
      )}

      <p className="text-slate-400 text-xs leading-relaxed">
        Nothing you enter here is saved or sent anywhere. Dates shown are estimates; the county sheriff sets actual sale and
        adjournment dates, and the official list is always the authority.
      </p>
    </div>
  );
}
