let originalCar = {
    make: 'bmw',
    model: '335is',
    year: 2011
};

let newCar = Object.create(originalCar);

console.log(newCar.make); // prints bmw
newCar.make = 'audi'; // we are creating a property on newCar, setting to 'audi'
console.log(newCar.make); // prints audi
console.log(newCar.whatever); // prints undefined because 'whatever' property doesn't exist 

console.log(Object.getPrototypeOf(newCar)); // prints { make: 'bmw', model: '335is', year: 2011 }

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make); // prints bmw

originalCar.doors = '2';
console.log(newCar.doors); // prints 2

console.log(originalCar.hasOwnProperty('doors')); // prints true (meaning originalCar has it's own property called doors)
console.log(newCar.hasOwnProperty('doors')); // prints false (meaning newCar has no new properties)

