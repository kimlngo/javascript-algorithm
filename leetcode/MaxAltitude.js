'use strict';

function maxAltitude(gain) {
  let maxAltitude = 0;
  let sum = 0;

  for (let g of gain) {
    sum += g;
    if (sum > maxAltitude) maxAltitude = sum;
  }

  return maxAltitude;
}

console.log(maxAltitude([-5, 1, 5, 0, -7]));
console.log(maxAltitude([-4, -3, -2, -1, 4, 3, 2]));
