// Qs3. Create a new array whose elements are in uppercase of words present in the original array.

const words = ["google", "cloud", "search", "v8"];

const upperCaseWords = words.map((word) => word.toUpperCase());

console.log("Original Array:  ", words);
console.log("Uppercase Array: ", upperCaseWords);
