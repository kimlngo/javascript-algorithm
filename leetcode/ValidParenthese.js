'use strict';

var isValid = function (s) {
  if (s.length % 2 === 1) return false;

  const OPEN_CHARS = ['(', '{', '['];
  const CLOSE_CHARS = [')', '}', ']'];
  const stack = [];

  for (let c of [...s]) {
    if (OPEN_CHARS.includes(c)) stack.push(c);
    else if (stack.length === 0 && CLOSE_CHARS.includes(c)) return false;
    else {
      const popChar = stack.pop();

      if (popChar === '(' && c !== ')') return false;
      else if (popChar === '{' && c !== '}') return false;
      else if (popChar === '[' && c !== ']') return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('(]'));
