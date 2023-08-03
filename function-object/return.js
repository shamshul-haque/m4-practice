function add(n1, n2) {
  console.log(n1, n2);
  var sum = n1 + n2;
  return sum;
}
var total = add(29, 21);
console.log(total);

function bringSingra(money) {
  var singraPrice = 8;
  var quantity = money / singraPrice;
  return quantity;
}
var givenTaka = 300;
var singaras = bringSingra(givenTaka);
console.log("Total Singara: ", Number(singaras.toFixed(2)));

function getAvg(ass1, ass2, ass3) {
  var total = ass1 + ass2 + ass3;
  var avg = total / 3;
  return avg;
}
var ass1Mark = 56;
var ass2Mark = 29;
var ass3Mark = 34;
var average = getAvg(ass1Mark, ass2Mark, ass3Mark);
console.log("Your Average is: ", Number(average.toFixed(2)));
