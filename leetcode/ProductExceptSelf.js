'use strict';

function productExceptSelf(nums) {
  const length = nums.length;
  const prefix = [];
  const suffix = [];

  const result = [];

  let product = 1;
  for (let i = 0; i < length; i++) {
    if (i === 0) prefix[i] = 1;
    else {
      product *= nums[i - 1];
      prefix[i] = product;
    }
  }

  product = 1;
  for (let i = length - 1; i >= 0; i--) {
    if (i === length - 1) suffix[i] = 1;
    else {
      product *= nums[i + 1];
      suffix[i] = product;
    }
  }

  for (let i = 0; i < length; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
