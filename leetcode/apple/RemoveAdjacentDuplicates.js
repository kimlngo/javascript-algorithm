/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  if (s.length === 1) return s;

  const stack = [];
  stack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    const c = s[i];

    if (stack.length === 0) {
      stack.push(c);
      continue;
    }

    const pop = stack.pop();

    if (pop !== c) {
      stack.push(pop);
      stack.push(c);
    }
  }

  return stack.join('');
};

console.log(removeDuplicates('abbaca'));
console.log(removeDuplicates('azxxzy'));
console.log(removeDuplicates('aaaaaaaaa'));
