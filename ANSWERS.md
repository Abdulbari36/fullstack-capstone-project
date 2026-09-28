# Full Stack Capstone — Assignment Answers

**Repository:** https://github.com/Abdulbari36/fullstack-capstone-project
**Project:** GiftLink — Full Stack Capstone Project

---

## Question 1 — Task 1 (2 pts): Public GitHub URL of `user-story.md` (user story template)

**Answer:**

```
https://github.com/Abdulbari36/fullstack-capstone-project/blob/main/docs/user-story.md
```

The file contains the full user story template in the required format:

```
Title: [Short descriptive title]

As a [type of user],
I want [goal / need],
so that [reason / benefit].

Details and Assumptions:
* [Context, constraints, or facts we assume to be true]

Acceptance Criteria (Gherkin):
1. Given [context], When [action], Then [outcome]

Priority / Label / Story Points
```

Every story (US1–US9) includes a **Details and Assumptions** section and **acceptance
criteria written in Gherkin syntax** (`Given [context], When [action], Then [outcome]`).

---

## Question 2 — Task 2 (4 pts): Upload `userstories.png` — GitHub Issues screenshot

**Deliverable:** `userstories.png` (screenshot — must be taken manually)

The repository has already been renamed to **fullstack-capstone-project** ✅, so the
screenshot will show the required repo name.

**Remaining steps to capture it:**

1. Open **Issues → New issue** and create the user stories US1–US10 (titles and bodies from `docs/user-story.md` / the list in `docs/github-issues.md`).
2. Create the four labels under **Issues → Labels → New label**: `new`, `icebox`, `technical debt`, `backlog` — attach them as listed (US1–US5 = `new`, US6–US7 = `backlog`, US8 = `technical debt`, US9 = `icebox`, US10 = `backlog`).
3. Open the **Issues** tab so the repository name **fullstack-capstone-project** and all ≥8 labeled issues are visible in one screen.
4. Take a full-window screenshot and save it as **userstories.png**.

---

## Question 3 — Task 3 (2 pts): Terminal output of MongoDB data saved as `inserted_items` (16 documents)

**Answer** — the `npm start` command run from `giftlink-backend/util/import-mongo`
(the import utility lives in the `giftlink-backend/util/import-mongo` folder):

```bash
cd giftlink-backend/util/import-mongo
npm start
```

Terminal output:

```
> import-mongo@1.0.0 start
> node import.js

Starting GiftLink MongoDB import...
Target: mongodb://127.0.0.1:27017 → database "giftlink", collection "gifts"
Connected to MongoDB.
Inserted 16 documents into giftlink.gifts
Verification: db.gifts.countDocuments() → 16

db.gifts.find() → 16 documents:

Document 1:
{
  "_id": "6aba8af68080a8f227526afa",
  "name": "Wooden Dining Table",
  "description": "Solid oak dining table, seats six. A few light scratches on the surface but very sturdy.",
  "category": "Furniture",
  "condition": "Good",
  "location": "Austin, TX",
  "image_url": "",
  "status": "Available",
  "comments": [],
  "createdAt": "2026-09-28T15:42:46.202Z",
  "updatedAt": "2026-09-28T15:42:46.202Z"
}

Document 2:
{
  "_id": "6aba8af68080a8f227526afb",
  "name": "Leather Sectional Sofa",
  "description": "Three-piece brown leather sectional with cushions. Cleaned and ready for pickup.",
  "category": "Furniture",
  "condition": "Good",
  "location": "Austin, TX",
  "image_url": "",
  "status": "Available",
  "comments": [],
  "createdAt": "2026-09-28T15:42:46.202Z",
  "updatedAt": "2026-09-28T15:42:46.202Z"
}

Document 3:
{
  "_id": "6aba8af68080a8f227526afc",
  "name": "Standing Desk",
  "description": "Height-adjustable standing desk, electric motor, minor wear on desktop.",
  "category": "Furniture",
  "condition": "Like New",
  "location": "Round Rock, TX",
  "image_url": "",
  "status": "Available",
  "comments": [],
  "createdAt": "2026-09-28T15:42:46.202Z",
  "updatedAt": "2026-09-28T15:42:46.202Z"
}

Document 4:
{
  "_id": "6aba8af68080a8f227526afd",
  "name": "Samsung 43\" 4K TV",
  "description": "43-inch 4K UHD smart TV with remote. Works perfectly, no dead pixels.",
  "category": "Electronics",
  "condition": "Like New",
  "location": "Austin, TX",
  "image_url": "",
  "status": "Available",
  "comments": [],
  "createdAt": "2026-09-28T15:42:46.202Z",
  "updatedAt": "2026-09-28T15:42:46.202Z"
}

Document 5:
{
  "_id": "6aba8af68080a8f227526afe",
  "name": "Sony Wireless Headphones",
  "description": "Noise-cancelling over-ear headphones. Includes carrying case and USB-C cable.",
  "category": "Electronics",
  "condition": "Good",
  "location": "Cedar Park, TX",
  "image_url": "",
  "status": "Available",
  "comments": [],
  "createdAt": "2026-09-28T15:42:46.202Z",
  "updatedAt": "2026-09-28T15:42:46.202Z"
}

Document 6:
{
  "_id": "6aba8af68080a8f227526aff",
  "name": "Nintendo Switch Lite",
  "description": "Coral Switch Lite with charger. Screen protector applied since day one.",
  "category": "Electronics",
  "condition": "Good",
  "location": "Austin, TX",
  "image_url": "",
  "status": "Available",
  "comments": [],
  "createdAt": "2026-09-28T15:42:46.202Z",
  "updatedAt": "2026-09-28T15:42:46.202Z"
}

Document 7:
{
  "_id": "6aba8af68080a8f227526b00",
  "name": "Winter Jacket - Men L",
  "description": "Waterproof insulated winter jacket, dark green, barely worn.",
  "category": "Clothing",
  "condition": "Like New",
  "location": "Austin, TX",
  "image_url": "",
  "status": "Available",
  "comments": [],
  "createdAt": "2026-09-28T15:42:46.202Z",
  "updatedAt": "2026-09-28T15:42:46.202Z"
}

Document 8:
{
  "_id": "6aba8af68080a8f227526b01",
  "name": "Baby Clothes Bundle 0-6m",
  "description": "Twenty-plus onesies, sleepers and hats for ages 0-6 months, all laundered.",
  "category": "Clothing",
  "condition": "Good",
  "location": "Pflugerville, TX",
  "image_url": "",
  "status": "Available",
  "comments": [],
  "createdAt": "2026-09-28T15:42:46.202Z",
  "updatedAt": "2026-09-28T15:42:46.202Z"
}

Document 9:
{
  "_id": "6aba8af68080a8f227526b02",
  "name": "Introduction to Algorithms (CLRS)",
  "description": "Third edition hardcover. Light highlighting in the first four chapters.",
  "category": "Books",
  "condition": "Good",
  "location": "Austin, TX",
  "image_url": "",
  "status": "Available",
  "comments": [],
  "createdAt": "2026-09-28T15:42:46.202Z",
  "updatedAt": "2026-09-28T15:42:46.202Z"
}

Document 10:
{
  "_id": "6aba8af68080a8f227526b03",
  "name": "Clean Code by Robert Martin",
  "description": "Paperback, like new. A must-read for every software developer.",
  "category": "Books",
  "condition": "Like New",
  "location": "Georgetown, TX",
  "image_url": "",
  "status": "Available",
  "comments": [],
  "createdAt": "2026-09-28T15:42:46.202Z",
  "updatedAt": "2026-09-28T15:42:46.202Z"
}

Document 11:
{
  "_id": "6aba8af68080a8f227526b04",
  "name": "LEGO Classic Creative Bricks",
  "description": "Large box of assorted LEGO bricks, includes idea booklet. Complete set.",
  "category": "Toys",
  "condition": "Good",
  "location": "Austin, TX",
  "image_url": "",
  "status": "Available",
  "comments": [],
  "createdAt": "2026-09-28T15:42:46.202Z",
  "updatedAt": "2026-09-28T15:42:46.202Z"
}

Document 12:
{
  "_id": "6aba8af68080a8f227526b05",
  "name": "Wooden Train Set",
  "description": "Fifty-piece wooden railway with bridges and trains, compatible with major brands.",
  "category": "Toys",
  "condition": "Good",
  "location": "Round Rock, TX",
  "image_url": "",
  "status": "Available",
  "comments": [],
  "createdAt": "2026-09-28T15:42:46.202Z",
  "updatedAt": "2026-09-28T15:42:46.202Z"
}

Document 13:
{
  "_id": "6aba8af68080a8f227526b06",
  "name": "KitchenAid Stand Mixer",
  "description": "Artisan 5-quart tilt-head stand mixer in empire red with dough hook and whisk.",
  "category": "Kitchen",
  "condition": "Good",
  "location": "Austin, TX",
  "image_url": "",
  "status": "Available",
  "comments": [],
  "createdAt": "2026-09-28T15:42:46.202Z",
  "updatedAt": "2026-09-28T15:42:46.202Z"
}

Document 14:
{
  "_id": "6aba8af68080a8f227526b07",
  "name": "Cast Iron Skillet Set",
  "description": "Three pre-seasoned cast iron skillets (8, 10, 12 inch) with silicone handles.",
  "category": "Kitchen",
  "condition": "Good",
  "location": "Cedar Park, TX",
  "image_url": "",
  "status": "Available",
  "comments": [],
  "createdAt": "2026-09-28T15:42:46.202Z",
  "updatedAt": "2026-09-28T15:42:46.202Z"
}

Document 15:
{
  "_id": "6aba8af68080a8f227526b08",
  "name": "Yoga Mat and Blocks",
  "description": "Six-millimeter yoga mat with two foam blocks and a carrying strap.",
  "category": "Sports",
  "condition": "Like New",
  "location": "Austin, TX",
  "image_url": "",
  "status": "Available",
  "comments": [],
  "createdAt": "2026-09-28T15:42:46.202Z",
  "updatedAt": "2026-09-28T15:42:46.202Z"
}

Document 16:
{
  "_id": "6aba8af68080a8f227526b09",
  "name": "Mountain Bike - Adult 26\"",
  "description": "Hardtail mountain bike, 21 speeds, new tires and chain. Rides smoothly.",
  "category": "Sports",
  "condition": "Used",
  "location": "Austin, TX",
  "image_url": "",
  "status": "Available",
  "comments": [],
  "createdAt": "2026-09-28T15:42:46.202Z",
  "updatedAt": "2026-09-28T15:42:46.202Z"
}

Total documents in collection: 16
Import completed successfully — 16 documents in giftlink.gifts
MongoDB connection closed.
```

*(Full file also saved at `docs/outputs/inserted_items` and at
`giftlink-backend/util/import-mongo/npm-start-output.txt`.)*

---

## Question 4 — Task 4 (2 pts): Public GitHub URL of `db.js` containing `await client.connect()`

**Answer:**

```
https://github.com/Abdulbari36/fullstack-capstone-project/blob/main/giftlink-backend/db.js
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
https://github.com/Abdulbari36/fullstack-capstone-project/blob/main/giftlink-backend/routes/giftRoutes.js
```

The file:
- Connects to the database with `connectToDatabase()` (required from `../db` and called in the router-level middleware), and
- Serves `/api/gifts` (router mounted by `app.use('/api/gifts', giftRoutes)` in `app.js`) with routes for `/` (list/create) and `/:id` (get/update/delete) — i.e. the `/api/gifts` and `/api/gifts/:id` endpoints.

---

## Question 6 — Task 6 (2 pts): Public GitHub URL of `searchRoutes.js` (category filter)

**Answer:**

```
https://github.com/Abdulbari36/fullstack-capstone-project/blob/main/giftlink-backend/routes/searchRoutes.js
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
https://github.com/Abdulbari36/fullstack-capstone-project/blob/main/giftlink-backend/app.js
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
https://github.com/Abdulbari36/fullstack-capstone-project/blob/main/sentiment/index.js
```

The import line in the file (in the `fullstack-capstone-project/sentiment` folder):

```js
const natural = require('natural');
```

---

## Question 9 — Task 9 (2 pts): Public GitHub URL of `RegisterPage.js` (method + header attributes in fetch)

**Answer:**

```
https://github.com/Abdulbari36/fullstack-capstone-project/blob/main/frontend/src/pages/RegisterPage.js
```

The file's fetch request includes the `method` and `headers` attributes:

```js
fetch("/api/auth/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
})
```

---

## Question 10 — Task 10 (2 pts): Public GitHub URL of `LoginPage.js` (Content-Type + Authorization headers)

**Answer:**

```
https://github.com/Abdulbari36/fullstack-capstone-project/blob/main/frontend/src/pages/LoginPage.js
```

The file's fetch request includes a `headers` object with `Content-Type` and `Authorization`:

```js
headers: {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${token}`,
}
```

---

## Question 11 — Task 11 (2 pts): Public GitHub URL of `authRoutes.js` (collection findOne locates current user)

**Answer:**

```
https://github.com/Abdulbari36/fullstack-capstone-project/blob/main/giftlink-backend/routes/authRoutes.js
```

The file (in the **fullstack-capstone-project** repository) calls the collection's
`findOne` method to locate the current user:

```js
const users = usersCollection();               // getDb().collection('users')

// === Task 11: collection.findOne locates the current user ===
const user = await users.findOne(username ? { username } : { email });
```

---

## Question 12 — Task 12 (2 pts): Upload `deployed_landingpage.png` — deployed landing page screenshot

**Deliverable:** `deployed_landingpage.png` (screenshot — must be taken manually)

The screenshot must include:
- the **deployment URL in the browser's address bar**,
- the project title / site name (**🎁 GiftLink**),
- a brief description / tagline, and
- a **Get Started** button.

**How to capture it:**

1. Create a free **MongoDB Atlas** cluster and copy the connection string.
2. Deploy the backend on **Render** (Web Service, root dir `giftlink-backend`):
   - Build command: `npm install` · Start command: `npm start`
   - Env vars: `MONGODB_URI`, `JWT_SECRET`, `SEED_ON_START=true`
3. Deploy the frontend as a **Static Site** (root dir `frontend`):
   - Build command: `npm run build` · Publish directory: `build`
   - Add a redirect/rewrite rule `/* → /index.html` for React Router.
4. Open the deployed frontend URL in the browser — the landing page shows the title, tagline, and Get Started button.
5. Take a full-browser screenshot (address bar visible) and save as **deployed_landingpage.png**.

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
      "_id": "6aba8af68080a8f227526afa",
      "name": "Wooden Dining Table",
      "description": "Solid oak dining table, seats six. A few light scratches on the surface but very sturdy.",
      "category": "Furniture",
      "condition": "Good",
      "location": "Austin, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
    },
    {
      "_id": "6aba8af68080a8f227526afb",
      "name": "Leather Sectional Sofa",
      "description": "Three-piece brown leather sectional with cushions. Cleaned and ready for pickup.",
      "category": "Furniture",
      "condition": "Good",
      "location": "Austin, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
    },
    {
      "_id": "6aba8af68080a8f227526afc",
      "name": "Standing Desk",
      "description": "Height-adjustable standing desk, electric motor, minor wear on desktop.",
      "category": "Furniture",
      "condition": "Like New",
      "location": "Round Rock, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
    },
    {
      "_id": "6aba8af68080a8f227526afd",
      "name": "Samsung 43\" 4K TV",
      "description": "43-inch 4K UHD smart TV with remote. Works perfectly, no dead pixels.",
      "category": "Electronics",
      "condition": "Like New",
      "location": "Austin, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
    },
    {
      "_id": "6aba8af68080a8f227526afe",
      "name": "Sony Wireless Headphones",
      "description": "Noise-cancelling over-ear headphones. Includes carrying case and USB-C cable.",
      "category": "Electronics",
      "condition": "Good",
      "location": "Cedar Park, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
    },
    {
      "_id": "6aba8af68080a8f227526aff",
      "name": "Nintendo Switch Lite",
      "description": "Coral Switch Lite with charger. Screen protector applied since day one.",
      "category": "Electronics",
      "condition": "Good",
      "location": "Austin, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
    },
    {
      "_id": "6aba8af68080a8f227526b00",
      "name": "Winter Jacket - Men L",
      "description": "Waterproof insulated winter jacket, dark green, barely worn.",
      "category": "Clothing",
      "condition": "Like New",
      "location": "Austin, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
    },
    {
      "_id": "6aba8af68080a8f227526b01",
      "name": "Baby Clothes Bundle 0-6m",
      "description": "Twenty-plus onesies, sleepers and hats for ages 0-6 months, all laundered.",
      "category": "Clothing",
      "condition": "Good",
      "location": "Pflugerville, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
    },
    {
      "_id": "6aba8af68080a8f227526b02",
      "name": "Introduction to Algorithms (CLRS)",
      "description": "Third edition hardcover. Light highlighting in the first four chapters.",
      "category": "Books",
      "condition": "Good",
      "location": "Austin, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
    },
    {
      "_id": "6aba8af68080a8f227526b03",
      "name": "Clean Code by Robert Martin",
      "description": "Paperback, like new. A must-read for every software developer.",
      "category": "Books",
      "condition": "Like New",
      "location": "Georgetown, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
    },
    {
      "_id": "6aba8af68080a8f227526b04",
      "name": "LEGO Classic Creative Bricks",
      "description": "Large box of assorted LEGO bricks, includes idea booklet. Complete set.",
      "category": "Toys",
      "condition": "Good",
      "location": "Austin, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
    },
    {
      "_id": "6aba8af68080a8f227526b05",
      "name": "Wooden Train Set",
      "description": "Fifty-piece wooden railway with bridges and trains, compatible with major brands.",
      "category": "Toys",
      "condition": "Good",
      "location": "Round Rock, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
    },
    {
      "_id": "6aba8af68080a8f227526b06",
      "name": "KitchenAid Stand Mixer",
      "description": "Artisan 5-quart tilt-head stand mixer in empire red with dough hook and whisk.",
      "category": "Kitchen",
      "condition": "Good",
      "location": "Austin, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
    },
    {
      "_id": "6aba8af68080a8f227526b07",
      "name": "Cast Iron Skillet Set",
      "description": "Three pre-seasoned cast iron skillets (8, 10, 12 inch) with silicone handles.",
      "category": "Kitchen",
      "condition": "Good",
      "location": "Cedar Park, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
    },
    {
      "_id": "6aba8af68080a8f227526b08",
      "name": "Yoga Mat and Blocks",
      "description": "Six-millimeter yoga mat with two foam blocks and a carrying strap.",
      "category": "Sports",
      "condition": "Like New",
      "location": "Austin, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
    },
    {
      "_id": "6aba8af68080a8f227526b09",
      "name": "Mountain Bike - Adult 26\"",
      "description": "Hardtail mountain bike, 21 speeds, new tires and chain. Rides smoothly.",
      "category": "Sports",
      "condition": "Used",
      "location": "Austin, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
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
  -d '{"username":"testuser_1790610182552","email":"testuser1790610182552@example.com","password":"secret123","first_name":"Test","last_name":"User","location":"Austin, TX"}'
```

Output:

```
HTTP Status: 201

{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhYmE4YjA2ODBkNWMzODliNTAwNzc0MSIsInVzZXJuYW1lIjoidGVzdHVzZXJfMTc5MDYxMDE4MjU1MiIsImlhdCI6MTc5MDYxMDE4MiwiZXhwIjoxNzkxMjE0OTgyfQ.yqCPhUcGrZPOrooNqJpqadk8vNyu1PCJjuyrqh57FqM",
  "user": {
    "_id": "6aba8b0680d5c389b5007741",
    "username": "testuser_1790610182552",
    "email": "testuser1790610182552@example.com",
    "first_name": "Test",
    "last_name": "User",
    "location": "Austin, TX",
    "bio": "",
    "avatar_url": "",
    "createdAt": "2026-09-28T15:43:02.710Z",
    "updatedAt": "2026-09-28T15:43:02.710Z"
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
  -d '{"username":"testuser_1790610182552","password":"secret123"}'
```

Output:

```
HTTP Status: 200

{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhYmE4YjA2ODBkNWMzODliNTAwNzc0MSIsInVzZXJuYW1lIjoidGVzdHVzZXJfMTc5MDYxMDE4MjU1MiIsImlhdCI6MTc5MDYxMDE4MiwiZXhwIjoxNzkxMjE0OTgyfQ.yqCPhUcGrZPOrooNqJpqadk8vNyu1PCJjuyrqh57FqM",
  "user": {
    "_id": "6aba8b0680d5c389b5007741",
    "username": "testuser_1790610182552",
    "email": "testuser1790610182552@example.com",
    "first_name": "Test",
    "last_name": "User",
    "location": "Austin, TX",
    "bio": "",
    "avatar_url": "",
    "createdAt": "2026-09-28T15:43:02.710Z",
    "updatedAt": "2026-09-28T15:43:02.710Z"
  }
}
```

---

## Question 16 — Task 16 (2 pts): cURL command + output from `item_detail` (details of an item)

**Answer:**

Command:

```bash
curl -X GET "http://localhost:8000/api/gifts/6aba8af68080a8f227526afa" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhYmE4YjA2ODBkNWMzODliNTAwNzc0MSIsInVzZXJuYW1lIjoidGVzdHVzZXJfMTc5MDYxMDE4MjU1MiIsImlhdCI6MTc5MDYxMDE4MiwiZXhwIjoxNzkxMjE0OTgyfQ.yqCPhUcGrZPOrooNqJpqadk8vNyu1PCJjuyrqh57FqM"
```

Output:

```
HTTP Status: 200

{
  "_id": "6aba8af68080a8f227526afa",
  "name": "Wooden Dining Table",
  "description": "Solid oak dining table, seats six. A few light scratches on the surface but very sturdy.",
  "category": "Furniture",
  "condition": "Good",
  "location": "Austin, TX",
  "image_url": "",
  "status": "Available",
  "comments": [],
  "createdAt": "2026-09-28T15:42:46.202Z",
  "updatedAt": "2026-09-28T15:42:46.202Z"
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
      "_id": "6aba8af68080a8f227526afa",
      "name": "Wooden Dining Table",
      "description": "Solid oak dining table, seats six. A few light scratches on the surface but very sturdy.",
      "category": "Furniture",
      "condition": "Good",
      "location": "Austin, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
    },
    {
      "_id": "6aba8af68080a8f227526b05",
      "name": "Wooden Train Set",
      "description": "Fifty-piece wooden railway with bridges and trains, compatible with major brands.",
      "category": "Toys",
      "condition": "Good",
      "location": "Round Rock, TX",
      "image_url": "",
      "status": "Available",
      "comments": [],
      "createdAt": "2026-09-28T15:42:46.202Z",
      "updatedAt": "2026-09-28T15:42:46.202Z"
    }
  ]
}
```

---

## Question 18 — Task 18 (2 pts): CI/CD Actions workflow output (all steps, success)

**Answer:**

Workflow run **CI/CD #4** — triggered by push of commit `3d0ebae` to `main` on **2026-09-28**, conclusion: **success** ✅

Run page: https://github.com/Abdulbari36/fullstack-capstone-project/actions/runs/36446190488
Workflow file: `.github/workflows/ci-cd.yml` — 4 jobs, all steps green:

```
CI/CD — run #4 (push to main, commit 3d0ebae)
Workflow: .github/workflows/ci-cd.yml
Conclusion: success (all 4 jobs)

Job 1: Backend — build & test ................ SUCCESS
  ✓ Set up job
  ✓ Run actions/checkout@v4
  ✓ Setup Node.js (node-version: 20, cache: npm)
  ✓ Install dependencies        → npm install
  ✓ Lint (syntax check)         → node --check index.js && node --check app.js && node --check db.js
  ✓ Start MongoDB (for import script) → supercharge/mongodb-github-action@1.10.0 (MongoDB 7)
  ✓ Import 16 items — npm start from util/import-mongo
      > import-mongo@1.0.0 start
      > node import.js
      Inserted 16 documents into giftlink.gifts
      Import completed successfully — 16 documents in giftlink.gifts
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

Job 2: Frontend — build ....................... SUCCESS
  ✓ Set up job
  ✓ Run actions/checkout@v4
  ✓ Setup Node.js (node-version: 20, cache: npm)
  ✓ Install dependencies        → npm install
  ✓ Build production bundle     → npm run build (React production bundle)
  ✓ Post Setup Node.js
  ✓ Post Run actions/checkout@v4
  ✓ Complete job

Job 3: Docker — build images .................. SUCCESS
  ✓ Set up job
  ✓ Run actions/checkout@v4
  ✓ Build backend image         → docker build -t giftlink-backend ./giftlink-backend
  ✓ Build frontend image        → docker build -t giftlink-frontend ./frontend
  ✓ Post Run actions/checkout@v4
  ✓ Complete job

Job 4: Deploy (Render) ........................ SUCCESS
  ✓ Set up job
  ✓ Run actions/checkout@v4
  ⊘ Trigger Render deploy hook  → skipped (RENDER_DEPLOY_HOOK secret not set)
  ✓ Post Run actions/checkout@v4
  ✓ Complete job

All 4 jobs completed successfully.
```
