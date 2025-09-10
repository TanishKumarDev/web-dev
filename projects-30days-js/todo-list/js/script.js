// Task Manager JavaScript Logic (with LocalStorage Integration)

// Initialize an array to store tasks
let tasks = [];

// Select important DOM elements
const taskInput = document.querySelector("#taskInput");   // Input box for new tasks
const addTaskBtn = document.querySelector("#addTaskBtn"); // Add button
const taskList = document.querySelector("#taskList");     // UL element to display tasks

// Save tasks to localStorage (array -> string)
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks); // Convert string -> array
    renderTasks();                   // Show tasks in UI
  }
});

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim(); // Get value from input and remove extra spaces

  // If empty input, show alert
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Prevent adding duplicate task
  if (tasks.includes(taskText)) {
    alert("Task already exists");
    return;
  }

  // Add task to array
  tasks.push(taskText);

  // Clear the input box
  taskInput.value = "";

  // Save updated list to localStorage
  saveTasks();

  // Render the updated list
  renderTasks();
}

// Function to delete a task
function removeTask(index) {
  tasks.splice(index, 1); // Remove task from array using index

  saveTasks();            // Update localStorage
  renderTasks();          // Refresh UI
}

// Function to render tasks in the DOM
function renderTasks() {
  taskList.innerHTML = ""; // Clear current tasks in UI

  // Loop through tasks array and show each task as a list item
  tasks.forEach((task, index) => {
    const li = document.createElement("li"); // Create <li> tag
    li.className = "task-item";              // Add class for styling

    // Add task text and delete button inside <li>
    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn" onclick="removeTask(${index})">Delete</button>
    `;

    taskList.appendChild(li); // Add <li> to the list
  });
}

// Event listener: Add task on button click
addTaskBtn.addEventListener("click", addTask);

// Event listener: Add task on Enter key press
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

