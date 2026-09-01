function rollDice() {
  // Math.random() gives a decimal from 0 to 0.999...
  // Multiplying by 6 gives a decimal from 0 to 5.999...
  // Math.floor() rounds it down to a whole number from 0 to 5
  // Adding 1 shifts the range to 1 to 6
  return Math.floor(Math.random() * 6) + 1;
}

// Roll the dice and print the result
const result = rollDice();
console.log(`You rolled a ${result}!`);
