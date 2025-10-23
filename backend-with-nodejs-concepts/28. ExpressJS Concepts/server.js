require('dotenv').config();
const express = require('express');
const { configCors } = require('./config/corsConfig');
const { requestLogger, addTimeStamp } = require('./middleware/customMiddleware');
const { globalErrorHandler, CustomError } = require('./middleware/errorHandler');
const { urlVersioning } = require('./middleware/urlVersioning');
const apiLimiter = require('./middleware/rateLimiter');
const itemsRouter = require('./routes/item-routes'); // Import items router

const app = express();
const PORT = process.env.PORT || 3000;

// -------------------- MIDDLEWARE SETUP --------------------

// Custom middlewares
app.use(requestLogger);     // Log each request
app.use(addTimeStamp);      // Add timestamp to request

// Enable CORS
app.use(configCors());

// Parse incoming JSON requests
app.use(express.json());

// API Versioning Middleware (supports v1 and v2)
app.use(urlVersioning(['v1', 'v2']));

// Apply rate limiter to all requests
app.use(apiLimiter);

// -------------------- ROUTES --------------------

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API',
    time: req.requestTime,
  });
});

// Mount items router (with versioned path if needed)
app.use('/api/v1/items', itemsRouter); 

// Example route to test custom error handling
app.get('/error', (req, res, next) => {
  next(new CustomError('Something went wrong!', 400));
});

// -------------------- GLOBAL ERROR HANDLER --------------------
app.use(globalErrorHandler);

// -------------------- SERVER START --------------------
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
