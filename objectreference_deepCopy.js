// Shallow Copy
// A shallow copy creates a new object but does not recursively copy nested objects. Instead, it copies references to the original nested objects. Here's an example:

const person1 = {
    name: 'Prakash',
    age: 101,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};

// const person2 = person1; // Shallow copy , copy the reference of person1
// person2.name = 'Ashish';           // modifies original object

// console.log(person1.name); // Output: Ashish  
// console.log(person2.name); // Output: Ashish




//Deep Copy
//A deep copy creates a new object and recursively copies all properties of the original object, ensuring that there are no shared references between the original and the new object.

//Methods to Create Deep Copy

//1. Using JSON methods:

const person3 = JSON.parse(JSON.stringify(person1)); // Deep copy

// This line creates a deep copy of person1 into person2:
// JSON.stringify(person1) converts the entire object to a JSON string.
// JSON.parse(...) then converts that string back into a new object.
// This breaks all references to nested objects, unlike shallow copy.
// ⚠️ Caveat: It removes functions, undefined, Date, etc., but works well for plain data.

person3.name = 'Ashish';
person3.address.city = 'Sirsa';

console.log(person1.name); // Output: Prakash
console.log(person3.name); // Output: Ashish
console.log(person1.address.city); // Output: Mumbai
console.log(person3.address.city); // Output: Sirsa


console.log('</br>')


//2. Using a custom deep copy function:

function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {              //hasOwnProperty ensures only the object's own properties are copied (ignores inherited ones).
            copy[key] = deepCopy(obj[key]);        //deepCopy(obj[key]) recursively copies each nested value — this is the core of the deep copy process.
        }
    }
    return copy;
}

const person4 = {
    name: 'Prakash',
    age: 101,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};

const person5 = deepCopy(person4); // Custom deep copy
person5.name = 'Ashish';
person5.address.city = 'Sirsa';

console.log(person4.name); // Output: Prakash
console.log(person5.name); // Output: Ashish
console.log(person4.address.city); // Output: Mumbai
console.log(person5.address.city); // Output: Sirsa





//Object.assign

//The Object.assign method creates a shallow copy of an object. It is useful for copying objects that do not contain nested objects.

const person6 = {
    name: 'Prakash',
    age: 101
};

const person7 = Object.assign({}, person6); // Shallow copy
person7.name = 'Ashish';

console.log(person6.name); // Output: Prakash
console.log(person7.name); // Output: Ashish



//However, when using Object.assign with nested objects, the nested objects are still copied by reference, leading to unexpected behavior:


const person5 = Object.assign({}, person4); // Shallow copy
person5.name = 'Ashish';
person5.address.city = 'Sirsa';

console.log(person4.address.city); // Output: Sirsa
console.log(person5.address.city); // Output: Sirsa






//Spread Operator

const person1 = {
    name: 'Prakash',
    age: 101,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};

const person2 = { ...person1 }; // Shallow copy
person2.name = 'Ashish';
person2.address.city = 'Sirsa';

console.log(person1.name); // Output: Prakash
console.log(person2.name); // Output: Ashish
console.log(person1.address.city); // Output: Sirsa
console.log(person2.address.city); // Output: Sirsa