/* Write a program to check a year is leap year or not */
function checkLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

const givenYear = 2023;
const isLeapYear = checkLeapYear(givenYear);
console.log(isLeapYear);
