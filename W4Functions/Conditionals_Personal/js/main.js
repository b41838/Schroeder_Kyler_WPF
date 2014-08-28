/**
 * @author Kyler Schroeder
 * 8-20-2014
 * WDD144-O - Sec 1
 * Personal Calculator
 */

// I'm an adheisive fiend.  I love stickers, making them..trading them..and doing other nefarious deeds with them.  But how long does it take to make them?  We will find out!

// alert("Greets");

var cutTime = 0; // time in minutes matching to user input below
var shape = prompt("Which shape are you making: square, circle, star or badge?"); // asks user what shape sticker they are making
	
	// code block assigns time in minutes to cutTime
	if (shape == "square") {
			cutTime = 2; // squares take 2 minutes to cut
		} else if (shape == "circle") {
			cutTime = 4; // circles take 4 minutes to cut
		} else if (shape == "star") {
			cutTime = 3; // stars take 3 minutes to cut
		} else {
			cutTime = 6; // badges are a pain and take 6 minutes but look oooooh so lovely
		};  

var qty = prompt("How many do you plan on making?"); // user enters how many stickers they want to make

// code block makes sure input is an integer
if (qty != parseInt(qty)) // runs javascript function to figure if input is an integer
            qty = prompt("Seriously, how many do you plan on making?"); // if not, asks user again

var designTime = 0; // time in minutes it takes to put the design on the sticker
var type = prompt("Printed or drawn?"); // user chooses type of art

(type == "printed") ? designTime = 3 : designTime = 12; // assigns time in minutes to designTime

var batchTime = (cutTime * qty) + (designTime * qty); // final calculation using users input

console.log("It will take approximately " + batchTime + " minutes to produce this batch.")  // output to console
