module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`));
    } else {
        setTimeout(() =>
            callback(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        );
    }
};





/* Using export keyword from node. Can be written as "module.exports" or simply "exports" and give it a short hand.
Use the same arrow function as before. 
This file is now a module.
----------------------------------
Exercise: Callbacks and Error Handling in Node:

Assigning a function as the value for the entire export.
It takes three parameters. The third, "callback" is a function that would be passed in when the module is called.
It is standard practice in NodeJS for async functions to return an error object as the first argument.
*/