// Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

const nums = [1, 2, 3, 4, 5];

const squares = nums.map((num) => num ** 2);

const sum = squares.reduce((accumulator, element) => accumulator + element, 0);

const average = sum / nums.length;

console.log("Original Array:", nums);
console.log("Squared Array: ", squares);
console.log("Sum of Squares:", sum);
console.log("Average:       ", average);
