/**
 * index.js — GiftLink backend entry point.
 *
 * Task 8 requirement: this file contains a line that imports the
 * `natural` npm package. Natural is used to tokenize and stem free-text
 * search queries so "running chairs" matches "runs chair".
 */
const express = require('express');

// === Task 8: import the natural npm package ===
const natural = require('natural');
const { connectToDatabase, disconnectDatabase } = require('./db');

const app = require('./app');
const seedIfEmpty = require('./seed/seed-memory');

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || '0.0.0.0';

/**
 * Task 8 support: use the natural library to expand a raw query into
 * stemmed keywords. Exported so searchRoutes could opt into it and so
 * tests can exercise it.
 */
function expandQueryWithNatural(query) {
  const tokenizer = new natural.WordTokenizer();
  const stemmer = natural.PorterStemmer;
  const tokens = tokenizer.tokenize(String(query || '').toLowerCase()) || [];
  const stemmed = tokens.map((t) => stemmer.stem(t));
  return { tokens, stemmed };
}

if (require.main === module) {
  (async function start() {
    await connectToDatabase();

    // Convenience for demos/CI: seed the 16 capstone items if collection
    // is empty. Set SEED_ON_START=false to disable.
    if (process.env.SEED_ON_START !== 'false') {
      await seedIfEmpty();
    }

    app.listen(PORT, HOST, () => {
      console.log(`[giftlink] API listening on http://${HOST}:${PORT}`);
      const sample = expandQueryWithNatural('Wooden dining tables');
      console.log('[giftlink] natural sample:', JSON.stringify(sample));
    });
  })().catch((err) => {
    console.error('[giftlink] Failed to start:', err);
    process.exit(1);
  });

  process.on('SIGINT', async () => {
    await disconnectDatabase();
    process.exit(0);
  });
}

module.exports = { expandQueryWithNatural };
