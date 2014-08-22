/**
 * @author Kyler Schroeder
 * 8-20-2014
 * WDD144-O - Sec 1
 * Wacky Calculator
 */

// I have a 1~ year old pitbull and he eats.. A LOT.  This calculator will figure how much food to give your dog so it's satisfied and doesn't become a fatty.

// alert("Greets");

var age = prompt("How many months old is your Pitbull?"); // asks user to enter their dogs age in months

// code block makes sure input is an integer
if (age != parseInt(age)) // runs javascript function to figure if input is an integer
            age = prompt("How many months old is your Pitbull?"); // if not, asks user again
            
var active = prompt("How would you rate your dogs energy level: active, berzerk or insane?"); // asks user to rate their dogs energy level

	// code block makes sure user has entered a string
	if (active == "") { // if string is empty
		active = prompt("Please enter how would you rate your dogs energy level: active, berzerk or insane?"); // prompts user and assigns answer to active variable
	}

var foodAmount = ["Your dog can have two cups per day.", "Your dog can have three cups per day.", "Your dog can have four cups per day.", "Your dog can have five cups per day."]; // array holds answers to the formula

// runs calculation to see how much food your Pit should eat
if (age <= 12 && active == "active") {  // if your Pit is under 12 months and active
		console.log(foodAmount[0]); // he gets two cups of food
	} else if (age <= 12 && active == "berzerk" || active == "insane") {  // if dog is under 12 months and berzerk or insane
		console.log(foodAmount[1]); // he gets three cups per day
	} else if (age > 12 && age <= 48 && active == "active" || active == "berzerk") { // if he's over 12 months and less than 48 months and either active or berzerk
		console.log(foodAmount[2]); // he gets four cups per day
	} else if (age > 12 && age <= 48 && active == "insane") { // if he's older than 12 months and under 48 and insane
		console.log(foodAmount[3]); // he gets five cups
	} else if (age > 48 && active == "active" || active == "berzerk") { // if he's older than 48 months and active
		console.log(foodAmount[1]); // he gets three cups per day
	} else { // if he's older than 48 and insane
		console.log(foodAmount[2]); // he gets four cups per day
	};
