// In Javascript, a callback is a function that is passed as an argument to another function.
// function is a first class object in javascript.
// a function can also be returned from another function.
// a functions is called a higher order function if it takes a function as an argument or returns a function.

function greet(name) {
    console.log(`Hello ${name}`);
}

function greetUser(name, callback) {
    callback(name);
}

greetUser('John', greet);

// Types of callbacks

// SYNC CALLBACKS
// A callback which is executed immediately after the function call.
// sort, map, filter, reduce, etc. are some of the examples of sync callbacks.

function syncCallback(callback) {
    callback();
}

syncCallback(function() {
    console.log('Sync callback executed');
});

// ASYNC CALLBACKS
// use to continue or resume the code execution after an aysncronus operation has completed.
// callbacks are used to delay the execution of a function until a particular time or event occurs.
// node js have an asyncronous nature to prevent blocking of execution
// reading data from a file, network request, etc. are some of the examples of async callbacks.

function asyncCallback(callback) {
    setTimeout(callback, 1000);
}

asyncCallback(function() {
    console.log('Async callback executed');
});
