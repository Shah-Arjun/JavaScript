// Nested object
const user = {              //parent object
    name : 'Jen',
    address: {              //nested object
        street: '123 main road',
        city: 'Mumbai'
    },
    likes: ['reading', 'travelling']
};

// to access nested onject -> address
console.log(user.address.city)                // Mumbai

// if any property doesnot exist -> output undefined
//console.log(user.hobbies)                     //undefined





// if address itself is not defined and acsessing a city will reslut as
// const userWithoutAddress = {
//     name: 'Prakash'
// };

//console.log(userWithoutAddress.address.city);  // Error: Cannot read property 'city' of undefined



// to handle this

// Optional Chaining

// ------allows to safely access nested properties.
// ------ It uses the ?. syntax to check if a property exists before trying to access it.

 console.log(user?.address?.city);     //  Mumbai
// console.log(userWithoutAddress?.address?.city);  // undefined




// // Example with Functions
// //------ it also works with function
// const userWithFunction = {
//     name: 'Prakash',
//     getDisplayMessage: function() {          //function
//         console.log('Welcome, Prakash');
//     }
// };

// userWithFunction?.getDisplayMessage?.(); // Output: Welcome, Prakash



// // without function
// const userWithoutFunction = {
//     name: 'Prakash'
// };

// //userWithoutFunction?.getDisplayMessage?.(); // No output, no error




// // ******** Practical Use Case

// // ---------Optional chaining is especially useful when dealing with data from APIs where some properties may be optional:

// fetch('https://api.example.com/user')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data?.address?.city);
//     });



// exercise 
const key = 'address';
console.log(user[key]?.city); // Output: Mumbai


// or 
console.log(user['address']?.city)  // Mumbai



// usage - Useful for optional or nullable properties.

// key points
// --Nested Properties: Use ?. to access nested properties safely.
// --Functions: Use ?.() to call functions safely.
// --Avoid Overuse: Only use optional chaining when necessary.
