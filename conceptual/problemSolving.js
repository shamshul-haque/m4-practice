/* for of loop. we will used it on array and string */
const petAnimal = ["dog", "cat", "elephant", "horse", "rat"];
for (let element of petAnimal) {
  console.log(element);
}

/* for in loop. we will use it in object */
const obj = {
  name: "sujat",
  age: 25,
  study: "BSc",
  subject: "CSE",
  university: "SEU",
};
for (let keys in obj) {
  const values = obj[keys];
  console.log(keys, values);
}

/* make sentence by given object */
function information(info) {
  const sentence = "I am " + info.name + ", My age is " + info.age;

  return sentence;
}
const myInfo = information(obj);
console.log(myInfo);

/* find the largest number of an array */
function findLargest(array) {
  let largest = array[0];
  for (let item of arr) {
    if (item > largest) {
      largest = item;
    }
  }
  return largest;
}
const arr = [5, 12, 7, 9, 20, 4, 2, 3];
const result = findLargest(arr);
console.log(result);

/* find largest name of friends */
function largestFriendName(name) {
  let largestName = name[0];
  for (let item of name) {
    if (item.length > largestName.length) {
      largestName = item;
    }
  }
  return largestName;
}
const friends = [
  "binda",
  "sourav",
  "tonmoy",
  "Dipto",
  "sumaiya",
  "munia",
  "liza",
];
const biggestName = largestFriendName(friends);
console.log(biggestName);
