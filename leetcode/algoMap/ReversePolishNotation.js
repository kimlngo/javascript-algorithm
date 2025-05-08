'use strict';

function evalRPN(tokens) {
  const stack = [];
  let n1, n2;

  for (let t of tokens) {
    if (t === '+') {
      n1 = stack.pop();
      n2 = stack.pop();
      stack.push(n2 + n1);
    } else if (t === '-') {
      n1 = stack.pop();
      n2 = stack.pop();
      stack.push(n2 - n1);
    } else if (t === '*') {
      n1 = stack.pop();
      n2 = stack.pop();
      stack.push(n2 * n1);
    } else if (t === '/') {
      n1 = stack.pop();
      n2 = stack.pop();
      stack.push(Math.trunc(n2 / n1));
    } else stack.push(Number(t));
  }

  return stack.pop();
}

console.log(evalRPN(['2', '1', '+', '3', '*']));
console.log(evalRPN(['4', '13', '5', '/', '+']));
console.log(
  evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])
);
