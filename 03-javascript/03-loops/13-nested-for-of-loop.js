// Nested for...of Loop in JavaScript
// Easily traverse 2D arrays without worrying about array lengths and index tracking.

let heroes = [
  ["ironman", "spiderman", "thor"],
  ["superman", "wonder woman", "flash"],
];

for (list of heroes) {
  for (name of list) {
    console.log(name);
  }
}
