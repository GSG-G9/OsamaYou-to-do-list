import UserInfo from "./UserInfo";
import UserLists from "./UserLists";

import "./SideBar.css";

const SideBar = ({ data: { userName, toDoLists }, onAddList, onListClick }) => (
  <div id="sideBar">
    <UserInfo userName={userName} onAddList={onAddList} />
    <UserLists toDoLists={toDoLists} onListClick={onListClick} />
  </div>
);

export default SideBar;
