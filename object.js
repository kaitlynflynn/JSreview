// created an object using object literal context 
let car = {
    // list of name/value pairs, similar to variables known as properties. Values can be any datatype
    make: 'bmw', // string datatype
    model: '335is', 
    year: 2011, // number datatype
    getPrice: function() {
        // perform some calc
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription();
console.log(car.year); // prints bmw 335is, 2011 to terminal 

console.log(car['year']); // prints 2011 to terminal (accessing an individual property)

var anotherCar = {};
anotherCar.whatever = 'kaitlyn';
console.log(anotherCar.whatever); // prints 'kaitlyn' to terminal

// references a name space
var a = { 
    myProperty: { b: 'hi' }
};
console.log(a.myProperty.b); // prints 'hi' to terminal as we can chain things together

// object graph example
var c = {
    myProperty2: [
        { d: 'this' },
        { e: 'can' },
        { f: 'get' },
        { g: 'crazy' }
    ]
};

// this sort of setup would allow you to iterate through array 'carLot' to print to screen each of the car 'objects'
let carLot = [
    { year: 2011, make: 'Lexus', model: 'GX' },
    { year: 2016, make: 'Ford', model: 'Focus RS' },
    { year: 1994, make: 'Toyota', model: 'Supra' },
];

// example of system with employees/customers (looks similar to JSON), but we will get to the differences later
let contacts = {
    customers: [
        { firstName: 'Kevin', lastName: 'Flynn', phoneNumbers: [ '(123) 456-7890' ] },
        { firstName: 'Comrade', lastName: 'Pug', phoneNumbers: [ '(123) 455-7899', '(321) 231-2355' ] },
    ],
    employees: [
        { firstName: 'Clementine', lastName: 'Pug', phoneNumbers: [ '(123) 456-7111', '(321) 211-2347' ] },
        { firstName: 'Kaitlyn', lastName: 'Flynn', phoneNumbers: [ '(123) 456-0990' ] },
    ]
};