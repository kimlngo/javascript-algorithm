function appleRedistribution(apple, capacity) {
  //1) count total # of apples
  let totalApple = 0;
  for (let a of apple) totalApple += a;

  //2) sort capacity descending order
  capacity.sort((a, b) => b - a);

  //3) iterate through capacity and subtract apples as used the box
  //stop when no more apples or no more boxes
  let boxCount = 0;

  while (totalApple > 0 && boxCount < capacity.length) {
    const cap = capacity[boxCount];
    totalApple -= cap;
    boxCount++;
  }

  return boxCount;
}

console.log(appleRedistribution([1, 3, 2], [4, 3, 1, 5, 2]));
console.log(appleRedistribution([5, 5, 5], [2, 4, 2, 7]));
