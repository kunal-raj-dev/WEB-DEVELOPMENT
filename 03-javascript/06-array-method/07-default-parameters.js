// default value is used when no argument or undefined is passed
function sum(a, b = 2) {
    return a + b;
}

console.log(sum(5, 3)); // 8
console.log(sum(5));    // 7 (b defaults to 2)
console.log(sum(5, undefined)); // 7

// order matters: default parameters should come at the end
function multiply(a = 2, b) {
    return a * b;
}

console.log(multiply(3)); // NaN (a becomes 3, b remains undefined)

// using previous parameters in default value
function greet(user = "Guest", message = "Hello, " + user + "!") {
    console.log(message);
}

greet();
greet("Alex");
greet("Alex", "Welcome aboard!");
