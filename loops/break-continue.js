// break in for loop
for (var i = 0; i <= 20; i++) {
  if (i >= 11) {
    break;
  }
  console.log(i);
}

//break in while loop
var roastGiven = 1;
while (roastGiven <= 10) {
  if (roastGiven >= 6) {
    break;
  }
  console.log(roastGiven + " " + "Served");
  roastGiven++;
}

//continue in for loop
for (var i = 0; i <= 20; i++) {
  if (i <= 10) {
    continue;
  }
  console.log(i);
}

//continue in while loop
var roastGiven = 1;
while (roastGiven < 10) {
  roastGiven++;
  if (roastGiven <= 5) {
    continue;
  }
  console.log(roastGiven + " " + "Served");
}
