//function parameter
function bringSingara(money) {
  //money is parameter
  console.log("Singara");
  console.log(money);
}

//call parameter function
bringSingara(100); //100 is argument or value

//multiple parameter
function sum(a, b, c) {
  console.log(a, b, c);
  var sum = a + b + c;
  console.log(sum);
}
sum(10, 20, 30);
