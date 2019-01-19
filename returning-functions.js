// DON"T DO THIS!!!
// var myVariable = 'I am at the global scope';

// THIS EITHER!
// var myFunction = function() {
//     console.log('me too!');
// }
//--------------------------------------------------

function one() {
    return 'one';
}

// let value = one();
// console.log(value); // prints 'one' to terminal
// console.log(one()); // this is another option to do so on one line, also prints 'one' to terminal

let value = one;
// console.log(typeof value); // prints 'function' to terminal
// console.log(typeof one); // prints 'function' to terminal
// console.log(value()); // prints 'function' to terminal

// string
// number
// boolean
// undefined
// function

// function declaration with function expression
function two() {
    return function () {
        console.log('two');
    }
}

let myFunction = two();
myFunction(); // 'two' prints to terminal

// another example: 
function three() {
    return function () {
        return 'three';
    }
}

console.log(three()()); // this is not something you would do, but this is simply to prove a point on references to functions (prints 'three')