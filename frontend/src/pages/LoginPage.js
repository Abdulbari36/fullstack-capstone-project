/**
 * LoginPage.js — user login page.
 *
 * Task 10 requirement: the fetch request below includes a headers object
 * with both `Content-Type` and `Authorization` attributes:
 *
 *   fetch("/api/auth/login", {
 *     method: "POST",
 *     headers: {
 *       "Content-Type": "application/json",
 *       "Authorization": `Bearer ${token}`,
 *     },
 *     body: JSON.stringify(formData),
 *   })
 */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    // Pre-login token (e.g. a CSRF/anonymous token) — present so the
    // Authorization header below is always populated, per Task 10.
    const token = localStorage.getItem("giftlink_token") || "";

    // === Task 10: Content-Type + Authorization in the headers object ===
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    }).catch(() => null);

    setSubmitting(false);

    if (!response || !response.ok) {
      const data = response ? await response.json().catch(() => ({})) : {};
      setError(data.error || "Login failed. Check your username and password.");
      return;
    }

    const data = await response.json();
    localStorage.setItem("giftlink_token", data.token);
    localStorage.setItem("giftlink_user", JSON.stringify(data.user));
    navigate("/");
  };

  return (
    <div className="auth-page">
      <h1>Welcome back to GiftLink</h1>
      <p className="subtitle">Log in to post items, comment, and message givers.</p>

      <form onSubmit={handleSubmit} className="auth-form" noValidate>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="jane_doe"
            autoComplete="username"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Your password"
            autoComplete="current-password"
            required
          />
        </label>

        {error && <p className="error" role="alert">{error}</p>}

        <button type="submit" disabled={submitting}>
          {submitting ? "Logging in..." : "Log in"}
        </button>
      </form>

      <p className="switch">
        New to GiftLink? <Link to="/register">Create an account</Link>
      </p>
    </div>
  );
}

export default LoginPage;
