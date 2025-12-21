function climbStairs(n) {
  if (n < 4) return n;

  let first = 1;
  let second = 2;

  for (let i = 2; i < n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }

  return second;
}

for (let i = 1; i < 46; i++) {
  console.log(`i = ${i} - # of ways: ${climbStairs(i)}`);
}
