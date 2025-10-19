# Node.js EJS Template Engine - Study Notes & Practical Implementation
---

## Table of Contents
1. [Introduction to EJS and Template Engines](#1-introduction-to-ejs-and-template-engines)
2. [Setting Up EJS in Express](#2-setting-up-ejs-in-express)
3. [Rendering Basic EJS Templates](#3-rendering-basic-ejs-templates)
4. [Passing Data to EJS Templates](#4-passing-data-to-ejs-templates)
5. [EJS Logic (Loops and Conditionals)](#5-ejs-logic-loops-and-conditionals)
6. [Practical Code Implementation](#6-practical-code-implementation)
7. [Step-by-Step Workflow](#7-step-by-step-workflow)
8. [Key Explanations and Best Practices](#8-key-explanations-and-best-practices)
9. [Key Takeaways](#9-key-takeaways)
10. [Connection to Backend Development Roadmap](#10-connection-to-backend-development-roadmap)

---

## 1. Introduction to EJS and Template Engines
*Timestamp: [02:13:14 - 02:14:31]*

### Concept Simplified
**EJS (Embedded JavaScript)** is a template engine that allows embedding JavaScript in HTML to generate dynamic content server-side. Unlike static HTML files served by Node’s HTTP module (Section 8), EJS enables dynamic rendering for user-specific or data-driven pages.

### Key Points
- **Purpose**: Generates HTML dynamically by combining JS logic with HTML, ideal for server-side rendering.
- **Why Use It?**: Simplifies creating dynamic pages (e.g., user profiles) without complex frameworks; supports MERN apps for initial views or SEO-friendly pages.
- **Key Explanation**: EJS runs JavaScript on the server to produce final HTML, reducing client-side load compared to React. In MERN, it’s useful for admin dashboards or hybrid apps before React hydration.
- **Best Practice**: Use EJS for server-rendered pages or when client-side rendering isn’t needed.
- **Common Mistake**: Confusing EJS with client-side frameworks—EJS executes on the server, not in the browser.

*Comment*: Think of EJS as a server-side HTML generator that fills in placeholders with data, like a mail-merge for web pages.

---

## 2. Setting Up EJS in Express
*Timestamp: [02:14:31 - 02:16:45]*

### Concept Simplified
Configure Express to use EJS as the view engine, storing templates in a `views` folder. Install EJS via NPM and set it up with minimal configuration.

### Code Example
```javascript
const express = require('express');
const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');
// Set views directory (optional, defaults to ./views)
app.set('views', './views');

app.listen(3000, () => console.log('Server running on port 3000'));
```

*Comment*: `app.set('view engine', 'ejs')` enables EJS rendering; templates in `views/` are automatically resolved.

### Key Points
- **Installation**: Run `npm install ejs` in a project with `package.json` (Section 5).
- **Configuration**: `app.set('view engine', 'ejs')` links Express to EJS; `views` folder is the convention.
- **Key Explanation**: Express resolves `.ejs` files in `views/` when `res.render` is called (e.g., `res.render('index')` loads `views/index.ejs`). EJS is lightweight, requiring no complex setup compared to engines like Pug.
- **Best Practice**: Use `views` folder; install EJS locally for version control.
- **Common Mistake**: Forgetting `npm install ejs`—leads to "Cannot find module 'ejs'" errors.

---

## 3. Rendering Basic EJS Templates
*Timestamp: [02:16:45 - 02:20:13]*

### Concept Simplified
Use `res.render(templateName)` to render an EJS file from the `views` folder, generating HTML sent to the client. Templates are HTML with embedded JavaScript for dynamic content.

### Code Example
- **views/index.ejs**:
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
- **index.js**:
  ```javascript
  const express = require('express');
  const app = express();

  app.set('view engine', 'ejs');

  app.get('/', (req, res) => {
      res.render('index'); // Renders views/index.ejs
  });

  app.listen(3000, () => console.log('Server running on port 3000'));
  ```

*Comment*: Run with `node index.js` and visit `http://localhost:3000` to see the rendered HTML.

### Key Points
- **Rendering**: `res.render` processes the EJS file server-side, sending HTML to the client.
- **Key Explanation**: Unlike static file serving (e.g., `res.sendFile`), EJS enables dynamic content generation. No JavaScript runs in the browser—pure server output.
- **Best Practice**: Use `.ejs` extension; keep templates simple for clarity.
- **Common Mistake**: Incorrect file path—Express expects `views/`; typos cause 404 errors.

---

## 4. Passing Data to EJS Templates
*Timestamp: [02:20:13 - 02:24:13]*

### Concept Simplified
Pass data to `res.render` as an object to populate templates dynamically. Use `<%= %>` to output variables and escape them for security.

### Code Example
- **index.js**:
  ```javascript
  app.get('/', (req, res) => {
      res.render('index', { title: 'My App', user: 'Alice' });
  });
  ```
- **views/index.ejs**:
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title><%= title %></title>
    </head>
    <body>
      <h1>Welcome, <%= user %></h1>
    </body>
  </html>
  ```

*Comment*: Browser shows `<title>My App</title>` and "Welcome, Alice" in the body.

### Key Points
- **Data Passing**: The second argument to `res.render` is an object; its keys become template variables.
- **EJS Syntax**: `<%= variable %>` outputs escaped data (prevents XSS); `<%- variable %>` outputs raw HTML (use cautiously).
- **Key Explanation**: Data flows from routes/controllers to EJS, enabling personalized pages (e.g., user profiles from MongoDB). Escaping ensures security against malicious input.
- **Best Practice**: Use `<%= %>` for user inputs; validate data before rendering.
- **Common Mistake**: Undefined variables—ensure all keys in `res.render` match template usage.

---

## 5. EJS Logic (Loops and Conditionals)
*Timestamp: [02:24:13 - 02:28:33]*

### Concept Simplified
Use `<% %>` to embed JavaScript logic (e.g., loops, conditionals) in EJS templates for dynamic HTML generation, such as rendering lists or role-based content.

### Code Example
- **index.js**:
  ```javascript
  app.get('/', (req, res) => {
      res.render('index', {
          users: ['Alice', 'Bob', 'Charlie'],
          isAdmin: true
      });
  });
  ```
- **views/index.ejs**:
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>My App</title>
    </head>
    <body>
      <h1>Users</h1>
      <ul>
        <% users.forEach(user => { %>
          <li><%= user %></li>
        <% }) %>
      </ul>
      <% if (isAdmin) { %>
        <p>You are an admin!</p>
      <% } else { %>
        <p>Regular user</p>
      <% } %>
    </body>
  </html>
  ```

*Comment*: Browser shows a list of users and "You are an admin!" if `isAdmin` is true.

### Key Points
- **Logic Syntax**: `<% %>` runs JavaScript (e.g., `forEach`, `if`) on the server to generate HTML.
- **Key Explanation**: Loops are ideal for lists (e.g., blog posts); conditionals for role-based UI (e.g., admin panels). Keep logic light to maintain readable templates.
- **Best Practice**: Move complex logic to controllers (Section 13); use EJS for presentation.
- **Common Mistake**: Syntax errors in `<% %>`—debug via server console logs.

---

## 6. Practical Code Implementation
*Timestamp: [02:13:14 - 02:28:33]*

Below is a complete implementation (`ejs_demo`) that demonstrates EJS setup, rendering, dynamic data, and logic, integrating with `fs.promises` and Path (Sections 6, 7, and 11) for file-based data storage. It includes an exercise simulating a user dashboard with dynamic rendering.

### Directory Structure
```
ejs-demo/
├── views/
│   ├── index.ejs
│   ├── users.ejs
├── users.json
├── index.js
├── package.json
```

### Code
- **index.js**:
  ```javascript
  const express = require('express');
  const fs = require('fs').promises;
  const path = require('path');
  const app = express();

  // Set EJS as view engine
  app.set('view engine', 'ejs');
  app.set('views', './views');

  // Middleware: JSON parsing for POST
  app.use(express.json());

  // Helper function to log sections
  const logSection = (title) => console.log(`\n=== ${title} ===`);

  // 1. Root Route with Static EJS
  app.get('/', (req, res) => {
      res.render('index', { title: 'My App', user: 'Guest' });
  });

  // 2. Users Route with Dynamic Data
  app.get('/users', async (req, res) => {
      try {
          const data = await fs.readFile(path.join(__dirname, 'users.json'), 'utf8');
          const users = JSON.parse(data);
          res.render('users', { title: 'Users List', users, isAdmin: true });
      } catch (err) {
          res.status(500).send('Server error');
      }
  });

  // 3. Exercise: User Dashboard with Route Parameter
  app.get('/users/:id', async (req, res) => {
      try {
          const data = await fs.readFile(path.join(__dirname, 'users.json'), 'utf8');
          const users = JSON.parse(data);
          const user = users.find(u => u.id === parseInt(req.params.id));
          if (!user) return res.status(404).render('index', { title: 'Error', user: 'Not found' });
          res.render('index', { title: `Profile: ${user.name}`, user: user.name });
      } catch (err) {
          res.status(500).send('Server error');
      }
  });

  // Start server
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
      logSection(`Server running on http://localhost:${port}`);
  });
  ```

- **views/index.ejs**:
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title><%= title %></title>
    </head>
    <body>
      <h1>Welcome, <%= user %></h1>
      <a href="/users">View Users</a>
    </body>
  </html>
  ```

- **views/users.ejs**:
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title><%= title %></title>
    </head>
    <body>
      <h1>Users</h1>
      <ul>
        <% users.forEach(user => { %>
          <li><a href="/users/<%= user.id %>"><%= user.name %></a></li>
        <% }) %>
      </ul>
      <% if (isAdmin) { %>
        <p>You are an admin!</p>
      <% } else { %>
        <p>Regular user</p>
      <% } %>
      <a href="/">Back to Home</a>
    </body>
  </html>
  ```

- **users.json**:
  ```json
  [
      { "id": 1, "name": "Alice" },
      { "id": 2, "name": "Bob" },
      { "id": 3, "name": "Charlie" }
  ]
  ```

### Instructions to Run
1. Create a folder: `mkdir ejs-demo && cd ejs-demo`.
2. Initialize project: `npm init -y && npm install express ejs`.
3. Create `views` folder with `index.ejs` and `users.ejs`.
4. Create `users.json` with sample data.
5. Create `index.js` and copy the code above.
6. Run: `node index.js`.
7. Test in a browser:
   - `http://localhost:3000/` → "Welcome, Guest" with link to users.
   - `http://localhost:3000/users` → List of users with admin message.
   - `http://localhost:3000/users/1` → "Welcome, Alice".
   - `http://localhost:3000/users/999` → "Welcome, Not found".

### Expected Output
**Console**:
```
=== Server running on http://localhost:3000 ===
```

**Browser**:
- `/`: `<h1>Welcome, Guest</h1>` with a link to `/users`.
- `/users`: `<ul>` with "Alice", "Bob", "Charlie" (clickable to profiles) and "You are an admin!".
- `/users/1`: `<h1>Welcome, Alice</h1>`.
- `/users/999`: `<h1>Welcome, Not found</h1>`.

*Comment*: The implementation demonstrates EJS setup, dynamic rendering, loops, conditionals, and integration with `fs.promises` for a user dashboard, simulating a MERN app’s server-rendered pages.

---

## 7. Step-by-Step Workflow
*Timestamp: [02:13:14 - 02:28:33]*

### How to Set Up EJS with Express
1. **Initialize Project**:
   - Create: `mkdir ejs-demo && cd ejs-demo`.
   - Run: `npm init -y && npm install express ejs`.
   - Create `views` folder and `users.json`.

2. **Configure Express for EJS**:
   - In `index.js`: Set `app.set('view engine', 'ejs')` and `app.set('views', './views')`.
   - Add a root `GET` route with `res.render('index')`.

3. **Create Basic Template**:
   - Create `views/index.ejs` with static HTML.
   - Test rendering at `http://localhost:3000`.

4. **Add Dynamic Data**:
   - Pass `{ title, user }` in `res.render`; update `index.ejs` with `<%= title %>`, `<%= user %>`.
   - Verify dynamic output in browser.

5. **Implement Logic**:
   - Create `views/users.ejs` with a loop for users and conditional for admin status.
   - Add `/users` route with data from `users.json` using `fs.promises`.
   - Add `/users/:id` route for user profiles.

6. **Run and Test**:
   - Run: `node index.js`.
   - Test routes in browser; check for errors (e.g., missing files).

*Comment*: This workflow mirrors building a server-rendered MERN app, like an admin dashboard or landing page.

---

## 8. Key Explanations and Best Practices
*Timestamp: [02:13:14 - 02:28:33]*

### Key Explanations
- **Server-Side Rendering**: EJS generates HTML on the server, sending static content to the client, ideal for SEO or lightweight pages in MERN apps.
- **Data Flow**: Routes/controllers fetch data (e.g., from `users.json` or MongoDB later) and pass it to EJS via `res.render`, following MVC principles (Section 13).
- **EJS Syntax**: `<%= %>` escapes output for security; `<%- %>` for raw HTML (e.g., rich text); `<% %>` for logic like loops or conditionals.
- **Integration**: Combines with Express’s routing and async/await (Sections 11, 13) for dynamic, data-driven views.

### Common Mistakes to Avoid
1. **Missing Views Folder**: Express expects `views/`—create it or set custom path.
2. **No EJS Install**: Forgetting `npm install ejs`—causes module errors.
3. **EJS Syntax Errors**: Mismatched `<% %>` or undefined variables—check server logs.
4. **Heavy Template Logic**: Overloading EJS with complex JS—move to controllers.

### Best Practices
1. **Organize Views**: Use `views/partials` for reusable snippets (later sections).
2. **Secure Outputs**: Use `<%= %>` for user inputs to prevent XSS attacks.
3. **Use Nodemon**: Add `"start": "nodemon index.js"` to `package.json` for auto-reload (Section 5).
4. **Error Handling**: Render custom EJS templates for 404s or errors (e.g., `res.render('404')`).

---

## 9. Key Takeaways
- **EJS**: Lightweight template engine for server-side HTML rendering with embedded JavaScript.
- **Setup**: Configure with `app.set('view engine', 'ejs')`; store templates in `views/`.
- **Dynamic Rendering**: Use `res.render` with data; `<%= %>` for variables, `<% %>` for logic.
- **Why It Matters**: Enables dynamic, server-rendered pages for MERN apps, ideal for SEO or hybrid setups.
