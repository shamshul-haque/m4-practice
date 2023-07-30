/*
    four things of for loop
    1. initialization
    2. condition
    3. increment/decrement
    4. loop body or statement
 */

// normal for loop
for (var roastGiven = 0; roastGiven < 7; roastGiven++) {
  console.log(roastGiven);
  console.log("given");
}

//print 1 to 10
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

//print even number till 10
for (var i = 0; i <= 10; i += 2) {
  console.log(i);
}

//print odd number till 10
for (var i = 1; i <= 10; i = i + 2) {
  console.log(i);
}

//print each element of an array by for loop
var arr = [5, 10, 15, 20, 25, 30];
for (var i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}
