const express = require('express');
const httpProxy = require('express-http-proxy');
const authMiddleware = require('./middleware/authMiddleware');
const errorHandler = require('./middleware/errorhandler');
const logger = require('./utils/logger');

const app = express();
const port = 3000;

// Proxy routes (example)
app.use('/api/identity', authMiddleware, httpProxy('http://identity-service:3001'));
app.use('/api/posts', authMiddleware, httpProxy('http://post-service:3002'));
// Add others similarly

app.use(errorHandler);

app.listen(port, () => {
  logger.info(`API Gateway running on port ${port}`);
});