let arr = [1, 2, 3, 4, 5];

// passing a pre-defined function
let print = function (el) {
    console.log(el);
};
arr.forEach(print);

// using inline callback with index
arr.forEach(function (el, index) {
    console.log(`Index ${index}: ${el}`);
});

// iterating over array of objects
let students = [
    { name: "John", marks: 90 },
    { name: "Jane", marks: 85 },
    { name: "Bob", marks: 92 }
];

students.forEach(function (student) {
    console.log(student.name, student.marks);
});