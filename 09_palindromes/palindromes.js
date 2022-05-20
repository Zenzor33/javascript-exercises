// removes punctuation from string
// case insensitive
// 

function removePunctuation(string) {
    let newStr = '';
    for (i = 0; i < string.length; i++) {
        if (string[i] === '!' ||
            string[i] === ',' ||
            string[i] === '.' ||
            string[i] === ' ') {
                continue
        } else {
            newStr += string[i];
        }
    }
    return newStr;
}


const palindromes = function (str) {
    let str1 = removePunctuation(str);
    let string = str1.toLowerCase();
    for (i = 0; i < string.length; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// console.log(palindromes('racecar!'));
// console.log(palindromes('racecar'))

// Do not edit below this line
module.exports = palindromes;
