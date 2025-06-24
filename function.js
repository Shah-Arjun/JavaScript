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

console.log(typeof(anonymousFunction)); //function


let hey = function greetHi() {
    console.log("Hi AS!");
};
//reetHi(); //error
hey(); //Hi AS


//return in function
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); //15
console.log(add(5, 10.7)); //15.7




//Arrow function => ()
//'function' keyword is not used
const arrowFunc = (x, y) => {
    return x + y;
}
console.log(arrowFunc(12, 18)); //30

//or
const addNo = (p, q) => p + q
console.log(addNo(6, 15))

//eg
let greetHello = () => console.log("Hello from AS!");
greetHello(); // Output: Hello from AS!


//using conditional Logic in Arrow Functions
let calculateSumOrDifference = (x, y) => {
    if (x > y) {
        return x + y;
    } else {
        return x - y;
    }
};
console.log(calculateSumOrDifference(31, 12)); // Output: 43
console.log(calculateSumOrDifference(11, 12)); // Output: -1


//above arrow function using ternary operator
const calculate_Sum_Or_Difference = (n, m) => n > m ? n + m : n - m
console.log(calculate_Sum_Or_Difference(2, 6));





//Arrow Functions and Lexical this
function Person() {
    this.age = 0;
    setInterval(() => {
        this.age++; // `this` refers to the Person object
        console.log(this.age);
    }, 1000); //in every 2 second arrow function does its work
}
//let p = new Person(); //creates a object




//Best Practices and Usage
//Arrow functions are best suited for non-method functions and callbacks where the this context is not required or should be inherited from the surrounding scope.

//Examples
//1. Event Handlers(when not using this):
/*
document.getElementById("myButton").addEventListener("click", () => {
    console.log("Button clicked!");
});
*/


//2. Array Methods:
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(x => x * x); //the map() array method creates a new array of squares from the original numbers array.
// here .map(x => x * x): Creates a new array by applying the function x * x to each element.
console.log(squares); // Output: [1, 4, 9, 16, 25]

//.map() is used to trasnform each element of array without changing the original array.