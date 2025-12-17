const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce( (total, item) => total + item, 0);

const multiply = (arr) => arr.reduce( (total, item) => total * item, 1);

const power = (base, exponent) => base**exponent;

const factorial = (num) => num <= 1? 1 : num * factorial(num - 1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
