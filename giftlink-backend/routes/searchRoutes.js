/**
 * routes/searchRoutes.js — Search / filter routes for GiftLink.
 *
 * Task 6 requirement: this file contains code that filters items by
 * category (see `if (category) filter.category = category;` inside
 * buildSearchFilter below).
 *
 * Mounted at /api/search by app.js (Task 7).
 */
const express = require('express');
const Gift = require('../models/Gift');
const { asyncHandler } = require('../middleware/errorHandler');

const router = express.Router();

/**
 * Builds the Mongo filter from query params.
 * Supported params: category, q (keyword), condition, status, location.
 */
function buildSearchFilter({ category, q, condition, status, location }) {
  const filter = {};

  // --- Task 6: filter items by category -------------------------------
  if (category) {
    filter.category = category;
  }

  // Keyword search over name/description using the text index, with a
  // case-insensitive regex fallback for partial words.
  if (q) {
    filter.$or = [
      { name: { $regex: q, $options: 'i' } },
      { description: { $regex: q, $options: 'i' } },
    ];
  }

  if (condition) filter.condition = condition;
  if (status) filter.status = status;
  if (location) filter.location = { $regex: location, $options: 'i' };

  return filter;
}

/**
 * GET /api/search
 * Example: /api/search?category=Electronics&q=headphones&status=Available
 */
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const filter = buildSearchFilter(req.query);
    const { page = 1, limit = 20, sort = 'newest' } = req.query;

    const sortMap = {
      newest: { createdAt: -1 },
      oldest: { createdAt: 1 },
      name: { name: 1 },
    };

    const [gifts, total] = await Promise.all([
      Gift.find(filter)
        .sort(sortMap[sort] || sortMap.newest)
        .skip((Number(page) - 1) * Number(limit))
        .limit(Number(limit))
        .populate('posted_by', 'username avatar_url')
        .lean(),
      Gift.countDocuments(filter),
    ]);

    res.json({
      query: req.query,
      filter,
      total,
      page: Number(page),
      count: gifts.length,
      results: gifts,
    });
  })
);

/**
 * GET /api/search/categories
 * Distinct category list, handy for building the frontend filter dropdown.
 */
router.get(
  '/categories',
  asyncHandler(async (req, res) => {
    const categories = await Gift.distinct('category');
    res.json({ categories });
  })
);

module.exports = router;
