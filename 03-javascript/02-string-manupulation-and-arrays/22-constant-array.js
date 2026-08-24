// We declare a constant array for a shopping cart
const shoppingCart = ["Milk", "Bread"];

// Since the array itself is mutable, we can add items
shoppingCart.push("Eggs");

// We can also update existing items
shoppingCart[0] = "Oat Milk";

// And we can remove things
shoppingCart.pop();

console.log(shoppingCart);
// Works perfectly! We get: ['Oat Milk', 'Bread']

// FOR MAKING ARRAY IMMUTABLE
const staticConfig = Object.freeze(["red", "blue"]);

// Now it's truly locked. Trying to push a new item will fail
// staticConfig.push('debug'); -> TypeError

const newArr = [1, 2, 3, 4, 5];
shoppingCart = newArr; //will give error because both have different address
// so you can't replace the address of newArr to shoppingCart

console.log(shoppingCart);
