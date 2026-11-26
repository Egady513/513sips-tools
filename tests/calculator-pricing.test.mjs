import test from 'node:test';
import assert from 'node:assert/strict';
import '../tools/calculator-pricing.js';

const P = globalThis.Sips513Pricing;
const calc = (o) => P.calculatePricing(o).total;
const std = { guests: 50, hours: 3, bartenders: 1, packageType: 'beerwine', glassware: 'plastic_at_cost' };

test('Huffman golden case is $4,410', () => {
  const r = P.calculatePricing({
    guests: 175, hours: 5, bartenders: 4, fullBarStaffCount: 4, barCount: 2,
    packageType: 'fullbar', glassware: 'formal', glassCount: 400, distance: 0,
  });
  assert.equal(r.total, 4410);
  assert.equal(r.breakdown.base, 750);
  assert.equal(r.breakdown.staffing, 675);
  assert.equal(r.breakdown.volume, 400);
  assert.equal(r.breakdown.multiBarOperations, 225);
  assert.equal(r.breakdown.extraHours, 600);
  assert.equal(r.breakdown.longEventPremium, 60);
  assert.equal(r.breakdown.package, 300);
  assert.equal(r.breakdown.glassware, 1400);
});

test('base and small group', () => {
  assert.equal(calc(std), 750);
  assert.equal(calc({ ...std, guests: 20, hours: 2, smallGroup: true }), 395);
});

test('bars: 1, 2, 3, 4', () => {
  assert.deepEqual([1, 2, 3, 4].map(P.barCharge), [0, 225, 375, 525]);
  assert.deepEqual([1, 2, 3, 4].map((barCount) => calc({ ...std, barCount }) - 750), [0, 225, 375, 525]);
});

test('volume boundaries', () => {
  assert.deepEqual([50, 51, 100, 101, 150, 151].map(P.volumeCharge), [0, 175, 175, 300, 300, 400]);
});

test('signature cocktails by guest count (2 cocktails)', () => {
  const sig = (guests) => calc({ ...std, guests, signatureCount: 2 }) - 750 - P.volumeCharge(guests);
  assert.equal(sig(75), 250);
  assert.equal(sig(76), 300);
  assert.equal(sig(150), 300);
  assert.equal(sig(151), 350);
});

test('house cocktails and program fee', () => {
  assert.equal(calc({ ...std, houseCount: 2 }) - 750, 100);
  assert.equal(calc({ ...std, signatureCount: 5 }) - 750, 5 * 125 + 250);
  assert.equal(calc({ ...std, houseCount: 8 }) - 750, 8 * 50 + 500);
});

test('logo ice is $3.00 a cube', () => {
  assert.equal(calc({ ...std, drinkBigIce: true, iceCount: 100 }) - 750, 300);
});

test('high-volume adjustment stacks with the bar charge', () => {
  const r = P.calculatePricing({ ...std, guests: 120, barCount: 3 });
  assert.equal(r.breakdown.volume, 300);
  assert.equal(r.breakdown.multiBarOperations, 375);
  assert.equal(r.total, 750 + 300 + 375);
});

test('legacy multiBarOperations loads as 2 bars', () => {
  assert.equal(P.legacyBarCount(500), 2);
  assert.equal(P.legacyBarCount(true), 2);
  assert.equal(P.legacyBarCount(false), 1);
  assert.equal(P.legacyBarCount(0), 1);
  assert.equal(P.legacyBarCount(undefined), 1);
});
