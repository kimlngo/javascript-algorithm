'use strict';

function removeOuterParentheses(s) {
  let stack = [],
    validStrs = [];
  let str = '';

  for (let c of s) {
    str += c;
    if (c === '(') {
      stack.push(c);
    } else {
      stack.pop();
      if (stack.length === 0) {
        validStrs.push(str);
        str = '';
      }
    }
  }

  return validStrs.map(t => t.substring(1, t.length - 1)).join('');
}

console.log(removeOuterParentheses('(()())(())'));
console.log(removeOuterParentheses('(()())(())(()(()))'));
console.log(removeOuterParentheses('()()'));
