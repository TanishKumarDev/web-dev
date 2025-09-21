## Section 8: HTTP Module (57:53 - 01:10:29)

With file system operations under your belt from Section 7, we now move to the HTTP module, a core Node.js tool for creating web servers and handling requests/responses. This section introduces building a basic HTTP server, understanding request/response objects, and serving simple content. The HTTP module is foundational for web apps, enabling Node.js to act as a backend server—paving the way for Express.js later. We'll use straightforward examples to demonstrate server setup. This connects directly to async concepts (next sections) since servers handle concurrent requests non-blockingly.

### Key Concepts
- **HTTP Module:** Built-in module for creating HTTP servers; import with `const http = require('http');`.
- **createServer:** Method to create a server instance that listens for requests and sends responses.
- **Request (req) and Response (res) Objects:** `req` holds incoming data (e.g., URL, method); `res` for outgoing (e.g., status, headers, body).
- **Listening on Ports:** Use `server.listen(port)` to start the server; common port: 3000.
- **Basic Routing:** Check `req.url` and `req.method` to handle different endpoints/methods.

### Detailed Outline

#### 1. Introduction to HTTP Module (57:53 - 58:57)
- **Concept:** HTTP module allows Node.js to create servers, handle HTTP requests, and send responses without external libs.
- **Key Explanation:** Core module—no install needed. Forms the basis for web APIs; Express builds on this.
- **Best Practice:** Start with simple servers to understand low-level HTTP before frameworks.
- **Common Mistake to Avoid:** Forgetting to import http—results in "http is not defined."
- **Timestamp Reference:** 57:53 – HTTP module intro and import.

#### 2. Creating a Basic HTTP Server (58:57 - 01:02:06)
- **Concept:** Use `http.createServer` to define request handling logic.
- **Basic Server Example:**
  ```javascript
  const http = require('http');

  // Purpose: Create server and handle requests
  const server = http.createServer((req, res) => {
    res.end('Hello from Node.js server!'); // Send response and close connection
  });

  // Start listening on a port
  server.listen(3000, () => {
    console.log('Server running on port 3000');
  });
  ```
  - **Run:** `node index.js`; visit `http://localhost:3000` in browser.
  - **Expected Output (Browser):** "Hello from Node.js server!"
  - **Expected Console:** "Server running on port 3000"
- **Key Explanation:** Callback takes `req` (request) and `res` (response); `res.end` sends data and ends response.
- **Best Practice:** Log server start for confirmation; use ports >1024 to avoid admin privileges.
- **Common Mistake to Avoid:** Not calling `res.end`—browser hangs waiting for response.
- **Timestamp Reference:** 58:57 – createServer; 01:00:06 – Listening and testing.

#### 3. Handling Requests and Responses (01:02:06 - 01:05:31)
- **Concept:** Access `req.url`, `req.method`, `req.headers` for routing; set `res.statusCode`, `res.setHeader`, `res.write`.
- **Enhanced Server with Routing:**
  ```javascript
  const http = require('http');

  const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
      res.statusCode = 200; // Success
      res.setHeader('Content-Type', 'text/plain'); // Header for text
      res.write('Welcome to homepage'); // Send body (can call multiple times)
      res.end(); // Close response
    } else if (req.url === '/about') {
      res.end('About page');
    } else {
      res.statusCode = 404;
      res.end('Not found');
    }
  });

  server.listen(3000, () => {
    console.log('Server running');
  });
  ```
  - **Test:** `/` → "Welcome to homepage"; `/about` → "About page"; others → "Not found".
- **Key Explanation:** `res.write` sends chunks; `res.end` finalizes. Status codes: 200 (OK), 404 (Not Found).
- **Best Practice:** Set `Content-Type` for proper rendering (e.g., 'application/json' for APIs).
- **Common Mistake to Avoid:** Case-sensitive URLs—`/About` ≠ `/about`.
- **Timestamp Reference:** 01:02:06 – req/res objects; 01:03:31 – Status/headers; 01:04:31 – Basic routing.

#### 4. Serving HTML or JSON (01:05:31 - 01:10:29)
- **Concept:** Use fs (from Section 7) to read files and serve them.
- **Example Serving HTML:**
  ```javascript
  const fs = require('fs');
  const http = require('http');

  const server = http.createServer((req, res) => {
    if (req.url === '/') {
      const html = fs.readFileSync('index.html', 'utf8'); // Read file
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
    }
  });

  server.listen(3000);
  ```
  - Assume `index.html`: `<h1>Hello</h1>`.
- **Serving JSON:**
  ```javascript
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Hello' }));
  ```
- **Key Explanation:** Combine with fs for dynamic content; JSON for APIs.
- **Best Practice:** Handle errors in file reads (e.g., try-catch for sync).
- **Common Mistake to Avoid:** Wrong content type—browser misinterprets (e.g., HTML as text).
- **Timestamp Reference:** 01:05:31 – Serving content; 01:07:29 – HTML/JSON examples.

### Step-by-Step Workflow: Building a Basic HTTP Server
1. **Set Up Folder**
   - Create `http-module` folder; add `index.js`.
   - **Timestamp Reference:** 57:53 – Setup.
2. **Import and Create Server**
   - `const http = require('http');`
   - `http.createServer((req, res) => { res.end('Hello'); });`
3. **Add Listening**
   - `server.listen(3000, () => { console.log('Running'); });`
   - Run: `node index.js`; test in browser.
4. **Implement Routing**
   - Check `req.url`/`req.method`; set status/headers; use `res.write`/`res.end`.
5. **Serve Files/JSON**
   - Integrate fs for HTML; `JSON.stringify` for data.
   - **Expected:** Server responds based on URL.
   - **Timestamp Reference:** 58:57 – Basic server; 01:02:06 – Routing.

### Key Explanations
- **req/res Lifecycle:** req incoming; process and res outgoing—end to close.
- **Ports:** 3000 common for dev; avoid 80/443 without setup.
- **No Built-in Routing:** Manual if/else; Express simplifies this.

### Common Mistakes to Avoid
- **Port Conflicts:** Running on occupied port—change or kill process.
- **Infinite Loops:** Forgetting `res.end`—request times out.
- **Method Mismatch:** Assuming GET—check `req.method`.
- **No Headers:** Missing `Content-Type`—content renders wrong.

### Best Practices
- **Log Requests:** `console.log(req.url)` for debugging.
- **Error Pages:** Custom 404 for user-friendliness.
- **Modularize:** Move handlers to functions as servers grow.
- **Localhost Testing:** Use `http://localhost:3000` or `http://127.0.0.1:3000`.

### Quick Activity Suggestion
- **Hands-On Practice:**
  1. Create `http-module` folder; `index.js` with basic server.
  2. Add routes: '/' (homepage), '/about', 404 fallback.
  3. Serve JSON on '/api' and HTML from file on '/'.
  4. Run and test in browser/Postman.
- **Troubleshooting:** Server not starting? Check port (kill with `kill -9 <pid>`).
- **Optional:** Watch 57:53 - 01:10:29 for server demos.

### Key Takeaways
- HTTP module creates servers with `createServer` and `listen`.
- Handle req/res: Check URL/method, set status/headers, send data.
- Basic for understanding web servers; leads to advanced async handling.
- Combine with fs for file serving.

### Summary: What to Remember
HTTP module turns Node.js into a web server—create, listen, handle req/res. Focus on routing and responses. This low-level knowledge clarifies how Express works; essential for APIs.
