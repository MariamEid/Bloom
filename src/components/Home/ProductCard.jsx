import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();       // pulls addToCart from CartContext
  const navigate = useNavigate();         // lets us navigate to another page
  const [added, setAdded] = useState(false);

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);  // goes to ProductDetails page
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // prevents card click from firing when button is clicked
    addToCart(product);
    setAdded(true);
  };

  // useEffect watches "added" - when it becomes true, starts a timer to set it back to false after 2 seconds
  useEffect(() => {
    if (added) {
      const timer = setTimeout(() => setAdded(false), 3000);
      return () => clearTimeout(timer); // cleanup: cancels timer if component unmounts
    }
  }, [added]);

  return (
    <div className="product-card" style={{ alignSelf: "start" }} onClick={handleCardClick}>
      <img src={product.image} alt={product.name} className="product-img" />
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          {added ? "✓ Added!" : "🛒 Add to cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;