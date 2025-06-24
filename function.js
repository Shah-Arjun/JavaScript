//Function declaration orfunction statements
function Display() {
    console.log("Hello, World");
}

//function call
Display();

//function with parameters
function Greet(name, location) {
    console.log(`${name} is from ${location}.`);
}
Greet("Ram", "Japan");

//Create a function calculateSum that accepts two parameters min and max, and returns the sum of all numbers from min to max.
function calculateSum(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

console.log(calculateSum(1, 10)); // Output: 55




//AAnonymous functions
// in JavaScript are functions without a name or identity. They are often used when a function is only needed once or as an argument to other functions
// This can be useful in various scenarios, such as callbacks, event handlers, or immediately invoked function expressions (IIFE).
//syntax
let anonymousFunction = function() {
    console.log("Hello programers!");
};

//Here, anonymousFunction is a variable that holds the anonymous function. To call this function, you simply use the variable name followed by parentheses:
anonymousFunction();




//Function Expression
//When you assign an anonymous function to a variable, it is known as a function expression. This makes the variable a function, not just a simple variable.
let greet = function() {
    console.log("Hi!");
};

greet(); // Output: Hi