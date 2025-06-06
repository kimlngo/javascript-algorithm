'use strict';

/**
 * You are given an array of strings words and a string chars.
 * <p>
 * A string is good if it can be formed by characters from chars (each character can only be used once for each word in words).
 * <p>
 * Return the sum of lengths of all good strings in words.
 * <p>
 * Example 1:
 * <p>
 * Input: words = ["cat","bt","hat","tree"], chars = "atach"
 * Output: 6
 * Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
 * <p>
 * Example 2:
 * <p>
 * Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
 * Output: 10
 * Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10
 *
 * @param words
 * @param chars
 * @return character count of all good words
 */

function countCharacters(words, chars) {
  const goodWords = [];

  //1) build inventoryChars
  const inventoryFreqMap = buildWordMap(chars);

  //2) for each word in words
  //build the wordMap
  //check if the wordMap requirement can be addressed by inventorChars
  //if yes -> good word, otherwise move on

  for (let word of words) {
    const wordMap = buildWordMap(word);
    let isGoodWord = true;

    for (let key of wordMap.keys()) {
      if (
        !inventoryFreqMap.get(key) ||
        wordMap.get(key) > inventoryFreqMap.get(key)
      ) {
        isGoodWord = false;
      }
    }

    if (isGoodWord) goodWords.push(word);
  }

  //finally return the character count of all good words
  return goodWords.map(word => word.length).reduce((acc, cur) => acc + cur, 0);
}

function buildWordMap(word) {
  const map = new Map();

  for (let c of word) {
    if (!map.get(c)) map.set(c, 0);

    map.set(c, map.get(c) + 1);
  }

  return map;
}

console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'));
console.log(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr'));
