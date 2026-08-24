let arr = ["t", "k", "p", "x", "m", "z"];

console.log(arr.sort());
console.log(arr); // main array AFFECTED

let nums = [100, 89, 102, 55, 37, 1000];
console.log(nums.sort()); // unexpected behavious due to internal number converted to string unicode then sorted
console.log(nums); // main array AFFECTED
