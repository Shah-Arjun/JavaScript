// console.log("Hello world");

//1................... variables.......var, let, const

//.....naming conventions
//JS variales are case-sensetive a, A are not same
//can contain Characters
//no leading numbers but can be in end
//No Special Characters: Avoid special characters such as @, #, -, or brackets.
// cannot contain space instead use camelCase or underscore
//can start with underscore(_) or $      but avoit it




//var
// function display() {
//     var x = "Hello";
//     console.log(x);
// }
// console.log(x);

//let
// if (true) {
//     let age = 30;
//     console.log(age);
// }
// console.log(age);

//const
// if (true) {
//     let n = 20;
//     console.log(n);
// }
// console.log(n);

//2.......... Hoisting Behavior of var, let, and const
//var
// console.log(x); //undefined
// varx = 5;
// console.log(x); //5

//let
// console.log(x); //rror
// let x = 10

//const
// console.log(x); //error
// const x = 10


//3........... Re-declaring Variables with var, let, and const
// var name = "Pranjal";
// var name = "Tanmay";  //redeclare
// console.log(name);


// let name = 'Pranjal'
// name = 'Tanmay' //updated
// console.log(name)


// const city = "New York";
// city = "Los Angeles"; //error in updating const
// console.log(city)


//3. .......Block-level Scope in Loops with let
// for (let i = 0; i < 3; i++) {
//     console.log(i); //0 1 2
// }

// console.log(i); //error



//4.........Constant Arrays and Objects with const
// const numbers = [1, 2, 3];
// numers.push(4);
// console.log(a); //[1,2,3,4]
// numbers = [5, 6]; //error, cannot reassign const


//5............Data Types (Premitive, Non premitive)
//a...stringlet
// username = "Prakash";
// console.log(username); // Outputs: Prakash
// console.log(typeof username); //string


//b...numbers
// let age = 25;
// console.log(age)
// console.log(typeof age); // Outputs: number

// let price = 99.99;
// console.log(price)
// console.log(typeof price); // Outputs: number


//c....Boolean
// let isProductInCart = true;
// console.log(typeof isProductInCart); // Output: boolean
// if (isProductInCart) {
//     console.log("Product is in the cart.");
// } else {
//     console.log("Product is not in the cart.");
// }


// let demo = "true"; // treated as a string
// console.log(typeof demo); // Output: string


//d...Undefined (let,var)
// let username;
// console.log(username); // undefined
// console.log(typeof username); // undefined


//e....Null
// let b = null;
// console.log(b); // Outputs: null
// console.log(typeof b); // Outputs: object


//f.....Objects
// const person = {
//     name: "Prakash",
//     age: 25,
//     education: "Engineer"
// };
// console.log(person); // Outputs: { name: 'Prakash', age: 25, education: 'Engineer' }
// console.log(typeof person); // Outputs: object


//g....Array  (special type of object)
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers); //[ 1, 2, 3, 4, 5 ]
// console.log(typeof numbers); //object