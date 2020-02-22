module.exports = function countCats(matrix) {
  const flat = matrix.flat(2);
  return flat.reduce((totall, el) => {
    if (el === "^^")++totall;
    return totall;
  }, 0)
};
