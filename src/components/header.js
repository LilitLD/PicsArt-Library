import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className="header" >
      <div className="leftside">
   <Link to="/">     <img
          src={logo}
          alt="Logo"
          style={{ width: '100px', height: '50px' }}
        /></Link>
      </div>

      <div className="rightside">
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/catalog">Catalog</Link>
        </div>

        <div className="login-register-container">
          <Link to="/loginregister">Login/Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
