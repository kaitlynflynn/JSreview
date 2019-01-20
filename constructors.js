let car = {
    make: 'bmw',
    model: '335is',
    year: 2011
}; 

function Car(make, model, year) {
    // setting our properties
    this.make = make;
    this.model = model;
    this.year = year;
}

// the 'new' keyword creates an empty object. This makes it a constructor call.
// calling the function (Car) and it will take the empty object as 'this' as a new property with new values set to them
let myCar = new Car('bmw', '335is', 2011);

console.log(myCar); // prints Car { make: 'bmw', model: '335is', year: 2011 }

// Another example: ---------------------------------------
// Note: capital M in 'My' vs the lowercase in our variable name on line 26
function MyFunction() {
    console.log('I am a simple function.');
}

let myFunction = new MyFunction();

console.log(typeof myFunction); // prints 'I am a simple function.' followed by 'object'

// Can't really do anything with this particular object... it's certainly NOT a function reference anymore!
// myFunction();