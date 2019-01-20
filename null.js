// Notes on null: 
// The primitive datatype 'null' is not 0, not undefined, not an empty string
// Simply means you have a variable where an object reference was expected, but it's not set to any object reference. 
// It's different than undefined, since it was expecting to have a value, but nothing was ever set.

// Setting our variable
let a;
console.log(a); // prints 'undefined'
console.log(typeof a); // prints 'undefined'

// another example: 
let pattern = /xyz/;
let value = 'This is just a test';
let result = value.match(pattern); // using strings match method, and passing in pattern
console.log(result); // prints 'null'
console.log(typeof result); // prints 'object' - (known bug in JS that will print object instead of null)

// another example: 
// this lets us check result, using strict equality evaluation (===)
if (result === null) { 
    console.log('no match was found'); // prints 'no match was found'
}