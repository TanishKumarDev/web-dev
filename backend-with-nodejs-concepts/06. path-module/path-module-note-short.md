# ⚡ Node.js Path Module – Mastery from Scratch

Node.js has a **core module** called `path` that helps us **handle file paths safely**, **across different operating systems**.

> Why? Windows uses `\` while macOS/Linux uses `/`. Hardcoding paths breaks your app. `path` fixes this automatically.

---

## 1️⃣ Importing the Path Module

```javascript
const path = require('path');
```

* No need to install via NPM—built-in core module.
* Use it anytime you deal with file paths (FS module, config files, etc.).

---

## 2️⃣ Path.join() – Combine Paths Safely

**Problem:** Concatenating strings manually:

```js
const filePath = 'folder/' + 'file.txt';
console.log(filePath); // Works on Unix, fails on Windows
```

**Solution:** `path.join()`

```javascript
const joinedPath = path.join('folder1', 'folder2', 'file.txt');
console.log(joinedPath);
// Output (Linux/macOS): folder1/folder2/file.txt
// Output (Windows): folder1\folder2\file.txt
```

✅ Handles **OS-specific separators** and multiple segments.

**Tip:** Always use `join()` instead of `+`.

---

## 3️⃣ Path.resolve() – Get Absolute Paths

* Converts relative paths to **absolute paths**.
* Works with `__dirname` (current file folder) for context.

```javascript
const fullPath = path.resolve(__dirname, 'folder1', 'file.txt');
console.log(fullPath);
// Output: /Users/username/project/folder1/file.txt
```

* Resolves `..` for parent directories automatically.
* Difference from `join()`:

  * `join()` = just merges paths (relative or absolute)
  * `resolve()` = **always gives absolute path**

---

## 4️⃣ Parsing Paths

### a) path.basename() – Get File Name

```javascript
const filePath = '/path/to/myfile.js';
console.log(path.basename(filePath));      // 'myfile.js'
console.log(path.basename(filePath, '.js')); // 'myfile' (strip extension)
```

### b) path.dirname() – Get Directory

```javascript
console.log(path.dirname('/path/to/myfile.js')); // '/path/to'
```

### c) path.extname() – Get File Extension

```javascript
console.log(path.extname('/path/to/myfile.js')); // '.js'
console.log(path.extname('/path/to/folder'));   // '' (no extension)
```

**Tip:** These are **string utilities**—don’t touch the file system.

---

## 5️⃣ Practical Example: Combining Everything

```javascript
const fullPath = path.join(__dirname, 'config', 'app.json');
const fileName = path.basename(fullPath);
const dir = path.dirname(fullPath);
const ext = path.extname(fullPath);

console.log({ fullPath, fileName, dir, ext });
/*
{
  fullPath: '/project/config/app.json',
  fileName: 'app.json',
  dir: '/project/config',
  ext: '.json'
}
*/
```

✅ Useful for reading configs, uploading files, logging, etc.

---

## 6️⃣ Step-by-Step Activity

1. Create folder: `path-module`
2. Create file: `path_demo.js`
3. Add:

```javascript
const path = require('path');

// Join paths
const joined = path.join('folderA', 'folderB', 'file.txt');
console.log(joined);

// Resolve absolute
const resolved = path.resolve(__dirname, 'folderA', 'file.txt');
console.log(resolved);

// Parse paths
const sample = path.join(__dirname, 'example.js');
console.log('basename:', path.basename(sample));
console.log('dirname:', path.dirname(sample));
console.log('extname:', path.extname(sample));
```

4. Run: `node path_demo.js`
5. Observe outputs—different OS separators, absolute paths, file info.

---

## 7️⃣ Key Explanations

* **Cross-platform safety:** Windows vs Unix separators handled automatically.
* **__dirname integration:** Gives current script folder.
* **String-only:** Works without touching the file system.
* **Use with FS module:** Build paths safely for reading/writing files.

---

## 8️⃣ Common Mistakes

* Forgetting `require('path')` → methods undefined
* Using `+` instead of `join()` → breaks on Windows
* Assuming resolve gives relative → it gives **absolute**
* Forgetting dot in extension stripping → `basename(path, '.js')`

---

## 9️⃣ Best Practices

* Always use `path.join()` to build paths.
* Use `path.resolve()` for absolute paths.
* Combine parsing methods for cleaner code.
* Test your code on different OSes (or check separator via `path.sep`).

---

✅ **Takeaways**

* `path` = safe, cross-platform path handling
* Use `join()` for combining, `resolve()` for absolute paths
* Parse files with `basename()`, `dirname()`, `extname()`
* Prepares you for FS module operations next
