var HOTDOG_COST = 3.75;
var FRIES_COST = 2.00;
var DRINK_COST = 1.50;

var numHotDogs = prompt ("Please enter the number of hotdogs you'd like: ");
var numFries = prompt ("Please enter the number of fries you'd like: ");
var numDrinks = prompt ("Please enter the number of drinks you'd like: ");

totalHotDogCost = numHotDogs * HOTDOG_COST;
totalFriesCost = numFries * FRIES_COST;
totalDrinkCost = numDrinks * DRINK_COST;

subTotal = totalHotDogCost + totalFriesCost + totalDrinkCost;

if (subTotal >= 20) {
    subTotal = subTotal * 0.9;
    discount = subTotal * .1;
    document.getElementById("discount").innerHTML = "$" + discount.toFixed(2);
    document.getElementById("subtotal").innerHTML = "$" + subTotal.toFixed(2);
} else {
    document.getElementById("discount").innerHTML = "No discount, must spend at least $20";
    document.getElementById("subtotal").innerHTML = "$" + subTotal.toFixed(2);
}

tax = subTotal * 0.0625;
totalWithTax = subTotal + tax;

document.getElementById("itemsordered").innerHTML = parseFloat(numHotDogs) + parseFloat(numFries) + parseFloat(numDrinks);
document.getElementById("quantity").innerHTML = "Hot Dogs: " + (numHotDogs) + ", Fries: " + (numFries) + (", Drinks: ") + (numDrinks);
document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
document.getElementById("total").innerHTML = "$" + totalWithTax.toFixed(2);