// Write a function that prints "Hello World" 5 times at intervals of 2s each.

let count = 0;

const interval = setInterval(() => {
  console.log("Hello World");
  count++;

  if (count === 5) {
    clearInterval(interval);
  }
}, 2000);
