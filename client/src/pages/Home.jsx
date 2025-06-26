// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <Header />

      {/* Hero Banner */}
      <section className="hero-banner">
        <h1 className="hero-title animated">Discover Timeless Jewelry</h1>
        <p className="hero-subtitle">
          Handcrafted elegance for every occasion. Explore our exquisite
          collection of rings, necklaces, and more.
        </p>
        <Link to="/shop" className="hero-button">
          🛍️ Start Shopping
        </Link>
      </section>

      {/* Carousel */}
      <section className="carousel-section">
        <div className="carousel-track">
          {[1, 2, 3, 1, 2, 3].map((i, idx) => (
            <img
              key={idx}
              src={`/images/Ring.jpeg`}
              alt={`Jewelry ${i}`}
              className="carousel-image"
            />
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta-section">
        <h2>Find the Perfect Gift</h2>
        <p>Let your loved ones shine with elegant handcrafted pieces.</p>
        <Link to="/shop" className="cta-button">
          🎁 Explore Collections
        </Link>
      </section>

      {/* Trust Banner */}
      <section className="trust-banner">
        <div className="trust-item">✨ 100% Handmade</div>
        <div className="trust-item">🚚 Free Shipping Over $100</div>
        <div className="trust-item">🔒 Secure Checkout</div>
      </section>

      <Footer />
    </div>
  );
}
