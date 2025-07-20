
// DOM ELEMENT SELECTION

// Select the container where list items will be rendered
const itemList = document.querySelector('#itemList');


// DATA INITIALIZATION

// Default task list (fallback if localStorage is empty)
let items = [
  'Task 1: Plan project',
  'Task 2: Write code',
  'Task 3: Test application',
  'Task 4: Deploy',
  'Task 5: Review'
];


// LOCAL STORAGE HANDLERS

// Save the current list to localStorage (persists data after reload)
function saveToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items)); // Convert array → JSON string
}

// Load saved list from localStorage on page load
function loadFromLocalStorage() {
  const storedItems = localStorage.getItem('items');
  if (storedItems) {
    items = JSON.parse(storedItems); // Convert JSON string → array
  }
}


// UI RENDERING

// Render the list items in the DOM
function renderList() {
  itemList.innerHTML = ''; // Clear previous items

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'item';
    li.draggable = true; // Enable drag-and-drop
    li.textContent = item;
    li.dataset.index = index; // Store index for drag logic

    // Attach drag event listeners
    li.addEventListener('dragstart', handleDragStart);
    li.addEventListener('dragover', handleDragOver);
    li.addEventListener('drop', handleDrop);
    li.addEventListener('dragend', handleDragEnd);

    // Add to DOM
    itemList.appendChild(li);
  });
}


// DRAG & DROP HANDLERS

// Called when drag starts
function handleDragStart(e) {
  e.target.classList.add('dragging'); // Add visual cue
  e.dataTransfer.setData('text/plain', e.target.dataset.index); // Store dragged item's index
}

// Called when another item is dragged over this item
function handleDragOver(e) {
  e.preventDefault(); // Necessary to allow drop
}

// Called when dragged item is dropped onto a target
function handleDrop(e) {
  e.preventDefault();

  const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'));
  const dropIndex = parseInt(e.target.dataset.index);

  // Reorder the array: remove dragged item and insert at new position
  const [draggedItem] = items.splice(draggedIndex, 1);
  items.splice(dropIndex, 0, draggedItem);

  saveToLocalStorage(); // Save updated order
  renderList(); // Re-render the list to reflect changes
}

// Called when drag ends
function handleDragEnd(e) {
  e.target.classList.remove('dragging'); // Clean up visual cue
}


// INITIALIZATION

loadFromLocalStorage(); // Load saved tasks (if any)
renderList(); // Render the list on page load
