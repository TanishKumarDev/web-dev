# Node.js Internal Architecture: A Deep Dive

[Node.js Architecture: Understanding Node.js Architecture](https://medium.com/@ibrahimlanre1890/node-js-architecture-understanding-node-js-architecture-5fb32879b994)
![Node.js Architecture: Understanding Node.js Architecture](https://www.hostinger.com/ph/tutorials/wp-content/uploads/sites/44/2024/09/nodejs-workflow-diagram.png)
![Node.js Architecture: Understanding Node.js Architecture](https://admin.wac.co/uploads/Node_js_Architecture_7486a783aa.jpg)

## 1. Core Components of Node.js
Node.js is built from two major components:
- **V8 Engine**: 
  - Developed by Google (used in Chrome).
  - Written in C++ and JavaScript.
  - Responsible for executing JavaScript code.
- **libuv Library**:
  - Implements the **event loop** (handles asynchronous operations efficiently on a single thread).
  - Provides a **thread pool** (for CPU-intensive tasks).
  
Node.js combines V8 and libuv to run JavaScript on the server-side, enabling efficient handling of asynchronous code without blocking the main thread.

## 2. Node.js Execution Process
When running a command like `node index.js`:
1. **Process Creation**: A single Node.js process is created, running on the **main thread** (single-threaded by default).
2. **Initialization Steps** (all on the main thread):
   - **Project Initialization**: Sets up the environment.
   - **Top-Level Code Execution**: Runs code not inside functions or callbacks (e.g., direct `console.log` statements, variable declarations).
   - **Require Modules**: Loads imported modules (e.g., `const fs = require('fs');`) in sequence.
   - **Register Event Callbacks**: Registers callbacks for events (e.g., server requests, timers) in the event loop (they don't run yet).
   - **Start Event Loop**: Begins processing asynchronous tasks.
3. **Thread Pool**:
   - Separate from the main thread.
   - By default, 4 threads (configurable up to 128 via `process.env.UV_THREADPOOL_SIZE`).
   - Used for **CPU-intensive tasks** (e.g., file system operations, cryptography, compression) to avoid blocking the main thread.

### Visualization: Node.js Process Structure
- **Main Thread**: Handles event loop, non-CPU-intensive tasks.
- **Thread Pool**: 4+ threads for offloading heavy work.
- Event loop starts after top-level code and registrations.

)
## 3. Event Loop Mechanics
The event loop runs on the main thread and processes tasks in phases. It loops until no tasks are pending.

### Phases of the Event Loop (in order):
1. **Timers Phase**: Executes callbacks from expired timers (e.g., `setTimeout`, `setInterval` with 0ms or elapsed time).
2. **I/O Polling Phase**: Handles callbacks from completed I/O operations (e.g., file reads via `fs.readFile` in async mode).
3. **SetImmediate Phase**: Executes `setImmediate` callbacks (runs after I/O but before next loop iteration).
4. **Close Callbacks Phase**: Handles close events (e.g., server/socket close callbacks).

After phases:
- Check for pending tasks.
- If pending: Loop back to Timers phase.
- If none: Exit the process.

### Additional Notes:
- **Promise Callbacks**: Run during phase transitions (e.g., between Timers → I/O, etc.) if resolved.
- **Non-Deterministic Behavior**: For top-level `setTimeout(..., 0)` vs. `setImmediate`, order depends on process performance (not guaranteed).
- Phases are FIFO queues.

### Visualization: Event Loop Cycle
```
Start → Timers (expired setTimeout/setInterval) → I/O Polling (file reads, etc.) → SetImmediate → Close Callbacks → Pending? (Yes: Loop back | No: Exit)
```

## 4. Practical Examples and Outputs
The video demonstrates concepts with code. Below are key examples, their execution steps (based on architecture), and observed outputs.

### Example 1: Basic Top-Level Code and Timer
```javascript
console.log('Hello from top-level code');
setTimeout(() => {
  console.log('Hello from timer one');
}, 0);
```
- **Steps**:
  1. Top-level code runs: Logs 'Hello from top-level code'.
  2. Event loop starts.
  3. Timers phase: Expired timer (0ms) runs 'Hello from timer one'.
- **Output**:
  ```
  Hello from top-level code
  Hello from timer one
  ```

### Example 2: Adding SetImmediate
```javascript
console.log('Hello from top-level code');
setTimeout(() => {
  console.log('Hello from timer one');
}, 0);
setImmediate(() => {
  console.log('Hello from immediate function one');
});
```
- **Steps**:
  1. Top-level: 'Hello from top-level code'.
  2. Event loop: Timers → 'Hello from timer one'.
  3. Skip I/O.
  4. SetImmediate: 'Hello from immediate function one'.
- **Output**:
  ```
  Hello from top-level code
  Hello from timer one
  Hello from immediate function one
  ```

- **Variation (Remove console.log)**: Order of timer vs. immediate becomes non-deterministic (process-dependent). Immediate may run first.

### Example 3: I/O Polling with File Read
```javascript
const fs = require('fs');
fs.readFile('sample.txt', 'utf8', (err, data) => {
  console.log('I/O polling finished');
});
console.log('Hello from top-level code');
setTimeout(() => {
  console.log('Hello from timer one');
}, 0);
setImmediate(() => {
  console.log('Hello from immediate function one');
});
```
- **Steps**:
  1. Top-level: Start file read (async), log 'Hello from top-level code'.
  2. Event loop: Timers → 'Hello from timer one'.
  3. SetImmediate → 'Hello from immediate function one'.
  4. Loop back if file pending; I/O phase: 'I/O polling finished' when file read completes.
- **Output** (assuming small file):
  ```
  Hello from top-level code
  Hello from timer one
  Hello from immediate function one
  I/O polling finished
  ```

### Example 4: Nested Timers and SetImmediate in I/O Callback
Add to I/O callback:
```javascript
setTimeout(() => { console.log('Hello from timer two'); }, 0);
setTimeout(() => { console.log('Hello from timer three'); }, 5000);
setImmediate(() => { console.log('Hello from immediate function two'); });
```
- **Steps**: After I/O finishes, new timers/immediate register. Immediate runs next (after I/O phase), then timers expire in subsequent loops.
- **Output**:
  ```
  Hello from top-level code
  Hello from timer one
  Hello from immediate function one
  I/O polling finished
  Hello from immediate function two
  Hello from timer two
  [After ~5s] Hello from timer three
  ```

## 5. Thread Pool for CPU-Intensive Tasks
- **Examples**: Cryptography (e.g., `crypto.pbkdf2` for password hashing).
- Code for hashing 4 passwords (measures time):
```javascript
const crypto = require('crypto');
const start = Date.now();
crypto.pbkdf2('password1', 'salt1', 100000, 1024, 'sha512', () => {
  console.log('Password 1 done in', Date.now() - start, 'ms');
});
// Repeat for password2,3,4
```
- **Behavior**:
  - 4 tasks: Run in parallel (4 threads), ~600ms each.
  - 5 tasks: First 4 parallel, 5th waits (~1200ms).
  - 6 tasks: First 4 parallel, next 2 parallel after.
- **Control Thread Pool**: `process.env.UV_THREADPOOL_SIZE = 10;` allows 10 parallel tasks.

## 6. Node.js vs. Multi-Threaded Languages (e.g., PHP)
- **Node.js (Single-Threaded with Event Loop)**:
  - Handles requests on one main thread via event loop.
  - Offloads CPU-intensive tasks to thread pool (hybrid approach).
  - Efficient for I/O-bound apps (e.g., REST APIs).
  - Scalable for non-blocking operations; users don't wait unless threads are exhausted.
- **Multi-Threaded (e.g., PHP)**:
  - Creates a new thread per request.
  - All threads can get busy, causing waits for new users.
  - Better for pure CPU-bound work but less efficient for high-concurrency I/O.

**Recommendation**: Use Node.js for API servers; delegate CPU-heavy tasks to microservices in multi-threaded languages.

## 7. Additional Resources (as mentioned)
- Official Node.js Event Loop Guide: [Link in video description] – Covers phases, non-deterministic timers, promises.
- Promises: Execute during phase transitions.


# 🎯 Inshort 
 
---

## 1. Core Components of Node.js

### Concept:

Node.js actually **ek system** hai jisme JavaScript ko server par run karne ki capability di gayi hai.
Lekin khud Node.js JavaScript nahi hai — ye **do main cheezon** par bana hai:

---

### (A) V8 Engine

* Ye **Google Chrome** ka JavaScript Engine hai.
* Written in **C++**, aur ye hi JavaScript code ko **machine-understandable code (C++)** mein convert karta hai.
* Socha jaise browser me JS run hota hai Chrome ke andar — wahi kaam Node.js me V8 karta hai.

**Simple line:**
V8 = JavaScript code ko fast execute karne wala engine.

---

### (B) libuv Library

* Ye ek **C library** hai jo **asynchronous (non-blocking)** kaam handle karti hai.
* Ye handle karti hai:

  1. **Event Loop** (jo tasks ko round-robin style me execute karta hai)
  2. **Thread Pool** (jo heavy kaam alag threads me karta hai — jaise file read, hashing)

**Simple line:**
libuv = Background me async tasks handle karne wali engine.

---

### Together:

**Node.js = V8 + libuv**

* V8 => Code execute karta hai
* libuv => Asynchronous tasks aur event loop sambhalta hai

Isliye Node.js itna fast aur efficient hai — **single-threaded** hone ke bawajood.

---

## 2. Node.js Execution Process

Chalo maan le humne likha:

```js
// index.js
console.log("Start");

setTimeout(() => {
  console.log("Timeout done");
}, 1000);

console.log("End");
```

Aur humne terminal me likha:

```
node index.js
```

Ab dekho **andar kya hota hai** step-by-step.

---

### (1) Process Creation

* Jab tu `node index.js` run karta hai, ek **single Node.js process** create hota hai.
* Ye process **main thread** par run karta hai (by default, single-threaded hota hai).

---

### (2) Initialization Steps (sab main thread pe hote hain)

1. **Environment Setup** – Node internal cheeze ready karta hai.
2. **Top-level Code Execution** – Jo directly likha hai (like `console.log("Start")`), wo **turant** run hota hai.
3. **Module Loading** – Jo require/import likhe hain (`const fs = require('fs')`) wo yahin load hote hain.
4. **Callback Registration** – Jo async cheeze likhi hain (e.g. `setTimeout`, `fs.readFile`), unke callback **register** hote hain — **abhi run nahi** hote.
5. **Start Event Loop** – Ab event loop start hota hai aur pending tasks ko handle karta hai.

---

### (3) Thread Pool

* libuv ke andar ek **thread pool** hota hai (default 4 threads).
* Ye CPU-heavy work karta hai jaise:

  * File operations (fs module)
  * Hashing (crypto)
  * Compression (zlib)
* Matlab ye kaam main thread se alag chhupke se background me hote hain.

---

**So Structure kuch aisa:**

```
Main Thread (Event Loop)
   |
   |-- Non-blocking code (console.log, callbacks registration)
   |
   |-- Thread Pool (4+ threads) => Heavy async work
```

---

## 3. Event Loop Mechanics

Ab sabse important cheez: **Event Loop**

---

### Concept:

Event loop ek mechanism hai jo dekhta rehta hai:
“Kaunsa callback ready hai? Kaunsa task complete ho gaya?”

Aur wo unhe ek fixed order me execute karta hai (phases ke form me).

---

### Phases of Event Loop (order me)

1. **Timers Phase**

   * `setTimeout` aur `setInterval` ke callbacks yahan run hote hain (agar unka time expire ho gaya ho).

2. **I/O Polling Phase**

   * Yahan async file/network operations ke callbacks execute hote hain.
   * Example: `fs.readFile()` ka result aaya — iska callback yahan run hota hai.

3. **SetImmediate Phase**

   * `setImmediate()` ke callbacks yahan run hote hain.
   * Ye I/O ke baad run hota hai.

4. **Close Callbacks Phase**

   * Socket/server close hone par jo callback hote hain — wo yahan run hote hain.

---

### (Between Phases)

* **Promise callbacks / microtasks** run hote hain (ye phases ke beech me execute hote hain).

---

### Looping Behavior

* Har cycle ke baad check hota hai:

  * Agar aur pending callbacks hain → loop continue
  * Nahi → process exit

---

### Example:

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

**Output:**

```
A
D
C
B
```

**Explanation:**

1. A & D = Top-level code → runs immediately
2. Promise (C) = Microtask → runs after top-level but before timer
3. Timeout (B) = Next event loop tick → runs later

---

## 4. Summary Notes

| Part            | Work                                           |
| --------------- | ---------------------------------------------- |
| **V8 Engine**   | Runs JavaScript code                           |
| **libuv**       | Handles async tasks (event loop + thread pool) |
| **Main Thread** | Executes JS + manages event loop               |
| **Thread Pool** | Handles heavy async tasks                      |
| **Event Loop**  | Decides which callback runs next               |

---
