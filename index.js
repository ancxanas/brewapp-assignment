import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import 'express-async-errors';

import { MONGODB_URI, PORT } from './utils/config';
import { unknownEndpoint, errorHandler } from './utils/middleware';
import { info, error } from './utils/logger';

import booksRouter from './controllers/books';

const app = express();

app.use(morgan('dev'));

mongoose.set('strictQuery', false);

info('connecting to', MONGODB_URI);

mongoose
  .connect(MONGODB_URI)
  .then(() => info('connected to MongoDB'))
  .catch((err) => {
    error('error connecting to MongoDB:', err.message);
  });

app.use(express.json());

app.use('/api/books', booksRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

app.listen(PORT, () => {
  info(`Server is running on ${PORT}`);
});
