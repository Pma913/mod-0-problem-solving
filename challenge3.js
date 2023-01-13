// 3. Given an array of strings, return only 
// the words that begin with the letter "t".

// -create an array of strings and only print elements that start with "t"
// -make at least 2 words start with the letter "t"
// -need to include a for loop
// -need to include an if statement that includes element and attach function
// -add a "startswith" to log

var peopleNames = ["Lewis", "Trina", "Sandy", "Lowel", "Thomas", "tonka"];

for (var i = 0; i < peopleNames.length; i++) {
    if (peopleNames[i].startsWith('T')) {
        console.log(peopleNames[i]);
    }
}