/**
 * GiftCard.js — presentational card for a single gift listing.
 */
import React from "react";
import { Link } from "react-router-dom";

function GiftCard({ gift }) {
  const img =
    gift.image_url ||
    `https://placehold.co/400x300/e8f5e9/2e7d32?text=${encodeURIComponent(gift.category)}`;

  return (
    <Link to={`/items/${gift._id}`} className="gift-card" data-testid="gift-card">
      <img src={img} alt={gift.name} loading="lazy" />
      <div className="gift-card-body">
        <h3>{gift.name}</h3>
        <p className="desc">{gift.description}</p>
        <div className="meta">
          <span className="badge">{gift.category}</span>
          <span className="badge subtle">{gift.condition}</span>
          {gift.location && <span className="loc">📍 {gift.location}</span>}
        </div>
      </div>
    </Link>
  );
}

export default GiftCard;
