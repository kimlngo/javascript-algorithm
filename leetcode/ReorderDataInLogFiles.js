'use strict';

const DIGIT = 'DIGIT';
const LETTER = 'LETTER';

function reorderLogFiles(logs) {
  const allLogs = transformLog(logs);

  const letterLogs = allLogs
    .filter(l => l.type === LETTER)
    .sort((l1, l2) => compareLetterLog(l1, l2));
  const digitLogs = allLogs.filter(l => l.type === DIGIT);

  return [...letterLogs, ...digitLogs].map(l => `${l.identifier} ${l.content}`);
}

function compareLetterLog(l1, l2) {
  if (l1.content === l2.content) {
    return l1.identifier.localeCompare(l2.identifier);
  } else {
    return l1.content.localeCompare(l2.content);
  }
}

function transformLog(logs) {
  const allLogs = [];

  for (const log of logs) {
    const idx = log.indexOf(' ');
    const identifier = log.substring(0, idx);
    const content = log.substring(idx + 1);
    const firstChar = content[0] - '0';
    const type = firstChar >= 0 && firstChar <= 9 ? DIGIT : LETTER;

    allLogs.push({ type, identifier, content });
  }

  return allLogs;
}

console.log(
  reorderLogFiles([
    'dig1 8 1 5 1',
    'let1 art can',
    'dig2 3 6',
    'let2 own kit dig',
    'let3 art zero',
  ])
);

console.log(
  reorderLogFiles([
    'a1 9 2 3 1',
    'g1 act car',
    'zo4 4 7',
    'ab1 off key dog',
    'a8 act zoo',
  ])
);
