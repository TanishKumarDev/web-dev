// Get DOM elements
const clock = document.querySelector('#clock');
const dateDisplay = document.querySelector('#date');
const toggleFormatBtn = document.querySelector('#toggleFormat');
// State for clock format
let is24Hour = JSON.parse(localStorage.getItem('is24Hour')) ?? true;

// Update clock function
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  let period = '';

  if (!is24Hour) {
    period = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12 || 12; // Convert 0 to 12 for midnight
  }
  hours = String(hours).padStart(2, '0');

  clock.textContent = `${hours}:${minutes}:${seconds}${period}`;

  dateDisplay.textContent = now.toLocaleDateString('en-US'),{
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
}

// Toggle format
toggleFormatBtn.addEventListener('click', () => {
  is24Hour = !is24Hour;
  localStorage.setItem('is24Hour', JSON.stringify(is24Hour));
  toggleFormatBtn.textContent = is24Hour ? 'Switch to 12h' : 'Switch to 24h';
  updateClock();
});

// Initial call
updateClock();
toggleFormatBtn.textContent = is24Hour ? 'Switch to 12h' : 'Switch to 24h';

// Update every second
setInterval(updateClock, 1000);