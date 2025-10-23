// middleware/errorHandler.js

// 1️⃣ Custom Error Class
class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'CustomError';
    Error.captureStackTrace(this, this.constructor);
  }
}

// 2️⃣ Async Error Handler (for controllers)
const asyncErrorHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// 3️⃣ Local Error Handler (optional for specific routes)
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message: err.message || 'Internal Server Error',
  });
};

// 4️⃣ Global Error Handler (final middleware)
const globalErrorHandler = (err, req, res, next) => {
  console.error('🔥 Global Error Handler:', err.stack);

  // Handle known custom errors
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  // Handle MongoDB-specific errors
  if (err.name === 'MongoError' || err.name === 'MongooseError') {
    return res.status(500).json({
      status: 'error',
      message: 'Database Error',
    });
  }

  // Default fallback for unknown errors
  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
};

module.exports = {
  CustomError,
  asyncErrorHandler,
  errorHandler,
  globalErrorHandler,
};

// ✅ Usage Example
// In Controller:

// const { asyncErrorHandler, CustomError } = require('../middleware/errorHandler');

// const getUser = asyncErrorHandler(async (req, res, next) => {
//   const user = await User.findById(req.params.id);
//   if (!user) throw new CustomError('User not found', 404);
//   res.json(user);
// });

// // In server.js:
// const express = require('express');
// const { globalErrorHandler } = require('./middleware/errorHandler');

// const app = express();

// // other middlewares & routes
// app.use(express.json());
// app.use('/api/users', require('./routes/userRoutes'));

// // global error handler (must be last)
// app.use(globalErrorHandler);

// app.listen(3000, () => console.log('Server running on port 3000'));
