// script.js
// Array of quote objects
const quotes = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" }
];

// Select DOM elements
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');

// Generate random quote
function generateRandomQuote() {
  if (quotes.length === 0) {
    quoteText.textContent = "No quotes available.";
    quoteAuthor.textContent = "— Unknown";
    return;
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = `"${randomQuote.quote}"`;
  quoteAuthor.textContent = `— ${randomQuote.author}`;
}

// Add event listener to button
newQuoteBtn.addEventListener('click', generateRandomQuote);

// Initialize with a random quote
generateRandomQuote();