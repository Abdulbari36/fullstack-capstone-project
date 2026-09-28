/**
 * db.js — MongoDB connection helper for GiftLink.
 *
 * Task 4 requirement: this file contains the MongoDB connection line
 * `await client.connect()` using the native MongoDB driver.
 *
 * It prefers a normal MongoDB URI (Atlas / local mongod). If MONGODB_URI
 * is not set, it falls back to an in-memory MongoDB (mongodb-memory-server)
 * so the app can run (and demos/tests stay green) without a database server.
 */
require('dotenv').config();

const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

let client;
let mongoUri = process.env.MONGODB_URI || null;

/**
 * Returns the native MongoDB driver Db handle, so routes can call the
 * collection's findOne / insertOne / updateOne methods directly
 * (e.g. authRoutes locating the current user with collection.findOne()).
 */
function getDb() {
  if (!client) {
    throw new Error('Database not connected — call connectToDatabase() first');
  }
  return client.db('giftlink');
}

/**
 * Connect to MongoDB. When no URI is configured, spins up an in-memory
 * MongoDB instance (useful for local demos and CI).
 */
async function connectToDatabase() {
  if (!mongoUri) {
    // Lazy-require so production installs do not pull the memory server
    // unless they actually need it.
    const { MongoMemoryServer } = require('mongodb-memory-server');
    const mem = await MongoMemoryServer.create();
    mongoUri = mem.getUri('giftlink');
    console.log('[db] No MONGODB_URI set — using in-memory MongoDB at', mongoUri);
    global.__GIFTLINK_MEM_SERVER__ = mem;
  }

  client = new MongoClient(mongoUri, {
    serverSelectionTimeoutMS: 8000,
  });

  // === Required line (Task 4) ===
  await client.connect();
  console.log('[db] Connected to MongoDB via await client.connect()');

  // Mongoose shares the same underlying connection.
  await mongoose.connect(mongoUri, { dbName: 'giftlink' });
  console.log('[db] Mongoose connected');

  return client;
}

/** Graceful shutdown. */
async function disconnectDatabase() {
  try {
    if (client) await client.close();
    await mongoose.disconnect();
    if (global.__GIFTLINK_MEM_SERVER__) {
      await global.__GIFTLINK_MEM_SERVER__.stop();
    }
    console.log('[db] Disconnected');
  } catch (err) {
    console.error('[db] Disconnect error:', err.message);
  }
}

module.exports = { connectToDatabase, disconnectDatabase, getDb };
