import './UserLists.css';

const UserLists = () => (
  <nav className="menu">
    <a href="!#" className="menuItem">
      <span>not active</span>
    </a>
    <a href="!#" className="menuItem menuItem--active">
      <span>active</span>
    </a>
  </nav>
);

export default UserLists;
