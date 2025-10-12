# Running JavaScript Files with Node.js

---

## 1. Concept

Node.js ke through JavaScript ko **do tarike se run** kar sakte ho:

1. **REPL (Read-Eval-Print Loop)**

   * Interactive environment hota hai.
   * Tum terminal me `node` likhoge, to ek prompt (`>`) aata hai.
   * Usme directly JS code likh ke result turant dekh sakte ho.

2. **JavaScript Files (`.js`)**

   * Tum apna code ek file (e.g., `index.js`) me likh ke save karte ho.
   * Terminal me `node index.js` likh ke run karte ho.
   * Yehi real-world projects banane ka standard tareeka hai.

---

## 2. Why both are needed?

* **REPL** → Chhoti chhoti cheez test karne ke liye (syntax, maths, JS function try karna).
* **File Execution** → Jab tumhe pura program banana ho ya project likhna ho.

---

## 3. REPL Example

### Step

```bash
node
```

### Inside REPL

```javascript
console.log("Hello Node.js");  // Output: Hello Node.js
2 + 2;                        // Output: 4
100 / 0;                      // Output: Infinity
0 / 0;                        // Output: NaN
```

### Exit REPL

* `Ctrl + C` do baar
* ya `Ctrl + D`
* ya `.exit` likh do

---

## 4. Running JavaScript Files

### Example 1: index.js

File: `index.js`

```javascript
console.log("Hello Node.js");  // synchronous

let arr = [1, 2, 3, 4];
console.log("Array:", arr);   // synchronous

setTimeout(() => {            // asynchronous (runs after 2s)
  console.log("This message is delayed by 2 seconds");
}, 2000);

console.log("This is the last line of synchronous code");
```

### Run command:

```bash
node index.js
```

### Dry Run (step by step execution)

1. `console.log("Hello Node.js")` → Prints immediately.

   ```
   Hello Node.js
   ```

2. `console.log("Array:", arr)` → Prints immediately.

   ```
   Array: [ 1, 2, 3, 4 ]
   ```

3. `setTimeout(...)` → Scheduled for 2 seconds later. It does not block execution.

4. `console.log("This is the last line of synchronous code")` → Runs next.

   ```
   This is the last line of synchronous code
   ```

5. After **2 seconds delay**, callback of `setTimeout` executes.

   ```
   This message is delayed by 2 seconds
   ```

---

### Final Output (in order):

```
Hello Node.js
Array: [ 1, 2, 3, 4 ]
This is the last line of synchronous code
This message is delayed by 2 seconds
```

---

### Example 2: sum.js

File: `sum.js`

```javascript
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(2, 3));
```

### Run:

```bash
node sum.js
```

### Output:

```
5
```

---

## 5. Key Theory

* **Synchronous code** runs line by line without waiting.
* **Asynchronous code** (like `setTimeout`, network calls) is scheduled and handled by the **event loop**.
* `index.js` is a convention → default entry file of a Node project.

---

## 6. Common Mistakes

* Running file in wrong directory → "Cannot find module" error.
* Forgetting `.js` extension → `node index` won’t work, must use `node index.js`.
* Not saving file before running.
* Expecting `setTimeout` to block → it never blocks; sync code always runs first.

---

## 7. Best Practices

* **REPL** → only for quick tests.
* **Files** → for real programs.
* Always **save** before running.
* Keep code organized in separate files.
* Use `index.js` as the entry point of your project.

---

## 8. Takeaway

* Tumne sikha ki Node.js me code run karne ke do tareeke hote hain.
* REPL se experiment karo, aur `.js` file se actual project likho.
* Sync vs async difference samajhna zaroori hai, warna output order galat samajhoge.

