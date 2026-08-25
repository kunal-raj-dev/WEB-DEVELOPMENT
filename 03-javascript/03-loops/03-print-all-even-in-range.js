console.log("Odd numbers using if condition");

// with if
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// without if condition
for (let i = 0; i <= 10; i + 2) {
  console.log(i);
}

// backwards
for (let i = 10; i >= 2; i - 2) {
  console.log(i);
}
