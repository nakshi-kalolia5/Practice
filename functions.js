// TODO: Basic js topics (function, arrays)

// function showAlert() {
//     alert("Hey! from function")
// }
// showAlert()

// * with parameters(in func) and argument(while calling)
// function showAlert(message) {
//     alert(message)
// }

// showAlert("hello!")

// * returning value
// function sum(a, b) {
//     return a+b
// }
// console.log(sum(3,4));

// * Hoisting
// variable hosting
// function hoistDemo() {               //  function hoistDemo() {
//     console.log(i);    //<same>      //      var i;
//     var i = 10                       //      console.log(i);
// }                                    //      i = 10
// hoistDemo() // => undefined          //  }

// for variables with var the declaration are moves up(starting)

//function hoisting
// hoistDemo()
// function hoistDemo(){
//     console.log(i);
//     var i = 10
// }
// same as varibale hoisting, interpreter knows the function exists (declaration done) **moves declarations to the top 
// functions can be called from anywhere before or after

// * scope (area of code in which the variable is accessible)
//scopes are in the lexical scope (inside the brackets)
var scope = "global"
function scopeDemo() {
    var scope = "function"
    console.log(scope);
}
scopeDemo()
console.log(scope);