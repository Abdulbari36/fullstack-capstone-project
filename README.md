# 🎁 GiftLink — Full Stack Capstone Project

GiftLink connects users who want to **give away household items** they no longer need
with users who prefer to **recycle or find free items** instead of buying new.

**Stack:** React · Node.js · Express · MongoDB (Mongoose + native driver) · JWT · Docker · GitHub Actions

---

## 📁 Repository structure

```
fullstack-capstone-project/
├── backend/                  # Express API
│   ├── index.js              # Entry point — imports `natural` (Task 8)
│   ├── app.js                # Express app — serves /api/search (Task 7)
│   ├── db.js                 # MongoDB connection with await client.connect() (Task 4)
│   ├── models/               # Gift.js, User.js (Mongoose)
│   ├── routes/
│   │   ├── giftRoutes.js     # /api/gifts, /api/gifts/:id + connectToDatabase() (Task 5)
│   │   ├── searchRoutes.js   # /api/search — filters by category (Task 6)
│   │   └── authRoutes.js     # register / login / update user (Task 11)
│   ├── middleware/           # JWT auth + error handling
│   ├── seed/                 # 16 capstone items (Task 3)
│   └── scripts/capture-outputs.js   # regenerates docs/outputs/*
├── frontend/                 # React (Create React App)
│   └── src/pages/
│       ├── LandingPage.js    # Title + tagline + Get Started (Task 12)
│       ├── RegisterPage.js   # fetch with method + headers (Task 9)
│       ├── LoginPage.js      # Content-Type + Authorization headers (Task 10)
│       └── ...
├── docs/
│   ├── user-story.md         # User story template + 9 stories (Task 1)
│   ├── github-issues.md      # How to recreate userstories.png (Task 2)
│   └── outputs/              # mainpage, register, login, item_detail, search_item, inserted_items (Tasks 3, 13–17)
├── .github/workflows/ci-cd.yml   # CI/CD pipeline (Task 18)
└── docker-compose.yml        # mongo + backend + frontend
```

## 🚀 Run locally

### Option A — zero setup (in-memory MongoDB)

```bash
cd backend && npm install && npm start
# API on http://localhost:8000 — MongoDB runs in-memory, 16 items auto-seeded
```

```bash
cd frontend && npm install && npm start
# React app on http://localhost:3000 (proxies /api to :8000)
```

### Option B — real MongoDB via Docker

```bash
docker compose up --build
# frontend → http://localhost:3000
# backend  → http://localhost:8000
# mongo    → mongodb://localhost:27017/giftlink
```

### Seeding a real MongoDB

```bash
cd backend
MONGODB_URI="mongodb://127.0.0.1:27017" npm run seed
# → "Inserted 16 documents into giftlink.gifts"
```

## 🔌 API summary

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/gifts` | — | List items (`?category=`, `?page=`, `?limit=`) |
| GET | `/api/gifts/:id` | — | Item detail + comments |
| POST | `/api/gifts` | JWT | Create item |
| PUT/DELETE | `/api/gifts/:id` | JWT | Update (optimistic concurrency) / delete |
| POST | `/api/gifts/:id/comments` | JWT | Atomic `$push` comment |
| GET | `/api/search` | — | `?q=&category=&condition=&status=&sort=` |
| GET | `/api/search/categories` | — | Distinct categories |
| POST | `/api/auth/register` | — | Create account → JWT |
| POST | `/api/auth/login` | — | Login → JWT |
| GET | `/api/auth/me` | JWT | Current user |
| PUT | `/api/auth/update` | JWT | Update profile info |
| PUT | `/api/auth/update-password` | JWT | Change password |

Passwords are bcrypt-hashed; JWTs expire in 7 days; comments use atomic
MongoDB operators so concurrent writes never lose data.

## ☁️ Deployment (Task 12)

1. Push this repo to GitHub as **fullstack-capstone-project**.
2. Create a free **MongoDB Atlas** cluster → copy the connection string.
3. Deploy the backend on **Render** (Web Service, root dir `backend`):
   - Build: `npm install` · Start: `npm start`
   - Env vars: `MONGODB_URI`, `JWT_SECRET`, `SEED_ON_START=true`
4. Deploy the frontend (Static Site, root dir `frontend`):
   - Build: `npm run build` · Publish: `build`
   - Add a redirect/rewrite `/* → /index.html` for React Router.
5. Open the deployed URL — the landing page shows the title 🎁 GiftLink,
   tagline, and **Get Started** button. Screenshot it as `deployed_landingpage.png`.

## 🤖 CI/CD (Task 18)

`.github/workflows/ci-cd.yml` runs on every push/PR:

1. **Backend job** — install, syntax check, boot server, curl smoke tests
   (`/`, `/healthz`, `/api/gifts`, `/api/search`, register)
2. **Frontend job** — install + production build
3. **Docker job** — builds both Docker images
4. **Deploy job** — triggers a Render deploy hook on main (optional secret)

After the first push, open the **Actions** tab, click the latest
**CI/CD** run and screenshot the green workflow as `CI/CD`.

## 📋 Assignment submission map

| Task | Deliverable | Where |
|------|-------------|-------|
| 1 | `user-story.md` URL | `docs/user-story.md` |
| 2 | `userstories.png` screenshot | Recreate issues per `docs/github-issues.md`, then screenshot |
| 3 | `inserted_items` | `docs/outputs/inserted_items` (16 documents) |
| 4 | `db.js` URL with `await client.connect()` | `backend/db.js` |
| 5 | `giftRoutes.js` URL | `backend/routes/giftRoutes.js` |
| 6 | `searchRoutes.js` URL (category filter) | `backend/routes/searchRoutes.js` |
| 7 | `app.js` URL serving `/api/search` | `backend/app.js` |
| 8 | `index.js` URL importing `natural` | `backend/index.js` |
| 9 | `RegisterPage.js` URL | `frontend/src/pages/RegisterPage.js` |
| 10 | `LoginPage.js` URL | `frontend/src/pages/LoginPage.js` |
| 11 | `authRoutes.js` URL | `backend/routes/authRoutes.js` |
| 12 | `deployed_landingpage.png` | Deploy per guide above, screenshot the landing page |
| 13 | `mainpage` | `docs/outputs/mainpage` |
| 14 | `register` | `docs/outputs/register` |
| 15 | `login` | `docs/outputs/login` |
| 16 | `item_detail` | `docs/outputs/item_detail` |
| 17 | `search_item` | `docs/outputs/search_item` |
| 18 | CI/CD terminal output | GitHub Actions run screenshot after push |

## 📄 License

MIT — created for the Full Stack Application Development Capstone.
