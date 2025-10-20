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
 
---

# **Doubts and learnings clearly explained**
**Node.js — File System (fs), Path, and `__dirname`**


## 1. What does the “File System (fs)” module do?

`fs` is Node.js’s **File System module**.
It allows you to **read, write, update, and delete** files directly from your code — just like managing files manually, but programmatically.

### Example

```js
const fs = require('fs');
```

### Common Functions

| Function              | Purpose                             |
| --------------------- | ----------------------------------- |
| `fs.readFileSync()`   | Reads a file (Sync = blocking)      |
| `fs.writeFileSync()`  | Writes or overwrites a file         |
| `fs.appendFileSync()` | Appends content to an existing file |
| `fs.unlinkSync()`     | Deletes a file                      |

**Note:**
“Sync” methods block the program until the operation completes.
There are also async versions like `fs.readFile()`, `fs.writeFile()`, etc.

---

## 2. What does the “path” module do?

`path` is a helper module that makes **file paths safe and OS-independent**.
It ensures your file paths work across **Windows (`\`)**, **macOS**, and **Linux (`/`)**.

### Example

```js
const path = require('path');
const filePath = path.join(__dirname, 'example.txt');
```

`path.join()` automatically creates the correct path format for your OS.

---

## 3. What is “__dirname”?

`__dirname` is a **special global variable** in Node.js.
It tells you the **directory (folder) path of the current script file**.

### Example

```js
console.log(__dirname);
```

**Output Example:**

```
C:\Users\Tanish\Desktop\Git-repos\web-dev\backend-with-nodejs-concepts\26. Hands-On Practice [Topics 1-25]\ch6 File System Module
```

Meaning:

> This is the folder from where the current script file is running.

---

## 4. The Common Mistake — Why “ENOENT: no such file or directory” Error Happens

When you write this:

```js
fs.readFileSync('./example.txt', 'utf8');
```

You’re telling Node:

> “Find example.txt in the **current working directory**.”

But —
The **current working directory** is **where you run the `node` command**,
not where the script is actually stored.

### Example

If your script is inside:

```
.../ch6 File System Module/
```

but you run Node from:

```
.../26. Hands-On Practice [Topics 1-25]/
```

Node looks for the file in the wrong folder.
Hence this error:

```
ENOENT: no such file or directory, open '...\example.txt'
```

---

## 5. Correct Way — Always Use `__dirname` + `path.join`

```js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');
const data = fs.readFileSync(filePath, 'utf8');
console.log("File content:", data);
```

This way, Node always finds the file **relative to your script**, not your terminal.

---

## 6. Shortcut Reference

| Term                               | Meaning                                   |
| ---------------------------------- | ----------------------------------------- |
| `fs`                               | Module containing file system tools       |
| `path`                             | Helps handle and format file paths safely |
| `__dirname`                        | Directory path of the current script      |
| `path.join(__dirname, 'file.txt')` | Builds the correct absolute file path     |

---

## 7. Common Mistake in Syntax — Encoding Error

Incorrect version (causes “invalid encoding” error):

```js
fs.writeFileSync(filePath, 'Hello, world!\n', 'utf8'); // ❌
```

Correct version:

```js
fs.writeFileSync(filePath, 'Hello, world!\n', { encoding: 'utf8' }); // ✅
```

or simply:

```js
fs.writeFileSync(filePath, 'Hello, world!\n'); // ✅
```

Reason:
Node thought `"Hello, world!\n"` was an encoding type instead of file data.

---

## 8. Full Working Example (Synchronous File Operations)

```js
const fs = require('fs');
const path = require('path');

console.log("File System - Sync");

try {
    // Always use __dirname for safe path
    const filePath = path.join(__dirname, 'example.txt');
    console.log("Path:", filePath);

    // Read
    const data = fs.readFileSync(filePath, 'utf8');
    console.log("File content:", data);

    // Write (Overwrites)
    fs.writeFileSync(filePath, 'Hello, world!\n');
    console.log("File written successfully");

    // Append
    fs.appendFileSync(filePath, '\nThis is appended content!');
    console.log("Data appended successfully");

} catch (error) {
    console.error("Error:", error.message);
}
```

---

## 9. Summary Table

| Function                        | Purpose                  | Important Note                             |
| ------------------------------- | ------------------------ | ------------------------------------------ |
| `fs.readFileSync(path, 'utf8')` | Reads file content       | `'utf8'` converts buffer → string          |
| `fs.writeFileSync(path, data)`  | Writes or overwrites     | Creates file if it doesn’t exist           |
| `fs.appendFileSync(path, data)` | Adds new content to file | Keeps old content and adds new lines below |

---

## 10. Key Takeaways

* Always use `__dirname` with `path.join()` for reliable file paths.
* “Sync” methods block — use them for small scripts, not production servers.
* Errors like “ENOENT” mean your file path is wrong.
* Avoid passing raw strings as encodings.
* Prefer asynchronous (`fs.readFile`) versions for scalable apps.
