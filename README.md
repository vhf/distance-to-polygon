distance-to-polygon
===================

[![Build Status](https://travis-ci.org/vhf/distance-to-polygon.svg?branch=master)](https://travis-ci.org/vhf/distance-to-polygon) [![Coverage Status](https://coveralls.io/repos/github/vhf/distance-to-polygon/badge.svg?branch=master)](https://coveralls.io/github/vhf/distance-to-polygon?branch=master)

* a point `p#` is represented as a list like this : `const p1 = [x = 0, y = 0];`
* `f(x)` is a transformation function applied to the result :

    ```js
    const roundToTwoDecimal = (x) => Math.round(x * 100) / 100;
    distanceBetweenPoints(p1, p2, roundToTwoDecimal);
    ```

---

* `distanceBetweenPoints(p1, p2, f = (x) => x)`

---

* `distanceToLine(point, line, f = (x) => x)`
    * `const line = [p1, p2];`

---

For polygons, make sure the vertices are listed clockwise or counter-clockwise.

* `distanceToPolygon(point, vertices, f = (x) => x)`
    * `const vertices = [p1, p2, p3, …];`


## License

(C) 2016 Victor Felder - MIT License
