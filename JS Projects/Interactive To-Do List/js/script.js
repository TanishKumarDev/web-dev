// Initialize tasks list
let tasks = [];

// DOM elements
const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');


// Add task functions
addTaskBtn.addEventListener('click', () =>{
    const taskText = taskInput.value.trim();
    if(taskText == ''){
        alert('Please enter a task');
        return;
    }
    const task = {
        id:Date.now(), // unique id using timestamp
        text: taskText 
    };
    tasks.push(task);
    taskInput.value = '';
     renderTasks();
})

// Render tasks to DOM
function renderTasks() {
  taskList.innerHTML = ''; // Clear existing list
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${task.text}
      <button class="deleteBtn" data-id="${task.id}">Delete</button>
    `;
    taskList.appendChild(li);
  });
}