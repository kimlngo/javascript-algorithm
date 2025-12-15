function longestSubString(s) {
  const length = s.length;

  if (length < 2) return length;

  let seen = [];
  let maxLen = -1;

  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      const c = s[j];

      if (!seen.includes(c)) seen.push(c);
      else {
        maxLen = Math.max(maxLen, seen.length);
        seen = [];
        break;
      }
    }
  }

  return maxLen;
}

console.log(longestSubString('abcabcbb'));
console.log(longestSubString('abcadef'));
