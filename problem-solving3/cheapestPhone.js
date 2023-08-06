/*  Find the cheapest phone from an array of phone objects */
const phones = [
  {
    name: "samsung",
    camera: 12,
    storage: "32gb",
    color: "silver",
    price: 36000,
  },
  { name: "oppo", camera: 10, storage: "16gb", color: "black", price: 22000 },
  {
    name: "iphone",
    camera: 64,
    storage: "128gb",
    color: "pink",
    price: 140000,
  },
  { name: "redmi", camera: 48, storage: "64gb", color: "black", price: 26000 },
  {
    name: "realme",
    camera: 36,
    storage: "64gb",
    color: "silver",
    price: 20000,
  },
];
function findCheapestPhone(array) {
  let cheapestPhone = array[0];
  for (let item of array) {
    if (item.price < cheapestPhone.price) {
      cheapestPhone = item;
    }
  }
  return cheapestPhone;
}
const mySelection = findCheapestPhone(phones);
console.log(mySelection);
