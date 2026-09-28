# Full Stack Capstone — Assignment Answers

**Repository:** https://github.com/Abdulbari36/fyp-javascript
**Project:** GiftLink — Full Stack Capstone Project

---

## Question 1 — Task 1 (2 pts): Public GitHub URL of `user-story.md` (user story template)

**Answer:**

```
https://github.com/Abdulbari36/fyp-javascript/blob/main/docs/user-story.md
```

The file contains the user story template (Title / As a… I want… so that… / Acceptance Criteria / Priority / Label / Story Points) plus 9 filled-in user stories.

---

## Question 2 — Task 2 (4 pts): Upload `userstories.png` — GitHub Issues screenshot

**Deliverable:** `userstories.png` (screenshot — must be taken manually, see below)

The screenshot must show the repository name **fullstack-capstone-project** and at least eight user stories labeled `new`, `icebox`, `technical debt`, or `backlog`.

**How to capture it:**

1. Push this repo to GitHub (public).
2. Go to **Issues → New issue** and create the user stories listed in `docs/github-issues.md` (US1–US10), using the body text from `docs/user-story.md`.
3. Create the four labels under **Issues → Labels → New label**: `new`, `icebox`, `technical debt`, `backlog` — and attach them to the issues as listed.
4. Open the **Issues** tab so the repository name and all labeled issues are visible in one screen.
5. Take a full-window screenshot and save it as **userstories.png**.

> ⚠️ **Note:** This repo is named `fyp-javascript`, but Task 2 requires the screenshot to show the repo name "fullstack-capstone-project". Either rename the GitHub repository to `fullstack-capstone-project` (Settings → General → Repository name), or create a new repo with that name and push this code there before taking the screenshot.

---

## Question 3 — Task 3 (2 pts): Terminal output of MongoDB data saved as `inserted_items` (16 documents)

**Answer:**

```
Inserted 16 documents into giftlink.gifts

db.gifts.find() → 16 documents:

Document 1:
{
  "_id": "6aba79fa3e8b36a465071d84",
  "name": "Baby Clothes Bundle 0-6m",
  "description": "Twenty-plus onesies, sleepers and hats for ages 0-6 months, all laundered.",
  "category": "Clothing",
  "condition": "Good",
  "image_url": "",
  "location": "Pflugerville, TX",
  "status": "Available",
  "comments": [],
  "__v": 0,
  "createdAt": "2026-09-28T14:30:18.561Z",
  "updatedAt": "2026-09-28T14:30:18.561Z"
}

Document 2:
{
  "_id": "6aba79fa3e8b36a465071d85",
  "name": "Introduction to Algorithms (CLRS)",
  "description": "Third edition hardcover. Light highlighting in the first four chapters.",
  "category": "Books",
  "condition": "Good",
  "image_url": "",
  "location": "Austin, TX",
  "status": "Available",
  "comments": [],
  "__v": 0,
  "createdAt": "2026-09-28T14:30:18.561Z",
  "updatedAt": "2026-09-28T14:30:18.561Z"
}

Document 3:
{
  "_id": "6aba79fa3e8b36a465071d86",
  "name": "Clean Code by Robert Martin",
  "description": "Paperback, like new. A must-read for every software developer.",
  "category": "Books",
  "condition": "Like New",
  "image_url": "",
  "location": "Georgetown, TX",
  "status": "Available",
  "comments": [],
  "__v": 0,
  "createdAt": "2026-09-28T14:30:18.561Z",
  "updatedAt": "2026-09-28T14:30:18.561Z"
}

Document 4:
{
  "_id": "6aba79fa3e8b36a465071d87",
  "name": "LEGO Classic Creative Bricks",
  "description": "Large box of assorted LEGO bricks, includes idea booklet. Complete set.",
  "category": "Toys",
  "condition": "Good",
  "image_url": "",
  "location": "Austin, TX",
  "status": "Available",
  "comments": [],
  "__v": 0,
  "createdAt": "2026-09-28T14:30:18.561Z",
  "updatedAt": "2026-09-28T14:30:18.561Z"
}

Document 5:
{
  "_id": "6aba79fa3e8b36a465071d88",
  "name": "Wooden Train Set",
  "description": "Fifty-piece wooden railway with bridges and trains, compatible with major brands.",
  "category": "Toys",
  "condition": "Good",
  "image_url": "",
  "location": "Round Rock, TX",
  "status": "Available",
  "comments": [],
  "__v": 0,
  "createdAt": "2026-09-28T14:30:18.561Z",
  "updatedAt": "2026-09-28T14:30:18.561Z"
}

Document 6:
{
  "_id": "6aba79fa3e8b36a465071d89",
  "name": "KitchenAid Stand Mixer",
  "description": "Artisan 5-quart tilt-head stand mixer in empire red with dough hook and whisk.",
  "category": "Kitchen",
  "condition": "Good",
  "image_url": "",
  "location": "Austin, TX",
  "status": "Available",
  "comments": [],
  "__v": 0,
  "createdAt": "2026-09-28T14:30:18.561Z",
  "updatedAt": "2026-09-28T14:30:18.561Z"
}

Document 7:
{
  "_id": "6aba79fa3e8b36a465071d8a",
  "name": "Cast Iron Skillet Set",
  "description": "Three pre-seasoned cast iron skillets (8, 10, 12 inch) with silicone handles.",
  "category": "Kitchen",
  "condition": "Good",
  "image_url": "",
  "location": "Cedar Park, TX",
  "status": "Available",
  "comments": [],
  "__v": 0,
  "createdAt": "2026-09-28T14:30:18.561Z",
  "updatedAt": "2026-09-28T14:30:18.561Z"
}

Document 8:
{
  "_id": "6aba79fa3e8b36a465071d8b",
  "name": "Yoga Mat and Blocks",
  "description": "Six-millimeter yoga mat with two foam blocks and a carrying strap.",
  "category": "Sports",
  "condition": "Like New",
  "image_url": "",
  "location": "Austin, TX",
  "status": "Available",
  "comments": [],
  "__v": 0,
  "createdAt": "2026-09-28T14:30:18.561Z",
  "updatedAt": "2026-09-28T14:30:18.561Z"
}

Document 9:
{
  "_id": "6aba79fa3e8b36a465071d8c",
  "name": "Mountain Bike - Adult 26\"",
  "description": "Hardtail mountain bike, 21 speeds, new tires and chain. Rides smoothly.",
  "category": "Sports",
  "condition": "Used",
  "image_url": "",
  "location": "Austin, TX",
  "status": "Available",
  "comments": [],
  "__v": 0,
  "createdAt": "2026-09-28T14:30:18.561Z",
  "updatedAt": "2026-09-28T14:30:18.561Z"
}

Document 10:
{
  "_id": "6aba79fa3e8b36a465071d7e",
  "name": "Leather Sectional Sofa",
  "description": "Three-piece brown leather sectional with cushions. Cleaned and ready for pickup.",
  "category": "Furniture",
  "condition": "Good",
  "image_url": "",
  "location": "Austin, TX",
  "status": "Available",
  "comments": [],
  "__v": 0,
  "createdAt": "2026-09-28T14:30:18.560Z",
  "updatedAt": "2026-09-28T14:30:18.560Z"
}

Document 11:
{
  "_id": "6aba79fa3e8b36a465071d7f",
  "name": "Standing Desk",
  "description": "Height-adjustable standing desk, electric motor, minor wear on desktop.",
  "category": "Furniture",
  "condition": "Like New",
  "image_url": "",
  "location": "Round Rock, TX",
  "status": "Available",
  "comments": [],
  "__v": 0,
  "createdAt": "2026-09-28T14:30:18.560Z",
  "updatedAt": "2026-09-28T14:30:18.560Z"
}

Document 12:
{
  "_id": "6aba79fa3e8b36a465071d80",
  "name": "Samsung 43\" 4K TV",
  "description": "43-inch 4K UHD smart TV with remote. Works perfectly, no dead pixels.",
  "category": "Electronics",
  "condition": "Like New",
  "image_url": "",
  "location": "Austin, TX",
  "status": "Available",
  "comments": [],
  "__v": 0,
  "createdAt": "2026-09-28T14:30:18.560Z",
  "updatedAt": "2026-09-28T14:30:18.560Z"
}

Document 13:
{
  "_id": "6aba79fa3e8b36a465071d81",
  "name": "Sony Wireless Headphones",
  "description": "Noise-cancelling over-ear headphones. Includes carrying case and USB-C cable.",
  "category": "Electronics",
  "condition": "Good",
  "image_url": "",
  "location": "Cedar Park, TX",
  "status": "Available",
  "comments": [],
  "__v": 0,
  "createdAt": "2026-09-28T14:30:18.560Z",
  "updatedAt": "2026-09-28T14:30:18.560Z"
}

Document 14:
{
  "_id": "6aba79fa3e8b36a465071d82",
  "name": "Nintendo Switch Lite",
  "description": "Coral Switch Lite with charger. Screen protector applied since day one.",
  "category": "Electronics",
  "condition": "Good",
  "image_url": "",
  "location": "Austin, TX",
  "status": "Available",
  "comments": [],
  "__v": 0,
  "createdAt": "2026-09-28T14:30:18.560Z",
  "updatedAt": "2026-09-28T14:30:18.560Z"
}

Document 15:
{
  "_id": "6aba79fa3e8b36a465071d83",
  "name": "Winter Jacket - Men L",
  "description": "Waterproof insulated winter jacket, dark green, barely worn.",
  "category": "Clothing",
  "condition": "Like New",
  "image_url": "",
  "location": "Austin, TX",
  "status": "Available",
  "comments": [],
  "__v": 0,
  "createdAt": "2026-09-28T14:30:18.560Z",
  "updatedAt": "2026-09-28T14:30:18.560Z"
}

Document 16:
{
  "_id": "6aba79fa3e8b36a465071d7d",
  "name": "Wooden Dining Table",
  "description": "Solid oak dining table, seats six. A few light scratches on the surface but very sturdy.",
  "category": "Furniture",
  "condition": "Good",
  "image_url": "",
  "location": "Austin, TX",
  "status": "Available",
  "comments": [],
  "__v": 0,
  "createdAt": "2026-09-28T14:30:18.559Z",
  "updatedAt": "2026-09-28T14:30:18.559Z"
}

Total documents in collection: 16
```

*(Full file also saved at `docs/outputs/inserted_items`.)*

---

## Question 4 — Task 4 (2 pts): Public GitHub URL of `db.js` containing `await client.connect()`

**Answer:**

```
https://github.com/Abdulbari36/fyp-javascript/blob/main/backend/db.js
```

The file contains the required MongoDB connection line:

```js
// === Required line (Task 4) ===
await client.connect();
```

---

## Question 5 — Task 5 (4 pts): Public GitHub URL of `giftRoutes.js` (connectToDatabase() + /api/gifts and /api/gifts/:id)

**Answer:**

```
https://github.com/Abdulbari36/fyp-javascript/blob/main/backend/routes/giftRoutes.js
```

The file:
- Connects to the database with `connectToDatabase()` (required from `../db` and called in the router-level middleware), and
- Serves `/api/gifts` (router mounted by `app.use('/api/gifts', giftRoutes)` in `app.js`) with routes for `/` (list/create) and `/:id` (get/update/delete) — i.e. the `/api/gifts` and `/api/gifts/:id` endpoints.

---

## Question 6 — Task 6 (2 pts): Public GitHub URL of `searchRoutes.js` (category filter)

**Answer:**

```
https://github.com/Abdulbari36/fyp-javascript/blob/main/backend/routes/searchRoutes.js
```

The category filter code in the file:

```js
// --- Task 6: filter items by category -------------------------------
if (category) {
  filter.category = category;
}
```

---

## Question 7 — Task 7 (2 pts): Public GitHub URL of `app.js` (serves /api/search)

**Answer:**

```
https://github.com/Abdulbari36/fyp-javascript/blob/main/backend/app.js
```

The route in the file:

```js
// Search API — Task 7: app.js serves /api/search
app.use('/api/search', searchRoutes);
```

---

## Question 8 — Task 8 (2 pts): Public GitHub URL of `sentiment/index.js` (imports `natural` npm package)

**Answer:**

```
https://github.com/Abdulbari36/fyp-javascript/blob/main/sentiment/index.js
```

The import line in the file:

```js
const natural = require('natural');
```

---

## Question 9 — Task 9 (2 pts): Public GitHub URL of `RegisterPage.js` (method + header attributes in fetch)

**Answer:**

```
https://github.com/Abdulbari36/fyp-javascript/blob/main/frontend/src/pages/RegisterPage.js
```

The file's fetch request includes the `method` and `headers` attributes:

```js
fetch('/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

---

## Question 10 — Task 10 (2 pts): Public GitHub URL of `LoginPage.js` (Content-Type + Authorization headers)

**Answer:**

```
https://github.com/Abdulbari36/fyp-javascript/blob/main/frontend/src/pages/LoginPage.js
```

The file's fetch request includes a `headers` object with `Content-Type` and `Authorization`:

```js
headers: {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
}
```

---

## Question 11 — Task 11 (2 pts): Public GitHub URL of `authRoutes.js` (collection findOne locates current user)

**Answer:**

```
https://github.com/Abdulbari36/fyp-javascript/blob/main/backend/routes/authRoutes.js
```

The file calls the collection's `findOne` method to locate the current user:

```js
const users = usersCollection();               // getDb().collection('users')

// === Task 11: collection.findOne locates the current user ===
const user = await users.findOne(username ? { username } : { email });
```

---

## Question 12 — Task 12 (2 pts): Upload `deployed_landingpage.png` — deployed landing page screenshot

**Deliverable:** `deployed_landingpage.png` (screenshot — must be taken manually, see below)

The screenshot must include:
- the **deployment URL in the browser's address bar**,
- the project title / site name (**🎁 GiftLink**),
- a brief description / tagline, and
- a **Get Started** button.

**How to capture it:**

1. Push this repo to GitHub.
2. Create a free **MongoDB Atlas** cluster and copy the connection string.
3. Deploy the backend on **Render** (Web Service, root dir `backend`):
   - Build command: `npm install` · Start command: `npm start`
   - Env vars: `MONGODB_URI`, `JWT_SECRET`, `SEED_ON_START=true`
4. Deploy the frontend as a **Static Site** (root dir `frontend`):
   - Build command: `npm run build` · Publish directory: `build`
   - Add a redirect/rewrite rule `/* → /index.html` for React Router.
5. Open the deployed frontend URL in the browser — the landing page shows the title, tagline, and Get Started button.
6. Take a full-browser screenshot (address bar visible) and save as **deployed_landingpage.png**.

---

## Question 13 — Task 13 (2 pts): cURL command + output from `mainpage` (lists all items)

**Answer:**

Command:

```bash
curl -X GET "http://localhost:8000/api/gifts"
```

Output:

```
HTTP Status: 200

{
  "total": 16,
  "page": 1,
  "count": 16,
  "gifts": [
    {
      "_id": "6aba79fa3e8b36a465071d84",
      "name": "Baby Clothes Bundle 0-6m",
      "description": "Twenty-plus onesies, sleepers and hats for ages 0-6 months, all laundered.",
      "category": "Clothing",
      "condition": "Good",
      "image_url": "",
      "location": "Pflugerville, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.561Z",
      "updatedAt": "2026-09-28T14:30:18.561Z"
    },
    {
      "_id": "6aba79fa3e8b36a465071d85",
      "name": "Introduction to Algorithms (CLRS)",
      "description": "Third edition hardcover. Light highlighting in the first four chapters.",
      "category": "Books",
      "condition": "Good",
      "image_url": "",
      "location": "Austin, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.561Z",
      "updatedAt": "2026-09-28T14:30:18.561Z"
    },
    {
      "_id": "6aba79fa3e8b36a465071d86",
      "name": "Clean Code by Robert Martin",
      "description": "Paperback, like new. A must-read for every software developer.",
      "category": "Books",
      "condition": "Like New",
      "image_url": "",
      "location": "Georgetown, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.561Z",
      "updatedAt": "2026-09-28T14:30:18.561Z"
    },
    {
      "_id": "6aba79fa3e8b36a465071d87",
      "name": "LEGO Classic Creative Bricks",
      "description": "Large box of assorted LEGO bricks, includes idea booklet. Complete set.",
      "category": "Toys",
      "condition": "Good",
      "image_url": "",
      "location": "Austin, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.561Z",
      "updatedAt": "2026-09-28T14:30:18.561Z"
    },
    {
      "_id": "6aba79fa3e8b36a465071d88",
      "name": "Wooden Train Set",
      "description": "Fifty-piece wooden railway with bridges and trains, compatible with major brands.",
      "category": "Toys",
      "condition": "Good",
      "image_url": "",
      "location": "Round Rock, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.561Z",
      "updatedAt": "2026-09-28T14:30:18.561Z"
    },
    {
      "_id": "6aba79fa3e8b36a465071d89",
      "name": "KitchenAid Stand Mixer",
      "description": "Artisan 5-quart tilt-head stand mixer in empire red with dough hook and whisk.",
      "category": "Kitchen",
      "condition": "Good",
      "image_url": "",
      "location": "Austin, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.561Z",
      "updatedAt": "2026-09-28T14:30:18.561Z"
    },
    {
      "_id": "6aba79fa3e8b36a465071d8a",
      "name": "Cast Iron Skillet Set",
      "description": "Three pre-seasoned cast iron skillets (8, 10, 12 inch) with silicone handles.",
      "category": "Kitchen",
      "condition": "Good",
      "image_url": "",
      "location": "Cedar Park, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.561Z",
      "updatedAt": "2026-09-28T14:30:18.561Z"
    },
    {
      "_id": "6aba79fa3e8b36a465071d8b",
      "name": "Yoga Mat and Blocks",
      "description": "Six-millimeter yoga mat with two foam blocks and a carrying strap.",
      "category": "Sports",
      "condition": "Like New",
      "image_url": "",
      "location": "Austin, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.561Z",
      "updatedAt": "2026-09-28T14:30:18.561Z"
    },
    {
      "_id": "6aba79fa3e8b36a465071d8c",
      "name": "Mountain Bike - Adult 26\"",
      "description": "Hardtail mountain bike, 21 speeds, new tires and chain. Rides smoothly.",
      "category": "Sports",
      "condition": "Used",
      "image_url": "",
      "location": "Austin, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.561Z",
      "updatedAt": "2026-09-28T14:30:18.561Z"
    },
    {
      "_id": "6aba79fa3e8b36a465071d7e",
      "name": "Leather Sectional Sofa",
      "description": "Three-piece brown leather sectional with cushions. Cleaned and ready for pickup.",
      "category": "Furniture",
      "condition": "Good",
      "image_url": "",
      "location": "Austin, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.560Z",
      "updatedAt": "2026-09-28T14:30:18.560Z"
    },
    {
      "_id": "6aba79fa3e8b36a465071d7f",
      "name": "Standing Desk",
      "description": "Height-adjustable standing desk, electric motor, minor wear on desktop.",
      "category": "Furniture",
      "condition": "Like New",
      "image_url": "",
      "location": "Round Rock, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.560Z",
      "updatedAt": "2026-09-28T14:30:18.560Z"
    },
    {
      "_id": "6aba79fa3e8b36a465071d80",
      "name": "Samsung 43\" 4K TV",
      "description": "43-inch 4K UHD smart TV with remote. Works perfectly, no dead pixels.",
      "category": "Electronics",
      "condition": "Like New",
      "image_url": "",
      "location": "Austin, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.560Z",
      "updatedAt": "2026-09-28T14:30:18.560Z"
    },
    {
      "_id": "6aba79fa3e8b36a465071d81",
      "name": "Sony Wireless Headphones",
      "description": "Noise-cancelling over-ear headphones. Includes carrying case and USB-C cable.",
      "category": "Electronics",
      "condition": "Good",
      "image_url": "",
      "location": "Cedar Park, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.560Z",
      "updatedAt": "2026-09-28T14:30:18.560Z"
    },
    {
      "_id": "6aba79fa3e8b36a465071d82",
      "name": "Nintendo Switch Lite",
      "description": "Coral Switch Lite with charger. Screen protector applied since day one.",
      "category": "Electronics",
      "condition": "Good",
      "image_url": "",
      "location": "Austin, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.560Z",
      "updatedAt": "2026-09-28T14:30:18.560Z"
    },
    {
      "_id": "6aba79fa3e8b36a465071d83",
      "name": "Winter Jacket - Men L",
      "description": "Waterproof insulated winter jacket, dark green, barely worn.",
      "category": "Clothing",
      "condition": "Like New",
      "image_url": "",
      "location": "Austin, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.560Z",
      "updatedAt": "2026-09-28T14:30:18.560Z"
    },
    {
      "_id": "6aba79fa3e8b36a465071d7d",
      "name": "Wooden Dining Table",
      "description": "Solid oak dining table, seats six. A few light scratches on the surface but very sturdy.",
      "category": "Furniture",
      "condition": "Good",
      "image_url": "",
      "location": "Austin, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.559Z",
      "updatedAt": "2026-09-28T14:30:18.559Z"
    }
  ]
}
```

---

## Question 14 — Task 14 (2 pts): cURL command + output from `register` (registers a user)

**Answer:**

Command:

```bash
curl -X POST "http://localhost:8000/api/auth/register" \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser_1790605831821","email":"testuser1790605831821@example.com","password":"secret123","first_name":"Test","last_name":"User","location":"Austin, TX"}'
```

Output:

```
HTTP Status: 201

{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhYmE3YTA3M2U4YjM2YTQ2NTA3MWQ5NCIsInVzZXJuYW1lIjoidGVzdHVzZXJfMTc5MDYwNTgzMTgyMSIsImlhdCI6MTc5MDYwNTgzMiwiZXhwIjoxNzkxMjEwNjMyfQ.rMgUjaJIl7K9Qed4hGBWhx1GCgDQtMVmDcROscfPmbs",
  "user": {
    "_id": "6aba7a073e8b36a465071d94",
    "username": "testuser_1790605831821",
    "email": "testuser1790605831821@example.com",
    "first_name": "Test",
    "last_name": "User",
    "location": "Austin, TX",
    "bio": "",
    "avatar_url": "",
    "createdAt": "2026-09-28T14:30:31.983Z",
    "updatedAt": "2026-09-28T14:30:31.983Z"
  }
}
```

---

## Question 15 — Task 15 (2 pts): cURL command + output from `login` (logs in the registered user)

**Answer:**

Command:

```bash
curl -X POST "http://localhost:8000/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser_1790605831821","password":"secret123"}'
```

Output:

```
HTTP Status: 200

{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhYmE3YTA3M2U4YjM2YTQ2NTA3MWQ5NCIsInVzZXJuYW1lIjoidGVzdHVzZXJfMTc5MDYwNTgzMTgyMSIsImlhdCI6MTc5MDYwNTgzMiwiZXhwIjoxNzkxMjEwNjMyfQ.rMgUjaJIl7K9Qed4hGBWhx1GCgDQtMVmDcROscfPmbs",
  "user": {
    "_id": "6aba7a073e8b36a465071d94",
    "username": "testuser_1790605831821",
    "email": "testuser1790605831821@example.com",
    "first_name": "Test",
    "last_name": "User",
    "location": "Austin, TX",
    "bio": "",
    "avatar_url": "",
    "createdAt": "2026-09-28T14:30:31.983Z",
    "updatedAt": "2026-09-28T14:30:31.983Z"
  }
}
```

---

## Question 16 — Task 16 (2 pts): cURL command + output from `item_detail` (details of an item)

**Answer:**

Command:

```bash
curl -X GET "http://localhost:8000/api/gifts/6aba79fa3e8b36a465071d84" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhYmE3YTA3M2U4YjM2YTQ2NTA3MWQ5NCIsInVzZXJuYW1lIjoidGVzdHVzZXJfMTc5MDYwNTgzMTgyMSIsImlhdCI6MTc5MDYwNTgzMiwiZXhwIjoxNzkxMjEwNjMyfQ.rMgUjaJIl7K9Qed4hGBWhx1GCgDQtMVmDcROscfPmbs"
```

Output:

```
HTTP Status: 200

{
  "_id": "6aba79fa3e8b36a465071d84",
  "name": "Baby Clothes Bundle 0-6m",
  "description": "Twenty-plus onesies, sleepers and hats for ages 0-6 months, all laundered.",
  "category": "Clothing",
  "condition": "Good",
  "image_url": "",
  "location": "Pflugerville, TX",
  "status": "Available",
  "comments": [],
  "__v": 0,
  "createdAt": "2026-09-28T14:30:18.561Z",
  "updatedAt": "2026-09-28T14:30:18.561Z"
}
```

---

## Question 17 — Task 17 (2 pts): cURL command + output from `search_item` (items matching criteria)

**Answer:**

Command:

```bash
curl -X GET "http://localhost:8000/api/search?q=wooden"
```

Output:

```
HTTP Status: 200

{
  "query": {
    "q": "wooden"
  },
  "filter": {
    "$or": [
      {
        "name": {
          "$regex": "wooden",
          "$options": "i"
        }
      },
      {
        "description": {
          "$regex": "wooden",
          "$options": "i"
        }
      }
    ]
  },
  "total": 2,
  "page": 1,
  "count": 2,
  "results": [
    {
      "_id": "6aba79fa3e8b36a465071d88",
      "name": "Wooden Train Set",
      "description": "Fifty-piece wooden railway with bridges and trains, compatible with major brands.",
      "category": "Toys",
      "condition": "Good",
      "image_url": "",
      "location": "Round Rock, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.561Z",
      "updatedAt": "2026-09-28T14:30:18.561Z"
    },
    {
      "_id": "6aba79fa3e8b36a465071d7d",
      "name": "Wooden Dining Table",
      "description": "Solid oak dining table, seats six. A few light scratches on the surface but very sturdy.",
      "category": "Furniture",
      "condition": "Good",
      "image_url": "",
      "location": "Austin, TX",
      "status": "Available",
      "comments": [],
      "__v": 0,
      "createdAt": "2026-09-28T14:30:18.559Z",
      "updatedAt": "2026-09-28T14:30:18.559Z"
    }
  ]
}
```

---

## Question 18 — Task 18 (2 pts): CI/CD Actions workflow output (all steps, success)

**Answer:**

Workflow run **CI/CD #2** — triggered by push of commit `f739fa8` to `main` on **2026-09-28**, conclusion: **success** ✅

Run page: https://github.com/Abdulbari36/fyp-javascript/actions/runs/36439279971
Workflow file: `.github/workflows/ci-cd.yml` — 4 jobs, all steps green:

```
CI/CD — run #2 (push to main, commit f739fa8)
Workflow: .github/workflows/ci-cd.yml
Conclusion: success (all 4 jobs)

Job 1: Backend — build & test ................ SUCCESS (14:52:43 → 14:53:22 UTC)
  ✓ Set up job
  ✓ Run actions/checkout@v4
  ✓ Setup Node.js (node-version: 20, cache: npm)
  ✓ Install dependencies        → npm install
  ✓ Lint (syntax check)         → node --check index.js && node --check app.js && node --check db.js
  ✓ Smoke test — start server & hit endpoints
      node index.js &
      --- GET / ------------------------------ 200 {"name":"GiftLink API",...}
      --- GET /healthz ----------------------- 200 {"status":"ok"}
      --- GET /api/gifts --------------------- 200 {"total":16,...}
      --- GET /api/search?category=Books ----- 200 {"total":2,...}
      --- POST /api/auth/register ------------ 201 {"message":"User registered successfully"}
  ✓ Post Setup Node.js
  ✓ Post Run actions/checkout@v4
  ✓ Complete job

Job 2: Frontend — build ....................... SUCCESS (14:52:43 → 14:53:14 UTC)
  ✓ Set up job
  ✓ Run actions/checkout@v4
  ✓ Setup Node.js (node-version: 20, cache: npm)
  ✓ Install dependencies        → npm install
  ✓ Build production bundle     → npm run build (React production bundle)
  ✓ Post Setup Node.js
  ✓ Post Run actions/checkout@v4
  ✓ Complete job

Job 3: Docker — build images .................. SUCCESS (14:53:25 → 14:54:03 UTC)
  ✓ Set up job
  ✓ Run actions/checkout@v4
  ✓ Build backend image         → docker build -t giftlink-backend ./backend
  ✓ Build frontend image        → docker build -t giftlink-frontend ./frontend
  ✓ Post Run actions/checkout@v4
  ✓ Complete job

Job 4: Deploy (Render) ........................ SUCCESS (14:54:07 → 14:54:13 UTC)
  ✓ Set up job
  ✓ Run actions/checkout@v4
  ⊘ Trigger Render deploy hook  → skipped (RENDER_DEPLOY_HOOK secret not set)
  ✓ Post Run actions/checkout@v4
  ✓ Complete job

All 4 jobs completed successfully.
```

> Note: the very first run (#1) failed at workflow validation because the `secrets`
> context cannot be used in a step-level `if:` condition (`Unrecognized named-value:
> 'secrets'` at line 96). Fixed in commit `f739fa8` by copying the secret into an
> `env:` block first — run #2 then passed end-to-end.
