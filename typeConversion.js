//without type conversion
// const a = "3";
// const b = "10";
// console.log(a + b); //310

//with conversion
// const aNumber = Number(a);
// const bNumber = Number(b);
// console.log(aNumber + bNumber); // Outputs: 13

//Example with Type Checking
const a = "3";
const b = "10";
const c = Number(a);
const d = Number(b);

console.log(typeof a); // Outputs: string
console.log(typeof b); // Outputs: string
console.log(typeof c); // Outputs: number
console.log(typeof d); // Outputs: number