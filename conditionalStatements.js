//Conditional Statements


//1. if
if (true) {
    console.log("Hello");
}

//2.if..else
const readlineSync = require('readline-sync');
const age = Number(readlineSync.question("Enter your age: "));
if (age == 18) {
    console.log("Eligible for driving license.");
} else {
    console.log("Your not eligible for driving license");
}

//3. if..else if
const num = Number(readlineSync.question("Enter any number: "));
if (num % 3 == 0) {
    console.log(`${num} is divisible by 3`);
} else if (num % 5 == 0) {
    console.log(`${num} is divisile by 5`);
} else {
    console.log(`${num} not divisible by 3 and 5.`)
}

//Nested conditional satatement
const n = Number(readlineSync.question("Enter any number: "));
if (n % 3 == 0) {
    if (n % 5 == 0) {
        console.log(`${n} is divisible by 3 and 5.`);
    } else {
        console.log(`${n} is divisible by 3 but not by 5.`);
    }
} else {
    if (n % 5 == 0) {
        console.log(`${n} is not divisible by 3 but divisible by 5.`);
    } else {
        console.log(`${n} is not divisible by 3 and 5.`);
    }
}

//Example
//A program that prints the samllest string among 3 strings.
const str1 = "apple";
const str2 = "banana";
const str3 = "cat";

//calculate the number of digits in string
const lengthOfStr1 = str1.length;
const lengthOfStr2 = str2.length;
const lengthOfStr3 = str3.length;

if (lengthOfStr1 < lengthOfStr2 && lengthOfStr1 < lengthOfStr3) {
    console.log(`${str1} is samllest string`);
} else if (lengthOfStr2 < lengthOfStr1 && lengthOfStr2 < lengthOfStr3) {
    console.log(`${str2} is samllest string`);
} else if (lengthOfStr3 < lengthOfStr1 && lengthOfStr3 < lengthOfStr2) {
    console.log(`${str3} is samllest string`);
} else {
    console.log("All the string are of same length");
}