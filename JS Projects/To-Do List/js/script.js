// ✅ Load existing tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// ✅ Get DOM Elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// ✅ Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ✅ Render tasks on screen
function renderTasks() {
  taskList.innerHTML = ""; // clear old list

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${task.done ? 'done' : ''}">${task.text}</span>
      <div>
        <button class="completeBtn" onclick="toggleTask(${index})">${task.done ? "Undo" : "Done"}</button>
        <button class="deleteBtn" onclick="deleteTask(${index})">Delete</button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

// ✅ Add new task
function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  tasks.push({ text, done: false });
  saveTasks();
  renderTasks();
  taskInput.value = "";
}

// ✅ Mark complete/incomplete
function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

// ✅ Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// ✅ Add on button click
addBtn.addEventListener("click", addTask);

// ✅ Add on Enter key
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

// ✅ Initial call
renderTasks();
