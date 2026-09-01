const calculator = {
  add: function (a, b) {
    return a + b;
  },

  sub: function (a, b) {
    return a - b;
  },

  mul: function (a, b) {
    return a * b;
  },
};

console.log(calculator);
console.log(calculator.add);
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.sub(5, 3)); // Output: 2
console.log(calculator.mul(5, 3)); // Output: 15
