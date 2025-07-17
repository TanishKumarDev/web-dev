// Select DOM elements
const itemList = document.querySelector('#itemList');

// Sample data
let items = [
  'Task 1: Plan project',
  'Task 2: Write code',
  'Task 3: Test application',
  'Task 4: Deploy',
  'Task 5: Review'
];

// Function to render list
function renderList() {
  itemList.innerHTML = ''; // Clear existing list

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'item';
    li.draggable = true; // Enable dragging
    li.textContent = item;
    li.dataset.index = index; // Store index for drag handling
    li.addEventListener('dragstart', handleDragStart);
    li.addEventListener('dragover', handleDragOver);
    li.addEventListener('drop', handleDrop);
    li.addEventListener('dragend', handleDragEnd);
    itemList.appendChild(li);
  });
}

// Handle drag start
function handleDragStart(e) {
  e.target.classList.add('dragging');
  e.dataTransfer.setData('text/plain', e.target.dataset.index); // Store index
}

// Handle drag over
function handleDragOver(e) {
  e.preventDefault(); // Allow drop
}

// Handle drop
function handleDrop(e) {
  e.preventDefault();
  const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'));
  const dropIndex = parseInt(e.target.dataset.index);

  // Reorder array
  const [draggedItem] = items.splice(draggedIndex, 1);
  items.splice(dropIndex, 0, draggedItem);

  // Re-render list
  renderList();
}

// Handle drag end
function handleDragEnd(e) {
  e.target.classList.remove('dragging');
}

// Initial render
renderList();