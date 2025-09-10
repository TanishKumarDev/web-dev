// script.js
// Select the FAQ container
const faqContainer = document.getElementById('faqContainer');

// Handle click events using delegation
faqContainer.addEventListener('click', (event) => {
  const question = event.target.closest('.faq-question');
  if (!question) return; // Ignore clicks outside questions

  const answerId = question.getAttribute('aria-controls');
  const answer = document.getElementById(answerId);
  const isExpanded = question.getAttribute('aria-expanded') === 'true';

  // Collapse all answers
  document.querySelectorAll('.faq-answer.active').forEach((activeAnswer) => {
    activeAnswer.classList.remove('active');
    const relatedQuestion = document.querySelector(`[aria-controls="${activeAnswer.id}"]`);
    relatedQuestion.setAttribute('aria-expanded', 'false');
  });

  // Toggle the clicked answer
  if (!isExpanded) {
    answer.classList.add('active');
    question.setAttribute('aria-expanded', 'true');
  }
});

// Initialize all answers as collapsed
document.querySelectorAll('.faq-answer').forEach((answer) => {
  answer.classList.remove('active');
});
document.querySelectorAll('.faq-question').forEach((question) => {
  question.setAttribute('aria-expanded', 'false');
});