// declare some variables
let a, b, c, d, e; 

// array of names
let names = [ 'comrade', 'clementine', 'kevin', 'chairman', 'kaitlyn' ];

// destructure names array into a set of variables:
[a, b, c, e, d] = names;

console.log(a); // prints comrade
console.log(b); // prints clementine
console.log(c); // prints kevin
console.log(d); // prints kaitlyn
console.log(e); // prints chairman

//-------------------------------------------
// another example: 
let others;

[a, b, ...others] = names; // we can take elements one by one or contain other elements together by utilizing the ...others

console.log(a); // prints comrade
console.log(b); // prints clementine
console.log(others); // prints [ 'kevin', 'chairman', 'kaitlyn ]


//-------------------------------------------
// another example: 
// this is a compact syntax that helps to clean up code whenever you're trying to map from one data structure into another or another set of variables
let year, model;
({year, model} = {
    make: 'bmw',
    model: '335is',
    year: 2011,
    value: 5000
});

console.log(year); // prints 2011
console.log(model); // prints 335is