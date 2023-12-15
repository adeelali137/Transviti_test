import React from 'react';
import logo from '../assets/logo.png'


import { FaBars } from 'react-icons/fa';
import SearchBar from './SearchBar';
import ActionButtons from './ActionButtons';


export default function Header({ toggleDrawer }) {
  return (
    <div className="header__main">
      <div className="container">
        <div className="row header">
          <div className="logoImg">
            <img src={logo} alt="Logo" />
          </div>
          <div className="hamburger" onClick={toggleDrawer}>
            <FaBars />
          </div>
          <SearchBar/>
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}
