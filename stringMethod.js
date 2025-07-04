//Basic String Methods
//1. Finding the Length of a String  =>   .length
let message = "I love JS";
console.log(message.length);



//2.Finding a Character at a Specific Index =>  .charAt()
console.log(message.charAt(5)); //e

//eg-2
function func() {
    // Original string
    var msg = 'JavaScript is object oriented language';

    // Finding the character at given index 
    var value = msg.charAt(0);
    var value1 = msg.charAt(4);
    console.log(value); //J
    console.log(value1); //S
}
func();


//3.Finding the ASCII Code of a Character  => charCodeAt()
console.log(message.charCodeAt(5)); //101

//if index is out of bound it returns NaN
function func() {
    var str = 'ephemeral';

    // Finding the code of the character 
    // at given index 
    var value = str.charCodeAt(20);

    console.log(value); //NaN
}
func();



//.indexOf
//syntax =>   str.indexOf(searchValue , index)
console.log(message.indexOf('JS')); //returns starting index of J i.e. 7

console.log(message.indexOf('e JS')); //5

console.log(message.indexOf('jS')); //not matched so  -1



//.includes()
//syntax =>   string.includes(searchvalue, startIndex)
var str = "Welcome to JavaScript tutriol.";
var check = str.includes("to");
if (check) {
    console.log("present");
} else {
    console.log("not present");
}

//eg
var check = str.includes("o", 18);
console.log(check);

//If the computed index(starting index) i.e the position from which the search will begin is less than 0, the entire array will be searched. 
var str = "Welcome to GeeksforGeeks.";
var check = str.includes("o", -2);
console.log(check);


//Practical Application: 
// 1. Checking for Vowels
const displayMessage = "I love to code in dark mode.";
const vowels = "aeiouAEIOU";
for (let char of displayMessage) {
    if (vowels.includes(char)) {
        console.log(`${char} is vowel.`)
    }
}


//2.Conditional Checks
if (displayMessage.includes('light')) {
    console.log('People love to code in light mode')
} else {
    console.log('People love to code in dark mode')
}


//3.Using includes for More Complex Conditions
const msg2 = "Prakash @XYZ.com";
const word = 'light';

if (msg2.toLowerCase().includes(word.toLowerCase('light'))) {
    console.log("The string includes the word 'light' in any case .")
} else {
    console.log("The string does not include the word 'light'.");
}



//.toUpperCase()
const upper = msg2.toUpperCase();
console.log(upper);


//.toLowerCase()
const lower = msg2.toLowerCase();
console.log(lower);






//.substring()
//The substring method returns a part of the string between the start and end indexes, or to the end of the string if the end index is omitted. The character at the end index is not included.
//syntax =>   string.substring(Startindex, Endindex)
a = msg2.substring(0, 5);
b = msg2.substring(7, 2); //starts from 2 to 7
c = msg2.substring(5); //starts from 5 to last
d = msg2.substring(-2); //starts from 0
e = msg2.substring(2.9); //starts from 2

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)




//Practical Use Case: Truncating Long Names
//consider a practical scenario where you need to display a username on a card, but if the username is too long, you want to truncate it and add ellipses (...)
const username = "prakashnarsingrao sakari";
const maxLength = 10;
let displayName = username;

if (username.length > maxLength) {
    displayName = username.substring(0, maxLength) + "...";
}

console.log(displayName); // Output: "prakashnar..."




//Responsive Design Example
function getDisplayName(username, maxLength) {
    return username.length > maxLength ? username.substring(0, maxLength) + "..." : username;
}

const display_ame = getDisplayName(username, maxLength);
console.log(display_ame); // Output: "prakashnar..."


//Substring vs. Slice

//substring: Treats negative indices as 0.
//slice: Allows negative indices, counting from the end of the string.

// Using substring
console.log(username.substring(0, 10)); // Output: "prakashnar"

// Using slice
console.log(username.slice(0, 10)); // Output: "prakashnar"

// Using slice with negative indices
console.log(username.slice(-10)); // Output: "rao sakari"