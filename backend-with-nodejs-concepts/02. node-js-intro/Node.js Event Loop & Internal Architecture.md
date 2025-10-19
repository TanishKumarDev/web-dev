# Node.js Event Loop & Internal Architecture - Study Notes

---

## Table of Contents
1. [Introduction to Node.js Architecture](#1-introduction-to-nodejs-architecture)
2. [Core Components of Node.js](#2-core-components-of-nodejs)
3. [How Node.js Executes Code](#3-how-nodejs-executes-code)
4. [Event Loop Phases](#4-event-loop-phases)
5. [Thread Pool & CPU-Intensive Tasks](#5-thread-pool--cpu-intensive-tasks)
6. [Practical Code Examples](#6-practical-code-examples)
7. [Node.js vs Multi-threaded Languages](#7-nodejs-vs-multi-threaded-languages)
8. [Performance Optimization Tips](#8-performance-optimization-tips)
9. [Key Takeaways](#9-key-takeaways)
10. [Connection to Backend Development Roadmap](#10-connection-to-backend-development-roadmap)

---

## 1. Introduction to Node.js Architecture
*Timestamp: [0:00 - 5:00]* (Assumed for intro section)

### Concept Simplified
Node.js is a runtime environment that runs JavaScript outside the browser, ideal for building fast and scalable backend applications. It uses a **single-threaded, event-driven model**, meaning it handles many tasks at once without creating a new thread for each request, unlike traditional servers (e.g., Java or PHP).

### Key Points
- **Single Thread**: One main thread runs your JavaScript code.
- **Event Loop**: A mechanism that manages asynchronous tasks (e.g., file reading, network requests).
- **Non-blocking I/O**: Tasks like reading files or making API calls don’t stop the main thread.
- **Thread Pool**: Handles heavy tasks (e.g., encryption) in the background.

### Why It Matters
This architecture makes Node.js fast for handling many simultaneous connections, such as in chat apps or APIs, but requires careful handling for CPU-heavy tasks.

---

## 2. Core Components of Node.js
*Timestamp: [5:00 - 10:00]*

### 2.1 V8 JavaScript Engine
- **What is it?**: V8 is Google’s engine (written in C++) that compiles and runs JavaScript code efficiently.
- **Role**: Turns your JavaScript into machine code for fast execution.

```javascript
// Example: Simple function executed by V8
function add(a, b) {
    return a + b; // V8 compiles this to machine code
}
console.log(add(5, 10)); // Output: 15
```

*Comment*: V8 is why Node.js is fast—it translates JavaScript into low-level instructions your computer understands.

### 2.2 libuv Library
- **What is it?**: A C library that powers Node.js’s asynchronous features.
- **Role**: Provides the event loop and thread pool for handling I/O (e.g., file operations) and CPU-heavy tasks.

*Key Features*:
- Manages the event loop.
- Offloads heavy tasks to a thread pool (default: 4 threads).
- Handles file operations, network requests, and more.

*Comment*: Think of libuv as the engine room of Node.js—it manages the behind-the-scenes work so your code runs smoothly.

### 2.3 Architecture Overview
Node.js combines:
- **V8 Engine**: Executes JavaScript.
- **libuv**: Handles asynchronous tasks and thread pool.
- **Node.js Bindings**: Connects JavaScript to C++ libraries for tasks like file operations (`fs`), networking (`http`), and encryption (`crypto`).

*Comment*: These components work together to make Node.js efficient for I/O-heavy tasks like APIs or streaming.

---

## 3. How Node.js Executes Code
*Timestamp: [10:00 - 15:00]*

### Concept Simplified
When you run `node index.js`, Node.js follows a specific process to execute your code:
1. Creates a process and initializes the main thread.
2. Runs top-level (synchronous) code immediately.
3. Loads required modules (e.g., `fs`, `http`).
4. Registers asynchronous tasks (e.g., timers, file reads).
5. Starts the event loop to handle these tasks.

### Step-by-Step Workflow
Here’s an example to show the execution flow:

```javascript
// index.js
const fs = require('fs');

// Step 1: Top-level code runs first
console.log('Starting program...');

// Step 2: Register asynchronous tasks
setTimeout(() => {
    console.log('Timer finished'); // Runs after 0ms in the event loop
}, 0);

fs.readFile('example.txt', 'utf8', (err, data) => {
    console.log('File read:', data.length, 'characters'); // Runs after file is read
});

// Step 3: Event loop takes over
console.log('Top-level code done. Event loop starts...');

// Output:
// Starting program...
// Top-level code done. Event loop starts...
// Timer finished
// File read: <length> characters
```

*Comment*: Top-level code runs first, then the event loop handles asynchronous tasks in a specific order.

### Common Mistake
- **Blocking the main thread**: Avoid synchronous operations (e.g., `fs.readFileSync`) in top-level code, as they pause execution.

*Best Practice*: Always use asynchronous methods (e.g., `fs.readFile`) to keep the event loop responsive.

---

## 4. Event Loop Phases
*Timestamp: [15:00 - 25:00]*

### Concept Simplified
The **event loop** is like a to-do list manager. It processes asynchronous tasks in six phases, ensuring tasks like timers, file reads, or network requests are handled efficiently without blocking the main thread.

### Event Loop Phases
1. **Timers**: Executes `setTimeout` and `setInterval` callbacks.
2. **Pending Callbacks**: Handles I/O callbacks (e.g., file read completions).
3. **Idle, Prepare**: Internal phase for Node.js housekeeping (not directly accessible).
4. **Poll**: Retrieves new I/O events (e.g., incoming HTTP requests).
5. **Check**: Runs `setImmediate` callbacks.
6. **Close Callbacks**: Handles cleanup (e.g., closing an HTTP server).

### Code Example
```javascript
const fs = require('fs');

console.log('Start');

// Phase 1: Timers
setTimeout(() => {
    console.log('Timer callback'); // Runs in Timers phase
}, 0);

// Phase 2: I/O Callbacks
fs.readFile(__filename, 'utf8', () => {
    console.log('File read callback'); // Runs in Pending Callbacks phase
});

// Phase 5: Check
setImmediate(() => {
    console.log('Immediate callback'); // Runs in Check phase
});

// Microtasks (run between phases)
process.nextTick(() => {
    console.log('Next tick callback'); // Runs immediately after current phase
});

console.log('End');

// Output:
// Start
// End
// Next tick callback
// Timer callback
// Immediate callback
// File read callback
```

*Comment*: `process.nextTick` and Promises run in **microtask queues**, which have higher priority and execute between phases.

### Key Insight: `setTimeout` vs `setImmediate`
- **Top-level code**: Order is unpredictable (depends on system performance).
- **Inside I/O callbacks**: `setImmediate` runs before `setTimeout` because the Check phase comes before the Timers phase.

```javascript
fs.readFile(__filename, () => {
    setTimeout(() => console.log('Timer in I/O'), 0);
    setImmediate(() => console.log('Immediate in I/O'));
    // Output: Immediate in I/O, then Timer in I/O
});
```

*Common Mistake*: Assuming `setTimeout(..., 0)` always runs before `setImmediate`. It depends on the context!

*Best Practice*: Use `setImmediate` for tasks that need to run after the current I/O cycle, and `setTimeout` for delayed tasks.

---

## 5. Thread Pool & CPU-Intensive Tasks
*Timestamp: [25:00 - 35:00]*

### Concept Simplified
The **thread pool** is a set of background threads (default: 4) that handle CPU-heavy tasks (e.g., encryption, compression) so the main thread stays free for I/O tasks.

### Key Points
- **I/O Tasks**: Handled by the event loop (e.g., file reads, HTTP requests).
- **CPU Tasks**: Offloaded to the thread pool (e.g., hashing passwords with `crypto.pbkdf2`).
- **Thread Pool Size**: Default is 4 threads, but you can adjust it based on your app’s needs.

### Code Example
```javascript
const crypto = require('crypto');

console.log('Starting CPU-intensive tasks...');

for (let i = 1; i <= 6; i++) {
    crypto.pbkdf2(`password${i}`, 'salt', 100000, 64, 'sha512', () => {
        console.log(`Task ${i} completed`); // Uses thread pool
    });
}

// Output (approximate):
// Starting CPU-intensive tasks...
// Task 1 completed
// Task 2 completed
// Task 3 completed
// Task 4 completed
// Task 5 completed
// Task 6 completed
```

*Comment*: With 6 tasks and a default thread pool of 4, tasks 5 and 6 wait until a thread is free, showing thread pool saturation.

### Adjusting Thread Pool Size
```javascript
// Set thread pool size before requiring crypto
process.env.UV_THREADPOOL_SIZE = '6'; // Increase to 6 threads

const crypto = require('crypto');
for (let i = 1; i <= 6; i++) {
    crypto.pbkdf2(`password${i}`, 'salt', 100000, 64, 'sha512', () => {
        console.log(`Task ${i} completed`);
    });
}
```

*Comment*: Increasing the thread pool size can speed up CPU-heavy tasks but uses more memory.

*Common Mistake*: Setting the thread pool size too high, which can overload the system.

*Best Practice*: Set thread pool size to 1.5–2x the number of CPU cores for CPU-heavy apps (use `require('os').cpus().length` to check cores).

---

## 6. Practical Code Examples
*Timestamp: [35:00 - 50:00]*

### 6.1 Real-World Example: Combining Event Loop and Thread Pool
This example shows how Node.js handles different types of tasks together.

```javascript
const fs = require('fs');
const crypto = require('crypto');
const http = require('http');

console.log('Starting demo...');

// Timer (Event Loop)
setTimeout(() => console.log('Timer done'), 0);

// File read (Event Loop)
fs.readFile(__filename, 'utf8', () => {
    console.log('File read done');
});

// CPU-intensive task (Thread Pool)
crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
    console.log('Hashing done');
});

// HTTP server (Event Loop)
const server = http.createServer((req, res) => {
    res.end('Hello World');
}).listen(3000, () => console.log('Server running on port 3000'));

// Output (approximate):
// Starting demo...
// Server running on port 3000
// Timer done
// File read done
// Hashing done
```

*Comment*: The event loop handles timers, file reads, and HTTP requests, while the thread pool handles hashing. This shows Node.js’s ability to juggle multiple task types.

### 6.2 Blocking vs Non-blocking
```javascript
const crypto = require('crypto');

console.log('Blocking vs Non-blocking...');

// Blocking (Synchronous)
const startSync = Date.now();
crypto.pbkdf2Sync('password', 'salt', 100000, 64, 'sha512');
console.log(`Sync took ${Date.now() - startSync}ms`);

// Non-blocking (Asynchronous)
const startAsync = Date.now();
crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
    console.log(`Async took ${Date.now() - startAsync}ms`);
});
setImmediate(() => console.log('Event loop still responsive!'));

// Output:
// Blocking vs Non-blocking...
// Sync took ~200ms
// Event loop still responsive!
// Async took ~200ms
```

*Comment*: Synchronous operations block the event loop, while asynchronous ones let it process other tasks.

*Common Mistake*: Using synchronous methods (e.g., `pbkdf2Sync`) in production code, which can freeze the server.

*Best Practice*: Always use asynchronous methods for I/O and CPU tasks to keep the event loop free.

---

## 7. Node.js vs Multi-threaded Languages
*Timestamp: [50:00 - 55:00]*

### Concept Simplified
Node.js uses one main thread with an event loop, making it great for I/O-heavy tasks. Multi-threaded languages (e.g., Java, PHP) create a thread per request, which is better for CPU-heavy tasks but can be slower for I/O due to thread management overhead.

### Comparison
- **Node.js**:
  - Single thread + event loop.
  - Non-blocking I/O.
  - Thread pool for CPU tasks.
  - Best for: APIs, real-time apps, streaming.
- **Multi-threaded**:
  - Thread-per-request model.
  - Blocking I/O.
  - True parallelism for CPU tasks.
  - Best for: Heavy computations, image processing.

### Code Example: Hybrid Approach
Node.js can use **worker threads** for CPU-heavy tasks to mimic multi-threaded behavior.

```javascript
const { Worker, isMainThread } = require('worker_threads');

if (isMainThread) {
    console.log('Main thread: Handling I/O...');
    const worker = new Worker(__filename);
    worker.on('message', (msg) => console.log(`Worker says: ${msg}`));
    worker.postMessage('Do heavy work');
} else {
    parentPort.on('message', () => {
        let result = 0;
        for (let i = 0; i < 1e8; i++) result += Math.sqrt(i); // CPU-heavy
        parentPort.postMessage('Work done!');
    });
}

// Output:
// Main thread: Handling I/O...
// Worker says: Work done!
```

*Comment*: Worker threads let Node.js handle CPU tasks without blocking the main thread, combining the best of both worlds.

---

## 8. Performance Optimization Tips
*Timestamp: [55:00 - 60:00]*

### Concept Simplified
To make Node.js apps fast and scalable:
- Keep the event loop responsive by avoiding blocking operations.
- Optimize the thread pool for CPU tasks.
- Manage memory efficiently to prevent leaks.

### Key Tips
1. **Use Asynchronous Methods**:
   - Avoid: `fs.readFileSync`.
   - Use: `fs.readFile`.

2. **Process Large Data in Chunks**:
   ```javascript
   const fs = require('fs');
   const stream = fs.createReadStream('large-file.txt', { highWaterMark: 64 * 1024 });
   stream.on('data', (chunk) => console.log(`Processed ${chunk.length} bytes`));
   ```

3. **Optimize Thread Pool**:
   - Set `UV_THREADPOOL_SIZE` based on CPU cores (e.g., `process.env.UV_THREADPOOL_SIZE = '8'`).

4. **Monitor Memory**:
   ```javascript
   console.log(`Heap used: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
   ```

5. **Avoid Memory Leaks**:
   - Remove event listeners: `emitter.removeListener('event', callback)`.
   - Clear intervals: `clearInterval(timer)`.

*Common Mistake*: Processing large datasets in memory (e.g., loading a huge file at once) can crash the app.

*Best Practice*: Use streams for large data and monitor event loop latency with tools like `setImmediate`.

---

## 9. Key Takeaways
- **Event Loop**: Manages asynchronous tasks in six phases (Timers, I/O, Check, etc.).
- **Thread Pool**: Handles CPU-heavy tasks (default: 4 threads).
- **Microtasks**: `process.nextTick` and Promises run between phases with high priority.
- **Non-blocking I/O**: Keeps Node.js fast for I/O tasks like file reads or HTTP requests.
- **Optimization**: Use async methods, streams, and worker threads; adjust thread pool size wisely.
- **Node.js Strengths**: Best for I/O-heavy apps (e.g., APIs, real-time systems); less ideal for CPU-heavy tasks unless using worker threads.

