// 1 2 3 4 5 6 7 8 9
for (let i = 1; i < 10; i++) {
  console.log(i);
}
console.log();

// 1 3 5 7 9
for (let i = 1; i < 10; i = i + 2) {
  console.log(i);
}
console.log();

// no output
for (let i = 20; i < 10; i = i + 2) {
  console.log(i);
}
