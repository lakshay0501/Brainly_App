const BASE_URL = "http://localhost:5000/api";

export const api = {
  async get(path: string, token?: string) {
    const res = await fetch(`${BASE_URL}${path}`, {
      headers: token
        ? { Authorization: `Bearer ${token}` }
        : {},
    });
    return res.json();
  },

  async post(path: string, body: any, token?: string) {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(body),
    });
    return res.json();
  },
};
