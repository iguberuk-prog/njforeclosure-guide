/**
 * Logo mark: a shield inside the house.
 *
 * Adapted from owner-supplied artwork (house with a central shield on a
 * circuit-board background). Kept: the composition, protection inside the
 * home, which is the whole promise of the site. Changed: redrawn as vector so
 * it is sharp at every size and cannot ship with baked-in text, and recolored
 * from orange/green/teal into the site system, amber for the warmth, emerald
 * for "keep the home", navy for the structure. The circuit background was
 * dropped; it reads fintech, not homeowner trust, and no mark survives a
 * white header with a background attached.
 *
 * House strokes use currentColor so the same component works dark-on-light in
 * the header and light-on-dark in the footer.
 */
export default function Logo({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      role="img"
      aria-label="NJ Foreclosure Guide"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Roof with chimney */}
      <path
        d="M6 30.5 L32 8.5 L58 30.5"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M46 12 v-1 h7 v7" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Walls and floor */}
      <path
        d="M14 28 V53.5 H50 V28"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Shield inside: amber warmth, emerald keep-the-home, navy spine */}
      <path d="M32 22 L42.5 26.5 V34 C42.5 41.5 38 46 32 48.5 V22 Z" fill="#10b981" />
      <path d="M32 22 L21.5 26.5 V34 C21.5 41.5 26 46 32 48.5 V22 Z" fill="#f59e0b" />
      <path
        d="M32 22 L42.5 26.5 V34 C42.5 41.5 38 46 32 48.5 C26 46 21.5 41.5 21.5 34 V26.5 Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path d="M32 22.5 V48" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
