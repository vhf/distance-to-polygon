"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var distanceBetweenPoints = function distanceBetweenPoints(_ref, _ref2) {
  var _ref4 = _slicedToArray(_ref, 2);

  var p1x = _ref4[0];
  var p1y = _ref4[1];

  var _ref3 = _slicedToArray(_ref2, 2);

  var p2x = _ref3[0];
  var p2y = _ref3[1];
  var f = arguments.length <= 2 || arguments[2] === undefined ? function (x) {
    return x;
  } : arguments[2];
  return f(Math.sqrt(Math.pow(p1x - p2x, 2) + Math.pow(p1y - p2y, 2)));
};

var distanceFromLine = function distanceFromLine(_ref5, _ref6) {
  var _ref8 = _slicedToArray(_ref5, 2);

  var px = _ref8[0];
  var py = _ref8[1];

  var _ref7 = _slicedToArray(_ref6, 2);

  var _ref7$ = _slicedToArray(_ref7[0], 2);

  var l1x = _ref7$[0];
  var l1y = _ref7$[1];

  var _ref7$2 = _slicedToArray(_ref7[1], 2);

  var l2x = _ref7$2[0];
  var l2y = _ref7$2[1];
  var f = arguments.length <= 2 || arguments[2] === undefined ? function (x) {
    return x;
  } : arguments[2];

  var xD = l2x - l1x;
  var yD = l2y - l1y;

  var u = ((px - l1x) * xD + (py - l1y) * yD) / (xD * xD + yD * yD);

  var closestPointOnLine = void 0;
  if (u < 0) {
    closestPointOnLine = [l1x, l1y];
  } else if (u > 1) {
    closestPointOnLine = [l2x, l2y];
  } else {
    closestPointOnLine = [l1x + u * xD, l1y + u * yD];
  }

  return f(distanceBetweenPoints([px, py], closestPointOnLine));
};

var distanceFromPoly = function distanceFromPoly(_ref9, vertices) {
  var _ref10 = _slicedToArray(_ref9, 2);

  var px = _ref10[0];
  var py = _ref10[1];
  var f = arguments.length <= 2 || arguments[2] === undefined ? function (x) {
    return x;
  } : arguments[2];

  var comp = vertices.reduce(function (_ref11, currPoint) {
    var prevPoint = _ref11.prevPoint;
    var dist = _ref11.dist;

    var currDist = distanceFromLine([px, py], [prevPoint, currPoint]);
    var ret = {
      prevPoint: currPoint,
      dist: dist
    };
    if (currDist < dist) {
      ret.dist = currDist;
    }
    return ret;
  }, { prevPoint: vertices[vertices.length - 1], dist: Infinity });
  return f(comp.dist);
};

exports.distanceBetweenPoints = distanceBetweenPoints;
exports.distanceFromLine = distanceFromLine;
exports.distanceFromPoly = distanceFromPoly;