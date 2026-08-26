/**
 * Logo mark. Vector, and deliberately WITHOUT the company name inside it.
 *
 * The previous mark was a PNG with "NJ FORECOLSURE GUIDE" set into the image,
 * misspelled, on every page of the site. Baking a wordmark into a raster file
 * means a typo is invisible to spellcheck, unreadable to Google, unselectable
 * by a visitor, and blurry on any retina screen.
 *
 * So the mark is now just the house, and the name is real HTML text beside it.
 * Sharp at any size, searchable, screen-reader friendly, and impossible to
 * misspell without someone noticing.
 *
 * On the design: an earlier version ran an amber stroke diagonally across the
 * house. At small sizes it read as a line struck THROUGH the home, which is
 * the last association this particular audience needs. It is now an open,
 * arched door instead: the one warm element in the mark, and the right idea
 * for a site whose whole argument is that there is a way through.
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
      {/* Roof */}
      <path
        d="M6 30.5 L32 8.5 L58 30.5"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Walls and floor */}
      <path
        d="M14 28 V53.5 H50 V28"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Open door. The single warm note in the mark. */}
      <path d="M25.5 53.5 V42.5 a6.5 6.5 0 0 1 13 0 V53.5 Z" fill="#f59e0b" />
    </svg>
  );
}
