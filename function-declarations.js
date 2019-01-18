// Function Declaration
function sayHello() {
    console.log('---------');
    console.log('hello!');
    console.log('---------')
}

sayHello(); // invokes our function and prints the 3 console.logs above to our terminal

let a = sayHello; // setting our variable to our above function
a();
a();
a(); // these are invoking the function above given we set up our variable so it will print to terminal 3 times.

// This function will allow us to pass in a name by passing in an argument 
function sayHello(name) {
    console.log('---------');
    console.log('hello ' + name + '!'); // using some string operators with name
    console.log('---------');
}

sayHello('Kaitlyn');
sayHello('Comrade');
sayHello('Clementine'); // these 3 successfully print out to the terminal with 'hello' in front of the corresponding name

// Create a more interesting function, for example on how to calculate sales tax: 
function calculateTax(amount) { 
    let result =  amount * 0.0825; // set our variable as result to take our value passed in (amount) to be multiplied by a value
    return result; // using the keyword (return) result
}

let tax = calculateTax(100); // set new variable to tax and setting it to calculate tax at value (100)
console.log(tax); // this will print the new value to terminal (in this case $8.25)