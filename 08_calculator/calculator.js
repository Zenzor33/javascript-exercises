const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let sum = 0;
  array.forEach((element) => sum += element);
  return sum;
};


const multiply = function (array) {
  let total = 1;
  array.forEach((element) => total *= element);
  return total;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (number) {
  // loop through number to 1
  // multiply i and (i-1)
  let result = 1;
  if (number === 0) {
    return 1;
  } else {
    for (let i = number; i >= 1; i--) {
      result *= i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
