import React, { useState } from "react";

const BugForm = ({ onBugCreated }) => {
  const [titel, setTitel] = useState(""); // 🪲 Intentional bug: wrong variable name
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting bug:", { titel, description }); // 🪵 Debug log

    // This will fail silently because "titel" doesn't match backend's expected "title"
    onBugCreated({ title: titel, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Bug title"
        value={titel}
        onChange={(e) => setTitel(e.target.value)}
      />
      <textarea
        placeholder="Bug description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Report Bug</button>
    </form>
  );
};

export default BugForm;

