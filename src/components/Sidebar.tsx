import React from "react";
import { userData } from "../store/states";
interface User {
  name: string;
  email: string;
  avatarUrl: string;
}

interface Props {
  user: User;
}

const Sidebar: React.FC<Props> = ({ user }) => {
  const { toggleSidebar, isLoggedIn, name, email, avatarUrl } = userData();
  return (
    <aside className={isLoggedIn ? "transe" : "transe"}>
      <h1>
        Profile
        <span>
          <a onClick={toggleSidebar}>&#10006;</a>
        </span>
      </h1>
      <div className="user-info">
        <img src={avatarUrl} alt={user.name} className="avatar" />
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </aside>
  );
};

export default Sidebar;
