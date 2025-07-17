// Select DOM elements
const gameBoard = document.querySelector('#gameBoard');
const gameMessage = document.querySelector('#gameMessage');

// Initialize game state
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
const totalPairs = 8;

// Create card data (8 pairs of emojis)
const emojis = ['😺', '🐶', '🦁', '🐘', '🐻', '🦒', '🐼', '🦊'];
const cardData = [...emojis, ...emojis]; // Duplicate for pairs

// Shuffle array (Fisher-Yates algorithm)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Initialize game
function initGame() {
  // Shuffle cards
  shuffle(cardData);

  // Create card elements
  cardData.forEach((emoji, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-back"></div>
        <div class="card-front">${emoji}</div>
      </div>
    `;
    card.dataset.value = emoji;
    card.addEventListener('click', () => flipCard(index));
    gameBoard.appendChild(card);
    cards.push(card);
  });
}

// Flip card logic
function flipCard(index) {
  const card = cards[index];

  // Prevent flipping matched or already flipped cards
  if (card.classList.contains('flipped') || card.classList.contains('matched') || flippedCards.length >= 2) {
    return;
  }

  // Flip card
  card.classList.add('flipped');
  flippedCards.push({ index, card });

  // Check for match when two cards are flipped
  if (flippedCards.length === 2) {
    checkMatch();
  }
}

// Check for a match
function checkMatch() {
  const [card1, card2] = flippedCards;
  const isMatch = card1.card.dataset.value === card2.card.dataset.value;

  if (isMatch) {
    card1.card.classList.add('matched');
    card2.card.classList.add('matched');
    matchedPairs++;

    // Check for game over
    if (matchedPairs === totalPairs) {
      gameMessage.textContent = 'Congratulations! You won!';
    }
  } else {
    // Unflip cards after a delay
    setTimeout(() => {
      card1.card.classList.remove('flipped');
      card2.card.classList.remove('flipped');
    }, 1000);
  }

  // Reset flipped cards
  flippedCards = [];
}

// Start the game
initGame();