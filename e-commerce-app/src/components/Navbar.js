
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';



function Navbar() {
  return (
    <div className="nav-bar">
      <div>
          <img src={logo} alt="logo" className="logo" />
      </div>
      <div>
        <Link to="/">HOME</Link>
      </div>
      <div>
        <Link to="/products">SHOP</Link>
      </div>
     
      <div className='Shopping-cart'>
        <Link to="/cart">CART</Link>
      </div>
    </div>
  );
}

export default Navbar;