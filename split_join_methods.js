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