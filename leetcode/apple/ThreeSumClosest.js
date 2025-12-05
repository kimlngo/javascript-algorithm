function threeSumClosest(nums, target) {
  let len = nums.length;

  if (len === 3) return nums[0] + nums[1] + nums[2];

  nums.sort((a, b) => a - b);
  let minDiff = Number.MAX_VALUE;
  let result = Number.MAX_VALUE;

  for (let i = 0; i < len - 2; i++) {
    let low = i + 1;
    let high = len - 1;

    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high];
      let diff = Math.abs(target - sum);

      if (diff < minDiff) {
        minDiff = diff;
        result = sum;
      }

      if (sum < target) low++;
      else high--;
    }
  }

  return result;
}

// console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([-49, -30, -20, -4, 0, 7, 10, 21, 50], 1));
