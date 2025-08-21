//Pure function
// ----especially when working with functional programming paradigms and frameworks like React.

// Takes Input (Arguments):--- It should accept parameters and use those inputs to produce a result.
// Returns a Value
// No Side Effects:--- The output of the function should not depend on any external state or variables outside of its scope. This means the function should not modify any external state (like global variables or passed-in objects/arrays).
// Deterministic:--- Given the same input, a pure function will always return the same output. This predictability is a key aspect of pure functions.

function doubleValue(number) {
  return number * 2;
}

const result = doubleValue(5);
console.log(result); // 10




// Impure function

---const multiplier = 4;

function doubleValue(number) {
  return number * multiplier;
}

const result = doubleValue(5);
console.log(result); // 20

// This function is impure because:

// ----It relies on an external variable (multiplier).
// -----If multiplier changes, the output changes even if the input (number) stays the same.



// Avoiding Mutation
// -Another characteristic of pure functions is that they do not mutate their input values. 
// --Let's consider an example that mutates an array:

function appendNumbers(arr) {
    arr.push(5, 6);
    return arr;
}

const numbers = [1, 2, 3, 4];
const result = appendNumbers(numbers);
console.log(result); // [1, 2, 3, 4, 5, 6]

// ---. this function is impure because it mutuates the array


//****  Making it Pure

function appendNumbers(arr) {
    const newArr = [...arr, 5, 6];
    return newArr;
}

const numbers = [1, 2, 3, 4];
const result = appendNumbers(numbers);
console.log(result); // [1, 2, 3, 4, 5, 6]
console.log(numbers); // [1, 2, 3, 4] (original array remains unchanged)



