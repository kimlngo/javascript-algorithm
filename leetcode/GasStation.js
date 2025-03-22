'use strict';

function canCompleteCircuit(gas, cost) {
  const gasSum = gas.reduce((acc, c) => acc + c);
  const costSum = cost.reduce((acc, c) => acc + c);

  if (gasSum < costSum) return -1;

  let currentGas = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    currentGas += gas[i] - cost[i];
    if (currentGas < 0) {
      currentGas = 0;
      start = i + 1;
    }
  }
  return start;
}
