import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css"

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="https://media.istockphoto.com/photos/background-autumn-orange-yellow-green-pale-grunge-gradient-colorful-picture-id1268728034?b=1&k=20&m=1268728034&s=170667a&w=0&h=_wCtiWHGt6sydzRJqkQt6T3FFl102TTrKo1j3-iybJg=" alt="" />
        <Avatar src={user?.photoUrl} className="sidebar__avatar">
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">4,444</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">4,444</p>
        </div>
      </div>

      <div className="sidebar__button">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('swengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
}

export default Sidebar