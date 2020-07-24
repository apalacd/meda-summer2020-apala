function addNumber() {
        var number1 = 10;
        var number2 = 100;

        var sum = number1 + number2;

        return sum;

}
/* if a function returns something, it will need to have a placeholder to hold the returned value from a function */
var myNumber = 110;
var myNumber2 = addNumber();

addNumber();

// Functiton Arguments and Parameters
// Parameters are Function variables. created for a particular function

function myFunction(myFunctionVariable, mySecondFunctionVariable) {

        console.log(myFunctionVariable);

}
// Aruments are the values for the Parameters. And provided within the paranthesis just like Parameters.

// myFunction(1000, hello);

// myFunction(10);

// myFunction("hello");
// myFunction("true");

function mathify(num1, num2) {

        var sum = num1 + num2
        var difference = num1 - num2;
        var product = num1 * num2;
        var quotient = num1 / num2;

        console.log("Sum: " + sum);
        console.log("Difference: " + difference);
        console.log("Product: " + product);
        console.log("Quotient: " + quotient);

}

mathify(90, 100);
mathify(8, 10);
mathify(1, 70);



        // console.log(sum, difference, product, quotient);


function caTax(priceTotal) {

        var tax = priceTotal * .085;
        var totalExpense = priceTotal + tax;

        return totalExpense;
}

console.log("The total for a $50 purchae is $" + caTax(50));

function writeSentence(priceTotal) {

        console.log("The total for a $" + priceTotal + "purchase is $" + caTax(priceTotal));

}

var myOtherNumber = 100;

writeSentence(myOtherNumber);
writeSentence(1100);
writeSentence(13);

// Parsed to the function are Parameters - sentence and result are parameters for function excited

function excited(sentence, result) {

        console.log(sentence + result + "!!!");

}
//Hello and true are arguments for function excited()

excited("hello", true);

