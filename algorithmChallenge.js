'use strict';

console.log('### Q1 - FINDING THE MISSING NUMBER IN AN ARRAY ###');
const arr = [
  91, 92, 93, 94, 95, 7, 8, 9, 10, 96, 97, 98, 99, 100, 41, 42, 43, 44, 45, 46,
  47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 62, 63, 64, 65, 4, 5, 6, 11, 12, 13,
  14, 15, 1, 2, 3, 84, 85, 86, 87, 88, 89, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39, 16, 17, 18, 19, 20, 21, 22, 40, 57, 58, 59,
  60, 61, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
  83,
];

console.log(findMissingNumInArray(arr));

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function findMissingNumInArray(arr) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 1; i <= 100; i++) sum1 += i;

  for (let k of arr) sum2 += k;

  return sum1 - sum2;
}

console.log(
  '### Q2 - FINDING THE DUPLICATE NUMBER IN AN ARRAY OF INTEGERS ###'
);

const q2Arr = [1, 5, 3, 6, 3, 8, 9, 10, 4]; //3
console.log(findDuplicateNumber(q2Arr));
function findDuplicateNumber(arr) {
  const set = new Set();

  for (const i of arr) {
    if (!set.has(i)) set.add(i);
    else return i;
  }
  return -1;
}

console.log('### Q3 - FINDING THE MIN and MAX of an unsorted array ###');
const q3Arr = [1, 5, 3, 6, 3, 8, 9, 10, 4, 8, 5, 1, 5, 7, 4, 2];
console.log(findMinMax(q3Arr));
function findMinMax(arr) {
  let min = Infinity;
  let max = -Infinity;

  for (const k of arr) {
    if (max < k) max = k;
    if (k < min) min = k;
  }

  return [min, max];
}

console.log('### Q4 - CUMMULATIVE SUM AT EACH INDEX ###');
const q4Arr = [1, 5, 3, 6, 8, 9, 10, 4, 5, 1, 7, 4, 2];
console.log(calcAccumulativeSum(q4Arr));
function calcAccumulativeSum(arr) {
  let sum = 0;
  const result = [];

  for (const k of arr) {
    sum += k;
    result.push(sum);
  }
  return result;
}

console.log('### Q5 - FINDING ALL DUPLICATES IN AN ARRAY ###');
const q5Arr = [1, 5, 3, 6, 3, 8, 9, 10, 4, 8, 5, 1, 5, 7, 4, 2]; //3,8,4,5,1
console.log(findAllDuplicates(q5Arr));

function findAllDuplicates(arr) {
  const map = new Map();

  console.log([...new Set(arr)]);
  const result = [];

  for (const k of arr) {
    if (!map.get(k)) map.set(k, 1);
    else map.set(k, map.get(k) + 1);
  }

  for (const i of map.keys()) if (map.get(i) > 1) result.push(i);

  return result;
}

console.log(
  '### Q7 - FINDING THE PAIR IN AN ARRAY (contains no duplicates, but +/- numbers) ###'
);

const q7Arr = [-1, 5, -3, 6, -8, 9, 10, -4, 7, 2];
console.log(findAllPairs(q7Arr, 2));

function findAllPairs(arr, num) {
  const result = [];
  console.log(arr.sort((a, b) => a - b));

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const calc = arr[start] + arr[end] - num;
    if (calc === 0) {
      result.push([arr[start], arr[end]]);
      start++;
      end--;
    } else if (calc > 0) end--;
    else start++;
  }

  return result;
}

console.log('### Q8 - FINDING MAX SUBARRAY SUM ###');
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
function maxSubarraySum(arr, num) {
  if (arr.length < num) return;

  let maxSum = 0;
  let tmpSum = 0;

  for (let i = 0; i < num; i++) {
    tmpSum += arr[i];
  }

  maxSum = tmpSum;

  for (let i = num; i < arr.length; i++) {
    tmpSum = tmpSum + arr[i] - arr[i - num];
    if (maxSum < tmpSum) maxSum = tmpSum;
  }

  return maxSum;
}

console.log('### Q8 - FINDING MIN SUBARRAY LENGTH ###');

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

function minSubArrayLen(arr, num) {
  const length = arr.length;

  for (let i = 1; i <= length; i++) {
    if (maxSubarraySum(arr, i) >= num) return i;
  }
  return 0;
}

console.log('### Q9 - FINDING LONGEST SUBSTRING ###');
