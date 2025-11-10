# **JavaScript Internal Execution (Call Stack, Web API, Event Loop, Task Queue, Microtask Queue)**

---

## **1️⃣ JavaScript Code Execution Overview**

### **Concept:**

When JavaScript runs, it executes code inside an **Execution Context**, maintained by the **Call Stack** inside the **JavaScript Engine** (like V8).

* JS is **single-threaded**.
* JS engine executes **one line at a time**.
* Async behavior (timers, promises, etc.) is managed **outside the engine** by the **browser (Web APIs)** + **Event Loop**.

---

### **Flow Summary**

```
Source Code
   ↓
Global Execution Context Created
   ↓
Code Execution (Sync)
   ↓
Async tasks handled via Web APIs
   ↓
Callbacks stored in Queues
   ↓
Event Loop pushes queued tasks back into Call Stack (when empty)
```

---

## **2️⃣ Global Execution Context (GEC)**

### **Concept:**

Created when JS starts executing a file.

Has two internal phases:

| Phase                     | Description                                                  |
| ------------------------- | ------------------------------------------------------------ |
| **Memory Creation Phase** | All variables (var → undefined) & functions stored in memory |
| **Code Execution Phase**  | Code runs line-by-line using those memory bindings           |

---

### **Call Stack:**

* A **stack structure (LIFO)** that stores Execution Contexts.
* **Without pushing into Call Stack, code cannot run.**
* Stack **does not wait** for anything (non-blocking).

---

### **Key Rules**

1. Every JS code runs inside **Global Execution Context**.
2. Every function call creates a **new Execution Context**, pushed into the **Call Stack**.
3. When finished → that context is **popped out**.

---

## **3️⃣ Synchronous Example**

```js
console.log("Start");

setTimeout(() => {
  console.log("This is from Task Queue");
}, 5000);

console.log("End");
```

---

### **Dry Run (Step-by-Step Comments):**

```js
console.log("Start");   
// → pushed to Call Stack → executed → prints "Start"

setTimeout(..., 5000);   
// → Web API starts timer for 5 seconds
// → After scheduling, Call Stack continues without waiting

console.log("End");      
// → executed next → prints "End"
// → Global Execution Context completes → popped out
```

After ~5 seconds, Web API moves the callback into **Task Queue**.
But Event Loop will only move it into Call Stack **after** the stack becomes empty.

---

### **Output**

```
Start
End
This is from Task Queue
```

---

## **4️⃣ Browser’s Role: Web APIs**

### **Concept:**

Certain async functions like `setTimeout`, `setInterval`, `fetch`, `DOM events` — are not part of the JS engine.
They are handled by **Web APIs** provided by the browser.

* **JS Engine**: Only runs synchronous JS code.
* **Web APIs**: Handle timers, async I/O, event listeners.
* **When done:** Web API pushes callbacks → **Task Queue**.

---

### **Flow Visualization**

```
JavaScript Engine (Call Stack)
   |
   | (sends async tasks)
   ↓
Browser Web APIs (timers, fetch)
   ↓
Task Queue (FIFO)
   ↓
Event Loop (checks if stack empty)
   ↓
Moves task → back into Call Stack
```

---

## **5️⃣ Event Loop**

### **Concept:**

Event Loop continuously checks:

* Is **Call Stack empty**?
* If yes → picks a task from **Queues** (Microtask first) → pushes into Stack → executes.

### **Core Responsibility:**

To **coordinate execution** between:

* **Call Stack** (engine)
* **Microtask Queue**
* **Task Queue (Callback Queue)**

---

### **Working Principle:**

```
while (true) {
  if (CallStack.empty()) {
    if (MicrotaskQueue.hasTasks()) run(MicrotaskQueue.next());
    else if (TaskQueue.hasTasks()) run(TaskQueue.next());
  }
}
```

---

## **6️⃣ Task Queue vs Microtask Queue**

| Type                            | Contains                  | Example                                                 | Priority |
| ------------------------------- | ------------------------- | ------------------------------------------------------- | -------- |
| **Task Queue / Callback Queue** | Normal async callbacks    | `setTimeout`, `setInterval`, `setImmediate`, DOM events | Lower    |
| **Microtask Queue**             | Promise-related callbacks | `Promise.then()`, `queueMicrotask()`                    | Higher   |

---

## **7️⃣ Example: Task Queue vs Microtask Queue**

### **Code**

```js
console.log("Start");

setTimeout(() => console.log("Task Queue"), 0);

Promise.resolve().then(() => console.log("Microtask Queue"));

console.log("End");
```

---

### **Dry Run with Comments**

```js
console.log("Start");          
// Executed immediately → "Start"

setTimeout(..., 0);            
// Sent to Web API → schedules callback → moved to Task Queue

Promise.resolve().then(...);   
// Promise resolved immediately → callback → Microtask Queue

console.log("End");            
// Executed immediately → "End"

// Global code finished → Call Stack empty
// Event Loop checks Queues
// Microtask Queue has item → executes first
// Then executes Task Queue callback
```

---

### **Output**

```
Start
End
Microtask Queue
Task Queue
```

---

### **Rule:**

Event Loop always empties the **Microtask Queue before** picking tasks from the **Task Queue**.

---

## **8️⃣ Visualization**

```
┌──────────────────────────────────────────────┐
│                  JS Engine                   │
│  ┌────────────┐     ┌──────────────────────┐ │
│  │ Call Stack │ <── │  Event Loop          │ │
│  └────────────┘     └────────┬─────────────┘ │
└──────────────────────────────┼───────────────┘
                               │
        ┌──────────────────────┴──────────────────────┐
        │                Web APIs                     │
        │  (setTimeout, fetch, DOM, etc.)             │
        └──────────────────────┬──────────────────────┘
                               │
              ┌────────────────┴────────────────┐
              │  Microtask Queue (Promises)     │
              │  Task Queue (Timers, Events)    │
              └─────────────────────────────────┘
```

---

## **9️⃣ Microtask Queue Starvation**

### **Concept:**

If microtasks keep creating new microtasks continuously,
**Task Queue callbacks may never get a chance to run.**

This is called **Starvation**.

---

### **Code Example**

```js
function repeat() {
  Promise.resolve().then(repeat);
}
repeat();

setTimeout(() => console.log("From Task Queue"), 0);
```

### **Explanation**

* Each resolved promise creates another promise → infinite microtasks.
* Event loop keeps executing microtasks endlessly.
* The callback in **Task Queue** (`setTimeout`) never executes → starvation.

---

### **Definition**

> **Starvation:** When microtask queue continuously fills with new tasks, preventing callback queue tasks from executing.

---

## **🔟 Timers Example Summary**

### **Code**

```js
console.log("Start");

setTimeout(() => console.log("A (0ms)"), 0);
setTimeout(() => console.log("B (2000ms)"), 2000);

console.log("End");
```

### **Dry Run**

```js
// Start → prints immediately
// setTimeout(0) → sent to Web API → after 0ms → Task Queue
// setTimeout(2000) → sent to Web API → after 2s → Task Queue
// End → prints immediately
// Stack empty → event loop → executes Task Queue in order (FIFO)
```

### **Output**

```
Start
End
A (0ms)
B (2000ms)
```

---

## **1️⃣1️⃣ Full Combined Example**

### **Code**

```js
console.log("Start of script");

setTimeout(() => console.log("Task Queue"), 0);

Promise.resolve().then(() => console.log("Microtask Queue"));

console.log("End of script");
```

---

### **Dry Run (Step-by-Step)**

| Step | Action                                                | Location           |
| ---- | ----------------------------------------------------- | ------------------ |
| 1    | `console.log("Start of script")`                      | Call Stack         |
| 2    | `setTimeout()` → Timer starts                         | Web API            |
| 3    | `Promise.resolve().then()` → callback                 | Microtask Queue    |
| 4    | `console.log("End of script")`                        | Call Stack         |
| 5    | Stack empty → Event Loop checks Microtask Queue first | Microtask executed |
| 6    | Then picks Task Queue item (setTimeout)               | Callback executed  |

---

### **Final Output**

```
Start of script
End of script
Microtask Queue
Task Queue
```

---

## **1️⃣2️⃣ Summary Table**

| Concept                         | Description                                             |
| ------------------------------- | ------------------------------------------------------- |
| **Call Stack**                  | Runs all JS code (LIFO)                                 |
| **Memory Heap**                 | Stores variables/objects                                |
| **Web APIs**                    | Handle async functions                                  |
| **Task Queue (Callback Queue)** | Stores timer and DOM callbacks                          |
| **Microtask Queue**             | Stores promise callbacks                                |
| **Event Loop**                  | Checks queues and pushes to stack when empty            |
| **Starvation**                  | When microtasks continuously prevent tasks from running |

---

## **1️⃣3️⃣ Practical Takeaways**

* JS engine itself is **synchronous**.
* Async behavior happens through:

  * **Web APIs**
  * **Queues**
  * **Event Loop**
* **Promises > Timers** in priority.
* **Starvation** can freeze async behavior if not handled.
