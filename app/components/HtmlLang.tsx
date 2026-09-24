'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Keeps <html lang> correct after client-side navigation between the
 * English site and /es. The static HTML is already right on first load
 * (scripts/set-html-lang.mjs rewrites out/es/** to lang="es" at build);
 * this covers the case where a visitor clicks from an English page into
 * the Spanish section without a full page load, so screen readers and
 * translation prompts switch language too.
 */
export default function HtmlLang() {
  const pathname = usePathname() || '';
  useEffect(() => {
    document.documentElement.lang = pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';
  }, [pathname]);
  return null;
}
