import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from "./features/userSlice";
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
