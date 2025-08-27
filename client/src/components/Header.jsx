import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-inner">
        {/* Left Nav */}
        <div className="left-nav">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Shop
          </NavLink>
        </div>

        {/* Brand Centered */}
        <h1 className="brand">Caratelle Bespoke</h1>

        {/* Right Nav */}
        <div className="right-nav">
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Contact
          </NavLink>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>
          ✕
        </button>
        <NavLink
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            `mobile-link ${isActive ? "active" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            `mobile-link ${isActive ? "active" : ""}`
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            `mobile-link ${isActive ? "active" : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            `mobile-link ${isActive ? "active" : ""}`
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
