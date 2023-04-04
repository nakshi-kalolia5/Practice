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
// var scope = "global"
// function scopeDemo() {
//     var scope = "function"
//     console.log(scope); //function
// }
// scopeDemo()
// console.log(scope); //global

// * function expressions
// function can be assigned to a variable as a value
// var factorial = function fact(n) { //can't use fact while calling, it's optional
//     var ans = 1;
//     for (var i = 1; i <= n; i++) {
//         ans *= i;
//     }
//     return ans
// }
// console.log(factorial(4))
// if the name is not given to function it will take same name as variable
// in case to use recursion better to give it a name

// * function declaration vs function Expression
// function hoisting can't work with function expression, because there has variable hoisting
// Example
// console.log(factorial(5)) //uncaught type error factorial is not a function
// console.log(factorial)    //undefined
// var factorial = function fact(n) {
//     var ans = 1
//     for(var i=1;i<=n;i++){
//         ans *= i
//     }
//     return ans
// };

// * passing function as function argument
// var factorial = function fact(n) {
//     var ans = 1
//     for(var i=1;i<=n;i++){
//         ans *= i
//     }
//     return ans
// }

// function ncr(n, r, factorial) {
//     return factorial(n)/ (factorial(r) * factorial(n - r))
// }

// console.log(ncr(5,2, factorial));