/* Jhon is a developer, and he cycles to work. He knows the distance between his house and his office in miles. Jhon wants to measure the distance in kilometers. Calculate the distance in km */
function milesToKm(miles) {
  const km = miles * 1.60934;
  return km;
}

const distanceInMiles = 74;

const distanceInKm = milesToKm(distanceInMiles);

console.log("The Distance is: ", Number(distanceInKm.toFixed(2)));
