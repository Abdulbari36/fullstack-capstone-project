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

Details and Assumptions:
* [Context, constraints, or facts we assume to be true]
* [Additional detail that clarifies the need]
* [Anything the story depends on]

Acceptance Criteria (Gherkin):
1. Given [context], When [action], Then [outcome]
2. Given [context], When [action], Then [outcome]
3. Given [context], When [action], Then [outcome]

Priority: [Must have | Should have | Could have | Won't have]
Label: [new | icebox | technical debt | backlog]
Story Points: [1, 2, 3, 5, 8]
```

### Filled-in example

```
Title: Browse available items

As a visitor,
I want to browse all available gift items in a grid,
so that I can quickly see what is being given away near me.

Details and Assumptions:
* Items are stored in a MongoDB collection with name, description, category,
  condition, location and status fields.
* Only items with status "Available" are shown as obtainable.
* The list supports pagination (?page, ?limit) so it scales past the first screen.

Acceptance Criteria (Gherkin):
1. Given the database contains 16 items, When I GET /api/gifts, Then the API responds 200 with all 16 items.
2. Given the items page is open, When the page loads, Then every item renders as a card with name, category, condition and location.
3. Given a card is clicked, When I open an item, Then I see the full detail page for that item.

Priority: Must have
Label: new
Story Points: 3
```

---

## The 9 stories created as GitHub issues

### US1 — Browse available items
**As a** visitor, **I want** to browse all available gift items in a grid, **so that** I can quickly see what is being given away near me.

**Details and Assumptions:**
* Items live in the `gifts` MongoDB collection with name, description, category, condition, location and status.
* The card grid is the primary view of the landing page.
* The list is paginated with `?page` and `?limit`.

**Acceptance Criteria (Gherkin):**
1. Given the database contains 16 items, When I GET `/api/gifts`, Then the API responds 200 with `total: 16`.
2. Given the items page is open, When the page loads, Then each item renders as a card showing name, category, condition and location.
3. Given a card is clicked, When I open an item, Then I land on the detail page for that item.

**Priority:** Must have · **Label:** `new` · **Points:** 3

---

### US2 — Search & filter by category
**As a** visitor, **I want** to search items by keyword and filter by category, **so that** I can find specific items fast.

**Details and Assumptions:**
* Search matches name and description case-insensitively.
* The category list comes from `GET /api/search/categories`.
* A zero-result search shows a friendly empty state.

**Acceptance Criteria (Gherkin):**
1. Given items exist in several categories, When I GET `/api/search?category=Books`, Then only items whose category is "Books" are returned.
2. Given I type "wooden" into the search box, When I submit the search, Then every returned item matches "wooden" in name or description.
3. Given no item matches my query, When I submit the search, Then the page shows "No items found" instead of an error.

**Priority:** Must have · **Label:** `new` · **Points:** 3

---

### US3 — View item details
**As a** visitor, **I want** to open a detailed view of an item, **so that** I can read the full description and comments before requesting it.

**Details and Assumptions:**
* The detail page shows all item fields plus its comments.
* Unknown or malformed ids must not crash the page.

**Acceptance Criteria (Gherkin):**
1. Given an item id exists, When I GET `/api/gifts/:id`, Then the API responds 200 with the full item.
2. Given the detail page is open, When I scroll it, Then I see name, description, category, condition, location, status and comments.
3. Given a non-existent id, When I open `/api/gifts/:id`, Then I see a 404 "Item not found" message.

**Priority:** Must have · **Label:** `new` · **Points:** 2

---

### US4 — Register an account
**As a** new user, **I want** to register with username, email and password, **so that** I can post items and comment.

**Details and Assumptions:**
* Passwords are stored bcrypt-hashed, never in plain text.
* A JWT is returned on success and kept client-side.
* Username and email must be unique.

**Acceptance Criteria (Gherkin):**
1. Given the username/email is not taken, When I POST valid details to `/api/auth/register`, Then a user is created and a JWT is returned with status 201.
2. Given the username or email already exists, When I register again, Then I get status 409 with "Username or email already registered".
3. Given a password shorter than 6 characters, When I submit the form, Then registration is rejected with a validation error.

**Priority:** Must have · **Label:** `new` · **Points:** 3

---

### US5 — Log in / log out
**As a** registered user, **I want** to log in and out securely, **so that** my account stays protected.

**Details and Assumptions:**
* The JWT expires after 7 days.
* The token is sent as `Authorization: Bearer <token>` on protected requests.
* Logout clears the stored token.

**Acceptance Criteria (Gherkin):**
1. Given valid credentials, When I POST to `/api/auth/login`, Then I receive 200 with a JWT and my user profile.
2. Given a wrong password, When I try to log in, Then I receive 401 "Invalid credentials".
3. Given I am logged in, When I log out, Then the stored token is removed and protected pages prompt me to log in again.

**Priority:** Must have · **Label:** `new` · **Points:** 3

---

### US6 — Edit my profile
**As a** logged-in user, **I want** to update my profile info (name, location, bio), **so that** my details stay accurate.

**Details and Assumptions:**
* Only whitelisted fields can be updated.
* The API never returns the password hash.

**Acceptance Criteria (Gherkin):**
1. Given I am authenticated, When I PUT allowed fields to `/api/auth/update`, Then they are saved and returned.
2. Given I am not authenticated, When I call `/api/auth/update`, Then I get 401.
3. Given any profile response, When I inspect it, Then the password field is absent.

**Priority:** Should have · **Label:** `backlog` · **Points:** 2

---

### US7 — Comment on items
**As a** logged-in user, **I want** to comment on an item, **so that** I can ask the giver questions.

**Details and Assumptions:**
* Comments are appended atomically with MongoDB `$push` so concurrent writes never lose data.
* Each comment stores author and timestamp.

**Acceptance Criteria (Gherkin):**
1. Given I am authenticated, When I POST text to `/api/gifts/:id/comments`, Then the comment is stored with my username and timestamp.
2. Given two users comment at the same time, When both requests complete, Then both comments are present.
3. Given I am not logged in, When I try to comment, Then I am prompted to log in (401).

**Priority:** Should have · **Label:** `backlog` · **Points:** 2

---

### US8 — Paginate the item list (technical debt)
**As a** developer, **I want** the item list endpoint to paginate consistently and reuse the same filter builder as search, **so that** the codebase stays maintainable as listings grow.

**Details and Assumptions:**
* Refactor shares one filter builder between `/api/gifts` and `/api/search`.
* Pagination params default to page 1 / limit 20.

**Acceptance Criteria (Gherkin):**
1. Given more than 20 items exist, When I GET `/api/gifts`, Then only the first 20 are returned with `total` reflecting the full count.
2. Given I request `?page=2&limit=5`, When I GET `/api/gifts`, Then items 6–10 are returned.
3. Given the refactor is applied, When I run the smoke tests, Then all endpoints still respond 200.

**Priority:** Could have · **Label:** `technical debt` · **Points:** 3

---

### US9 — Email notifications (icebox)
**As a** user, **I want** an email when someone comments on my item, **so that** I can respond quickly.

**Details and Assumptions:**
* Requires an external email provider (e.g. SendGrid) and API key.
* Out of scope for the current release; parked in the icebox.

**Acceptance Criteria (Gherkin):**
1. Given my item receives a comment, When the comment is created, Then an email notification is queued to the item owner.
2. Given the email service is unavailable, When a comment arrives, Then the comment still saves and the notification retries later.
3. Given I opted out in settings, When a comment arrives, Then no email is sent.

**Priority:** Won't have (this semester) · **Label:** `icebox` · **Points:** 5

---

## Labels used on GitHub

| Label | Meaning |
|---|---|
| `new` | Freshly created, needs triage |
| `backlog` | Agreed, scheduled for an upcoming sprint |
| `technical debt` | Refactor/quality work |
| `icebox` | Parked — not planned for this release |
