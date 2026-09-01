function outerFunction() {
  let outerVar = 10;

  function innerFunction() {
    console.log(outerVar); // possible due to lexical scope
    let innerVar = 20;
  }
  innerFunction();
  console.log(innerVar); // opposite of lexical not possible
}

outerFunction();
