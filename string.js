//Printing each character of string
let str = "I love JavaScript";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

//using index to print specific character
console.log(str[1]); // Prints ' '
console.log(str[2]); // Prints 'L'
console.log(str[3]); // Prints 'o'


//Using for...of to Print Each Character
for (let char of str) {
    console.log(char);
}

//Suppose we want to stop iterating when we encounter the character 'n'
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a') {
        break;
    }
    console.log(str[i]);
}


//count how many times the character 'a' appears in the string
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a') {
        count++;
    }
}
console.log(`Character 'a' appears ${count} times.`);



//Practical Use Cases

//1: Finding the Index of a Character
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
        console.log("Index of a: " + i);
    }
}


//2: Filtering Characters
//Suppose we want to create a new string containing only the vowels from the original string.
let vowels = '';

// Create a Set containing all vowel characters (both lowercase and uppercase for case sensitivity)
const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
for (let char of str) {
    if (vowelSet.has(char)) {
        vowels += char;
    }
}
console.log(vowels);