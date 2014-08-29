/**
 * @author Kyler Schroeder
 * 8-27-2014
 * WDD144-O - Sec 1
 * Professional Calculator
 */

// I work for a Payroll Software company and deal with the data contained in copanies 401k files. This will show how much you accrue over time.  I just handle the transmission, not the calculations!

// alert("Greets");

alert("Let's figure out how much money you will have in your retirement over time!");

var pretax = prompt("how much money per pay period will you withold for 401k?");
var posttax = prompt("How much money per pay period will you contribute for your Roth?");
var matchPercent = prompt("What percent does your employer match?");
var match = matchPercent * 0.01 * pretax;

console.log(pretax);
console.log(posttax);
console.log(matchPercent);
console.log(match);

function year(term) {
	var total = (parseInt(pretax) + parseInt(posttax) + parseFloat(match)) * term;
	
	console.log("Your total retirement funds are.. " + total + " dollars over 1 year!");
};

function fiveYears(term) {
	var total = (parseInt(pretax) + parseInt(posttax) + parseFloat(match)) * term;
	
	console.log("Your total retirement funds are.. " + total + " dollars over five years!");
};

function twentyYears(term) {
	var total = (parseInt(pretax) + parseInt(posttax) + parseFloat(match)) * term;
	
	console.log("Your total retirement funds are.. " + total + " dollars over 20 years!");
};

year(12);
fiveYears(60);
twentyYears(240);
