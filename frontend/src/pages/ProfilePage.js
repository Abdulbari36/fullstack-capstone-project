/**
 * ProfilePage.js — view and edit the current user's profile.
 */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiGet, apiSend } from "../api";

function ProfilePage() {
  const stored = JSON.parse(localStorage.getItem("giftlink_user") || "null");
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: stored?.first_name || "",
    last_name: stored?.last_name || "",
    location: stored?.location || "",
    bio: stored?.bio || "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  if (!stored) {
    return (
      <p className="status">
        Please <Link to="/login">log in</Link> to view your profile.
      </p>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const data = await apiSend("/api/auth/update", "PUT", form);
      localStorage.setItem("giftlink_user", JSON.stringify(data.user));
      setMessage("Profile saved!");
    } catch (e2) {
      setError(e2.message);
    }
  };

  return (
    <div className="profile">
      <h2>My profile</h2>
      <p>
        Logged in as <strong>{stored.username}</strong> ({stored.email})
      </p>

      <form onSubmit={handleSave} className="auth-form">
        <div className="row">
          <label>
            First name
            <input name="first_name" value={form.first_name} onChange={handleChange} />
          </label>
          <label>
            Last name
            <input name="last_name" value={form.last_name} onChange={handleChange} />
          </label>
        </div>
        <label>
          Location
          <input name="location" value={form.location} onChange={handleChange} />
        </label>
        <label>
          Bio
          <textarea name="bio" value={form.bio} onChange={handleChange} rows={3} />
        </label>

        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
        <button type="submit">Save changes</button>
      </form>

      <button
        className="linklike danger"
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default ProfilePage;
