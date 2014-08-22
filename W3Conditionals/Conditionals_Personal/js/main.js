/**
 * @author Kyler Schroeder
 * 8-20-2014
 * WDD144-O - Sec 1
 * Personal Calculator
 */

// I'm an adheisive fiend.  I love stickers, making them..trading them..and doing other nefarious deeds with them.  But how long does it take to make them?  We will find out!

 alert("Greets");

var cutTime = 0;
var shape = prompt("Which shape are you making: square, circle, star or badge?");

	if (shape == "square") {
			cutTime = 2;
		} else if (shape == "square") {
			cutTime = 4;
		} else if (shape == "square") {
			cutTime = 3;
		} else {
			cutTime = 6;
		};  

var qty = prompt("How many do you plan on making?");

if (qty != parseInt(qty))
            qty = prompt("Seriously, how many do you plan on making?");

var designTime = 0;
var type = prompt("Printed or drawn?");

(type == "printed") ? designTime = 3 : designTime = 12;

/*if (type == "printed") {
		designTime = 3;
 	} else {
 		designTime = 12
 	};*/

var batchTime = (cutTime * qty) + (designTime * qty);

console.log("It will take approximately " + batchTime + " minutes to produce this batch.")
