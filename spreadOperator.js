//Spread operator (...)
//The spread operator can be used to spread the elements of an array into another array or to perform operations that require unpacking of array elements.
// var variablename1 = [...value]; 

const arr = [1, 2, 3, 4, 5];
console.log(...arr);            // 1 2 3 4 5



//Using Spread Operator to Merge Arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]




//Adding Elements While Merging
const combinedArr = [...arr1, 6, 7, ...arr2, 10, 11];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]



// Preventing Mutation
const arr3 = [...arr1, 6, 7];
console.log(arr1); // Output: [1, 2, 3, 4, 5]
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6, 7]



// Spread Operator in Objects

//The spread operator can also be used with objects to copy or merge them.

//Copying an Object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };
console.log(obj2); // Output: { a: 1, b: 2 }



//Merging Objects
const obj3 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj3 };
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }



// Updating Properties
const updatedObj = { ...obj1, b: 3 };
console.log(updatedObj); // Output: { a: 1, b: 3 }





// Math

//The Math object in JavaScript has different properties that we can make use of to do what we want like finding the minimum from a list of numbers, finding maximum etc.

//finding minimum in list
console.log(Math.min(1,2,3,-1));   //-1


// min in an array using Math.min()
let arr5 = [1,2,3,-1];
console.log(Math.min(arr));  //NaN


//When …arr is used in the function call, it “expands” an iterable object arr into the list of arguments.
//In order to avoid this NaN output, we make use of spread operator, like:

// with spread 
let arr6 = [1,2,3,-1];
  
console.log(Math.min(...arr));   //-1




//Example of spread operator with objects

const user1 = {
    name: 'Jen',
    age: 22
};
  
const clonedUser = { ...user1 };
console.log(clonedUser);      // { name: 'Jen', age: 22 }



// merging objects
const user2 = {
    name: "Andrew",
    location: "Philadelphia" 
};
  
const mergedUsers = {...user1, ...user2};
console.log(mergedUsers)                   // { name: 'Andrew', age: 22, location: 'Philadelphia' }
