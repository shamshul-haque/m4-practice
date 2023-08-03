/* Write a function findSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will find the sum of the number */
function findSum(array) {
  let sum = 0;
  //In normal loop
  /* for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum += element;
  } */
  //In for in loop
  for (let keys in array) {
    const values = array[keys];
    sum += values;
  }
  return sum;
}
const arr = [5, 7, 8, 10, 45, 30];
const summation = findSum(arr);
console.log(summation);
