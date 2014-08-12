/**
 * @author Kyler Schroeder
 * WDD144-O - Sec 1
 * Professional Calculator
 */

// I work for a Payroll Software company and my department is responsible for setting up automated file transfers of 401k files to the financial institutions.  The quicker setups, like Principal can be completed
// in roughly an hour where others can take months.

var principal = 1;
var fidelity = 10;
var greatWest = 4;

alert("Welcome, let's find out how much work you've actually done this week!");

var numPrincipal = prompt("How many Principal tickets did you close this week?");
var numFidelity = prompt("How many Fidelity tickets did you close this week?");
var numGW = prompt("How many Great West tickets did you close this week?");

var totalHrs = (principal * numPrincipal) + (fidelity * numFidelity) + (greatWest * numGW);

alert("You grinded out approximately " + totalHrs + " hours worth of mind-numbing keyboard pounding!");
