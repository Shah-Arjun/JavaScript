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