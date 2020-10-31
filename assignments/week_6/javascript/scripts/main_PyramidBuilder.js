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
// var asteriskString = "";
// var pyramidSpeed = "*";   // Go up by 1 *
// var pyramidHeight = 5;


// for (var counter = 0; counter <= pyramidHeight; counter++) {

//     asteriskString = asteriskString + pyramidSpeed;
//     console.log(asteriskString);

// }


// // Repeating the above until we reach one asterisk.
// for (var i = 0; i < pyramidHeight - 1; i = i + 1) {
    
//     var exArray = asteriskString.split("");
//     exArray.pop();

//     asteriskString = exArray.join("");
//     console.log(asteriskString);

// }


function pyramidBuilder(pyramidHeight, pyramidSpeed) {

    var asteriskString = "";
//    var pyramidSpeed = "**";   // Go up by 2 *
//    var pyramidHeight = 5;
    
// .length returns a number based on the number of characters in the string.
    var removalCount = pyramidSpeed.length;

    for (var counter = 0; counter < pyramidHeight; counter++) {
    
        asteriskString = asteriskString + pyramidSpeed;
        console.log(asteriskString);

    }


// Repeating the above until we reach one asterisk.
    for (var i = 0; i < pyramidHeight - 1; i = i + 1) {
        
        var exArray = asteriskString.split("");
     

        for (var e=0; e < removalCount; e++) {
                exArray.pop();
        }

        asteriskString = exArray.join("");
        console.log(asteriskString);

    }

}

// first argument is how many times to run and second argument is for what character will be the pyramid built in

pyramidBuilder(5, "####");
//pyramidBuilder(10, 2 "*");

pyramidBuilder(10, "*$*$");

// Loop to generate random pyramids 
for (var i = 0; i < 100; i++) {

var randomNumberWithDecimal = (Math.random() * 10) + 1
var myRandomNumber = Math.floor(randomNumberWithDecimal);

//pyramidBuilder(myRandomNumber, "&&&&");
pyramidBuilder(myRandomNumber, "~~~~");

}


    