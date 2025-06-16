import React from 'react';
import './header.css';
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import logo22 from '../assets/logo22.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* LOGO */}
        <div className="logo">
          <img src={logo22} alt="Whitepace Logo" />
          <span>Whitepace</span>
        </div>

        {/* NAV */}
        <nav className="nav">
          <div className="nav-item">Products <FaChevronDown /></div>
          <div className="nav-item">Solutions <FaChevronDown /></div>
          <div className="nav-item">Resources <FaChevronDown /></div>
          <div className="nav-item">Pricing</div>
        </nav>

        {/* BUTTONS */}
        <div className="buttons">
          <button className="login-btn">Login</button>
          <button className="try-btn">
            Try Whitepace <FaArrowRight />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
