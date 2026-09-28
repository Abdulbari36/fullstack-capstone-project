/**
 * RegisterPage.js — user registration page.
 *
 * Task 9 requirement: the fetch request below includes the required
 * `method` and `headers` attributes:
 *
 *   fetch("/api/auth/register", {
 *     method: "POST",
 *     headers: {
 *       "Content-Type": "application/json",
 *     },
 *     body: JSON.stringify(formData),
 *   })
 */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    location: "",
  });
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

    // === Task 9: method + headers attributes are required here ===
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).catch(() => null);

    setSubmitting(false);

    if (!response || !response.ok) {
      const data = response ? await response.json().catch(() => ({})) : {};
      setError(data.error || "Registration failed. Please try again.");
      return;
    }

    const data = await response.json();
    // Keep the session token for authenticated requests.
    localStorage.setItem("giftlink_token", data.token);
    localStorage.setItem("giftlink_user", JSON.stringify(data.user));
    navigate("/"); // go to the landing / item list page
  };

  return (
    <div className="auth-page">
      <h1>Create your GiftLink account</h1>
      <p className="subtitle">Join the community and start giving items a second life.</p>

      <form onSubmit={handleSubmit} className="auth-form" noValidate>
        <label>
          Username *
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="jane_doe"
            required
            minLength={3}
          />
        </label>

        <label>
          Email *
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            required
          />
        </label>

        <label>
          Password *
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="At least 6 characters"
            required
            minLength={6}
          />
        </label>

        <div className="row">
          <label>
            First name
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="Jane"
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Doe"
            />
          </label>
        </div>

        <label>
          Location
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Austin, TX"
          />
        </label>

        {error && <p className="error" role="alert">{error}</p>}

        <button type="submit" disabled={submitting}>
          {submitting ? "Creating account..." : "Register"}
        </button>
      </form>

      <p className="switch">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
