function countAndSay(n) {
  if (n === 1) return '1';

  return runLengthEncoding(countAndSay(n - 1));
}

/**
 * For example, to compress the string "3322251" we replace "33" with "23", replace "222" with "32", replace "5" with "15" and replace "1" with "11". Thus the compressed string becomes "23321511".
 */
function runLengthEncoding(encStr) {
  const groupedList = [];
  let innerList = [encStr[0]];

  let cur = encStr[0];
  let idx = 1;

  while (idx < encStr.length) {
    if (cur !== encStr[idx]) {
      groupedList.push(innerList);
      innerList = [];
      cur = encStr[idx];
    }

    innerList.push(encStr[idx]);
    idx++;
  }

  groupedList.push(innerList);

  let result = '';

  for (let list of groupedList) {
    result += list.length;
    result += list[0];
  }

  return result;
}

for (let i = 1; i < 6; i++) {
  console.log(countAndSay(i));
}
