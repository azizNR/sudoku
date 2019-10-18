module.exports = function solveSudoku(matrix) {
const workMatrix = [...matrix];

  return sudokuSolution(0, 0, workMatrix);  
}

function sudokuSolution(row, col , matrix) {
  const newMatrix = [...matrix];

  if (row === 9){
    row = 0;
    col = col + 1;
    if (col === 9) {
      return matrix;
    }
  }
  if (matrix[row][col] != 0) {
    return sudokuSolution(row + 1, col, matrix)
  }
  for (let value = 1; value <= 9; value++) {
    if (checkValue(row, col, value, newMatrix)){
      newMatrix[row][col] = value;
        if (sudokuSolution(row, col , newMatrix)) {
        return sudokuSolution(row, col , newMatrix); 
      }
      newMatrix[row][col] = 0;
    }
  }
  return false;
}

function checkValue(row, col, value, matrix) {
  for (let i = 0; i < 9; i++) {
    if (matrix[i][col] === value) {
      return false;
    }    
  }
  for (let j = 0; j < 9; j++) {
    if (matrix[row][j] === value) {
      return false;
    } 
  }

  row = Math.floor(row / 3) * 3;
  col = Math.floor(col / 3) * 3;

  for (let i = row; i < row + 3; i++) {
    for (let j = col; j < col + 3; j++) {
      if (matrix[i][j] === value) {
        return false;
      } 
    }    
  }
  return true;
}
