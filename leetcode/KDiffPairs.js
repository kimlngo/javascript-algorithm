function findPairs(nums, k) {
  if (nums.length == 1) return 0;

  let count = 0;

  if (k == 0) {
    //construct the freq-counter map and return the # of elements with freq >= 2
    const freqMap = new Map();

    for (let n of nums) {
      if (!freqMap.get(n)) freqMap.set(n, 0);

      freqMap.set(n, freqMap.get(n) + 1);
    }

    for (let v of freqMap.values()) if (v >= 2) count++;

    return count;
  } else {
    //construct the set and check for the complement (n + k) & (n - k)
    const intSet = [...new Set(nums)];

    for (let n of intSet) {
      const larger = n + k;
      const smaller = n - k;

      if (intSet.includes(larger)) count++;
      if (intSet.includes(smaller)) count++;
    }
    return count / 2;
  }
}

console.log(findPairs([3, 1, 4, 1, 5], 2));
console.log(findPairs([1, 2, 3, 4, 5], 1));
console.log(findPairs([1, 3, 1, 5, 4], 0));
