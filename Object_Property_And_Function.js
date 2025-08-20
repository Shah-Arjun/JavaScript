// object
const Example = {
  Name: "Ram",              // property

  Func: function () {        //anonymus function   with the key as Func
    console.log("hello");
  },

  second() {               // normal function
    console.log("GeeksForGeeks");
  },
};




// accessing Func
Example.Func();
Example.second()