import { useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductsSection.css";
import products from "../../data/products";

// categories list for the filter buttons
const categories = ["All Flowers", "Birthday", "Love", "Apology", "Congratulations"];

function ProductsSection() {
  // useState tracks which category button is currently selected
  const [selectedCategory, setSelectedCategory] = useState("All Flowers");

  // filtering logic: if "All Flowers" is selected show everything, otherwise filter by category
  const filteredProducts = selectedCategory === "All Flowers"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="products-section" id="products">
      <h2 className="products-title">Shop by occasion</h2>

      {/* filter buttons - clicking one updates selectedCategory via useState */}
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* mapping through filteredProducts and passing each one as a prop to ProductCard */}
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;