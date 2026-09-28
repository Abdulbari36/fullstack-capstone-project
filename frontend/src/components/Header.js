/**
 * Header.js — top navigation bar with the brand and links.
 */
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("giftlink_user") || "null");
  const token = localStorage.getItem("giftlink_token");

  const handleLogout = () => {
    localStorage.removeItem("giftlink_token");
    localStorage.removeItem("giftlink_user");
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="site-header">
      <Link to="/" className="brand">
        🎁 GiftLink
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        {token ? (
          <>
            <Link to="/profile">Profile</Link>
            <button className="linklike" onClick={handleLogout}>
              Log out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Log in</Link>
            <Link to="/register" className="cta">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
