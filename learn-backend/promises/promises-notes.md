# Promises – Notes

### 1. **Concept**

* Promise = **object representing future completion** (or failure) of async operation.
* Helps **avoid callback hell**.
* 3 states:

  1. **Pending** – initial state
  2. **Fulfilled** – operation succeeded
  3. **Rejected** – operation failed

---

### 2. **Creating a Promise**

```js
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if(success) resolve("✅ Operation successful");
    else reject("❌ Operation failed");
});
```

---

### 3. **Consuming Promises**

#### 3.1 `.then()` and `.catch()`

```js
myPromise
    .then(result => console.log(result))
    .catch(err => console.error(err));
```

#### 3.2 `.finally()` (Optional)

```js
myPromise
    .then(res => console.log(res))
    .catch(err => console.error(err))
    .finally(() => console.log("🎯 Operation completed"));
```

---

### 4. **Chaining Promises**

```js
Promise.resolve(10)
    .then(num => num * 2)
    .then(num => num + 5)
    .then(finalResult => console.log("Final Result:", finalResult))
    .catch(err => console.error(err));
```

* Each `.then()` receives the **return value of the previous**
* Helps perform **sequential async operations**

---

### 5. **Async / Await (Using Promises)**

```js
async function fetchData() {
    try {
        const result = await Promise.resolve("Data received");
        console.log(result);
    } catch(err) {
        console.error(err);
    } finally {
        console.log("🎯 Async operation finished");
    }
}
fetchData();
```

* Makes async code look **synchronous**
* Works only with **Promises**

---

### 6. **Error Handling**

* `.catch()` for Promises
* `try-catch` for async/await
* Prevents unhandled rejections

---

### 7. **Practical Example – File Read (fs.promises)**

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

### 8. **Promise Methods**

| Method                         | Purpose                                                |
| ------------------------------ | ------------------------------------------------------ |
| `Promise.all([p1, p2])`        | Waits for all promises to resolve, rejects if any fail |
| `Promise.race([p1, p2])`       | Resolves/rejects as soon as first promise settles      |
| `Promise.allSettled([p1, p2])` | Waits for all to settle, returns their status          |
| `Promise.resolve(value)`       | Creates a resolved promise                             |
| `Promise.reject(reason)`       | Creates a rejected promise                             |

---

### 9. **Key Takeaways**

* Promises = clean alternative to **callbacks**
* Can **chain** for sequential operations
* Works naturally with **async/await**
* Always **handle errors**
