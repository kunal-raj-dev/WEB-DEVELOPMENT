for (let i = 1; i <= 3; i++) {
  console.log(`outer loop ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(j);
  }
}

// OUTPUT:
// outer loop 1
// 1
// 2
// 3
// outer loop 2
// 1
// 2
// 3
// outer loop 3
// 1
// 2
// 3
