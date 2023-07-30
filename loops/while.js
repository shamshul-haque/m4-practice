/*
  four things of while loop
  1. Loop variable
  2. condition inside while
  3. loop body
  4. increment decrement
*/
var roastGiven = 0;
while (roastGiven < 7) {
  console.log(roastGiven);
  console.log("Given");
  roastGiven++;
}

//print 1 to 10
var number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}

//print even number till 10
var number = 0;
while (number <= 10) {
  console.log(number);
  number += 2;
}

//print odd number till 10
var number = 1;
while (number <= 10) {
  console.log(number);
  number = number + 2;
}
