const lyrics =
  "tumi bondhu kata pakhi ami jeno kii. bosonto kale tomay dekhte pari ni";
//split string
const character = lyrics.split("");
const word = lyrics.split(" ");
const sentence = lyrics.split(".");
console.log(character);
console.log(word);
console.log(sentence);

//take a portion
const part = lyrics.slice(5, 12);
console.log(part);
const part2 = lyrics.substring(5, 12);
console.log(part2);

//join string
const line = [
  "tumi bondhu kata pakhi ami jeno kii",
  "bosonto kale tomay dekhte pari ni",
];
const newSong = line.join("; ");
console.log(newSong);
