import React from 'react';
import { useDispatch } from 'react-redux';
import './Header.css';
import HeaderNavBar from './HeaderNavBar.js'

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { logout } from "./features/userSlice";
import { getAuth, signOut } from "firebase/auth";


function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    // https://firebase.google.com/docs/auth/web/password-auth#next_steps
    signOut(getAuth());
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderNavBar Icon={HomeIcon} title='Home' />
        <HeaderNavBar Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderNavBar Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderNavBar Icon={ChatIcon} title='Messaging' />
        <HeaderNavBar Icon={NotificationsIcon} title='Notification' />
        <HeaderNavBar 
          avatar={true}
          title='me'
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
