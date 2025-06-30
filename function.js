//Function declaration orfunction statements
function Display() {
    console.log("Hello, World");
}

//function call
Display();

//function with parameters
function Greet(name, location) {
    console.log(`${name} is from ${location}.`);
}
Greet("Ram", "Japan");

//Create a function calculateSum that accepts two parameters min and max, and returns the sum of all numbers from min to max.
function calculateSum(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

console.log(calculateSum(1, 10)); // Output: 55




//AAnonymous functions
// in JavaScript are functions without a name or identity. They are often used when a function is only needed once or as an argument to other functions
// This can be useful in various scenarios, such as callbacks, event handlers, or immediately invoked function expressions (IIFE).
//syntax
let anonymousFunction = function() {
    console.log("Hello programers!");
};

//Here, anonymousFunction is a variable that holds the anonymous function. To call this function, you simply use the variable name followed by parentheses:
anonymousFunction();




//Function Expression
//When you assign an anonymous function to a variable, it is known as a function expression. This makes the variable a function, not just a simple variable.
let greet = function() {
    console.log("Hi!");
};

greet(); // Output: Hi

console.log(typeof(anonymousFunction)); //function


let hey = function greetHi() {
    console.log("Hi AS!");
};
//reetHi(); //error
hey(); //Hi AS


//return in function
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); //15
console.log(add(5, 10.7)); //15.7




//Arrow function => ()
//'function' keyword is not used
const arrowFunc = (x, y) => {
    return x + y;
}
console.log(arrowFunc(12, 18)); //30

//or
const addNo = (p, q) => p + q
console.log(addNo(6, 15))

//eg
let greetHello = () => console.log("Hello from AS!");
greetHello(); // Output: Hello from AS!


//using conditional Logic in Arrow Functions
let calculateSumOrDifference = (x, y) => {
    if (x > y) {
        return x + y;
    } else {
        return x - y;
    }
};
console.log(calculateSumOrDifference(31, 12)); // Output: 43
console.log(calculateSumOrDifference(11, 12)); // Output: -1


//above arrow function using ternary operator
const calculate_Sum_Or_Difference = (n, m) => n > m ? n + m : n - m
console.log(calculate_Sum_Or_Difference(2, 6));





//Arrow Functions and Lexical this
function Person() {
    this.age = 0;
    setInterval(() => {
        this.age++; // `this` refers to the Person object
        console.log(this.age);
    }, 1000); //in every 2 second arrow function does its work
}
//let p = new Person(); //creates a object




//Best Practices and Usage
//Arrow functions are best suited for non-method functions and callbacks where the this context is not required or should be inherited from the surrounding scope.

//Examples
//1. Event Handlers(when not using this):
/*
document.getElementById("myButton").addEventListener("click", () => {
    console.log("Button clicked!");
});
*/


//2. Array Methods:
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(x => x * x); //the map() array method creates a new array of squares from the original numbers array.
// here .map(x => x * x): Creates a new array by applying the function x * x to each element.
console.log(squares); // Output: [1, 4, 9, 16, 25]

//.map() is used to trasnform each element of array without changing the original array.




//finding sum of numbers using function
function sum(min, max) {
    let total = 0;
    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;
}
console.log(sum(1, 20));







//set(just like math set) and map collections in js

//without set
const stdId = new Array();
stdId.push(1);
stdId.push(2);
stdId.push(1); //repeat 1

console.log({ stdId })
console.log(stdId[1]) //to access 2nd element of array

//with set -->set stores unique values
//set doesnot follow any kind of indexing like array
const teacherIds = new Set();
teacherIds.add(1);
teacherIds.add(2);
teacherIds.add(1); // do not duplicate this

console.log({ teacherIds });


//to access the random elementof set, it need to convertes into array

//conversion of set to arrayand vice-versa is possible

//array to set
const sId = [1, 2, 3, 4, 4, 3, 4]
const uniqueSID = new Set(sId)
console.log({ uniqueSID })

//set to array
const teacherID = [2, 3, 4, 4, 3, 4]
const newteacherID = [...uniqueSID] // uniqueSID is the name of set
console.log({ uniqueSID })




//methods of set
//add(), delete(), clear()
const newList = new Set();
newList.add(3);
newList.add(7);
//newList.delete(1) //deletes element 1
// newList.clear(); //removes all the element from the set

console.log({ newList });

//.size
console.log({ newListsize: newList.size });

//.keys()
console.log({ keys: newList.keys() })
    //or
console.log({ keys: [...newList.keys()] });


//.values()
console.log({ values: [...newList.values()] });

//Note: In a Set, .keys() and .values() return the same thing — the set values — because sets don’t have key-value pairs like Map.

//.entries()
console.log({ keys_value: [...newList.entries()] });


//.has()
console.log({ one_is: newList.has(1) }) //to check is 1 in set
console.log({ three_is: newList.has(3) })




//forEach()
newList.forEach((value) => {
    console.log({ value })
})


//Set.prototype.forEach() takes a callback function with 3 parameters: (value, valueAgain, set). The second parameter is the same as the first, for compatibility with Map (which has key, value).