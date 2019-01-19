// iteration statements - allows us to loop through a body/block of code a number of times until a certain condition is met
for (let i = 0; i < 10; i++) { // 3 parts here, declared variable i & initializing value to 0; as long as i is less than 10, continue with the loop; then increment value of i by 1 
    console.log(i); // prints 0 through 9
}

// // example 2 with for loop
let a = [4, 8, 15, 16, 23, 42]; // declaring variable with an array of numeric values
for (i = 0; i < a.length; i++) { // for loop, i starts with value of 0, then checks if i is less than the length of the array (6) & iterates through
    console.log(a[i]); // prints our list
}

// snippet structure within JS - helpful for letting you rename counters, arrays & element
let a = [4, 8, 15, 16, 23, 42];
for (let b = 0; b < a.length; b++) {
    const c = a[b];
    console.log(c);
}

// while loop
let x = 1;
while (x < 10) {
    console.log(x++); // prints out the value of x and increments by 1 until it gets to 10; prints 1-9

    if (x == 7) {
        break; // this shows once it reaches 7, to break out or stop; prints 1-7; you can also do it in one line as `if (x == 7) break;`
    }
}