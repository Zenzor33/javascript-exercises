const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }
  newArr = [1, 1];
  for (let i = 2; i < num; i++) {
    newArr.push(newArr[i - 2] + newArr[i - 1]);
  }
  // console.log(newArr[num - 1]);
  return newArr[num - 1];
};

fibonacci();
// returns the 4th member of the series: 3  (1, 1, 2, 3)

// Do not edit below this line
module.exports = fibonacci;
