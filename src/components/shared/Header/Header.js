import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src="/path/to/logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className="navbar__options">
        <li className="navbar__option">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar__option">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    );
};

export default Header;