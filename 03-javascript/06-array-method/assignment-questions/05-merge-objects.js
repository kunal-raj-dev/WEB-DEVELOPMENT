// Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({
    ...obj1,
    ...obj2
});

const userProfile = { name: "Kunal", age: 100 };
const userSettings = { theme: "light", notification: true };

const fullUserData = mergeObjects(userProfile, userSettings);

console.log("Original 1: ", userProfile);
console.log("Original 2: ", userSettings);
console.log("Merged:     ", fullUserData);
