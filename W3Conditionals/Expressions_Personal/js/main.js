/**
 * @author Kyler Schroeder
 * WDD144-O - Sec 1
 * Personal Calculator
 */

// alert("Greets");


// find out how many cups are left over if a certain number of people drink a certain number of beverages of a certain size

var ozInKeg = 1984; // ounces in a keg
var numPeople = prompt("How many people will be drinking from the keg?"); // user to input how many people will be dirnking fromthe keg
var cupSize = prompt("How many ounces in a cup?"); // establish how many ounces in each cup
var beersPerPerson = prompt("How many beers does each person want to drink?"); // decide how many cups each person will have

var totalOz = numPeople * beersPerPerson * cupSize; // calculate total ounces

// console.log(totalOz);

var cupsLeft = (ozInKeg - totalOz) / cupSize; // find ounces left then divide by cup size to find amount of cups left over

console.log("If " + numPeople + " people drink from a keg and each have " + beersPerPerson + " cups, there will be " + cupsLeft + " cups left over.");
