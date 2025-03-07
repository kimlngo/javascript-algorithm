'use strict';

function removeStars(s) {
  const stack = [];

  for (let c of [...s]) {
    if (c !== '*') stack.push(c);
    else stack.pop();
  }

  return stack.join('');
}

console.log(removeStars('leet**cod*e'));
console.log(removeStars('erase*****'));
