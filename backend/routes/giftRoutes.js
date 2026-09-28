/**
 * routes/giftRoutes.js — Gift (item listing) routes.
 *
 * Task 5 requirement: this file connects to the database with
 * connectToDatabase() and serves:
 *   - /api/gifts      (list all gifts / create a gift)
 *   - /api/gifts/:id  (get, update, delete a single gift)
 * plus /api/gifts/:id/comments for the comments feature.
 */
const express = require('express');
const mongoose = require('mongoose');
const { connectToDatabase } = require('../db');
const Gift = require('../models/Gift');
const { authenticate } = require('../middleware/auth');
const { asyncHandler } = require('../middleware/errorHandler');

const router = express.Router();

// Express 5 makes routers async-aware, but the explicit connection below
// documents the Task 5 requirement and guarantees the DB is ready before
// any gift query runs.
router.use(async (req, res, next) => {
  await connectToDatabase();
  next();
});

/**
 * GET /api/gifts
 * Lists every item. Optional query params:
 *   ?category=Furniture  ?status=Available  ?page=1  ?limit=20
 */
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const { category, status, page = 1, limit = 20 } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (status) filter.status = status;

    const gifts = await Gift.find(filter)
      .sort({ createdAt: -1 })
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .populate('posted_by', 'username avatar_url')
      .lean();

    const total = await Gift.countDocuments(filter);
    res.json({ total, page: Number(page), count: gifts.length, gifts });
  })
);

/**
 * GET /api/gifts/:id
 * Details for a single item, including comments.
 */
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ error: 'Invalid item id' });
    }
    const gift = await Gift.findById(id).populate('posted_by', 'username avatar_url').lean();
    if (!gift) return res.status(404).json({ error: 'Item not found' });
    res.json(gift);
  })
);

/**
 * POST /api/gifts  (auth required)
 * Creates a new gift listing.
 */
router.post(
  '/',
  authenticate,
  asyncHandler(async (req, res) => {
    const { name, description, category, condition, image_url, location } = req.body;
    const gift = await Gift.create({
      name,
      description,
      category,
      condition,
      image_url,
      location,
      posted_by: req.user.id,
    });
    res.status(201).json(gift);
  })
);

/**
 * PUT /api/gifts/:id  (auth required)
 * Updates a gift. Concurrency-safe:findOneAndUpdate with optimistic
 * versioning (__v) — a concurrent edit bumps the version and ours fails
 * instead of silently overwriting.
 */
router.put(
  '/:id',
  authenticate,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ error: 'Invalid item id' });
    }
    const allowed = ['name', 'description', 'category', 'condition', 'image_url', 'location', 'status'];
    const updates = {};
    allowed.forEach((k) => {
      if (req.body[k] !== undefined) updates[k] = req.body[k];
    });

    const gift = await Gift.findOneAndUpdate(
      { _id: id, __v: req.body.__v ?? undefined },
      { $set: updates, $inc: { __v: 1 } },
      { new: true, runValidators: true }
    );

    if (!gift) return res.status(404).json({ error: 'Item not found (or edited concurrently — retry)' });
    res.json(gift);
  })
);

/**
 * DELETE /api/gifts/:id  (auth required)
 */
router.delete(
  '/:id',
  authenticate,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ error: 'Invalid item id' });
    }
    const gift = await Gift.findByIdAndDelete(id);
    if (!gift) return res.status(404).json({ error: 'Item not found' });
    res.json({ message: 'Item deleted', id });
  })
);

/**
 * POST /api/gifts/:id/comments  (auth required)
 * Atomic push into the comments array — concurrent comments never lose data.
 */
router.post(
  '/:id/comments',
  authenticate,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    if (!text || !text.trim()) return res.status(400).json({ error: 'Comment text is required' });

    const gift = await Gift.findByIdAndUpdate(
      id,
      { $push: { comments: { user: req.user.id, text: text.trim() } } },
      { new: true, runValidators: true }
    ).populate('comments.user', 'username avatar_url');

    if (!gift) return res.status(404).json({ error: 'Item not found' });
    res.status(201).json(gift.comments);
  })
);

module.exports = router;
