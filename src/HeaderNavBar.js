import React from "react";
import './HeaderNavBar.css';
import { Avatar } from "@mui/material";

function HeaderNavBar({ avatar, Icon, title }) {
  return (
    <div className="HeaderNavBar">
      {Icon && <Icon className="HeaderNavBar__icon" />}
      {avatar && <Avatar className="HeaderNavBar__icon" src={avatar} />}
      <h3 className="HeaderNavBar__title">{title}</h3>
    </div>
  );
}

export default HeaderNavBar;