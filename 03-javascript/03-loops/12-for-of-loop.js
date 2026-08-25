// for...of Loop in JavaScript
// Syntax:
// for (element of iterable) {
//     // code
// }
// Used to directly iterate over values of arrays, strings, etc. without managing index variables.

// 1. for...of with Array
let fruits = ["mango", "apple", "banana", "orange", "litchi"];

console.log("--- for...of with Array ---");
for (let fruit of fruits) {
  console.log(fruit);
}

// 2. for...of with String
console.log("\n--- for...of with String ---");
let str = "apnacollege";
for (let char of str) {
  console.log(char);
}
