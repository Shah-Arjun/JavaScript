# JavaScript
JavaScript from basic to advance with examples


ReadlineSync
In this Article, we will continue exploring type conversion in JavaScript, focusing on real-life scenarios such as extracting and converting user input. Type conversion is essential when dealing with different data types, especially when you need to manipulate user-provided data from input fields.

Why Type Conversion is Important
When taking data from an input field, it is usually in the form of a string, even if the user enters a number. To perform numeric operations, you need to convert these strings to numbers. Let's see how we can do this in JavaScript.

Installing Necessary Packages
Before we dive into the code, we need to set up our environment. Ensure you have Node.js installed on your system. Node.js comes with npm (Node Package Manager), which we will use to install packages.

Install Node.js: Download and install Node.js from the official website.
Install readline-sync Package: This package allows us to read user input from the terminal.
Open your terminal and run the following command to install readline-sync:

npm install readline-sync
Getting User Input
Let's create a simple script to get data from the user and convert it to the appropriate data type.

Set Up readline-sync:



const readlineSync = require('readline-sync');
2. Ask for User Input:




const userName = readlineSync.question('May I know your name? ');
console.log(`Welcome, ${userName}!`);
3. Convert and Use Numeric Input:

Let's extend this to ask the user for their age and calculate their birth year.




const userAge = readlineSync.question('May I know your age? ');
​
// Convert the input to a number
const userAgeNumber = Number(userAge);
​
// Check if the conversion was successful
if (!isNaN(userAgeNumber)) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - userAgeNumber;
    console.log(`You were born in the year ${birthYear}.`);
} else {
    console.log('Please enter a valid number for age.');
}
Detailed Explanation
Asking for Input: We use readlineSync.question() to prompt the user and capture their input.
Converting String to Number: The Number() function converts the string input to a number. If the input is not a valid number, it returns NaN (Not-a-Number).
Checking the Conversion: We use isNaN() to check if the conversion was successful.
Example with Full Code
Here's the complete code for a better understanding:

const readlineSync = require('readline-sync');
​
// Get user's name
const userName = readlineSync.question('May I know your name? ');
console.log(`Welcome, ${userName}!`);
​
// Get user's age
const userAge = readlineSync.question('May I know your age? ');
​
// Convert the input to a number
const userAgeNumber = Number(userAge);
​
// Check if the conversion was successful
if (!isNaN(userAgeNumber)) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - userAgeNumber;
    console.log(`You were born in the year ${birthYear}.`);
} else {
    console.log('Please enter a valid number for age.');
}

Running the Code
To run this code, open your terminal, navigate to the directory containing your script, and use the following command:

node your-script-file.js
Replace your-script-file.js with the name of your JavaScript file.

Key Points
Type Conversion: Converting data from one type to another is essential for performing various operations.
User Input: Using readline-sync to read user input from the terminal.
Error Handling: Checking the validity of user input and handling errors appropriately.

