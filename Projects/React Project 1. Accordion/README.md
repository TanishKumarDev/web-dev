# React Accordion Project

A simple **React Accordion** component built to practice React fundamentals and prepare for frontend developer interviews. This single-selection accordion displays collapsible content (like FAQs) with a clean UI and smooth animations.

## 🎯 Purpose
Learn key React concepts:
- **State management** with `useState`.
- **Reusable components**.
- **Event handling**.
- **Conditional rendering**.
- **CSS animations**.

## ✨ Features
- **Single-selection**: Only one item opens at a time; clicking another closes the previous.
- **Smooth animations**: Content slides down when opened.
- **Responsive**: Works on mobile and desktop.
- **Modern UI**: Gradient background, shadows, and hover effects.

## 🛠️ Tech Stack
- **React**: For UI and state.
- **Vite**: For fast development.
- **CSS**: For styling and animations.

## 📂 Project Structure
```
├── src
│   ├── App.jsx          # Main component
│   ├── App.css         # Styles
│   ├── components
│   │   ├── AccordionItem.jsx  # Reusable accordion item
│   │   └── data.js     # Dummy data
│   ├── index.css       # Global styles
│   └── main.jsx        # React entry point
├── index.html          # HTML entry
├── package.json        # Dependencies
├── README.md           # This file
└── vite.config.js      # Vite config
```

### Key Files
- `App.jsx`: Manages state and renders accordion items.
- `AccordionItem.jsx`: Reusable component for each accordion item.
- `data.js`: Static data for questions and answers.
- `App.css`: Styles for layout, animations, and responsiveness.

## 🔑 How It Works
- **Data**: Uses dummy data from `data.js` (question, answer, ID).
- **State**: Tracks the open item’s ID with `useState`.
- **Toggle**: Clicking a question opens/closes it; only one item is open at a time.
- **UI**: Styled with CSS for smooth transitions and a modern look.

## 🚀 Setup
1. Clone the repo:
   ```bash
   git clone <repo-url>
   cd react-accordion-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

## 🧑‍💻 What You’ll Learn
- **useState**: Manage which item is open.
- **Props**: Pass data to child components.
- **Events**: Handle clicks to toggle items.
- **CSS**: Create animations and responsive design.

## 💡 Interview Prep
Accordions are common in interviews to test:
- State management.
- Component reusability.
- Basic UI logic.

To level up, try:
- Adding multi-selection (multiple items open).
- Fetching data from an API.
- Adding keyboard support.

