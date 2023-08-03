/* Write a program to calculate the factorial of a value. Example: 3! = 3 * 2 * 1= 6 */
function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    console.log(i);
    result *= i;
  }
  return result;
}
const num = 5;
const fact = factorial(num);
console.log(fact);
