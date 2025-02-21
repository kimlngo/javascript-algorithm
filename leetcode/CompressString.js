'use strict';

function compress(chars) {
  for (let i = 0; i < chars.length; i++) {
    const cur = chars[i];
    const groupStartIdx = i + 1;
    let groupCount = 1;

    while (i + 1 < chars.length && chars[i] === chars[i + 1]) {
      groupCount++;
      i++;
    }

    if (groupCount > 1) {
      const groupCountStr = groupCount + '';
      for (let count = 0; count < groupCountStr.length; count++) {
        chars[groupStartIdx + count] = groupCountStr[count];
      }

      chars.splice(
        groupStartIdx + groupCountStr.length,
        groupCount - 1 - groupCountStr.length
      );
      i = groupStartIdx + groupCountStr.length - 1;
    }

    //restart for next group
    groupCount = 1;
  }
}

compress(['a', 'b', 'b', 'b', 'b', 'b', 'a', 'a', 'a', 'c']);
