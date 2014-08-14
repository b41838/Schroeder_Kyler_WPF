/**
 * @author Kyler Schroeder
 * WDD144-O - Sec 1
 * Personal Calculator
 */

alert("Greets");


// find out how many cups are left over if a certain number of people drink a certain number of beverages of a certain size

var ozInKeg = 1984;
var numPeople = prompt("How many people will be drinking from the keg?");
var cupSize = prompt("How many ounces in a cup?");
var beersPerPerson = prompt("How many beers does each person want to drink?");

var totalOz = numPeople * beersPerPerson * cupSize;

console.log(totalOz);

var cupsLeft = (ozInKeg - totalOz) / cupSize;

console.log("If " + numPeople + " people drink from a keg and each have " + beersPerPerson + " cups, there will be " + cupsLeft + " cups left over.");
