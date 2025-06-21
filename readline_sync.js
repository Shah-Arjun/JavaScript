//steps
//1.setup readline sync
const readlineSync = require('readline-sync');

//2. Ask for User Input
const userName = readlineSync.question('May I know your name? ');
console.log(`Welcome, ${userName}!`);


//3. Convert and Use Numeric Input:
//Let 's extend this to ask the user for their age and calculate their birth year.
const userAge = readlineSync.question("Enter age: ");
// Convert the input to a number
const age = Number(userAge);

// Check if the conversion was successful
if (!isNaN(age)) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - userAge;
    console.log(`You were born in the year ${birthYear}.`);
} else {
    console.log("Please enter a valid age number");
}