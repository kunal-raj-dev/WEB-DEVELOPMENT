// splice : removes/replaces/add elements in place
// splice(start , deleteCount , item0...itemN)
// original array is affected by splice operations

let colors = ["red", "yellow", "blue", "orange", "pink", "white"];

console.log(colors);

colors.splice(4); // start at 4th idx and delete all after 4 included
console.log(colors);

colors.push("pink", "white");
console.log(colors);

colors.splice(3, 2); // delete 2 items from 3 included
console.log(colors);

colors.splice(2, 0, "orange", "pink"); // at idx 2 without deleting add orange and pink
console.log(colors);
