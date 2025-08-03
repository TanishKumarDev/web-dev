// Get DOM elements
const clock = document.querySelector('#clock');
const dateDisplay = document.querySelector('#date');
const toggleFormatBtn = document.querySelector('#toggleFormat');

// Load clock format preference from localStorage (default: 24-hour)
let is24Hour = JSON.parse(localStorage.getItem('is24Hour')) ?? true;

// Function to update clock and date
function updateClock() {
  const now = new Date();

  // Get time components
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  let period = '';

  // Handle 12-hour formatting
  if (!is24Hour) {
    period = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12 || 12; // Convert 0 → 12 for midnight
  }

  // Format hours with leading zero
  hours = String(hours).padStart(2, '0');

  // Display time
  clock.textContent = `${hours}:${minutes}:${seconds}${period}`;

  // Display date in readable format
  dateDisplay.textContent = now.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// Toggle 12/24-hour format and store preference
toggleFormatBtn.addEventListener('click', () => {
  is24Hour = !is24Hour;
  localStorage.setItem('is24Hour', JSON.stringify(is24Hour));
  toggleFormatBtn.textContent = is24Hour ? 'Switch to 12h' : 'Switch to 24h';
  updateClock(); // Update immediately
});

// Initial setup
updateClock();
toggleFormatBtn.textContent = is24Hour ? 'Switch to 12h' : 'Switch to 24h';

// Update every second
setInterval(updateClock, 1000);
