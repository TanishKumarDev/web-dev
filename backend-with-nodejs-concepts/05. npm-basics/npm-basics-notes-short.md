# 🎯 Section 5: Node Package Manager (NPM)

---

## 1. What is the Problem?

* Tum ek Node.js project likh rahe ho.
* Har baar **common functionality** (e.g., file handling, utilities, server setup) khud likhna boring & time-wasting hai.
* Agar tum chhoti si library chahte ho (e.g., lodash for math utils, express for server) → manually copy-paste karna impractical hai.

---

## 2. Why NPM? (The “Why”)

* **Code reuse**: Community ke ready-made packages use kar sakte ho.
* **Dependency management**: Tumhare project ko bataata hai ki kaunse packages use ho rahe hain aur kaunsi versions.
* **Scalability**: Jab project bada ho, manually manage karna impossible ho jata hai.

**Mindset:** Don’t reinvent the wheel 🚗 → Reuse community libraries.

---

## 3. How to Solve? (The “How”)

Solution → **NPM (Node Package Manager)**.

* Ye Node ke sath hi install hota hai.
* Ye tumhe allow karta hai:

  1. Project initialize karna (`npm init`).
  2. Dependencies install/remove karna.
  3. Alag-alag types of dependencies manage karna (runtime vs dev).
  4. Scripts likhna (`npm start`, `npm run dev`).

---

## 4. Key Concepts

### 🔹 package.json

* **Kya hai?** → Project ka blueprint (manifest).
* **Kya store karta hai?**

  * Project info (name, version, author).
  * Dependencies list.
  * Scripts.
* **Kaise banta hai?**

  ```bash
  npm init -y
  ```

**Example:**

```json
{
  "name": "npm-basics",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {},
  "devDependencies": {}
}
```

---

### 🔹 Dependencies vs DevDependencies

* **dependencies** → Required at runtime.
  Example: `express`, `lodash`.

  ```bash
  npm install express
  ```
* **devDependencies** → Sirf development ke liye.
  Example: `nodemon`, `jest`.

  ```bash
  npm install nodemon -D
  ```

---

### 🔹 node_modules & package-lock.json

* `node_modules` → Actual code of all installed packages (ignore in Git).
* `package-lock.json` → Locks exact versions (important for team consistency).

---

## 5. Hands-On Small Project 🛠

### Step 1: Create Folder

```bash
mkdir npm-basics && cd npm-basics
npm init -y
```

### Step 2: Install Dependencies

```bash
npm install lodash       # runtime dependency
npm install nodemon -D   # dev dependency
```

### Step 3: Write Code (index.js)

```javascript
const _ = require("lodash");

// Use lodash add function
console.log("Sum:", _.add(10, 5)); // Output: Sum: 15
```

### Step 4: Run

```bash
node index.js
```

Output:

```
Sum: 15
```

### Step 5: Add Script in package.json

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Now run:

```bash
npm run start
npm run dev
```

---

## 6. Common Mistakes ❌

* Running `npm init` in wrong folder → package.json galat jagah ban jata hai.
* Installing packages globally (`-g`) jab unnecessary ho.
* Manually editing package.json without running `npm install`.
* Deleting `node_modules` manually → use `npm uninstall`.

---

## 7. Best Practices ✅

* Always commit `package.json` and `package-lock.json` (not `node_modules`).
* Use `npm install` to sync team environments.
* Add useful scripts (`dev`, `test`).
* Run `npm audit fix` to patch security issues.

---

## 8. Quick Activity (Your Turn)

1. Ek new folder `npm-practice`.
2. Init project (`npm init -y`).
3. Install `chalk` (to style console logs).

   ```bash
   npm install chalk
   ```
4. Code likho `index.js` me:

   ```javascript
   const chalk = require("chalk");

   console.log(chalk.green("Success!"));
   console.log(chalk.red("Error!"));
   ```
5. Run with `node index.js`.

---

## 9. Takeaway 📝

* NPM = lifeline for real Node.js projects.
* `package.json` = project ka blueprint.
* Dependencies vs DevDependencies clear rakho.
* Always use scripts to simplify workflows.
