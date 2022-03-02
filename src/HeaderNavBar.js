import React from "react";
import { useSelector } from 'react-redux';
import './HeaderNavBar.css';
import { Avatar } from "@mui/material";
import { selectUser } from "./features/userSlice";

function HeaderNavBar({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="HeaderNavBar">
      {Icon && <Icon className="HeaderNavBar__icon" />}
      {avatar && <Avatar className="HeaderNavBar__icon" src={user?.photoUrl}>
        {user?.displayName[0]}
      </Avatar>}
      <h3 className="HeaderNavBar__title">{title}</h3>
    </div>
  );
}

export default HeaderNavBar;