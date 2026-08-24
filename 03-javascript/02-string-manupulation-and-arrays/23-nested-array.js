const jaggedArray = [
  [1, 2, 3], // 0th index: size 3
  [4, 5, 6, 7], // 1st index: size 4
  [8, 9, 10, 11, 12], // 2nd index: size 5
];

// Checking the lengths confirms they are all different
console.log(jaggedArray[0].length); // Output: 3
console.log(jaggedArray[1].length); // Output: 4
console.log(jaggedArray[2].length); // Output: 5

// Accessing the data works the exact same way
console.log(jaggedArray[1][3]); // Output: 7
console.log(jaggedArray[2][4]); // Output: 12

console.log(jaggedArray);
