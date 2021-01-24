exports.add = (x, y) => {
  return `${x} + ${y} = ${x + y}`;
};

exports.mines = (x, y) => {
  return `${x} - ${y} = ${x - y}`;
};

exports.multy = (x, y) => {
  return `${x} * ${y} = ${x * y}`;
};
exports.divided = (x, y) => {
  if (y <= 0) {
    return 'cant not divide by Zero';
  }
  return `${x} / ${y} = ${(x / y).toFixed(2)}`;
};
