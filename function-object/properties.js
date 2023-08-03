var shoppingCart = {
  book: 3,
  pen: 12,
  khata: 6,
  pencil: 4,
  robor: 8,
  stepler: 1,
};
var propertyNames = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
console.log(propertyNames);
console.log(propertyValues);

//get property values
var getPen = shoppingCart.pen; //way-1
var getPen1 = shoppingCart["pen"]; //way-2
var propertyName = "pen";
var getPen2 = shoppingCart[propertyName]; //way-3
console.log(getPen2);

//set property values
shoppingCart.pen = 15; //way-1
shoppingCart["pen"] = 29; //way-2
shoppingCart[propertyName] = 50; //way-3
console.log(shoppingCart);
