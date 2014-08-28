/**
 * @author Kyler Schroeder
 * 8-27-2014
 * WDD144-O - Sec 1
 * Wacky Calculator
 */

// Coming through like a wrecking ball!  A game where you will break down a wall, causing the lowest amount of colateral damage.

// alert("Greets");

var random = Math.floor(Math.random() * (25 - 1 + 1)) + 1;
var wall = 0 + random;

console.log(wall);

var blue = 3;
var red = 5;
var black = 10;

//console.log(wall);

alert("Whoa!  That wall looks like it needs to be destroyed!  It has " + wall + " hit points, time to get wrecking!");
alert("You have three wepons, the blue wrecking ball does " + blue + " damage, the red ball does " + red + " damage and the black ball does " + black + " damage.");

var ball1 = wreck();

function wreck() {
	var round1 = prompt("Would you like to use the blue, red or black ball first?");
	return round1;
};

if(ball1 == "blue") {
	ball1 = blue;
} else if( ball1 == "red") {
	ball1 = red;
} else {
	ball1 = black;
}

wall = wall - ball1;
console.log(wall);

console.log("The wall now has " + wall + " hit points.");
var again = prompt("Do you want to smash it agan?");

if(again == "yes") {
	var ball2 = wreck();
} else {
	alert("Thanks for playing.");
}

if(ball1 == "blue") {
	ball1 = blue;
} else if( ball1 == "red") {
	ball1 = red;
} else {
	ball1 = black;
}

wall = wall - ball1;
console.log(wall);

alert("The wall now has " + wall + " hit points.");
var again = prompt("Do you want to smash it agan?");

if(again == "yes") {
	wreck();
} else {
	alert("Thanks for playing.");
}