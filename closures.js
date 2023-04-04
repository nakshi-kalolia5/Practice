// TODO closure
// closure are property which states, the inner function has access to the variable that are declared in the outer function

// closure is combination of function + lexical environment in which the function is created
// var i = 10;
// function outer() {
//     var j = 20;
//     console.log(i, j);
//     function inner() {
//         var k = 30;
//         console.log(j, k);
//     }
//     inner();
// }

// outer();

// output
// 10 20
// 20 30

//now instead of calling inner inside outer let's return inner function
// var i = 10;
// function outer() {
//     var j = 20;
//     console.log(i, j);
//     var inner = function () {
//         var k = 30;
//         console.log(j, k);
//     }
//     return inner;
// }
// var inner = outer();
// inner()

// output
// 10 20
// 20 30

// now how the output is same
// ideally the variable j should be cleaned up from memory because execution is over
// but due to the closure property it will be there. here j will be there.

// Let's update the above code to explore more on closure
var i = 10;
function outer() {
    var j = 20;
    // console.log(i, j);
    var inner = function () {
        var k = 30;
        console.log(j, k);
        j++;
        k++;
    }
    return inner;
}
var inner = outer();
inner()
inner()

// k is not updated in the second call
// if we do j++ than it will be get updated