// Relationships between primitives and built-in's

let pattern = /xyz/;
let value = 'This is xyz a test.';
console.log(value.replace(pattern, 'just'));

// this starts our like any other variable except we use this 'new' keyword
// String (uppercase S) indicating this is a function using a constructor call
let myString = new String('howdy');
console.log(myString); // prints [String: 'howdy']

// in this example we added the '.toString()' method. It converts from native to primitive on the string.
let myString2 = new String('howdy');
console.log(myString2.toString()); // prints howdy 
console.log(typeof myString2); // prints object

// List of built-in/natives:
/* 
String()
Number()
Boolean()
Object()
Function()
Symbol() 
*/

// List of built-in/natives that do not have primitive versions:
/* 
Array()
RegExp() 
*/

// Other built in natives that provide foundational datatypes for important features: 
/* 
Date()
Error() 
*/

// Example of literal string and calling method toLowerCase:
let myPrimitive = 'THIS IS CRAZY';
console.log(typeof myPrimitive); // prints string
myPrimitive = myPrimitive.toLowerCase(); // toLowerCase will put the string to all lowercase
console.log(myPrimitive); // prints this is crazy

let myNumber = new Number(7);
console.log(typeof myNumber); // prints object 
let myPrimitive2 = myNumber.valueOf();
console.log(typeof myPrimitive2); // prints number