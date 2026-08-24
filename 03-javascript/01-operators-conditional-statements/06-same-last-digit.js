// Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.
// Eg : 32 and 47852 have the same last digit i.e. 2

let num1 = 32;
let num2 = 47852;

if (num1 % 10 === num2 % 10) {
  console.log(`${num1} and ${num2} have SAME last digit.`);
} else {
  console.log(`${num1} and ${num2} have DIFFERENT last digit.`);
}
