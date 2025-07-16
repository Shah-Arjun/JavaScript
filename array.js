//defining array
let fruits = ["apple", "banana", "guava"];
console.log(fruits);     //["apple", "banana", "guava"]

//Arrays can store multiple data types, including numbers, strings, other arrays, and objects:
let mixedArray = ["Ram", 17, [1,2,3], {schoolName: "SBS"}];
console.log(mixedArray);    //[ 'Ram', 17, [ 1, 2, 3 ], { schoolName: 'SBS' } ]

//accessing/indexing array elements
//index starts from 0
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

console.log(mixedArray[2])
console.log(mixedArray[3])


//Iterating over array

// for(let f in fruits){
//     console.log(fruits); //logs full array element times
// }

//uding for..of
for (let fruit of fruits) {
    console.log(fruit); // apple, banana, guava
}

//using for..in
// (not recommended for array)
for(let f in fruits){
    console.log(f); // 0 apple 1 banana 2 guava
    console.log(fruits[f]); //apple, banana, guava
}



//Modifying Arrays

//adding  element
//.push()
fruits.push("Mango");
console.log(fruits);    //[ 'apple', 'banana', 'guava', 'Mango' ]


//removing element from array
//To remove elements, you can use methods like pop, shift, and splice:

fruits.pop(); // Removes the last element
console.log(fruits);             //[ 'apple', 'banana', 'guava' ]

fruits.shift(); // Removes the first element
console.log(fruits);            //[ 'banana', 'guava' ]

fruits.splice(1, 1); // Removes one element at index 1
console.log(fruits);             //[ 'banana' ]









