const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // const res = [];
  // let fileCount;

  // names.forEach(name => {
  //   if (!res.includes(name)) {
  //     res.push(name);
  //     fileCount = 1;
  //   } else {
  //     const newName = `${name}(${fileCount})`
  //     fileCount++;
  //     res.push(newName);
  //   }
  // });

  // return res;

  const res = [];
  const fileCount = {};

  names.forEach(name => {
    if (!res.includes(name)) {
      res.push(name);
      fileCount[name] = 1;

    } else {

      const newName = `${name}(${fileCount[name] || 1})`;
      fileCount[name]++;
      res.push(newName);

    }
  });

  return res;
}

module.exports = {
  renameFiles
};
