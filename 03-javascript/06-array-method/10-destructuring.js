// 1. array destructuring
let names = ["tony", "bruce", "peter", "steve", "abc", "xyz", "pyq"];

// destructuring with rest to collect remaining elements
let [winner, runnerup, ...others] = names;

console.log("Winner:", winner);
console.log("Runner up:", runnerup);
console.log("Others:", others);

// 2. object destructuring
const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "karan@123",
    password: "abcd",
};

// assigning to new variable names + setting a default value at the same time
let { username: user, password: secret, city: place = "Mumbai" } = student;

console.log("User:", user);
console.log("Secret password:", secret);
console.log("Place (default):", place);
