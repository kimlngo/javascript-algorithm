'use strict';

function asteroidCollision(asteroids) {
  const result = [];

  result.push(asteroids[0]);
  let top, cur;
  for (let i = 1; i < asteroids.length; i++) {
    cur = asteroids[i];
    if (result.length == 0) {
      result.push(cur);
      continue;
    }

    top = result.pop();

    if (top * cur > 0 || (top < 0 && cur > 0)) {
      //same direction or opposite direction but never collide
      result.push(top);
      result.push(cur);
    } else {
      //collide case
      if (Math.abs(top) > Math.abs(cur)) result.push(top);
      else if (Math.abs(top) < Math.abs(cur)) i--;
    }
  }

  return result;
}

// console.log(asteroidCollision([10, 2, -5]));
// console.log(asteroidCollision([5, 10, -5]));
console.log(asteroidCollision([1, -1, -2, -2]));
