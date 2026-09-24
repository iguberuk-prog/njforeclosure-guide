/**
 * Mortgage "catch-up" (reinstatement) estimate for a New Jersey homeowner who
 * has fallen behind. Pure functions so the math is unit-testable
 * (scripts/test-catchup.mjs) and identical on the page and in tests.
 *
 * The model mirrors how a written reinstatement quote stacks up:
 *   missed payments (monthly payment × payments missed)
 *   + late charges (per missed payment, as shown on the statement)
 *   + foreclosure attorney fees and costs (only once a complaint is filed)
 *   + other fees on the statement (property inspections, etc.)
 *   = estimated arrears
 *   − money the homeowner has already set aside
 *   = estimated amount still needed to get current
 *
 * The "can't pay it at once" illustration spreads what is still needed over
 * 6 and 12 months on top of the normal payment. Lenders are not required to
 * offer any repayment plan; the page says so. Only the servicer's written,
 * dated reinstatement quote has the real number — this is an estimate.
 */

export interface CatchUpInput {
  monthlyPayment: number; // principal + interest + escrow, as on the statement
  paymentsMissed: number;
  lateFeePerPayment: number;
  attorneyFees: number; // foreclosure attorney fees and costs, if a complaint was filed
  otherFees: number; // inspections and other fees on the statement
  setAside: number; // money already saved toward catching up
}

export interface RepaymentIllustration {
  months: number;
  extraPerMonth: number; // amount still needed ÷ months
  totalPerMonth: number; // normal payment + extraPerMonth
}

export interface CatchUpResult {
  missedPayments: number;
  lateFees: number;
  feesAndCosts: number; // attorney fees/costs + other fees
  arrears: number; // everything owed to get current, before set-aside
  setAsideApplied: number; // the part of the set-aside that counts (never more than arrears)
  amountNeeded: number; // arrears − set-aside; never below 0
  setAsideLeftOver: number; // set-aside beyond the arrears (0 if none)
  plans: RepaymentIllustration[]; // 6- and 12-month illustrations
}

/** Non-finite, negative or missing values count as 0. */
const clean = (n: number) => (Number.isFinite(n) && n > 0 ? n : 0);
/** Round to cents so floating-point noise never reaches the page. */
const cents = (n: number) => Math.round(n * 100) / 100;

export const PLAN_MONTHS = [6, 12] as const;

export function estimateCatchUp(input: CatchUpInput): CatchUpResult {
  const payment = clean(input.monthlyPayment);
  const missed = Math.floor(clean(input.paymentsMissed));

  const missedPayments = cents(payment * missed);
  const lateFees = cents(clean(input.lateFeePerPayment) * missed);
  const feesAndCosts = cents(clean(input.attorneyFees) + clean(input.otherFees));
  const arrears = cents(missedPayments + lateFees + feesAndCosts);

  const setAside = clean(input.setAside);
  const setAsideApplied = cents(Math.min(setAside, arrears));
  const amountNeeded = cents(Math.max(0, arrears - setAside));
  const setAsideLeftOver = cents(Math.max(0, setAside - arrears));

  const plans = PLAN_MONTHS.map((months) => {
    const extraPerMonth = cents(amountNeeded / months);
    return { months, extraPerMonth, totalPerMonth: cents(payment + extraPerMonth) };
  });

  return {
    missedPayments,
    lateFees,
    feesAndCosts,
    arrears,
    setAsideApplied,
    amountNeeded,
    setAsideLeftOver,
    plans,
  };
}
