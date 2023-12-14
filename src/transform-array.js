const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/*arr*/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let res = []
  // if (!Array.isArray(arr)) {
  //   throw new Error(`'arr' parameter must be an instance of the Array!`)
  // };


  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === '--double-next') {
  //     res.push(arr[i + 1] * 2);
  //     i += 2;
  //   }
  //   if (arr[i] === '--double-prev') {
  //     res[i - 1] = res[i - 1] * 2;
  //   }
  //   if (arr[i] === '--discard-next') {
  //     i += 2;
  //   }
  //   if (arr[i] === '--discard-prev') {
  //     res.splice(res[i - 2], 1);
  //   } else res.push(arr[i])
  // }
  // return res;
}

module.exports = {
  transform
};
