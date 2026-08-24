// Qs. For the given start state of an array, change it to final form using splice.

// start : ['january', 'july', 'march', 'august' ]

// final : ['july', 'june', 'march', 'august']

let arr = ["january", "july", "march", "august"];

arr.splice(0, 1);
console.log(arr);

arr.splice(1, 0, "june");
console.log(arr);
