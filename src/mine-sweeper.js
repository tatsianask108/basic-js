const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];

  for (let row = 0; row < matrix.length; row++) {
    result[row] ??= [];

    for (let col = 0; col < matrix[row].length; col++) {
      result[row][col] ??= 0;

      if (matrix[row][col]) {
        let start_increase_row = (row === 0) ? 0 : row - 1,
          end_increase_row = (row === matrix.length - 1) ? matrix.length - 1 : row + 1,
          start_increase_col = (col === 0) ? 0 : col - 1,
          end_increase_col = (col === matrix[row].length - 1) ? matrix.length - 1 : col + 1;

        for (let current_increase_row = start_increase_row; current_increase_row <= end_increase_row; current_increase_row++) {
          result[current_increase_row] ??= []; // if no result[row] to set = []

          for (let current_increase_col = start_increase_col; current_increase_col <= end_increase_col; current_increase_col++) {
            result[current_increase_row][current_increase_col] ??= 0;
            if (current_increase_row === row && current_increase_col === col) {
              continue;
            }

            result[current_increase_row][current_increase_col]++;
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
