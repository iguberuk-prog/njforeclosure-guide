// node --experimental-strip-types scripts/test-countdown.mjs
import assert from 'node:assert/strict';
import { countdown, parseDay, daysBetween, addDays } from '../lib/countdown.ts';
const t = parseDay('2026-09-24');
assert.equal(parseDay('2026-02-30'), null);
assert.equal(parseDay('garbage'), null);
assert.equal(daysBetween(t, parseDay('2026-10-09')), 15);
assert.equal(daysBetween(parseDay('2026-03-07'), parseDay('2026-03-09')), 2); // across DST start
let c = countdown(parseDay('2026-09-29'), t, 0);
assert.equal(c.daysLeft, 5); assert.equal(c.phase, 'urgent'); assert.equal(c.adjournmentsLeft, 2);
assert.equal(daysBetween(parseDay('2026-09-29'), c.latestWithAdjournments), 60);
assert.equal(daysBetween(parseDay('2026-09-29'), c.postSaleWindowEnds), 10);
c = countdown(parseDay('2026-09-24'), t, 2); assert.equal(c.daysLeft, 0); assert.equal(c.phase, 'final'); assert.equal(c.adjournmentsLeft, 0);
c = countdown(parseDay('2026-09-09'), t, 1); assert.equal(c.phase, 'passed'); assert.equal(c.daysLeft, -15);
c = countdown(parseDay('2026-12-31'), t, 7); assert.equal(c.adjournmentsLeft, 0); assert.equal(c.phase, 'plenty');
c = countdown(parseDay('2026-10-20'), t, -3); assert.equal(c.adjournmentsLeft, 2); assert.equal(c.phase, 'weeks');
assert.equal(addDays(parseDay('2026-12-31'), 1).getMonth(), 0);
console.log('countdown math: all tests passed');
