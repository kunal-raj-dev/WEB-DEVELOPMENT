// high order function is a function that takes another function as an argument or returns a function as a result.
function multipleGreet(func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
}

let greet = function () {
  console.log("hello");
};

multipleGreet(greet, 2);
