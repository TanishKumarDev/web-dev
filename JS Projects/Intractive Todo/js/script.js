(function () {
    // Initialize task array
    let tasks = [];

    // Select DOM elements
    const taskInput = document.querySelector('#taskInput');
    const addTaskBtn = document.querySelector('#addTaskBtn'); // Fixed selector
    const taskList = document.querySelector('#taskList');

    // Add task function
    function addTask() {
        const taskText = taskInput.value.trim();
        
        // Validate input
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }
        if (tasks.includes(taskText)) {
            alert('Task already exists');
            return;
        }

        // Add task to array
        tasks.push(taskText);

        // Create list item
        const li = document.createElement('li');
        const taskSpan = document.createElement('span'); // Separate task text
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            // Remove task from array
            tasks = tasks.filter(task => task !== taskText);
            // Remove from DOM
            li.remove();
        });

        // Append delete button to list item
        li.appendChild(deleteBtn);
        // Append list item to task list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';
    }

    // Event listener for add task button
    addTaskBtn.addEventListener('click', addTask);

    // Add task on Enter key
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });
})();