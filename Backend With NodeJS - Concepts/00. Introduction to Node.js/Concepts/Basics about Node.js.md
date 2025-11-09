# Topic 1 Intro to NodeJS

### **Concept**

**What is Node.js?**

* Node.js is a **runtime environment** that lets you run **JavaScript outside the browser**.
* It uses **V8 Engine** (the same engine as Chrome) to execute JS code.
* It’s built on **event-driven**, **non-blocking I/O**, and **asynchronous programming** principles — which make it ideal for building **fast, scalable network applications**.

---

### **Why Node.js?**

| Feature                        | Explanation                                     |
| ------------------------------ | ----------------------------------------------- |
| **Single Language Stack (JS)** | You can use JS both on frontend & backend.      |
| **Non-blocking I/O**           | Handles multiple requests concurrently.         |
| **Fast Execution**             | Built on Chrome’s V8 engine (C++ based).        |
| **Huge Ecosystem**             | npm provides thousands of open-source packages. |
| **Scalable Architecture**      | Perfect for microservices & APIs.               |

---

### **How Node.js Works (Architecture Overview)**

1. **Request comes in →**
2. **Event Loop checks the request →**

   * If **simple (non-blocking)** → handled immediately.
   * If **complex (I/O task)** → goes to **Thread Pool** via **libuv**.
3. **When work completes → callback pushed to event queue → executed.**

So Node.js handles **thousands of concurrent requests** without blocking.

---

### **Code Example 1: Simple Node.js Server**

```js
// ===========================
// Example: Basic HTTP Server
// ===========================

// Import the 'http' module (built-in)
const http = require('http');

// Create the server using createServer() method
const server = http.createServer((req, res) => {
  // Send a response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Write a message to the client
  res.end('Hello from Node.js Server!');
});

// Define a port to listen on
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

---

### **Output**

```
Server running at http://localhost:3000
```

When you open your browser and visit:
➡ `http://localhost:3000`
You’ll see:
`Hello from Node.js Server!`

---

### **Dependencies**

* No external dependency (uses core module `http`).

---

### **Use Case Example**

**Problem:** Build a server that serves “Hello World” on port 5000.
**Why:** To understand how Node listens and responds to requests.
**How:** Using the built-in `http` module (as above).
**Mini Project:** Extend this small server to serve different routes:

```js
if (req.url === "/") res.end("Home Page");
else if (req.url === "/about") res.end("About Page");
else res.end("404 Not Found");
```

---

### **Notes**

* Node is **single-threaded**, but it uses **libuv** to handle async tasks in background threads.
* Best for **I/O-heavy apps** like APIs, chats, real-time dashboards — not for CPU-heavy work like image processing.

---
