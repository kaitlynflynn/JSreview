// if statement - allows us to evaluate one or more expressions
var count = 3; // setting our variable to a value of 3
if (count == 3) { // this is saying if our variable (count) is equal (==) to 3
    console.log('Count is 3'); // print "Count is 3" to terminal 
}

var count = 3; 
if (count == 4) {
    console.log('Count is 4'); 
} else {
    console.log('Count is NOT 4');
}

var count = 3; 
if (count == 4) {
    console.log('Count is 4'); 
} else if (count > 4) {
    console.log('Count is greater than 4');
} else if (count < 4) {
    console.log('Count is less than 4');
} else {
    console.log('Count is NOT 4');
}

// Switch ------------------------------------------------
let hero = 'batman';
switch (hero) {
    case 'superman':
        console.log('super strength');
        console.log('x-ray vision');
    case 'batman':
        console.log('intelligence');
        console.log('fighting skills');
    default: 
        console.log('member of JLA');
}

// Switch example 2 with break statement 
let superhero = 'supergirl';
switch (superhero) {
    case 'supergirl':
        console.log('super strength');
        console.log('flying abilities');
        break; // break statement
    case 'batgirl':
        console.log('intelligence');
        console.log('fighting skills');
        break; // break statement
    default: 
        console.log('member of JLA');
}

// Switch example 3 with toLowerCase method
let hero2 = 'Wonder Woman';
switch (hero2.toLowerCase()) {
    case 'hulk':
        console.log('super strong');
        console.log('very green');
        break; // break statement
    case 'wonder woman':
        console.log('magical rope');
        console.log('super strong');
        break; // break statement
    default: 
        console.log('member of JLA');
}

// ternary operator (basically comparing one to another, like true/false, yes/no)
let a = 1, b = '1';
let result = (a == b) ? 'equal' : 'inequal'; // does a equal b?
console.log(result); // result prints equal
// console.log((a == b) ? 'equal' : 'inequal'); // same line example

let a = 1, b = '1';
let result = (a === b) ? 'equal' : 'inequal'; // does this absolutely equal, including datatypes (integer vs string)
console.log(result); // prints inequal in this example

let a = 1, b = '1';
let result = (a != b) ? 'not equal' : 'equal'; // the not equal to operator is != 
console.log(result); // prints equal

let a = 1, b = '1';
let result = (a !== b) ? 'not equal' : 'equal'; // the not strictly equal to operator is !== 
console.log(result); // prints not equal