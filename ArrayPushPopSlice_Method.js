//.push()
//arr.push(element1, element2,.......);
// push any number of element to the arr.

let arr1 =['a', 'b', 'c'];
console.log(arr1.push('d', 'e', 2))   //returns length 6
console.log(arr1);    // [ 'a', 'b', 'c', 'd', 'e', 2 ]



// .pop()
//The arr.pop() method is used to remove the last element of the array and also returns the removed element.
//Parameters: This method does not accept any parameter.
//Return value This method returns the removed element array. If the array is empty, then this function returns undefined.

var popped = arr1.pop()
console.log(popped)    //2
console.log(arr1)   //[ 'a', 'b', 'c', 'd', 'e' ]


//if array is empty
var arr = [];
var popped2 = arr.pop()
console.log(popped2)    //undefined
console.log(arr)    //[]



// arr.slice(begin, end)
//The arr. slice() method returns a new array containing a portion of the array on which it is implemented. The original remains unchanged.
//begin -> starting index from where the portion is to be extracted. If this argument is missing then the method takes begin as 0 as it is the default start value.\
//end -> the index up to which the portion is to be extracted (excluding the end index). If this argument is not defined then the array till the end is extracted as it is the default end value .If the end value is greater than the length of the array, then the end value changes to the length of the array.
//Return value: This method returns a new array containing some portion of the original array. 

function func() {
	// Original Array
	var arr4 = [23,56,87,32,75,13];
	// Extracted array
	var new_arr = arr4.slice(2,4);
	console.log(arr);
	console.log("<br>");
	console.log(new_arr);
}
func();


//if argument is not passed
let arr5 = [23,56,87,32,75,13];
console.log(arr5.slice())  //prints full array
