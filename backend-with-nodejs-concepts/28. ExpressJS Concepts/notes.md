
# **ExpressJS Concepts Project Documentation**

## **Project Structure**

```
28. ExpressJS Concepts/
├── config/
│   └── corsConfig.js              # CORS configuration
├── middleware/
│   ├── customMiddleware.js        # Custom middleware: logging, timestamp
│   ├── errorHandler.js            # Custom and global error handlers
│   ├── rateLimiter.js             # Request rate limiting middleware
│   └── urlVersioning.js           # API versioning middleware
├── models/
│   └── Book.ts                    # Example model (TypeScript)
├── routes/
│   └── item-routes.js             # API routes for items
├── .env                           # Environment variables
├── bigfile.txt                    # Example large file for streams
├── output.txt                      # Example output
├── package.json
├── package-lock.json
└── server.js                       # Main server entry point
```

---

## **1. Environment Setup (.env)**

* `.env` file stores secret keys, environment-specific settings, and configs.
* Example:

```env
PORT=3000
JWT_SECRET=your_secret_key
```

* **Concepts Learned**:

  * Never hardcode secrets in your code.
  * Use `dotenv` to load environment variables.

---

## **2. Server Setup (server.js)**

**Key Steps:**

1. **Load environment variables**

```js
require('dotenv').config();
```

2. **Initialize Express app**

```js
const express = require('express');
const app = express();
```

3. **Middleware Order Matters**

* Logger → Timestamp → CORS → JSON parser → API versioning → Rate Limiter → Routes → Global Error Handler

4. **Start Server**

```js
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

**Key Concepts Learned**:

* Middleware execution is sequential.
* Routes and middleware must be ordered carefully.
* Environment variables make the app configurable.

---

## **3. Custom Middleware (middleware/customMiddleware.js)**

**1. `requestLogger`**

* Logs every request method, URL, and timestamp.

```js
const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};
```

* **Common Mistake**: Accessing `req.method` outside middleware function → `undefined` error.

**2. `addTimeStamp`**

* Adds `requestTime` to each request for logging or response info.

**Concepts Learned**:

* Middleware functions always have `(req, res, next)`.
* They are chainable, executed in the order they are `use()`-d.

---

## **4. Error Handling (middleware/errorHandler.js)**

**1. Custom Error Class**

```js
class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
```

**2. Async Error Handler**

* Wraps async route handlers to automatically catch errors.

```js
const asyncErrorHandler = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);
```

**3. Global Error Handler**

* Catches all errors from routes and middleware.
* Handles:

  * `CustomError`
  * Database errors (Mongo)
  * Other server errors (500)

**Concepts Learned**:

* Avoid try/catch repetition in routes.
* Centralized error handling improves maintainability.

---

## **5. CORS Configuration (config/corsConfig.js)**

* Cross-Origin Resource Sharing allows frontend apps to communicate with your API.

```js
const cors = require('cors');
const configCors = () => cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
});
```

**Concepts Learned**:

* Only allow trusted origins.
* `credentials: true` allows cookies/auth headers.

---

## **6. Rate Limiting (middleware/rateLimiter.js)**

* Prevents abuse by limiting the number of requests per IP.

```js
const rateLimit = require('express-rate-limit');
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: 'Too many requests, please try again later.'
});
module.exports = apiLimiter;
```

**Concepts Learned**:

* Protects APIs from brute-force attacks.
* Can be applied globally or per-route.

---

## **7. URL Versioning (middleware/urlVersioning.js)**

* Supports multiple API versions:

```js
const urlVersioning = (supportedVersions = ['v1']) => (req, res, next) => {
    const versionMatch = req.originalUrl.match(/\/api\/(v[0-9]+)/);
    const version = versionMatch ? versionMatch[1] : null;

    if (version && supportedVersions.includes(version)) {
        req.apiVersion = version;
        return next();
    }

    return res.status(400).json({
        status: 'error',
        message: `API version not supported. Supported versions: ${supportedVersions.join(', ')}`
    });
};
```

**Concepts Learned**:

* Versioning ensures backward compatibility.
* Regex is used to extract version from URL.
* Exclude public routes (`/`) to prevent unnecessary 400 errors.

---

## **8. Routes (routes/item-routes.js)**

* Example of API routes with async error handling:

```js
router.get('/', asyncErrorHandler(async (req, res) => {
    res.json({ status: 'success', data: items });
}));
```

**Concepts Learned**:

* Use `asyncErrorHandler` for async route functions.
* Return proper HTTP status codes for success and errors.

---

## **9. File Streams (`bigfile.txt`)**

* Example to read large files in chunks:

```js
const fs = require('fs');
const readStream = fs.createReadStream('bigfile.txt', { highWaterMark: 16 });
readStream.on('data', chunk => console.log(chunk));
readStream.on('end', () => console.log('Done'));
```

**Concepts Learned**:

* Streams are memory-efficient for large files.
* `highWaterMark` controls chunk size.

---

## **10. Lessons from Debugging and Practice**

1. **Middleware Function Errors**

   * Mistake: Calling middleware like `requestLogger()` **without `req,res,next`**
   * Learned: Must pass the function reference, not execute prematurely.

2. **CORS Misconfiguration**

   * Mistake: `origin` check syntax error.
   * Learned: Always return `callback(null, true)` for allowed origins.

3. **Missing Modules**

   * Mistake: `express-rate-limit` not installed → `MODULE_NOT_FOUND`.
   * Learned: Install dependencies and handle conflicts with `--legacy-peer-deps`.

4. **API Versioning Errors**

   * Mistake: Root route blocked by versioning middleware.
   * Learned: Exclude public routes or add default version logic.

5. **Async Errors**

   * Mistake: Forgetting to wrap async routes → unhandled rejections.
   * Learned: `asyncErrorHandler` is essential for clean error propagation.

6. **Streams**

   * Mistake: Wrong file path → `ENOENT`.
   * Learned: Use `path.join(__dirname, 'filename')` for cross-platform paths.

**Reflection**:

> Debugging is an integral part of learning. By facing real errors, understanding stack traces, and fixing them, you’ve learned **middleware order, error handling, API versioning, rate limiting, and best practices in ExpressJS**. Each mistake was a step forward in mastering backend development.

---

## **11. Recommended Testing (Postman)**

1. **Test Root Route**

```
GET http://localhost:3000/
```

2. **Test API Versioning**

```
GET http://localhost:3000/api/v1/items
GET http://localhost:3000/api/v2/items
```

3. **Test Error Route**

```
GET http://localhost:3000/error
```

4. **Test Rate Limiter**

* Send more than 100 requests in 15 minutes → Should return 429 status.

---

## **12. Key Takeaways**

* **Middleware order matters**
* **Always use async error handlers for async routes**
* **Versioning ensures future-proof APIs**
* **Rate limiting protects your server**
* **Streams are efficient for large files**
* **Environment variables keep secrets safe**
