// Function Declaration
function sayHello() {
    console.log('---------');
    console.log('hello!');
    console.log('---------')
}

// sayHello(); // invokes our function and prints the 3 console.logs above to our terminal

let a = sayHello; // setting our variable to our above function
a();
a();
a(); // these are invoking the function above given we set up our variable so it will print to terminal 3 times.