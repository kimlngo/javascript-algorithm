function rotateImage(matrix) {
  const len = matrix.length;
  if (len === 1) return;

  flipVertical(matrix);

  let tmp;
  for (let row = 0; row < len - 1; row++) {
    for (let col = 0; col < len - 1 - row; col++) {
      tmp = matrix[row][col];
      matrix[row][col] = matrix[len - col - 1][len - row - 1];
      matrix[len - col - 1][len - row - 1] = tmp;
    }
  }
}

function flipVertical(matrix) {
  for (let arr of matrix) {
    arr.reverse();
  }
}

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotateImage(matrix);
console.log(matrix);
