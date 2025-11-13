import BugItem from "./BugItem";

const BugList = ({ bugs, onBugUpdated, onBugDeleted }) => (
  <ul className="bug-list">
    {bugs.map((bug) => (
      <BugItem
        key={bug._id}
        bug={bug}
        onBugUpdated={onBugUpdated}
        onBugDeleted={onBugDeleted}
      />
    ))}
  </ul>
);

export default BugList;
