//.map()
//This method is used to transform each element of an array and return a new array with the same length.

//syntax
// array.map((element, index, array) => {
//      return transformed element
// });

// element – current item
// index (optional) – index of current item
// array (optional) – the original array

//Eg
let fruits = ["apple", "banana", "guava", "mango"];
let FRUITS = fruits.map(fru => fru.toUpperCase());
console.log(FRUITS)                                //[ 'APPLE', 'BANANA', 'GUAVA', 'MANGO' ]


//eg-2
let labeledFruits = fruits.map((f, i, arr) => {
    return `${i + 1}. ${f}`;
});
console.log(labeledFruits);



//.filter()
//Returns a new array containing only the elements that pass a test (condition).

// array.filter((element, index, array) => {
//   return condition; // must return true or false
// });

// element – current value
// index (optional) – current index
// array (optional) – original array

//eg-1
let nums = [1, 2, 3, 4, 5, 6, 7];
let even = nums.filter(n => n % 2 == 0)
console.log(even)


//eg-2
let students = [
    { name: "Arjun", age: 21 },
    { name: "Sita", age: 19 },
    { name: "Ram", age: 22 }
];
let adults = students.filter(std => std.age > 20)
console.log(adults)

//eg-3
let values = [0, 1, "", "hello", false, true, null];
let truthy = values.filter(Boolean);
console.log(truthy);            // [1, "hello", true]









//real world examples of .filter() and .map()

//🛒 Example 1: Filter & Display Products in Stock
let products = [
    { name: "Laptop", price: 800, inStock: true },
    { name: "Phone", price: 400, inStock: false },
    { name: "Tablet", price: 300, inStock: true }
];

// Get names of in-stock products only
let available = products
    .filter(product => product.inStock)         // filter in-stock
    .map(product => product.name);              // extract name

console.log(available); // ["Laptop", "Tablet"]



//✅ Example 2: To-Do List — Get Pending Tasks with Labels
let todos = [
    { task: "Complete assignment", done: true },
    { task: "Wash dishes", done: false },
    { task: "Go jogging", done: false }
];
let pendingTask = todos
    .filter(todo => !todo.done)
    .map((todo, i) => `${i + 1}. ${todo.task}`);

console.log(pendingTask);




//.reduce()
//It is used to reduce the array into one single value using some functional logic
//syntax
//array.reduce(callbackFn, initialValue);

//🔁 callbackFn is a function with this form:
//(accumulator, currentValue, currentIndex, array) => { ... }

// accumulator → the running total/result

// currentValue → current item in the array

// currentIndex (optional) → index of the current item

// array (optional) → the original array
// 📍 initialValue (required but technically optional):
// It's the value used for the first call of callbackFn.

// If omitted, the first element of the array is used as the initial value, and iteration starts from the second element.



//🧠 Example 1: Sum of numbers (with initialValue)
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr, index, arr) => {
  console.log(`Step ${index}: acc = ${acc}, curr = ${curr}`);
  return acc + curr;
}, 0);

console.log("Sum:", sum); // Output: Sum: 10



//🧠 Example 2: Without initialValue
const total = numbers.reduce((acc, curr) => acc + curr);
// initialValue not provided → starts with acc = 1 (first item), curr = 2

console.log("Sum:", total); // Output: 10



//real world examples
//🧮 1. Calculate Total Price in a Shopping Cart
const cart = [
  { item: "Laptop", price: 800 },
  { item: "Phone", price: 500 },
  { item: "Mouse", price: 50 }
];

const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
console.log("Total Price:", totalPrice); // Output: 1350


//📊 2. Count Frequency of Items (e.g., votes or tags)
const tags = ["js", "js", "react", "node", "react", "js"];

const count = tags.reduce((acc, tag) => {
  acc[tag] = (acc[tag] || 0) + 1;
  return acc;
}, {});
console.log(count);      // Output: { js: 3, react: 2, node: 1 }


//📋 3. Group Items by Property (e.g., by department)
const employees = [
  { name: "Alice", dept: "HR" },
  { name: "Bob", dept: "IT" },
  { name: "Charlie", dept: "HR" },
  { name: "David", dept: "IT" }
];

const grouped = employees.reduce((acc, emp) => {
  if (!acc[emp.dept]) acc[emp.dept] = [];    
  acc[emp.dept].push(emp.name);
  return acc;
}, {});

console.log(grouped);
// Output: { HR: ["Alice", "Charlie"], IT: ["Bob", "David"] }



//📄 4. Flatten a Nested Array
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // Output: [1, 2, 3, 4, 5]







//.some()
//It is used to check whether some array values passes a test

// ✅ Syntax:
//     array.some(callback(element, index, array), thisArg)

//  Parameters:

// callback – Function to test each element
// element: Current element
// index: (Optional) Index of the current elemen
// array: (Optional) The full array
// thisArg: (Optional) Value to use as this inside the callback


// 📌 Returns:
// true – if at least one element passes the test

// false – if none pass


//🧠 Example 1: Check if any number is even
const numb = [1, 3, 5, 8];
const hasEven = numb.some(num => num % 2 === 0);
console.log(hasEven); // Output: true (because 8 is even)



//🧠 Example 2: Check if any student passed
const Students = [
  { name: "Asha", marks: 45 },
  { name: "John", marks: 32 },
  { name: "Ravi", marks: 27 }
];
const anyPassed = Students.some(student => student.marks >= 35);
console.log(anyPassed); // Output: true (because Asha passed)



//eg -3
array = [ 1, 2, 3, 4, 5, 6 ];
 
const lessthanFourCheck = (element) => element < 4 ; //📌 This is a callback function that returns true if a number is less than 4.

const lessthanFour = array.some(lessthanFourCheck)
 
console.log(array);
if(lessthanFour){
    console.log("At least one element is less than 4" )
}else{
    console.log("All elements are greater than 4 ")
}