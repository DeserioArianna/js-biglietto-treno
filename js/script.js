const priceKm = 0.21;
const toTravelKm = prompt("Quanti chilometri devi percorrere?");
const userAge = prompt("Quanti anni hai?")

console.log(toTravelKm, userAge);

const distancePrice = priceKm * toTravelKm;
console.log(distancePrice.toFixed(2));

let price;

if (userAge < 18) {
    price = distancePrice - (distancePrice * 20 / 100);
} else if (userAge > 18 && userAge < 65) {
    price = distancePrice
} else {
    price = distancePrice - (distancePrice * 40 / 100);
}

console.log(price.toFixed(2))
