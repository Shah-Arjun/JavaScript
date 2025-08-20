// Property Shorthand
//-----Shorthand properties simplify the syntax for defining object properties when the property name is the same as the variable name holding the value. Instead of writing both the property and its value explicitly, 


//--without shorthand
// function getObject(name, city) {
//     return {
//         name: name,
//         city: city
//     };
// }

// const obj = getObject('Akash', 'Mumbai');
// console.log(obj);     // { name: 'Akash', city: 'Mumbai' }


//--- with property shorthand 
function getObject(name, city) {
    return {
        name,
        city
    };
}

const obj = getObject('Akash', 'Mumbai');
console.log(obj);     // { name: 'Akash', city: 'Mumbai' }


//Additional Examples

// Creating an Object with Multiple Properties

// -----Let's define some variables and use them to create an object using shorthand properties:

const age = 25;
const job = 'Developer';
const student = 'Ashish';
const course = 'Redux';

// Using shorthand properties
const person = {
    age,
    job
};

console.log(person); //  { age: 25, job: 'Developer' }

// Logging student and course as an object
console.log({ student, course }); //  { student: 'Ashish', course: 'Redux' }




// Using Shorthand Properties in a Function
//-----Let's create a function that generates an object with shorthand properties:
function createStudent(name, city) {
    return {
        name,
        city
    };
}

const student1 = createStudent('Akash', 'Mumbai');
const student2 = createStudent('Ashish', 'Chennai');

console.log(student1); // Output: { name: 'Akash', city: 'Mumbai' }
console.log(student2); // Output: { name: 'Ashish', city: 'Chennai' }




//**********************Practical Example

//---a list of students and their respective courses using shorthand properties:
const students = [
    { name: 'Akash', city: 'Mumbai', course: 'JavaScript' },
    { name: 'Ashish', city: 'Chennai', course: 'Redux' },
    { name: 'Sita', city: 'Delhi', course: 'React' }
];

students.forEach(student => {
    console.log(student);
});