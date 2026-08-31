'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '../../lib/analytics';
import { PARTNERS } from '../../lib/partners';
import { captureAttribution } from '../../lib/attribution';

/**
 * GA4 loader plus automatic outbound-click tracking.
 *
 * Renders nothing at all while GA_MEASUREMENT_ID in lib/analytics.ts is null,
 * so it is safe to keep mounted in the root layout before the property
 * exists. Once the ID is set it:
 *
 *   1. Loads gtag.js and configures the property (page views come free).
 *   2. Listens for clicks anywhere on the page and fires
 *        partner_click  when the destination host belongs to a listed
 *                       company or program (partner_id attached), and
 *        email_click    for mailto: links.
 *
 * The click listener lives here, once, instead of being threaded through
 * every component that renders a partner link. Partner pages, quiz results,
 * comparison tables and anything added later are all covered automatically
 * because the host map is derived from the PARTNERS registry itself.
 */

// "www.firehomebuyers.com" and "firehomebuyers.com" both resolve to the id.
const HOST_TO_PARTNER: Record<string, string> = {};
for (const p of PARTNERS) {
  try {
    const host = new URL(p.url).hostname.toLowerCase();
    HOST_TO_PARTNER[host] = p.id;
    HOST_TO_PARTNER[host.replace(/^www\./, '')] = p.id;
    HOST_TO_PARTNER[`www.${host.replace(/^www\./, '')}`] = p.id;
  } catch {
    // A malformed registry URL should not take analytics down.
  }
}

export default function Analytics() {
  // Campaign attribution is captured regardless of whether GA is configured.
  useEffect(() => {
    captureAttribution();
  }, []);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!anchor || typeof window.gtag !== 'function') return;
      const href = anchor.getAttribute('href') ?? '';

      if (href.startsWith('mailto:')) {
        window.gtag('event', 'email_click', {
          link_url: href.slice(7).split('?')[0],
        });
        return;
      }

      if (/^https?:\/\//i.test(href)) {
        try {
          const host = new URL(href).hostname.toLowerCase();
          const partnerId = HOST_TO_PARTNER[host];
          if (partnerId) {
            window.gtag('event', 'partner_click', {
              partner_id: partnerId,
              link_url: href,
              page_path: window.location.pathname,
            });
          }
        } catch {
          // Unparseable href: nothing to record.
        }
      }
    };

    // Capture phase so the event is recorded even when navigation starts.
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
