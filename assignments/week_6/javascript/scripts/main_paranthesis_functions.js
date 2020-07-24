// FUNCTIONS

var mySpecialNumber = "8";

/*function myFunction() {
        var response = prompt("How are you today?");
        var responseModified = response + 5 + "I don't care";
        console.log("They said: " + responseModified + " and the special number is " + mySpecialNumber);
}
*/

// console.log(response);  /* has no meaning as it exists outside of the function */

// ANY INFORMATION THAT ENTERS JAVASCRIPT FROM HTML OR CSS WILL ENTER AS THE DATATYPE OF STRING, REGARDLESS OF CONTENT.

function myFunction() {
        var response = prompt("How are you today?");

        if (response === "") {
                alert("You did not type anything in!");
                return false;
        } else {
                console.log(response);
                return true;
        }

  //      console.log("I will still run because the curly brace is after me!");

 //       return "This function completed successfully";
}

//var valueFromThisFunction = myFunction();

/*   var doesntHoldAnything;

      console.log(doesntHoldAnything);*/

//console.log(valueFromThisFunction);

//var didTheyRead = myFunction();

// console.log(didTheyRead);

//if (didTheyRead === false) {
//for (var i; didTheyRead === false; ) {
      didTheyRead = myFunction();

//        console.log("They read the message!");

var conter = 0;
while (didTheyRead === false || didTheyRead === null) {
        didTheyRead = myFunction();

}

didTheyRead = myFunction();
}

