// .includes(saerchElement, start)
//used to know either a particular element is present in the array or not
//searchElement: -> This parameter holds the element which will be searched.
//start:->  This parameter is optional and it holds the starting point of the array, where to begin the search the default value is 0.
//Return Value: -> It returns a Boolean value i.e, either True or False.
 
console.log([1, 2, 3, 4, 5].includes(2))   //true


//or


let arr1 =[1, 2, 3, 4, 5]
let result = arr1.includes(5,3) 
console.log(result) //true



//arr.sort(compareFunction)
// modifies the original array
//The arr.sort() method is used to sort the array in place in a given order according to the compare() function. If the method is omitted then the array is sorted in ascending order.
//compareFunction: This parameter is used to sort the elements according to different attributes and in a different order.

//    compareFunction(a,b) < 0
//    compareFunction(a,b) > 0
//    compareFunction(a,b) = 0
// Return value: This method returns the reference of the sorted original array.

var arr2 = ["Geeks", "for", "Geeks"]
console.log(arr2);
// Sorting the array
console.log(arr2.sort());
console.log(arr2)



var arr3 = [2, 5, 8, 1, 4]
console.log(arr3.sort());
console.log(arr3);

//eg
console.log(arr3.sort(function(a, b) {  //[ 1, 2, 4, 5, 8 ]
  return a + 2 * b;
}));
console.log(arr3);   //[ 1, 2, 4, 5, 8 ]




//eg
let numbers = [20,5.2,-120,100,30,0]
console.log(numbers.sort())

//Our output should be -120, 0, 5.2, 20, 30, 100 but it’s not so, why? Because as we apply the direct sort() method, it would process accordingly: 100 would be placed before 20, as ‘2’ is larger than ‘1’, and similarly in the case of 30 & 5.2,  as ‘5’ is larger than ‘3’ thus, 30 would be placed before 5.2. We can resolve this unexpected error by using the sort() method for numerics using the following compare function: 


// uding Logic: 
//    20 - (5.2) = +ve => 5.2 would be placed before 20,
//    20 - (-120) = +ve => -120 would be placed before 20,
//    20 - (100) = -ve => 100 would be placed after 20,
//    20 - (30) = -ve => 30 would be placed after 20,
//    20 - (0) = +ve => 0 would be placed before 20,
//    Similarly for every element, we check and place them accordingly in iterations.

function compare(a,b){
    return a-b;
}
console.log(numbers.sort(compare));