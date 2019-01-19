// Create an IIFE - Immediately Invoked Function Expression
var counter = (function() {

    // private stuff
    let count = 0;

    function print(message) {
        console.log(message + '---' + count);
    }

    // return an object
    return {
        // value: count, // this way didn't work
        get: function() { return count; },

        set: function(value) { count = value; },

        increment: function() {
            count += 1;
            print('After increment: ');
        },

        reset: function() {
            print('Before reset: ');
            count = 0;
            print('After reset: ');
        }
    }
})();

// console.log(counter.count); // prints undefined since count is not a property of counter
counter.increment();
counter.increment();
counter.increment();

// Accidentally created a closure
// console.log(counter.value); // prints 0 to terminal

counter.set(7);
console.log(counter.get());

counter.reset();