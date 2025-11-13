import { updateBug, deleteBug } from "../lib/api";

const BugItem = ({ bug, onBugUpdated, onBugDeleted }) => {
  const handleStatusChange = async (e) => {
    const updated = await updateBug(bug._id, { status: e.target.value });
    onBugUpdated(updated);
  };

  const handleDelete = async () => {
    await deleteBug(bug._id);
    onBugDeleted(bug._id);
  };

  return (
    <li className="bug-item">
      <h3>{bug.title}</h3>
      <p>{bug.description}</p>
      <select value={bug.status} onChange={handleStatusChange}>
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default BugItem;
