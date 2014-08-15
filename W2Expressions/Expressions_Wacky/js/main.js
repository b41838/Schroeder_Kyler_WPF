/**
 * @author Kyler Schroeder
 * WDD144-O - Sec 1
 * Wacky Calculator
 */

// this script will ask you three simple questions to find out what kind of warrior you are

/* var mage;
var knight;
var archer;
var ninja; */

var attributes = ["mage", "knight", "archer", "ninja"];

alert("Lets find out what kind of warrior you are!");

var a = prompt("Do you prefer books, television, movies or ghost stories?");

var b = prompt("Would you rather go to the past, present or future?");

var c = prompt("Black, Blue, Brown or White?");

var d = prompt("What is your weapon of choice?  sword, gun or trickery?");

var total = 0;
// var attributes[4] = prompt("");

if (a == "books") {
		total = total + 1;
	} else if (a == "television") {
		total = total + 2;
	} else if (a == "movies") {
		total = total + 3;
	} else {
		total == total + 4;
	}
	
	console.log(total);
	
if (b == "past") {
		total = total + 1;
	} else if (b == "present") {
		total = total + 2;
	} else {
		total = total + 3;
	}

	console.log(total);
	
if (c == "blue") {
		total = total + 1;
	} else if (c == "white") {
		total = total + 2;
	} else if (c == "brown") {
		total = total + 3;
	} else {
		total == total + 4;
	}
	
	console.log(total);

if (d == "trickery") {
		total = total + 1;
	} else if (d == "sword") {
		total = total + 2;
	} else {
		total = total + 3;;
	}
	
	console.log(total);

console.log (total);

if (total <= 4) {
	console.log("You are a " + attributes[0]) + "!";
} else if (total > 4 && total < 9) {
	console.log("You are a " + attributes[1]) + "!";
}
