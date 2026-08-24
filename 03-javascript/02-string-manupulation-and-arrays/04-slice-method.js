// str.slice(start, end)
// - extracts a section of a string and returns it as a new string
// - start index is inclusive, end index is exclusive
// - negative indices count from the end of the string

let text = "Hello World";
console.log(text.slice(0, 5)); // "Hello"
console.log(text.slice(6)); // "World"
console.log(text.slice(-5)); // "World"
