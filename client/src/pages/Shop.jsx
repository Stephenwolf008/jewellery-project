import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Shop.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Pagination } from "antd";
import "antd/dist/reset.css";
import SearchBar from "@/components/SearchBar";

import { Link } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const productsPerPage = 15;

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/products")
      .then((res) => setProducts(res.data));
  }, []);

  // Filter products based on search query (show all if empty)
  const filteredProducts = searchQuery.trim()
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  // Sort filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price") return a.price - b.price;
    if (sort === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Reset page to 1 when search or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sort]);

  return (
    <div className="shop-page">
      <Header />

      <main className="container-max px-4 sm:px-6 lg:px-8">
        <div className="catalog-header flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="w-1/3 max-w-sm">
            <SearchBar products={products} onSearchChange={setSearchQuery} />
          </div>

          <div className="flex items-center space-x-2">
            <label htmlFor="sort" className="text-sm font-medium text-softGray">
              Sort by:
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-lightSilver rounded px-2 py-1 text-sm font-sans"
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>

        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <Link
                key={product._id}
                to={`/product/${product._id}`}
                className="product-card border border-lightSilver rounded-md p-4 shadow-sm hover:shadow-lg transition block"
              >
                <img
                  src={"/images/Ring.jpeg"}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-3 rounded"
                />
                <h3 className="font-semibold text-deepTeal text-lg mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-softGray mb-2">
                  {product.description}
                </p>
                <div className="product-meta flex gap-4 text-xs text-softGray mb-3">
                  <span>{product.category}</span>
                  <span>{product.metal}</span>
                </div>
                <p className="product-price text-warmGold font-bold text-lg">
                  ${product.price.toFixed(2)}
                </p>
              </Link>
            ))
          ) : (
            <p className="text-center text-softGray col-span-full mt-12">
              No products match your search.
            </p>
          )}
        </div>

        {/* Pagination using Ant Design */}
        <div className="flex justify-center mt-8">
          <Pagination
            current={currentPage}
            total={sortedProducts.length}
            pageSize={productsPerPage}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
            className="text-deepTeal"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
