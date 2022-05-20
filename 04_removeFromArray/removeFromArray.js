// const removeFromArray = function(arr, ...removeValue) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === removeValue) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// };

// const arr = [1,2,3,4];
// const arr2 = [3,4];

//   for (let i=0; i < arr.length; i++) {
//     console.log(`arr[${i}]:`,  arr[i]);
//     for (let j=0; j < arr2.length; j++) {
//       if (arr2[j] === arr[i]) {
//         console.log('arr2[j]:', arr2[j]);
//         arr.splice(i, 1);
//       }
//     }
//   }
// console.log(arr);

// # Exercise 04 - removeFromArray

// Implement a function that takes an array and some other arguments 
// then removes the other arguments from that array:

// ```javascript
// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
// ```

// My first solution

// function removeFromArray(arr, ...remove) {
//   // remove.sort();
//   for (let i=0; i < arr.length; i++) {
//     for (let j=0; j < remove.length; j++) {
//       if (remove[j] === arr[i]) {
//         arr.splice(i, 1);
//       }
//     }
//   }
//   return arr;
// }


// Tobias solution

// function removeFromArray(array, ...remove) {
//   return array.filter(el => remove.indexOf(el) === -1)
// }


// console.log(removeFromArray([1,2,3,4], 3,2));
// console.log(removeFromArray([1,2,3,4], 2,3));

// My second solution



function removeFromArray(array,...removed) {
  let newArray = [];
  array.forEach(function(element) {
      if (!removed.includes(element)) {
          newArray.push(element);
      }
  })
  return newArray;
}

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
