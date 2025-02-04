'use strict';

function isSubSequence(s, t) {
  let sIdx = 0;
  let tIdx = 0;
  let len = t.length;

  while (tIdx < len) {
    console.log(s[sIdx], t[tIdx]);
    if (s[sIdx] === t[tIdx]) {
      sIdx++;
    }
    tIdx++;
  }

  return sIdx === s.length;
}

// console.log(isSubSequence('abc', 'ahbgdc'));
console.log(isSubSequence('axc', 'ahbgxc'));
