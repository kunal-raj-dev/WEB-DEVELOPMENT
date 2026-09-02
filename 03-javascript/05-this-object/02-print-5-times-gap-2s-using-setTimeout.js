// Write a function that prints "Hello World" 5 times at intervals of 2s each.

let count = 1;
while (count <= 5) {
  setTimeout(() => {
    console.log("Hello World");
  }, count * 2000);
  count++;
}
