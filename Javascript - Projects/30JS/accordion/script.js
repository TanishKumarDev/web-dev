// Step 1: Select all accordion headers (the clickable buttons)
const accordionHeaders = document.querySelectorAll(".accordion-header");

// Step 2: Loop through each header and attach a click event listener
accordionHeaders.forEach((header) => {

    // When a header is clicked
    header.addEventListener("click", () => {
  
      // Step 3: Get the associated content section (next sibling element)
      const content = header.nextElementSibling;
  
      // Step 4: Toggle the 'active' accordion
      // If it's already open, close it; otherwise open it
      if (content.style.maxHeight) {
        // If content has maxHeight (means open), set it to null (collapse)
        content.style.maxHeight = null;
      } else {
        // Close all open accordions first (only one open at a time)
        document.querySelectorAll(".accordion-content").forEach((item) => {
          item.style.maxHeight = null;
        });
        
         // Toggle visual active class
         header.classList.toggle("active");

        // Then open the clicked one
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });