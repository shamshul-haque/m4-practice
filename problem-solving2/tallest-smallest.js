/* Tom and his friends are participating in the "who is tallest" competition. As per the name, the person with the height will be the winner. Can you find who is tallest? */
const arr = [167, 190, 120, 165, 265];
function findTallest(height) {
  let tallest = height[0];
  for (let item of height) {
    if (item > tallest) {
      tallest = item;
    }
  }
  return tallest;
}
const tallestPerson = findTallest(arr);
console.log("The tallest number is: ", tallestPerson);

/* Can you find who is smallest? */
function findSmallest(height) {
  let smallest = height[0];
  for (let item of height) {
    if (item < smallest) {
      smallest = item;
    }
  }
  return smallest;
}
const smallestPerson = findSmallest(arr);
console.log("The smallest number is: ", smallestPerson);
