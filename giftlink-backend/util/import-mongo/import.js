/**
 * util/import-mongo/import.js — Task 3: import the 16 capstone gift items
 * into MongoDB.
 *
 * Run from giftlink-backend/util/import-mongo:
 *
 *   npm start
 *
 * Uses the parent project's mongodb driver (resolved via the
 * giftlink-backend/node_modules tree) and reuses seed-data.js so the
 * imported documents match the app's data exactly.
 *
 * Target database: giftlink (collection: gifts)
 * Default URI: mongodb://127.0.0.1:27017 (override with MONGODB_URI)
 */
const path = require('path');

// Resolve the mongodb driver from the parent project's dependencies.
const { MongoClient } = require(path.join(
  __dirname,
  '..',
  '..',
  'node_modules',
  'mongodb'
));

const seedData = require('../../seed/seed-data');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const DB_NAME = 'giftlink';
const COLLECTION = 'gifts';

async function importItems() {
  console.log('Starting GiftLink MongoDB import...');
  console.log(`Target: ${MONGO_URI} → database "${DB_NAME}", collection "${COLLECTION}"`);

  const client = new MongoClient(MONGO_URI, { serverSelectionTimeoutMS: 8000 });

  try {
    await client.connect();
    console.log('Connected to MongoDB.');

    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION);

    const existing = await collection.countDocuments();
    if (existing > 0) {
      console.log(`Collection already has ${existing} documents — clearing first.`);
      await collection.deleteMany({});
    }

    const docs = seedData.map((item) => ({
      ...item,
      image_url: '',
      status: 'Available',
      comments: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    const result = await collection.insertMany(docs);
    console.log(`Inserted ${result.insertedCount} documents into ${DB_NAME}.${COLLECTION}`);

    const total = await collection.countDocuments();
    console.log(`Verification: db.gifts.countDocuments() → ${total}\n`);

    if (total !== 16) {
      throw new Error(`Expected 16 documents, found ${total}`);
    }

    console.log(`db.gifts.find() → ${total} documents:\n`);
    const allDocs = await collection.find({}).sort({ createdAt: 1, _id: 1 }).toArray();
    allDocs.forEach((doc, i) => {
      console.log(`Document ${i + 1}:`);
      console.log(JSON.stringify(doc, null, 2));
      console.log('');
    });

    console.log(`Total documents in collection: ${total}`);
    console.log('Import completed successfully — 16 documents in giftlink.gifts');
  } catch (err) {
    console.error('Import failed:', err.message);
    process.exitCode = 1;
  } finally {
    await client.close();
    console.log('MongoDB connection closed.');
  }
}

importItems();