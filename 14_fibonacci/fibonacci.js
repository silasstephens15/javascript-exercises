const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 0; i < num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return a;
};

// Do not edit below this line
module.exports = fibonacci;
