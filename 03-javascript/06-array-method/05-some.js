let oddNumbers = [1, 3, 5, 7];
let mixedNumbers = [1, 2, 3, 5, 7];

// returns true if at least one item passes the condition
console.log("Has even in [1, 3, 5, 7]?", oddNumbers.some(el => el % 2 === 0));
console.log("Has even in [1, 2, 3, 5, 7]?", mixedNumbers.some(el => el % 2 === 0));

// checking condition on array of objects
let students = [
    { name: "John", marks: 75 },
    { name: "Jane", marks: 85 },
    { name: "Bob", marks: 92 }
];

let hasTopScorer = students.some(function (student) {
    return student.marks > 90;
});
console.log("Is there any student scoring > 90?", hasTopScorer);
