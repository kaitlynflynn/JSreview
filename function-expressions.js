// Created a function expression and at end of declaration, give it an argument, in this case, 2000
// NOTE: functions can take functions as input parameters 
setTimeout(function () { 
     console.log('I waited 2 seconds'); // this successfully prints to terminal after waiting 2 seconds
    }, 2000); // 2000 = number of milliseconds 



let counter = 0; // declaring our variable, counter, and setting the value to 0 (this will count the number of times we execute our function expression)
function timeout() { 
    setTimeout(function () { // passing in a new function expression (first argument)
        console.log('hi ' + counter++); // ++ is incrementing our counter each time the code is ran
        timeout(); // this will tell our function to run again after 2 seconds
    }, 2000); // this is setting our 'setTimeout' function expression to run after 2ms (second argument)
}

timeout(); // calling the function declaration once
// ctrl + c to stop the execution on terminal - will keep going every 2 seconds until you do

(function () {
    console.log('Immediately Invoked Function Expression (IIFE');
})();