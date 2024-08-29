function sum(a, b){
    let sum;
    sum = a + b;
    return sum;
}
let ans = sum(2,3)

const fs = require('fs');       //external library called file system
let contents = fs.readFileSync('./a.txt', 'utf8');      //utf-8 is a human readable encoding 
console.log(contents);


//--------------------FUNCTIONAL ARGUMENTS-------------------------

//Normal code
function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function doOperation(a, b, op) {
    return op(a, b)
  }
  
  console.log(sum(1, 2))


//Calling a function in another function as an argument
function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function doOperation(a, b, op) {
    return op(a, b)
  }
  
  console.log(doOperation(1, 2, sum))