const favMovie = "Batman";

let guess = prompt("enter the fav movie name (or type 'quit'): ");

while (guess !== favMovie && guess !== "quit" && guess !== null) {
  guess = prompt("wrong guess. please try again (or type 'quit'): ");
}

if (guess === favMovie) {
  console.log("congrats!!");
} else {
  console.log("you quit");
}

// let favMovie = "Batman";

// let guess = prompt("enter the fav movie name : ");

// while (true) {
//   if (guess == "quit") {
//     console.log("game exit");
//     break;
//   }

//   if (guess.toLowerCase() != favMovie.toLowerCase()) {
//     console.log(`you guessed wrong , please try again`);
//     guess = prompt("enter the fav movie name : ");
//   } else {
//     console.log("congrats you guessed!!!");
//     break;
//   }
// }
