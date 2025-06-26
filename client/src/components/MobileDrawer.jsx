import React from "react";
import { Link } from "react-router-dom";

export default function MobileDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="w-64 bg-white h-full p-4">
        <button onClick={onClose} className="text-xl mb-4">
          ✕
        </button>
        <nav className="flex flex-col space-y-4">
          <Link to="/" onClick={onClose}>
            Home
          </Link>
          <Link to="/shop" onClick={onClose}>
            Shop
          </Link>
          <Link to="/about" onClick={onClose}>
            About
          </Link>
          <Link to="/contact" onClick={onClose}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
