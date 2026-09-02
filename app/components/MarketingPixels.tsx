'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { META_PIXEL_ID, GOOGLE_ADS_TAG_ID, adsAllowed } from '../../lib/pixels';

/**
 * Loads retargeting pixels — but only when three things are all true:
 * an ID is configured in lib/pixels.ts, the browser is not broadcasting
 * Global Privacy Control, and the visitor has not used the opt-out on
 * /privacy. Today no IDs are configured, so this renders nothing; the
 * consent plumbing ships first so turning ads on later is a one-line
 * change that is compliant on day one.
 *
 * The decision is made client-side after mount (consent state lives in the
 * visitor's browser), which is fine for pixels: they are not render-critical
 * and a one-tick delay costs nothing.
 */
export default function MarketingPixels() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(adsAllowed());
  }, []);

  if (!allowed) return null;

  return (
    <>
      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
      )}
      {GOOGLE_ADS_TAG_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_TAG_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-ads-tag" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_TAG_ID}');`}
          </Script>
        </>
      )}
    </>
  );
}
