//for loop
// var i;
// for (i = 0; i < 10; i++) {
//     console.log("Hello World!");
// }

// const name = "Prakash Sarkari";
// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
// }

//while loop
// var i = 1;
// while (i <= 10) {
//     console.log("Hello World!");
//     i++;
// }

//do...while
// let ii = 0;
// do {
//     console.log(ii);
//     ii++;
// } while (ii < 10);

//examples
//star patterns
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */
const symbol = "* ";
// for (let i = 1; i <= 5; i++) {
//     console.log(symbol.repeat(i));
// }


/**
 * * * * *
 * * * *
 * * *
 * *
 * 
 */
// for (let i = 5; i >= 1; i--) {
//     console.log(symbol.repeat(i));
// }


/*
 *
 * *
 * * *
 * * * *
 * * * * *
 * * * *
 * * *
 * *
 * 
 */
// for (let i = 1; i <= 5; i++) {
//     console.log(symbol.repeat(i));
// }
// for (let i = 5; i >= 1; i--) {
//     console.log(symbol.repeat(i));
// }


//count no. of characters using loop
const user = "Arjun Sah";
let count = 0;
for (let i = 0; i < user.length; i++) {
    count++;
}
console.log(`Number of characters in user is- ${count}`);



//check there is vowels ina string or not
const inputStr = "Arjun Sah";
const vowels = "aeiouAEIOU";
for (let i = 0; i < inputStr.length; i++) {
    if (vowels.includes(inputStr[i])) { // ith character of string is in vowels?
        console.log(`${inputStr[i]} is a vowel`);
    } else {
        console.log(`${inputStr[i]} is not a vowel`);
    }
}