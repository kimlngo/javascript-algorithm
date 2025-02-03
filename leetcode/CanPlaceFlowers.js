'use strict';

function canPlaceFlowers(flowerbeds, n) {
  if (flowerbeds.length === 1) {
    if (flowerbeds[0] === 1) return n <= 0;
    else return n <= 1;
  } else if (flowerbeds.length == 2) {
    if (flowerbeds[0] === 0 && flowerbeds[1] === 0) {
      return n <= 1;
    } else return n <= 0;
  }

  //flowerbeds has 3 slots and above
  let count = n;
  let copy = [...flowerbeds];

  for (let i = 0; i < copy.length; i++) {
    if (i === 0) {
      if (copy[0] === 0 && copy[1] === 0) {
        copy[0] = 1;
        count--;
      }
    } else if (i === copy.length - 1) {
      if (copy[i] === 0 && copy[i - 1] === 0) {
        copy[i] = 1;
        count--;
      }
    } else {
      if (copy[i - 1] === 0 && copy[i] === 0 && copy[i + 1] === 0) {
        copy[i] = 1;
        count--;
      }
    }
  }
  return count <= 0;
}

console.log(canPlaceFlowers([0, 0], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 2));
