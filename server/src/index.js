/* eslint-disable comma-dangle */
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/connect');

connectDB();
const { notFound, errorHandler } = require('./middlewares');

// Importing Routes
const logRoutes = require('./api/logs');

const app = express();
const PORT = process.env.PORT || 3500;

// Middleware
app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json());

// Routing Start
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

app.use('/api/logs', logRoutes);

// 404 Page Handler
app.use(notFound);

// General -> ❌ <- Error handler Must have 4 arguements
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on Port:${PORT}`);
});
