function sum(a, b) {
  return a + b;
}
console.log(sum(3, 6));

function voteEligiblity(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(voteEligiblity(19));
console.log(voteEligiblity(14));
