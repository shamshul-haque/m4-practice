/* Number validation */
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Please give two number";
  } else {
    let sum = a + b;
    return sum;
  }
}
console.log(add(3, 5));

/* Array validation */
function sum(arr) {
  let add = 0;
  if (!Array.isArray(arr)) {
    return "Please provide an array";
  }
  for (var item of arr) {
    add += item;
  }
  return add;
}
const x = [1, 2, 3, 4, 5];
console.log(sum(x));

/* Find how many vowels, consonants and spaces are in the given string with validation */

function findVowels(str) {
  if (typeof str !== "string") {
    return "Please provide a string";
  }
  let vowels = 0;
  let consonants = 0;
  let spaces = 0;
  for (let element of str) {
    const char = element.toLowerCase();
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowels++;
    } else if (char !== " ") {
      consonants++;
    } else {
      spaces++;
    }
  }
  const obj = {
    vowelsCount: vowels,
    consonantsCount: consonants,
    spacesCount: spaces,
  };
  return obj;
}
const givenSentence = "The Name of Our Country is Bangladesh";
console.log(findVowels(givenSentence));
