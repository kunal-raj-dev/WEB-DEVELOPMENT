// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

function digitSum(num) {
  let sum = 0;
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }

  return sum;
}

console.log(digitSum(19821));
console.log(digitSum(99));
