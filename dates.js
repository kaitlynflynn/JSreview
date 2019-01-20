// date constructor function will return an object that will let us work with dates

let today = new Date(); 
let kaitlyn = new Date('January 1, 1986 07:01:23'); // you can initialize the date 

// examples of other ways you can set the date
let kaitlyn = new Date('1986-01-07T07:01:23');
let kaitlyn = new Date(1986, 1, 1);
let kaitlyn = new Date(1986, 1, 1, 7, 1, 23);

var elapsedTime = today - kaitlyn;
console.log(elapsedTime); // prints out in milliseconds '1042976157357' between the two dates

// get parts
console.log(kaitlyn.getDate()); // Monday = 1, Sunday = 7 in JS
// This prints 1 since my bday is the 1st

// Represents the time of day
console.log(kaitlyn.getTime());

// other options you can get: 
getMonth()
getDay()

getHours()
getMinutes()
getSeconds()
getMilliseconds()

