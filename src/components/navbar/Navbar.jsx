import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/Cklogo.avif" alt="CK Logo" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
        <li><Link to="/experience" onClick={toggleMenu}>Experience</Link></li>
        <li><Link to="/achievements" onClick={toggleMenu}>Achievements</Link></li>
        <li><Link to="/aboutme" onClick={toggleMenu}>About Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
