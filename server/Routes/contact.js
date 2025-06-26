// routes/contact.js
const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      reasonForContact,
      preferredContactMethod,
      budgetRange,
      message,
      source,
    } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required." });
    }

    // Persona tagging logic
    let personaTag = "General";
    if (reasonForContact === "custom-design" && budgetRange === "Above $1000") {
      personaTag = "Luxury Buyer";
    } else if (reasonForContact === "product-inquiry") {
      personaTag = "Active Shopper";
    } else if (reasonForContact === "partnership") {
      personaTag = "Influencer/Partner";
    }

    const newEntry = new Contact({
      name,
      email,
      phone,
      reasonForContact,
      preferredContactMethod,
      budgetRange,
      message,
      source,
      personaTag,
    });

    await newEntry.save();
    res.status(200).json({ message: "Message received. Thank you!" });
  } catch (err) {
    console.error("Contact form submission error:", err);
    res
      .status(500)
      .json({ error: "Something went wrong. Please try again later." });
  }
});

module.exports = router;
