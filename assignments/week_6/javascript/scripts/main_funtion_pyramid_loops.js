/*

*
**
*** 
****
*****
****
***
**
*

*/

// Creating "Random" Numbers using JavaScript.
Math.random(); // Creates a random number between 0 and 1;
Math.ceil(); // Takes in a number and rounds it up.
Math.floor(); // Takes in a number and rounds it down.
Math.round(); // Takes in a number and rounds based on decimal value.

var randomNumberWithDecimal = (Math.random() * 10) + 1;
var myRandomNumber =  Math.floor(randomNumberWithDecimal);

console.log(myRandomNumber);




// the double plus operator will take the current value of the variable and add a 1 to it and also replace the old value of the variable.
// myVariable++;
// myVariable = myVariable + 1; Does the same thing as previous line.

var asteriskString = "*";
var pyramidSpeed = "*";   // Go up by 1 *
var pyramidHeight = 5;


for (var counter = 0; counter < pyramidHeight; counter++) {
    
    console.log(asteriskString);
    asteriskString = asteriskString + pyramidSpeed;

}


// "*****" -> "****"

// var exampleString = "This is a example sentence!";
// var exampleArray;

// //exampleArray = exampleString.split("a");

// exampleArray = exampleString.split("");


// console.log(exampleArray);

//exampleArray.toString();

//var exampleString = "*****";
//var exampleArray;

// The Delimiter is the character that the split is going to look for so it knows where to split. Empty string delimiter will split EVERY CHARACTER.

//exampleArray = exampleString.split("");

// exampleArray = exampleString.explode(); This is a PHP command.


//console.log(exampleArray);

//exampleArray.pop();

//var updatedString = exampleArray.toString();

//var updatedString = exampleArray.join("");

//console.log(updatedString);

var exString = "**********";
for (var i = 0; i < 10; i = i + 1) {
        
        var exArray;

        var exArray = exString.split("");
        exArray.pop();

        var upString = exArray.join("");
        console.log(upString);

}
    