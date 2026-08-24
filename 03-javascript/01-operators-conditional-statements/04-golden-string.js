// Qs4. A string is a golden string if it starts with the character 'A' or 'a' and has a total
// length greater than 5.
// For a given string print if it is golden or not.

let word = "Apples";

if (word[0].toUpperCase() === "A" && word.length > 5) {
  console.log(`Golden word.`);
} else {
  console.log(`NOT a golden word.`);
}
