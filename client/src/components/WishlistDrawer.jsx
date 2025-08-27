import React from "react";
import { Link } from "react-router-dom";
import "../styles/WishlistDrawer.css";

export default function WishlistDrawer({ isOpen, onClose, wishlist }) {
  return (
    <div className={`wishlist-drawer ${isOpen ? "open" : ""}`}>
      <div className="wishlist-header">
        <h2>❤️ Your Wishlist</h2>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
      {wishlist.length === 0 ? (
        <p className="empty-text">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.img} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="wishlist-footer">
        <Link to="/shop" className="wishlist-shop-btn" onClick={onClose}>
          🛍️ Go to Shop
        </Link>
      </div>
    </div>
  );
}
