'use strict';

function addStrings(num1, num2) {
  let i1 = num1.length - 1;
  let i2 = num2.length - 1;
  let carryOver = 0;

  const result = [];

  while (i1 >= 0 && i2 >= 0) {
    const sumResult = addTwoDigit(num1[i1], num2[i2], carryOver);
    result.push(sumResult.sum);
    carryOver = sumResult.carryOver;

    i1--;
    i2--;
  }

  if (i1 < 0 && i2 < 0) {
    if (carryOver != 0) {
      result.push(carryOver);
    }
  } else {
    const longerStr = i1 < 0 ? num2 : num1;
    const index = i1 < 0 ? i2 : i1;

    const remaining = addStrings(
      longerStr.substring(0, index + 1),
      new String(carryOver)
    );
    for (let k = remaining.length - 1; k >= 0; k--) result.push(remaining[k]);
  }

  return result.reverse().join('');
}

function addTwoDigit(n1, n2, carryOver) {
  const d1 = Number(n1);
  const d2 = Number(n2);

  return {
    sum: ((d1 + d2 + carryOver) % 10).toString(),
    carryOver: Math.trunc((d1 + d2 + carryOver) / 10),
  };
}

console.log(addStrings('9999999', '9999'));
