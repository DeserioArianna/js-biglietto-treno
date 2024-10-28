const priceKm = 0.21;
const toTravelKm = prompt("Quanti chilometri devi percorrere?");
const userAge = prompt("Quanti anni hai?")

console.log(toTravelKm, userAge);

const distancePrice = priceKm * toTravelKm;
console.log(distancePrice.toFixed(2));

let price;

