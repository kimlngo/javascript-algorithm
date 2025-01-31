'use strict';

function kidsWithCandies(candies, extraCandies) {
  let maxCandies = 0;

  candies.forEach(candy => {
    if (candy > maxCandies) maxCandies = candy;
  });

  console.log(maxCandies);

  return candies
    .map(candy => candy + extraCandies)
    .map(candy => candy >= maxCandies);
}
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
