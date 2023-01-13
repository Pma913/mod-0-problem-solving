// 1. Given an array of strings, return only 
// the strings that have exactly 4 characters.

// Create an array then run all values and only print strings that are 4 characters long
// create an array of strings (ensuring some values are 4 characters)
// write a for loop
// write an if statement targeting strings that are 4 characters long
// add a log that will print the strings that register as "true"

var animals = ["fox", "duck", "crab", "octopus", "ferret"];

for (var i = 0; i < animals.length; i++) {
    if (animals[i].length === 4) {
        console.log(animals[i]);
    }
}

// ran as expected😎
