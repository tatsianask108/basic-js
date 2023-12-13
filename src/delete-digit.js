const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    let cutStr = +(str.slice(0, i) + str.slice(i + 1));
    // console.log('slice(0, i) ' + str.slice(0, i))
    // console.log('slice(i + 1) ' + str.slice(i + 1))
    // console.log('modifiedNum ' + cutStr)
    max = Math.max(max, cutStr);
  }

  return max;
}

module.exports = {
  deleteDigit
};
