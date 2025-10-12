# 🚀 Problem-Solving Mindset: HTTP Module (57:53 - 01:10:29)


## 1. Understanding the Problem

* Goal: Create a **server** that listens for requests (`req`) and responds (`res`).
* Tools: Node.js **http module** (core, no install).
* Why: This is the backbone of all web apps (Express.js later builds on this).

**Analogy:**
Think of Node.js as a *waiter in a restaurant*:

* Customer (browser) → makes a request (`req`).
* Waiter (server) → understands request and brings the right dish (response `res`).

---

## 2. Breaking It Down

To build a server, you need:

1. **Import module** → `const http = require('http');`
2. **Create server** → `http.createServer(callback)`

   * callback gets `req` and `res`
3. **Handle request** → check `req.url`, `req.method`
4. **Send response** → with headers + body using `res.end()`
5. **Listen** → `server.listen(port)`

---

## 3. Complexity Analysis

* **Time Complexity:** O(1) per request (basic routing checks).
* **Space Complexity:** O(1) (unless serving large files → depends on fs).
* **Scalability Concern:** Sync operations (like `fs.readFileSync`) block server—use async for real apps.

---

## 4. Edge Cases

* No `res.end` → client keeps waiting (browser spins).
* Port already in use → server crashes.
* Wrong `Content-Type` → browser misinterprets response.
* Case-sensitive URLs → `/About` ≠ `/about`.

---

## 5. Observations

* HTTP module is **low-level** → no built-in routing like Express.
* Everything is **manual** (if/else checks).
* Good for learning **how servers work under the hood**.

---

## 6. Detailed Concepts

* **req (IncomingMessage):** URL, method, headers, body (for POST).
* **res (ServerResponse):** statusCode, headers, response body.
* **Lifecycle:** Request comes in → server processes → response sent → connection closed.

---

## 7. Brute Force Approach – Hello World Server

### Pseudocode:

```
import http
create server with req,res
on request → respond with "Hello"
listen on port 3000
```

### Code:

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js server!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Dry Run:

* Visit `http://localhost:3000` → Browser sends GET `/` → Server responds “Hello”.

✅ Works, but only one response → not flexible.

---

## 8. Better Approach – Basic Routing

### Pseudocode:

```
if req.url === "/" → send homepage
else if req.url === "/about" → send about
else → send 404
```

### Code:

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to homepage');
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

### Dry Run:

* `/` → homepage
* `/about` → About page
* `/xyz` → 404

✅ Adds routing. Still manual.

---

## 9. Optimal Approach – Serve HTML & JSON

### Pseudocode:

```
if "/" → read index.html and send
if "/api" → send JSON
else 404
```

### Code:

```js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('index.html', 'utf8'); // sync for demo
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
  } else if (req.url === '/api') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Hello API' }));
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

### Dry Run:

* `/` → HTML page
* `/api` → JSON `{ message: "Hello API" }`
* `/random` → 404

✅ Flexible → Can serve frontend + APIs.

---

## 10. Testing

* Browser → test `/`, `/about`, `/api`.
* Postman → test JSON route.
* Kill stuck process if port busy:

  * Windows: `netstat -ano | findstr :3000` → `taskkill /PID <pid> /F`
  * Linux/Mac: `lsof -i :3000` → `kill -9 <pid>`

---

## 11. Optimization

* Use **async fs.readFile** instead of sync.
* Modularize routes into functions.
* Add logging middleware.
* Next step: switch to **Express.js** for clean routing.

---

## 12. Final Notes

* HTTP module = Node’s foundation for servers.
* Understand req/res cycle deeply.
* Always call `res.end`.
* Use correct `Content-Type`.

---

## 13. Reflection & Takeaways

* Now you understand how Node.js serves content at the lowest level.
* This knowledge helps you appreciate Express.js and other frameworks.
* Routing, headers, status codes = building blocks of APIs.

