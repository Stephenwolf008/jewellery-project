import React from "react";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer font-sans">
      <div className="footer-inner container-max">
        <div className="footer-grid">
          {/* About */}
          <div className="footer-section">
            <h3 className="footer-title">Jewelry Boutique</h3>
            <p className="footer-text">
              Handcrafted elegance inspired by timeless beauty. Each piece tells
              a story of art, love, and craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="footer-section">
            <h3 className="footer-title">Customer Care</h3>
            <ul className="footer-links">
              <li>
                <NavLink to="/faq">FAQs</NavLink>
              </li>
              <li>
                <NavLink to="/shipping">Shipping & Returns</NavLink>
              </li>
              <li>
                <NavLink to="/privacy">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/terms">Terms & Conditions</NavLink>
              </li>
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div className="footer-section">
            <h3 className="footer-title">Stay Connected</h3>
            <p className="footer-text">
              Subscribe for exclusive offers & updates.
            </p>
            <form className="footer-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-input"
              />
              <button type="submit" className="footer-btn">
                Subscribe
              </button>
            </form>
            <div className="footer-social">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Jewelry Boutique. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
