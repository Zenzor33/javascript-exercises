const repeatString = function(str, num) {
  let i = 0;
  let newstr ='';
  if (num < 0) {
    return 'ERROR';
  }
  while (i < num) {
    newstr += str;
    i++;
  }
  return newstr;
};

// console.log(repeatString('hey',3));

// Do not edit below this line
module.exports = repeatString;
