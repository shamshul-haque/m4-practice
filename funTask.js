function pundaCost(shingaraQuantity, somucaQuantity, jilapiQuantiy) {
  const shingaraCost = shingaraQuantity * 7;
  const somucaCost = somucaQuantity * 10;
  const jilapiCost = jilapiQuantiy * 15;
  const totalCost = shingaraCost + somucaCost + jilapiCost;
  return totalCost;
}
const shingra = 4;
const somuca = 3;
const jilabi = 3;
const cost = pundaCost(shingra, somuca, jilabi);
console.log("Give me", cost, "💰  and take your 🍢");
