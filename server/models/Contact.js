// models/Contact.js
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    reasonForContact: { type: String, trim: true },
    preferredContactMethod: { type: String, trim: true },
    budgetRange: { type: String, trim: true },
    source: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
    personaTag: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
