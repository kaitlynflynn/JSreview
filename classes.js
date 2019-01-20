// classes in JS = 'syntactic sugar' 
// basically it's a way to define and create objects

// declaration class
class Car {
    constructor(make, model, year) {
        this.make = make; 
        this.model = model;
        this.year = year;
    }

    print() {
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}

let myCar = new Car('bmw', '335is', 2011);
myCar.print(); // prints 'bmw 335is (2011)'

//-----------------------
// expression class
// let car = class {

// }
// ----------------------

// in this example we are extending the constructor data from Car in the class at the top
// SportsCar would be considered a 'inherited child' of Car in the top class
class SportsCar extends Car {
    // added a new method
    revEngine() {
        console.log('Vrooooom goes the ' + this.model);
    }
}

let mySportsCar = new SportsCar('toyota', 'supra', 1994);
mySportsCar.print(); // prints 'toyota supra (1994)'
mySportsCar.revEngine(); // prints 'Vrooooom goes the supra' 

// this can't be done given revEngine() is defined under the SportsCar class, and not the Car class
// myCar.revEngine(); 