// backend/models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  metal: String,
  type: String,
});

module.exports = mongoose.model("Product", productSchema);
