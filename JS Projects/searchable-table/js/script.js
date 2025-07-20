// Select DOM elements
const searchInput = document.querySelector('#searchInput');
const tableBody = document.querySelector('#tableBody');
const filterField = document.querySelector('#filterField');

// Sample user data
const users = [
  { name: 'John Doe', email: 'john.doe@example.com', city: 'New York' },
  { name: 'Jane Smith', email: 'jane.smith@example.com', city: 'Los Angeles' },
  { name: 'Alice Johnson', email: 'alice.j@example.com', city: 'Chicago' },
  { name: 'Bob Brown', email: 'bob.brown@example.com', city: 'Houston' },
  { name: 'Emma Wilson', email: 'emma.wilson@example.com', city: 'Phoenix' }
];

// Function to render table rows
function renderTable(data) {
  tableBody.innerHTML = ''; // Clear existing rows

  data.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.city}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Function to filter users based on search input
function filterUsers(searchTerm, field) {
  const filteredUsers = users.filter(user =>
    user[field].toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderTable(filteredUsers);
}

// Initial render of all users
renderTable(users);

// Event listener for search input
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.trim();
  const field = filterField.value; // Get the selected field from the dropdown
  filterUsers(searchTerm, field);
});

// Optimization: Debounce the search input to reduce the number of filter calls
let debounceTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimeout); // 1. Cancel previous timer
    debounceTimeout = setTimeout(() => { // 2. Set a new delay
        const searchTerm = e.target.value.trim();
        const field = filterField.value;
        filterUsers(searchTerm, field); // 3. Trigger search after pause
    }, 300); // 300ms = delay before firing
});
