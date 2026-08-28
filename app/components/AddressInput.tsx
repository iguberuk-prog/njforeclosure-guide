'use client';

import { useEffect, useRef, useState } from 'react';
import { GOOGLE_MAPS_API_KEY } from '../../lib/maps';

/**
 * Property-address input with Google Places autocomplete.
 *
 * When GOOGLE_MAPS_API_KEY (lib/maps.ts) is set, this renders Google's
 * PlaceAutocompleteElement (the current, non-deprecated Places widget),
 * restricted to US addresses, and reports the selected formatted address
 * through onChange. Without a key, or if Google's script fails for any
 * reason, it renders a plain text input with identical styling, so the form
 * never breaks and the field always submits whatever the visitor typed.
 */

declare global {
  interface Window {
    google?: any;
    __gmapsLoading?: Promise<void>;
  }
}

function loadMaps(key: string): Promise<void> {
  if (typeof window === 'undefined') return Promise.reject();
  if (window.google?.maps?.importLibrary) return Promise.resolve();
  if (!window.__gmapsLoading) {
    window.__gmapsLoading = new Promise<void>((resolve, reject) => {
      const s = document.createElement('script');
      s.src = `https://maps.googleapis.com/maps/api/js?key=${key}&v=weekly&loading=async&callback=__gmapsReady`;
      (window as any).__gmapsReady = () => resolve();
      s.onerror = () => reject(new Error('maps load failed'));
      document.head.appendChild(s);
    });
  }
  return window.__gmapsLoading;
}

export default function AddressInput({
  value,
  onChange,
  placeholder = 'Start typing the property address...',
  lang = 'en',
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  lang?: 'en' | 'es';
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<'plain' | 'google'>('plain');
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    if (!GOOGLE_MAPS_API_KEY) return;
    let cancelled = false;
    let el: any;
    (async () => {
      try {
        await loadMaps(GOOGLE_MAPS_API_KEY);
        const { PlaceAutocompleteElement } = await window.google.maps.importLibrary('places');
        if (cancelled || !hostRef.current) return;
        el = new PlaceAutocompleteElement({ includedRegionCodes: ['us'] });
        el.style.width = '100%';
        el.addEventListener('gmp-select', async (ev: any) => {
          try {
            const place = ev.placePrediction.toPlace();
            await place.fetchFields({ fields: ['formattedAddress'] });
            onChangeRef.current(place.formattedAddress ?? '');
          } catch {
            // Keep whatever text state we already have.
          }
        });
        hostRef.current.innerHTML = '';
        hostRef.current.appendChild(el);
        setMode('google');
      } catch {
        // Any failure: stay in plain-input mode. The form still works.
      }
    })();
    return () => {
      cancelled = true;
      try { el?.remove(); } catch {}
    };
  }, []);

  return (
    <div>
      <div ref={hostRef} className={mode === 'google' ? 'block' : 'hidden'} />
      {mode === 'plain' && (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete="street-address"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        />
      )}
      {mode === 'google' && (
        <p className="text-xs text-slate-400 mt-1">
          {lang === 'es' ? 'Sugerencias de direcciones por Google.' : 'Address suggestions by Google.'}
        </p>
      )}
    </div>
  );
}
