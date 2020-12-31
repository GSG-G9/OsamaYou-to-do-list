import UserInfo from './UserInfo';
import UserLists from './UserLists';

import './SideBar.css';

const SideBar = () => (
  <sidebar>
    <UserInfo />
    <UserLists />
    <div className="logOut">logOut</div>
  </sidebar>
);

export default SideBar;
