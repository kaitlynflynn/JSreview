// the 'this' keyword

/* var car = {
    make: "bmw",
    model: "335is",
    year: 2011, 
    getPrice: function () {
        // perform some calculation 
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model); // the 'this' keyword in JS represents the way a given function is called.
    }
}

car.printDescription(); */

// ----------------------------------
// First example:
function first() {
    return this;
}

console.log(first() === global); // when we call the 'first' method from the global context, we get true returned

// this is Node's global object
// because that's where the first method was called.
// -----------------------------------
// Second example:
function second() {
    'use strict';

    return this;
}

console.log(second() === global); // prints false
console.log(second() === undefined); // prints true
// -----------------------------------
// Third example:

// NOTES: 'this' depends on HOW a function is called
// An object can be passed as the first argument to call or apply and this will be bound to it.

let myObject = { value: 'My Object '};

// This property is set on the global object
global.value = 'Global object';

function third() {
    // Returns something different depending on how we call 'this' method: 
    return this.value + name;
}

console.log(third()); // we called 'third' from the global namespace, when we ref the 'this' keyword it's referencing the global variable, so when we grab the value property, it's grabbing the value property of the global variable, thus printing 'Global object'

// Both 'call' and 'apply' allow you to explicitly set what you want to represent 'this. The difference is in how additional arguments to the function are sent.

console.log(third.call(myObject)); // built in method called 'call' where I can pass in 'myObject' thus printing 'My Object'
console.log(third.apply(myObject, ['Kaitlyn'])); // prints My ObjectKaitlyn
// --------------------------------------

// Another example: 

function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName: 'clem',
    lastName: 'pug',
    print: fifth
}

let customer2 = {
    firstName: 'comrade',
    lastName: 'pug',
    print: fifth
}

customer2.print(); // prints comrade pug to terminal
customer1.print(); // prints clem pug
