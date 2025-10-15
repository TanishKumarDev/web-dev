## Section 14: EJS Template Engine (02:13:14 - 02:28:33)

With Express.js fundamentals covered in Section 13, we now explore **EJS (Embedded JavaScript)**, a template engine for rendering dynamic HTML in Node.js applications. This section dives into setting up EJS, rendering templates, passing data to views, and integrating with Express to serve dynamic web pages. EJS is ideal for generating HTML on the server, a key skill for MERN apps where the backend may render initial views or serve dynamic content before React takes over. We'll break this down smoothly, deeply, and clearly, using practical examples to solidify your understanding and connect to real-world use cases like rendering user profiles or dashboards.

### Key Concepts
- **EJS Template Engine:** A tool for embedding JavaScript in HTML to generate dynamic content server-side.
- **Setup in Express:** Configure Express to use EJS as the view engine; store templates in a `views` folder.
- **Rendering Templates:** Use `res.render(template, data)` to generate HTML from EJS files with dynamic data.
- **EJS Syntax:** Embed JS with `<% %>` for logic (e.g., loops, conditionals) and `<%= %>` for outputting values.
- **Dynamic Data:** Pass objects to templates for personalized content (e.g., user names, lists).
- **Integration with Express:** Combine with routes and controllers for scalable view rendering.

### Detailed Outline

#### 1. Introduction to EJS and Template Engines (02:13:14 - 02:14:31)
- **Concept:** A template engine generates HTML dynamically by embedding server-side logic, unlike static HTML files served by the HTTP module (Section 8). EJS is lightweight, using plain JavaScript for logic.
- **Why EJS?** Simplifies dynamic HTML (e.g., user-specific pages) without complex frameworks; great for MERN backends serving initial views or server-rendered apps.
- **Key Explanation (In Depth):** EJS lets you mix JS with HTML, executed on the server to produce final HTML sent to the client. Unlike React's client-side rendering, EJS pre-renders, reducing client load—useful for SEO or simpler apps. In MERN, you might use it for admin dashboards or initial pages before React hydration.
- **Best Practice:** Use EJS for server-side rendering when React isn’t needed or for hybrid apps.
- **Common Mistake to Avoid:** Confusing EJS with client-side frameworks—EJS runs on the server, not browser.
- **Timestamp Reference:** 02:13:14 – What is EJS; why use it.

#### 2. Setting Up EJS in Express (02:14:31 - 02:16:45)
- **Concept:** Install EJS via NPM and configure Express to use it as the view engine.
- **Steps:**
  - Install: `npm install ejs`.
  - Create a `views` folder for templates (Express convention).
  - Configure Express in `index.js`:
    ```javascript
    const express = require('express');
    const app = express();

    // Set EJS as view engine
    app.set('view engine', 'ejs');
    // Optional: Set views directory (default is ./views)
    app.set('views', './views');

    app.listen(3000, () => console.log('Server running on port 3000'));
    ```
- **Key Explanation (In Depth):** `app.set('view engine', 'ejs')` tells Express to use EJS for rendering files with `.ejs` extension in the `views` folder. Express automatically resolves paths, so `res.render('index')` loads `views/index.ejs`. This setup is lightweight, requiring minimal config, unlike heavier engines like Pug.
- **Best Practice:** Stick to `views` folder convention; ensure EJS is installed locally.
- **Common Mistake to Avoid:** Missing EJS install—leads to "Cannot find module 'ejs'" errors.
- **Timestamp Reference:** 02:14:31 – Install EJS; 02:15:31 – Configure Express.

#### 3. Rendering Basic EJS Templates (02:16:45 - 02:20:13)
- **Concept:** Use `res.render` to serve EJS files; templates are plain HTML with embedded JS.
- **Basic Example:**
  - Create `views/index.ejs`:
    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <h1>Welcome to my site</h1>
      </body>
    </html>
    ```
  - In `index.js`:
    ```javascript
    app.get('/', (req, res) => {
      res.render('index'); // Renders views/index.ejs
    });
    ```
  - **Run:** `node index.js`; visit `http://localhost:3000`.
  - **Expected Output (Browser):** HTML page with "Welcome to my site" heading.
- **Key Explanation (In Depth):** `res.render` processes the EJS file server-side, converting it to HTML sent to the client. No JS runs in the browser here—pure server output. This is faster than static file serving for dynamic content, as you’ll see with data next.
- **Best Practice:** Use `.ejs` extension; keep templates clean with minimal logic.
- **Common Mistake to Avoid:** Wrong file path—Express expects `views/`; typos cause 404s.
- **Timestamp Reference:** 02:16:45 – Creating first EJS file; 02:18:13 – Rendering.

#### 4. Passing Data to EJS Templates (02:20:13 - 02:24:13)
- **Concept:** Pass objects to `res.render` for dynamic content in templates.
- **Example with Data:**
  - Update `index.js`:
    ```javascript
    app.get('/', (req, res) => {
      res.render('index', { title: 'My App', user: 'Alice' });
    });
    ```
  - Update `views/index.ejs`:
    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <title><%= title %></title> <!-- Output variable -->
      </head>
      <body>
        <h1>Welcome, <%= user %></h1> <!-- Dynamic user -->
      </body>
    </html>
    ```
  - **Output:** Title shows "My App"; body shows "Welcome, Alice".
- **Key Explanation (In Depth):** `<%= variable %>` outputs escaped data (prevents XSS); `<% %>` for logic like loops. The second argument to `res.render` is an object whose keys become variables in the template. This is powerful for MERN—imagine passing user data from MongoDB to render a profile page.
- **Best Practice:** Escape outputs with `<%= %>` for safety; use `<%- %>` cautiously for HTML.
- **Common Mistake to Avoid:** Undefined variables—ensure all keys in render match template.
- **Timestamp Reference:** 02:20:13 – Passing data; 02:21:45 – Template variables.

#### 5. EJS Logic (Loops and Conditionals) (02:24:13 - 02:28:33)
- **Concept:** Use `<% %>` for JavaScript logic like conditionals or loops to generate dynamic HTML.
- **Example with Loop and Conditional:**
  - In `index.js`:
    ```javascript
    app.get('/', (req, res) => {
      res.render('index', {
        users: ['Alice', 'Bob', 'Charlie'],
        isAdmin: true
      });
    });
    ```
  - In `views/index.ejs`:
    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <h1>Users</h1>
        <ul>
          <% users.forEach(user => { %> <!-- Loop over array -->
            <li><%= user %></li>
          <% }) %>
        </ul>
        <% if (isAdmin) { %> <!-- Conditional -->
          <p>You are an admin!</p>
        <% } else { %>
          <p>Regular user</p>
        <% } %>
      </body>
    </html>
    ```
  - **Output:** List of users (Alice, Bob, Charlie) in `<ul>`; admin message if `isAdmin` is true.
- **Key Explanation (In Depth):** EJS runs JS inside `<% %>` on the server, generating HTML. Loops are common for lists (e.g., posts in a blog); conditionals for role-based rendering (e.g., admin features). This keeps templates dynamic but maintainable—avoid heavy logic to keep them clean.
- **Best Practice:** Move complex logic to controllers; keep EJS for presentation.
- **Common Mistake to Avoid:** Syntax errors in `<% %>`—debug by checking server errors in console.
- **Timestamp Reference:** 02:24:13 – Loops; 02:26:13 – Conditionals.

### Step-by-Step Workflow: Setting Up EJS with Express
1. **Initialize Project**
   - Create `ejs-demo` folder; run `npm init -y` and `npm install express ejs`.
   - Create `index.js` and `views` folder.
   - **Timestamp Reference:** 02:14:31 – Setup.
2. **Configure Express for EJS**
   - In `index.js`: Set view engine to EJS; add basic route with `res.render`.
   - Create `views/index.ejs` with static HTML.
3. **Add Dynamic Data**
   - Pass data in `res.render('index', { key: value })`.
   - Update `index.ejs` with `<%= key %>`.
4. **Implement Logic**
   - Add array and boolean to render; use loops/conditionals in EJS.
   - Run: `node index.js`; test at `http://localhost:3000`.
   - **Expected Output:** Dynamic HTML with lists/conditional content.
   - **Timestamp Reference:** 02:20:13 – Dynamic data; 02:24:13 – Logic.

### Key Explanations (Smooth, Deep, and Clear)
- **Server-Side Rendering:** EJS processes templates on the server, sending final HTML to the client—faster for initial loads than client-side React. In MERN, use for non-SPA pages (e.g., landing pages) or hybrid apps where SEO matters.
- **Data Flow:** Data flows from Express routes (or controllers) to EJS via `res.render`. This mirrors MVC: routes (controllers) fetch data (model), pass to EJS (view). Think of rendering a user list from MongoDB.
- **EJS Syntax Nuances:** `<%= %>` escapes for safety (prevents script injection); `<%- %>` for raw HTML (e.g., rich text from DB). Logic in `<% %>` is pure JS, so leverage familiar skills from Section 3.

### Common Mistakes to Avoid
- **Missing Views Folder:** Express looks for `views/`—create it or set custom path with `app.set('views', path)`.
- **No EJS Install:** Forgetting `npm install ejs`—leads to module errors.
- **Syntax Errors in EJS:** Mismatched `<% %>` or undefined vars—check server logs.
- **Overloading Templates:** Heavy JS in EJS—move to controllers for maintainability.

### Best Practices
- **Organize Views:** Subfolders (e.g., `views/partials`) for reusable snippets (not covered here but later).
- **Escape Outputs:** Use `<%= %>` unless HTML is trusted to avoid XSS.
- **Nodemon for Dev:** Add `nodemon index.js` to package.json scripts for auto-reload (Section 5).
- **Error Pages:** Render custom EJS for 404s (e.g., `res.render('404')`).

### Quick Activity Suggestion
- **Hands-On Practice:**
  1. Set up `ejs-demo` with Express and EJS.
  2. Create `index.ejs` with static HTML; render it.
  3. Pass title and user data; display dynamically.
  4. Add a users array and isAdmin flag; use loop/conditional.
  5. Test in browser; tweak data.
- **Troubleshooting:** Page blank? Check view path or EJS install. Errors? Look at console.
- **Optional:** Watch 02:13:14 - 02:28:33 for setup and demos.

### Key Takeaways
- EJS enables server-side dynamic HTML with simple JS syntax.
- Configure with `app.set('view engine', 'ejs')`; render via `res.render`.
- Use `<%= %>` for variables, `<% %>` for logic (loops/conditionals).
- Integrates with Express for scalable, dynamic views in MERN.

### Summary: What to Remember
EJS simplifies server-side rendering—set it up, render templates, pass data, and use JS for dynamic logic. It’s perfect for generating HTML before React or for non-SPA parts of MERN apps. This builds on Express routing and prepares for CRUD operations next, where EJS can display API results.
