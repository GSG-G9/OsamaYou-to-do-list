import "./UserLists.css";

const UserLists = ({ toDoLists, onListClick }) => {
  return (
    <nav className="menu">
      {Object.keys(toDoLists).map((item, i) => (
        <a
          className={`menuItem ${+(i === 0) ? " menuItem--active" : ""}`}
          id={item}
          key={i}
          onClick={onListClick}
        >
          <span>{toDoLists[item].name}</span>
        </a>
      ))}
    </nav>
  );
};

export default UserLists;
