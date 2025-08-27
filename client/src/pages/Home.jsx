import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Elegant Diamond Ring",
      price: "$499",
      img: "/images/ring.jpg",
    },
    {
      id: 2,
      name: "Gold Necklace",
      price: "$799",
      img: "/images/necklace.jpg",
    },
    {
      id: 3,
      name: "Pearl Earrings",
      price: "$299",
      img: "/images/earrings.jpg",
    },
    {
      id: 4,
      name: "Luxury Bracelet",
      price: "$399",
      img: "/images/bracelet.jpg",
    },
  ];

  return (
    <div className="home">
      <Header />

      {/* Hero Banner */}
      <section className="hero-banner">
        <video
          className="hero-video"
          src="/videos/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay">
          <h1 className="hero-title animated">✨ Discover Timeless Jewelry</h1>
          <p className="hero-subtitle">
            Handcrafted elegance for every occasion. Explore our exquisite
            collection of rings, necklaces, and more.
          </p>
          <Link to="/shop" className="hero-button">
            🛍️ Start Shopping
          </Link>
        </div>
      </section>

      {/* Carousel */}
      <section className="carousel-section">
        <h2 className="section-title">🌟 Best Sellers</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="carousel-card">
                <img
                  src={product.img}
                  alt={product.name}
                  className="carousel-image"
                />
                <div className="carousel-info">
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                  <Link to="/shop" className="carousel-button">
                    View Product
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Enhanced CTA */}
      <section className="cta-section">
        <div className="cta-overlay">
          <h2>🎁 The Perfect Gift Awaits</h2>
          <p>
            Celebrate life’s precious moments with jewelry crafted to last
            forever. From engagements to anniversaries, find your perfect symbol
            of love.
          </p>
          <Link to="/shop" className="cta-button">
            ✨ Explore Collections
          </Link>
        </div>
      </section>

      {/* New Section: Featured Video Story */}
      <section className="story-section">
        <div className="story-content">
          <h2>💍 The Art of Craftsmanship</h2>
          <p>
            Every piece in our collection is handcrafted by skilled artisans,
            blending timeless traditions with modern elegance. Watch how your
            jewelry comes to life.
          </p>
        </div>
        <div className="story-video">
          <video src="/videos/craft.mp4" autoPlay loop muted playsInline />
        </div>
      </section>

      {/* New Section: Image + Text Split */}
      <section className="luxury-section">
        <div className="luxury-image">
          <img src="/images/luxury.jpg" alt="Luxury Jewelry" />
        </div>
        <div className="luxury-text">
          <h2>🌹 Luxury Meets Elegance</h2>
          <p>
            Our designs are inspired by timeless beauty and modern
            sophistication. Each creation is more than just jewelry—it’s a
            statement of identity.
          </p>
          <Link to="/about" className="luxury-button">
            Learn More
          </Link>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="trust-banner">
        <h2 className="trust-title">Why Shop With Us?</h2>
        <div className="trust-grid">
          <div className="trust-card">
            <span className="trust-icon">✨</span>
            <h3>100% Handmade</h3>
            <p>
              Each piece is carefully crafted by our skilled artisans with love
              and detail.
            </p>
          </div>
          <div className="trust-card">
            <span className="trust-icon">🚚</span>
            <h3>Free Shipping</h3>
            <p>
              Enjoy complimentary shipping on all orders above $100, delivered
              securely.
            </p>
          </div>
          <div className="trust-card">
            <span className="trust-icon">🔒</span>
            <h3>Secure Checkout</h3>
            <p>
              Your payment is safe with our encrypted and trusted checkout
              system.
            </p>
          </div>
          <div className="trust-card">
            <span className="trust-icon">💎</span>
            <h3>Premium Quality</h3>
            <p>
              We guarantee the highest quality gemstones and precious metals.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
