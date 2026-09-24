// Unit tests for lib/catchup.ts. Run with:
//   node --experimental-strip-types scripts/test-catchup.mjs
import assert from 'node:assert/strict';
import { estimateCatchUp } from '../lib/catchup.ts';

const base = { monthlyPayment: 0, paymentsMissed: 0, lateFeePerPayment: 0, attorneyFees: 0, otherFees: 0, setAside: 0 };
let passed = 0;
const test = (name, fn) => {
  fn();
  passed++;
  console.log(`ok - ${name}`);
};

test('normal case', () => {
  const r = estimateCatchUp({ monthlyPayment: 2000, paymentsMissed: 4, lateFeePerPayment: 80, attorneyFees: 1500, otherFees: 120, setAside: 3000 });
  assert.equal(r.missedPayments, 8000);
  assert.equal(r.lateFees, 320);
  assert.equal(r.feesAndCosts, 1620);
  assert.equal(r.arrears, 9940);
  assert.equal(r.setAsideApplied, 3000);
  assert.equal(r.amountNeeded, 6940);
  assert.equal(r.setAsideLeftOver, 0);
  assert.deepEqual(r.plans.map((p) => p.months), [6, 12]);
  assert.equal(r.plans[0].extraPerMonth, 1156.67);
  assert.equal(r.plans[0].totalPerMonth, 3156.67);
  assert.equal(r.plans[1].extraPerMonth, 578.33);
  assert.equal(r.plans[1].totalPerMonth, 2578.33);
});

test('cents in the payment are kept without float noise', () => {
  const r = estimateCatchUp({ ...base, monthlyPayment: 1843.27, paymentsMissed: 3, lateFeePerPayment: 55.3 });
  assert.equal(r.missedPayments, 5529.81);
  assert.equal(r.lateFees, 165.9);
  assert.equal(r.arrears, 5695.71);
  assert.equal(r.amountNeeded, 5695.71);
});

test('all zero', () => {
  const r = estimateCatchUp(base);
  assert.equal(r.arrears, 0);
  assert.equal(r.amountNeeded, 0);
  assert.equal(r.setAsideLeftOver, 0);
  for (const p of r.plans) {
    assert.equal(p.extraPerMonth, 0);
    assert.equal(p.totalPerMonth, 0);
  }
});

test('negative and NaN inputs count as 0', () => {
  const r = estimateCatchUp({ monthlyPayment: NaN, paymentsMissed: -3, lateFeePerPayment: -50, attorneyFees: Infinity, otherFees: undefined, setAside: -1000 });
  assert.equal(r.arrears, 0);
  assert.equal(r.amountNeeded, 0);
  assert.equal(r.setAsideApplied, 0);
  const r2 = estimateCatchUp({ monthlyPayment: 1000, paymentsMissed: NaN, lateFeePerPayment: 50, attorneyFees: -5, otherFees: NaN, setAside: NaN });
  assert.equal(r2.arrears, 0);
  assert.equal(r2.plans[0].totalPerMonth, 1000);
});

test('fractional months are floored to whole payments', () => {
  const r = estimateCatchUp({ ...base, monthlyPayment: 1000, paymentsMissed: 2.9, lateFeePerPayment: 10 });
  assert.equal(r.missedPayments, 2000);
  assert.equal(r.lateFees, 20);
});

test('set-aside exceeding arrears', () => {
  const r = estimateCatchUp({ ...base, monthlyPayment: 1500, paymentsMissed: 2, lateFeePerPayment: 50, setAside: 5000 });
  assert.equal(r.arrears, 3100);
  assert.equal(r.setAsideApplied, 3100);
  assert.equal(r.amountNeeded, 0);
  assert.equal(r.setAsideLeftOver, 1900);
  assert.equal(r.plans[0].extraPerMonth, 0);
  assert.equal(r.plans[1].totalPerMonth, 1500);
});

console.log(`\n${passed} tests passed`);
