# Node.js Module System – Notes


### 1. **Concept**

* Node.js code is organized in **modules** (files).
* Each file is a **module** by default.
* Modules **encapsulate code**, avoiding global scope pollution.
* Module system allows **exporting & importing** functions, objects, or variables.

---

### 2. **Types of Modules**

1. **Core Modules** → built-in Node.js modules (`fs`, `http`, `path`)
2. **Local Modules** → user-defined modules
3. **Third-party Modules** → installed via **npm**

---

### 3. **Exporting in Node.js**

#### 3.1 Using `module.exports`

```js
// math.js
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }

module.exports = { add, subtract };
```

#### 3.2 Using `exports` shorthand

```js
// math.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

✅ Both `module.exports` and `exports` work, but **module.exports is safer** for exporting objects/functions.

---

### 4. **Importing Modules**

#### 4.1 Local Module

```js
const math = require('./math');
console.log(math.add(2, 3)); // 5
```

#### 4.2 Core Module

```js
const fs = require('fs');
fs.readFileSync('file.txt', 'utf8');
```

#### 4.3 Third-party Module

```js
const lodash = require('lodash');
```

---

### 5. **Module Caching**

* Node **caches modules** after first load
* Subsequent `require()` calls **reuse the same object**
* Helps in **performance optimization**

---

### 6. **Exporting a Single Function/Object**

```js
// logger.js
module.exports = function(message) {
    console.log("LOG:", message);
};

// usage
const log = require('./logger');
log("Hello World!");
```

---

### 7. **File vs Folder Module**

1. **File Module** → `require('./file.js')`
2. **Folder Module** → `require('./folder')` → Node looks for:

   * `index.js` in that folder by default

---

### 8. **Key Notes**

* `require()` is **synchronous**
* Always use **relative paths** (`./` or `../`) for local modules
* `module.exports` overrides `exports` if both are used

---

### 9. **Practical Use Cases**

* Split app into **controller, model, routes** modules
* Reuse **utility functions** across multiple files
* Organize **large Node.js projects**

---

### 10. **Best Practices**

* Prefer **module.exports** for single object/function export
* Keep modules **small & focused**
* Avoid global variables
* Use descriptive **file & module names**

