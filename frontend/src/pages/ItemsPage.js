/**
 * ItemsPage.js — browsable list of all gift items with category filter.
 */
import React, { useEffect, useState } from "react";
import { apiGet } from "../api";
import GiftCard from "../components/GiftCard";

function ItemsPage() {
  const [gifts, setGifts] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const qs = category ? `?category=${encodeURIComponent(category)}` : "";
        const data = await apiGet(`/api/gifts${qs}`);
        if (!cancelled) setGifts(data.gifts || []);
      } catch (e) {
        if (!cancelled) setError(e.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [category]);

  if (loading) return <p className="status">Loading items…</p>;
  if (error) return <p className="status error">Failed to load items: {error}</p>;

  return (
    <div>
      <h2>All items</h2>
      <label className="filter">
        Filter by category:{" "}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          <option>Furniture</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Books</option>
          <option>Toys</option>
          <option>Kitchen</option>
          <option>Sports</option>
          <option>Other</option>
        </select>
      </label>

      <div className="grid">
        {gifts.map((g) => (
          <GiftCard key={g._id} gift={g} />
        ))}
        {gifts.length === 0 && <p>No items found{category ? ` in ${category}` : ""}.</p>}
      </div>
    </div>
  );
}

export default ItemsPage;
