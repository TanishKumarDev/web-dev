## 🟢 3. Implementing Routing and Route Parameters

Express me routes define karne ka simple tariqa hota hai:

* `app.get()` → GET request ke liye
* `app.post()` → POST request ke liye
* `app.put()` → PUT request ke liye
* `app.delete()` → DELETE request ke liye

Aur **Route Parameters** (`:paramName`) allow karte hain dynamic values capture karne ke liye.

---

### ✅ Example: Multiple Routes + Route Params

```js
const express = require('express');
const app = express();

// Home Route
app.get('/', (req, res) => {
    res.send('Hello from Home page!');
});

// About Route
app.get('/about', (req, res) => {
    res.send('Welcome to About page!');
});

// Contact Route
app.get('/contact', (req, res) => {
    res.send('This is Contact page.');
});

// Route with Parameters
app.get('/user/:id', (req, res) => {
    const userId = req.params.id; // capture id from URL
    res.send(`User ID is: ${userId}`);
});

// Multiple Params Example
app.get('/product/:category/:id', (req, res) => {
    const { category, id } = req.params; // destructuring
    res.send(`Category: ${category}, Product ID: ${id}`);
});

// Start server
app.listen(3000, () => {
    console.log('🚀 Server running on http://localhost:3000');
});
```

---

### 🔹 How it Works

1. `/about` → fixed route → `"Welcome to About page!"`
2. `/user/101` → dynamic route → `"User ID is: 101"`
3. `/product/electronics/55` → multiple params → `"Category: electronics, Product ID: 55"`
