// ===============================
// ✅ Initialize tasks from localStorage with error handling
// ===============================
let tasks = [];
try {
  const storedTasks = localStorage.getItem('tasks');
  tasks = storedTasks ? JSON.parse(storedTasks) : [];
} catch (e) {
  console.error('Corrupted localStorage data. Resetting tasks.');
  tasks = [];
  localStorage.removeItem('tasks'); // Clear invalid data
}

// ===============================
// ✅ DOM Elements
// ===============================
const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');
const messageBox = document.querySelector('#message');
// ===============================
// ✅ Save Tasks to localStorage (reusable function)
// ===============================
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// ===============================
// ✅ Add Task - On Button Click
// ===============================
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim(); // Remove whitespace
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Optional: Prevent duplicate tasks
  const isDuplicate = tasks.some(task => task.text === taskText);
  if (isDuplicate) {
   messageBox.textContent = 'This task already exists!';
   setTimeout(() => {
     messageBox.textContent = '';
   }, 1000);
    return;
  }
  // Clear message on success
messageBox.textContent = '';

  // Create a new task object
  const task = {
    id: Date.now(),       // Unique ID using timestamp
    text: taskText,       // Task content
    completed: false      // Initially not completed
  };

  tasks.push(task);       // Add to tasks array
  saveTasks();            // Save to localStorage
  taskInput.value = '';   // Clear input field
  renderTasks();          // Update UI
});

// ===============================
// ✅ Add Task on Enter Key Press
// ===============================
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTaskBtn.click(); // Simulate button click on Enter key press
  }
})

// ===============================
// ✅ Use input event to clear error message when user starts typing 
// ===============================
taskInput.addEventListener('input', () => {
  messageBox.textContent = '';
});

// ===============================
// ✅ Handle Task Click Events (Delete & Complete)
// ===============================
taskList.addEventListener('click', (e) => {
  const id = Number(e.target.getAttribute('data-id')); // Get task ID from button

  // 🗑 Delete task
  if (e.target.classList.contains('deleteBtn')) {
    tasks = tasks.filter(task => task.id !== id); // Remove by ID
    saveTasks();
    renderTasks();
  }

  // ✅ Toggle task completion
  if (e.target.classList.contains('completeBtn')) {
    tasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    renderTasks();
  }
});

// ===============================
// ✅ Render Tasks to the DOM
// ===============================
function renderTasks() {
  taskList.innerHTML = ''; // Clear the existing task list first

  tasks.forEach(task => {
    const li = document.createElement('li'); // Create list item
    li.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <button class="completeBtn" data-id="${task.id}">
        ${task.completed ? 'Undo' : 'Complete'}
      </button>
      <button class="deleteBtn" data-id="${task.id}">Delete</button>
    `;
    taskList.appendChild(li); // Add list item to taskList
  });
}

// ===============================
// ✅ Initial Call: Load tasks on page load
// ===============================
renderTasks();
