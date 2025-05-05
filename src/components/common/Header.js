import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Page for Talent</Link>
      </div>
      <nav className="nav-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/explore" className="nav-link">Explore</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
        <Link to="/admin" className="nav-link">Admin</Link>
        <Link to="/signup" className="nav-link sign-up">Sign Up</Link>
        <ThemeToggle /> {/* Keep only one theme toggle */}
      </nav>
    </header>
  );
}

export default Header;