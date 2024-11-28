let textField = document.getElementById("textField");
let submitBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let todoArray = [];

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let input = textField.value;
  if (input !== "") {
    todoArray.push(input); // Add input to the todoArray
    textField.value = ""; // Clear input field
    display();
  }
});

function display() {
  taskList.innerHTML = ""; // Clear the current list to re-render
  todoArray.forEach((task, index) => {
    let taskItem = document.createElement("li");
    taskItem.innerHTML = `
            <h3>${task}</h3>
            <button onclick="removeTask(${index})">Remove</button>
        `;
    taskList.appendChild(taskItem);
  });
}

function removeTask(index) {
  todoArray.splice(index, 1); // Remove task from the array
  display(); // Re-render the updated list
}
