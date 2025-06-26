import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedMetal, setSelectedMetal] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setSelectedMetal(res.data.metal);
        setSelectedType(res.data.type);
        setLoading(false);
      })
      .catch((err) => {
        setError("Product not found. " + err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <p className="text-center mt-20 text-softGray">Loading product...</p>
    );
  }

  if (error) {
    return <p className="text-center mt-20 text-red-500">{error}</p>;
  }

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart`);
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-10  ">
          {/* Left column: Images */}
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex gap-4">
              <img
                src={"/images/Ring.jpeg"}
                alt={product.name + " 1"}
                className="w-1/2 h-32 rounded-xl shadow-md object-cover"
              />
              <img
                src={"/images/Ring.jpeg"}
                alt={product.name + " 2"}
                className="w-1/2 h-32 rounded-xl shadow-md object-cover"
              />
            </div>
            <img
              src={"/images/Ring.jpeg"}
              alt={product.name + " main"}
              className="w-full h-48 rounded-xl shadow-md object-cover"
            />
          </div>

          {/* Right column: Product Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-deepTeal">{product.name}</h1>

            <p className="text-softGray text-lg">{product.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-softGray">
              <span className="bg-lightSilver/40 px-3 py-1 rounded">
                Category: {product.category}
              </span>
              <span className="bg-lightSilver/40 px-3 py-1 rounded">
                Metal: {product.metal}
              </span>
              <span className="bg-lightSilver/40 px-3 py-1 rounded">
                Type: {product.type}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Metal
                </label>
                <select
                  value={selectedMetal}
                  onChange={(e) => setSelectedMetal(e.target.value)}
                  className="w-full border border-lightSilver px-3 py-2 rounded-md"
                >
                  <option value={product.metal}>{product.metal}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full border border-lightSilver px-3 py-2 rounded-md"
                >
                  <option value={product.type}>{product.type}</option>
                </select>
              </div>
            </div>

            <div className="w-32">
              <label className="block text-sm font-semibold mb-1">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-full border border-lightSilver px-3 py-2 rounded-md"
              />
            </div>

            <p className="text-3xl text-warmGold font-bold">${totalPrice}</p>

            <button
              onClick={handleAddToCart}
              className="mt-4 bg-deepTeal text-white px-6 py-3 rounded-xl hover:bg-opacity-90 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
