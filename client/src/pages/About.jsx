import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page">
      <Helmet>
        <meta
          name="description"
          content="Learn about our story, values, artisans, and the timeless craftsmanship behind our luxury jewelry collections."
        />
        <meta
          name="keywords"
          content="Jewelry, Luxury, Handmade Jewelry, Craftsmanship, Artisans, Elegant Jewelry"
        />
      </Helmet>

      <Header />

      {/* Intro */}
      <section className="about-hero fade-in">
        <h1 className="text-4xl font-serif mb-4">Our Story</h1>
        <p className="text-lg max-w-2xl mx-auto text-softGray">
          At Caratelle, we believe jewelry is more than an accessory—it is a
          reflection of elegance, legacy, and everlasting brilliance. With a
          deep passion for diamonds, we craft pieces that embody sophistication
          and celebrate life’s most precious milestones. Our promise lies in
          ethical sourcing, unmatched craftsmanship, and timeless design. Every
          Caratelle creation is a perfect balance of tradition and modern
          artistry, designed to be cherished for generations. Caratelle is not
          just jewelry—it is a story of brilliance, love, and legacy.
        </p>
      </section>

      {/* Artisans Section */}
      <section className="artisans-section slide-up">
        <h2 className="section-title">Meet Our Artisans</h2>
        <p className="section-description">
          Behind each creation is a master artisan—bringing decades of
          experience, skill, and soul into the jewelry you wear.
        </p>
        <div className="artisan-grid">
          <div className="artisan-card">
            <img src="/images/Artisan.jpg" alt="Master Artisan - Lila" />
            <h3>Lila Sharma</h3>
            <p>Specialist in Handcrafted Filigree</p>
          </div>
          <div className="artisan-card">
            <img src="/images/Artisan.jpg" alt="Master Artisan - Ravi" />
            <h3>Ravi Verma</h3>
            <p>Goldsmith & Designer for 20+ years</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section fade-in">
        <h2 className="section-title">Our Journey</h2>
        <ul className="timeline">
          <li>
            <strong>2010</strong> – Brand founded with vision for elegant
            handcrafted jewelry
          </li>
          <li>
            <strong>2014</strong> – Opened our first design studio
          </li>
          <li>
            <strong>2018</strong> – Launched signature gemstone collection
          </li>
          <li>
            <strong>2023</strong> – Became a global brand shipping worldwide
          </li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section slide-up">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              "Absolutely stunning craftsmanship. My engagement ring is one of a
              kind!"
            </p>
            <span>– Amrita K.</span>
          </div>
          <div className="testimonial-card">
            <p>
              "I receive compliments every time I wear your necklace. Thank you
              for the elegance!"
            </p>
            <span>– Meera J.</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
