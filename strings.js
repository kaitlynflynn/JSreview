let first = 'Knowledge is power but enthusiasm pulls the switch';
let second = 'Do or do not. There is no try.';
let third = '4,8,15,16,23,42';

// You can even call methods on string literals
console.log('kaitlyn loves pugs'.toUpperCase()); // prints KAITLYN LOVES PUGS

// Split method
// Allows you to say every time you see a comma, split that up, and take the element in between the commas and add that to an element of a new array. 
let mySplit = third.split(',');
console.log(mySplit); // prints [ '4', '8', '15', '16', '23', '42' ]

// Slice method
let mySlice = first.slice(13, 18); // give it starting index and ending index to grab that word
console.log(mySlice); // prints 'power'

// Sub-String
let mySubstr = first.substr(13, 5); // 13 is start index and 5 is the length
console.log(mySubstr); // prints 'power'

// Ends With
let myEndsWith = second.endsWith('try.'); // Does second string end with 'try.'
console.log(myEndsWith); // prints 'true'

// Start With
let myStartsWith = second.startsWith('Do'); // Does second string start with 'Do'
console.log(myStartsWith); // prints 'true'

// Includes
let myInclude = second.includes('There') // Is the word 'there' used in that 2nd string?
console.log(myInclude); // prints true

// Repeat method
let myRepeat = 'Ha! '.repeat(3);
console.log(myRepeat); // prints 'Ha! Ha! Ha!'

// Trim method
let myTrim = '   bloated     ';
console.log(myTrim.length); // this will give me total number of characters in this string
console.log(myTrim.trim().length) // example of method chaining- .trim will return a string then we can call the next property .length
// prints 15 then 7 after trim given bloated is 7 characters.

