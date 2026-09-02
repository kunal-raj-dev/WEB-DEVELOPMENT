let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// keeps only elements that return true
let evens = nums.filter(function (el) {
    return el % 2 === 0;
});
let odds = nums.filter(function (el) {
    return el % 2 !== 0;
});

console.log("Evens:", evens);
console.log("Odds:", odds);

// filtering array of objects
let students = [
    { name: "John", marks: 90 },
    { name: "Jane", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Alice", marks: 78 }
];

let topStudents = students.filter(function (el) {
    return el.marks >= 90;
});
console.log("Students with marks >= 90:", topStudents);
