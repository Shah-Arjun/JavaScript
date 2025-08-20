/* Logical Operators
1. AND &&
2. OR ||
3. NOT !
4. NULLISH COALECING ??
*/

const firstName = "Arjun";
const nickname = "Appa";

// &&
const userName = firstName && nickname && null;
console.log(`Name - ${userName}`); //outputs last one

// ||
const user_name = firstName || nickname || "kappa";
console.log(`Name - ${user_name}`); //outputs 1st one

const a = 35;
const b = 56;

// if (a % 5 === 0 && b % 10 === 0) {
//     console.log(`${a} and ${b} are divisible by 5 and 10.`);
// } else if (a % 5 === 0 || b % 10 === 0) {
//     console.log(`${a} or ${b} is divisible by 5 or 10.`);
// } else {
//     console.log(`${a} and ${b} are not divisible by 5 or 10.`);
// }

// Example of NOT operator
// const isDivisible = a % 5 === 0;
// if (!isDivisible) {
//     console.log(`${a} is NOT divisible by 5.`);
// }

// Example of nullish coalescing (??)
// let result = null;
// //let finalResult = result ? ? "Default value";
// console.log(finalResult); // Output: "Default value"


// OR examples
// console.log(3 || 2 || 1);
// console.log("" || 0 || 1);
// console.log("" || 0 || undefined);
// console.log("" || null || 3);

//AND examples
console.log(3 && 2 && 1);
console.log("" && 0 && 1);
console.log("undefined" && "null" && undefined);



/// Nullish Coalecing
// logical operator that provides a default value for an expression when the expression evaluates to null or undefined.
//The ?? operator returns its right-hand side operand when its left-hand side operand is either null or undefined. Otherwise, it returns its left-hand side operand. 
/*
Key difference from the logical OR (||) operator:
The || operator returns its right-hand side operand if the left-hand side is any falsy value (including 0, '' (empty string), false, NaN, null, and undefined). In contrast, the ?? operator only considers null and undefined as "nullish" and will return the left-hand side for other falsy values.
 */


let value1 = null;
let value2 = undefined;
let value3 = 0;
let value4 = '';
let value5 = 'Hello';

let result1 = value1 ? ? 'Default'; // result1 will be 'Default'
let result2 = value2 ? ? 'Default'; // result2 will be 'Default'
let result3 = value3 ? ? 'Default'; // result3 will be 0 (because 0 is not nullish)
let result4 = value4 ? ? 'Default'; // result4 will be '' (because '' is not nullish)
let result5 = value5 ? ? 'Default'; // result5 will be 'Hello'

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

/*
In JavaScript, nullish coalescing is a new type of logical operator that was introduced to help simplify handling undefined and null values. This operator can help prevent pitfalls that might occur when working with values like undefined, null, 0, or an empty string.

Let’s understand how this operator works and how it differs from the traditional OR (||) operator.

What is Nullish Coalescing (??)?
The nullish coalescing operator (??) is used to assign a default value to a variable when the value is either null or undefined. This is particularly useful when you want to provide a fallback value only for null or undefined, but you want to keep values like 0 or an empty string ("") intact.

The syntax for the nullish coalescing operator is:

let result = value ?? defaultValue;
In this expression:

If value is neither null nor undefined, it will return value.
If value is null or undefined, it will return defaultValue.
Basic Example of Nullish Coalescing:



const firstName = "Prakash";
console.log(firstName ?? "Hidden Geek");  // Output: "Prakash"


In this example, since firstName is not null or undefined, the output is "Prakash". If firstName was null or undefined, the output would have been "Hidden Geek".

Now, let’s test how it works when firstName is undefined:




let firstName;  // `firstName` is undefined
console.log(firstName ?? "Hidden Geek");  // Output: "Hidden Geek"


Here, firstName is undefined, so the nullish coalescing operator assigns the default value "Hidden Geek".

Case of Empty String:
Nullish coalescing does not treat an empty string ("") as a falsy value. This is different from the OR (||) operator, which would consider an empty string as falsy.




let firstName = "";
console.log(firstName ?? "Hidden Geek");  // Output: ""


In this case, the empty string is not null or undefined, so the output remains as an empty string. If we used the OR operator (||), it would return "Hidden Geek" since the empty string is considered falsy by OR.

Difference Between ?? and ||
Let’s now compare nullish coalescing (??) with the OR (||) operator.

OR (||) Operator:
The OR operator returns the first truthy value in an expression. It will treat values like 0, "" (empty string), null, and undefined as falsy values.




let firstName = "";
console.log(firstName || "Hidden Geek");  // Output: "Hidden Geek"


In this case, OR considers the empty string as falsy, so it returns the fallback value "Hidden Geek".

Nullish Coalescing (??) Operator:
The nullish coalescing operator will only return the fallback value if the variable is null or undefined. It will not return the fallback value for falsy values like 0 or "".




let firstName = "";
console.log(firstName ?? "Hidden Geek");  // Output: ""


Here, since firstName is an empty string (""), the nullish coalescing operator does not return "Hidden Geek", because the value is neither null nor undefined.

Handling Falsy Values: The Pitfall of OR Operator
A common issue with the OR operator (||) is that it considers zero (0), empty string (""), and null/undefined as falsy values, which might not always be the desired behavior. Let's look at an example where we want to keep 0 as a valid value:




const a = 0;
console.log(a || 1);  // Output: 1


Here, since a is 0 (which is a falsy value), the OR operator will return 1. However, 0 might be a valid value that we want to preserve.

Now, using nullish coalescing solves this problem:




let a = 0;
console.log(a ?? 1);  // Output: 0


In this case, the nullish coalescing operator correctly keeps the value 0, as 0 is not null or undefined.

Handling Undefined with Default Values
The nullish coalescing operator is especially useful when you need to assign default values to variables that may be null or undefined, but you want to treat other falsy values (like 0 or "") as valid.




let a = 12;
let b;
​
console.log(a + (b ?? 0)); // Output: 12


Explanation:

In this case, b is undefined. The nullish coalescing operator replaces it with 0, so the output is 12.
Summary of Key Differences Between || and ??:
|| (OR operator) treats all falsy values (false, 0, "", null, undefined, etc.) as false.
?? (Nullish Coalescing operator) only considers null and undefined as "nullish" values, and treats other falsy values (0, "", false) as valid.
*/