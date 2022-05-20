/* Implement a function that takes 2 integers and returns 
the sum of every number between(and including) them: 

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
``` */

/*
1. Create a function with two paramters:
	Parameters: firstInt, lastInt
	firstInt and lastInt definte the range for the summation
2. Create a loop. Initialize from firstInt, condition <= lastInt, i++ 
*/

const sumAll = function(int1, int2) {
	let biggest = 0;
	let smallest = 0;

	if (typeof(int1) !== 'number' || typeof(int2) !== 'number') return 'ERROR' // not a number
	if (int1 < 0 || int2 < 0) return 'ERROR' // number can not be negative

	if (int1 > int2) {
		biggest = int1;
		smallest = int2;
	} else {
		biggest = int2;
		smallest = int1;
	}

	let total = 0;
	for (let i = smallest; i <= biggest; i++) {
		total += i;
	}

	// return(`total ${total} with biggest ${biggest} and smallest ${smallest}`);
	return total;
	// loop from smallest to biggest integer
};

// console.log(sumAll(4000,1));

// Do not edit below this line
module.exports = sumAll;
