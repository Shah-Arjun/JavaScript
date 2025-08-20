//Destructuring Array

// Introduced in ECMAScript 2015 (ES6).

// Provides a shorthand syntax to extract values from arrays or objects.

// Allows unpacking elements or properties into separate variables.

// Works with both iterables (like arrays) and non-iterables (like objects).

// Makes code cleaner, shorter, and more readable.

// Supports default values, nested destructuring, and rest syntax.

// Commonly used in function parameters, looping, and data handling.



//Examples

//extraction of the array  without destructuring of array
var names = ["alpha", "beta", "gamma", "delta"];
var firstName = names[0];
var secondName = names[1];
console.log(firstName);    //"alpha"
console.log(secondName);   //"beta"



//Array destructuring:
//syntax
var x, y;
[x, y] = [10, 20];
console.log(x); // 10
console.log(y); // 20

//or

[x, y, ...restof] = [10, 20, 30, 40, 50];
console.log(x); // 10
console.log(y); // 20
console.log(restof); // [30, 40, 50]


// Object destructuring:
// syntax
({ x, y} = { x: 10, y: 20 });
console.log(x); // 10
console.log(y); // 20

//or 

({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40});
console.log(x); // 10
console.log(y); // 20
console.log(restof); // {m: 30, n: 40}



//Example 1: When using destructuring assignment the same extraction can be done using below implementations. 
var names = ["alpha", "beta", "gamma", "delta"];
var [firstName, secondName] = names;
     
console.log(firstName);//"alpha"
console.log(secondName);//"beta"
 
//Both of the procedure are same
var [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
         
console.log(firstName);//"alpha"
console.log(secondName);//"beta



//Example-2: You can skip array elements using commas in destructuring.

const [ , , third] = [1, 2, 3, 4];
console.log(third); // 3


// Each comma skips one element.

// Destructuring lets you select specific items, unlike the spread operator, which unpacks everything.

// To skip the entire array, use as many commas as there are elements.



//Example 3:
var [firstName,,...lastName] = ["alpha", "beta", "gamma", "delta"];
         
console.log(firstName);//"alpha"
console.log(lastName);//"gamma, delta"



//Example 4: Values can also be swapped using destructuring assignment as below: 
//After swapping
[firstName, secondName] = [secondName, firstName]
console.log(firstName);//"beta"
console.log(secondName);//"alpha"



// Exapmle-5: ✅ Destructuring Return Values from Functions
// You can extract data directly from arrays or objects returned by functions.

// Helps to access only needed values, skipping the rest.

// Avoids working with the entire object or array.

// Makes function code cleaner and more focused.

function NamesList() {
        return ["alpha", "beta", "gamma", "delta"]
    }
var [name1, name2] = NamesList()
console.log(name1)  //alpha
console.log(name2)  //beta





//Destructuring Objects

//Example 6: In ES5 to assign variables from objects its implementation is 
const user = {
  name: 'John Doe',
  age: 30,
  job: 'Developer'
};
const { n, a, j } = user;
console.log(n); // undefined
console.log(a); // undefined
console.log(j); // undefined


//const { name, age, job } = user;
//console.log(name); // John Doe
//console.log(age); // 30
//console.log(job); // Developer

//Note : In object destructuring, the variable names must match the property names of the object unless you rename them explicitly.



//Example-7: Renaming object variables

const { name: username, age, job: userJob} = user;
console.log(username)  //John Doe
console.log(age)  //30
console.log(userJob)  //developer




//Nested Destructuring

//Example 8:
const User = {
  name: 'John Doe',
  address: {
    city: 'New York',
    country: 'USA'
  }
};
const { name, address: { city, country } } = User;
console.log(name); // John Doe
console.log(city); // New York
console.log(country); // USA




//Default Values
//You can set default values while destructuring.
const user = {
  name: 'John Doe',
  age: 30
};
const { name, job = 'Unemployed' } = user;
console.log(name); // John Doe
console.log(job); // Unemployed





//Destructuring Function Parameters

function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
const user = {
  name: 'John Doe',
  age: 30
};
displayUser(user); // Name: John Doe, Age: 30
