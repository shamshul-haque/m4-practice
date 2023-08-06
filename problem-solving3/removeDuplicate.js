/* Remove duplicate items from array */
const names = [
  "abul",
  "babul",
  "kabul",
  "chabul",
  "babul",
  "dabul",
  "abul",
  "kabul",
  "chabul",
  "nabul",
];
function removeDuplicate(arr) {
  const unique = [];
  for (let item of arr) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
