/**
 * Surplus-funds estimate after a New Jersey sheriff sale. Pure functions so
 * the math is unit-testable (scripts/test-surplus.mjs) and identical on the
 * page and in tests.
 *
 * The model, in the order the money actually moves:
 *   sale price (winning bid)
 *   − amount due the foreclosing lender (final judgment + interest, fees and
 *     costs added since judgment)
 *   − sheriff's commission and sale costs (taken from the purchase price)
 *   = surplus deposited with the Superior Court Trust Fund
 *   − valid junior liens (second mortgage/HELOC, judgment creditors, others),
 *     which the court pays first by priority
 *   = estimated amount left for the former owner
 *
 * Sheriff's commission: N.J.S.A. 22A:4-8 sets 6% on the first $5,000 and 4%
 * on the excess, $50 minimum. It is shown as an editable ESTIMATE; the
 * sheriff's office has the exact fee, commission and advertising figures.
 * Nothing here is advice or a promise of any amount — the page says so.
 */

export interface SurplusInput {
  salePrice: number;
  judgment: number;
  addedSinceJudgment: number;
  sheriffCosts: number;
  juniorLiens: number;
}

export interface SurplusResult {
  amountDueLender: number;
  surplus: number; // before junior liens; never below 0
  ownerEstimate: number; // after junior liens; never below 0
  shortfall: number; // how far the sale fell short of the lender's amount (0 if none)
  finderFeeLow: number; // 25% of owner estimate
  finderFeeHigh: number; // 33% of owner estimate
}

export function sheriffCommission(salePrice: number): number {
  if (!(salePrice > 0)) return 0;
  const first = Math.min(salePrice, 5000) * 0.06;
  const rest = Math.max(salePrice - 5000, 0) * 0.04;
  return Math.max(50, Math.round(first + rest));
}

const clean = (n: number) => (Number.isFinite(n) && n > 0 ? n : 0);

export function estimateSurplus(input: SurplusInput): SurplusResult {
  const salePrice = clean(input.salePrice);
  const amountDueLender = clean(input.judgment) + clean(input.addedSinceJudgment);
  const net = salePrice - amountDueLender - clean(input.sheriffCosts);
  const surplus = Math.max(0, Math.round(net));
  const shortfall = net < 0 ? Math.round(-net) : 0;
  const ownerEstimate = Math.max(0, surplus - clean(input.juniorLiens));
  return {
    amountDueLender,
    surplus,
    ownerEstimate,
    shortfall,
    finderFeeLow: Math.round(ownerEstimate * 0.25),
    finderFeeHigh: Math.round(ownerEstimate * 0.33),
  };
}
