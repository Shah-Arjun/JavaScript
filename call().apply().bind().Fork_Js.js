// a simple program to print the name which is called by this keyword when the function printFunc() is invoked.

var geeks = {
  name: "ABC",
  printFunc: function () {
    console.log(this.name);
  },
};
geeks.printFunc(); // ABC



// see below

var printFunc2 = geeks.printFunc;   //ABC
printFunc2();                       // undefined




// uding bind() methid
var printFunc2= geeks.printFunc.bind(geeks);          // bind() takes the object "geeks" as parameter//
printFunc2();         // SBC


// example
// --In this example there is 3 objects, and each time we call each object by using bind()method.

//object geeks1
var geeks1 = {
name : "ABC",
article: "C++"
}
//object geeks2
  var geeks2 = {
name : "CDE",
article: "JAVA"
}
  
  //object geeks3
  var geeks3 = {
name : "IJK",
article: "C#"
}

function printVal(){
   console.log(this.name+" contributes about "+this.article);
   }
      
  var printFunc2= printVal.bind(geeks1);           

   //using bind() 
   // bind() takes the object "geeks1" as parameter//
  printFunc2();                                          //ABC contributes about C++
  
  var printFunc3= printVal.bind(geeks2);          
  printFunc3();                                         // CDE contributes about JAVA
  
  var printFunc4= printVal.bind(geeks3);
  printFunc4();                                         // IJK contributes about C#
  //uniquely defines each objects
