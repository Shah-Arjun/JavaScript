// --this keyword represents the instance of the current object in the method of the class. And the this keyword is only relevant within a method of the class, meaning that you cannot use it outside of a method.
// --can be used this keyword in the global and function contexts. Moreover, the behavior of the this keyword changes between strict and non-strict modes.

// -- this references the object that is currently calling the function.

const counter = {
   count : 0,
   next : function() {                                 // Inside the next() function, the this references the counter object.
       return ++this.count;
   }
};
counter.next();


// Global Context

// --In the global context, the this references the global object, which is the window object on the browser or global object on Node.js(global object of nodeJs is global).
// --This behavior is consistent whether the strict mode is applied or not, like this:

//console.log( this === window );   // true(in browser)

// --If you assign a property to this object in the global context, JavaScript will add the property to the global object as shown in the following example:

//this.color = 'Red';
//.log( window.color );    // 'Red'



//Method Invocation
// --When you call a method of an object. JavaScript sets this to the object that owns the method. See the following car object:

let car = {
   brand : 'Honda',
   getBrand : function() {   //function
       return this.brand;
   }
}
console.log( car.getBrand() );      // Honda 

 

//Constructor Invocation

//--When you see the new keyword to create an instance of a function object, you use the function as a constructor.

//--JavaScript creates a new object and sets this to the newly created object.

function Car( brand ) {   // constructor function
   this.brand = brand;
}

Car.prototype.getBrand = function() {      // By attaching getBrand to Car.prototype, all Car instances share the same method, This is memory efficient (instead of duplicating the method for every instance).
   return this.brand;                      
}

var car = new Car("Honda");             // creates new object car of Car
console.log( car.getBrand() );         //Honda

 

// car is an instance of Car.
// When you call car.getBrand(), JavaScript looks up the property:
// First, it checks car itself → doesn’t find getBrand.
// Then, it checks Car.prototype → finds getBrand.
// Executes it with this bound to car.


//  Equivalent using class syntax (syntactic sugar for the same thing):
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  getBrand() {
    return this.brand;
  }
}

const car = new Car("Honda");
console.log(car.getBrand()); // Honda




//Indirect Invocation
// --The function type has methods: call() and apply(). These methods allow you to set the this value when calling a function.

function getBrand( prefix ) {
   console.log( prefix + this.brand );
}

let honda = {            // object 1
   brand : 'Honda'
};

let audi = {             // object 2                                         
   brand : 'Audi'
};

//First call --->   this = honda, prefix = "It's a ".
getBrand.call( honda, "It's a Honda" );   // It's a Honda         // .call(thisArg, arg1, arg2, …) ,thisArg → value of this inside the function. , arg1, arg2, … → normal arguments passed to the function.
getBrand.call( audi, "It's an Audi" );    // Its' an Audi