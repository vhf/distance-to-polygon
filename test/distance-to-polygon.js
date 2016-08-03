import { describe, it } from 'mocha';
import { assert } from 'chai';
import { distanceBetweenPoints, distanceFromLine, distanceFromPoly } from '../lib/distance-to-polygon';

const point1 = [5, 10];
const point2 = [10, 10];
const point3 = [2, 7];
const point4 = [15, 3];
const point5 = [15, 2];
const line = [[0, 5], [10, 5]];

const pointA = [5, 5];
const pointB = [10, 5];
const pointC = [10, 0];
const pointD = [5, 0];
const polygon = [
  pointA,
  pointB,
  pointC,
  pointD,
];
/*
     p1    p2
+    *     *
|
|
| * p3
|
+l-i-A-n-eB
|    |####|
|    |poly|    * p4
|    |####|
|    |####|
0----D----C
*/


describe('Tests', () => {
  describe('distanceBetweenPoints()', () => {
    it('computes correcly', () => {
      assert.equal(distanceBetweenPoints(point1, point1), 0);
      assert.equal(distanceBetweenPoints(point2, point1), 5);
      assert.equal(distanceBetweenPoints(point1, point2), 5);
      assert.equal(distanceBetweenPoints(point2, point3, Math.floor), 8);
      assert.equal(distanceBetweenPoints(point3, point4, (x) => Math.round(x * 1000) / 1000), 13.601);
      assert.equal(distanceBetweenPoints(point4, point2, Math.ceil), 9);
    });
  });
  describe('distanceFromLine()', () => {
    it('computes correcly', () => {
      assert.equal(distanceFromLine(point1, line), 5);
      assert.equal(distanceFromLine(point2, line), 5);
      assert.equal(distanceFromLine(point3, line), 2);
      assert.equal(distanceFromLine(point4, line, (x) => Math.round(x * 10) / 10), 5.4);
    });
  });
  describe('distanceFromPoly()', () => {
    it('computes correcly', () => {
      assert.equal(distanceFromPoly(point1, polygon), 5);
      assert.equal(distanceFromPoly(point2, polygon), 5);
      assert.equal(distanceFromPoly(point3, polygon, (x) => Math.round(x * 100) / 100), 3.61);
      assert.equal(distanceFromPoly(point4, polygon), 5);
      assert.equal(distanceFromPoly(point4, polygon), distanceFromPoly(point5, polygon));
    });
  });
});
