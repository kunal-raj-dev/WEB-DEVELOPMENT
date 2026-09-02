let nums = [1, 2, 3, 4, 5];

// boils down the array into a single accumulated result
let sum = nums.reduce(function (accumulator, current) {
    return accumulator + current;
}, 0);
console.log("Sum:", sum);

// finding the maximum value in an array
let numbers = [12, 45, 23, 89, 34, 67];
let max = numbers.reduce(function (maxVal, current) {
    return current > maxVal ? current : maxVal;
});
console.log("Max value:", max);

// calculating total marks from array of objects
let students = [
    { name: "John", marks: 90 },
    { name: "Jane", marks: 85 },
    { name: "Bob", marks: 92 }
];

let totalMarks = students.reduce(function (total, student) {
    return total + student.marks;
}, 0);
console.log("Total marks:", totalMarks);
