/*
Syntax:
    var objectName = {
        propertiesName: propertiesValue,
    }
*/

var mobile = {
  brand: "Redmi",
  model: "Note 9s",
  rom: "6gb",
  ram: "128gb",
  camera: "64mp",
  color: "Shining Black",
  price: 25990,
};
console.log(mobile);
console.log(mobile.model);

var computer = {
  brand: "HP",
  model: "Pro book series",
  storage: "8gb",
  SSD: "512gb",
  display: "14inch",
  color: "silver",
  price: 64000,
};
console.log(computer);
console.log(computer.price); //get property value
computer.price = 63000; //change property value
console.log(computer);
