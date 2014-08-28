/**
 * @author Kyler Schroeder
 * 8-27-2014
 * WDD144-O - Sec 1
 * Wacky Calculator
 */

// Coming through like a wrecking ball!  A game where you will break down a wall, causing the lowest amount of colateral damage.

// alert("Greets");

var wall = Math.floor(Math.random() * (25 - 1 + 1)) + 1;
var blue = 3;
var red = 5;
var black = 10;

//console.log(wall);

alert("Whoa!  That wall looks like it needs to be destroyed!  It has " + wall + " hit points, time to get wrecking!");
alert("You have three wepons, the blue wrecking ball does " + blue + " damage, the red ball does " + red + " damage and the black ball does " + black + " damage.");


function wreck() {
	var round1 = prompt("Would you like to use the blue, red or black ball first?");
	return round1;
};


console.log(round1);
