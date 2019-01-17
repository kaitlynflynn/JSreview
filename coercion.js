let a = 7;
let b = '6'; 
b = parseInt(b, 10); // parseInt is a built in function to JS which forces the string to become a number so we can add them together to print 13. 
let c = a + b; // + operator is concatinating a & b together to print out 76 (versus adding them together to be 13). 
console.log('Answer: ' + c);

let d = parseInt('b', 10);
let e = isNaN(d);
console.log(d); // prints NaN which means "not a number" given "b" above is set as a string.
console.log(e); // prints out True given 'd' is indeed not a number.