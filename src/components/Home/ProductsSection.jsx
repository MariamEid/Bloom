import { useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductsSection.css";
import products from "../../data/products";

// categories list for the filter buttons
// defined outside the component so it doesn't get recreated on every render
const categories = ["All Flowers", "Birthday", "Love", "Apology", "Congratulations"];

function ProductsSection() {
  // useState tracks which category button is currently selected
  // selectedCategory tracks which filter button is currently active
  // starts with "All Flowers" so all products show by default
  const [selectedCategory, setSelectedCategory] = useState("All Flowers");

  // filtering logic: if "All Flowers" is selected show everything, otherwise filter by category
  const filteredProducts = selectedCategory === "All Flowers"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    // id="products" is used by the navbar and hero button to scroll to this section
    <section className="products-section" id="products">
      <h2 className="products-title">Shop by occasion</h2>

      {/* filter buttons - clicking one updates selectedCategory via useState */}
      {/* filter buttons row - maps through the categories array to create a button for each one */}
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}  // key helps React track each button in the list
            // if this category is the selected one, add "active" class to highlight it
            className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
            
            // clicking a button updates selectedCategory which re-filters the products
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