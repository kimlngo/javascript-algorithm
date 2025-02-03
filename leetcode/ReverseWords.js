'use strict';

function reverseWords(s) {
  const result = [];
  const split = s.trim().split(/\s+/);

  for (let i = split.length - 1; i >= 0; i--) result.push(split[i]);

  console.log(result);

  return result.join(' ');
}

console.log(reverseWords('The sky is blue'));
console.log(reverseWords('  hello world  '));
console.log(reverseWords('a good   example'));
