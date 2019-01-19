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
// let hero = 'batman';
// switch (hero) {
//     case 'superman':
//         console.log('super strength');
//         console.log('x-ray vision');
//     case 'batman':
//         console.log('intelligence');
//         console.log('fighting skills');
//     default: 
//         console.log('member of JLA');
// }

// Switch example 2 with break statement 
// let hero = 'superman';
// switch (hero) {
//     case 'superman':
//         console.log('super strength');
//         console.log('x-ray vision');
//         break; // break statement
//     case 'batman':
//         console.log('intelligence');
//         console.log('fighting skills');
//         break; // break statement
//     default: 
//         console.log('member of JLA');
// }

// Switch example 3 with toLowerCase method
let hero = 'Batman';
switch (hero.toLowerCase()) {
    case 'superman':
        console.log('super strength');
        console.log('x-ray vision');
        break; // break statement
    case 'batman':
        console.log('intelligence');
        console.log('fighting skills');
        break; // break statement
    default: 
        console.log('member of JLA');
}

// ternary operator 
