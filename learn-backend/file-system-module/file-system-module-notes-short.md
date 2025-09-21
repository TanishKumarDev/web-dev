# Node.js File System (fs) Module – Notes

### 1. **Concept**

* `fs` module allows **reading/writing files, creating/deleting directories**, etc.
* Two types of operations:

  1. **Synchronous (blocking)** – pauses execution until operation completes
  2. **Asynchronous (non-blocking)** – uses callbacks or promises

---

### 2. **Importing fs Module**

```js
const fs = require('fs');        // traditional
const fsPromises = require('fs').promises; // promise-based
```

---

### 3. **Synchronous File Operations (Blocking)**

#### 3.1 Read a File

```js
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
```

* Returns **Buffer** by default; `'utf8'` converts to string

#### 3.2 Write a File

```js
fs.writeFileSync('output.txt', 'Hello Node.js!');
```

* Creates file if not exists, **overwrites** if exists

#### 3.3 Append to a File

```js
fs.appendFileSync('output.txt', '\nAppended Line');
```

---

### 4. **Asynchronous File Operations (Non-blocking)**

#### 4.1 Read a File

```js
fs.readFile('example.txt', 'utf8', (err, data) => {
    if(err) console.error(err);
    else console.log(data);
});
```

#### 4.2 Write a File

```js
fs.writeFile('output.txt', 'Async Write!', (err) => {
    if(err) console.error(err);
    else console.log('File written successfully');
});
```

#### 4.3 Append a File

```js
fs.appendFile('output.txt', '\nAsync Append', (err) => {
    if(err) throw err;
    console.log('Appended');
});
```

---

### 5. **Directory Operations**

#### 5.1 Create Directory

```js
fs.mkdirSync('new-folder'); // sync
fs.mkdir('async-folder', (err) => { // async
    if(err) console.error(err);
    else console.log('Directory created');
});
```

#### 5.2 Delete Directory

```js
fs.rmdirSync('new-folder'); // sync
fs.rmdir('async-folder', (err) => { // async
    if(err) console.error(err);
    else console.log('Deleted');
});
```

---

### 6. **Promise-based fs (async/await)**

```js
const fs = require('fs').promises;

async function readFiles() {
    try {
        const data = await fs.readFile('example.txt', 'utf8');
        console.log(data);
    } catch(err) {
        console.error(err.message);
    }
}
readFiles();
```

---

### 7. **Key Methods Summary**

| Method                                | Purpose                           |
| ------------------------------------- | --------------------------------- |
| `fs.readFile` / `fs.readFileSync`     | Read file contents                |
| `fs.writeFile` / `fs.writeFileSync`   | Write file (overwrite)            |
| `fs.appendFile` / `fs.appendFileSync` | Append content                    |
| `fs.mkdir` / `fs.mkdirSync`           | Create directory                  |
| `fs.rmdir` / `fs.rmdirSync`           | Remove directory                  |
| `fs.promises`                         | Promise-based API for async/await |

---

### 8. **Best Practices**

* Use **sync** only for **small scripts** or initialization
* Use **async/promises** for production I/O-heavy apps
* Always **handle errors** (try-catch or callbacks)
* Use **fs.promises** with async/await for cleaner code

