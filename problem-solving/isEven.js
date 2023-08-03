/* Peter's school teacher asked him to write a program that would return true if the number is even and false if the number is odd. */
function checkEven(number) {
  const reminder = number % 2;
  return reminder == 0 ? true : false;
}

const givenNumber = 235;

const isEven = checkEven(givenNumber);
console.log(isEven);
