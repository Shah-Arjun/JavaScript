//Basic Mathematic operator

// const x = 12;
// const y = 3;

// //Addition:
// console.log(x + y); // Outputs: 15

// //Subtraction:
// console.log(x - y); // Outputs: 9

// //Multiplication:
// console.log(x * y); // Outputs: 36

// //Division:
// console.log(x / y); // Outputs: 4

// //Remainder: modulus
// console.log(x % y); // Outputs: 0

// //Exponentiation:
// console.log(x ** 2); // Outputs: 144
// console.log(y ** 3); // Outputs: 27


//Type Conversion with Operators
//1.Adding Strings and Numbers
// const x = "12";
// const y = 3;
// console.log(x + y); // Outputs: "123"

// //2.Other Operations with Strings and Numbers
// console.log(x - y); // Outputs: 9
// console.log(x * y); // Outputs: 36
// console.log(x / y); // Outputs: 4

//2.Handling Non-Numeric Stringsconst x = "apple";
// const y = "mango";
// console.log(x + y); // Outputs: "applemango"
// console.log(x - y); // Outputs: NaN
// console.log(x * y); // Outputs: NaN
// console.log(x / y); // Outputs: NaN


//Best practice
// Simulating user input
const userInput = "42";
const numberInput = Number(userInput);

console.log(isNaN(numberInput));

if (!isNaN(numberInput)) {
    console.log(numberInput + 8); // Outputs: 50
} else {
    console.log('Invalid input');
}