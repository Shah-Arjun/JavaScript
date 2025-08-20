//without type conversion
// const a = "3";
// const b = "10";
// console.log(a + b); //310

//with conversion
// const aNumber = Number(a);
// const bNumber = Number(b);
// console.log(aNumber + bNumber); // Outputs: 13

//Example with Type Checking
//string to numbers
// const a = "3";
// const b = "10";
// const c = Number(a);
// const d = Number(b);

// console.log(typeof a); // Outputs: string
// console.log(typeof b); // Outputs: string
// console.log(typeof c); // Outputs: number
// console.log(typeof d); // Outputs: number

//Converting Numbers to Strings
// const num = 123;
// const str = String(num);
// console.log(typeof str); // Outputs: string


//eg
// const num1 = 123;
// const num2 = 456.78;
// const str1 = String(num1);
// const str2 = String(num2);
// console.log(typeof num1); // Outputs: number
// console.log(typeof num2); // Outputs: number
// console.log(typeof str1); // Outputs: string
// console.log(typeof str2); // Outputs: string


//Converting to Boolean
//Conversion Rules
// Any non - empty string is true.
// An empty string is false.
// The number 0 is false.
// Any other number is true.
// Example with Strings
// const str1 = "Hello";
// const str2 = "";

// console.log(Boolean(str1)); // Outputs: true
// console.log(Boolean(str2)); // Outputs: false

// //Example with Numbers
// const num1 = 10;
// const num2 = 0;

// console.log(Boolean(num1)); // Outputs: true
// console.log(Boolean(num2)); // Outputs: false

// const str = "Hello";
// const num = 0;

// console.log(Boolean(str)); // Outputs: true
// console.log(Boolean(num)); // Outputs: false



//Practical Examples
//Example 1: Converting User Input from Text Area

const input = "42"; // User input as a string
const number = Number(input);​
if (!isNaN(number)) {
    console.log(number + 8); // Outputs: 50
} else {
    console.log("Invalid input");
}

console.log(Boolean("Prakash")); // Outputs: true
console.log(Boolean("")); // Outputs: false
console.log(Boolean(0)); // Outputs: false
console.log(Boolean(100)); // Outputs: true
console.log(Boolean(-1)); // Outputs: true