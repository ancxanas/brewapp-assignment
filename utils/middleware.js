import { info } from './logger';

const unknownEndpoint = (_req, res) => {
  res.status(404).json({ error: 'unknown endpoint' });
};

const errorHandler = (err, _req, res, next) => {
  info(err.message);

  if (err.name === 'CastError') {
    res.status(400).json({ error: 'malformatted id' });
  } else if (err.name === 'ValidationError') {
    res.status(400).json({ error: err.message });
  }

  next();
};

export { unknownEndpoint, errorHandler };
