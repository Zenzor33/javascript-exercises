/*
Write two functions that convert F to C
The temperatures should be rounded to 1 decimal place

Conversion:
(F − 32) × 5/9 = °C
(°C × 9/5) + 32 = °F

How to round: 
var number = 12.3456789
var rounded = Math.round(number * 10) / 10
// rounded is 12.


*/


const ftoc = function(f) {
  const c = (f - 32) * (5/9);
  const roundedC = Math.round(c * 10) / 10
  return roundedC;
};

const ctof = function(c) {
  const f = (c * (9/5) + 32);
  const roundedF = Math.round(f * 10) / 10;
  return roundedF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
