/**
 * seed/seed.js — inserts the 16 capstone items into a real MongoDB
 * (set MONGODB_URI, then `npm run seed`).
 *
 * Task 3: run this and save the driver output to inserted_items.
 */
require('dotenv').config();
const { MongoClient } = require('mongodb');
const items = require('./seed-data');

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('Set MONGODB_URI first, e.g. MONGODB_URI="mongodb://127.0.0.1:27017" npm run seed');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  try {
    await client.connect();
    const coll = client.db('giftlink').collection('gifts');
    await coll.deleteMany({});
    const result = await coll.insertMany(items);
    console.log(`Inserted ${result.insertedCount} documents into giftlink.gifts`);
    console.dir(result.insertedIds, { depth: null });

    // Show the documents like mongosh's db.gifts.find() output (Task 3).
    const docs = await coll.find({}).toArray();
    console.log('--- inserted_items ---');
    docs.forEach((d) => console.log(d));
    console.log(`--- ${docs.length} documents in giftlink.gifts ---`);
  } finally {
    await client.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
