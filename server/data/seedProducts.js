// backend/data/seedProducts.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/Product");
dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
  seedData();
});

async function seedData() {
  await Product.deleteMany();

  const metals = ["Gold", "Silver", "Platinum"];
  const types = ["Ring", "Necklace", "Bracelet", "Earrings"];
  const categories = ["Wedding", "Casual", "Festive", "Luxury"];

  const products = [];

  for (let i = 1; i <= 200; i++) {
    const metal = metals[i % metals.length];
    const type = types[i % types.length];
    const category = categories[i % categories.length];

    products.push({
      name: `${metal} ${type} #${i}`,
      description: `Elegant handcrafted ${metal.toLowerCase()} ${type.toLowerCase()} perfect for ${category.toLowerCase()} occasions.`,
      price: Math.floor(Math.random() * 400) + 100, // $100–$500
      image: `/images/products/${type.toLowerCase()}-${(i % 10) + 1}.jpg`,
      metal,
      type,
      category,
    });
  }

  await Product.insertMany(products);
  console.log("✅ Seeded 200 products");
  process.exit();
}
