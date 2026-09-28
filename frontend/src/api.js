/**
 * api.js — tiny fetch wrapper for GiftLink API calls.
 */
const TOKEN_KEY = "giftlink_token";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY) || "";
}

export function headersWithAuth(extra = {}) {
  return {
    "Content-Type": "application/json",
    ...(getToken() ? { Authorization: `Bearer ${getToken()}` } : {}),
    ...extra,
  };
}

export async function apiGet(path) {
  const res = await fetch(path, { headers: headersWithAuth() });
  if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || res.statusText);
  return res.json();
}

export async function apiSend(path, method, body) {
  const res = await fetch(path, {
    method,
    headers: headersWithAuth(),
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || res.statusText);
  return data;
}
