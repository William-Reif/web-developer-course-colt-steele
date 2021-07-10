const tasks = [];

let currentTask = prompt("Your orders, Sir?");

while (currentTask != "quit") {
  currentTask = prompt("Your orders, Sir?");
  if (currentTask === "new") {
    const newTask = prompt("Add new task: ");
    tasks.push(newTask);
  } else if (currentTask === "list") {
    tasks.forEach((task, index) => console.log(`${index}: ${task}`));
  } else if (currentTask === "delete") {
    const taskToDelete = prompt("Which one would you like to delete?");
    tasks.splice(taskToDelete, 1);
  }
}
