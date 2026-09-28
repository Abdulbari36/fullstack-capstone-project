/**
 * SearchPage.js — search & filter items via /api/search.
 */
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { apiGet } from "../api";
import GiftCard from "../components/GiftCard";

function SearchPage() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "";
  const category = params.get("category") || "";

  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError("");
      try {
        const qs = new URLSearchParams();
        if (q) qs.set("q", q);
        if (category) qs.set("category", category);
        const data = await apiGet(`/api/search?${qs.toString()}`);
        if (!cancelled) {
          setResults(data.results || []);
          setTotal(data.total || 0);
        }
      } catch (e) {
        if (!cancelled) setError(e.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [q, category]);

  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next);
  };

  return (
    <div>
      <h2>Search items</h2>

      <form
        className="searchbar"
        onSubmit={(e) => {
          e.preventDefault();
          update("q", e.target.elements.q.value);
        }}
      >
        <input name="q" defaultValue={q} placeholder="Search items…" />
        <select value={category} onChange={(e) => update("category", e.target.value)}>
          <option value="">All categories</option>
          <option>Furniture</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Books</option>
          <option>Toys</option>
          <option>Kitchen</option>
          <option>Sports</option>
          <option>Other</option>
        </select>
        <button type="submit">Search</button>
      </form>

      {loading && <p className="status">Searching…</p>}
      {error && <p className="status error">{error}</p>}
      {!loading && !error && <p>{total} item(s) found.</p>}

      <div className="grid">
        {results.map((g) => (
          <GiftCard key={g._id} gift={g} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
