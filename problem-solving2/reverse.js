const givenString = "I am a good boy";
console.log(givenString);
//string reverse
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
const reversedString = reverseString(givenString);
console.log(reversedString);

//word reverse
function reverseWord(word) {
  const words = word.split(" ");
  const result = [];
  for (let i = words.length - 1; i >= 0; i--) {
    result.push(words[i]);
  }
  const reversed = result.join(" ");
  return reversed;
}
const reversedWord = reverseWord(givenString);
console.log(reversedWord);

//array reverse
function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
const x = ["I", "am", "a", "good", "boy"];
console.log(x);
const reversedArray = reverseArray(x);
console.log(reversedArray);
