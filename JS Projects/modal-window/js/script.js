// script.js
// Select DOM elements
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const modalForm = document.getElementById('modalForm');

// Show modal and overlay
function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.getElementById('username').focus(); // Set focus to first input
}

// Hide modal and overlay
function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  modalForm.reset(); // Clear form inputs
}

// Add event listeners
openModalBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

// Close with Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  }
});

// Handle form submission
modalForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page refresh
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  console.log(`Username: ${username}, Password: ${password}`); // Simulate submission
  hideModal();
});

// Show succes megge after submission
modalForm.addEventListener('submit', () => {
  const successMessage = document.createElement('p');
  successMessage.textContent = 'Login successful!';
  successMessage.classList.add('success-message');
  modal.appendChild(successMessage);
  setTimeout(() => {
    successMessage.remove();
  }, 3000); // Remove message after 3 seconds
});
// Initialize modal as hidden
hideModal();