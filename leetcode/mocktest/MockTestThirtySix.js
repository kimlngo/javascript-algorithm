'use strict';

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));
console.log(shipWithinDays([1, 2, 3, 1, 1], 4));

function shipWithinDays(weights, days) {
  //1) find statistic first
  const stats = findStatistic(weights);

  const sum = stats.sum;
  const max = stats.max;

  const ave = Math.trunc(sum / days);
  let capacity = Math.max(max, ave);

  //2) split by capacity and check
  let expectedDays = splitShipments(weights, capacity);

  while (expectedDays.length > days) {
    capacity++;
    expectedDays = splitShipments(weights, capacity);
  }

  return capacity;
}

function splitShipments(weights, capacity) {
  const shipments = [];
  let currentShipment = [];

  let sum = 0;

  for (const w of weights) {
    sum += w;

    if (sum > capacity) {
      shipments.push(currentShipment);
      currentShipment = [];
      sum = w;
    }

    currentShipment.push(w);
  }

  if (currentShipment.length) shipments.push(currentShipment);

  return shipments;
}

function findStatistic(weights) {
  const sum = weights.reduce((acc, cur) => acc + cur, 0);
  const max = Math.max(...weights);

  return { sum, max };
}
