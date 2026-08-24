// Practice Qs
// Qs. Create a nested array to show the following tic-tac-toe game state.

let ticTacToe = [
  ["X", null, "O"], // Top row
  [null, "X", null], // Middle row
  ["O", null, "X"], // Bottom row
];

console.log(ticTacToe[1][1]); // x
console.log(ticTacToe[2][0]); // O
console.log(ticTacToe[0][1]); // null

console.log(ticTacToe);
