import { RECOMMENDATION_BASIS, NO_OUTCOME_DATA_NOTE } from '../../lib/partners';

/**
 * Explains what a recommendation on this site is and is not.
 *
 * Shown wherever a company is recommended. The point is that a visitor should
 * never have to guess whether a name appeared because it was paid for, because
 * it performed well for other homeowners, or because it matched what they
 * typed. It is always the third one, and there is no outcome data behind it.
 *
 * `tone` only changes colours for light or dark surrounding sections.
 */
export default function RecommendationBasis({
  tone = 'light',
  showOutcomeNote = true,
}: {
  tone?: 'light' | 'dark';
  showOutcomeNote?: boolean;
}) {
  const dark = tone === 'dark';
  return (
    <div
      className={`rounded-xl border p-5 ${
        dark ? 'border-white/15 bg-white/[0.04]' : 'border-slate-300 bg-slate-50'
      }`}
    >
      <p
        className={`text-xs font-bold uppercase tracking-wider mb-2 ${
          dark ? 'text-amber-300' : 'text-slate-500'
        }`}
      >
        What a recommendation here means
      </p>
      <p className={`text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
        {RECOMMENDATION_BASIS}
      </p>
      {showOutcomeNote && (
        <p className={`text-xs leading-relaxed mt-3 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
          {NO_OUTCOME_DATA_NOTE}
        </p>
      )}
    </div>
  );
}
