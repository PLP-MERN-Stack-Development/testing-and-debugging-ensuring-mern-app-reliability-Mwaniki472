const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/bugs";

export async function getBugs() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch bugs");
  return res.json();
}

export async function createBug(bug) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bug),
   });
   if (!res.ok) throw new Error("Failed to create bug");
   return res.json();
}

export const updateBug = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteBug = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
