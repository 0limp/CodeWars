// [5, 9, 1, 0]
// [8, 7, 2, 3]
// [1, 4, 1, 9]
// [2, 3, 8, 2]

// sum =  5 + 7 + 1 + 2 = 15

function diagonalSum(matrix) {
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    count += matrix[i][i];
  }
  return count;
}
