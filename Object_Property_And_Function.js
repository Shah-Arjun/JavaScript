// object
const Example = {
  Name: "Ram", // property

  //anonymus function   with the key as Func
  Func: function () {
    console.log("hello");
  },

      // normal function
  second() {
    console.log("GeeksForGeeks");
  }
};

// accessing Func
Example.Func();
Example.second();



// ******computed property

Example.age = 13;       // computed property , adding age property from outside

//  Loop through keys
for (let key in Example) {
  console.log(key, ":", Example[key]);
}

// OR using Object.keys()
Object.keys(Example).forEach((key) => {
  console.log(key, ":", Example[key]);
});
