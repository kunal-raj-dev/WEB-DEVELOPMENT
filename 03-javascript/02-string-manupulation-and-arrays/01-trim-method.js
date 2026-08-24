// str.trim()
// - removes both ends extra spaces and tabs
// - doesnot affect spaces between letters.
// - new copy of trimmed msg is created it doesnot update actual message

let message1 = "Hi! My name is Parmarth.         ";
console.log(message1.trim());

let message2 = "     Hi! My name is Parmarth.";
console.log(message2.trim());

let message3 = "        Hi!         My name is Parmarth.         ";
console.log(message3.trim());
