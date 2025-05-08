'use strict';

function calPoints(operations) {
  const points = [];

  for (let op of operations) {
    if (op === '+') {
      let p1 = points.pop();
      let p2 = points.pop();
      points.push(p2);
      points.push(p1);
      points.push(p2 + p1);
    } else if (op === 'D') {
      let top = points.pop();
      points.push(top);
      points.push(top * 2);
    } else if (op === 'C') {
      points.pop();
    } else {
      points.push(Number(op));
    }
  }

  return points.reduce((acc, cur) => acc + cur, 0);
}

console.log(calPoints(['5', '2', 'C', 'D', '+']));
console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']));
console.log(calPoints(['1', 'C']));
