const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

function appendAge(obj) {
  for (let i = 0; i < obj.length; i++) {
    let age = obj[i].yearOfDeath - obj[i].yearOfBirth;
    obj[i]["age"] = age;
  }
}

function oldestPerson(obj) {
  let oldest = 0;
  let oldestObject;
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].age > oldest) {
      oldest = obj[i].age;
      oldestObject = obj[i];
    }
  }
  return oldestObject;
}

const findTheOldest = function (obj) {
  // add age to object
  appendAge(obj);
  // sort descending
  let oldestObject = oldestPerson(obj);
  return oldestObject;
};

console.log(findTheOldest(people));

// Do not edit below this line
// module.exports = findTheOldest;
