const to_do_list = [];

while (true) {
  console.log(`\nChoose one option:

1. list   - Show all todos
2. add    - Add a todo
3. delete - Delete a todo
4. quit   - Exit the app`);

  let input = prompt("Type command:");

  // Handle Cancel button
  if (input === null) {
    console.log("Goodbye!");
    break;
  }

  input = input.trim().toLowerCase();

  // List todos
  if (input === "1" || input === "list") {
    if (to_do_list.length === 0) {
      console.log("Todo list is empty. Add a task first.");
    } else {
      console.log("\nTodo List:");
      for (let i = 0; i < to_do_list.length; i++) {
        console.log(`${i + 1}. ${to_do_list[i]}`);
      }
      console.log(`Total tasks: ${to_do_list.length}`);
    }
  }

  // Add todo
  else if (input === "2" || input === "add") {
    let item = prompt("Enter task:");

    if (item === null) {
      console.log("Task not added.");
      continue;
    }

    item = item.trim();

    if (item !== "") {
      to_do_list.push(item);
      console.log(`"${item}" added successfully.`);
    } else {
      console.log("Task cannot be empty.");
    }
  }

  // Delete todo
  else if (input === "3" || input === "delete") {
    if (to_do_list.length === 0) {
      console.log("Todo list is already empty.");
      continue;
    }

    console.log("\nTodo List:");
    for (let i = 0; i < to_do_list.length; i++) {
      console.log(`${i + 1}. ${to_do_list[i]}`);
    }

    let index = Number(prompt("Enter task number to delete:")) - 1;

    if (Number.isInteger(index) && index >= 0 && index < to_do_list.length) {
      const removed = to_do_list.splice(index, 1);
      console.log(`Deleted: "${removed[0]}"`);
    } else {
      console.log("Invalid task number.");
    }
  }

  // Quit
  else if (input === "4" || input === "quit") {
    console.log("Goodbye!");
    break;
  }

  // Invalid command
  else {
    console.log("Invalid command. Please try again.");
  }
}
