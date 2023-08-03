/* The standard height of a volleyball player is 7 feet. Jim wants to join the volleyball team. So he decided to measure his height to see if he meets the slandered. Calculate his height in feet */
function inchToFeet(inches) {
  const feet = inches / 12;
  return feet;
}

const heightInInches = 79;

const heightInFeet = inchToFeet(heightInInches);
console.log("Dada's Height: ", Number(heightInFeet.toFixed(1)));
