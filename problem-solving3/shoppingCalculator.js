/* Calculate the total cost of the products in a shopping cart */
const shoppingCart = [
  { name: "shirt", price: 600, quantity: 4 },
  { name: "shoe", price: 1200, quantity: 1 },
  { name: "t-shirt", price: 400, quantity: 3 },
  { name: "pant", price: 800, quantity: 6 },
  { name: "belt", price: 200, quantity: 2 },
];
function costCalculator(arr) {
  let cost = 0;
  for (let item of arr) {
    cost += item.price * item.quantity;
  }
  return cost;
}
const totalCost = costCalculator(shoppingCart);
console.log(totalCost);
