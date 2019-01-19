// sayHello method
function sayHello(name) {
    return function() {
        console.log('howdy ' + name);
    }
}

let kaitlyn = sayHello('kaitlyn');
let comrade = sayHello('comrade');
let clementine = sayHello('clementine');

kaitlyn(); // prints hello kaitlyn to terminal
comrade(); // prints hello comrade
clementine(); // prints hello clementine