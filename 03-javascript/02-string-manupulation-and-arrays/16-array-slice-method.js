let colors = ["red", "yellow", "blue", "orange", "pink", "white"];

console.log(colors.slice()); // all items printed
console.log(colors);

console.log(colors.slice(2)); // idx 2 to last printed
console.log(colors); // original array NOT AFFECTED

console.log(colors.slice(20)); // [] IF NOTHING TO PRINT
console.log(colors); // original array NOT AFFECTED

console.log(colors.slice(2, 5)); // idx 2 to 5(excluded)
console.log(colors); // original array NOT AFFECTED

console.log(colors.slice(-2)); // last 2 printed
console.log(colors); // original array NOT AFFECTED
