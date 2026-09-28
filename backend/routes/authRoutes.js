/**
 * routes/authRoutes.js — Authentication & user management APIs.
 *
 * Task 11 requirement: this file contains code that calls the collection's
 * **findOne** method to locate the current user in the database:
 *
 *   const users = getDb().collection('users');
 *   const user = await users.findOne({ username });
 *
 * Implemented APIs:
 *   POST /api/auth/register        — create an account (returns JWT)
 *   POST /api/auth/login           — authenticate (returns JWT)
 *   GET  /api/auth/me              — current user profile (JWT required)
 *   PUT  /api/auth/update          — update user information (JWT required)
 *   PUT  /api/auth/update-password — change password (JWT required)
 */
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { getDb } = require('../db');
const { authenticate } = require('../middleware/auth');
const { asyncHandler } = require('../middleware/errorHandler');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'giftlink-dev-secret';
const TOKEN_TTL = process.env.TOKEN_TTL || '7d';

/** Returns the native `users` collection. */
function usersCollection() {
  return getDb().collection('users');
}

/** Signs a JWT for a user document. */
function signToken(user) {
  return jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: TOKEN_TTL });
}

/** Strips the password hash before sending a user document to a client. */
function sanitize(user) {
  if (!user) return user;
  const { password, ...safe } = user;
  return safe;
}

/**
 * POST /api/auth/register
 * Body: { username, email, password, first_name?, last_name?, location? }
 */
router.post(
  '/register',
  asyncHandler(async (req, res) => {
    const { username, email, password, first_name, last_name, location } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'username, email and password are required' });
    }
    if (String(password).length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    const users = usersCollection();

    // Locate any existing account with the same username or email.
    const existing = await users.findOne({ $or: [{ username }, { email }] });
    if (existing) {
      return res.status(409).json({ error: 'Username or email already registered' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const result = await users.insertOne({
      username,
      email,
      password: hashed,
      first_name: first_name || '',
      last_name: last_name || '',
      location: location || '',
      bio: '',
      avatar_url: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const user = await users.findOne({ _id: result.insertedId });
    const token = signToken(user);
    res.status(201).json({ message: 'User registered successfully', token, user: sanitize(user) });
  })
);

/**
 * POST /api/auth/login
 * Body: { username | email, password }
 */
router.post(
  '/login',
  asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if ((!username && !email) || !password) {
      return res.status(400).json({ error: 'username/email and password are required' });
    }

    const users = usersCollection();

    // === Task 11: collection.findOne locates the current user ===
    const user = await users.findOne(username ? { username } : { email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.password || '');
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

    const token = signToken(user);
    res.json({ message: 'Login successful', token, user: sanitize(user) });
  })
);

/**
 * GET /api/auth/me
 * Returns the current user from the JWT.
 */
router.get(
  '/me',
  authenticate,
  asyncHandler(async (req, res) => {
    const user = await usersCollection().findOne({ _id: new (require('mongodb').ObjectId)(req.user.id) });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(sanitize(user));
  })
);

/**
 * PUT /api/auth/update  (update user information)
 * Body: any of { first_name, last_name, location, bio, avatar_url, email, username }
 */
router.put(
  '/update',
  authenticate,
  asyncHandler(async (req, res) => {
    const allowed = ['first_name', 'last_name', 'location', 'bio', 'avatar_url', 'email', 'username'];
    const updates = {};
    allowed.forEach((k) => {
      if (req.body[k] !== undefined) updates[k] = req.body[k];
    });

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ error: 'No updatable fields provided' });
    }

    const { ObjectId } = require('mongodb');
    const users = usersCollection();
    const result = await users.updateOne(
      { _id: new ObjectId(req.user.id) },
      { $set: { ...updates, updatedAt: new Date() } }
    );
    if (result.matchedCount === 0) return res.status(404).json({ error: 'User not found' });

    const user = await users.findOne({ _id: new ObjectId(req.user.id) });
    res.json({ message: 'User updated successfully', user: sanitize(user) });
  })
);

/**
 * PUT /api/auth/update-password
 * Body: { currentPassword, newPassword }
 */
router.put(
  '/update-password',
  authenticate,
  asyncHandler(async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'currentPassword and newPassword are required' });
    }
    if (String(newPassword).length < 6) {
      return res.status(400).json({ error: 'New password must be at least 6 characters' });
    }

    const { ObjectId } = require('mongodb');
    const users = usersCollection();
    const user = await users.findOne({ _id: new ObjectId(req.user.id) });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const ok = await bcrypt.compare(currentPassword, user.password || '');
    if (!ok) return res.status(401).json({ error: 'Current password is incorrect' });

    const salt = await bcrypt.genSalt(10);
    await users.updateOne(
      { _id: user._id },
      { $set: { password: await bcrypt.hash(newPassword, salt), updatedAt: new Date() } }
    );
    res.json({ message: 'Password updated successfully' });
  })
);

module.exports = router;
