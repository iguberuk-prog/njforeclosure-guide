'use client';

import { useEffect, useRef } from 'react';

/**
 * GoHighLevel (LeadConnector) text-chat widget, as a small icon that sits in
 * the page instead of floating over it.
 *
 * WHERE IT MAY GO: only on a page with no field that collects a phone number.
 * GoHighLevel's A2P compliance review fails "Multiple Opt-ins" when its widget
 * shares a page with any such form. It started in the home page footer and
 * failed for that reason (the "Samantha can call you" box is on that page),
 * so it now sits at the bottom of /about. Wherever this component renders is
 * the only place GoHighLevel loads.
 *
 * Why it exists: the A2P 10DLC texting registration needs GoHighLevel's own
 * opt-in form, with its consent wording, to be reachable on the site.
 * Samantha (ChatWidget) is the site's chat and stays the only thing floating
 * on the page. This one is meant to go unnoticed and must never cover her
 * button, closed or open.
 *
 * Two things that look odd and are on purpose:
 *
 *  1. The script is injected by hand, not with next/script. GoHighLevel's
 *     loader mounts its <chat-widget> into ITS OWN SCRIPT TAG'S PARENT
 *     (document.currentScript.parentNode). next/script always appends to
 *     <body>, which puts the widget back in the bottom-right corner of the
 *     screen, directly on top of Samantha's button (measured: 54px overlap).
 *     Injected here, the widget lands inside the dock.
 *
 *  2. All the positioning is in globals.css under `.ghl-dock`, not in
 *     utilities here, because it is one idea in three states (closed, open on
 *     a phone, open on desktop) and reads better as one commented block.
 *
 * The outer div is the slot: it reserves the icon's 40px in the page so
 * nothing shifts when the dock leaves the flow to become the open stage.
 */

const LOADER_SRC = 'https://widgets.leadconnectorhq.com/loader.js';
// GoHighLevel's embed code, attribute for attribute.
const LOADER_ATTRS: Record<string, string> = {
  'data-resources-url': 'https://widgets.leadconnectorhq.com/chat-widget/loader.js',
  'data-widget-id': '6aee04d82615577ccbe2bdf1',
  'data-source': 'WEB_USER',
};

export default function GhlChatDock({ className = '' }: { className?: string }) {
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const load = () => {
      const dock = dockRef.current;
      // Already loaded into this dock: React's dev-mode double effect.
      if (!dock || dock.querySelector('script')) return;
      const tag = document.createElement('script');
      tag.src = LOADER_SRC;
      for (const [name, value] of Object.entries(LOADER_ATTRS)) tag.setAttribute(name, value);
      dock.appendChild(tag);
    };
    // Wait for the browser to be idle: nobody needs a footer icon before the
    // page itself has finished loading. Safari has no requestIdleCallback.
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(load, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(load, 1500);
    return () => clearTimeout(id);
    // Nothing to remove on unmount: React drops the dock, and the script and
    // widget inside it go with it.
  }, []);

  return (
    <div className={`h-10 w-10 print:hidden ${className}`}>
      {/* React renders this div empty and never touches what the loader puts
          inside it. */}
      <div ref={dockRef} className="ghl-dock" />
    </div>
  );
}
