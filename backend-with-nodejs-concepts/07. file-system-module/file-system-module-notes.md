## Section 7: File System Module (45:25 - 57:53)

Following the Path module in Section 6, we now explore the File System (fs) module, a core Node.js module for interacting with files and directories. This section covers reading, writing, creating, and deleting files/directories, with emphasis on synchronous vs. asynchronous methods. The fs module is crucial for backend tasks like logging, data storage, or serving files. We'll use simple examples to demonstrate. This builds on modules (Section 4) and prepares for HTTP servers (next section), where you'll handle file-based responses.

### Key Concepts
- **File System (fs) Module:** Built-in Node.js module for file/directory operations (no NPM install needed).
- **Synchronous Methods:** Blocking operations (e.g., `readFileSync`)—execute immediately but can halt the event loop.
- **Asynchronous Methods:** Non-blocking (e.g., `readFile`)—use callbacks for results, better for performance.
- **Common Operations:** Reading/writing files, creating/deleting directories, appending data.
- **Flags and Encoding:** Options like `'utf8'` for text encoding; flags like `'a'` for append.

### Detailed Outline

#### 1. Introduction to fs Module (45:25 - 46:25)
- **Concept:** fs provides APIs for file system interactions; import with `const fs = require('fs');`.
- **Key Explanation:** No installation needed—it's a core module. Use for tasks like reading config files or writing logs.
- **Best Practice:** Prefer async methods in production to avoid blocking; sync for simple scripts or init tasks.
- **Common Mistake to Avoid:** Forgetting to import fs—leads to "fs is not defined" errors.
- **Timestamp Reference:** 45:25 – fs intro and import.

#### 2. Synchronous File Operations (46:25 - 50:13)
- **Concept:** Blocking methods like `readFileSync`, `writeFileSync`—return values directly but pause execution.
- **Reading a File (readFileSync):**
  ```javascript
  const fs = require('fs');

  // Purpose: Read file contents synchronously
  const data = fs.readFileSync('example.txt', 'utf8'); // 'utf8' for text; omit for Buffer
  console.log(data); // Outputs file content
  ```
  - **Key Explanation:** Returns a Buffer (binary) by default; `'utf8'` converts to string.
- **Writing a File (writeFileSync):**
  ```javascript
  // Purpose: Write or overwrite file synchronously
  fs.writeFileSync('output.txt', 'Hello, Node.js!'); // Creates if doesn't exist
  ```
- **Appending to a File:**
  ```javascript
  // Purpose: Append without overwriting
  fs.appendFileSync('output.txt', '\nAppended line'); // '\n' for new line
  ```
- **Best Practice:** Use sync for small, non-performance-critical tasks; check file existence first if needed.
- **Common Mistake to Avoid:** No error handling—wrap in try-catch for file not found errors.
- **Timestamp Reference:** 46:25 – readFileSync; 48:13 – writeFileSync/append.

#### 3. Asynchronous File Operations (50:13 - 53:42)
- **Concept:** Non-blocking methods like `readFile`, `writeFile`—use callbacks for results/errors.
- **Reading a File (readFile):**
  ```javascript
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err); // Purpose: Handle errors (e.g., file not found)
      return;
    }
    console.log(data); // Outputs file content
  });
  ```
- **Writing a File (writeFile):**
  ```javascript
  fs.writeFile('output.txt', 'Async write!', (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File written successfully');
    }
  });
  ```
- **Appending (appendFile):**
  ```javascript
  fs.appendFile('output.txt', '\nAsync append', (err) => {
    if (err) throw err; // Alternative error handling
    console.log('Appended');
  });
  ```
- **Key Explanation:** Callbacks take `err` first, then data—check `err` to avoid crashes.
- **Best Practice:** Use async for I/O-heavy apps; promisify for cleaner code (later sections).
- **Common Mistake to Avoid:** Ignoring errors in callbacks—always handle `err`.
- **Timestamp Reference:** 50:13 – readFile; 51:42 – writeFile/append.

#### 4. Directory Operations (53:42 - 57:53)
- **Concept:** Create/delete directories with `mkdir`, `rmdir` (sync/async versions).
- **Creating a Directory (mkdirSync):**
  ```javascript
  fs.mkdirSync('new-folder'); // Purpose: Create directory synchronously
  ```
- **Async Version (mkdir):**
  ```javascript
  fs.mkdir('async-folder', (err) => {
    if (err) console.error(err);
    else console.log('Directory created');
  });
  ```
- **Deleting a Directory (rmdirSync):**
  ```javascript
  fs.rmdirSync('new-folder'); // Must be empty
  ```
- **Async Delete (rmdir):**
  ```javascript
  fs.rmdir('async-folder', (err) => {
    if (err) console.error(err);
    else console.log('Deleted');
  });
  ```
- **Key Explanation:** Directories must be empty for deletion; use recursive options in newer Node versions.
- **Best Practice:** Check existence with `fs.existsSync` before creating/deleting.
- **Common Mistake to Avoid:** Deleting non-empty dirs—leads to errors; empty first.
- **Timestamp Reference:** 53:42 – mkdir/rmdir demos.

### Step-by-Step Workflow: Basic File Operations
1. **Set Up Folder and Import**
   - Create `file-system` folder; add `index.js`.
   - Import: `const fs = require('fs');`.
   - **Timestamp Reference:** 45:25 – Setup.
2. **Sync Read/Write**
   - Create `example.txt` with content.
   - Read: `fs.readFileSync('example.txt', 'utf8')`.
   - Write: `fs.writeFileSync('output.txt', 'Content')`.
   - Append: `fs.appendFileSync('output.txt', '\nMore')`.
   - Run: `node index.js`.
3. **Async Read/Write**
   - Use callbacks for `readFile`, `writeFile`.
   - Handle errors in callback.
4. **Directory Ops**
   - Create: `fs.mkdirSync('folder')`.
   - Delete: `fs.rmdirSync('folder')`.
   - **Expected:** Files/dirs created/read/written/deleted.
   - **Timestamp Reference:** 46:25 – Sync; 50:13 – Async.

### Key Explanations
- **Sync vs. Async:** Sync blocks (simple but slow for large files); async non-blocks (scalable but callback-heavy).
- **Encoding/Flags:** `'utf8'` for text; flags like `'w'` (write), `'a'` (append) control behavior.
- **Error Handling:** Essential—files may not exist or lack permissions.

### Common Mistakes to Avoid
- **No Encoding:** Omitting `'utf8'`—returns Buffer, not string.
- **Blocking in Prod:** Overusing sync—freezes servers during I/O.
- **Path Issues:** Relative paths—use Path module (Section 6) for absolutes.
- **Unhandled Errors:** Skipping `if (err)`—app crashes on failures.

### Best Practices
- **Async Priority:** Use for most ops; convert to promises with `fs.promises`.
- **Try-Catch for Sync:** Wrap sync calls to catch exceptions.
- **Check Existence:** `fs.existsSync(path)` before ops.
- **Clean Up:** Delete test files/dirs after experiments.

### Quick Activity Suggestion
- **Hands-On Practice:**
  1. Create `file-system` folder; `index.js` with fs import.
  2. Sync: Read/write/append a file; log results.
  3. Async: Same ops with callbacks; handle errors.
  4. Create/delete a directory.
- **Troubleshooting:** Permission errors? Run as admin or check paths.
- **Optional:** Watch 45:25 - 57:53 for demos.

### Key Takeaways
- fs module handles file/dir ops; import and use sync/async methods.
- Async with callbacks for non-blocking I/O.
- Always handle errors; use encoding for text.
- Foundational for data persistence in apps.

### Summary: What to Remember
fs enables file interactions—sync for quick tasks, async for efficiency. Master reading/writing/appending and error handling. This pairs with Path for robust file handling, leading to HTTP servers next.
