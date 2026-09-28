/**
 * ItemDetailPage.js — details of one item, with comments.
 */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apiGet, apiSend, getToken } from "../api";

function ItemDetailPage() {
  const { id } = useParams();
  const [gift, setGift] = useState(null);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await apiGet(`/api/gifts/${id}`);
        if (!cancelled) setGift(data);
      } catch (e) {
        if (!cancelled) setError(e.message);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  const submitComment = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const comments = await apiSend(`/api/gifts/${id}/comments`, "POST", { text: comment });
      setGift((g) => ({ ...g, comments }));
      setComment("");
    } catch (e2) {
      setError(e2.message.includes("Authorization") ? "Please log in to comment." : e2.message);
    }
  };

  if (error && !gift) return <p className="status error">{error}</p>;
  if (!gift) return <p className="status">Loading item…</p>;

  return (
    <article className="detail">
      <Link to="/items">← Back to items</Link>
      <h2>{gift.name}</h2>
      <p className="desc">{gift.description}</p>
      <div className="meta">
        <span className="badge">{gift.category}</span>
        <span className="badge subtle">{gift.condition}</span>
        <span className="badge subtle">{gift.status}</span>
        {gift.location && <span className="loc">📍 {gift.location}</span>}
      </div>

      <h3>Comments ({(gift.comments || []).length})</h3>
      <ul className="comments">
        {(gift.comments || []).map((c) => (
          <li key={c._id}>
            <strong>{c.user?.username || "User"}</strong>: {c.text}
          </li>
        ))}
        {(!gift.comments || gift.comments.length === 0) && <li>No comments yet.</li>}
      </ul>

      {getToken() ? (
        <form onSubmit={submitComment} className="comment-form">
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment…"
            required
          />
          <button type="submit">Post</button>
        </form>
      ) : (
        <p>
          <Link to="/login">Log in</Link> to leave a comment.
        </p>
      )}
      {error && <p className="error">{error}</p>}
    </article>
  );
}

export default ItemDetailPage;
