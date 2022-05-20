/*
Conditions for leap year:
1. Leap years are divisible by 4
2. Years divisible by 100 are not leap years
3. Years divisble by 400 are leap years

sample outout:
leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false

Steps:
1. Create function leapyears that accepts one positive integer param: year
2. Check that the input is a positive integer
3. Leap years have the following conditions:
-- year % 4 === 0 return true
-- if year >= 100 && year % 100 === 0 return false
-- if year >= 400 && year % 400 === 0 return true

if (year % 400 === 0) retun true;
if (year % 100 === 0) return false;
if (year % 4 === 0) return true;

*/

// const leapYears = function(year) {
//     if (year % 400 === 0) return true;
//     if (year % 100 === 0) return false;
//     if (year % 4 === 0) return true;
//     else return false;

// };

const leapYears = function(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) return true
}

console.log(leapYears(400));

// console.log(leapYears(1900));

// Do not edit below this line
// module.exports = leapYears;
