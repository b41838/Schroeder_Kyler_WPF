/**
 * @author Kyler Schroeder
 * WDD144-O - Sec 1
 * Personal Calculator
 */

alert("Greets");


// No one likes to waste money so this calculator will help me figure out how many kegs I need to buy

var ozInKeg = 1984;
var numPeople = prompt("How many people will be drinking from the keg?");
var cupSize = prompt("How many ounces in a cup?");
var beersPerPerson = prompt("How many beers does each person want to drink?");

var totalOz = numPeople * beersPerPerson * cupSize;

alert(totalOz);
