/**
 * app.js — Express application for GiftLink backend.
 *
 * Task 7 requirement: this file includes a route serving /api/search
 * (mounted from routes/searchRoutes.js).
 *
 * Route map:
 *   GET  /                     — service banner
 *   GET  /healthz              — health probe (used by CI/CD + Docker)
 *   USE  /api/gifts            — item listings (giftRoutes)
 *   USE  /api/search           — item search/filter (searchRoutes)  <-- Task 7
 *   USE  /api/auth             — register/login/update (authRoutes)
 */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const giftRoutes = require('./routes/giftRoutes');
const searchRoutes = require('./routes/searchRoutes'); // searched items API
const authRoutes = require('./routes/authRoutes');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

// --- middleware -----------------------------------------------------------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// --- routes ---------------------------------------------------------------
app.get('/', (req, res) => {
  res.json({
    name: 'GiftLink API',
    description: 'Give away household items you no longer need — free item exchange',
    version: '1.0.0',
    endpoints: ['/api/gifts', '/api/gifts/:id', '/api/search', '/api/auth'],
  });
});

app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Item listings: /api/gifts and /api/gifts/:id
app.use('/api/gifts', giftRoutes);

// Search API — Task 7: app.js serves /api/search
app.use('/api/search', searchRoutes);

// Auth APIs — register, login, update user info
app.use('/api/auth', authRoutes);

// --- errors ---------------------------------------------------------------
app.use(notFound);
app.use(errorHandler);

module.exports = app;
