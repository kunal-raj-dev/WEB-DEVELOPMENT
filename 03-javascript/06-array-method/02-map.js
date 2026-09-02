let nums = [1, 2, 3, 4, 5];

// doubles each number and returns a brand new array
let double = nums.map(function (el) {
    return el * 2;
});
console.log("Doubled:", double);

// transforming strings
let names = ["ironman", "thor", "spiderman"];
let upperNames = names.map(function (name) {
    return name.toUpperCase();
});
console.log("Uppercase:", upperNames);

// extracting specific properties from objects
let students = [
    { name: "John", marks: 90 },
    { name: "Jane", marks: 85 },
    { name: "Bob", marks: 92 }
];

let gpa = students.map(function (el) {
    return el.marks / 10;
});
console.log("GPAs:", gpa);
