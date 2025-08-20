// Basic Destructuring
const obj = {
    name: 'Prakash',
    address: {
        street: '123 Main St',
        city: 'Mumbai',
        state: 'Maharashtra'
    },
    courses: ['JavaScript', 'React', 'Node.js']
};


// // destructuring the obj
// //const { name, address, courses } = obj;
// console.log(name);       //  Prakash
// console.log(address);    // { street: '123 Main St', city: 'Mumbai', state: 'Maharashtra' }
// console.log(courses);    //  ['JavaScript', 'React', 'Node.js']


// // nested destructuring  
// const { address: { city, state } } = obj;   // nested address object only
// console.log(city);     //  Mumbai
// console.log(state);    //  Maharashtra


// // Renaming Variables - doesnot change originally
// const { name: userName, address: { city: userCity } } = obj;
// console.log(userName);      //  Prakash
// console.log(userCity);      //  Mumbai


// Using Rest Operator
// -------To gather remaining properties into a new object:
const { name, ...rest } = obj;           // rest is new object name
console.log(name); // Prakash
console.log(rest); // { address: { street: '123 Main St', city: 'Mumbai', state: 'Maharashtra' }, courses: ['JavaScript', 'React', 'Node.js'] }







// Destructuring Arrays

// Basic Array Destructuring
// -----For arrays, destructuring assigns values based on their position:


const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3



// Skipping Items
// ----You can skip items using commas:
const [first, , third] = numbers;
console.log(first); // Output: 1
console.log(third); // Output: 3



// Using Rest Operator
// -----To gather remaining items into a new array:

const [first, ...rest] = numbers;
console.log(first); // Output: 1
console.log(rest); // Output: [2, 3]



// *************Practical Example with Nested Objects
// ------Consider an API response with deeply nested objects:
const employees = {
    engineers: {
        emp1: { id: 1, name: 'John Doe', occupation: 'Software Engineer' },
        emp2: { id: 2, name: 'Jane Smith', occupation: 'Data Scientist' }
    },
    placement: {
        emp3: { id: 3, name: 'Emily Jones', occupation: 'HR Manager' }
    },
    youtube: {
        emp4: { id: 4, name: 'Chris Brown', occupation: 'Content Creator' }
    }
};


const { engineers: { emp2: { name: engineerName, occupation: engineerOccupation } } } = employees;
console.log(engineerName); // Output: Jane Smith
console.log(engineerOccupation); // Output: Data Scientist




//Destructuring with Dynamic Property Names
const propName = 'engineers';
const { [propName]: engineers } = employees;          // child:parent
console.log(engineers); // Output: { emp1: { id: 1, name: 'John Doe', occupation: 'Software Engineer' }, emp2: { id: 2, name: 'Jane Smith', occupation: 'Data Scientist' } }





// Exercises
// To practice, create an object with nested properties and try to extract specific values using destructuring. For example:

// -Create an object company with nested properties for different departments.
//- Extract specific employee details from each department.
//- Use renaming, rest operator, and nested destructuring to manipulate the object.
