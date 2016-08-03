import { describe, it } from 'mocha';
import { assert } from 'chai';
import { distanceBetweenPoints, distanceToLine, distanceToPolygon } from '../lib/distance-to-polygon';

const p1 = [5, 10];
const p2 = [10, 10];
const p3 = [2, 7];
const p4 = [15, 3];
const p5 = [15, 2];
const line = [[0, 5], [10, 5]];

const a = [5, 5];
const b = [10, 5];
const c = [10, 0];
const d = [5, 0];
const poly = [a, b, c, d];

/* These test variables are illustred by the graph below:

        p1    p2
10 +    *     *
   |
   |
   | * p3
   |
 5 +----a----b <- line
   |    |#p##|
   |    |poly|    * p4
   |    |#l##|
   |    |#y##|
 0 +----d----c
   0    5    10
*/


describe('Tests', () => {
  describe('distanceBetweenPoints()', () => {
    it('computes correcly', () => {
      assert.equal(distanceBetweenPoints(p1, p1), 0);
      assert.equal(distanceBetweenPoints(p2, p1), 5);
      assert.equal(distanceBetweenPoints(p1, p2), 5);
      assert.equal(distanceBetweenPoints(p2, p3, Math.floor), 8);
      assert.equal(distanceBetweenPoints(p3, p4, (x) => Math.round(x * 1000) / 1000), 13.601);
      assert.equal(distanceBetweenPoints(p4, p2, Math.ceil), 9);
    });
  });
  describe('distanceToLine()', () => {
    it('computes correcly', () => {
      assert.equal(distanceToLine(p1, line), 5);
      assert.equal(distanceToLine(p2, line), 5);
      assert.equal(distanceToLine(p3, line), 2);
      assert.equal(distanceToLine(p4, line, (x) => Math.round(x * 10) / 10), 5.4);
    });
  });
  describe('distanceToPolygon()', () => {
    it('computes correcly', () => {
      assert.equal(distanceToPolygon(p1, poly), 5);
      assert.equal(distanceToPolygon(p2, poly), 5);
      assert.equal(distanceToPolygon(p3, poly, (x) => Math.round(x * 100) / 100), 3.61);
      assert.equal(distanceToPolygon(p4, poly), 5);
      assert.equal(distanceToPolygon(p4, poly), distanceToPolygon(p5, poly));
    });
  });
});
