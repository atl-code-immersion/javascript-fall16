function convertInToCm(inches) {
	return inches * 2.54;
}

function convertLbToKg(lbs) {
	return lbs * 0.453592;
}


var myName = prompt("What is your name?");

var heightInches = prompt("What is your height in inches?");

var weightPounds = prompt("What is your weight in pounds?");

// var heightCentimeters = heightInches * 2.54;

// var weightKilos = weightPounds * 0.453592;

console.log("My name is " + myName + ", and I am " + convertInToCm(heightInches) + " cm tall and I weigh " + convertLbToKg(weightPounds) + " kg.");



var num = 45;

if (num == 50) {
	console.log("Exactly half.");
} else if (num < 50) {
	console.log("Less than half.");
} else {
	console.log("Greater than half.");
}










