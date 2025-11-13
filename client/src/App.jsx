import React, { useState, useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import BugForm from "./components/BugForm";
import BugItem from "./components/BugItem";
import { getBugs } from "./lib/api";

function App() {
  const [bugs, setBugs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const data = await getBugs();
        setBugs(data);
      } catch (err) {
        console.error("❌ Failed to load bugs:", err);
        setError("Unable to load bugs. Please try again later.");
      }
    };
    fetchBugs();
  }, []);

  return (
    <ErrorBoundary>
      <div className="app">
        <h1>🐞 Bug Tracker</h1>
        {error && <div className="error-message">{error}</div>}
        <BugForm onBugCreated={(newBug) => setBugs([...bugs, newBug])} />
        <div className="bug-list">
          {bugs.map((bug) => (
            <BugItem key={bug._id} bug={bug} />
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
