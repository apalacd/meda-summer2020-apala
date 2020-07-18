var hello = "hello there"

/*console.log("Hello World!");*/
console.log(hello);

var myVariable = 100;

// Cannot multiply Stings.

var mySentence = "hundred";

var total = 10 * mySentence;
// total will hold a NaN value (which stands for Not a Number)

var userPurchaseTotal = 345;

var purchaseTax = userPurchaseTotal * .0975;

var purchaseTotal = userPurchaseTotal + purchaseTax;

// The plus symbol is not doing addition, instead it is concatenating, 
// or combining two Strings. Note that JavaScript will convert the number in
// purchaseTax to a String, to concatenate.

var sentenceToWrite = "The user's purchase tax is " + purchaseTax;

var sentenceToWritePurchase = "The user purchased $" + userPurchaseTotal + " worth of stuff!";

var sentenceForTotal = "The user has to pay a total of $" + purchaseTotal;

console.log(sentenceToWritePurchase);
console.log(sentenceToWrite);
console.log(sentenceForTotal);


//var numberTotal = 10 * 100;

/* Nothing shows on screen unless there is a console.log command */

//console.log(numberTotal);

//var biggerNumber = numberTotal + 1000;

//console.log(numberTotal);

//console.log(biggerNumber);

// Booleans : true and false

//var isRaining = true;

