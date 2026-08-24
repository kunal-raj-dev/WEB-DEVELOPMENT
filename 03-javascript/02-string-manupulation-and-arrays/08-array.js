let fruits = ["apple", "banana", "mango"];

fruits[0][0] = "b";
console.log(fruits); // no changes

fruits[0] = "cherry";
console.log(fruits);

fruits[10] = "apple";
console.log(fruits); //size becomes

console.log(fruits[8]); // undefined
