const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

// Your job is to write a function that takes the array and returns an array of titles:

const getTheTitles = function (array) {
  return array.map((book) => book.title);
};

console.log(getTheTitles(books));

// console.log(`getTheTitles: ${getTheTitles}`);
// Do not edit below this line
// module.exports = getTheTitles;
