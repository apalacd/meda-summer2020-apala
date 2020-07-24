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

