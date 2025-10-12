
# ⚙️ Section 2: Installing Node.js

*(06:23 – 09:51)*

### 1️⃣ What is Node.js?

* Node.js = Engine to run **JavaScript outside browser**.
* Based on **V8 Engine (Chrome ka JS engine)**.
* Provides backend features:

  * File system access
  * Network requests
  * Non-blocking (event-driven, async)

👉 Without Node.js → JS sirf browser me chalega, backend bana hi nahi sakte.

---

### 2️⃣ Why Install Node.js?

* Run JS in terminal, servers, cloud.
* Get **npm (Node Package Manager)** → install 3rd party libs (express, mongoose, etc.).
* Foundation for backend apps.

---

### 3️⃣ How to Install (Step-by-Step)

1. Go to [nodejs.org](https://nodejs.org).
2. Download **LTS version** (Long-Term Support → stable for production).

   * Don’t choose "Current" (unstable).
3. Install like normal software (next → next → finish).

   * Important: Tick **“Add to PATH”**.
4. Verify:

   ```bash
   node -v   # shows Node version
   npm -v    # shows npm version
   ```

---

### 4️⃣ Common Problems

* ❌ `node not recognized` → PATH not set.
* ❌ Installed "Current" instead of "LTS" → may face bugs later.
* ❌ Didn’t restart terminal → old PATH cached.

---

### 5️⃣ Best Practices

* Always use **LTS version** for projects.
* Verify both `node` and `npm`.
* Prefer **VS Code terminal** for practice.

---

### 6️⃣ Big Picture (Backend Context)

Node.js installation = foundation.

* Later sections: Run JS files → Build servers → Connect to DB → Deploy apps.
* Without Node → backend coding start hi nahi kar paoge.

---

✅ **Takeaway Section 2**
Installation step = Entry Gate of backend world.
Confirm with `node -v` and `npm -v`. Once done, you’re ready to run your first backend script.
