// Example of something VERY wrong that the computer cannot work with!! 
let a = 7 * undefined / "panama";
console.log(a); // prints NaN (not a number)

// // Exception and/or Error - Whenever a problem arises by JS in some way; learn to code defensively to account for these

function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.b); // we know obj does not have a property b
    console.log('If the previous line of code throws an exception you\'ll never see this.'); // the backslash in this mssg allows us to use the single quote in 'you'll'. This is called "escaping the character". You can do this by placing the backslash in front of it.
}

beforeTryCatch(); // does not call accordingly and errors out like we suspected due to obj not having a property of b

// another example utilizing try/catch/finally: 
function afterTryCatch() {
    try {
        let obj = undefined;
        console.log(obj.b); // we know obj does not have a property b
        console.log('If the previous line of code throws an exception you\'ll never see this.');

    } catch (error) {

        console.log('I caught an exception: ' + error.message);

    } finally {
        console.log('This will happen no matter what');
    }

    console.log('My application is still running!');
}

afterTryCatch(); // prints: I caught an exception: Cannot read property 'b' of undefined
                            // This will happen no matter what
                            // My application is still running!

// another example: 
// if obj doesn't have it's own property (b)
function performCalculation(obj) {
    if (!obj.hasOwnProperty('b')) {
        throw new Error('Object missing property');
    }
    // if true, continue with calculation
    return 6;
}

function performHigherLevelOperation() {
    let obj = {};
    let value = 0;

    try {
        value = performCalculation(obj);

    } catch (error) {
        console.log(error.message)
    }

    if (value == 0) {
        // contingency 
        // retry logic
    } 
}

performHigherLevelOperation(); // prints 'Object missing property'
