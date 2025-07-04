//Basic String Methods
//1. Finding the Length of a String  =>   .length
let message = "I love JS";
console.log(message.length);



//2.Finding a Character at a Specific Index =>  .charAt()
console.log(message.charAt(5)); //e

//eg-2
function func() {
    // Original string
    var msg = 'JavaScript is object oriented language';

    // Finding the character at given index 
    var value = msg.charAt(0);
    var value1 = msg.charAt(4);
    console.log(value); //J
    console.log(value1); //S
}
func();


//3.Finding the ASCII Code of a Character  => charCodeAt()
console.log(message.charCodeAt(5)); //101

//if index is out of bound it returns NaN
function func() {
    var str = 'ephemeral';

    // Finding the code of the character 
    // at given index 
    var value = str.charCodeAt(20);

    console.log(value); //NaN
}
func();



//.indexOf
//syntax =>   str.indexOf(searchValue , index)
console.log(message.indexOf('JS')); //returns starting index of J i.e. 7

console.log(message.indexOf('e JS')); //5

console.log(message.indexOf('jS')); //not matched so  -1