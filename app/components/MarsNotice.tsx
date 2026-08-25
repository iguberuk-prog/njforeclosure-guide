/**
 * REQUIRED DISCLOSURE. Do not remove, reword, or shrink.
 *
 * 12 CFR Part 1015 (Regulation O, the FTC's Mortgage Assistance Relief
 * Services rule) applies to a for-profit business that markets a service as a
 * way to help homeowners avoid foreclosure. Section 1015.4(a) requires these
 * two sentences, together, in every general commercial communication, under an
 * "IMPORTANT NOTICE" heading, in type two points larger than the surrounding
 * text.
 *
 * The wording below is the rule's own language with the company name filled in.
 * Changing it defeats the purpose. If the business model changes, have a New
 * Jersey attorney confirm what is required before touching this file.
 *
 * Rendered from the root layout so it appears on every page.
 */
export default function MarsNotice() {
  return (
    <aside
      aria-label="Important notice"
      className="bg-slate-100 border-t border-b border-slate-300 px-4 py-6"
    >
      <div className="max-w-4xl mx-auto">
        <p className="font-bold text-slate-900 text-base tracking-wide uppercase mb-2">
          Important Notice
        </p>
        {/* Base copy on this site is text-sm (14px). The rule requires two
            points larger, so this block is text-base (16px). */}
        <p className="text-base text-slate-800 leading-relaxed font-medium">
          NJ Foreclosure Guide is not associated with the government, and our service is not approved
          by the government or your lender. Even if you accept this offer and use our service, your
          lender may not agree to change your loan.
        </p>
      </div>
    </aside>
  );
}
