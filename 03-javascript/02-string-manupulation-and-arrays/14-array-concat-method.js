let arr1 = ["a", "b", "c"];
let arr2 = ["x", "y", "z"];

console.log(arr1.concat(arr2)); // here oroginal array is not changed new array created
console.log(arr1);
console.log(arr2);

let arr3 = arr1.concat(arr2);
console.log(arr3); // [ 'a', 'b', 'c', 'x', 'y', 'z' ]

let combined = [...arr1, ...arr2];
console.log(combined);
