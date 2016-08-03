const distanceBetweenPoints = ([p1x, p1y], [p2x, p2y], f = (x) => x) => f(Math.sqrt(
    Math.pow(p1x - p2x, 2) + Math.pow(p1y - p2y, 2)
  ));

const distanceFromLine = ([px, py], [[l1x, l1y], [l2x, l2y]], f = (x) => x) => {
  const xD = l2x - l1x;
  const yD = l2y - l1y;

  const u = (((px - l1x) * xD) + ((py - l1y) * yD)) / ((xD * xD) + (yD * yD));

  let closestPointOnLine;
  if (u < 0) {
    closestPointOnLine = [l1x, l1y];
  } else if (u > 1) {
    closestPointOnLine = [l2x, l2y];
  } else {
    closestPointOnLine = [l1x + (u * xD), l1y + (u * yD)];
  }

  return f(distanceBetweenPoints([px, py], closestPointOnLine));
};

const distanceFromPoly = ([px, py], vertices, f = (x) => x) => {
  const comp = vertices.reduce(({ prevPoint, dist }, currPoint) => {
    const currDist = distanceFromLine([px, py], [prevPoint, currPoint]);
    const ret = {
      prevPoint: currPoint,
      dist,
    };
    if (currDist < dist) {
      ret.dist = currDist;
    }
    return ret;
  }, { prevPoint: vertices[vertices.length - 1], dist: Infinity });
  return f(comp.dist);
};

export { distanceBetweenPoints, distanceFromLine, distanceFromPoly };
