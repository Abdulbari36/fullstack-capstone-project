/**
 * seed/seed-memory.js — seeds the 16 capstone items at server start when
 * the gifts collection is empty. Works with any connected Mongoose
 * connection (real Mongo or the in-memory fallback in db.js).
 */
const Gift = require('../models/Gift');
const items = require('./seed-data');

/** Idempotent seed: only inserts when there are no gifts yet. */
async function seedIfEmpty() {
  const count = await Gift.estimatedDocumentCount();
  if (count > 0) {
    console.log(`[seed] gifts collection already has ${count} documents — skipping`);
    return { inserted: 0, skipped: true };
  }

  const docs = await Gift.insertMany(items);
  console.log(`[seed] Inserted ${docs.length} documents into gifts`);
  return { inserted: docs.length, skipped: false };
}

module.exports = seedIfEmpty;
