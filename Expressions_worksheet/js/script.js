/**
 * Created by Jessie on 1/16/14.
 */
//Jessie Marinello, Expressions Worksheet
//January 2014


//Dog Years
var humanAge = 12; //dog's age in human years
const dogYears = 7; //"dog years" per human year. this remains constant
//multiply humanAge and constant and assign to dogAge
var dogAge = humanAge * dogYears;
//print output age of dog in dog years
console.log("Sparky is " + humanAge + " human years, which is " + dogAge + " in dog years.");

//Slice of Pie, Part I
var numPeople = 48; //this is the total number of people at the party
var numPizza = 7; //total number of pizzas ordered
var numSlices = 16; //total number of slices per pizza.
//multiply numSlices and numPizza then divide product by numPeople.  assign to totalSlices
var totalSlices = (numSlices * numPizza)/numPeople;
//print output number of total slices each person ate at the party
console.log("Each person ate " + totalSlices + " slices of pizza at the party.");

//Slice of Pie, Part II
//use same variables as Slice of Pie, Part I
//subtract the product of numSlices and numPeople from totalSlices.  assign to dogSlices
var remainder = totalSlices % 1;
console.log("Sparky got" +" "+ remainder +" "+ "slices of pizza")