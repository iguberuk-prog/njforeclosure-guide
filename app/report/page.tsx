import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import MarsNotice from '../components/MarsNotice';
import { OG_IMAGES } from '../../lib/og';
import { fitTitle, fitDescription } from '../../lib/seo';

/**
 * /report — The New Jersey Foreclosure Report.
 *
 * The site's flagship citable page: every number carries its source inline,
 * charts are hand-built SVG (no client JS), and the page explicitly invites
 * journalists and researchers to cite it with a link. The editorial spine is
 * the one genuinely newsworthy finding in the 2026 data: filings are up 21%
 * AND the foreclosure clock is the fastest it has been since 2013 — the
 * years-long runway NJ homeowners count on is shrinking from both ends.
 *
 * Same rule as /statistics: no number without a citation, ever. Figures
 * verified against the cited sources on the date below.
 */

const LAST_VERIFIED = 'September 23, 2026';

export const metadata: Metadata = {
  title: fitTitle('The New Jersey Foreclosure Report 2026 | Data & Trends'),
  description:
    fitDescription('The citable numbers on New Jersey foreclosure in 2026: 8,269 filings in the first half (up 21%), the 7th-highest state rate, Trenton ranked the #1 metro rate in the U.S. in January, and a national foreclosure clock at its fastest since 2013. Every figure sourced.'),
  alternates: { canonical: 'https://njforeclosureguide.org/report/' },
  openGraph: {
    images: OG_IMAGES,
    title: 'The New Jersey Foreclosure Report 2026',
    description:
      'Filings up 21%, the 7th-highest state rate, and the fastest foreclosure clock since 2013. Every figure sourced and free to cite.',
    url: 'https://njforeclosureguide.org/report/',
  },
};

const reportSchema = {
  '@context': 'https://schema.org',
  '@type': 'Report',
  name: 'The New Jersey Foreclosure Report 2026',
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  url: 'https://njforeclosureguide.org/report/',
  publisher: { '@type': 'Organization', name: 'NJ Foreclosure Guide', url: 'https://njforeclosureguide.org' },
  about: 'New Jersey residential foreclosure filings, rates, county patterns and timelines in 2026, compiled from ATTOM Data market reports and New Jersey Courts publications.',
};

/* ---------- sourced figures (update only together with their source) ---------- */

const S = {
  attomMidYear: {
    name: 'ATTOM Mid-Year 2026 Foreclosure Market Report (July 16, 2026)',
    url: 'https://www.attomdata.com/news/market-trends/foreclosures/2026-mid-year-foreclosure-market-report/',
  },
  attomAug: {
    name: 'ATTOM U.S. Foreclosure Rates by State, August 2026',
    url: 'https://www.attomdata.com/news/most-recent/foreclosure-rates-by-state/',
  },
  attomJanViaNjbia: {
    name: 'ATTOM January 2026 monthly report, via NJBIA (February 27, 2026)',
    url: 'https://njbia.org/trenton-records-highest-foreclosure-rate-among-us-cities/',
  },
  njCourts: {
    name: 'New Jersey Courts (October 2023)',
    url: 'https://www.njcourts.gov/press-releases/2023/10/new-jersey-courts-help-residents-risk-of-foreclosure',
  },
};

// H1 filings: 2026 and 2025 are ATTOM-published; the 2024 bar is derived from
// ATTOM's stated +2.39% change vs H1 2024 (8,269 / 1.0239 ≈ 8,076).
const H1_BARS = [
  { label: 'H1 2024', value: 8076, note: 'derived', color: '#94a3b8' },
  { label: 'H1 2025', value: 6826, color: '#94a3b8' },
  { label: 'H1 2026', value: 8269, color: '#1d4ed8' },
];

const CLOCK_BARS = [
  { label: 'NJ average, completed foreclosures (Q1 2023)', value: 1697, color: '#1d4ed8' },
  { label: 'U.S. average, completed foreclosures (Q2 2026)', value: 563, color: '#d97706' },
];

const WATCHLIST = [
  { county: 'Salem', months: 'January + August 2026' },
  { county: 'Cumberland', months: 'January + August 2026' },
  { county: 'Mercer', months: 'January 2026 (Trenton: #1 U.S. metro rate)' },
  { county: 'Atlantic', months: 'January 2026' },
  { county: 'Camden', months: 'August 2026' },
  { county: 'Gloucester', months: 'August 2026' },
];

function SourceLine({ s, period }: { s: { name: string; url: string }; period?: string }) {
  return (
    <p className="text-xs text-slate-400 mt-2">
      Source:{' '}
      <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-slate-600">
        {s.name}
      </a>
      {period ? ` · ${period}` : null}
    </p>
  );
}

function H1Chart() {
  const max = 9000;
  const W = 640, H = 300, PAD = 8, plotH = 230, barW = 140, gap = 56;
  const x0 = (W - (H1_BARS.length * barW + (H1_BARS.length - 1) * gap)) / 2;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="New Jersey foreclosure filings in the first half of each year: about 8,076 in 2024, 6,826 in 2025, and 8,269 in 2026" className="w-full h-auto">
      {H1_BARS.map((b, i) => {
        const h = (b.value / max) * plotH;
        const x = x0 + i * (barW + gap);
        const y = PAD + plotH - h;
        return (
          <g key={b.label}>
            <rect x={x} y={y} width={barW} height={h} rx={6} fill={b.color} />
            <text x={x + barW / 2} y={y - 10} textAnchor="middle" fontSize={22} fontWeight={700} fill="#0f172a">
              {b.value.toLocaleString()}{b.note ? '*' : ''}
            </text>
            <text x={x + barW / 2} y={PAD + plotH + 26} textAnchor="middle" fontSize={16} fill="#475569">
              {b.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function ClockChart() {
  const max = 1800;
  const W = 640, H = 170, barH = 44, gap = 34, labelW = 0;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Average days to complete a foreclosure: New Jersey 1,697 days as of early 2023 versus the national average of 563 days in mid-2026" className="w-full h-auto">
      {CLOCK_BARS.map((b, i) => {
        const w = (b.value / max) * (W - 120);
        const y = 12 + i * (barH + gap);
        return (
          <g key={b.label}>
            <rect x={0} y={y} width={w} height={barH} rx={6} fill={b.color} />
            <text x={w + 12} y={y + barH / 2 + 7} fontSize={22} fontWeight={700} fill="#0f172a">
              {b.value.toLocaleString()} days
            </text>
            <text x={0} y={y + barH + 20} fontSize={14} fill="#475569">
              {b.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function ReportPage() {
  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }} />
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            2026 Edition · Every Figure Sourced
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            The New Jersey Foreclosure Report
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Filings are up 21% — and the foreclosure clock is the fastest it has been since 2013.
            The years-long runway New Jersey homeowners count on is shrinking from both ends. Here
            are the numbers, with their sources.
          </p>
          <p className="text-slate-500 text-xs mt-6">Figures verified against cited sources on {LAST_VERIFIED}.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* headline tiles */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            ['8,269', 'NJ filings, first half of 2026', 'up 21% vs. H1 2025'],
            ['1 in 459', 'NJ homes with a filing, H1 2026', '7th-highest state rate'],
            ['#1 in the U.S.', 'Trenton metro foreclosure rate', 'January 2026 (1 in 1,087 units)'],
          ].map(([a, b, c]) => (
            <div key={b as string} className="rounded-2xl border-2 border-slate-200 px-5 py-5 text-center">
              <p className="font-serif text-3xl font-bold text-slate-900">{a}</p>
              <p className="text-sm text-slate-600 mt-1">{b}</p>
              <p className="text-xs font-semibold text-amber-700 mt-1">{c}</p>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Filings are back to pre-lull levels</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          New Jersey recorded <strong className="text-slate-900">8,269 foreclosure filings in the first half of 2026</strong> —
          a 21.14% jump from the 6,826 filings of H1 2025, and slightly above the same period of
          2024. Nationally the first half brought 227,548 filings (up 21%), 164,566 foreclosure
          starts (up 18%), and 27,983 completed bank repossessions (up 33%). The post-pandemic
          lull is over; the letters and the door-knockers are back.
        </p>
        <div className="rounded-2xl border-2 border-slate-200 px-6 py-6 mb-2">
          <p className="text-sm font-bold text-slate-900 mb-4">NJ foreclosure filings, first half of each year</p>
          <H1Chart />
          <p className="text-xs text-slate-400 mt-2">*H1 2024 derived from ATTOM&rsquo;s stated +2.39% change between H1 2024 and H1 2026.</p>
          <SourceLine s={S.attomMidYear} period="January–June 2026" />
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3 mt-12">The clock is speeding up — that is the real story</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          For a decade, the defining fact of New Jersey foreclosure was time: as of early 2023 a
          completed NJ foreclosure averaged <strong className="text-slate-900">1,697 days</strong> — about four and a half
          years. By mid-2026 the national average had fallen to <strong className="text-slate-900">563 days, the fastest
          since 2013</strong>, and timelines have been compressing everywhere as courts clear backlogs.
          Every strategy available to a homeowner — mediation, modification, a controlled sale —
          runs on that clock. It still exists, but it is no longer safe to assume years of it.
        </p>
        <div className="rounded-2xl border-2 border-slate-200 px-6 py-6 mb-2">
          <p className="text-sm font-bold text-slate-900 mb-4">Average days from first filing to completed foreclosure</p>
          <ClockChart />
          <p className="text-xs text-slate-400 mt-2">
            The two figures cover different periods and areas — ATTOM&rsquo;s last NJ-specific average predates the recent
            acceleration — but the direction is unambiguous: the runway is shortening.
          </p>
          <SourceLine s={S.attomMidYear} period="NJ figure: ATTOM Q1 2023 report; U.S. figure: Q2 2026" />
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3 mt-12">The county watchlist</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          ATTOM&rsquo;s monthly state tables in 2026 keep flagging the same South Jersey and
          capital-region counties for the highest filing rates — and in January, the{' '}
          <strong className="text-slate-900">Trenton metro area posted the single highest foreclosure rate of any U.S.
          metro over 200,000 people</strong> (1 in 1,087 housing units). In August 2026, New Jersey as a
          whole recorded 1,109 filings (1 in 3,419 units, 17th among states that month).
        </p>
        <div className="grid sm:grid-cols-3 gap-3 mb-2">
          {WATCHLIST.map((w) => (
            <div key={w.county} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="font-bold text-slate-900">{w.county} County</p>
              <p className="text-xs text-slate-500 mt-0.5">Flagged: {w.months}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mb-1">
          Counties named among New Jersey&rsquo;s highest foreclosure rates in ATTOM&rsquo;s 2026 monthly reports.
        </p>
        <SourceLine s={S.attomAug} period="August 2026" />
        <SourceLine s={S.attomJanViaNjbia} period="January 2026" />

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3 mt-12">The long view</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Roughly <strong className="text-slate-900">16,000 new foreclosure cases</strong> reach the New Jersey courts in a
          typical recent year — a fraction of the 200,000+ complaints filed during the 2007–2012
          crisis, but enough to keep New Jersey at or near the top of national rate rankings: tied
          for 2nd in 2024 (1 in 267 homes), 6th in 2025 (1 in 273), 7th at mid-2026. High filing
          rates are structural in New Jersey, not a blip — a judicial process, dense housing, and
          high carrying costs see to that.
        </p>
        <SourceLine s={S.njCourts} period="Court-year figures as of October 2023" />
        <SourceLine s={S.attomMidYear} period="Rate rankings 2024–2026" />

        <div className="rounded-2xl bg-slate-950 text-white px-8 py-8 mt-12">
          <h2 className="font-serif text-2xl font-bold mb-3">What this means if you are behind</h2>
          <p className="text-slate-300 leading-relaxed mb-5">
            More filings and a faster clock point the same direction: the options that save homes —
            free court mediation, loss mitigation, a controlled sale — reward the people who start
            early. Every free tool on this site exists for exactly that.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/command-center" className="bg-amber-400 text-slate-950 px-6 py-3 rounded-full font-bold hover:bg-amber-300 transition">
              Open Your Command Center
            </Link>
            <Link href="/statistics" className="border border-white/30 px-6 py-3 rounded-full font-bold hover:bg-white/10 transition">
              All sourced statistics
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 px-6 py-5 mt-8">
          <p className="text-sm font-bold text-slate-900 mb-1">Journalists &amp; researchers</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            These figures are compiled from the public sources cited above and are free to use with
            attribution and a link to this page. For questions about the data or New Jersey&rsquo;s
            foreclosure process, write to{' '}
            <a href="mailto:help@njforeclosureguide.org" className="underline underline-offset-2 font-semibold">help@njforeclosureguide.org</a>
            {' '}— we reply within one business day.
          </p>
        </div>
      </article>

      <MarsNotice />
    </div>
  );
}
