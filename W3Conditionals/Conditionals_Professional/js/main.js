/**
 * @author Kyler Schroeder
 * 8-20-2014
 * WDD144-O - Sec 1
 * Professional Calculator
 */

// I work for a Payroll Software company and my department is responsible for setting up automated file transfers of 401k files to the financial institutions.  If something goes wrong and you fail to send the ACH
// file, employees funds are not invested and lose out on the gains in the market.  Now you need to calculate lost earnings, not fun... here's how.
// DISCLAIMER: This calculation is not real, we use a calculator provided by the Department of Labor.

alert("Greets");


var janRate = .03;
var febRate = .06;
var marRate = .05;
var aprRate = .03;
var mayRate = .02;
var junRate = .04;
var julRate = .03;
var augRate = .07;
var sepRate = .07;
var octRate = .05;
var novRate = .03;
var decRate = .03;
var month = prompt("What month were the earnings lost for?");
var rate = 0;
var daysOutstanding = prompt("How many days in " + month + " were missed?");
var totalPrinciple = prompt("What was the total lost principal?");
var totalLostEarnings = 0;


console.log(month);
console.log(daysOutstanding);
console.log(totalPrinciple);

// alert("Let/'s calculate some lost earnings!");

if (month == "january") {
	rate = janRate
} else if (month == "february") {
	rate = febRate
} else if (month == "march") {
	rate = marRate
} else if (month == "april") {
	rate = aprRate
} else if (month == "may") {
	rate = mayRate
} else if (month == "june") {
	rate = junRate
} else if (month == "july") {
	rate = julRate
} else if (month == "august") {
	rate = augRate
} else if (month == "september") {
	rate = sepRate
} else if (month == "october") {
	rate = octRate
} else if (month == "november") {
	rate = novRate
} else {
	rate = decRate
};

console.log(rate);

totalLostEarnings = daysOutstanding * totalPrinciple * rate;

console.log("Your total lost earnings come out to $" + totalLostEarnings + ".");
