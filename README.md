distance-to-polygon
===================

* a point `p#` is represented as a list like this : `const p1 = [x = 0, y = 0];`
* `f(x)` is a tranformation function applied to the result :

    ```js
    const roundToTwoDecimal = (x) => Math.round(x * 100) / 100;
    distanceBetweenPoints(p1, p2, roundToTwoDecimal);
    ```

---

* `distanceBetweenPoints(p1, p2, f = (x) => x)`

---

* `distanceFromLine(point, line, f = (x) => x)`
    * `const line = [p1, p2];`

---

* `distanceFromPoly(point, vertices, f = (x) => x)`
    * `const vertices = [p1, p2, p3, …];`


## License

(C) 2016 Victor Felder - MIT License
