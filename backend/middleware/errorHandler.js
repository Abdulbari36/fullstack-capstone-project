/**
 * middleware/errorHandler.js — central error handling.
 */

/** Wrap async route handlers so rejected promises reach the error handler. */
function asyncHandler(fn) {
  return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}

/** 404 handler for unmatched API routes. */
function notFound(req, res) {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
}

/** Central error handler. */
function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  console.error('[error]', err.message);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Internal server error' });
}

module.exports = { asyncHandler, notFound, errorHandler };
