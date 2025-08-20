// Split method
//splits a string into an array of substrings based on a specified separator.
// str.split(separator, limit)

 
function func() {
    //Original string
    var str = 'Geeks for Geeks'
    var array = str.split("for"); //for is separator
   console.log(array);
}
func();    //[ 'Geeks ', ' Geeks' ]



var str = "It iS a 5r&e@@t Day."
var array = str.split(" ");
console.log(array);       //  [It,iS,a,5r&e@@t,Day.]




// Splitting up to 2 terms
var array2 = str.split(" ", 2)
console.log(array2)      // [ 'It', 'iS' ]




//Practical Example: Checking for Palindrome
function isPalindrome(inputString) {
    let arr = inputString.split("");
    let reversedArr = arr.reverse();
    let reversedString = reversedArr.join("");
    return inputString === reversedString;
}
let inputString = "madam";
console.log(isPalindrome(inputString)); // true

inputString = "hello";
console.log(isPalindrome(inputString)); // false







// join() method

//used to join the elements of an array into a string. The elements of the string will be separated by a specified separator and its default value is a comma(, ).
// array.join(separator)

var a = [1, 2, 3, 4, 5, 6];
console.log(a.join('|'));           // 1|2|3|4|5|6


console.log(a.join( ))            // 1,2,3,4,5,6



function func() { 
      var a = [ 1, 2, 3, 4, 5, 6 ]; 
      console.log(a.join(' ')); 
   } 
   func();         // 1 2 3 4 5 6



//    Use Cases for Split and Join
// Reversing a String: -> As demonstrated above, split a string into characters, reverse the array, and join it back into a string.
// Transforming Data: -> For example, converting a CSV string into an array and back.
// String Manipulation: -> Easily modify parts of a string by splitting it into an array, altering the array, and joining it back into a string.