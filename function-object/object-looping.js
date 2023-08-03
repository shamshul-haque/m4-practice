var shoppingCart = {
  book: 3,
  pen: 12,
  khata: 6,
  pencil: 4,
  robor: 8,
  stepler: 1,
};
console.log(Object.keys(shoppingCart));
console.log(Object.values(shoppingCart));
console.log(Object.entries(shoppingCart));

//for in loop
for (var keys in shoppingCart) {
  var values = shoppingCart[keys];
  console.log(keys, values);
}
