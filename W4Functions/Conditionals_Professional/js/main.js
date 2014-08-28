/**
 * @author Kyler Schroeder
 * 8-20-2014
 * WDD144-O - Sec 1
 * Professional Calculator
 */

// I work for a Payroll Software company and my department is responsible for setting up automated file transfers of 401k files to the financial institutions.  If something goes wrong and you fail to send the ACH
// file, employees funds are not invested and lose out on the gains in the market.  Now you need to calculate lost earnings, not fun... here's how.
// DISCLAIMER: This calculation is not real, we use a calculator provided by the Department of Labor.

// alert("Greets");


var janRate = .03; // defines rate for month of January
var febRate = .06; // defines rate for month of February
var marRate = .05; // defines rate for month of March
var aprRate = .03; // defines rate for month of April
var mayRate = .02; // defines rate for month of May
var junRate = .04; // defines rate for month of June
var julRate = .03; // defines rate for month of July
var augRate = .07; // defines rate for month of August
var sepRate = .07; // defines rate for month of September
var octRate = .05; // defines rate for month of October
var novRate = .03; // defines rate for month of November
var decRate = .03; // defines rate for month of December
var month = prompt("What month were the earnings lost for?"); // asks user for the month lost earninsg occurred
var rate = 0; // place holder for rate decided by if statement
var daysOutstanding = prompt("How many days in " + month + " were missed?"); // asks user for the days without being invested
var totalPrinciple = prompt("What was the total lost principal?"); // asks user for the total amount of principle that should have been invested
var totalLostEarnings = 0; // total decided by formula below



alert("Let/'s calculate some lost earnings!");

if (month == "" ) {
	month = prompt("Please enter a valid montht that the earnings were lost for."); // asks user AGAIN for the month lost earninsg occurred
};

// code block makes sure input is an integer
if (daysOutstanding != parseInt(daysOutstanding)) // runs javascript function to figure if input is an integer
            daysOutstanding = prompt("how many days in " + month + " were missed?"); // if not, asks user again

// code block makes sure input is an integer
if (totalPrinciple != parseInt(totalPrinciple)) // runs javascript function to figure if input is an integer
            totalPrinciple = prompt("What was the total lost principal?"); // if not, asks user again

if (month == "january") { // code block decides which rate to use
	rate = janRate;
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

totalLostEarnings = daysOutstanding * totalPrinciple * rate; // calculates the total lost earnings that needs to be refunded

console.log("Your total lost earnings come out to $" + totalLostEarnings + "."); // displays final calculation
