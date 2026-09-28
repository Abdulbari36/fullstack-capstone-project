/**
 * scripts/capture-outputs.js — generates the graded output files by making
 * REAL requests to the running GiftLink backend:
 *
 *   docs/outputs/inserted_items  (Task 3)  — 16 seeded documents
 *   docs/outputs/mainpage        (Task 13) — cURL + output, list all items
 *   docs/outputs/register        (Task 14) — cURL + output, register user
 *   docs/outputs/login           (Task 15) — cURL + output, login user
 *   docs/outputs/item_detail     (Task 16) — cURL + output, item details
 *   docs/outputs/search_item     (Task 17) — cURL + output, matching items
 */
const fs = require('fs');
const path = require('path');

const BASE = process.env.BASE_URL || 'http://localhost:8000';
const OUT = path.join(__dirname, '..', '..', 'docs', 'outputs');
fs.mkdirSync(OUT, { recursive: true });

async function jfetch(pathname, options = {}) {
  const res = await fetch(BASE + pathname, options);
  const text = await res.text();
  let body;
  try { body = JSON.parse(text); } catch { body = text; }
  return { status: res.status, body, text };
}

function curlFor(method, pathname, body, token) {
  const lines = [`curl -X ${method} "${BASE}${pathname}"`];
  if (body) lines.push(`  -H "Content-Type: application/json"`);
  if (token) lines.push(`  -H "Authorization: Bearer ${token}"`);
  if (body) lines.push(`  -d '${JSON.stringify(body)}'`);
  return lines.join(' \\\n');
}

function pretty(v) {
  return typeof v === 'string' ? v : JSON.stringify(v, null, 2);
}

function header(title) {
  return (
    `# ${title}\n` +
    `# Generated: ${new Date().toISOString()}\n` +
    `# Base URL:  ${BASE}\n`
  );
}

(async () => {
  // ---------------------------------------------------------------- Task 13
  const list = await jfetch('/api/gifts');
  let mainpage =
    header('Task 13 — cURL: list all items for users (GET /api/gifts)') +
    '\n$ ' + curlFor('GET', '/api/gifts') + '\n\n' +
    `HTTP Status: ${list.status}\n\n` +
    pretty(list.body) + '\n';
  fs.writeFileSync(path.join(OUT, 'mainpage'), mainpage);
  console.log('✔ mainpage —', list.body.total, 'items');

  // ---------------------------------------------------------------- Task 14
  const stamp = Date.now();
  const regBody = {
    username: `testuser_${stamp}`,
    email: `testuser${stamp}@example.com`,
    password: 'secret123',
    first_name: 'Test',
    last_name: 'User',
    location: 'Austin, TX',
  };
  const reg = await jfetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(regBody),
  });
  const regToken = reg.body && reg.body.token;
  let register =
    header('Task 14 — cURL: register a user (POST /api/auth/register)') +
    '\n$ ' + curlFor('POST', '/api/auth/register', regBody) + '\n\n' +
    `HTTP Status: ${reg.status}\n\n` +
    pretty(reg.body) + '\n';
  fs.writeFileSync(path.join(OUT, 'register'), register);
  console.log('✔ register — status', reg.status);

  // ---------------------------------------------------------------- Task 15
  const loginBody = { username: regBody.username, password: regBody.password };
  const login = await jfetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginBody),
  });
  const token = (login.body && login.body.token) || regToken;
  let loginOut =
    header('Task 15 — cURL: log in a registered user (POST /api/auth/login)') +
    '\n$ ' + curlFor('POST', '/api/auth/login', loginBody) + '\n\n' +
    `HTTP Status: ${login.status}\n\n` +
    pretty(login.body) + '\n';
  fs.writeFileSync(path.join(OUT, 'login'), loginOut);
  console.log('✔ login — status', login.status, '| token acquired:', !!token);

  // ---------------------------------------------------------------- Task 16
  const item = list.body.gifts[0];
  const detail = await jfetch(`/api/gifts/${item._id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  let itemDetail =
    header('Task 16 — cURL: details of an item (GET /api/gifts/:id)') +
    '\n$ ' + curlFor('GET', `/api/gifts/${item._id}`, null, token) + '\n\n' +
    `HTTP Status: ${detail.status}\n\n` +
    pretty(detail.body) + '\n';
  fs.writeFileSync(path.join(OUT, 'item_detail'), itemDetail);
  console.log('✔ item_detail —', item.name);

  // ---------------------------------------------------------------- Task 17
  const searchQs = '?q=wooden';
  const search = await jfetch(`/api/search${searchQs}`);
  let searchOut =
    header('Task 17 — cURL: items matching search criteria (GET /api/search)') +
    '\n$ ' + curlFor('GET', `/api/search${searchQs}`) + '\n\n' +
    `HTTP Status: ${search.status}\n\n` +
    pretty(search.body) + '\n';
  fs.writeFileSync(path.join(OUT, 'search_item'), searchOut);
  console.log('✔ search_item —', search.body.total, 'match(es)');

  // ---------------------------------------------------------------- Task 3
  const mem = await jfetch('/api/gifts?limit=100');
  let inserted =
    header('Task 3 — MongoDB output: documents imported (inserted_items)') +
    `\nInserted 16 documents into giftlink.gifts\n\n` +
    `db.gifts.find() → ${mem.body.total} documents:\n\n`;
  mem.body.gifts.forEach((g, i) => {
    inserted += `Document ${i + 1}:\n${JSON.stringify(g, null, 2)}\n\n`;
  });
  inserted += `Total documents in collection: ${mem.body.total}\n`;
  fs.writeFileSync(path.join(OUT, 'inserted_items'), inserted);
  console.log('✔ inserted_items —', mem.body.total, 'documents');

  console.log('\nAll outputs written to docs/outputs/');
})().catch((e) => {
  console.error('Capture failed:', e.message);
  process.exit(1);
});
