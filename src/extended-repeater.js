const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {

  let defaultOptions = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|'
  }

  options = {...defaultOptions, ...options}

  const additionalArray = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionalArray.push(String(options.addition))
  }

  let resultArray = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    resultArray.push(str + additionalArray.join(options.additionSeparator))
  }

  return resultArray.join(options.separator);
}

module.exports = {
  repeater
};
