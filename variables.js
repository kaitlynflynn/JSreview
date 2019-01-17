// What is a variable? 
// Variable is an area in the computers memory to declare a value or put info and retrieve info.

// What is a keyword? 
// 'let' is a keyword and so is 'var'. 'let' is a newer keyword. 
 
// What is 'const'? 
// 'const' means the value declared will remain constant throughout the code, meaning it never changes.

// What does the equal sign mean in the below? 
// This is called an assignment operator and how we assign a value into a variable. 

// Rules for naming variables (identifiers): 
// 1. All identifiers (variable names) must all begin with a letter, $ or underscore.
// 2. Variable names can contain letters or numbers, $ or underscores, but no other special characters or spaces. 
// 3. You can't use any keywords (ex: let let = 8;) (2nd 'let' needs to be called something else in this case.)
// 4. Variable names are case sensitive. (ex: uppercase X and lowercase x would be different.)
// USE GOOD NAMING CONVENTION! 

// Created variables = to value of 7 (x) and 3 (y) 
let x = 7;
x = 6; 
x = 5;
x = 4; // when assigning new values to 'x', this problem will then print '7' to the console since 4 + 3 = 7, and 4 was the last value assigned to 'x'. 
// You can only declare a variable once, but you can assign a new value as many times as you want after that.  
let y = 3;
let z = x + y; // + sign = addition operator in this line 
console.log('Answer: ' + z); // + sign here strings two values together/concatenate the values of x + y

// Examples of good naming convention on variables: (use camel-casing & be consistent!)
let firstNumber = 7;
let secondNumber = 3;
let firstName = 'Kaitlyn';
let zipCode = '98077';