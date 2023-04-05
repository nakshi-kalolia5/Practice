// TODO DOM
// document.documentElement() //object for the html tag
// document.head() //object for the head tag
// document.body() //object for the body tag

// * window object
// window object has so many property about the browser and other props

// * screen object or window.screen
// screen or window.screen has details of height, width, orientation, ...
// DOM serves as programming API

// * acccess particular element from the document
// var tag = document.getElementById('id')
// tag.style.color = 'red'

// * access element by tag
// var h1 = document.getElementsByTagName('h1')
// array of all h1 elements

// * changing text of the tag
// h1[1].innerText = "another heading"

// * access element by class
// var paraVar = document.getElementsByClassName('para')
// array of all element with class para

// * accessing element using css selectors
// var heading = document.querySelector('#one')
// var heading = document.querySelector('.para')
// var allEle = document.querySelectorAll('para') gives all element with para class

// * window.navigator to see browsers configs

// * event handling in js

// handling mouse click event
// go to html file to see button
// two ways:
// 1. onclick attribute
// 2. adding event listener

// 1. -> <button id="btn" onclick="alert('hi')">Hello!</button>
// 2. -> var helloBtn = document.getElementById('btn')
// helloBtn.addEventListener('click',function(){
//     alert('hello')
// })

// * mouse over and mouse out events
// taking mouse over element and move out of element
// var outerDiv = document.getElementById('outer')
// outerDiv.addEventListener('mouseover',function(){
//     console.log('Mouse over');
// })
// outerDiv.addEventListener('mouseout',function(){
//     console.log('Mouse out');
// })

// * keyboard events
// var searchInput = document.getElementById('search')
// searchInput.addEventListener('keypress',function () {
//     console.log('key pressed');
// })

// document.addEventListener('keypress',function () {
//     console.log('key pressed');
// })
//keypress don't take up,down,tab and all... so to take that into consideration
// * keydown and keyup events 
// document.addEventListener('keydown',function () {
//     console.log('key down');
// })

// to detect which key pressed
// document.addEventListener('keydown',function(event) {
//     console.log('key down', event.key);
// })

// event propogation Comments
// var innerDiv = document.getElementById('inner')
// innerDiv.addEventListener('click',function (event) {
//     console.log('Click inner div');
//     event.stopPropagation()
// })

// var outerDiv = document.getElementById("outer")
// outerDiv.addEventListener('click', function () {
//     console.log('Click outer div');
// })
//onclicking inner div outer div click is also triggered
// to stop that in inner div, we can add event.stopPropagation

// *  uncomment this for strict mode example

// in case we missed var keyword before the variable name i.e. a=10 then js will handle it as a global var
// strict mode you get an error
// to include strict mode
"use strict"
//check by removing var before the count = 0 you'll get error in console
// now comment "use strict" and do the same you'll not get an error

var box = document.getElementById('box')
var clickCount = document.getElementById('click-count')
var count = 0
box.addEventListener('click',function () {
    count++;
    console.log(count);
    clickCount.innerText = count + ""
})

// to apply strict mode only to particular function
// for that write "use strict" inside the function

// to enclose variable scope in the function scope
// IIFE (imidiately invoked function expressions) not giving name to the function and enclose it in brackets and call it.

// (function () {
//     var name = "name1"
// })();

// why we need this? 
// because we shouldn't create global vars coz if we create another var with same name it will override the value (even if in another file)