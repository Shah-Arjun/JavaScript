//string Concatnetation (+)
let name = "Prakash";
let age = 99;
let message = "My name is " + name + " and I am " + age + " years old.";
console.log(message);


//Tempalte Literals
let username = "Prakash";
let myAge = 99;
let msg = `My name is ${username} and I am ${myAge} years old.`;
console.log(msg);

//Advantages of Template Literals
//Readability: Template literals improve the readability of your code by avoiding the clutter of multiple + operators.
//Multiline Strings: Template literals allow for multiline strings without the need for escape sequences

//Multiline
let user = "Prakash";
let my_age = 99;
let multilineMsg = `My name is ${user}.
I am ${my_age} years old.
I love to code, eat, and sing.`;
console.log(multilineMsg);

//Example with Favorite Hobbylet hobby = "coding";
let hobby = "coding";
let concatenationMessage = "My favorite hobby is " + hobby + ".";
let templateLiteralMessage = `My favorite hobby is ${hobby}.`;
console.log(concatenationMessage);
console.log(templateLiteralMessage);

//Example with Favorite Cuisine
let cuisine = "Italian food";
let concatenationMsg = "I love " + cuisine + ".";
let templateLiteralMsg = `I love ${cuisine}.`;
console.log(concatenationMsg);
console.log(templateLiteralMsg);