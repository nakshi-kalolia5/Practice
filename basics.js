// TODO: Basic js topics (variables, types, operators, conditionals)
// variables are loosely type
// let a = 5
// console.log(a)
// a = 'hi'
// console.log(a)

// * Infinity type
// let a = 1 / 0
// console.log(a)

// console.log(1/Infinity)

// * max value of number
// console.log(Number.MAX_VALUE)

// * typeof operator
// let a = 5
// console.log(typeof a)

// console.log(typeof NaN);
// console.log(typeof Infinity);
// console.log(typeof parseInt("a"))


// * Arithmetic Operators
// console.log(10+2);
// -,*,/,%, +=, -=, *=, /=, ++, --

// * Comparison Operators
// >,<,>=,<=,!=,==,===,!==
// == vs ===
// 1 == '1'  => true  (Type Coercion)
// 1 === '1' => false (Without Type Coercion)
// 1 === 1   => true  (Without Type Coercion)

// * Logical operations
// &&, ||, ! (follow short circuit evaluation eg. in && if first false second doesn't executed)

// * Bitwise operators
// >>, <<, &, |, >>>

// * Type Coercion
// console.log('hi'+2); // hi2
// console.log('1'+1);  // 11
// console.log('1'-1);  // 0 
// +             -> string concatination
// -.*,/,>,<,... -> type conversion to number

// * Conditionals
// var a = 0;
// if (a > 0) {
//     console.log('Positive');
// }else if (a < 0) {
//     console.log('Negative');
// }else{
//     console.log('Zero');
// } 

// in condition 0,"",undefined variables, null means false everyting else will give true
// console.log(null == undefined); => true

// * Loops
var i = 1
while(i<5) {
    console.log(i);
}

for(i=1; i <= 5; i++) {
    console.log(i);
}

do{
    console.log(i);
    i++
}while(i<=5)
