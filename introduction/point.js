// define how many digits want to show after point "."
var a = 0.1;
var b = 0.2;
var c = a + b;
console.log(c);
c = c.toFixed(2);
console.log(c); //it will show string after fixed
c = parseFloat(c);
console.log(c);
