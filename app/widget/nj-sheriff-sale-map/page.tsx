import type { Metadata } from 'next';
import IndexExplorer from '../../reports/nj-foreclosure-index/IndexExplorer';
import { REPORT } from '../../../lib/sheriff-report';
import { ROWS, STATE, EDITION } from '../../../lib/foreclosure-index';
import { fitTitle } from '../../../lib/seo';

/**
 * Iframe target for the embeddable NJ Sheriff Sale Index map. Bare (no site
 * header) and noindex, like the other widgets: the SEO value is the backlink
 * from the embedding site. Links open the main site in a new tab.
 */

export const metadata: Metadata = {
  title: fitTitle('NJ Sheriff Sale Index Map'),
  robots: { index: false, follow: true },
};

const BASE = 'https://njforeclosureguide.org';

export default function SheriffSaleMapWidget() {
  return (
    <div className="min-h-screen bg-white p-4">
      <p className="font-serif text-xl font-bold text-slate-900">NJ sheriff sales by county</p>
      <p className="text-slate-500 text-xs mb-4">
        Scheduled foreclosure sheriff sales, {EDITION} (data as of {STATE.asOf}).
      </p>
      <IndexExplorer rows={ROWS} notCounted={REPORT.notIncluded.map((n) => n.name)} compact linkBase={BASE} />
      <p className="text-slate-500 text-xs mt-4">
        Source:{' '}
        <a href={`${BASE}/reports/nj-foreclosure-index/`} target="_blank" rel="noopener" className="underline underline-offset-2 font-semibold text-slate-700">
          NJ Sheriff Sale Index, NJ Foreclosure Guide
        </a>
        . Scheduled sales, not completed sales.
      </p>
    </div>
  );
}
