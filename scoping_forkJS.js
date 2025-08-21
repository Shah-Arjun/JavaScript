// Types of Scopes in JavaScript:

//=== Block scope
//=== Function scope
//=== Local scope
//=== Global scope



// 🔹 Real-Life Analogy

// var → Like writing on a whiteboard in a classroom → anyone can erase/overwrite, even from outside the class.

// let → Like writing on a personal notebook → only you can update, and only within the notebook (block).

// const → Like a permanent marker on a notebook → once written, the page can’t be replaced, but you can add notes inside (objects/arrays).




// Block scoppe
function foo() {
  if (true) {
    var x = "1"; // Exist in function scope
    const y = "2"; // Exist in block scope
    let z = "3"; // Exist in block scope
  }
  console.log(x); //1
  //console.log(y); // not defined
  //console.log(z); // not defined
}
foo();



// Function  scope

//---var keyword:
function myFunction1() {
   var firstName1 = "Krishna";   // Function Scope
   console.log(firstName1)     // krishna
}
myFunction1()
//console.log(firstName1)           // not defined




// ---let keyword
function myFunction2() {
  let firstName2 = "Krishna";   // Function Scope
     console.log(firstName2)     //krishna
}
myFunction2()
//   console.log(firstName2)      //not defined




// const keyword
function myFunction3() {
   const firstName3 = "Krishna";   // Function Scope
      console.log(firstName3)      // krishna
}
myFunction3()
//   console.log(firstName3)         // not defined




// Example 1
       // Global scope
        var x = '1'
        const y = '2'
        let z = '3'

        console.log(x);    // 1
        console.log(y);    // 2
        console.log(z);    // 3

        function getNo() {
            console.log(x);   // 1
            console.log(y);   // 2
            console.log(z);   // 3
        }
        getNo();           










//         🔹 1. var

// Old way (before ES6).
// Function-scoped → only respects function boundaries, ignores block scope (if, for, etc).
// Can be re-declared and updated.
// Hoisted (moved to top), but initialized with undefined.
// Example:
var name = "Ram";
var name = "Shyam";   // ✅ allowed (re-declared)
name = "Hari";        // ✅ allowed (updated)
console.log(name)

if (true) {
  var age = 20;       // var ignores block scope
}
console.log(age);      // ✅ 20 (accessible outside block!)

// ⚠️ Problem: variables "leak" outside blocks → causes bugs.



// 🔹 2. let

// Block-scoped → respects { } (if, for, while, etc).
// Can be updated but not re-declared in the same scope.
// Hoisted but not initialized (Temporal Dead Zone).
// Example:
let city = "Kathmandu";
city = "Pokhara";               // ✅ allowed (updated)
// let city = "Biratnagar";       // ❌ error (cannot re-declare in same scope)

if (true) {
  let score = 100;          // block scope
  console.log(score);       // ✅ 100
}
// console.log(score);       // ❌ error (not accessible outside block)

//✅ Safer than var.





//🔹 3. const

// Block-scoped (like let).
// Must be initialized when declared.
// Cannot be re-declared or updated.
// But ⚠️ if it’s an object/array, the reference can’t change, but the contents can.

// Example:
const country = "Nepal";
// country = "India";   // ❌ error (cannot reassign)

const arr = [1, 2, 3];
arr.push(4);           // ✅ allowed (contents can change)
console.log(arr);      // [1, 2, 3, 4]

// ✅ Use const by default → only use let when you need to reassign.
// ❌ Avoid var in modern code.
