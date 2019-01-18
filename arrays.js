// An Array is basically a variable that can hold many different values
// When running file in terminal, be sure to have other console.log()s commented out so notes reflect the totals

let a = [4, 8, 15, 16, 23, 42]; // an array of numeric values 
let b = [ 'david', 'eddie', 'alex', 'michael' ]; // an array of strings

// NOTE: Index starts at 0, so in the above array, 4 is at index 0, 8 is at index 1 and so on
console.log(a[0]); // prints value of the array located at index 0, printing 4
console.log(a[1]); // prints value of the array located at index 2, printing 8
console.log(a); // prints the entire contents of the array, printing [ 4, 8, 15, 16, 23, 42 ]

a[0] = 7; // this demonstrates how we can access a single element and assign it a new value. we are reassigning the value of index 0 to = 7
console.log(a); // now this prints [ 7, 8, 15, 16, 23, 42 ] to our console as it reassigned 4 to 7

// // What is their datatype?
console.log(typeof a); // this prints out 'object' to the console as the datatype

let c = [4, 'alex', true]; // we are using 3 different datatypes here which shows a single array can demonstrate multiple types
console.log(c); // now this prints [4, 'alex', true] to console

// // undefined 
console.log(b[4]); // This examples shows up grabbing 'let b' which is our list of names above, but we are trying to pin point index 4 (which doesn't exist) 
// in this case the console prints 'undefined' since our index in that array only goes from 0-3. 

// .length 
// Used to determine the number of elements in an array
console.log(a.length); // .length is giving us the actual number, NOT zero based like indexes

a[10] = 77; // assigned index 10 to value of 77
console.log(a); // prints out the new value [ 4, 8, 15, 16, 23, 42, <4 empty items>, 77 ]
console.log(a.length); // prints the number of elements, 11

// If we wanted to add the value (77) to the end of the existing array, you can use the 'push' method.
a.push(77);
console.log(a); // prints out the new value [ 4, 8, 15, 16, 23, 42, 77 ]
console.log(a.length); // prints the number of elements, 7

// If we wanted to remove the last value of the array, then you can use the 'pop' method.
a.pop();
a.pop();
a.pop(); 
console.log(a); // prints out the new value after 3 'pop' methods [ 4, 8, 15, 16 ]
console.log(a.length); // prints the number of elements, 4