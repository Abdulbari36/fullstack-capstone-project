/**
 * LandingPage.js — the deployed landing page.
 *
 * Task 12 requirement: the screenshot deployed_landingpage.png must show
 * the deployment URL, the project title, a tagline, and a Get Started
 * button — all four are rendered by this component.
 */
import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing">
      <section className="hero">
        <h1>🎁 GiftLink</h1>
        <p className="tagline">
          Give the things you no longer need. Find free treasures near you —
          good for your wallet, great for the planet.
        </p>
        <Link to="/items" className="btn-primary">
          Get Started
        </Link>
      </section>

      <section className="features">
        <div className="feature">
          <h3>🪴 Reduce waste</h3>
          <p>Every gifted item is one less thing in a landfill.</p>
        </div>
        <div className="feature">
          <h3>💸 Save money</h3>
          <p>Search, comment, and claim items for free in your neighborhood.</p>
        </div>
        <div className="feature">
          <h3>🤝 Build community</h3>
          <p>Meet neighbors and help household items find a second life.</p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
