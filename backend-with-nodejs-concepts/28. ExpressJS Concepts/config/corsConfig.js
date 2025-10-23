// middleware/corsConfig.js
const cors = require('cors');

const configCors = () => {
  return cors({
    origin: (origin, callback) => {
      const allowedOrigins = ['http://localhost:3000'];

      // Allow requests with no origin (like mobile apps or curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    exposedHeaders: ['Content-Length', 'X-Kuma-Revision'],
    credentials: true,
    maxAge: 600 // 10 minutes cache for preflight requests
  });
};

module.exports = {configCors};
