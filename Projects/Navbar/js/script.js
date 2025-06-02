// Key Concept: document.querySelector()
// Select the hamburger button and navigation links
const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelector('#nav-links');

// Key Concept: addEventListener()
// Add click event listener to hamburger button
hamburger.addEventListener('click', () => {
    // Key Concept: classList.toggle()
    // Toggle the 'active' class on the navigation links
    navLinks.classList.toggle('active');
    
    // Toggle hamburger icon between bars and times
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    // Check if click is outside of navbar
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when window is resized to desktop view
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Thinking Process:
// 1. Objective: Create a responsive navbar that transforms into a hamburger menu on mobile devices.
// 2. Structure:
//    - HTML: Navbar with logo, navigation links, and hamburger button.
//    - CSS: Responsive styles with media queries for mobile view.
//    - JS: Toggle mobile menu and handle user interactions.
// 3. Key Concepts Applied:
//    - document.querySelector(): Select DOM elements.
//    - addEventListener(): Handle click events and window resize.
//    - classList.toggle(): Toggle classes for showing/hiding mobile menu.
//    - Event Delegation: Handle clicks outside the menu.
// 4. Logic Flow:
//    - Initialize by selecting necessary elements.
//    - Toggle mobile menu on hamburger click.
//    - Switch hamburger icon between bars and times.
//    - Close menu when clicking outside or resizing window.
// 5. UX Considerations:
//    - Smooth transitions for menu opening/closing.
//    - Visual feedback with icon changes.
//    - Proper handling of window resize.
//    - Click outside to close functionality.
//    - Staggered animations for menu items.
