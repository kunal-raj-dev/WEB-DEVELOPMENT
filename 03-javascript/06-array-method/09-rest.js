// 1. 'arguments' is an array-like object (cannot use array methods like .reduce)
function showArguments() {
    console.log("arguments object:", arguments);
    console.log("length:", arguments.length);
}

showArguments(1, 2, 3);

// 2. rest parameter collects arguments into a real array
function sum(...args) {
    return args.reduce((sum, el) => sum + el);
}

console.log("Sum:", sum(1, 2, 3, 4));

// 3. rest with regular parameters
// first argument is collected in 'msg', remaining arguments collected in 'args'
function min(msg, ...args) {
    console.log(msg);
    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;
        }
    });
}

console.log(min("hello", 12, 445, 123, -20)); // msg is "hello", min is -20
console.log(min(10, 12, 445, 123, -20));      // msg is 10, min is -20
