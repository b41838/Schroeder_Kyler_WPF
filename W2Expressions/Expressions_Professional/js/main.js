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

alert("Welcome, let's find out how much work you've actually done this week!"); // tells the user what we're doing

var numPrincipal = prompt("How many Principal tickets did you close this week?"); // finds the number to multiply with the principal variable
var numFidelity = prompt("How many Fidelity tickets did you close this week?"); // finds the number to multiply with the fidelity variable
var numGW = prompt("How many Great West tickets did you close this week?"); // finds the number to multiply with the greatWest variable

var totalHrs = (principal * numPrincipal) + (fidelity * numFidelity) + (greatWest * numGW); // multiplys the user inupt times the appropriate var and adds them all together

alert("You grinded out approximately " + totalHrs + " hours worth of mind-numbing keyboard pounding!"); // displays the result of the artihmetic above
