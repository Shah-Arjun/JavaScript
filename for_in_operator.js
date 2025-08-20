//"in" check for the existence of properties operator and loop through an object's properties using the for...in loop

//The in operator is used to check if a specified property exists in an object. It returns true if the property is found and false if it is not.


const obj = {
    name: 'Prakash',
    city: 'Mumbai'
};

// Checking if 'name' property exists in obj
const isNameFound = 'name' in obj;
console.log(isNameFound); // Output: true

// Checking if 'age' property exists in obj
const isAgeFound = 'age' in obj;
console.log(isAgeFound); // Output: false



//Looping Through an Object with for...in
for(let key in obj){
    console.log(`${key}: ${obj[key]}`)
}