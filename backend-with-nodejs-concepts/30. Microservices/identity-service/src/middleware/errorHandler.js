const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/identity-service');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./utils/logger');

const app = express();
const port = 3001;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.info('MongoDB connected'))
  .catch(err => logger.error(err));

app.use('/api', routes);
app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Identity Service running on port ${port}`);
});