//ternary operator
//syantax
//   condition ? true : false;
const totalMarks = 420;

console.log((totalMarks > 180) ? "Passed" : "Failed");

//or
const result = totalMarks > 180 ? "Pass" : "Fail";
console.log(result);

//for more than 2 conditions to be checked
const res = totalMarks < 180 ? "fail" : totalMarks < 360 ? "C" : totalMarks < 400 ? "C+" : totalMarks < 440 ? "B" : totalMarks < 480 ? "B+" : totalMarks < 520 ? "A" : totalMarks < 560 ? "A+" : "Brilliant";
console.log(res);