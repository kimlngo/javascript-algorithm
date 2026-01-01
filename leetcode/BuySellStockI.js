function maxProfit(prices) {
  let maxProfit = 0;
  let minSoFar = Infinity;

  for (let curPrice of prices) {
    if (curPrice < minSoFar) {
      minSoFar = curPrice;
    } else {
      maxProfit = Math.max(maxProfit, curPrice - minSoFar);
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
