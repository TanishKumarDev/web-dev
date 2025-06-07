/*
 * JavaScript Events - A Comprehensive Guide
 * 
 * Events are actions or occurrences that happen in the browser, such as user interactions
 * (clicks, key presses, mouse movements) or system events (page load, resize). JavaScript
 * can detect and respond to these events by executing functions called event handlers.
 * 
 * This guide covers:
 * 1. Event Basics: What events are and how they work
 * 2. Common Event Types: Click, mouse, keyboard, form, and window events
 * 3. Event Handling: Adding event listeners and handling events
 * 4. Event Object: Accessing event details
 * 5. Event Propagation: Bubbling and capturing
 * 6. Preventing Default Behavior: Controlling browser actions
 * 
 * Key Notes:
 * - Events are triggered by user actions or browser activities
 * - Use addEventListener() for modern event handling (preferred over inline attributes)
 * - Event listeners can access the event object for details (e.g., target, type)
 * - Local variables in event handlers follow function scope rules
 * 
 * Note: Some examples require a browser environment to work (e.g., DOM interactions).
 *       Console outputs are used for non-DOM examples to ensure compatibility.
 */

// =============================================
// 1. EVENT BASICS
// =============================================

/*
 * Events are signals that something has happened in the browser.
 * JavaScript can attach functions (event handlers) to respond to these events.
 * Common ways to handle events:
 * - Inline HTML attributes (e.g., onclick="function()") - Not recommended
 * - DOM property (e.g., element.onclick = function) - Limited
 * - addEventListener() - Modern, flexible, and preferred
 * 
 * Example: Simulating a click event handler (console-based for non-DOM environment).
 */

function handleClick() {
    console.log("Button was clicked!");
  }
  
  // Simulating a button click (in a browser, this would be tied to a DOM element)
  handleClick(); // Button was clicked!
  
  // =============================================
  // 2. COMMON EVENT TYPES
  // =============================================
  
  /*
   * Common event types include:
   * - Mouse: click, dblclick, mouseover, mouseout, mousemove
   * - Keyboard: keydown, keyup, keypress
   * - Form: submit, change, input, focus, blur
   * - Window: load, resize, scroll, unload
   * 
   * Example: Simulate different event types with console logs.
   */
  
  function handleMouseOver() {
    console.log("Mouse hovered over element!");
  }
  
  function handleKeyPress() {
    console.log("Key was pressed!");
  }
  
  function handleFormSubmit() {
    console.log("Form was submitted!");
  }
  
  function handleWindowLoad() {
    console.log("Window finished loading!");
  }
  
  // Simulate event triggers
  handleMouseOver(); // Mouse hovered over element!
  handleKeyPress(); // Key was pressed!
  handleFormSubmit(); // Form was submitted!
  handleWindowLoad(); // Window finished loading!
  
  // =============================================
  // 3. EVENT HANDLING WITH addEventListener
  // =============================================
  
  /*
   * addEventListener(type, listener, options) attaches an event handler to an element.
   * - type: Event name (e.g., "click")
   * - listener: Function to execute when the event occurs
   * - options: Optional (e.g., { once: true } to run once)
   * 
   * Example: Simulated event listener (requires DOM in browser; console-based here).
   */
  
  function simulateEventListener(eventType, handler) {
    // Simulate triggering an event
    console.log(`Simulating ${eventType} event...`);
    handler();
  }
  
  simulateEventListener("click", () => {
    console.log("Click event handled via addEventListener!");
  }); // Simulating click event... Click event handled via addEventListener!
  
  // Browser Example (commented out for non-DOM environment):
  /*
  const button = document.createElement("button");
  button.textContent = "Click Me";
  document.body.appendChild(button);
  button.addEventListener("click", () => {
    console.log("Button clicked in browser!");
  });
  */
  
  // =============================================
  // 4. EVENT OBJECT
  // =============================================
  
  /*
   * The event object is passed to event handlers and contains details about the event.
   * Common properties:
   * - type: Event type (e.g., "click")
   * - target: Element that triggered the event
   * - clientX/clientY: Mouse coordinates (for mouse events)
   * - key: Key pressed (for keyboard events)
   * 
   * Example: Simulate event object with properties.
   */
  
  function handleEvent(event) {
    console.log("Event Type:", event.type);
    console.log("Event Target:", event.target);
    if (event.clientX) console.log("Mouse X:", event.clientX);
    if (event.key) console.log("Key Pressed:", event.key);
  }
  
  // Simulate a click event
  handleEvent({ type: "click", target: "button", clientX: 100, clientY: 200 });
  // Event Type: click
  // Event Target: button
  // Mouse X: 100
  
  // Simulate a keydown event
  handleEvent({ type: "keydown", target: "input", key: "Enter" });
  // Event Type: keydown
  // Event Target: input
  // Key Pressed: Enter
  
  // =============================================
  // 5. EVENT PROPAGATION (BUBBLING AND CAPTURING)
  // =============================================
  
  /*
   * Events propagate through the DOM in two phases:
   * - Capturing: From window to target element
   * - Bubbling: From target element back to window
   * addEventListener's third argument can specify capture phase (true) or bubbling (false, default).
   * 
   * Example: Simulate bubbling with nested elements (console-based).
   */
  
  function parentHandler(event) {
    console.log(`Parent handled ${event.type}`);
  }
  
  function childHandler(event) {
    console.log(`Child handled ${event.type}`);
  }
  
  function simulateBubbling() {
    let event = { type: "click" };
    console.log("Simulating bubbling...");
    childHandler(event); // Child first
    parentHandler(event); // Then parent (bubbling)
  }
  
  simulateBubbling();
  // Simulating bubbling...
  // Child handled click
  // Parent handled click
  
  // Browser Example (commented out):
  /*
  const parent = document.createElement("div");
  const child = document.createElement("button");
  parent.appendChild(child);
  parent.addEventListener("click", () => console.log("Parent clicked"), false);
  child.addEventListener("click", () => console.log("Child clicked"), false);
  */
  
  // =============================================
  // 6. PREVENTING DEFAULT BEHAVIOR
  // =============================================
  
  /*
   * Some events (e.g., form submit, link click) have default browser actions.
   * Use event.preventDefault() to stop these actions.
   * 
   * Example: Simulate preventing default behavior for a form submit.
   */
  
  function handleSubmit(event) {
    console.log("Form submit attempted...");
    event.preventDefault(); // Simulate preventing default
    console.log("Default behavior prevented!");
  }
  
  function simulateFormSubmit() {
    let event = {
      type: "submit",
      preventDefault: function () {
        console.log("Simulated preventDefault called");
      },
    };
    handleSubmit(event);
  }
  
  simulateFormSubmit();
  // Form submit attempted...
  // Simulated preventDefault called
  // Default behavior prevented!
  
  // Browser Example (commented out):
  /*
  const form = document.createElement("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submission prevented!");
  });
  */
  
  // =============================================
  // 7. LOCAL VARIABLES IN EVENT HANDLERS
  // =============================================
  
  /*
   * Variables declared inside event handlers are local to the handler function.
   * They cannot be accessed outside and are destroyed when the handler completes.
   * 
   * Example: Local variable in an event handler.
   */
  
  function handleButtonClick() {
    let clickCount = 0; // Local variable
    clickCount++;
    console.log("Click count inside handler:", clickCount);
  }
  
  handleButtonClick(); // Click count inside handler: 1
  handleButtonClick(); // Click count inside handler: 1
  // console.log(clickCount); // Error: clickCount is not defined
  
  // Persistent counter using closure
  function createCounter() {
    let clickCount = 0; // Persists across calls
    return function () {
      clickCount++;
      console.log("Persistent click count:", clickCount);
    };
  }
  
  let counter = createCounter();
  counter(); // Persistent click count: 1
  counter(); // Persistent click count: 2