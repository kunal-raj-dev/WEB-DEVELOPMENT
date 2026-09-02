let evens = [2, 4, 6, 8, 10];
let mixed = [2, 4, 5, 8, 10];

// returns true only if every single item passes the condition
console.log("All evens in [2, 4, 6, 8, 10]?", evens.every(el => el % 2 === 0));
console.log("All evens in [2, 4, 5, 8, 10]?", mixed.every(el => el % 2 === 0));

// checking condition on array of objects
let students = [
    { name: "John", marks: 90 },
    { name: "Jane", marks: 85 },
    { name: "Bob", marks: 92 }
];

let allPassed = students.every(function (student) {
    return student.marks >= 40;
});
console.log("Did every student pass (marks >= 40)?", allPassed);
