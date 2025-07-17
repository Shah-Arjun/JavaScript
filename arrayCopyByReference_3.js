// Shallow Copy: -> A shallow copy refers to creating a copy of an array or object where the copy still points to the same memory location as the original. Changes to the copy will reflect in the original.
// Deep Copy: -> A deep copy involves creating a completely independent copy of the array or object, such that changes to the copy do not affect the original. For arrays and objects containing only primitive types, methods like the spread operator, Arra



//A. shallow copy
//The Problem with Shallow Copying

//Example of Shallow Copying

//When you assign arr1 to arr2, both variables reference the same array in memory. Therefore, any changes to arr2 also affect arr1. This is due to the nature of objects and arrays in JavaScript being reference types.

let arr1 = [1, 2, 3]
let arr2 = arr1;      //shallow copy

console.log("Array1: ", arr1); //Array1:  [ 1, 2, 3 ]
console.log("Array2: ", arr2);  //Array2:  [ 1, 2, 3 ]

//modify arr2
arr2.push(4); //also alters arr1

console.log("Updated Array1: ", arr1); //Updated Array1:  [ 1, 2, 3, 4 ]
console.log("Updated Array2: ", arr2);  //Updated Array2:  [ 1, 2, 3, 4 ]


//B. Deep copy
//Solutions to Properly Copy Arrays

//1. Using the Spread Operator
//The spread operator (...) is a convenient way to create a shallow copy of an array that points to a different memory location.
//syntax
//    var variablename1 = [...value]; 

// spread operator for copying 
let arrA = ['a', 'b', 'c'];
let arrB = [...arrA];
console.log(arrA); // [ 'a', 'b', 'c' ]
arrB.push('d'); //inserting an element at the end of arr2
console.log(arrB); // [ 'a', 'b', 'c', 'd' ]
console.log(arrA); // [ 'a', 'b', 'c' ]


//2. Using a for Loop
let arr4 = [1, 2, 3];
let arr5 = [];

// for(let i in arr4){
//     arr5[i] = arr4[i];
// }

//or
for(let n of arr4){
    arr5.push(n);
}
console.log(arr4)
console.log(arr5)

//modify arr5
arr5.push(10);

console.log(arr4)
console.log(arr5)




//3. Using Array.from
let arr6 = [1, 2, 3];
let arr7 = Array.from(arr6); // Properly copying the array using Array.from

console.log('ARR6:', arr6); // Output: [1, 2, 3]
console.log('ARR7:', arr7); // Output: [1, 2, 3]

//modify arr7
arr7.push(12);

console.log('Updated ARR6:', arr6); // Output: [1, 2, 3]
console.log('Updated ARR7:', arr7); // Output: [1, 2, 3, 4]



//4. Using concat
//The concat method can be used to create a new array that includes the elements of the original array.
//it is also used to concat the element to last of array
//also used to merge two or more arrays. It does not change the existing arrays, but instead returns a new array.
//syntax
      //  let newArray = array1.concat(array2, array3, ...);


//eg-1 copying array
let arr8 = [1, 2, 3];
let arr9 = arr8.concat(); // Properly copying the array using concat

console.log('ARR8:', arr8); // Output: [1, 2, 3]
console.log('ARR9:', arr9); // Output: [1, 2, 3]

// Modify arr9
arr9.push(4);

console.log('Updated ARR9:', arr9); // Output: [1, 2, 3, 4]
console.log('Updated ARR8:', arr8); // Output: [1, 2, 3]


//📌 Example 1: Merging Two Arrays
const fruits = ["apple", "banana"];
const moreFruits = ["orange", "mango"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["apple", "banana", "orange", "mango"]


//📌 Example 2: Adding More Than One Array or Value
const nums1 = [1, 2];
const nums2 = [3, 4];
const nums3 = [5];
const combined = nums1.concat(nums2, nums3, 6, 7);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6, 7]


//📌 Example 3: Nested Arrays Stay Nested
const a = [1, 2];
const b = [[3, 4]];
const result = a.concat(b);
console.log(result); // Output: [1, 2, [3, 4]]
console.log(result.flat()); // Output: [1, 2, 3, 4]



//real world eg

//🔹 1. Combining Multiple Product Lists in E-commerce
const electronics = ["Laptop", "Mobile", "Tablet"];
const clothing = ["T-shirt", "Jeans"];
const grocery = ["Rice", "Oil"];

const allProducts = electronics.concat(clothing, grocery);

console.log(allProducts); // Output: ["Laptop", "Mobile", "Tablet", "T-shirt", "Jeans", "Rice", "Oil"]



//🔹 2. Merging Messages or Notifications
//✅ Helps build a combined alert panel.

const systemMessages = ["Update available", "System reboot required"];
const userMessages = ["Welcome back!", "You have 3 new emails"];
const allMessages = systemMessages.concat(userMessages);
console.log(allMessages); // Output: ["Update available", "System reboot required", "Welcome back!", "You have 3 new emails"]


//🔹 3. Appending New Data to Existing Records
//📌 Common in student management or CRM systems when adding new records.
let students = ["Asha", "John", "Ravi"];
let newAdmissions = ["Kiran", "Fatima"];
students = students.concat(newAdmissions);
console.log(students); // Output: ["Asha", "John", "Ravi", "Kiran", "Fatima"]


//🔹 4. Combining Search Results from Multiple Sources
//✅ Useful when merging results from different APIs or databases.

const localResults = ["shop1", "shop2"];
const onlineResults = ["eshop1", "eshop2"];
const combinedResults = localResults.concat(onlineResults);
console.log(combinedResults); // Output: ["shop1", "shop2", "eshop1", "eshop2"]



//🔹 5. Form Submission – Collecting Form Fields
//📌 Used in form builders or dynamic forms to organize fields.

const personalDetails = ["Name", "Email"];
const addressDetails = ["Street", "City", "ZIP"];
const formFields = personalDetails.concat(addressDetails);
console.log(formFields);   // Output: ["Name", "Email", "Street", "City", "ZIP"]



//🔹 Bonus: Alternative Using Spread Operator
const merged = [...electronics, ...clothing, ...grocery];
console.log(merged);  //Output: ["Laptop", "Mobile", "Tablet", "T-shirt", "Jeans", "Rice", "Oil"]
