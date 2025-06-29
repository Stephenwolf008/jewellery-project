// Contact.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reasonForContact: "",
    preferredContactMethod: "",
    budgetRange: "",
    source: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await axios.post("http://localhost:5001/api/contact", formData);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        reasonForContact: "",
        preferredContactMethod: "",
        budgetRange: "",
        source: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="contact-page">
      <Header />

      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          We're here to help. Whether you have a question or need support, we'd
          love to hear from you.
        </p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Reason for Contact */}
          <div className="form-group">
            <label htmlFor="reasonForContact">Reason for Contact</label>
            <select
              id="reasonForContact"
              name="reasonForContact"
              value={formData.reasonForContact}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="custom-design">Custom Design</option>
              <option value="product-inquiry">Product Inquiry</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Preferred Contact Method */}
          <div className="form-group">
            <label htmlFor="preferredContactMethod">
              Preferred Contact Method
            </label>
            <select
              id="preferredContactMethod"
              name="preferredContactMethod"
              value={formData.preferredContactMethod}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>

          {/* Budget Range */}
          <div className="form-group">
            <label htmlFor="budgetRange">Budget Range</label>
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="Under $500">Under $500</option>
              <option value="$500 - $1000">$500 - $1000</option>
              <option value="Above $1000">Above $1000</option>
            </select>
          </div>

          {/* Source */}
          <div className="form-group">
            <label htmlFor="source">How did you hear about us?</label>
            <input
              id="source"
              name="source"
              type="text"
              value={formData.source}
              onChange={handleChange}
              placeholder="e.g. Instagram, Friend, Google"
            />
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <p style={{ color: "green", marginTop: "1rem" }}>
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "red", marginTop: "1rem" }}>
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </section>

      <Footer />
    </div>
  );
}
