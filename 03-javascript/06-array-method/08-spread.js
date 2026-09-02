// 1. spread with function arguments
let nums = [4, 9, 2, 7, 5];
console.log(Math.min(...nums)); // expands array elements as individual arguments
console.log(Math.max(...nums));

// 2. spread with array literals (copying and combining)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
let newArr = [0, ...arr1, 99];

console.log("Combined:", combined);
console.log("New array:", newArr);

// 3. spread with strings
let name = "JavaScript";
console.log([...name]);

// 4. spread with object literals
let data = {
    email: "ironman@gmail.com",
    password: "abcd"
};
let dataCopy = { ...data, id: 123 };
console.log("Copied with new property:", dataCopy);

let user = { name: "John", age: 25 };
let location = { city: "New York", country: "USA" };

// merging objects and overriding values
let userProfile = { ...user, ...location, role: "Developer", age: 26 };
console.log("User profile:", userProfile);

// spreading array or string into an object (index becomes key)
let arr = [1, 2, 3, 4, 5];
let obj1 = { ...arr };
console.log("Array to object:", obj1);

let obj2 = { ..."hello" };
console.log("String to object:", obj2);
