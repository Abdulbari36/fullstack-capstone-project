/**
 * middleware/auth.js — JWT authentication middleware.
 */
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'giftlink-dev-secret';

/** Verifies the Authorization: Bearer <token> header and attaches req.user. */
function authenticate(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // { id, username }
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

/** Alias kept for readability at call sites. */
const requireAuth = authenticate;

module.exports = { authenticate, requireAuth, JWT_SECRET };
