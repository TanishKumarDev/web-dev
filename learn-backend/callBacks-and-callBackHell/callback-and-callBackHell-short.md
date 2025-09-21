# Callbacks & Callback Hell – Notes

### 1. **Concept**

* **Callback function** = function passed as an argument to another function, executed after some operation.
* Primarily used for **asynchronous operations** in JavaScript/Node.js.

---

### 2. **Basic Callback Example**

```js
function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
}

greet('Tanish', () => {
    console.log('Callback executed!');
});
```

Output:

```
Hello, Tanish
Callback executed!
```

---

### 3. **Why Callbacks are Needed**

* JavaScript is **single-threaded**
* Asynchronous operations like I/O, HTTP requests, timers **cannot block main thread**
* Callbacks allow code to **continue execution** while waiting

---

### 4. **Callback Hell**

* Occurs when **callbacks are nested** repeatedly
* Leads to:

  * Poor readability
  * Hard-to-maintain code
  * Difficult error handling

#### Example – Nested Callbacks (Callback Hell)

```js
const fs = require('fs');

fs.readFile('file1.txt', 'utf8', (err1, data1) => {
    if (err1) return console.error(err1);
    console.log(data1);

    fs.readFile('file2.txt', 'utf8', (err2, data2) => {
        if (err2) return console.error(err2);
        console.log(data2);

        fs.readFile('file3.txt', 'utf8', (err3, data3) => {
            if (err3) return console.error(err3);
            console.log(data3);
        });
    });
});
```

Output (if files exist):

```
Contents of file1
Contents of file2
Contents of file3
```

---

### 5. **Problems with Callback Hell**

* **Pyramid structure** → nested indentation
* **Error handling** is difficult
* Hard to **reuse code**
* Difficult to **debug and maintain**

---

### 6. **Solutions**

1. **Modularize functions** → break callbacks into named functions
2. **Use Promises** → clean chaining
3. **Use Async/Await** → synchronous-like async code

---

### 7. **Key Takeaways**

* Callbacks are **foundation of async JS**
* Callback Hell should be **avoided**
* Promises and Async/Await are modern alternatives
* Always handle errors in callbacks to prevent crashes
