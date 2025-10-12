# ⚡ Node.js Async Evolution: Callbacks → Callback Hell → Promises

Node.js is **non-blocking**. That means it doesn’t wait for one task to finish before starting another. But this introduces **challenges** in code readability and error handling.

---

## 1️⃣ What is a Promise?

Think of a **promise** like a **“package of a future result”**:

* You order something online (async operation).
* The package **may arrive successfully (fulfilled)** or **fail (rejected)**.
* While waiting, you can do other things (non-blocking).

### Key Points:

| Term      | Meaning                                 |
| --------- | --------------------------------------- |
| Pending   | Promise is still in progress            |
| Fulfilled | Promise finished successfully           |
| Rejected  | Promise failed                          |
| Immutable | Once resolved/rejected, it can’t change |

✅ Benefit: Unlike callbacks, you can **chain tasks sequentially** without nesting.

---

## 2️⃣ Creating a Promise

**Syntax:**

```js
const myPromise = new Promise((resolve, reject) => {
  // async task
});
```

* `resolve(value)` → fulfills the promise
* `reject(error)` → fails the promise

### Example: Success

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task completed successfully!");
  }, 2000);
});
```

### Example: Failure

```js
const myPromiseFail = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Task failed"));
  }, 2000);
});
```

**Important:** The executor runs immediately. **resolve/reject** is called asynchronously.

---

## 3️⃣ Consuming a Promise

**You don’t get the value directly**; you use `.then` for success, `.catch` for errors.

```js
myPromise
  .then((value) => {
    console.log("Resolved:", value);
  })
  .catch((err) => {
    console.error("Rejected:", err.message);
  });
```

* `.then()` runs if promise **fulfilled**
* `.catch()` runs if promise **rejected**

---

### 🔗 Chaining Promises

Instead of nested callbacks (callback hell), we **chain** `.then()`:

```js
myPromise
  .then((value) => {
    console.log(value);
    return "Step 2 completed";
  })
  .then((value2) => {
    console.log(value2);
  })
  .catch((err) => {
    console.error(err);
  });
```

✅ Each `.then` **returns a new promise**, allowing sequential async operations without messy nesting.

---

## 4️⃣ Error Handling in Promises

* Promises follow **error propagation**: a `.catch()` at the end handles **all upstream errors**.

```js
const failPromise = new Promise((resolve, reject) => {
  reject(new Error("Something went wrong"));
});

failPromise
  .then((val) => console.log(val))
  .catch((err) => console.error("Caught:", err.message));
```

* `.finally()` can run code regardless of success or failure:

```js
myPromise
  .then((val) => console.log(val))
  .catch((err) => console.error(err))
  .finally(() => console.log("Cleanup done"));
```

---

## 5️⃣ Step-by-Step Activity

1. Create folder `promises`, add `index.js`.
2. Create a promise that **resolves after 1 second**.
3. Consume with `.then()` and log the result.
4. Add a promise that **rejects**, handle with `.catch()`.
5. Chain 2 `.then()` to simulate sequential async operations.

✅ You’ll see: non-blocking + sequential flow + clean code.

---

## 6️⃣ Why Promises?

* Solve **callback hell** → flatten code.
* **Sequential async tasks** become readable.
* Error handling becomes **centralized**.
* Prepares for **async/await** (future topic).

---

## ⚠️ Common Mistakes

* Treating promises like synchronous code.
* Forgetting `.catch()` → unhandled errors.
* Trying to call `resolve` and `reject` both → first one wins.
* Nesting `.then()` inside `.then()` unnecessarily.

---

✅ **Key Takeaways**

* Promises = **future values**
* `.then` → success, `.catch` → error
* Chain for sequential tasks
* Solves callback hell, preps for async/await
