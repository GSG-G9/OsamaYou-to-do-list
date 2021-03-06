import "./UserInfo.css";

const UserInfo = ({ userName, onAddList }) => (
  <div className="avatar">
    <div className="avatarName">{userName}</div>
    <input
      type="text"
      name="task"
      placeholder="Insert your list here.."
      onKeyDown={onAddList}
      autoComplete="off"
    />
  </div>
);

export default UserInfo;
