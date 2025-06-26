// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const contactRoutes = require("./Routes/contact");

dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["https://jewellery-project-fyfx.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());

// Conditionally load Stripe
let stripe;
if (process.env.STRIPE_ENABLED && process.env.STRIPE_SECRET_KEY) {
  stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
} else {
  console.warn(
    "⚠️ STRIPE_SECRET_KEY not provided. Stripe functionality is disabled."
  );
}

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ Mongo error:", err));

// Models
const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    category: String,
    metal: String,
    type: String,
  })
);

// Routes
app.use("/api/contact", contactRoutes);

app.get("/api/test", (req, res) => {
  console.log("✅ /api/test was hit");
  res.send("🧪 Backend working fine");
});

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
});

// ✅ Get a single product by ID
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ message: "Error fetching product" });
  }
});

app.post("/api/checkout", async (req, res) => {
  if (!stripe || process.env.STRIPE_ENABLED !== "true") {
    console.log("🧪 Stripe payment skipped (dev mode or not configured)");
    return res.json({ url: "/success" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body.items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: "https://yourdomain.com/success",
      cancel_url: "https://yourdomain.com/cancel",
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ message: "Stripe checkout failed" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
console.log("PORT from env:", process.env.PORT);
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
