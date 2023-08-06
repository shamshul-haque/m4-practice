/* 
1. chair -> 3cft
2. table -> 5cft
3. bed -> 50cft
Write a program to full fill requirement where wood requirements will be fixed and quantity will vary on customer mind.
*/
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;
  const totalChairWood = chairQuantity * perChairWood;
  const totalTableWood = tableQuantity * perTableWood;
  const totalBedWood = bedQuantity * perBedWood;
  const totalWood = totalChairWood + totalTableWood + totalBedWood;
  return totalWood;
}
const chair = 2;
const table = 2;
const bed = 5;
const woodNeeded = woodCalculator(chair, table, bed);
console.log("Total wood required", woodNeeded);
