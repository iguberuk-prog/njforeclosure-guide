import type { Metadata } from 'next';
import WidgetClient from './WidgetClient';
import { fitTitle, fitDescription } from '../../../lib/seo';

/**
 * The iframe target for the embeddable timeline checker. Deliberately bare:
 * no site header, no notices beyond the widget's own disclaimer line (the
 * full disclosures live one click away on the main site). noindex so the
 * bare widget never competes with real pages in search — the SEO value of
 * the widget is the backlink from the EMBEDDING site, not this URL.
 */

export const metadata: Metadata = {
  title: fitTitle('NJ Foreclosure Timeline Checker'),
  robots: { index: false, follow: true },
};

export default function WidgetPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <WidgetClient />
    </div>
  );
}
