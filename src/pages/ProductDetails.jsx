import "./ProductDetails.css";
import flowersImg from "../assets/flowers1.jpg";
import { useState } from "react";

const ProductDetails = () => {

  const [quantity, setQuantity] = useState(1);
  const increase = () => setQuantity(quantity + 1);
  const decrease = () => { if (quantity > 1) setQuantity(quantity - 1); };

  return (
    <div className="product-details">
      <div className="product-container">

        <button className="back-link">← Back</button>

        <div className="product-layout">

          {/* Left column - Image */}
          <div className="product-image">
            <img src={flowersImg} alt="Pink and Orange Rose Bouquet" />
          </div>

          {/* Right column - Product info */}
          <div className="product-info">
            <h2 className="product-category">Love</h2>
            <h1 className="product-name">Pink & Orange Rose Bouquet</h1>
            <div className="product-price">$49.99</div>

            <p className="product-description">
              A stunning arrangement of pink and orange roses, perfect for expressing love and admiration.
            </p>

            {/* Features */}
            <div className="features-section">
              <h3>Features</h3>
              <ul className="features-list">
                <li>Fresh cut roses</li>
                <li>Hand-arranged</li>
                <li>Includes care instructions</li>
                <li>Free delivery</li>
              </ul>
            </div>

            {/* Quantity */}
            <div className="quantity-selector">
              <button className="quantity-minus" onClick={decrease}>−</button>
              <span className="quantity-value">{quantity}</span>
              <button className="quantity-plus" onClick={increase}>+</button>
            </div>

            {/* Buttons */}
            <div className="action-buttons">
              <button className="add-to-cart">🛒 Add to Cart</button>
              <button className="customize-message">Customize Message</button>
            </div>

            {/* Delivery */}
            <div className="delivery-info">
              <strong>Delivery Information</strong>
              <p>Same-day delivery available for orders placed before 2 PM</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;