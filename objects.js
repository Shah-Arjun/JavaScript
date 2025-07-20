//Creating Objects
//     let object_name = {
//        key_name : value,
//        ...
//        ...
//    }


//eg
const person = {
    name: 'Prakash',     //properties
    age: 99,            //properties
    job: 'Mentor'        //properties
};


//There are two primary ways to access properties of an object:
//1. Dot Notation:

console.log(person.name); // Output: Prakash
console.log(person.age);  // Output: 99

// 2.Bracket Notation:
console.log(person['name']); // Output: Prakash
console.log(person['age']);  // Output: 99

//Note:  Bracket notation is particularly useful when property names contain spaces or are dynamic.



//Adding and Modifying Properties
person.city = 'New York'; // Adding a new property
person.age = 100;         // Modifying an existing property
console.log(person.city); // Output: New York
console.log(person.age);  // Output: 100



//Deleting Properties
delete person.job;
console.log(person.job); // Output: undefined



//Nested Objects
const user = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
};
console.log(user.address.city); // Output: Anytown




//Object Methods/function
const car = {
    make: 'Tesla',
    model: 'Model S',
    start: function() {              //methods
        console.log('Car started');
    }
};
car.start(); // Output: Car started





//Working with Dynamic Properties
//Sometimes, you need to work with properties dynamically, particularly when property names are determined at runtime.

const propName = 'make';             // 'make' is property of object
console.log(car[propName]); // Output: Tesla



//Handling Multi-Word Property Names
//Properties with multi-word names need to be accessed using bracket notation.

const userProfile = {
    'first name': 'Jane',
    'last name': 'Doe'
};
console.log(userProfile['first name']); // Output: Jane




//Creating a Shallow Copy of an Object
const userCopy = { ...user };
console.log(userCopy); // Output: { name: 'John', address: { street: '123 Main St', city: 'Anytown', country: 'USA' } }








//Adding properties to object

//1. using dot
const obj = {
    name: 'Prakash',
    age: 100
};
obj.city = 'Mumbai';
obj.state = 'Maharashtra';
console.log(obj);      // Output: { name: 'Prakash', age: 100, city: 'Mumbai', state: 'Maharashtra' }


//2. using bracket []
obj['country'] = "Japan"
obj['place'] = 'Tokyo'
console.log(obj['country'])
console.log(obj['place'])








//Computed Properties

//Computed properties allow you to dynamically set property names. This is particularly useful when you want to add a property to an object based on a variable value.

// example:   Let's take an example where you get a key from the user and add that key to the object:

const readlineSync = require('readline-sync');

const people = {
    name: 'Prakash',
    age: 100
};

// Getting a key from the user
const key = readlineSync.question('What do you want to know about the mentor? (name, age, city, state): ');

// Adding the key to the object dynamically
people[key] = people[key] || 'Not Available';

console.log(people);