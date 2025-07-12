// Initialize an array to store tasks
let tasks = [];

// Select DOM elements
const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  // Add task to array
  tasks.push(taskText);

  // Clear input
  taskInput.value = '';

  // Render tasks
  renderTasks();
}

// Function to remove a task
function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Function to render tasks in the DOM
function renderTasks() {
  // Clear current list
  taskList.innerHTML = '';

  // Create list items for each task
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn" onclick="removeTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// Event listener for adding tasks
addTaskBtn.addEventListener('click', addTask);

// Allow adding tasks with Enter key
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});