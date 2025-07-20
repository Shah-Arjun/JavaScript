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



