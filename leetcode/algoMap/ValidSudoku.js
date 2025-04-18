'use strict';

const DIMENSION = 9;

function isValidSudoku(board) {
  //check all the rows
  console.log('check all the rows');
  for (let row = 0; row < DIMENSION; row++) {
    console.log(board[row]);
    if (containsDuplicate(board[row])) return false;
  }

  //check all the columns
  console.log('check all the columns');
  for (let col = 0; col < DIMENSION; col++) {
    let column = [];
    for (let row = 0; row < DIMENSION; row++) {
      column.push(board[row][col]);
    }
    console.log(column);
    if (containsDuplicate(column)) return false;
  }

  //check sub-boxes
  console.log('check all the boxes');
  for (let row = 0; row <= 2; row++) {
    for (let col = 0; col <= 2; col++) {
      const box = extractSubBox(row, col, board);
      console.log(box);
      if (containsDuplicate(box)) return false;
    }
  }
  return true;
}

/**
 *
 * @param {*} row
 * @param {*} col
 * row: [0 -> 2]
 * col: [0 -> 2]
 */
function extractSubBox(row, col, board) {
  const box = [];

  for (let r = row * 3; r <= row * 3 + 2; r++) {
    for (let c = col * 3; c <= col * 3 + 2; c++) box.push(board[r][c]);
  }

  return box;
}

/**
 *
 * @param {*} array
 * @returns true if contains duplicate
 * otherwise false
 */
function containsDuplicate(array) {
  const set = new Set();

  for (const c of array) {
    if (c !== '.') {
      if (set.has(c)) return true;
      else set.add(c);
    }
  }

  return false;
}

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
