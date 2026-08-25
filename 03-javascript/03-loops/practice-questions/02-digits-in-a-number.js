// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

function digitCount(num) {
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count = count + 1;
  }

  return count;
}

console.log(digitCount(25190));
console.log(digitCount(8));
