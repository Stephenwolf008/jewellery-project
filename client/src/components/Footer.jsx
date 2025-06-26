import React from "react";
import "../styles/HeaderFooter.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer font-sans">
      <div className="container-max footer-inner">
        <div className="footer-grid">
          {/* About */}
          <div className="footer-section">
            <h3 className="footer-title">About Us</h3>
            <p className="footer-text">
              Jewelry Boutique offers handcrafted elegance inspired by timeless
              beauty. Each piece tells a story of art, love, and craftsmanship.
            </p>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <p className="footer-text">Email: hello@jewelryboutique.com</p>
            <p className="footer-text">Phone: +1 (234) 567-8901</p>
            <p className="footer-text">Location: New York, NY</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Jewelry Boutique. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
