# Section 7: File System (fs) Module (45:25 - 57:53)

## 1. What is the Problem?

In backend development, we constantly need to:

* Read configs (like `.env`)
* Write logs
* Store data (before database setup)
* Manage files uploaded by users
* Generate reports (e.g., `report.txt`)

👉 Without a **file system API**, manually handling files/directories is impossible.

---

## 2. Solution: fs Module

Node.js gives us a built-in core module `fs` (no install required).

* Provides both **synchronous** (blocking) and **asynchronous** (non-blocking) methods.
* Handles files (create, read, write, append, delete) and directories.

```js
const fs = require('fs');
```

---

## 3. Sync vs Async – Why Both?

* **Sync (Blocking):** Stops everything until task finishes.
  ✅ Simple scripts / initialization.
  ❌ Bad for production (halts server).

* **Async (Non-blocking):** Doesn’t block event loop, uses callbacks/promises.
  ✅ Best for production servers.
  ❌ Slightly more complex (callbacks, error handling).

---

## 4. Core Operations

### 🔹 A. Reading Files

#### Sync

```js
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
```

* **Default:** Returns Buffer if no encoding given.
* **Problem Solved:** Instantly get file contents.
* **Best Use:** Small config files.

#### Async

```js
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) return console.error("❌ Error:", err);
  console.log("✅ File content:", data);
});
```

* **Problem Solved:** Reads without blocking event loop.
* **Best Use:** Web server file responses.

---

### 🔹 B. Writing Files

#### Sync

```js
fs.writeFileSync('output.txt', 'Hello Node.js!');
```

* Overwrites if file exists.

#### Async

```js
fs.writeFile('output.txt', 'Async write!', (err) => {
  if (err) console.error("❌ Error:", err);
  else console.log("✅ File written successfully");
});
```

---

### 🔹 C. Appending to Files

#### Sync

```js
fs.appendFileSync('output.txt', '\nAnother line');
```

#### Async

```js
fs.appendFile('output.txt', '\nAsync append', (err) => {
  if (err) throw err;
  console.log("✅ Line appended");
});
```

---

### 🔹 D. Directory Operations

#### Create

```js
fs.mkdirSync('myFolder'); // Sync
fs.mkdir('myAsyncFolder', (err) => {
  if (err) console.error(err);
  else console.log("✅ Folder created");
});
```

#### Delete

```js
fs.rmdirSync('myFolder'); // Must be empty
fs.rmdir('myAsyncFolder', (err) => {
  if (err) console.error(err);
  else console.log("✅ Folder deleted");
});
```

---

## 5. Common Mistakes 🚫

* Forgetting `'utf8'` → Get Buffer instead of string.
* Using sync in server route handlers → Blocks entire server.
* Not handling `err` in async → Crashes app.
* Trying to delete non-empty folder with `rmdir`.

---

## 6. Best Practices ✅

* **Prefer async** in production.
* Use `fs.promises` or `util.promisify` → cleaner with `async/await`.
* Wrap sync calls in try-catch.
* Always check if file/folder exists:

  ```js
  if (fs.existsSync('example.txt')) { ... }
  ```

---

## 7. Hands-On Mini Project 💻

👉 **Goal:** Practice all core fs operations in one place.

1. Create folder: `file-system`
2. Add `index.js`
3. Inside `index.js`:

   * Create `example.txt` manually.
   * **Step 1:** Read it (`readFileSync` + `readFile`).
   * **Step 2:** Write a new file (`output.txt`).
   * **Step 3:** Append text to it.
   * **Step 4:** Create folder (`logs/`).
   * **Step 5:** Write a log file inside `logs/`.
   * **Step 6:** Delete log folder.

---

## 8. Key Takeaways 📝

* fs is **must-know** for backend → configs, logging, file storage.
* **Sync → simple, but blocking. Async → scalable.**
* Always handle errors properly.
* Encoding + flags matter (`utf8`, `a`, `w`).
* This prepares you for **HTTP servers** where file I/O is crucial (e.g., serving HTML).
