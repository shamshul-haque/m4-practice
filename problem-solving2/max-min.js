/* Jim is a meritorious student. He secures first place in his class all the time. This year Dela has joined his class. She was also a topper at her previous school. On the day of result publication, the teacher comes into the class with a delicious cake and says that "Jim and Dela, whoever is the topper, will get this testy cake." Can you find out who will get this cake? */
function maxNum(a, b) {
  let calculate = Math.max(a, b); //calculate max number
  return calculate == a ? "Jim will get the cake" : "Dela will get the cake";
}
let jim = 64;
let dela = 52;
let result = maxNum(jim, dela);
console.log(result);

/* This year not only Jim and Dela but also Chinku are doing hard work to secure the first position. But one person will be eliminate. Can you find out who will be eliminate? */
function minNum(a, b, c) {
  const calculate = Math.min(a, b, c); //calculate min number
  return calculate == a
    ? "Jim will be eliminate"
    : calculate == b
    ? "Dela will be eliminate"
    : "Chinku will be eliminate";
}

jim = 84;
dela = 57;
let chinku = 77;
result = minNum(jim, dela, chinku);
console.log(result);
