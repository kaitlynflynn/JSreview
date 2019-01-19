// you can create a regex pattern by beginning and ending with a forward slash
let pattern = /xyz/;
console.log(pattern); // prints /xyz/
console.log(typeof pattern); // prints object

let value = 'This is xyz a test.';

// using the test method which returns a boolean value that indicates whether or not a pattern exists in a searched string.
console.log(pattern.test(value)); // prints true

// using the replace method which replaces text in a string, using an object that supports replacement within a string.
console.log(value.replace(pattern, 'just')); // prints 'This is just a test. Basically it took xyz and replaced it with the word 'just'

// using the match method which matches a string to an object that supports being matched against, and returns an array containing the result of that search.
console.log(value.match(pattern)); // prints ['xyz', index: 8, input: 'This is xyz test.']
var match = value.match(pattern);
console.log(match.index); // prints 8