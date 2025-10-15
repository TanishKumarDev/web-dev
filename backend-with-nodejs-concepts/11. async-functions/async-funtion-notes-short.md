# Asynchronous Functions – Notes

### 1. **Concept**

* Asynchronous functions allow code to run **without blocking** the main thread.
* Use case: I/O operations, network requests, timers.
* Unlike synchronous code, async functions **return immediately** and complete later.

---

### 2. **Ways to Write Asynchronous Code**

1. **Callbacks** – traditional method
2. **Promises** – modern, cleaner
3. **Async / Await** – syntactic sugar over Promises

---

### 3. **Callbacks**

```js
setTimeout(() => {
    console.log("Callback executed after 1s");
}, 1000);
```

* Function passed as argument
* Executes later when operation completes
* **Problem:** Callback Hell with nested async calls

---

### 4. **Promises**

```js
const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) resolve("✅ Done");
    else reject("❌ Error");
});

promise
  .then(res => console.log(res))
  .catch(err => console.error(err));
```

* 3 states: **Pending → Fulfilled → Rejected**
* `.then()` → success
* `.catch()` → error

---

### 5. **Chaining Promises**

```js
Promise.resolve(10)
  .then(num => num * 2)
  .then(num => num + 5)
  .then(result => console.log("Final:", result))
  .catch(err => console.error(err));
```

* Each `.then()` receives value from previous
* Avoids callback hell

---

### 6. **Async / Await**

* Syntactic sugar over Promises
* Makes async code look synchronous

```js
async function fetchData() {
    try {
        const result = await Promise.resolve("Data received");
        console.log(result);
    } catch(err) {
        console.error(err);
    }
}
fetchData();
```

---

### 7. **Combining Async / Await with fs.promises**

```js
const fs = require('fs').promises;

async function readFiles() {
    try {
        const data1 = await fs.readFile('file1.txt', 'utf8');
        const data2 = await fs.readFile('file2.txt', 'utf8');
        console.log(data1, data2);
    } catch(err) {
        console.error(err.message);
    }
}
readFiles();
```

---

### 8. **Error Handling**

* Always use `.catch()` for promises
* Use `try-catch` for async/await
* Prevents crashes and makes debugging easier

---

### 9. **Practical Use Cases**

* File I/O (`fs.promises`)
* HTTP Requests (`axios`, `fetch`)
* Database operations
* Timers / Scheduling tasks

---

### 10. **Key Takeaways**

* Async code prevents **blocking the main thread**
* Promises + Async/Await make code **cleaner & readable**
* Always handle errors
* Can chain multiple async operations efficiently
