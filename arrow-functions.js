let hi = () => { console.log('howdy'); }

// call hi
hi(); // prints 'howdy'

// creating a shortened version of a function
// don't need the keyword, function, just start with opening/closing parans (name) to define area we can insert input params
// fat arrow (=>) points to the body of this arrow function and inside there we can do whatever we want to do
let hi2 = (name) => { console.log(`howdy ${name}`) };
hi2('kaitlyn'); // prints 'howdy kaitlyn'

// accepting 2 input params (a, b) and referencing those using the return keyword
let add = (a, b) => { return a + b };
console.log(add(7, 3)); // prints 10

//------------------------------
// => Most used when you need to run a function over an array.
// Example:
let names = [ 'clem', 'kevin', 'comrade', 'kaitlyn' ];
// calling the map method. It allows us to iterate through each element of an array. when it iterates through it will allow us to create a function.
names.map((name) => { console.log(`howdy ${name}!`)} );
// this prints out 'howdy clem!' and so on with each name in the above array

//------------------------------
// another example: 
let names2 = [ 'clem', 'kevin', 'comrade', 'kaitlyn' ];
let i = 0; 
names2.map((name) => { i++; console.log(`howdy ${name} ${i}!`);} ); // incrementing the value of i
// this print out 'howdy clem 1!' 'howdy kevin 2!' 'howdy comrade 3!' 'howdy kaitlyn 4!'

//------------------------------
// another example: 
let names3 = [ 'clem', 'kevin', 'comrade', 'kaitlyn' ];
var transformed = names3.map((name) => { return `howdy ${name}!`});
console.log(transformed); // prints [ 'howdy clem!',
                                    // 'howdy kevin!',
                                    // 'howdy comrade!',
                                    // 'howdy kaitlyn!' ]