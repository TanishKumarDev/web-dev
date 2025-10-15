## 🟢 4. Route Handlers and Middleware

---

### 🔹 Route Handlers

Express me **route handlers** wo functions hote hain jo ek request aane ke baad uska response handle karte hain.
Matlab: `app.get(path, callback)` → callback hi route handler hai.

Example:

```js
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});
```

---

### 🔹 Middleware

Middleware ek **function hota hai jo request → response cycle ke beech execute hota hai**.
Ye `req`, `res`, aur `next` ko accept karta hai.

* `req` → request object
* `res` → response object
* `next()` → agle middleware ya route handler ko control pass karta hai

👉 Middleware mainly use hota hai:

* Logging
* Authentication
* Body parsing
* Error handling

---

### ✅ Demo Code: Route Handlers + Middleware

```js
const express = require('express');
const app = express();

// --- Custom Middleware (logger) ---
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} at ${new Date().toLocaleTimeString()}`);
    next(); // pass control to next handler
};

// Apply middleware globally
app.use(logger);

// --- Route Handlers ---
app.get('/', (req, res) => {
    res.send('🏠 Home Page');
});

app.get('/about', (req, res) => {
    res.send('ℹ️ About Page');
});

// Route-specific middleware example
const checkAuth = (req, res, next) => {
    const isAuth = true; // just for demo, normally token/cookie check hota hai
    if (isAuth) {
        console.log("✅ Authenticated");
        next();
    } else {
        res.status(403).send('❌ Not Authorized');
    }
};

app.get('/dashboard', checkAuth, (req, res) => {
    res.send('📊 Welcome to Dashboard');
});

// --- Error Handling Middleware ---
app.use((err, req, res, next) => {
    console.error('🔥 Error:', err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(3000, () => {
    console.log('🚀 Server running on http://localhost:3000');
});
```

---

### 🔎 Breakdown

1. **Global Middleware** → `app.use(logger)` → sabhi routes me chalega.
2. **Route-Specific Middleware** → `/dashboard` me `checkAuth` lagaya.
3. **Error Middleware** → 4 parameters hote hain `(err, req, res, next)`.
