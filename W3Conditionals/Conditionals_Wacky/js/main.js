/**
 * @author Kyler Schroeder
 * 8-20-2014
 * WDD144-O - Sec 1
 * Wacky Calculator
 */

// I have a 1~ year old pitbull and he eats.. A LOT.  This calculator will figure how much food to give your dog so it's satisfied and doesn't become a fatty.

alert("Greets");

var age = prompt("How many months old is your Pitbull?");
var active = prompt("How would you rate your dogs energy level: active, berzerk or insane?");
	if (active == "") {
		active = prompt("Please enter how would you rate your dogs energy level: active, berzerk or insane?");
	}

var foodAmount = ["One cup per day", "One and a half cups per day", "Two cups per day", "Two and a half cups per day"];

console.log(age);
console.log(active);

if (age <= 12 && active == "active") {
		console.log(foodAmount[0]);
	} else if (age <= 12 && active == "berzerk" || active == "insane") {
		console.log(foodAmount[1]);
	} else if (age > 12 && age <= 48 && active == "active" || active == "berzerk") {
		console.log(foodAmount[2]);
	} else if (age > 12 && age <= 48 && active == "insane") {
		console.log(foodAmount[3]);
	} else if (age > 48 && active == "active" || active == "berzerk") {
		console.log(foodAmount[1]);
	} else {
		console.log(foodAmount[2]);
	};
