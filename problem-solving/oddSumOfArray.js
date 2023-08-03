/* Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will find the sum of the odd number */
function findOddSum(array) {
  let oddArr = [];
  let oddSum = 0;
  //In normal loop
  /* for (let i = 0; i < array.length; i++) {
    const element = array[i];
    element % 2 != 0 ? oddArr.push(element) + (oddSum += element) : "";
  } */
  //In for in loop
  for (let keys in array) {
    const values = array[keys];
    values % 2 != 0 ? oddArr.push(values) + (oddSum += values) : "";
  }
  console.log(oddArr);
  return oddSum;
}
const arr = [5, 7, 8, 10, 45, 30];
const oddSummation = findOddSum(arr);
console.log(oddSummation);
