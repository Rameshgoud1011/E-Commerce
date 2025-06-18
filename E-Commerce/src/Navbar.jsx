import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ShopEase</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
