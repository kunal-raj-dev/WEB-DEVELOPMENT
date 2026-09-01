function table(num, i) {
  if (i == 11) {
    return;
  }

  console.log(`${num} x ${i} = ${num * i}`);
  table(num, i + 1);
}

table(5, 1);
