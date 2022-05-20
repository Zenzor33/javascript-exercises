const reverseString = function(string) {
	let rstr = '';

	for (let i=1; i <= string.length; i++) {
		let letter = string[string.length - i];
		rstr += letter;
	}

	return rstr;
};

// let string = 'Hello my name is Richard';
// let rstr = '';

// for (let i=1; i <= string.length; i++) {
// 	let letter = string[string.length - i];
// 	rstr += letter;
// }

// console.log(rstr);

// Do not edit below this line
module.exports = reverseString;
