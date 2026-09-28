# GiftLink — User Stories

> Template used during Agile planning for the **fullstack-capstone-project** repository.
> Each story follows the standard format below and carries one of the labels:
> `new`, `icebox`, `technical debt`, or `backlog`.

## User Story Template

```
Title: [Short descriptive title]

As a [type of user],
I want [goal / need],
so that [reason / benefit].

Acceptance Criteria:
1. [Criterion 1]
2. [Criterion 2]
3. [Criterion 3]

Priority: [Must have | Should have | Could have | Won't have]
Label: [new | icebox | technical debt | backlog]
Story Points: [1, 2, 3, 5, 8]
```

---

## Example filled-in stories (the 8 created as GitHub issues)

### US1 — Browse available items
**As a** visitor, **I want** to browse all available gift items in a grid, **so that** I can quickly see what is being given away near me.

- **Acceptance Criteria:**
  1. `GET /api/gifts` returns all items with name, description, category, condition and location.
  2. Items render as cards on the home/items page.
  3. Items link to their detail page.
- **Priority:** Must have · **Label:** `new` · **Points:** 3

### US2 — Search & filter by category
**As a** visitor, **I want** to search items by keyword and filter by category, **so that** I can find specific items fast.

- **Acceptance Criteria:**
  1. `GET /api/search?q=...&category=...` filters correctly.
  2. Category filter dropdown works on the search page.
  3. Zero-result searches show a friendly empty state.
- **Priority:** Must have · **Label:** `new` · **Points:** 3

### US3 — View item details
**As a** visitor, **I want** to open a detailed view of an item, **so that** I can read the full description and comments before requesting it.

- **Acceptance Criteria:**
  1. `GET /api/gifts/:id` returns the item plus comments.
  2. Detail page shows all fields.
  3. Unknown ids show a 404 message.
- **Priority:** Must have · **Label:** `new` · **Points:** 2

### US4 — Register an account
**As a** new user, **I want** to register with username, email and password, **so that** I can post items and comment.

- **Acceptance Criteria:**
  1. `POST /api/auth/register` creates a user with a bcrypt-hashed password.
  2. A JWT is returned on success.
  3. Duplicate username/email is rejected with a clear error.
- **Priority:** Must have · **Label:** `new` · **Points:** 3

### US5 — Log in / log out
**As a** registered user, **I want** to log in and out securely, **so that** my account stays protected.

- **Acceptance Criteria:**
  1. `POST /api/auth/login` verifies credentials and returns a JWT.
  2. Token is stored client-side and sent as `Authorization: Bearer`.
  3. Logout clears the stored token.
- **Priority:** Must have · **Label:** `new` · **Points:** 3

### US6 — Edit my profile
**As a** logged-in user, **I want** to update my profile info (name, location, bio), **so that** my details stay accurate.

- **Acceptance Criteria:**
  1. `PUT /api/auth/update` updates allowed fields only.
  2. Changes persist and are shown on the profile page.
  3. Password is never returned by the API.
- **Priority:** Should have · **Label:** `backlog` · **Points:** 2

### US7 — Comment on items
**As a** logged-in user, **I want** to comment on an item, **so that** I can ask the giver questions.

- **Acceptance Criteria:**
  1. `POST /api/gifts/:id/comments` appends atomically ($push).
  2. Comment shows with author and timestamp.
  3. Unauthenticated users are prompted to log in.
- **Priority:** Should have · **Label:** `backlog` · **Points:** 2

### US8 — Paginate the item list (technical debt)
**As a** developer, **I want** the item list endpoint to paginate consistently and reuse the same filter builder as search, **so that** the codebase stays maintainable as listings grow.

- **Acceptance Criteria:**
  1. `?page` and `?limit` supported on `GET /api/gifts`.
  2. Shared filter logic with `/api/search`.
  3. Unit smoke test covers pagination params.
- **Priority:** Could have · **Label:** `technical debt` · **Points:** 3

### US9 — Email notifications (icebox)
**As a** user, **I want** an email when someone comments on my item, **so that** I can respond quickly.

- **Priority:** Won't have (this semester) · **Label:** `icebox` · **Points:** 5

---

## Labels used on GitHub

| Label | Meaning |
|---|---|
| `new` | Freshly created, needs triage |
| `backlog` | Agreed, scheduled for an upcoming sprint |
| `technical debt` | Refactor/quality work |
| `icebox` | Parked — not planned for this release |
