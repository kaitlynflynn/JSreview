let a = 'first';

function scopeTest() {
    console.log(a); // prints 'first' 
    a = 'changed'; // in this case, we changed the value of a to say 'changed' so console will print 'first, first, changed' 

    let b = 'second';
    if (a != '') { 
        console.log(a); // prints 'first' again
        console.log('inside if: ' + b); // defining this inside the scope allows 'inside if: second' to be printed to console
    }

    // let b = 'second'; // this will not work per the console.log(b) below
}

scopeTest(); // we can view our variable outside of the scope of our function; this prints 'first' to terminal
// console.log(b); // in this case we cannot view 'b' outside the function scope
console.log(a);