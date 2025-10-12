# Book-store-api-development with authentication and authorization

extend "book-store-api-development" to include authentication and authorization in a clean, organized, and well-explained way.

---

## 1️⃣ Update Project Structure

We will add a few new folders/files:

```
📁book-store-api-development-with-authN-and-authZ
│
├── 📁controllers
│   ├── authController.js          // Handles login/signup
│   └── bookController.js
│
├── 📁middleware
│   └── authMiddleware.js          // JWT validation & role-based access
│
├── 📁models
│   ├── book.js
│   └── user.js                    // New User model
│
├── 📁routes
│   ├── authRoutes.js              // Login & signup routes
│   └── bookRoutes.js
│
└── server.js
```

---

## 2️⃣ Install Dependencies

You already have `express` & `mongoose`. We need **Bcrypt** and **JWT**:

```bash
npm install bcrypt jsonwebtoken dotenv
```

* **bcrypt** → for password hashing.
* **jsonwebtoken (JWT)** → for token-based auth.
* **dotenv** → manage secrets like JWT keys.

---

## 3️⃣ Create User Model

```js
// 📁models/user.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
```

**Why & How:**

* `pre('save')` → automatically hashes passwords before storing.
* `comparePassword()` → checks login password against hash.
* `role` → used for **RBAC** (admin vs user).

---

## 4️⃣ Authentication Controller

```js
// 📁controllers/authController.js
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Signup
exports.signup = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const user = new User({ username, email, password, role });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || 'secretkey',
      { expiresIn: '1d' }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
```

**Explanation:**

* **Signup** → creates a user; password is hashed automatically.
* **Login** → validates credentials → returns JWT token for stateless auth.
* `JWT_SECRET` → keep it secret (use `.env` in real projects).

---

## 5️⃣ Auth Middleware

```js
// 📁middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// Verify token and attach user to req
exports.protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer '))
      return res.status(401).json({ error: 'Unauthorized' });

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secretkey');

    req.user = decoded; // { id, role }
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token invalid or expired' });
  }
};

// Role-based access
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return res.status(403).json({ error: 'Forbidden: Insufficient rights' });
    next();
  };
};
```

**Explanation:**

* `protect` → ensures **only authenticated users** can access route.
* `restrictTo` → ensures **only specific roles** (like admin) can perform action.

---

## 6️⃣ Auth Routes

```js
// 📁routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);

module.exports = router;
```

---

## 7️⃣ Update Book Routes for Authorization

```js
// 📁routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

// Public routes (anyone logged in can read)
router.get('/', protect, bookController.getAllBooks);
router.get('/:id', protect, bookController.getBookById);

// Admin-only routes
router.post('/', protect, restrictTo('admin'), bookController.createBook);
router.put('/:id', protect, restrictTo('admin'), bookController.updateBook);
router.delete('/:id', protect, restrictTo('admin'), bookController.deleteBook);

module.exports = router;
```

---

## 8️⃣ Update Server.js

```js
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

// MongoDB
mongoose.connect('mongodb+srv://...your-uri...', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes);

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
```

---

## ✅ Key Notes

* **Authentication** → `/signup` & `/login` → user proves identity.
* **Authorization** → restrict CRUD actions by role (`user` vs `admin`).
* **Bcrypt** → secure password storage.
* **JWT** → stateless auth; sent in `Authorization: Bearer <token>`.
* **Middleware** → centralized security; easy to maintain & scale.
* **RBAC** → flexible for future roles (editor, super-admin, etc).

---

## 💡 Next Steps

1. Add **.env** for secrets:

```
JWT_SECRET=supersecretkey
MONGO_URI=your-mongodb-uri
```

2. Use `dotenv`:

```js
require('dotenv').config();
```

3. Test with **Postman**:

* Signup → POST `/api/auth/signup`
* Login → POST `/api/auth/login` → get token
* Access `/api/books` routes with `Authorization: Bearer <token>` header
* Only admins can create/update/delete books.
