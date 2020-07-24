// ARRAYS 

var oneValue = 800;

oneValue = 500;

//A JavaScript array is described using the square brackets symboles, and each value within should be split by a comma except for the last value.

//Array of days of a week
var days = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday"
];

//Array of random values comprising of numbers, string and boolean
var randomArray = [100, "hello", true];

// Array of arrays
var multiDimensionalArray = [
        [10, 20],
        [100, 200]
];

var newArray = randomArray + days;
randomArray.concat(days);

// Index of thursday in days[] array is 3
console.log(days[3]);
console.log(days[600]);

days[2] = "whensday";

console.log(days);


function addArrays(array1, array2) {

        var newArray = [
                array1[1] + array2[0],
                array1[1] + array2[1]
        ]

        return newArray;
}

var firstArray = [1, 10];
var secondArray = [9, 90];
var sumArray = addArrays(firstArray, secondArray);

console.log(sumArray);

days[7] = "SUPERDAY";

console.log(days);

// var a = [1, 2, 3, 4];
// var b = [1, 2, 3, 4, 5];
// console.log(sumArray(a, b));


// ARRAY FUNCTIONS
//
// .push() puts a new piece of data at the end of the array.
// Example : myArray.push("last item!"); This is also called In place modification and don't return anything
// .pop()  - removes the last piece of date in the array and returs it to wherever you called .pop()
//Example : myArray.pop()
// .unshift()  : puts a new piece of data at the beginnig of the array.
// Example: myArray.unshift("cutting the line!");
// .shipft() removes the first piece of data in the array and returns it to whereever you called .shift()
//Example: myArray.shift()



// PUSH EXAMPLE

/* var multiples = [];
var multiplier = 9;

for (var i = 0; i <= 12; i = i + 1) {

     var product = i * multiplier;
     multiples.push(product);

}
*/

// var removedItem = multiples.shift();

//multiples.shift(); will get rid of the first element 0;

//console.log(multiples);

function multiplesTables(multiplier, max = 12) {

    var multiples = [];

    for (var i = 0; i <= 12; i = i + 1) {

        var product = i * multiplier;
        multiples.push(product);
    // unshift is opposite of push
    //    multiples.unshift(product);

   
   }

    return multiples;   
}

// multiplier 7 upto 20
console.log(multiplesTables(3, 20));   

//console.log(multiplesTables(18, 20));

//days.pop();
//console.log(days);

// Difference between Null and Undefined
// Null = intentionally emptying a variable
// Undefined = was never assigned a value.

//days[4] = null;