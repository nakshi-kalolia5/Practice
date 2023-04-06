// TODO objects and time events
// * objects are set of properties (key value pair)
var student = {
    name   : "abc",
    rollNo : 152,
    marks  : 80
}// keys must be string
// console.log(student);
// console.log(student.name);

// student.sem = 4 //adding new key-val in object
// console.log(student.sem);
// console.log(student);

// * square Bracket notation
//uncommment student object before running this (line 3-7)
// console.log(student["rollNo"]); // double quotes are important/necessary here

// if the key is not a valid identifier than . notation will not work
// var student = {
//     "-name"   : "abc",
//     rollNo : 152,
//     marks  : 80
// }
// student.-name // error
// student["-name"] //valid

// in case of dynamic property should use square bracket notation.

// * Deleting form object
//uncommment student object before running this (line 3-7)
// console.log(delete student.marks);
// console.log(student);


//* Iterating over object
// for(var prop in student) {
//     console.log(prop);
// }

// var keys = Object.keys(student) //return all the keys in student
// console.log(keys);

// var keys = Object.getOwnPropertyNames(student) //return all the keys in student
// console.log(keys);

// * Nested objects
// var student = {
//     name   : "abc",
//     rollNo : 152,
//     marks  : 80,
//     address: {
//         city: "rajkot",
//         pincode : 123
//     }
// }
// console.log(student);
// console.log(student.address);
// console.log(student.address.city);  

// * Arrays and objects
// array is also an onject with index as key
// iterating over array using for in
// var arr= [20,30,40,50]
// for(var i in arr) {
//     console.log(i);
// }

// * timing events in js
// var count = 1
// function sayHello(){
//     console.log("after ",count);
//     count++
//     if (count == 5) {
//         clearInterval(id) // while stop time event corresponding to given id
//     } 
// }
// setTimeout(sayHello, 3000) // two args: function, time interval after which function will be executed
// var id = setInterval(sayHello, 2000) 
// timeout will execute after time where Interval will execute it repeatedly after time
