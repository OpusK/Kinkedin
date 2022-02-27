import React from 'react';
import './Header.css';
import HeaderNavBar from './HeaderNavBar.js'

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';



function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderNavBar Icon={HomeIcon} title='Home' />
        <HeaderNavBar Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderNavBar Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderNavBar Icon={ChatIcon} title='Messaging' />
        <HeaderNavBar Icon={NotificationsIcon} title='Notification' />
        <HeaderNavBar avatar="https://avatars.githubusercontent.com/u/18085958?s=400&u=5ed6e2c60cb0e4fc413b801abf470ef40fde02fe&v=4" title='me' />
      </div>
    </div>
  );
}

export default Header;
