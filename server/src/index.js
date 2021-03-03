/* eslint-disable comma-dangle */
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const { notFound, errorHandler } = require('./middlewares');

const app = express();
const PORT = process.env.PORT || 3500;

app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

// 404 Page Handler
app.use(notFound);

// General -> ❌ <- Error handler Must have 4 arguements
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on Port:${PORT}`);
});
