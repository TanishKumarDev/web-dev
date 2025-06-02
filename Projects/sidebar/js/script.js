// Key Concept: document.querySelector()
// Select specific elements from the DOM using their IDs
const sidebar = document.querySelector('#sidebar');
const toggleBtn = document.querySelector('#toggle-btn');
const overlay = document.querySelector('#overlay');

// Key Concept: Function Declaration
// Define reusable functions for opening and closing the sidebar
function openSidebar() {
    // Key Concept: classList.add()
    // Add multiple classes to elements to show sidebar and overlay
    sidebar.classList.add('active');
    overlay.classList.add('active');
    // Key Concept: style property
    // Prevent body scrolling when sidebar is open for better UX
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    // Key Concept: classList.remove()
    // Remove classes to hide sidebar and overlay
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    // Restore default body scrolling
    document.body.style.overflow = '';
}

// Key Concept: addEventListener()
// Add click event listener to toggle button
toggleBtn.addEventListener('click', () => {
    // Key Concept: classList.contains()
    // Check if sidebar is currently active
    if (sidebar.classList.contains('active')) {
        closeSidebar();
    } else {
        openSidebar();
    }
});

// Key Concept: Event Delegation
// Close sidebar when clicking the overlay
overlay.addEventListener('click', closeSidebar);

// Key Concept: Keyboard Events
// Listen for keyboard input to close sidebar with Escape key
document.addEventListener('keydown', (e) => {
    // Key Concept: Event object properties
    // Check if Escape key was pressed and sidebar is active
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});

// Key Concept: Event Bubbling and Target
// Handle clicks outside sidebar on mobile devices
document.addEventListener('click', (e) => {
    // Key Concept: Window properties
    // Check if we're on a mobile device
    const isMobile = window.innerWidth <= 768;
    // Key Concept: contains() method
    // Check if click was inside sidebar or on toggle button
    const clickedInsideSidebar = sidebar.contains(e.target);
    const clickedOnToggleBtn = toggleBtn.contains(e.target);
    
    // Close sidebar if conditions are met
    if (isMobile && !clickedInsideSidebar && !clickedOnToggleBtn && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});

// Thinking Process:
// 1. Objective: Create an interactive sidebar with smooth animations and multiple ways to open/close.
// 2. Structure:
//    - HTML: Sidebar container, overlay, toggle button, and content area.
//    - CSS: Transitions, transforms, and responsive design.
//    - JS: Handle user interactions and manage sidebar state.
// 3. Key Concepts Applied:
//    - document.querySelector(): Select specific elements by ID.
//    - Function Declaration: Create reusable functions for opening/closing.
//    - classList methods: add(), remove(), contains() for managing classes.
//    - Event Listeners: Handle clicks, keyboard events, and mobile interactions.
//    - Event Delegation: Use overlay for click-outside detection.
//    - Window properties: Check device width for responsive behavior.
// 4. Logic Flow:
//    - Initialize by selecting necessary DOM elements.
//    - Define functions for opening and closing the sidebar.
//    - Add event listeners for different interaction methods:
//      * Toggle button click
//      * Overlay click
//      * Escape key press
//      * Click outside (mobile only)
//    - Manage sidebar state and body scrolling.
// 5. UX Considerations:
//    - Multiple ways to close sidebar (button, overlay, escape key, outside click).
//    - Prevent body scrolling when sidebar is open.
//    - Mobile-specific behavior for better touch interaction.
//    - Smooth animations handled by CSS transitions.

