let names = [ 'clem', 'comrade', 'chairman', 'kevin' ];
let others = [ 'cody', 'kaitlyn', 'pug', 'cat' ];

let lost = [ 4, 8, 15, 16, 23, 42 ];
let fibonacci = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ];

// Methods that can be applied to arrays

// Concat Method 
// used to combine our two array values from lost and fibonacci set above
var combine = lost.concat(fibonacci);
console.log(combine); // prints [ 4, 8, 15, 16, 23, 42, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]

// Join Method
// used to join all the elements of the array together and separate them with this string '~'
console.log(fibonacci.join('~')); // prints 1~1~2~3~5~8~13~21~34~55

// Push, Pop Methods
// ways to add elements to the array or remove the last element from the array. Covered these earlier.

// Shift Method
// used to take one item off the front side of the array and return it back to us to print out
// if we look at the array it will essentially remove it
console.log(lost.shift()) // prints 4
console.log(lost); // [ 8, 15, 16, 23, 42 ]

// Unshift Method
// used to add items to the front
lost.unshift(1, 2, 3, 4);
console.log(lost); // prints [ 1, 2, 3, 4, 8, 15, 16, 23, 42 ]

// Reverse Method
// used to reverse the elements of an array
console.log(names); // prints [ 'clem', 'comrade', 'chairman', 'kevin' ]
console.log(names.reverse()); // prints in reverse: [ 'kevin', 'chairman', 'comrade', 'clem' ]

// Sort Method
// used to sort through the elements of an array
console.log(names.sort()); // prints names in alphabetical order: [ 'chairman', 'clem', 'comrade', 'kevin' ]

// indexOf Method - remember index is 0 based
// used to tell us what index our string is located
console.log(others.indexOf('pug')); // prints 2

// lastIndexOf Method - 0 based
console.log(combine); // current value of combined - prints: [ 4, 8, 15, 16, 23, 42, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
console.log(combine.lastIndexOf(1)); // last index of the value 1 - prints: 7

// Map Method - covered this earlier

// Filter Method 
// below is checking if x is less than or equal to 15, return x
// should return only the numbers that match the expression to only see numbers that are = 15
var filtered = combine.filter((x) => { if (x <= 15) return x; } );
console.log(filtered); // prints: [ 4, 8, 15, 1, 1, 2, 3, 5, 8, 13 ]

// forEach Method
// will go through each element of an array
names.forEach((name) => console.log(`howdy ${name}`) );
// prints: howdy chairman
        // howdy clem
        // howdy comrade
        // howdy kevin

// Some Checks--------------------------

// Every Method
// Can you tell me if everyone of the elements in my array match a certain condition? 
console.log(filtered.every((num) => num < 10 )); // Are every one one of those numbers in variable filtered, less than 10?; prints false
console.log(filtered.every((num) => num < 16 )); // Are every one one of those numbers in variable filtered, less than 16?; prints true

// Some Method
// Can you tell me if some of the elements in my array match this condition? 
console.log(fibonacci.some((num) => num > 50 )); // Are all the numbers greater than 50?; prints true
console.log(fibonacci.some((num) => num > 100 )); // Are all the numbers greater than 100?; prints false