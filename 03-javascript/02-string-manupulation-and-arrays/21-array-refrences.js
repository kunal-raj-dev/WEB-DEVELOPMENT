console.log([1, 2] == [1, 2]); // in cases of array pointer address is compared so FALSE
console.log([1, 2] === [1, 2]); // in cases of array pointer address is compared so FALSE

let arr1 = [11, 22, 33];
let arr2 = arr1;

console.log(arr1 == arr2); // TRUE as both arrays point to SAME memory address due to array refrencing

arr1.push(44);
console.log(arr1 == arr2); // TRUE as both arrays point to SAME memory address due to array refrencing

let s1 = [10, 20, 30, 40, 50];
let s2 = [10, 20, 30, 40, 50];

console.log(s1 == s2); // False as both arrays point to DIFFERENT memory address
