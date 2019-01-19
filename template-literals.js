// example:
let name = 'clementine';
console.log(`hi ${name}`); // <-- this is the template literal (money brackets haha!) prints 'hi clementine' 

// ---------------------------------------------
// template literals allow you to create multi-line strings! Must start and end with a back ticks.
// example:
let sentence = `I love pugs, I love pugs!
    I love pugs so very much, oh yes I do.
    I love pugs, oh how about you?`;
console.log(sentence); // prints the multi-line string to terminal & preserves indentation level. 

// ---------------------------------------------
// another example: 
function getReasonCount() { return 1; }

// Created variable called interpolation.
// Inside the brackets you can use any expression, we are using the ternary operator (?)
// if 'getReasonCount is equal to 1, inject 'one good reason' otherwise inject 'a few reasons' 
let interpolation = `Give me ${ (getReasonCount() == 1) ? 'one good reason' : 'a few reasons' } to try this.`

console.log(interpolation); // prints 'Give me one good reason to try this' as it was equal to 1



