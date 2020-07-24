// Math Operators;
// +, -, *, /, %
//String Operator
// + (concatenation)


/* 
Everything
in here 
is a comment.
*/

// Conditional Operators
// All conditional operations tend to end up being a boolean.

/* 

INDEPENDANT OF DATA TYPES
= value assignmet
== comparative equal to
<  lesser than
>  greater than
!= Not equal to
! reverses(flips) a boolean !true == false   !false == true

<= lesser than or equal to
>= greater than or equal to, do not reverse characters as 
=> is arrow functions

DEPENDANT OF DATA TYPES
=== both are equal AND are the same data type
!== not equal value or not equal type

*/

var data1 = 10;
// var data2 = "10";
var data2 = parseInt("10.45");
//var data2 = parsInt("10");  //ParsFloat() to include periods /*as decimals


console.log();
parseInt();


//  Type Coercion

if (data1 == data2) {
    console.log("The condition was true.");
}

// Ternary Operator.
// Very very short for of if condition
// condition ? true code : false code;

/*var isItTrue = (data1 == data2) ? 20 : 9;

console.log(isItTrue);
*/


var isItTrue;
var isItTrue = false ? "h" : "g";

var isItTrue2;
if(false) {
    isItTrue2 = "hello";
} else{
    isItTrue2 = "goodbye";
}


console.log(isItTrue)
// Ternary Operator End

// FUNCTIONS
function sayHelloThreeTimes() {
    
    console.log("hello!");
    console.log("hello!");
    console.log("hello!");
}

function sayGoodByeTwotimes(){
    console.log("goodbye!");
    console.log("goodbye!");
}

function sayHelloNineTimes() {
    sayHelloThreeTimes();
    sayHelloThreeTimes();
    sayHelloThreeTimes();
}

sayHelloThreeTimes();
console.log("How are you doing");

sayHelloThreeTimes();
sayHelloThreeTimes();

sayGoodByeTwotimes();

sayHelloNineTimes();

// Functions END

//Loops START
console.log("Loops Section");

//for (iterator; condition; increment) { code block }

/* for (var i=0; i < 10; i = i + 1) {
    var text = "Loop number " + (i + 1);
//    console.log("Loop number 1");
    console.log(text);
}
*/

for (var i = 0; i < 20; i = i + 1) {
    var text = "Loop number " + (i + 1);

    if (i % 2 === 0) {
    console.log(text);
    }

console.log("Second Loop");
for  ( var i = 0; i < 20; i = i + 10) {

    console.log("loop number " + (i + 1));

    }

for  ( var counter = 1; counter < 10; counter = counter + 1)  {

    console.log("counter loop number " + (counter + 1))
}


}




















//----------------Week 5 recap----------------------

// The If Statement
/*
var number1 = 10;
var number2 = 15;
*/
// Syntax
// if (conditional) {group of code to run if conditional is true}




// Conditional operators
// == Compares two values, becomes the boolean true if it is the same, and false if they 
// are not the same
/*if (number1 == number2) {

    console.log("This if statement was true so I ran this code!");

}

console.log("Program Finished!");

*/
