function longestCommonPrefix(arr1, arr2) {
  //1) Build the prefix of arr1
  const prefix = new Set();

  for (let n of arr1) {
    while (!prefix.has(n) && n > 0) {
      prefix.add(n);
      n = Math.trunc(n / 10);
    }
  }

  //2) iterate through each element of arr2
  //check if the element or prefix exist,
  //if so, calculate and set the longestLength
  let longestLength = 0;

  for (let m of arr2) {
    while (!prefix.has(m) && m > 0) {
      m = Math.trunc(m / 10);
    }

    if (m > 0) {
      //check the length
      longestLength = Math.max(longestLength, Math.trunc(Math.log10(m)) + 1);
    }
  }

  return longestLength;
}

console.log(longestCommonPrefix([10], [17, 11]));
console.log(longestCommonPrefix([1, 10, 100], [1000]));
console.log(longestCommonPrefix([1, 2, 3], [4, 4, 4]));
