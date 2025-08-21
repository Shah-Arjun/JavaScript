// 👉 A closure happens when a function “remembers” variables from its outer scope, even after that outer function has finished executing.

// In short:
// A closure = function + its surrounding state (scope chain).


//🔹 Basic Example
function outer() {
  let name = "Ram";                // variable in outer scope

  function inner() {
    console.log("Hello " + name);   // inner uses outer variable
  }

  return inner;
}
  
const greet = outer();             // outer() runs, returns inner()
greet();                           // "Hello Ram"


//✅ Even though outer() is finished, inner() still remembers name = "Ram".
//That’s a closure.




// 🔹 Real-Life Analogy
// Think of a backpack 🎒.
// When a function is created, it gets a backpack filled with variables from the outer scope.
// Even if the outer function is gone, the backpack (closure) stays with the function.




// ****************************🔹 Practical Uses of Closures

// 1. Data Privacy (like private variables)
function counter() {
  let count = 0; // private variable

  return {
    increment: function() { count++; return count; },
    decrement: function() { count--; return count; }
  };
}

const myCounter = counter();
console.log(myCounter.increment()); // 1
console.log(myCounter.increment()); // 2
console.log(myCounter.decrement()); // 1

//👉 count is not accessible directly, only through the returned methods.





//2. Function Factories
function multiplier(factor) {
  return function(num) {
    return num * factor;
  }
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

//👉 Each returned function remembers its own factor.





//3. Event Handlers / setTimeout
function delayedMessage(msg, delay) {
  setTimeout(function() {
    console.log(msg);
  }, delay);
}

delayedMessage("Hello after 2s", 2000);

//👉 The callback function remembers msg because of closure.




//🔹 The Problem with var in Loops
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);           // 4   4   4
  }, 1000);
}

// ❌ Why does this happen?

// var is function-scoped, not block-scoped.
// All the setTimeout callbacks share the same i variable.
// By the time the timeouts run, the loop is finished → i = 4.
// So all of them print 4.



// 🔹 Fix #1: Use let
for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);               //1   2   3
  }, 1000);
}




// 🔹 Fix #2: Use an IIFE (Immediately Invoked Function Expression)
// Before let existed, developers used closures manually:

for (var i = 1; i <= 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);                         //1 2 3
    }, 1000);
  })(i);  // pass i as argument
}