/**
 * @author Kyler Schroeder
 * WDD144-O - Sec 1
 * Wacky Calculator
 */

// this script will ask you four simple questions to find out what kind of warrior you are

var attributes = ["mage", "knight", "archer", "ninja"]; // bank of warrior types

alert("Lets find out what kind of warrior you are!"); // let the user know what's going on

var a = prompt("Do you prefer books, television, movies or ghost stories?"); // question 1

var b = prompt("Would you rather go to the past, present or future?"); // question 2

var c = prompt("Black, Blue, Brown or White?"); // question 3

var d = prompt("What is your weapon of choice?  sword, gun or trickery?"); // question 4

var total = 0; // this will be the running total for the value of each answer

if (a == "books") { // determin the value of the answer from question 1
		total = total + 1;
	} else if (a == "television") {
		total = total + 2;
	} else if (a == "movies") {
		total = total + 3;
	} else {
		total = total + 4;
	}
	
	// console.log(total);
	
if (b == "past") { // determin the value of the answer from question 2
		total = total + 1;
	} else if (b == "present") {
		total = total + 2;
	} else {
		total = total + 3;
	}

	// console.log(total);
	
if (c == "blue") { // determin the value of the answer from question 3
		total = total + 1;
	} else if (c == "white") {
		total = total + 2;
	} else if (c == "brown") {
		total = total + 3;
	} else {
		total = total + 4;
	}
	
	// console.log(total);

if (d == "trickery") {  // determin the value of the answer from question 4
		total = total + 1;
	} else if (d == "sword") {
		total = total + 2;
	} else {
		total = total + 3;;
	}
	
	// console.log(total);

if (total <= 4) { // add together the total value from all answers and assign the warrior type
		console.log("You are a " + attributes[0]) + "!";
	} else if (total > 4 && total < 9) {
		console.log("You are a " + attributes[1]) + "!";
	} else if (total > 9 && total < 12) {
		console.log("You are a " + attributes[2]) + "!";
	} else {
		console.log("You are a " + attributes[3]) + "!";
	}
